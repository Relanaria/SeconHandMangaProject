import { useState } from "react";

export default function NavBar() {

    const [activeUser, setActiveUser] = useState(false)

    return (
        <nav className="navbar">

            <div className="logo">
                <a href="/">
                    <img src="/images/logo.png" alt="SecondHandManga Logo" />
                </a>
            </div>
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/catalog">Catalog</a></li>
                <li><a href="/store">Store</a></li>
                {activeUser && <li><a href="/createItem">List Product</a></li>}
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact Us</a></li>
            </ul>
            <div className="auth-links">
                {!activeUser && (
                    <>
                        <a href="/login">Login</a>
                        <a href="/register">Register</a>
                    </>
                )}
                {activeUser && <a href="/logout">Logout</a>}
            </div>
        </nav>
    );
}


