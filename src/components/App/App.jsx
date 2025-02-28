import React, { useState, useEffect } from "react";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";
import Description from "../Description/Description";
import css from "./App.module.css";

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem("feedback");
    return savedFeedback
      ? JSON.parse(savedFeedback)
      : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = totalFeedback
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0;

  return (
    <div className={css.appContainer}>
      <div className={css.appWrapper}>
        <Description />
        <Options
          updateFeedback={updateFeedback}
          resetFeedback={resetFeedback}
          totalFeedback={totalFeedback}
        />
        {totalFeedback > 0 ? (
          <Feedback
            feedback={feedback}
            total={totalFeedback}
            positivePercentage={positiveFeedback}
          />
        ) : (
          <Notification />
        )}
      </div>
    </div>
  );
};

export default App;
