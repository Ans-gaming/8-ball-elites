import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Import navigation hooks
import "./all.css";
import backgroundImage from "../assets/8 ball elite.jpg"; // Update with the actual path
import trainingImage from "../assets/training.jpg"; // Path to your images
import tournamentImage from "../assets/tournament.jpg"; // Path to your images
import multiplayerImage from "../assets/multiplayer.jpg"; // Path to your images


const Home = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate
  const location = useLocation(); // Retrieve passed state

  // Retrieve the selected mode passed from the Modes page, if any
  const [selectedMode, setSelectedMode] = useState(
    location.state?.selectedMode || "No mode selected"
  );

  // Navigation functions
  const goToLogin = () => navigate("/login");
  const goToProfile = () => {
    navigate("/profile", {
      state: {
        playerStats: {
          totalWins: 0,
          totalLosses: 0,
          matchesPlayed: 0,
          highestScore: 0,
          tournamentsPlayed: 0,
          tournamentsWon: 0,
        },
      },
    });
  };
  
  const goToLeaderboard = () => navigate("/leaderboard");

  // Function to handle mode selection
  const handleModeSelection = (mode) => {
    setSelectedMode(mode); // Update the selected mode
  };

  return (
    <div
      className="home-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Navbar */}
      <nav className="navbar">
        <div className="left-nav">
          <button onClick={goToProfile} className="nav-button">
            Profile
          </button>
          <button onClick={goToLeaderboard} className="nav-button">
            Leaderboard
          </button>
        </div>
        <div className="right-nav">
          <button onClick={goToLogin} className="nav-button">
            Logout
          </button>
        </div>
      </nav>

      {/* Display the selected mode */}
      <p className="selected-mode">
        Selected Mode: <span>{selectedMode}</span>
      </p>

      {/* Modes Section */}
      <div className="modes-section">
        <div className="buttons-container">
          {/* Training Mode */}
          <button
            className="mode-button"
            onClick={() => handleModeSelection("Training Mode")}
            style={{ backgroundImage: `url(${trainingImage})` }}
          >
            Training Mode
          </button>
          {/* Tournament Mode */}
          <button
            className="mode-button"
            onClick={() => handleModeSelection("Tournament Mode")}
            style={{ backgroundImage: `url(${tournamentImage})` }}
          >
            Tournament Mode
          </button>
          {/* Multiplayer Mode */}
          <button
            className="mode-button"
            onClick={() => handleModeSelection("Multiplayer Mode")}
            style={{ backgroundImage: `url(${multiplayerImage})` }}
          >
            Multiplayer Mode
          </button>
        </div>
      </div>

      {/* Play Button */}
      <div className="button-container">
        <button
          onClick={() => navigate("/play", { state: { selectedMode } })}
          className="play-button"
        >
          Play
        </button>
      </div>
    </div>
  );
};

export default Home;
