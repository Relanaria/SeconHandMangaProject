import AuthContext from "../../contexts/AuthContext";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    const [activeUser, setActiveUser] = useState(false);
    const data = useContext(AuthContext);
    console.log(data);
    // remember to remove onClick event from logoutLink
    // useEffect(() => {
    //     if (user) {
    //         setActiveUser(true);
    //     } else {
    //         setActiveUser(false);
    //     }
    // }, [user]);
    //TODO fix user

    return (
        <nav className="navbar">

            <div className="logo">
                <Link to="/">
                    <img src="/images/logo.png" alt="SecondHandManga Logo" />
                </Link>
            </div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/catalog">Catalog</Link></li>
                <li><Link to="/store">Store</Link></li>
                {activeUser && <li><Link to="/createItem">List Product</Link></li>}
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
            <div className="auth-links">
                {!activeUser && (
                    <>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </>
                )}
                {activeUser && <li><Link to="/logout">Logout</Link></li>}
            </div>
        </nav>
    );
};


