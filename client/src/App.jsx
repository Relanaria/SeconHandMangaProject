import { Route, Routes } from "react-router-dom";

import  AuthContextProvider  from "./contexts/AuthContext";
import  MangaContextProvider  from "./contexts/CurrentMangaContext";

import '@fortawesome/fontawesome-free/css/all.css';
import StoreMangaDetails from './components/details/store-details/StoreMangaDetails';
import CatalogMangaDetails from './components/details/catalog-details/CatalogMangaDetails';
import EditMangaPage from "./components/details/store-details/edit/EditStore";
import EditCatalog from "./components/details/catalog-details/edit/EditCatalog";
import CreateItem from './components/create-item/createEditForm/CreateItem';
import CreateCatalogItem from "./components/create-item/createCatalogForm/CreateCatalogItem";
import ContactUs from "./components/contact-us/ContactUs";
import AuthGuardUserEdit from "./components/common/AuthGuardUserEdit";
import AuthGuardsUser from "./components/common/AuthGuardsUser";
import AuthGuardGuest from "./components/common/AuthGuardGuest";
import HomePage from "./components/home-page/HomePage";
import NotFound from './components/not-found/NotFound';
import ProfilePage from "./components/profile/Profile";
import Register from './components/register/Register';
import Catalog from "./components/catalog/Catalog";
import AboutUs from "./components/about/AboutUs";
import NavBar from "./components/nav-bar/NavBar";
import Footer from "./components/footer/Footer";
import Login from './components/login/Login';
import Store from './components/store/Store';


function App() {

  return (
    <>
      <AuthContextProvider>
      <MangaContextProvider>
      <NavBar />

    <main>
      <Routes>
        <Route path="/" element={<HomePage />}/>

        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:mangaId/details" element={<CatalogMangaDetails />} />

        <Route path="/store" element={<Store />} /> 
        <Route path="/store/:mangaId/details" element={ <StoreMangaDetails /> } /> 

        <Route path="/about" element={<AboutUs />} />

        <Route element={<AuthGuardUserEdit/>}>
          <Route path="/store/edit/:mangaId" element={ <EditMangaPage /> }/>
        </Route>

        <Route element={<AuthGuardsUser/>}>
          <Route path="/catalog/edit/:mangaId" element={ <EditCatalog /> }/>
          <Route path="/createCatalogItem" element={ <CreateCatalogItem /> }/>
          <Route path='/createItem' element={<CreateItem />}/>
          <Route path="/contact-us" element={<ContactUs />} /> 
          <Route path="/profile" element={<ProfilePage/>}/>
        </Route>

        <Route element={<AuthGuardGuest />}>
          <Route path="/login" element={<Login />} /> 
          <Route path="/register" element={<Register />} /> 
        </Route>

        <Route path="*" element={<NotFound />} /> 

      </Routes>
    </main>

      </MangaContextProvider>
      </AuthContextProvider>
      <Footer />
    </>
  );
}

export default App;