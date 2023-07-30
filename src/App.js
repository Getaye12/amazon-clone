import React,{ useEffect } from 'react'
import './App.css';
import { auth } from './firebase/firebaseConfig';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login';
import { useStateValue } from './contextAPI/StateProvider';
import Order from './components/Order/Order';
import Orders from './components/Orders/Orders';


export default function App() {
  const [{ user }, dispatch] = useStateValue();
 
  useEffect(() => {


    auth.onAuthStateChanged((authUser) => {

      if (authUser) {
        
        // user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        })
      }
      else {
        ////===the user is sign out from amazon web app====
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
      
    });
}, [])


  return (
    <div>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/cart" element={ <Cart /> }></Route>
          </Routes>
          <Routes>
           <Route path="/login" element={ <Login /> }></Route>
          </Routes>
             
          <Routes>
            <Route path="/orders" element={<Orders/>}></Route>
          </Routes>
            <Routes>
            <Route path="/" element={ <Home /> }> </Route>
            </Routes>
        </div>
        <Footer />
       </Router>
    </div>
  );
}

