// import React from "react";
import constructionImg from "../assets/construcao.png";

export default function ConstructionScreen() {
  return (
    <div
       style={{
        width: "70vw",
        minHeight: "70vh", // ocupa toda a altura da tela
        backgroundImage: `url(${constructionImg})`,
        backgroundSize: "contain", // ajusta imagem para caber na tela
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center", // centraliza a imagem
        display: "flex",
        justifyContent: "center", // centraliza horizontal
        alignItems: "center",     // centraliza vertical
      }}
    >
      {/* Opcional: um texto sobre a construção */}
      <h1 style={{ color: "#292020ff", fontSize: "2rem" }}>Site em construção</h1>
    </div>
  );
}
