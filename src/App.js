import "./App.css";

import Header from "./components/Header";
import ListReviews from "./components/ListReviews";
import UserReview from "./components/UserReview";
import UserPage from "./components/UserPage"
import { UserContext } from './contexts/User';
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import { useContext } from 'react';

function App() {
  const [user, setUser] = useState(null)
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={user ? <ListReviews /> : <Navigate to="/welcome" replace /> } />
          <Route path="/review/id:reviewId" element={<UserReview />} />
          <Route path="/welcome" element={<UserPage />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
