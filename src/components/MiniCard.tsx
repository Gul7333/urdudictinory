import React from "react";

function safeJsonParse<T>(value: string | null | undefined, fallback: T): T {
  try {
    if (!value) return fallback;
    return JSON.parse(value);
  } catch {
    return fallback; 
  }
}

export default function MiniCard({ item }: { item: JsonData }) {
  const details = item[4];

  let meaningtitles: string[] = safeJsonParse(details.meaningstitles, []);
  let meaningdetails: string[] = safeJsonParse(details.meaningdetails, []);

  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-md transition bg-white dark:bg-gray-800 dark:border-gray-700 shadow-sm">
      <strong className="text-xl font-bold text-right font-urdu dark:text-white">
        {item[1]}
      </strong>
      <p className="text-sm text-gray-600 dark:text-gray-300 text-right mt-1">
        {meaningdetails[0] || "کوئی مطلب موجود نہیں"}
      </p>
    </div>
  );
}