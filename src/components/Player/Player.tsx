import { useRef, useState } from "react";
import "./Player.css";
import Controls from "../Controls/Controls";
import { tracks } from "../../data/tracks";
import ProgressBar from "../ProgressBar/ProgressBar";
import VolumeBar from "../VolumeBar/VolumeBar";
import Vinyl from "../Vinyl/Vinyl";

export default function Player() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();
  const progressBarRef = useRef();

  const setNextTrack = () => {
    setCurrentTrackIndex((index: number) =>
      index < tracks.length - 1 ? index + 1 : 0
    );
    setIsPlaying(false);
  };

  const setPreviusTrack = () => {
    setCurrentTrackIndex((index: number) =>
      index > 0 ? index - 1 : tracks.length - 1
    );
    setIsPlaying(false);
  };

  return (
    <div className="Player-container">
      <Controls
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        setNextTrack={setNextTrack}
        setPreviusTrack={setPreviusTrack}
      />
      <div className="Player-middle-container">
        <VolumeBar audioRef={audioRef} />
        <div className="Player-title-container">
          <span className="Player-title">
            {tracks[currentTrackIndex].title}
          </span>
        </div>
        {isPlaying && (
          <ProgressBar
            audioSrc={tracks[currentTrackIndex].src}
            audioRef={audioRef}
            progressBarRef={progressBarRef}
            setNextTrack={setNextTrack}
          />
        )}
      </div>
      <div className="Player-vinyl-container">
        <Vinyl
          coverSrc={tracks[currentTrackIndex].cover}
          isPlaying={isPlaying}
        />
      </div>
    </div>
  );
}
