interface SearchBarProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = ({ setSearch }: SearchBarProps) => {
  return (
    <form className="mt-14">
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          className="p-4 pl-10 w-full text-sm text-white bg-background rounded-lg border border-gray-300"
          placeholder="Search ..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </form>
  );
};

export default SearchBar;
