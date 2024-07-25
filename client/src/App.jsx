import { Route, Routes } from "react-router-dom";
import HomePage from "./homePage/HomePage"
import NavBar from "./nav-bar/NavBar"
import Footer from "./footer/Footer";
import AboutUs from "./about/AboutUs";
import Catalog from "./catalog/Catalog";
import '@fortawesome/fontawesome-free/css/all.css';


function App() {


  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<AboutUs />}/>
        <Route path="/catalog" element={<Catalog/>}/>

      </Routes>

      <Footer />
    </>
  );
}

export default App;