import { useState } from "react";
import EditingPage from "./EditingPage";
import LoadingPage from "./LoadingPage";
import ResultPage from "./ResultPage";
import HomeIcon from "../Components/HomeButton";

const HomePage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [logo, setLogo] = useState(null);
  const [pickedWords, setPickedWords] = useState({
    quotes: "",
    vibe: "",
    animation: "",
  });

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleGoHome = () => {
    setCurrentStep(1);
  };

  const handleGoEditing = () => {
    setCurrentStep(2);
    };
    
    
  const handleSetLogo = (logo) => {
    setLogo(logo);
  };

  const handleSetPickedWords = (words) => {
    setPickedWords(words);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="home-page">
            <div className="home-page-content">
              <div className="home-rect-top"></div>
              <h1>Hey business owner</h1>
              <h2>
                Welcome to your sticker playground! Here, you can create a
                custom sticker pack for your brand, team, or whatever cool name
                you go by.
              </h2>
              <p>
                In just a few steps, you&apos;ll upload your logo, set your
                style, and watch your pack come to life.
              </p>
              <button onClick={handleNextStep} className="step-btn">
                Let&apos;s get started
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <EditingPage
            onNext={handleNextStep}
            setLogo={handleSetLogo}
            setPickedWords={handleSetPickedWords}
          />
        );
      case 3:
        return <LoadingPage onNext={handleNextStep} />;
      case 4:
        return <ResultPage onNext={handleGoEditing} logo={logo} pickedWords={pickedWords} />;
      default:
        return <div>Unknown step</div>;
    }
  };

  return (
    <div>
      <HomeIcon
        onClick={handleGoHome}
        disabled={currentStep === 1 || currentStep === 3}
      />
      {renderStep()}
    </div>
  );
};

export default HomePage;
