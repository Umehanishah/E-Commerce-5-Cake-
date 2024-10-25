import Image from "next/image";
import '../css/footer.css';

export default function Footer() {
  return (
    <main>
      {/* Footer section */}
      <section className="footer">
        <div className="footer-logo">
          <h2>S / N</h2>
        </div>

        <div className="footer-list">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/service">Service</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-list">
          <ul>
            <li><a href="/shop">Location</a></li>
            <li><a href="/shop">Karachi</a></li>
            <li><a href="/shop">Islamabad</a></li>
            <li><a href="/shop">Lahore</a></li>
            <li><a href="/shop">Multab</a></li>
          </ul>
        </div>

        <div className="footer-list">
          <ul>
            <li><a href="/order">Order</a></li>
            <li><a href="/order">Pastary</a></li>
            <li><a href="/order">Cake</a></li>
            <li><a href="/order">Step cake</a></li>
         
          </ul>
        </div>

        <div className="footer-content">
          <button>Email</button>
          <button>Login</button>
        </div>
      </section>
    </main>
  );
}
