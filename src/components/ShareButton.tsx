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
      className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition flex items-center justify-center"
      aria-label="Share"
    >
      {copied ? (
      <span className="text-xs">✔</span>
      ) : (
      // Social media style share icon (three connected dots)
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <circle cx="5" cy="12" r="2" fill="currentColor"/>
        <circle cx="19" cy="5" r="2" fill="currentColor"/>
        <circle cx="19" cy="19" r="2" fill="currentColor"/>
        <line x1="7" y1="12" x2="17" y2="6" stroke="currentColor" strokeWidth="2"/>
        <line x1="7" y1="12" x2="17" y2="18" stroke="currentColor" strokeWidth="2"/>
      </svg>
      )}
    </button>
  );
}
