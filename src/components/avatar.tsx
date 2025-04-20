// src/components/Avatar.tsx
"use client";

import { useState } from "react";
import CustomChatbot from "./CustomChatbot";

export default function Avatar({ src, clickable }: { src: string; clickable: boolean }) {
  const [showChat, setShowChat] = useState(false);

  return (
    <>
      <img
        src={src}
        onClick={() => clickable && setShowChat(!showChat)}
        className={`rounded-full w-16 h-16 cursor-pointer hover:scale-110 transition-all ${
          clickable ? "ring-2 ring-brand-500" : ""
        }`}
        alt="Avatar"
      />
      {showChat && <CustomChatbot />}
    </>
  );
}