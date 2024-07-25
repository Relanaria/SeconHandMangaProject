import '@fortawesome/fontawesome-free/css/all.css';
import { Route, Routes } from "react-router-dom";
import ContactUs from "./contact-us/ContactUs";
import HomePage from "./home-page/HomePage"
import Catalog from "./catalog/Catalog";
import AboutUs from "./about/AboutUs";
import NavBar from "./nav-bar/NavBar"
import Footer from "./footer/Footer";


function App() {


  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/catalog" element={<Catalog/>} />
        <Route path="/store" element={<Catalog />} /> 
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} /> 

      </Routes>

      <Footer />
    </>
  );
}

export default App;