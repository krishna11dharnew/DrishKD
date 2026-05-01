import React, { useState } from "react";

export const SidePanel = ({
  position = "right",
  width = "320px",
  bg = "#0f172a",
  accent = "#6366f1",
  title = "Settings",
  isOpen = false,
  onClose = () => {},
  children
}) => {
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  return (
    <div style={{ position: "fixed", top: 0, [position]: 0, height: "100vh", width: isOpen ? width : 0, zIndex: 1000, transition: "width 0.3s ease" }}>
      <div style={{ position: "absolute", top: 0, [position]: 0, height: "100%", width: width, background: bg, borderLeft: position === "right" ? "1px solid rgba(255,255,255,0.08)" : "none", borderRight: position === "left" ? "1px solid rgba(255,255,255,0.08)" : "none", boxShadow: "0 0 40px rgba(0,0,0,0.5)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <div style={{ fontSize: "18px", fontWeight: "700", color: "#fff" }}>{title}</div>
          <button onClick={onClose} style={{ background: "transparent", border: "none", cursor: "pointer", padding: "8px", borderRadius: "8px", transition: "background 0.2s" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: "stroke 0.2s" }}>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div style={{ padding: "20px", overflowY: "auto", height: "calc(100% - 60px)" }}>
          {children}
        </div>
      </div>
    </div>
  );
};