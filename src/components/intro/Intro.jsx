import "./intro.scss";
import Sidebar from "../sidebar/Sidebar";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      strings: ["Computer Science Student", "Aspiring Software Engineer"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <Sidebar />
      <div className="container">
        <h1>Hey there, &#128075; </h1>
        <h1 className="name">I am Steve &#129299;</h1>
        <h1 ref={textRef}></h1>
      </div>
    </div>
  );
}
