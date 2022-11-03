import "./App.css";

import Header from "./components/Header";
import ListReviews from "./components/ListReviews";
import UserReview from "./components/UserReview";

import { Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ListReviews />} />
        <Route path="/:category" element={<ListReviews />} />
        <Route path="/review/id:reviewId" element={<UserReview />}/>
      </Routes>
    </div>
  );
}

export default App;
