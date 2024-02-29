import { InputHTMLAttributes, Ref, forwardRef } from "react";
import "./InputRange.css";

const InputRange = forwardRef(
  (
    props: InputHTMLAttributes<HTMLInputElement>,
    ref?: Ref<HTMLInputElement>
  ) => {
    return <input className="InputRange" type="range" ref={ref} {...props} />;
  }
);

export default InputRange;
