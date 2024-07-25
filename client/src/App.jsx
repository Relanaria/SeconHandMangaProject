import '@fortawesome/fontawesome-free/css/all.css';
import { Route, Routes } from "react-router-dom";
import ContactUs from "./contact-us/ContactUs";
import HomePage from "./home-page/HomePage";
import Register from './register/Register';
import Catalog from "./catalog/Catalog";
import AboutUs from "./about/AboutUs";
import NavBar from "./nav-bar/NavBar";
import Footer from "./footer/Footer";
import Login from './login/Login';


function App() {


  return (
    <>
      <NavBar />
    <main>

      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/catalog" element={<Catalog/>} />
        <Route path="/store" element={<Catalog />} /> 
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} /> 

      </Routes>
    </main>

      <Footer />
    </>
  );
}

export default App;