type SearchBarProps = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
};

export default function SearchBar({
  searchTerm,
  setSearchTerm,
}: SearchBarProps) {
  return (
    <div className="flex justify-center mt-10 gap-4">
      <input
        type="text"
        placeholder="Search jobs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-3 rounded-lg w-96 shadow-sm"
      />

      <button className="bg-blue-600 text-white px-6 rounded-lg">
        Search
      </button>
    </div>
  );
}