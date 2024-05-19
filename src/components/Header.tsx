import React from "react";
import { css } from "../../styled-system/css";

export default function Header() {
  const headerStyle = css({
    backgroundColor: "#333",
    color: "#fff",
    padding: "1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  });

  const logoStyle = css({
    fontSize: "1.5rem",
    fontWeight: "bold",
  });

  const buttonStyle = css({
    backgroundColor: "#333",
    color: "#fff",
    padding: "0.5rem 1rem",
    borderRadius: "0.25rem",
    border: "none",
    cursor: "pointer",
  });

  return (
    <header className={headerStyle}>
      <div className={logoStyle}>Pigmo</div>
      <div>
        <button className={buttonStyle}>Login</button>
        <button className={buttonStyle}>Register</button>
      </div>
    </header>
  );
}
