import React from "react";
import { css } from "../../styled-system/css";

export default function MainContent() {
  const mainStyle = css({
    flexGrow: 1,
    padding: "1rem",
  });

  const welcomeSectionStyle = css({
    backgroundColor: "#66cdaa",
    padding: "1rem",
    borderRadius: "0.5rem",
    textAlign: "center",
  });

  const registerButtonStyle = css({
    backgroundColor: "#333",
    color: "#fff",
    padding: "0.5rem 1rem",
    borderRadius: "0.25rem",
    border: "none",
    cursor: "pointer",
  });

  const cryptoSectionStyle = css({
    marginTop: "1rem",
  });

  const casinoSectionStyle = css({
    marginTop: "1rem",
  });

  const casinoGamesStyle = css({
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "1rem",
  });

  return (
    <main className={mainStyle}>
      <div className={welcomeSectionStyle}>
        <h1>Boas vindas ao Pigmo!</h1>
        <p>
          Jogue inteligente conosco. Crie sua conta ou entre agora para ganhar
          recompensas.
        </p>
        <button className={registerButtonStyle}>Quero me Registar</button>
      </div>

      <div className={cryptoSectionStyle}>
        <h2>Criptomoedas</h2>
        {/* Add your crypto cards here */}
      </div>

      <div className={casinoSectionStyle}>
        <h2>Casino</h2>
        <div className={casinoGamesStyle}>
          <div>Originals</div>
          <div>Slots</div>
          <div>Game Shows</div>
          <div>Live Casino</div>
          <div>Table Games</div>
          <div>Blackjack</div>
          <div>Roulette</div>
        </div>
      </div>
    </main>
  );
}
