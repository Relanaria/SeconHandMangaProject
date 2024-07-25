export default function Footer() {
        return (
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-section about">
                        <h2>About Us</h2>
                        <p>Second Hand Manga is your go-to place for buying and reading pre-owned manga. We bring the best manga to your doorstep.</p>
                    </div>
                    <div className="footer-section links">
                        <h2>Quick Links</h2>
                        <ul>
                            <li><a href="/home">Home</a></li>
                            <li><a href="/catalog">Catalog</a></li>
                            <li><a href="/store">Store</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="footer-section contact">
                        <h2>Contact Us</h2>
                        <p>Email: support@secondhandmanga.com</p>
                        <p>Phone: +123-456-7890</p>
                    </div>
                    <div className="footer-section social">
                        <h2>Follow Us</h2>
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 Second Hand Manga. All rights reserved.</p>
                </div>
            </footer>
        );
}