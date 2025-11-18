import './Header.scss';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import AuthModal from '../modals/auth/AuthModal.jsx';

//FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

// Cart components and context
import CartModal from '../../components/modals/CartModal.jsx';
import { useCart } from '../../context/CartContext.jsx';

//Navbar logo
import navbarLogo from '../../assets/icons/navbar-logo.png';

const Header = () => {
  //Auth modal handlers
  const [isAuthModalOpen, setAuthModalOpen] = useState(false);
  const openAuthModal = () => setAuthModalOpen(true);
  const closeAuthModal = () => setAuthModalOpen(false);

  //Cart modal state
  const [show, setShow] = useState(false);
  const { cartItems } = useCart();

  return (
    <>
      <header className="header position-absolute top-0 start-0 w-100">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid px-4">
            {/* burger-menu-button */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarToggler"
              aria-controls="navbarToggler"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            {/* Navigation menu */}
            <div className="collapse navbar-collapse" id="navbarToggler">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-uppercase w-100 justify-content-between">
                <li className="nav-item">
                  <button className="nav-link user-icon" onClick={openAuthModal}>
                    <FontAwesomeIcon icon={faUser} />
                  </button>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/products"
                    className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                    Products
                  </NavLink>
                </li>
                <li className="nav-item">
                  <Link className="navbar-brand" to="/">
                    <img src={navbarLogo} alt="logo" />
                  </Link>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/contact-us"
                    className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                    Contacts
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/faq"
                    className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                    FAQ
                  </NavLink>
                </li>
                <li className="nav-item position-relative">
                  <button className="nav-link cart-icon" onClick={() => setShow(true)}>
                    <FontAwesomeIcon icon={faShoppingCart} />
                    {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
                    {notifyAdd && <CartNotification />}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {isAuthModalOpen && <AuthModal onClose={closeAuthModal} />}
      {show && <CartModal onClose={() => setShow(false)} />}
    </>
  );
};

export default Header;
