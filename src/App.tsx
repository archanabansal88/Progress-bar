import React, { useEffect, useState } from "react";
import "./App.css";
import ProgressBar from "./components/progressBar";

function App() {
  const [isInProgress, setIsInProgress] = useState(false);
  const [count, setCount] = useState(0);
  const [queueCount, setQueueCount] = useState(0);

  const handleAddMoreBar = () => {
    if (isInProgress) {
      setQueueCount(queueCount + 1);
    } else {
      setCount(count + 1);
    }
  };

  return (
    <div className="App">
      <h1>Progress Bar</h1>
      <button onClick={handleAddMoreBar}>Add</button>
      {[...Array(count)].map((_, index) => (
        <ProgressBar
          key={index}
          onStart={() => setIsInProgress(true)}
          onComplete={() => {
            if (queueCount > 0) {
              setQueueCount(queueCount - 1);
              setCount(count + 1);
            }
            setIsInProgress(false);
          }}
        />
      ))}
      {[...Array(queueCount)].map((_, index) => (
        <div className="empty-progressbar"></div>
      ))}
    </div>
  );
}

export default App;
