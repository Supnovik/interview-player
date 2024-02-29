import { useEffect } from "react";
import Button from "../Button/Button";
import rewindBackButton from "../../assets/icons/rewind-back.svg";
import playStreamButton from "../../assets/icons/play-stream.svg";
import pauseStreamButton from "../../assets/icons/pause-stream.svg";
import { tracks } from "../../data/tracks";

interface ControlsProps {
  audioRef: React.MutableRefObject<HTMLAudioElement | undefined>;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  setNextTrack: () => void;
  setPreviusTrack: () => void;
}

export default function Controls({
  audioRef,
  isPlaying,
  setIsPlaying,
  setNextTrack,
  setPreviusTrack
}: ControlsProps) {
  useEffect(() => {
    if (audioRef.current) {
      isPlaying ? audioRef.current.play() : audioRef.current.pause();
    }
  }, [isPlaying, audioRef]);

  const togglePlayPause = () => {
    setIsPlaying((prev: boolean) => !prev);
  };

  return (
    <div className="Player-controls-container">
      <Button
        image={rewindBackButton}
        style={{ width: "54px", height: "54px" }}
        onClick={setPreviusTrack}
      />
      <Button
        image={isPlaying ? playStreamButton : pauseStreamButton}
        style={{ width: "64px", height: "64px" }}
        onClick={togglePlayPause}
      />
      <Button
        image={rewindBackButton}
        style={{ width: "54px", height: "54px", transform: "rotate(180deg)" }}
        onClick={setNextTrack}
      />
    </div>
  );
}
