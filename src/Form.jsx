import { useContext } from "react";
import { AppContext } from "./App";

const Form = () => {
  const { searchTerm, setSearchTerm, searchCategory, setSearchCategory } =
    useContext(AppContext);

  console.log(searchTerm, searchCategory);

  const resetSearch = () => {
    setSearchTerm("");
    setSearchCategory("");
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="flex gap-3 items-center justify-center">
        <div>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Enter movie title"
            className="border border-black rounded-md px-1 outline-none"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-1">
          <label htmlFor="type">Type</label>
          <select
            name="type"
            id="type"
            className="border border-black rounded-md"
            onChange={(e) => setSearchCategory(e.target.value)}
          >
            <option value="">All</option>
            <option value="movie">movie</option>
            <option value="series">series</option>
            <option value="episode">episode</option>
          </select>
        </div>
      </div>
      <button
        type="reset"
        onClick={resetSearch}
        className="my-4 bg-blue-400 px-2 py-1 rounded-md"
      >
        Reset
      </button>
    </form>
  );
};

export default Form;
