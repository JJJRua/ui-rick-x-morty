import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';

import styled from 'styled-components';

const MainContentStyle=styled.main`
background: #d0d0d0;
padding:2rem;
display:flex;
justify-content:center;
`;

function App() {
  return (
    <>
    <Header/>
    <MainContentStyle>
      <Home/>   
    </MainContentStyle>
    <Footer/>
    </>
  );
}

export default App;
