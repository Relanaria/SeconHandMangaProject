import '@fortawesome/fontawesome-free/css/all.css';
import { Route, Routes } from "react-router-dom";
import CreateItem from './components/create-item/CreateItem';
import MangaDetails from './components/details/MangaDetails';
import ContactUs from "./components/contact-us/ContactUs";
import HomePage from "./components/home-page/HomePage";
import NotFound from './components/not-found/NotFound';
import Register from './components/register/Register';
import Catalog from "./components/catalog/Catalog";
import AboutUs from "./components/about/AboutUs";
import NavBar from "./components/nav-bar/NavBar";
import Footer from "./components/footer/Footer";
import Login from './components/login/Login';
import { useState } from 'react';
import userContext from './contexts/userContext';
//TODO add bring to top button
//TODO Web Accs Standar



function App() {
const [currentUser, setCurrentUser] = useState('dobri');

const logOut = () =>{
  setCurrentUser(null);
}

  return (
    <>
      <userContext.Provider value={ {user: currentUser, logout: logOut} }>
      <NavBar />
    <main>
      <Routes>
        <Route path="/" element={<HomePage />}/>

        <Route path="/catalog" element={<Catalog />} />
        <Route path="/store" element={<Catalog />} /> 
        <Route path="/store/:id/details" element={<MangaDetails />} /> 
        <Route path='/createItem' element={<CreateItem />}/>

        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} /> 

        <Route path="*" element={<NotFound />} /> 

      </Routes>
    </main>

      </userContext.Provider>
      <Footer />
    </>
  );
}

export default App;