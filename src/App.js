import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';

// TODO : Change this function so that progress is set to
//        letters typed / length of the paragraph
function ProgressBar({ interval, maxValue }) {
  const [cur_progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsedTime = (Date.now() - startTime) / 1000; // time in seconds
      setProgress(Math.min(elapsedTime * 10, maxValue)); 
    }, interval);

    return () => clearInterval(timer); // Cleanup interval on unmount
  }, [interval, maxValue]);

  return (
    <progress value={cur_progress} max={maxValue}></progress>
  );
}

function App() {
  return (
    <div className="app-container">
      {/* Header Section */}
      <header className="header">
        <h1>Type Racer</h1>
      </header>

      {/* Main Content Section */}
      <div className="main-content">

        {/* Top Panel: Player Progress */}
        <div className="top-panel">
          <h2>Player Progress:</h2>
          <div className="progress-container">
            <ProgressBar interval={250} maxValue={100}/>
            <ProgressBar interval={250} maxValue={100}/>
          </div>
        </div>

        {/* Bottom Panel: Text Entry */}
        <div className="bottom-panel">
          <h2>Type Here:</h2>
          <textarea
            placeholder="Start typing..."
            className="text-area"
          ></textarea>
        </div>

      </div>
    </div>
  );
}

export default App;