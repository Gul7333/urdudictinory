"use client";

import { useState } from "react";

export default function ShareButton() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          text : document.querySelector("Header h1")?.textContent || "",
          url,
          
        });
      } catch (error) {
        console.error("Share failed:", error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Copy failed:", err);
      }
    }
  };

  return (
    <button
      onClick={handleShare}
      
      className=" px-4  bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
    >
     
      {copied ? "Copied!" : "Share"}
    </button>
  );
}
