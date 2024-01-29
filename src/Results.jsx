import { useContext, useEffect, useState } from "react";
import { AppContext } from "./App";
// import { Link } from "react-router-dom";
import Axios from "axios";

const Results = () => {
  const { searchTerm, searchCategory, searchResult, setSearchResult } =
    useContext(AppContext);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    searchTerm &&
      Axios.get(
        `http://www.omdbapi.com/?s=${searchTerm}&type=${searchCategory}&apikey=59892195`
      ).then((res) => {
        const result = res.data.Search;
        res.data.Search && setSearchResult([...result]);
        setIsLoading(false);
      });
  }, [searchTerm, searchCategory]);

  console.log(searchResult);

  if (searchTerm && isLoading) {
    return <p className="italic font-bold mt-4">Loading...</p>;
  }

  return (
    <div className="flex flex-col gap-4 my-5">
      {!searchTerm ? (
        <p>Type to start searching</p>
      ) : searchResult.length > 0 ? (
        searchResult.map((result) => (
          <div key={result.imdbID} className="flex items-center gap-6">
            <div>
              <img
                src={result.Poster}
                alt=""
                className="w-10 h-10 object-cover"
              />
            </div>
            <div>
              {/* <Link to={`/movie/${result.imdbID}`}>{result.Title}</Link> */}
              <p>{result.Title}</p>
              <div className="flex items-center gap-1 my-1">
                <p className="bg-slate-100 px-1 rounded-md">{result.Type}</p>
                <p className="bg-slate-100 px-1 rounded-md">{result.Year}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p> No result for your search</p>
      )}
    </div>

    //   <div></div>;
  );
};

export default Results;
