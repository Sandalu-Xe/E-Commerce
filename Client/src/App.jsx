import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './HomePage/HomePage.jsx';
import Signup from './Auth/Signup.jsx';
import AboutPage from './Pages/Aboutus/Aboutus.jsx';
import NaviBar from './layout/NaviBar.jsx';
import Footer from './layout/Footer.jsx';
import Login from './Auth/Login.jsx';
import BestSellersPage from './HomePage/Inner/BestSellersPage.jsx';
import SpecialOffers from './HomePage/Inner/SpecialOffers.jsx';
import LatestModelsPage from './HomePage/Inner/LatestModelsPage.jsx';
import Payment from './Pages/Payment/payment.jsx';
import ContactUs from './Pages/Contactus/Contactus.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <NaviBar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/latest-models" element ={<LatestModelsPage/>} />
        <Route path="/best-sellers" element={<BestSellersPage/>} />
        <Route path="/Special-Offers" element={<SpecialOffers/>} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/contactus" element={<ContactUs/>} />
        </Routes>
        <Footer/>
    </Router>
    </>
  )
}

export default App
