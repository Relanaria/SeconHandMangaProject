import '@fortawesome/fontawesome-free/css/all.css';
import { Route, Routes } from "react-router-dom";
import ContactUs from "./components/contact-us/ContactUs";
import HomePage from "./components/home-page/HomePage";
import Register from './components/register/Register';
import Catalog from "./components/catalog/Catalog";
import AboutUs from "./components/about/AboutUs";
import NavBar from "./components/nav-bar/NavBar";
import Footer from "./components/footer/Footer";
import Login from './components/login/Login';
//TODO add bring to top button
//TODO Web Accs Standar

function App() {


  return (
    <>
      <NavBar />
    <main>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/catalog" element={<Catalog />} />
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