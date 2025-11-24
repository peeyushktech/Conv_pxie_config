import React from 'react';

type Message = {
  id: string;
  sender:"user"|"bot";
  text:string;
  time?:string;

};

export default function ChatMessage({message}:{message:Message}){
  const isUser = message.sender ==="user";
  return (
    <div style={{
      display: "flex",
      justifyContent: isUser ? "flex-end" : "flex-start",
      margin: "6px 0"
    }}>
      <div style={{
        maxWidth: "75%",
        padding: "8px 12px",
        borderRadius: 12,
        background: isUser ? "#e6f7ff" : "#f5f5f5",
        boxShadow: "0 1px 0 rgba(0,0,0,0.03)"
      }}>
        <div style={{ fontSize: 14, whiteSpace: "pre-wrap" ,color:'#000000'}}>{message.text}</div>
        {message.time && <div style={{ fontSize: 10, opacity: 0.6, marginTop: 6, textAlign: "right" }}>{new Date(message.time).toLocaleTimeString()}</div>}
      </div>
    </div>
  )
}

