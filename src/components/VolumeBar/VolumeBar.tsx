import { ChangeEvent, useEffect, useState } from "react";
import InputRange from "../InputRange/InputRange";
import volumeCrossImg from "../../assets/icons/volume-cross.svg";
import volumeImg from "../../assets/icons/volume-loud.svg";
import "./VolumeBar.css";

interface VolumeBarProps {
  audioRef: React.MutableRefObject<HTMLAudioElement | undefined>;
}

export default function VolumeBar({ audioRef }: VolumeBarProps) {
  const [volume, setVolume] = useState(50);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume, audioRef]);

  return (
    <div className="VolumeBar-container">
      <img src={volumeCrossImg} draggable="false" />
      <InputRange
        min={0}
        max={100}
        value={volume}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setVolume(Number(event.target.value))
        }
        style={{
          background: `linear-gradient(to right, #05ac6a ${volume}%, #ccc ${volume}%)`
        }}
      />
      <img src={volumeImg} draggable="false" />
    </div>
  );
}
