import React, { useEffect, useRef } from "react";

const ReactRogue = ({ width, height, titlesize }) => {
  const canvasRef = useRef();

  useEffect(() => {
    console.log("Draw to canvas");
    const ctx = canvas.getContext("2d");
  }, []);
  return (
    <div>
      <canvas
        ref={canvasRef}
        width={width * titlesize}
        height={height * titlesize}
        style={{ border: "1px solid black" }}
      ></canvas>
      <div>shanaka</div>
    </div>
  );
};

export default ReactRogue;
