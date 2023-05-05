import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from './components/layout/Header/Header.js'
import { useEffect } from "react";
import WebFont from 'webfontloader'
import Footer from "./components/layout/Footer/Footer.js";
import Home from "./components/Home/Home.js";
import ProductDetails from "./components/product/ProductDetails.js";
import Products from "./components/product/Products.js";
import Search from "./components/product/Search.js";
import LoginSignUp from "./components/User/LoginSignUp.js";
import store from './store';
import { loadUser } from "./actions/userAction.js";
import UserOptions from "./components/layout/Header/UserOptions.js";
import { useSelector } from "react-redux";
import Profile from './components/User/Profile.js';
function App() {
  const {isAuthenticated,user}=useSelector(state=>state.user);
  useEffect(()=>{
    WebFont.load({
      google:{
        families:['Roboto','Droid Sans','Chilanka'],
      }
    })
    store.dispatch(loadUser());
  },[]);
  console.log(isAuthenticated,user,"from app.js")
  return (
    <Router>
    <Header/>
    {isAuthenticated && <UserOptions user={user}/>}
    <Routes>
    <Route exact path='/' Component={Home}/>
    <Route exact path='/product/:id' Component={ProductDetails}/>
    <Route exact path='/products' Component={Products}/>
    <Route exact path='/products/:keyword' Component={Products}/>
    <Route exact path='/search' Component={Search}/>
    <Route exact path='/account' Component={Profile}/>
    <Route exact path='/login' Component={LoginSignUp}/>
    </Routes>
    <Footer/>
    </Router>
  );
}

export default App;
