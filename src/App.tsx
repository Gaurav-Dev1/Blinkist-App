import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonComponent from './Components/atoms/Buttons/Button';
import { AvatarIcon } from './Components/atoms/Avatar/Avatar';
import SearchBarComponent from './Components/molecules/SearchBar/SearchBarComponent';
import FooterComponent from './Components/molecules/FooterBar/FooterComponent';
import { ThemeProvider } from '@mui/styles';
import theme from './Themes/Theme'
import Header from './Components/organisms/Header/Header';
import TabComponent from './Components/organisms/Tabs/Tabs';
import AboutBook from './Components/organisms/AboutBook/AboutBook';
import ExploreTabOpen from './Components/organisms/ExploreTabOpen/ExploreTabOpen';


function App() {
  return (
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
    
    <>
      <ThemeProvider theme = {theme}>
        <ExploreTabOpen />
        {/* <AboutBook /> */}
        {/* <TabComponent /> */}
        {/* <FooterComponent /> */}

      {/* <Header /> */}
      </ThemeProvider>
    </>
    
  );
}

export default App;
