import React, { useState, useEffect, useRef } from "react";

export const Graph = ({
  data = [25, 50, 75, 100, 75, 50, 25],
  width = 600,
  height = 300,
  accent = "#6366f1",
  bg = "#0f172a",
  gridColor = "rgba(255,255,255,0.05)",
  lineWidth = 2,
  pointRadius = 4
}) => {
  const canvasRef = useRef(null);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  const drawGraph = (ctx) => {
    const padding = 40;
    const graphWidth = width - padding * 2;
    const graphHeight = height - padding * 2;
    const maxValue = Math.max(...data);
    const xStep = graphWidth / (data.length - 1);
    const yScale = graphHeight / maxValue;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw background
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, width, height);

    // Draw grid
    ctx.strokeStyle = gridColor;
    ctx.lineWidth = 1;
    for (let i = 0; i <= 10; i++) {
      const y = padding + (graphHeight / 10) * i;
      ctx.beginPath();
      ctx.moveTo(padding, y);
      ctx.lineTo(width - padding, y);
      ctx.stroke();
    }

    // Draw graph line
    ctx.beginPath();
    ctx.strokeStyle = accent;
    ctx.lineWidth = lineWidth;
    data.forEach((value, i) => {
      const x = padding + xStep * i;
      const y = height - padding - value * yScale;
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.stroke();

    // Draw points
    ctx.fillStyle = accent;
    data.forEach((value, i) => {
      const x = padding + xStep * i;
      const y = height - padding - value * yScale;
      ctx.beginPath();
      ctx.arc(x, y, pointRadius, 0, Math.PI * 2);
      ctx.fill();
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    drawGraph(ctx);
  }, [data, width, height, accent, bg, gridColor, lineWidth, pointRadius]);

  return (
    <div style={{ background: bg, borderRadius: "20px", padding: "20px", width: width + "px", boxShadow: "0 10px 40px rgba(0,0,0,0.5)" }}>
      <canvas ref={canvasRef} width={width} height={height} />
    </div>
  );
};