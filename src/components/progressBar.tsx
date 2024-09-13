import { useState, useEffect } from "react";
import "./progressBar.css";
const ProgressBar = ({
  onComplete,
  onStart,
}: {
  onComplete: () => void;
  onStart: () => void;
}) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      setValue((prevValue) => {
        return prevValue + 1;
      });
    };
    if (value === 0) {
      onStart();
    }
    if (value < 100) {
      setTimeout(updateCount, 5000 / 100);
    }
    if (value === 100) {
      onComplete();
    }
  }, [value]);

  return (
    <div className="progress-bar">
      <span style={{ color: value > 50 ? "white" : "black" }}>{value}%</span>
      <div
        //   style={{ width: `${value}%` }}
        style={{
          transform: `scaleX(${value / 100})`,
          transformOrigin: "left",
        }}
      ></div>
    </div>
  );
};
export default ProgressBar;
