import Image from "next/image";
import '../css/header.css';

export default function Header() {
  return (
    <main>
      {/* Header section */}
      <section className="header">
        <div className="header-content">
          <h2>S / N</h2>
        </div>

        <nav className="nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/order">Order</a></li>
            <li><a href="/procedure">Procedure</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>

        <div className="header-content">
          <button>Login</button>
        </div>
      </section>
    </main>
  );
}
