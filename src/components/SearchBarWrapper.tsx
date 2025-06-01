// app/components/SearchBarWrapper.tsx
import StaticSearchBar from "./StaticSearchBar";
import dynamic from "next/dynamic";

const SuggestionEnhancer = dynamic(() => import("./SuggestionEnhancer"), {
  ssr: false,
});

export default function SearchBarWrapper() {
  return (
    <div className="relative w-full md:w-2/3 mx-auto ">
      <StaticSearchBar />
      <SuggestionEnhancer />
    </div>
  );
}
