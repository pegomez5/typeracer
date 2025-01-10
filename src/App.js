import logo from './logo.svg';
import './App.css';

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
            <div className="player-progress">Player 1: 50%</div>
            <div className="player-progress">Player 2: 30%</div>
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
