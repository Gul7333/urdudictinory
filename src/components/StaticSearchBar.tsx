// app/components/StaticSearchBar.tsx (Server Component — static)
export default function StaticSearchBar() {
    return (
      <form
        action={(formData) => {
          "use server";
          const query = formData.get("query") as string;
          // In real export builds, this should just redirect via client or static routing
        }}
        className="mt-5 flex flex-col items-center gap-2 px-6 relative"
      >
        <input
          type="search"
          name="query"
          placeholder="یہاں سرچ کریں"
          className="p-3 py-4 border border-gray-300 rounded w-full md:w-2/3 text-right font-urdu"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>
    );
  }
  