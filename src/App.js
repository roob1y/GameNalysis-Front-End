import "./App.css";

import Main from "./components/Main";
import Header from "./components/Header";

import { Routes, Route } from "react-router-dom";
import UserReview from "./components/UserReview";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:category" element={<Main />} />
        <Route path="/review/id:reviewId" element={<UserReview />}/>
      </Routes>
    </div>
  );
}

export default App;
