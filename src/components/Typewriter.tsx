import React, { useState, useEffect, useMemo } from "react";
import { JSX } from "react/jsx-runtime";

const typeWriterText = ["Tran Vo (Jenny)"];
const typing_speed = 150;
const backspace_speed = 50;

function Typewriter(): JSX.Element {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [isFullyDisplayed, setIsFullyDisplayed] = useState(false);

  useEffect(() => {
    const interval = setInterval(
      () => {
        if (isDeleting) {
          setText((prev) => prev.slice(0, -1));
          if (text === "") {
            setIsDeleting(false);
            setIsFullyDisplayed(false);
          }
        } else {
          const fullText = typeWriterText[index];
          setText((prev) => fullText.slice(0, prev.length + 1));
          if (text === fullText) {
            setIsFullyDisplayed(true);
            setTimeout(() => {
              setIsDeleting(true);
              setTimeout(() => {
                setIsFullyDisplayed(false);
                setIndex((index + 1) % typeWriterText.length);
              }, 500);
            }, 1000);
          }
        }
      },
      isFullyDisplayed ? backspace_speed : typing_speed,
    );

    return () => clearInterval(interval);
  }, [text, isDeleting, index, isFullyDisplayed]);

  const blinkingCursor = useMemo(() => {
    return isFullyDisplayed ? (
      ""
    ) : (
      <span
        className="ml-[0.1em] inline-block h-[1.2em] w-[0.2em] animate-pulse"
        style={{ backgroundColor: "#e25098" }}
      >
        _
      </span>
    );
  }, [isFullyDisplayed]);

  return (
    <p className="bg-accent bg-clip-text text-5xl font-bold text-transparent sm:text-6xl md:text-7xl xl:text-8xl">
      {text}
      {blinkingCursor}
    </p>
  );
}

export default Typewriter;
