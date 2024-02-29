import "./Button.css";

export default function Button({ image, ...props }: any) {
  return (
    <button className="Button" {...props}>
      <img src={image} draggable="false" />
    </button>
  );
}
