import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from './components/layout/Header/Header.js'
import { useEffect } from "react";
import WebFont from 'webfontloader'
import Footer from "./components/layout/Footer/Footer.js";
import Home from "./components/Home/Home.js";
// import ProductDetails from "./components/product/ProductDetails.js";
function App() {
  useEffect(()=>{
    WebFont.load({
      google:{
        families:['Roboto','Droid Sans','Chilanka'],
      }
    })
  },[]);
  return (
    <Router>
    <Header/>
    <Routes>
    <Route exact path='/' Component={Home}/>
    {/* <Route exact path='/product/:id' Component={ProductDetails}/> */}
    </Routes>
    <Footer/>
    </Router>
  );
}

export default App;
