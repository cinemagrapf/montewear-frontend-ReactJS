import { useState, useEffect, useRef } from 'react';
import LoginForm from '../../forms/LoginForm.jsx';
import RegisterForm from '../../forms/RegisterForm.jsx';
import './AuthModal.scss';

const AuthModal = ({ onClose }) => {
  const [mode, setMode] = useState('login'); // 'login' | 'register'
  const modalRef = useRef(null);

  // Close on ESC
  useEffect(() => {
    const handleEsc = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Focus first input on open
  useEffect(() => {
    const firstInput = modalRef.current?.querySelector('input');
    firstInput?.focus();
  }, [mode]);

  const switchMode = () => setMode(mode === 'login' ? 'register' : 'login');

  return (
    <>
      {/* Backdrop */}
      <div className="modal-backdrop fade show"></div>

      {/* Modal */}
      <div className="modal fade show d-block" tabIndex="-1" role="dialog" aria-modal="true">
        <div
          className="modal-dialog modal-dialog-centered"
          role="document"
          onClick={(e) => e.stopPropagation()}
          ref={modalRef}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{mode === 'login' ? 'Login' : 'Register'}</h5>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>
            <div className="modal-body">
              {mode === 'login' ? (
                <LoginForm onSuccess={onClose} />
              ) : (
                <RegisterForm onSuccess={onClose} />
              )}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-link" onClick={switchMode}>
                {mode === 'login'
                  ? "Don't have an account? Register"
                  : 'Already have an account? Login'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthModal;
