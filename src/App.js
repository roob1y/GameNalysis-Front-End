import "./App.css";

import Header from "./components/Header";
import ListReviews from "./components/Reviews";
import UserReview from "./components/UserReview";
import Users from "./components/Users";
import PageNotFound from "./components/Error";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";

import { UserContext } from "./contexts/User";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

function App() {
  const [loggedUser, setLoggedUser] = useState();

  return (
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={{ loggedUser, setLoggedUser }}>
        <GlobalStyles />
        <div className="App">
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                loggedUser ? (
                  <ListReviews />
                ) : (
                  <Navigate to="/welcome" replace />
                )
              }
            />
            <Route
              path="/review/:reviewId"
              element={
                loggedUser ? <UserReview /> : <Navigate to="/" replace />
              }
            />
            <Route
              path="/welcome"
              element={!loggedUser ? <Users /> : <Navigate to="/" replace />}
            />
            <Route path="/404" element={<PageNotFound />} />
            <Route path="/*" element={<Navigate to="/404" />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default App;
