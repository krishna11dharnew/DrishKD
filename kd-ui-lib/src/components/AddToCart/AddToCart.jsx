import React, { useState } from "react";

export const AddToCart = ({
  initialCount = 0,
  btnText = "Add to Cart",
  accent = "#6366f1",
  bg = "#0f172a",
  onAdd = () => {},
  onRemove = () => {}
}) => {
  const [count, setCount] = useState(initialCount);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  const handleAdd = () => {
    setCount(prev => prev + 1);
    onAdd(count + 1);
  };
  const handleRemove = () => {
    if (count > 0) {
      setCount(prev => prev - 1);
      onRemove(count - 1);
    }
  };
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      <button
        onClick={handleRemove}
        style={{
          padding: "8px 12px",
          borderRadius: "8px",
          border: "1px solid " + alpha(accent, 0.3),
          background: "transparent",
          color: count > 0 ? accent : "rgba(255,255,255,0.3)",
          cursor: count > 0 ? "pointer" : "not-allowed",
          fontSize: "14px",
          fontWeight: "600",
          fontFamily: "system-ui,sans-serif"
        }}
      >
        -
      </button>
      <div style={{
        width: "40px",
        textAlign: "center",
        fontSize: "16px",
        fontWeight: "700",
        color: "#fff"
      }}>
        {count}
      </div>
      <button
        onClick={handleAdd}
        style={{
          padding: "8px 12px",
          borderRadius: "8px",
          border: "none",
          background: "linear-gradient(135deg, " + accent + ", " + alpha(accent, 0.7) + ")" ,
          color: "#fff",
          cursor: "pointer",
          fontSize: "14px",
          fontWeight: "600",
          fontFamily: "system-ui,sans-serif"
        }}
      >
        {btnText}
      </button>
    </div>
  );
};