import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
// import Form from "./Form";
import { createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
        {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;
