import PropTypes from "prop-types";
import Stickers from "../Components/Sticker";

const ResultPage = ({ onNext, logo, pickedWords }) => {
    const handlePublish = () => {
        console.log("Sticker exported")
        alert("Stickers exported at 512x512 pixels. Enjoy!");
      };
  return (
    <div className="home-page">
      <div className="home-page-content">
        <div className="home-rect-top"></div>
        <h1>Your stickers are ready!</h1>
          <Stickers
            logo={logo}
            quotes={pickedWords.quotes}
            vibe={pickedWords.vibe}
            animation={pickedWords.animation}
          />
        <button className="step-btn" onClick={handlePublish}>
          Publish to the world
        </button>
      </div>
      <div className="try-again-container">
        <span className="try-again-btn" onClick={onNext}>
          Try again
        </span>
      </div>
    </div>
  );
};

ResultPage.propTypes = {
  onNext: PropTypes.func.isRequired,
  logo: PropTypes.string.isRequired,
  pickedWords: PropTypes.shape({
    quotes: PropTypes.string.isRequired,
    vibe: PropTypes.string.isRequired,
    animation: PropTypes.string.isRequired,
  }).isRequired,
};

export default ResultPage;
