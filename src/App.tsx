import React from "react";
import "./App.css";
import theme from "./Themes/Theme";
import { ThemeProvider } from "@mui/material";
import BookDetailsPage from "./Components/Pages/BookDetailsPage/BookDetailsPage";
import MyLibraryPage from "./Components/Pages/MyLibraryPage/MyLibraryPage";
import EntrepreneurshipPage from "./Components/Pages/EntrepreneurshipPage/EntrepreneurshipPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginButton from "./Auth/LoginButton";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<LoginButton />} />
            <Route path="/myLib" element={<MyLibraryPage />} />
            <Route
              path="/entrepreneurship"
              element={<EntrepreneurshipPage />}
            />
            <Route path="/book-details" element={<BookDetailsPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
