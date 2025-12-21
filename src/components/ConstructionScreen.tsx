// import React from "react";
import constructionImg from "../assets/construcao.png";
import "../styles/components/ConstructionScreen.css";

export default function ConstructionScreen() {
  return (
    <div
      className="construction-screen"
      style={{
        backgroundImage: `url(${constructionImg})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Opcional: um texto sobre a construção */}
      <h1>Site em construção</h1>
    </div>
  );
}
