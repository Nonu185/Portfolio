import React, { useState } from "react";
import { Rnd } from "react-rnd";
import "./window.scss";

const MacWindow = ({
  children,
  width = "45vw",
  height = "45vh",
  windowName,
  setWindowsState,
  index=0,
}) => {
  const [size, setSize] = useState({ width, height });
  const set = 30;
  const [position, setPosition] = useState({
    x: 300 + index * set,
    y: 220 + index * set,
  });

  const [prevState, setPrevState] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const handlegreendot = () => {
  if (isZoomed) return;
  const Nav_height = 42;

  setPrevState({
    size,
    position,
  });

  setSize({
    width: "83vw",
    height: "80vh",
  });

  setPosition({
    x: window.innerWidth * 0.15,
    y: Nav_height,
  });

  setIsZoomed(true);
};

const handleyellowdot = () => {
  if (!prevState) return;

  setSize(prevState.size);
  setPosition(prevState.position);

  setIsZoomed(false);
};



  return (
    <Rnd
      size={size}
      position={position}
      onDragStop={(e, d) => {
        setPosition({ x: d.x, y: d.y });
      }}
      onResizeStop={(e, direction, ref, delta, pos) => {
        setSize({
          width: ref.style.width,
          height: ref.style.height,
        });
        setPosition(pos);
      }}
      bounds="parent"
    >
      <div className="window">
        <div className="nav">
          <div className="dots">
            <div
              className="dot red"
              onClick={() =>
                setWindowsState((state) => ({
                  ...state,
                  [windowName]: false,
                }))
              }
            />
            <div className="dot yellow" onClick={handleyellowdot} />
            <div className="dot green" onClick={handlegreendot}/>
          </div>
        </div>

        <div className="main-content">{children}</div>
      </div>
    </Rnd>
  );
};

export default MacWindow;
