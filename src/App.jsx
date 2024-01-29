import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import Form from "./Form";
import { createContext } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Results from "./Results";
import Homepage from "./Homepage";

export const AppContext = createContext();

function App() {
  // const [count, setCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  return (
    <AppContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        searchCategory,
        setSearchCategory,
        searchResult,
        setSearchResult,
      }}
    >
      <div>
        <Homepage />
      </div>
    </AppContext.Provider>
  );
}

export default App;
