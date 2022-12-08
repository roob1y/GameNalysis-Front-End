import "./App.css";

import Header from "./components/Header";
import ListReviews from "./components/ListReviews";
import UserReview from "./components/UserReview";
import UserPage from "./components/UserPage";
import { Burger, Menu } from "./components";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";

import { UserContext } from "./contexts/User";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useRef } from "react";
import { useOnClickOutside } from './hooks';


function App() {
  const [loggedUser, setLoggedUser] = useState();
  const [open, setOpen] = useState(false);
  const node = useRef(); 
  const menuId = "main-menu"
  
  useOnClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={{ loggedUser, setLoggedUser }}>
        <GlobalStyles />
        <div className="App">
          <Header />
          <div ref={node}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId}/>
            <Menu open={open} setOpen={setOpen} id={menuId}/>
          </div>
          <Routes>
            <Route
              path="/"
              element={
                loggedUser ? <ListReviews /> : <Navigate to="/welcome" replace />
              }
            />
            <Route
              path="/review/id:reviewId"
              element={loggedUser ? <UserReview /> : <Navigate to="/" replace />}
            />
            <Route
              path="/welcome"
              element={!loggedUser ? <UserPage /> : <Navigate to="/" replace />}
            />
          </Routes>
        </div>
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default App;
