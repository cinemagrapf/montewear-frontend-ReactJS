import { useEffect, useRef, useState } from 'react';
import 'intl-tel-input/build/css/intlTelInput.css';
import intlTelInput from 'intl-tel-input';

const PhoneNumberInput = ({ onChange }) => {
  const countryRef = useRef(null); // for intl-tel-input
  const numberRef = useRef(null); // for plain phone digits
  const itiRef = useRef(null);

  const [countryCode, setCountryCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    if (countryRef.current) {
      itiRef.current = intlTelInput(countryRef.current, {
        initialCountry: 'auto',
        geoIpLookup: (callback) => {
          fetch('https://ipapi.co/json')
            .then((res) => res.json())
            .then((data) => callback(data.country_code))
            .catch(() => callback('us'));
        },
        separateDialCode: true, // important! separates country code
        utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/18.2.1/js/utils.js',
      });

      // store initial dial code
      setCountryCode(itiRef.current.getSelectedCountryData().dialCode);

      // when user changes country
      countryRef.current.addEventListener('countrychange', () => {
        setCountryCode(itiRef.current.getSelectedCountryData().dialCode);
      });

      return () => {
        itiRef.current.destroy();
      };
    }
  }, []);

  // when phone number changes
  const handlePhoneChange = (e) => {
    const num = e.target.value;
    setPhoneNumber(num);

    if (onChange && itiRef.current) {
      const fullNumber = `+${countryCode}${num}`;
      onChange(fullNumber);
    }
  };

  return (
    <div style={{ display: 'flex', gap: '8px', width: '100%' }}>
      {/* Country code & flag */}
      <input
        type="tel"
        ref={countryRef}
        style={{ flex: '1', width: '95px', pointerEvents: 'none' }}
        className="form-control"
      />

      {/* Number only */}
      <input
        type="tel"
        ref={numberRef}
        style={{ flex: '2', width: '85%' }}
        className="form-control"
        placeholder="Phone number(optional)"
        onChange={handlePhoneChange}
        autoComplete="tel"
      />
    </div>
  );
};

export default PhoneNumberInput;
