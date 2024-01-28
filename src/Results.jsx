import { useContext, useEffect, useState } from "react";
import { AppContext } from "./App";
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
    return <p>Loading...</p>;
  }

  return (
    <>
      {!searchTerm ? (
        <p>Type to start searching</p>
      ) : searchResult.length > 0 ? (
        searchResult.map((result) => (
          <div key={result.imdbID}>
            <div>
              <img src={result.Poster} alt="" />
            </div>
            <div>
              <p>{result.Title}</p>
              <div>
                <p>{result.Type}</p>
                <p>{result.Year}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p> No result for your search</p>
      )}
    </>

    //   <div></div>;
  );
};

export default Results;
