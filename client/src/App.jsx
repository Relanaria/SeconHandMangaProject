import { Route, Routes } from "react-router-dom";

import  AuthContextProvider  from "./contexts/AuthContext";

import '@fortawesome/fontawesome-free/css/all.css';
import StoreMangaDetails from './components/details/store-details/StoreMangaDetails';
import CreateItem from './components/create-item/CreateItem';
import CatalogMangaDetails from './components/details/catalog-details/CatalogMangaDetails';
import ContactUs from "./components/contact-us/ContactUs";
import HomePage from "./components/home-page/HomePage";
import NotFound from './components/not-found/NotFound';
import Register from './components/register/Register';
import Catalog from "./components/catalog/Catalog";
import ProfilePage from "./components/profile/Profile";
import AboutUs from "./components/about/AboutUs";
import NavBar from "./components/nav-bar/NavBar";
import Footer from "./components/footer/Footer";
import Login from './components/login/Login';
import Store from './components/store/Store';


function App() {

  return (
    <>
      <AuthContextProvider>
      <NavBar />
    <main>
      <Routes>
        <Route path="/" element={<HomePage />}/>

        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:mangaId/details" element={<CatalogMangaDetails />} /> 

        <Route path="/store" element={<Store />} /> 
        <Route path="/store/:mangaId/details" element={<StoreMangaDetails />} /> 

        <Route path='/createItem' element={<CreateItem />}/>

        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} /> 
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} /> 

        <Route path="*" element={<NotFound />} /> 

      </Routes>
    </main>

      </AuthContextProvider>
      <Footer />
    </>
  );
}

export default App;