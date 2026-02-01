import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <header>
      <nav>
        <div className="nav-logo">
          <h1 className="logo-text">Little Lemon</h1>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/booking">Reserve</Link></li>
          <li><Link to="/order">Order</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
