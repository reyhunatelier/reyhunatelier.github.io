export default function SearchInput(dict) {
  return (
    <div className="my-10 px-4" dir="auto">
      <input

        type="search"
        placeholder={dict.searchInputPlaceholder}
        className="bg-gray-100 w-full rounded-full placeholder:text-gray-400 px-5 py-2 outline-0 appearance-none"
      />
    </div>
  )
}