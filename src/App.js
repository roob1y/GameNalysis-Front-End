import "./App.css";

import Main from "./components/Main";
import Header from "./components/Header";
import CategoryList from "./components/CategoryList"

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:category" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
