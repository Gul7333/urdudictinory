// src/components/Mainnav.tsx

import Link from "next/link";
// import { usePathname } from "next/navigation";
import SearchBar from "./Searchbar";
const urduAlphabet = [
  "ا",
  "آ",
  "ب",
  "پ",
  "ت",
  "ٹ",
  "ث",
  "ج",
  "چ",
  "ح",
  "خ",
  "د",
  "ڈ",
  "ذ",
  "ر",
  "ڑ",
  "ز",
  "ژ",
  "س",
  "ش",
  "ص",
  "ض",
  "ط",
  "ظ",
  "ع",
  "غ",
  "ف",
  "ق",
  "ک",
  "گ",
  "ل",
  "م",
  "ن",
  "و",
  "ہ",
  "ھ",
  "ء",
  "ی",
  "ے",
];

export default function MainNav() {
  // const pathname = usePathname();
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentLetter =  "";

  return (
<nav className="relative">
  {/* Hidden checkbox toggle */}
  <input type="checkbox" id="menu-toggle" className="hidden" />

  {/* Navbar */}
  <div className="bg-white shadow-md sticky top-0 z-50 px-3">
    <div className="container mx-auto py-3">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold font-urdu text-blue-800">
          اردو زبان لغت
        </Link>

        <label
          htmlFor="menu-toggle"
          className="p-2 rounded-md text-gray-700 hover:bg-gray-100 cursor-pointer"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
      </div>
    </div>

    {/* Dropdown Menu */}
    <div id="dropdown-menu" className="max-h-0 opacity-0 overflow-hidden transition-all duration-300 px-3">
      <div className="grid grid-cols-5 gap-2 mt-4 pb-4">
        {urduAlphabet.map((letter) => (
          <Link
            key={letter}
            href={`/category/${encodeURIComponent(letter)}`}
            className={`text-xl p-2 text-center rounded transition-colors ${
              decodeURIComponent(currentLetter) === letter
                ? "bg-blue-600 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {letter}
          </Link>
        ))}
      </div>
    </div>

    <SearchBar />
  </div>

  {/* Toggle logic */}
  <style>{`
    #menu-toggle:checked ~ div #dropdown-menu {
      max-height: 1000px;
      opacity: 1;
    }
  `}</style>
</nav>



  );
}
