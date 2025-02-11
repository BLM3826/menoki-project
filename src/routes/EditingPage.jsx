import SwitchStyle from "../Components/SwitchStyle";
import PropTypes from "prop-types";
import { useRef, useState } from "react";

const EditingPage = ({ onNext, setLogo, setPickedWords }) => {
  const fileInputRef = useRef(null);
  const [logoPreview, setLogoPreview] = useState(null);
  const [quotes, setQuotes] = useState("Reactions");
  const [vibe, setVibe] = useState("Fancy");
  const [animation, setAnimation] = useState("Smooth");

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result);
        setLogo(reader.result);
      };
      reader.readAsDataURL(file);
      console.log("Selected file:", file);
    }
    };
    
      const handleNext = () => {
        setPickedWords({ quotes, vibe, animation });
        onNext();
      };

  return (
    <div className="editor">
      <div className="style-picker">
        <div className="editor_step1">
          <h2>1. Tell us a bit about you</h2>
          <input
            type="text"
            placeholder="Type company name here"
            className="name-input"
          />
        </div>
        <div className="editor_logo_grid">
          <h2>2. Set your creative assets</h2>
          <div className="editor_line1">
            <button className="logo-btn" onClick={handleButtonClick}>
              {logoPreview ? (
                <div className="logo-preview">
                  <img src={logoPreview} alt="Logo Preview" />
                </div>
              ) : (
                "Upload your logo"
              )}
            </button>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              accept="image/png"
              onChange={handleFileChange}
            />
            <SwitchStyle
              title={"Pick your quotes"}
              words={["Reactions", "Support"]}
              onWordChange={setQuotes}
            />
          </div>
          <div className="editor_line2">
            <SwitchStyle
              title={"Set your vibe"}
              words={["Fancy", "BOLD"]}
              onWordChange={setVibe}
            />
            <SwitchStyle
              title={"Animation style"}
              words={["Smooth", "Active"]}
              onWordChange={setAnimation}
            />
          </div>
        </div>
      </div>
      <div>
        <button onClick={handleNext} className="step-btn" disabled={!logoPreview}>
          Generate pack
        </button>
      </div>
    </div>
  );
};

EditingPage.propTypes = {
  onNext: PropTypes.func.isRequired,
  setLogo: PropTypes.func.isRequired,
  setPickedWords: PropTypes.func.isRequired,
};
export default EditingPage;
