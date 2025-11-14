import { useNavigate } from 'react-router-dom';
import './UnderConstruction.scss';

const UnderConstructionPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center">
      <div className="text-center">
        <h1 className="error-code display-4">200 OK</h1>
        <p className="first-p lead">🚧Page is under construction</p>
        <p className="second-p">This page is currently being developed. Please check back later</p>
        <button onClick={handleGoBack} className="go-back-button">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default UnderConstructionPage;
