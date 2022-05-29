import { useState } from "react";
import Sound from "react-sound";
import InspirationalMusic from "../imagination.mp3";

const Music = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {!isPlaying ? "Play" : "Stop"}
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
