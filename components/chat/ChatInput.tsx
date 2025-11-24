// components/chat/ChatInput.tsx
import React from "react";

export default function ChatInput({
  value,
  onChange,
  onSend,
  disabled = false
}: {
  value: string;
  onChange: (v: string) => void;
  onSend: () => void;
  disabled?: boolean;
}) {
  return (
    <div className="flex gap-2 p-3 border-t border-slate-200 bg-slate-50">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            onSend();
          }
        }}
        placeholder="Type your message..."
        className="flex-1 px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-white shadow-sm"
        disabled={disabled}
      />
      <button
        onClick={onSend}
        disabled={disabled}
        className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm active:scale-95"
      >
        Send
      </button>
    </div>
  );
}
