import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
const Player = ({ currentSong }) => {
  //ref
  const audioRef = useRef(null);
  //evet handler
  const playSongHandler = () => {
    audioRef.current.play();
  };
  return (
    <div className="player">
      <div className="timecontrol">
        <p>Start time</p>
        <input type="range" />
        <p>End Time</p>
      </div>
      <div className="playcontrol">
        <FontAwesomeIcon size="2x" icon={faAngleLeft} />
        <FontAwesomeIcon onClick={playSongHandler} size="2x" icon={faPlay} />
        <FontAwesomeIcon size="2x" icon={faAngleRight} />
      </div>
      <audio ref={audioRef} src={currentSong.audio}></audio>
    </div>
  );
};

export default Player;
