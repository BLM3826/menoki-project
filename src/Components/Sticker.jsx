import PropTypes from "prop-types";
import "./Sticker.css";

const Stickers = ({ logo, quotes, vibe, animation }) => {
  const quotePicker = () => {
    if (quotes === "Reactions") {
      return ["Awesome!", "Hello!", "What?"];
    } else {
      return ["Thanks!", "Good job!", "Well done!"];
    }
  };

  const quotesList = quotePicker();

  return (
    <div className="stickers-container">
      {quotesList.map((quote, index) => (
        <div key={index} className={`sticker ${animation}${index + 1}`}>
          <img src={logo} alt="Logo" className="logo-preview" />
          <div className={`sticker-quote ${vibe}`}>
            <p className="sticker-text">{quote}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

Stickers.propTypes = {
  logo: PropTypes.string.isRequired,
  quotes: PropTypes.string.isRequired,
  vibe: PropTypes.string.isRequired,
  animation: PropTypes.string.isRequired,
};

export default Stickers;
