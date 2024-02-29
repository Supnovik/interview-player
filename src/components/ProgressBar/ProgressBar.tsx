import { SyntheticEvent, useState } from "react";
import InputRange from "../InputRange/InputRange";

export default function ProgressBar({
  audioSrc,
  audioRef,
  progressBarRef,
  setNextTrack
}: any) {
  const [duration, setDuration] = useState(0);

  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    if (progressBarRef.current) progressBarRef.current.max = seconds;
  };

  const onTimeUpdate = (event: SyntheticEvent<HTMLAudioElement>) => {
    progressBarRef.current.value = (
      event.target as HTMLAudioElement
    ).currentTime;

    progressBarRef.current.style.setProperty(
      "--range-progress",
      `${(progressBarRef.current.value / duration) * 100}%`
    );
  };

  const handleProgressChange = () => {
    audioRef.current.currentTime = progressBarRef.current.value;
  };

  return (
    <div>
      <audio
        src={audioSrc}
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
        onTimeUpdate={onTimeUpdate}
        onEnded={setNextTrack}
      />
      <InputRange
        ref={progressBarRef}
        defaultValue="0"
        onChange={handleProgressChange}
      />
    </div>
  );
}
