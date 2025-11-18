import { useState, useEffect, useRef } from 'react';
import LoginForm from '../../forms/LoginForm.jsx';
import RegisterForm from '../../forms/RegisterForm.jsx';
import './AuthModal.scss';

const AuthModal = ({ onClose }) => {
  const [mode, setMode] = useState('login'); // 'login' | 'register'
  const [isClosing, setIsClosing] = useState(false);
  const modalRef = useRef(null);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  // Close on ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  // Focus first input on open
  useEffect(() => {
    const firstInput = modalRef.current?.querySelector('input');
    firstInput?.focus();
  }, [mode]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const switchMode = () => setMode(mode === 'login' ? 'register' : 'login');

  return (
    <div
      className={`auth-modal-overlay ${isClosing ? 'closing' : ''}`}
      onClick={handleOverlayClick}>
      <div
        className={`auth-modal ${isClosing ? 'closing' : ''}`}
        onClick={(e) => e.stopPropagation()}
        ref={modalRef}>
        <button className="auth-close-btn" onClick={handleClose} aria-label="Close">
          ✕
        </button>

        <div className="auth-modal-header">
          <h2>{mode === 'login' ? 'Welcome Back' : 'Create Account'}</h2>
          <p className="auth-subtitle">
            {mode === 'login'
              ? 'Sign in to access your account'
              : 'Join us today and start shopping'}
          </p>
        </div>

        <div className="auth-modal-body">
          {mode === 'login' ? (
            <LoginForm onSuccess={handleClose} />
          ) : (
            <RegisterForm onSuccess={handleClose} />
          )}
        </div>

        <div className="auth-modal-footer">
          <p className="switch-mode-text">
            {mode === 'login' ? "Don't have an account?" : 'Already have an account?'}
          </p>
          <button type="button" className="switch-mode-btn" onClick={switchMode}>
            {mode === 'login' ? 'Create Account' : 'Sign In'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
