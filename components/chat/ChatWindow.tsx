"use client";

// components/chat/ChatWindow.tsx
import React, { useRef, useState } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import { v4 as uuidv4 } from "uuid";

import { useSystemStore } from "@/store/systemStore";
import { PXISystem } from "@/lib/pxi-data/types";

interface AIResponse {
  reply: string;
  systemUpdate: PXISystem;
}

// This defines the shape of each chat message
type Message = {
  id: string;
  sender: "user" | "bot";
  text: string;
  time?: string;
};

export default function ChatWindow() {
  // All chat messages are stored in this array
  const [messages, setMessages] = useState<Message[]>([
    {
      id: uuidv4(),
      sender: "bot",
      text: "Welcome — describe the PXIe system you want to build.",
    },
  ]);

  // What user types in the input box
  const [input, setInput] = useState("");

  // Shows “Thinking…” while backend replies
  const [isLoading, setIsLoading] = useState(false);

  // To scroll chat window to bottom
  const listRef = useRef<HTMLDivElement | null>(null);

  function scrollBottom() {
    requestAnimationFrame(() => {
      if (listRef.current) {
        listRef.current.scrollTop = listRef.current.scrollHeight;
      }
    });
  }

  // Called when user presses “Send”
  async function sendMessage() {
    const trimmed = input.trim();
    if (!trimmed) return;

    // 1. Add user message
    const userMsg: Message = {
      id: uuidv4(),
      sender: "user",
      text: trimmed,
      time: new Date().toISOString(),
    };

    setMessages((old) => [...old, userMsg]);
    setInput("");
    scrollBottom();



    // 2. Call backend
    setIsLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });

      // --- FIX: Only call res.json() once ---
      // const payload: AIResponse = await res.json();

      //const text = await res.text();

      // Extract anything inside `{ ... }`
      //const jsonString = text.substring(text.indexOf("{"));

      // const payload: AIResponse = JSON.parse(jsonString);


      //       // 3. Add AI message to chat
      //       const botMsg: Message = {
      //         id: uuidv4(),
      //         sender: "bot",
      //         text: payload.reply ?? "",
      //         time: new Date().toISOString(),
      //       };

      //       setMessages((old) => [...old, botMsg]);
      //       scrollBottom();



      // console.log("This is payload",payload);
      // console.log("This is payload.systemUpdate",payload.systemUpdate);

      // --- FIX: extract JSON from mixed text ---
      const raw = await res.text();

      // Match the FIRST valid JSON object in the text
      const match = raw.match(/\{[\s\S]*\}/);

      if (!match) {
        console.error("No JSON found in API response:", raw);
        throw new Error("JSON_NOT_FOUND");
      }

      const jsonString = match[0];
      const payload: AIResponse = JSON.parse(jsonString);
      // -----------------------------------------

      // 3. Add AI message to chat
      const botMsg: Message = {
        id: uuidv4(),
        sender: "bot",
        text: payload.reply ?? "",
        time: new Date().toISOString(),
      };

      setMessages((old) => [...old, botMsg]);
      scrollBottom();

      // ---------- APPLY systemUpdate TO STORE ----------
      const update = payload.systemUpdate;
      const store = useSystemStore.getState();

      if (update?.chassis) {
        store.setSystem({
          chassis: {
            model: update.chassis.model ?? null,
            slots: update.chassis.slots ?? null,
            slotDetails: update.chassis.slotDetails ?? null,
          }
        });
      }

      if (update?.controller) {
        store.setSystem({
          controller: {
            model: update.controller.model ?? null,
            type: update.controller.type ?? null,
            processor: update.controller.processor ?? null,
            ram: update.controller.ram ?? null,
            storage: update.controller.storage ?? null,
          }
        });
      }

      if (update?.modules?.length) {
        // Fix: Replace modules instead of appending to avoid duplicates/memory leak
        const newModules = update.modules.map((mod: any) => ({
          id: uuidv4(), // Generate new IDs for the snapshot
          model: mod.model,
          type: mod.type,
          slot: mod.slot ?? null,
          bandwidth: mod.bandwidth ?? null,
          busType: mod.busType ?? null,
          voltage: mod.voltage ?? null,
          channels: mod.channels ?? null,
          specDetails: mod.specDetails ?? null,
        }));

        store.setSystem({
          modules: newModules
        });
      }
      // --------------------------------------------------

      // ----------------------------------------------

    } catch (err) {
      const errMsg: Message = {
        id: uuidv4(),
        sender: "bot",
        text: "Error: failed to get response.",
        time: new Date().toISOString(),
      };
      setMessages((old) => [...old, errMsg]);
    } finally {
      setIsLoading(false);
    }
  }


  return (
    <div className="flex flex-col h-full bg-white border-r border-slate-200">
      {/* Chat Messages */}
      <div ref={listRef} className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((m) => (
          <ChatMessage key={m.id} message={m} />
        ))}
      </div>

      {/* Loading indicator */}
      {isLoading && (
        <div className="p-2 text-center text-slate-500 text-sm italic animate-pulse">
          Thinking...
        </div>
      )}

      {/* Input box and send button */}
      <ChatInput
        value={input}
        onChange={setInput}
        onSend={sendMessage}
        disabled={isLoading}
      />
    </div>
  );
}
