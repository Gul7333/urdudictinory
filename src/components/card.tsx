import React from "react";

function safeJsonParse<T>(
  value: string | any[] | null | undefined,
  fallback: T
): T {
  try {
    if (Array.isArray(value)) return value as T;
    if (typeof value === "string") return JSON.parse(value);
    return fallback;
  } catch {
    return fallback;
  }
}

export default function FullCard({ item }: { item: JsonData }) {
  const details = item[4];

  const meaningtitles: string[] = safeJsonParse(details.meaningstitles, []);
  const meaningdetails: string[] = safeJsonParse(details.meaningdetails, []);
  const noun: string[] = safeJsonParse(details.noun, []);
  const nountypes: string[] = safeJsonParse(details.nountypes, []);

  return (
    <article className="font-urdu text-right leading-loose px-4 py-6">
      <header>
      <h1 className="text-3xl text-center font-bold">{item[1]} کے معنی</h1>
      <p className="text-center text-gray-600 dark:text-gray-300">
        {item[1]} کے معنی ، تشریح، مترادف اور تفصیل
      </p>
      </header>

      <p className="text-center text-gray-600">{details.spelling}</p>

      <section aria-labelledby="description">
        <h2 id="description" className="text-xl text-blue-700 dark:bg-blue-400 font-bold mt-6">
          تفصیلات
        </h2>
        <p>{item[3]}</p>
        <p className="text-sm text-gray-600">{details.origin}</p>
      </section>

      {noun.length > 0 && (
        <section aria-labelledby="noun">
          <h2 id="noun" className="text-xl text-blue-700  dark:text-blue-400 font-bold mt-4">
            اسم
          </h2>
          <p className="text-red-700">{noun.join(", ")}</p>
        </section>
      )}

      {nountypes.length > 0 && (
        <section aria-labelledby="nountypes">
          <h2 id="nountypes" className="text-xl text-blue-700  dark:text-blue-400 font-bold mt-4">
            اقسام اسم
          </h2>
          <ul className="list-disc pr-5 text-blue-600  dark:text-blue-500 text-right " dir="rtl">
            {nountypes.map((type, idx) => (
              <li key={idx}>{type}</li>
            ))}
          </ul>
        </section>
      )}

      {meaningtitles.length > 0 && (
        <section aria-labelledby="meanings">
          <h2 id="meanings" className="text-xl text-blue-700  dark:text-blue-400 font-bold mt-4">
            {item[1]} کے معنی
          </h2>
          {meaningtitles.map((title, idx) => (
            <div key={idx} className="mb-2">
              <span className="text-red-600 dark:text-red-400 block font-semibold">{title}</span>
              <p>{meaningdetails[idx]}</p>
            </div>
          ))}
        </section>
      )}

      {Array.isArray(details.alternatives) &&
        details.alternatives.length > 0 && (
          <section aria-labelledby="alternatives">
            <h2
              id="alternatives"
              className="text-xl text-blue-700 dark:text-blue-400 font-bold mt-4"
            >
              {item[1]} کے مترادف
            </h2>
            <p>{details.alternatives.join(", ")}</p>
            <p>{details?.alternative?.join(", ")}</p>
          </section>
        )}

      {Array.isArray(details.compounds) && details.compounds.length > 0 && (
        <section aria-labelledby="compounds">
          <h2 id="compounds" className="text-xl text-blue-700 dark:text-blue-400 font-bold mt-4">
            {item[1]} کے جملے اور مرکبات
          </h2>
          <p>{details.compounds.join(", ")}</p>
        </section>
      )}

      {details.english && (
        <section aria-labelledby="english">
          <h2 dir="ltr" id="english" className="text-xl text-blue-700 dark:bg-blue-400 font-bold mt-4">
            {item[1]} english meaning
          </h2>
          <p dir="ltr">{details.english}</p>
        </section>
      )}

      {Array.isArray(details.poetry) && details.poetry.length > 0 && (
        <section aria-labelledby="poetry">
          <h2 id="poetry" className="text-xl text-blue-700 dark:text-blue-400 font-bold mt-4">
            شاعری
          </h2>
          <ul className="list-disc pr-5">
            {details.poetry.map((line, idx) => (
              <li key={idx}>
                {line.split(/<br\s*\/?>/).map((part, i, arr) => (
                  <React.Fragment key={i}>
                    {part}
                    {i < arr.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </li>
            ))}
          </ul>
        </section>
      )}

      {Array.isArray(details.idioms) && details.idioms.length > 0 && (
        <section aria-labelledby="idioms">
          <h2 id="idioms" className="text-xl text-blue-700 dark:text-blue-400 font-bold mt-4">
            محاورات
          </h2>
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
