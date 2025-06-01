import React from "react";
function safeJsonParse<T>(value: string | null | undefined, fallback: T): T {
    try {
      if (!value) return fallback;
      return JSON.parse(value);
    } catch {
      return fallback;
    }
  }
  

export default function FullCard({ item }: { item: JsonData }) {
  const details = item[4];

  const meaningtitles: string[] = safeJsonParse(details.meaningstitles,[])
  const meaningdetails: string[] = safeJsonParse(details.meaningdetails,[])
  const noun: string[] = safeJsonParse(details.noun,[])
  const nountypes: string[] = safeJsonParse(details.nountypes,[])

  

  return (
    <article className="font-urdu text-right leading-loose px-4 py-6">
      <header>
        <h1 className="text-3xl text-center font-bold">{item[1]}</h1>
        <p className="text-center text-gray-600">{details.spelling}</p>
      </header>

      <section aria-labelledby="description">
        <h2 id="description" className="text-xl text-blue-700 font-bold mt-6">تفصیلات</h2>
        <p>{item[3]}</p>
        <p className="text-sm text-gray-600">{details.origin}</p>
      </section>

      {noun.length > 0 && (
        <section aria-labelledby="noun">
          <h2 id="noun" className="text-xl text-blue-700 font-bold mt-4">اسم</h2>
          <p className="text-red-700">{noun.join(", ")}</p>
        </section>
      )}

      {nountypes.length > 0 && (
        <section aria-labelledby="nountypes">
          <h2 id="nountypes" className="text-xl text-blue-700 font-bold mt-4">اقسام اسم</h2>
          <ul className="list-disc pr-5 text-blue-600 text-right " dir="rtl">
            {nountypes.map((type, idx) => (
              <li key={idx}>{type}</li>
            ))}
          </ul>
        </section>
      )}

      {meaningtitles.length > 0 && (
        <section aria-labelledby="meanings">
          <h2 id="meanings" className="text-xl text-blue-700 font-bold mt-4">معنی</h2>
          {meaningtitles.map((title, idx) => (
            <div key={idx} className="mb-2">
              <span className="text-red-600 block font-semibold">{title}</span>
              <p>{meaningdetails[idx]}</p>
            </div>
          ))}
        </section>
      )}

      {Array.isArray(details.alternatives) && details.alternatives.length > 0 && (
        <section aria-labelledby="alternatives">
          <h2 id="alternatives" className="text-xl text-blue-700 font-bold mt-4">مترادف</h2>
          <p>{details.alternatives.join(", ")}</p>
        </section>
      )}

      {Array.isArray(details.compounds) && details.compounds.length > 0 && (
        <section aria-labelledby="compounds">
          <h2 id="compounds" className="text-xl text-blue-700 font-bold mt-4">مرکبات</h2>
          <p>{details.compounds.join(", ")}</p>
        </section>
      )}

      {details.english && (
        <section aria-labelledby="english">
          <h2 id="english" className="text-xl text-blue-700 font-bold mt-4">انگلش</h2>
          <p>{details.english}</p>
        </section>
      )}

      {Array.isArray(details.poetry) && details.poetry.length > 0 && (
        <section aria-labelledby="poetry">
          <h2 id="poetry" className="text-xl text-blue-700 font-bold mt-4">شاعری</h2>
          <ul className="list-disc pr-5">
            {details.poetry.map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}
          </ul>
        </section>
      )}

      {Array.isArray(details.idioms) && details.idioms.length > 0 && (
        <section aria-labelledby="idioms">
          <h2 id="idioms" className="text-xl text-blue-700 font-bold mt-4">محاورات</h2>
          <ul className="list-disc pr-5">
            {details.idioms.map((idiom, idx) => (
              <li key={idx}>{idiom}</li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
