import SearchForm from "./SearchForm";
import SearchCard from "./SearchCard";

const SearchContainer = () => {
  return (
    <div className="h-screen w-screen grid place-items-center ">
      <div
        className="h-3/4 w-1/2 bg-gray-100 drop-shadow-2xl

"
      >
        <SearchForm />
        <SearchCard />
      </div>
    </div>
  );
};

export default SearchContainer;
