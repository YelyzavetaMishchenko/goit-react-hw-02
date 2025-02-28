import React from "react";
import css from "./Options.module.css";

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  return (
    <div>
      <button
        className={`${css.button} ${css.good}`}
        onClick={() => updateFeedback("good")}
      >
        Good
      </button>
      <button
        className={`${css.button} ${css.neutral}`}
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button
        className={`${css.button} ${css.bad}`}
        onClick={() => updateFeedback("bad")}
      >
        Bad
      </button>

      {totalFeedback > 0 && (
        <button
          className={`${css.button} ${css.reset}`}
          onClick={resetFeedback}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
