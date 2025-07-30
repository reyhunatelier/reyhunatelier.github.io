export default function SearchInput(dict) {
  return (
    <div className="my-5 px-4 lg:px-8">
      <input
        dir="auto"
        type="search"
        placeholder={dict.searchInputPlaceholder || 'Search...'}
        className="bg-gray-100 w-full rounded-full placeholder:text-gray-300 px-6 py-2.5 outline-0 appearance-none"
      />
    </div>
  )
}