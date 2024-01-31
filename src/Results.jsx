import { useContext, useEffect, useState } from "react";
import { AppContext } from "./App";
// import { Link } from "react-router-dom";
import Axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Results = () => {
  const {
    searchTerm,
    searchCategory,
    searchResult,
    setSearchResult,
    showMovieDetails,
    setShowMovieDetails,
  } = useContext(AppContext);

  const [isLoading, setIsLoading] = useState(true);
  const [movieDetails, setMovieDetails] = useState({});

  const handleShowMovieDetails = (movieId) => {
    Axios.get(`http://www.omdbapi.com/?i=${movieId}&apikey=59892195`).then(
      (res) => {
        console.log(movieId);
        console.log(res.data);
        setMovieDetails({ ...res.data });
        setShowMovieDetails(true);
        // const result = res.data.Search;
        // res.data.Search && setSearchResult([...result]);
        // setIsLoading(false);
      }
    );
  };

  useEffect(() => {
    searchTerm &&
      Axios.get(
        `http://www.omdbapi.com/?s=${searchTerm}&type=${searchCategory}&apikey=59892195`
      ).then((res) => {
        const result = res.data.Search;
        res.data.Search && setSearchResult([...result]);
        setIsLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, searchCategory]);

  console.log(searchResult);
  console.log(movieDetails);

  if (searchTerm && isLoading) {
    return <p className="italic font-bold mt-4">Loading...</p>;
  }

  return (
    <>
      {/* <div className="flex flex-col gap-4 my-5">
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
                <p onClick={() => handleShowMovieDetails(result.imdbID)}>
                  {result.Title}
                </p>
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
      </div> */}

      {/* <div className="flex flex-col gap-4 my-5">
        {showMovieDetails ? (
          <div>{movieDetails.Title}</div>
        ) : !searchTerm ? (
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
                <p onClick={() => handleShowMovieDetails(result.imdbID)}>
                  {result.Title}
                </p>
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
      </div> */}

      {showMovieDetails ? (
        <div className="mt-8 max-w-2xl mx-auto">
          <div className="flex flex-col gap-2 md:flex-row items-center md:gap-8">
            <div>
              <img src={movieDetails.Poster} alt={movieDetails.Title} />
              <p>{movieDetails.Year}</p>
            </div>
            <div className="flex gap-2 flex-col">
              <p className="bold text-3xl">{movieDetails.Title}</p>
              <div className="flex flex-wrap gap-1 justify-center">
                {movieDetails.Genre.split(",").map((value, index) => (
                  <p key={index} className="bg-slate-100 p-0.5 rounded-md ">
                    {value}
                  </p>
                ))}
              </div>
              <div className="flex flex-wrap gap-1 justify-center">
                {movieDetails.Language.split(",").map((value, index) => (
                  <p key={index} className="bg-slate-100 p-0.5 rounded-md">
                    {value}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-2">
            <p>{movieDetails.Plot}</p>
            <p>Runtime: {movieDetails.Runtime}</p>
            <p>Starring: {movieDetails.Actors}</p>
            <p>Director: {movieDetails.Director}</p>
            <div className="flex gap-1 self-center items-center">
              <p>ImdbRating: {movieDetails.imdbRating}</p>
              <FontAwesomeIcon icon={faStar} color="yellow" />
            </div>
          </div>
        </div>
      ) : (
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
                  <p
                    className="cursor-pointer underline"
                    onClick={() => handleShowMovieDetails(result.imdbID)}
                  >
                    {result.Title}
                  </p>
                  <div className="flex items-center gap-1 my-1">
                    <p className="bg-slate-100 px-1 rounded-md">
                      {result.Type}
                    </p>
                    <p className="bg-slate-100 px-1 rounded-md">
                      {result.Year}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p> No result for your search</p>
          )}
        </div>
      )}
    </>

    //   <div></div>;
  );
};

export default Results;
