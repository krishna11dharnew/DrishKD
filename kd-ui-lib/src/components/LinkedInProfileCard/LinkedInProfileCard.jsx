import React from "react";

export const LinkedInProfileCard = ({
  name = "John Doe",
  title = "Software Engineer",
  location = "San Francisco, CA",
  connections = 500,
  image = "https://randomuser.me/api/portraits/men/1.jpg",
  accent = "#0ea5e9",
  bg = "#0f172a",
  onConnectClick = () => {},
  onMessageClick = () => {}
}) => {
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  return (
    <div style={{ background: bg, borderRadius: "20px", padding: "20px", width: "280px", fontFamily: "system-ui,sans-serif", boxShadow: "0 10px 40px rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.08)" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
        <img src={image} alt={name} style={{ width: "80px", height: "80px", borderRadius: "50%", border: "3px solid " + alpha(accent, 0.3) }} />
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "18px", fontWeight: "700", color: "#fff" }}>{name}</div>
          <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", marginTop: "4px" }}>{title}</div>
          <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", marginTop: "4px" }}>{location}</div>
        </div>
        <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", marginTop: "8px" }}>{connections}+ connections</div>
      </div>
      <div style={{ display: "flex", gap: "8px" }}>
        <button onClick={onConnectClick} style={{ flex: 1, padding: "8px", borderRadius: "8px", border: "none", background: "linear-gradient(135deg, " + accent + ", " + alpha(accent, 0.75) + ")" , color: "#fff", fontSize: "13px", fontWeight: "700", cursor: "pointer" }}>Connect</button>
        <button onClick={onMessageClick} style={{ flex: 1, padding: "8px", borderRadius: "8px", border: "1px solid " + alpha(accent, 0.3), background: "transparent", color: accent, fontSize: "13px", fontWeight: "700", cursor: "pointer" }}>Message</button>
      </div>
    </div>
  );
};