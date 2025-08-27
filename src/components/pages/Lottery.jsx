import React from "react";

export default function Lottery() {
  return (
    <div 
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1a1a1a",
        color: "white",
        flexDirection: "column"
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>💣 Lotteru Game</h1>
      <p style={{ fontSize: "1.5rem" }}>Ye sirf Mines game ka page hai, header ke bina.</p>
    </div>
  );
}
