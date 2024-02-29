import "./Vinyl.css";

interface VinylProps {
  coverSrc: string;
  isPlaying: boolean;
}

export default function Vinyl({ coverSrc, isPlaying }: VinylProps) {
  return (
    <img
      src={coverSrc}
      className={`Vinyl ${isPlaying ? "Vinyl-spin" : ""}`}
      alt="Vinyl img"
      draggable="false"
    />
  );
}
