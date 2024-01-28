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
    <form>
      <div>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Enter movie title"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="type">Type</label>
        <select
          name="type"
          id="type"
          onChange={(e) => setSearchCategory(e.target.value)}
        >
          <option value="">All</option>
          <option value="movie">movie</option>
          <option value="series">series</option>
          <option value="episode">episode</option>
        </select>
      </div>
      <button type="reset" onClick={resetSearch}>
        Reset
      </button>
    </form>
  );
};

export default Form;
