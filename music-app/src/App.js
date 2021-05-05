import React, { useState } from "react";

import Player from "./components/Player";
import Song from "./components/Song";
import "./styles/app.scss";
import data from "./util";
function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  return (
    <div className="App">
      <h1>Music App</h1>
      <Song currentSong={currentSong} />
      <Player currentSong={currentSong} />
    </div>
  );
}

export default App;
