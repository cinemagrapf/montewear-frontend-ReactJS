import { useState } from 'react';

const RegisterForm = ({ onSuccess }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) newErrors.email = 'Invalid email address';
    if (form.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match';
    if (!form.acceptTerms) newErrors.acceptTerms = 'You must accept the terms';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setForm({ ...form, [name]: newValue });

    if (name === 'password') {
      setPasswordStrength(getPasswordStrength(newValue));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log('Register', form);
    onSuccess();
  };

  const getPasswordStrength = (password) => {
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++; // special chars
    return score;
  };
  const [passwordStrength, setPasswordStrength] = useState(0);

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="mb-3">
        <label>Name</label>
        <input
          type="text"
          name="name"
          className={`form-control ${errors.name ? 'is-invalid' : ''}`}
          value={form.name}
          onChange={handleChange}
        />
        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
      </div>

      <div className="mb-3">
        <label>Email</label>
        <input
          type="email"
          name="email"
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          name="password"
          className={`form-control ${errors.password ? 'is-invalid' : ''}`}
          value={form.password}
          onChange={handleChange}
        />
        {errors.password && <div className="invalid-feedback">{errors.password}</div>}

        {/* Strength bar */}
        {form.password && (
          <div className="mt-2">
            <div className="progress" style={{ height: '6px' }}>
              <div
                className={`progress-bar ${
                  passwordStrength <= 1
                    ? 'bg-danger'
                    : passwordStrength === 2
                    ? 'bg-warning'
                    : 'bg-success'
                }`}
                role="progressbar"
                style={{ width: `${(passwordStrength / 4) * 100}%` }}
              />
            </div>
            <small className="text-muted">
              {passwordStrength <= 1
                ? 'Weak password'
                : passwordStrength === 2
                ? 'Medium strength'
                : 'Strong password'}
            </small>
          </div>
        )}
      </div>

      <div className="mb-3">
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
          value={form.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}

        {form.confirmPassword && (
          <small
            className={form.password === form.confirmPassword ? 'text-success' : 'text-danger'}>
            {form.password === form.confirmPassword ? 'Passwords match' : 'Passwords do not match'}
          </small>
        )}
      </div>

      <div className="form-check mb-3">
        <input
          className={`form-check-input ${errors.acceptTerms ? 'is-invalid' : ''}`}
          type="checkbox"
          name="acceptTerms"
          checked={form.acceptTerms}
          onChange={handleChange}
        />
        <label className="form-check-label">I accept the terms and conditions</label>
        {errors.acceptTerms && <div className="invalid-feedback d-block">{errors.acceptTerms}</div>}
      </div>

      <button type="submit" className="btn btn-primary w-100">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
