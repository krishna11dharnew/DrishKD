import React from "react";

export const Circle = ({ size = 120, color = "#6366f1", borderWidth = 4, borderColor = "rgba(255,255,255,0.12)", gradient = false }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: gradient ? `linear-gradient(135deg, ${color}, rgba(99,102,241,0.5))` : color,
        border: `${borderWidth}px solid ${borderColor}`,
        boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden"
      }}
    />
  );
};