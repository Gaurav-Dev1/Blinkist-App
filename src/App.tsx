import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./Components/atoms/Buttons/Button";
import { AvatarIcon } from "./Components/atoms/Avatar/Avatar";
import SearchBarComponent from "./Components/molecules/SearchBar/SearchBarComponent";
import FooterComponent from "./Components/molecules/FooterBar/FooterComponent";
import theme from "./Themes/Theme";
import Header from "./Components/organisms/Header/Header";
import TabComponent from "./Components/organisms/Tabs/Tabs";
import AboutBook from "./Components/organisms/AboutBook/AboutBook";
import ExploreTabOpen from "./Components/organisms/ExploreTabOpen/ExploreTabOpen";
import BookDescription from "./Components/organisms/BookDescription/BookDescription";
import BookCard from "./Components/organisms/BookCard/BookCard";
import { ThemeProvider } from "@mui/material";
import BookDescriptionLayout from "./Components/templates/BookDescription/BookDescriptionLayout";
import EntrepreneurshipTemplate from "./Components/templates/Entrepreneurship/EntrepreneurshipTemplate";
import MyLibraryTemplate from "./Components/templates/MyLibrary/MyLibraryTemplate";
import BookDetailsPage from "./Components/Pages/BookDetailsPage/BookDetailsPage";
import MyLibraryPage from "./Components/Pages/MyLibraryPage/MyLibraryPage";
import EntrepreneurshipPage from "./Components/Pages/EntrepreneurshipPage/EntrepreneurshipPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<MyLibraryPage />} />
            <Route
              path="/entrepreneurship"
              element={<EntrepreneurshipPage />}
            />
            <Route path="/book-details" element={<BookDetailsPage />} />
          </Routes>
        </Router>

        {/* <EntrepreneurshipPage /> */}
        {/* <MyLibraryPage /> */}
        {/* <BookDetailsPage /> */}
        {/* <MyLibraryTemplate /> */}
        {/* <EntrepreneurshipTemplate /> */}
        {/* <BookDescriptionLayout body = {<BookDescription />}/> */}
        {/* <BookCard /> */}
        {/* <BookDescription /> */}
        {/* <ExploreTabOpen /> */}
        {/* <AboutBook /> */}
        {/* <TabComponent /> */}
        {/* <FooterComponent /> */}

        {/* <Header /> */}
      </ThemeProvider>
    </>
  );
}

export default App;

// <div className="App">
//   <header className="App-header">
//     {/* <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.tsx</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a> */}

//     {/* <SearchBarComponent /> */}
//     {/* <ButtonComponent variant='contained' children='Button-Component' onClick={() => alert('do not click me')}/>

//     <AvatarIcon letter="G"/> */}
//   </header>
//   <FooterComponent />
// </div>
