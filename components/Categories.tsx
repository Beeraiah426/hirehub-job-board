type CategoriesProps = {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  setSearchTerm: (value: string) => void;
};

export default function Categories({
  selectedCategory,
  setSelectedCategory,
  setSearchTerm,
}: CategoriesProps) {
  const categories = [
    "All",
    "Java",
    "React",
    "Spring Boot",
    "Python",
    
  ];

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setSearchTerm("");
  };

  return (
    <section className="py-6">
      <h2 className="text-3xl font-bold text-center mb-8">
        Popular Categories
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`px-6 py-3 rounded-full border transition ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
}