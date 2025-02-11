import { useState } from "react";
import PropTypes from "prop-types";

const SwitchStyle = ({ title, words, onWordChange }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const handleNextWord = () => {
    setCurrentWordIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % words.length;
      onWordChange(words[newIndex]);
      return newIndex;
    });
  };

  const handlePrevWord = () => {
    setCurrentWordIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + words.length) % words.length;
      onWordChange(words[newIndex]);
      return newIndex;
    });
  };

  return (
    <div className="switch-style">
      <h4>{title}</h4>
      <SwitchWords
        word={words[currentWordIndex]}
        onPrev={handlePrevWord}
        onNext={handleNextWord}
      />
    </div>
  );
};

const SwitchWords = ({ word, onPrev, onNext }) => {
  return (
    <div className="switch-words">
      <button onClick={onPrev}>&lt;</button>
      <h1>{word}</h1>
      <button onClick={onNext}>&gt;</button>
    </div>
  );
};

SwitchStyle.propTypes = {
  title: PropTypes.string.isRequired,
  words: PropTypes.arrayOf(PropTypes.string).isRequired,
  onWordChange: PropTypes.func.isRequired,
};
SwitchWords.propTypes = {
  word: PropTypes.string.isRequired,
  onPrev: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

export default SwitchStyle;
