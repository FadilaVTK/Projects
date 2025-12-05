export default function SearchBar({ search, setSearch }) {
  return (
    <div className="mb-6">
      <input
        className="
          w-full p-3 rounded-xl
          border border-purple-300 
          bg-white shadow-sm
          focus:ring-2 focus:ring-purple-500
          transition
        "
        placeholder="Search items..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
