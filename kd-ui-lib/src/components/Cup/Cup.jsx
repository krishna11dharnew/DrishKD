import React from "react";

export const Cup = ({
  color = "#7c3aed",
  height = "200px",
  width = "150px",
  liquidColor = "#6366f1",
  liquidLevel = "70%",
  borderColor = "rgba(255,255,255,0.12)",
  shadowColor = "rgba(0,0,0,0.4)"
}) => {
  return (
    <div
      style={{
        position: "relative",
        width: width,
        height: height,
        borderRadius: "20px 20px 100px 100px",
        background: color,
        border: "2px solid " + borderColor,
        boxShadow: "0 10px 40px " + shadowColor,
        overflow: "hidden"
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: liquidLevel,
          background: liquidColor,
          borderRadius: "20px 20px 100px 100px",
          transition: "height 0.3s ease"
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-10px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          height: "20px",
          background: color,
          borderRadius: "50%",
          border: "2px solid " + borderColor
        }}
      />
    </div>
  );
};