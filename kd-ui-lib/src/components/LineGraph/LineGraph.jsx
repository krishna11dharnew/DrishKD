import React, { useRef, useEffect } from "react";

export const LineGraph = ({
  data = [65, 59, 80, 81, 56, 55, 40],
  labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  accent = "#6366f1",
  bg = "#0f172a",
  width = 480,
  height = 240
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const alpha = (hex, op) => {
      const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
      return "rgba(" + r + "," + g + "," + b + "," + op + ")";
    };

    const drawGraph = () => {
      ctx.clearRect(0, 0, width, height);
      const maxValue = Math.max(...data);
      const xScale = (width - 60) / (data.length - 1);
      const yScale = (height - 60) / maxValue;

      // Draw grid
      ctx.beginPath();
      ctx.strokeStyle = "rgba(255,255,255,0.06)";
      ctx.lineWidth = 1;
      for (let i = 0; i <= maxValue; i += 20) {
        ctx.moveTo(40, height - 40 - i * yScale);
        ctx.lineTo(width - 20, height - 40 - i * yScale);
      }
      ctx.stroke();

      // Draw line
      ctx.beginPath();
      ctx.strokeStyle = accent;
      ctx.lineWidth = 3;
      for (let i = 0; i < data.length; i++) {
        const x = 40 + i * xScale;
        const y = height - 40 - data[i] * yScale;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Draw points
      ctx.fillStyle = accent;
      for (let i = 0; i < data.length; i++) {
        const x = 40 + i * xScale;
        const y = height - 40 - data[i] * yScale;
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw labels
      ctx.fillStyle = "rgba(255,255,255,0.6)";
      ctx.font = "12px system-ui,sans-serif";
      ctx.textAlign = "center";
      for (let i = 0; i < labels.length; i++) {
        const x = 40 + i * xScale;
        ctx.fillText(labels[i], x, height - 20);
      }
    };

    drawGraph();
  }, [data, labels, accent, bg, width, height]);

  return (
    <div style={{ background: bg, borderRadius: "12px", padding: "20px", boxShadow: "0 10px 40px rgba(0,0,0,0.4)" }}>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};