import { useState } from "react";
import Sound from "react-sound";
import InspirationalMusic from "../imagination.mp3";
import { GiSpeakerOff, GiSpeaker } from "react-icons/gi";
import "./Music.css";

const Music = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      <button className="music-button" onClick={() => setIsPlaying(!isPlaying)}>
        {!isPlaying ? <GiSpeakerOff /> : <GiSpeaker />}
      </button>
      <Sound
        url={InspirationalMusic}
        playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.PAUSED}
        volume={8}
        loop={true}
      />
    </div>
  );
};

export default Music;
