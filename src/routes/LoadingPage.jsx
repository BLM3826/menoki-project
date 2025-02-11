import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const LoadingPage = ({ onNext }) => {
  const [loadingStep, setLoadingStep] = useState(0);

  useEffect(() => {
    if (loadingStep < 4) {
      const timer = setTimeout(() => {
        setLoadingStep((prevStep) => prevStep + 1);
      }, 1250); // Adjust the duration as needed
      return () => clearTimeout(timer);
    } else {
      const delayTimer = setTimeout(() => {
        onNext();
      }, 1000); // Delay of 1 second to complete animation
      return () => clearTimeout(delayTimer);
    }
  }, [loadingStep, onNext]);

  return (
    <div className="loading-page">
      <h1>
        No turning back now! <br /> We&apos;re generating your conversation pieces...
      </h1>
      <div className="loading-list">
        <div className="loading-list-item">
          <div className={`circle ${loadingStep > 0 ? 'completed' : 'pulsing'}`}>
            {loadingStep > 0 && <span>&#10003;</span>}
          </div>
          <h2 className="text">Uploading & prepping your logo</h2>
        </div>
        <div className="loading-list-item">
          <div className={`circle ${loadingStep > 1 ? 'completed' : 'pulsing'}`}>
            {loadingStep > 1 && <span>&#10003;</span>}
          </div>
          <h2 className="text">Animating every pixel</h2>
        </div>
        <div className="loading-list-item">
          <div className={`circle ${loadingStep > 2 ? 'completed' : 'pulsing'}`}>
            {loadingStep > 2 && <span>&#10003;</span>}
          </div>
          <h2 className="text">Smoothing & optimizing for every platform</h2>
        </div>
        <div className="loading-list-item">
          <div className={`circle ${loadingStep > 3 ? 'completed' : 'pulsing'}`}>
            {loadingStep > 3 && <span>&#10003;</span>}
          </div>
          <h2 className="text">Packing it up</h2>
        </div>
      </div>
    </div>
  );
};

LoadingPage.propTypes = {
  onNext: PropTypes.func.isRequired,
};

export default LoadingPage;
