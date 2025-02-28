import React from "react";
import css from "./Feedback.module.css";

const Feedback = ({ feedback, total, positivePercentage }) => {
  return (
    <div>
      <p className={`${css.feedbackText} ${css.goodText}`}>
        Good: {feedback.good}
      </p>
      <p className={`${css.feedbackText} ${css.neutralText}`}>
        Neutral: {feedback.neutral}
      </p>
      <p className={`${css.feedbackText} ${css.badText}`}>
        Bad: {feedback.bad}
      </p>
      <p className={`${css.feedbackText} ${css.totalText}`}>Total: {total}</p>
      <p className={`${css.feedbackText} ${css.goodText}`}>
        Positive feedback: {positivePercentage}%
      </p>
    </div>
  );
};

export default Feedback;
