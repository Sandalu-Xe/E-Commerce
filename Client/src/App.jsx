import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Components/HomePage/HomePage.jsx';
import Signup from './Components/Auth/Signup.jsx';
import AboutPage from './Components/Aboutus';
import NaviBar from './Components/NaviBar';
import Footer from './Components/Footer';
import Login from './Components/Auth/Login.jsx';
import BestSellersPage from './Components/HomePage/Home-Inner/BestSellersPage';
import SpecialOffers from './Components/HomePage/Home-Inner/SpecialOffers';
import LatestModelsPage from './Components/HomePage/Home-Inner/LatestModelsPage.jsx';
import Payment from './Components/payment';
import ContactUs from './Components/Contactus';



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
