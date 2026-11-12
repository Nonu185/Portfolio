import React, { useState } from "react";
import { Rnd } from "react-rnd";
import "./window.scss";

// Shared incrementing z-index tracker so active windows always come to front
let globalZIndex = 200;

const MacWindow = ({
  children,
  width = "50vw",
  height = "55vh",
  windowName,
  setWindowsState,
  index = 0,
}) => {
  const [size, setSize] = useState({ width, height });
  const set = 28;
  const [position, setPosition] = useState({
    x: Math.max(60, 240 + index * set),
    y: Math.max(60, 80 + index * set),
  });

  const [zIndex, setZIndex] = useState(() => {
    globalZIndex += 1;
    return globalZIndex;
  });

  const bringToFront = () => {
    globalZIndex += 1;
    setZIndex(globalZIndex);
  };

  const [prevState, setPrevState] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const handlegreendot = (e) => {
    e.stopPropagation();
    if (isZoomed) {
      if (prevState) {
        setSize(prevState.size);
        setPosition(prevState.position);
        setIsZoomed(false);
      }
      return;
    }
    const Nav_height = 42;

    setPrevState({
      size,
      position,
    });

    setSize({
      width: "86vw",
      height: "82vh",
    });

    setPosition({
      x: window.innerWidth * 0.07,
      y: Nav_height,
    });

    setIsZoomed(true);
  };

  const handleyellowdot = (e) => {
    e.stopPropagation();
    if (!prevState) return;

    setSize(prevState.size);
    setPosition(prevState.position);
    setIsZoomed(false);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (setWindowsState) {
      setWindowsState((state) => ({
        ...state,
        [windowName]: false,
      }));
    }
  };

  return (
    <Rnd
      size={size}
      position={position}
      style={{ zIndex }}
      className="mac-window-rnd"
      dragHandleClassName="nav"
      onMouseDown={bringToFront}
      onTouchStart={bringToFront}
      onDragStart={bringToFront}
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
      minWidth={300}
      minHeight={200}
    >
      <div className="window" onMouseDown={bringToFront}>
        <div className="nav">
          <div className="dots">
            <div
              className="dot red"
              title="Close"
              onClick={handleClose}
              onMouseDown={(e) => e.stopPropagation()}
            />
            <div
              className="dot yellow"
              title="Restore"
              onClick={handleyellowdot}
              onMouseDown={(e) => e.stopPropagation()}
            />
            <div
              className="dot green"
              title="Maximize"
              onClick={handlegreendot}
              onMouseDown={(e) => e.stopPropagation()}
            />
          </div>
        </div>

        <div className="main-content">{children}</div>
      </div>
    </Rnd>
  );
};

export default MacWindow;
