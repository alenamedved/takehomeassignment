import "./App.css";
import React, { useState } from "react";

function App() {
  const [textInput, setTextInput] = useState("");
  const [conversionMode, setConversionMode] = useState("lowercase");
  const [textOutput, setTextOutput] = useState("");

  const handleRadioChange = (event) => {
    setConversionMode(event.target.value);
  };

  const handleTextareaChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (conversionMode === "lowercase") {
      setTextOutput(textInput.toLowerCase());
    } else if (conversionMode === "uppercase") {
      setTextOutput(textInput.toUpperCase());
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Career Lab text-case converter</h1>
      </header>
      <form
        aria-label="form for converted text"
        method="submit"
        onSubmit={handleFormSubmit}
      >
        <div className="form-control form-control__text">
          <label htmlFor="text">Text to be converted:</label>
          <textarea
            aria-label="textarea"
            placeholder="Text to be converted"
            id="text"
            onChange={handleTextareaChange}
            value={textInput}
          />
        </div>
        <div className="form-control form-control__radio">
          <input
            aria-label="lowercase conversion mode"
            type="radio"
            name="conversion"
            id="conversion-0"
            value="lowercase"
            checked={conversionMode === "lowercase"}
            onChange={handleRadioChange}
          />
          <label htmlFor="conversion-0">Convert text to lowercase</label>
        </div>
        <div className="form-control form-control__radio">
          <input
            aria-label="uppercase conversion mode"
            type="radio"
            name="conversion"
            id="conversion-1"
            value="uppercase"
            checked={conversionMode === "uppercase"}
            onChange={handleRadioChange}
          />
          <label htmlFor="conversion-1">Convert text to uppercase</label>
        </div>
        <button aria-label="submit button" type="submit">
          Submit
        </button>
        <div className="form-control form-control__text u-mt-3">
          <label htmlFor="result">Converted text:</label>
          <output
            aria-label="output for converted text"
            id="result"
            className="result"
          >
            {textOutput}
          </output>
        </div>
      </form>
    </div>
  );
}

export default App;
