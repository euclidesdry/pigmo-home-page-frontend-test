import React from "react";
import { css } from "../../styled-system/css";

export default function Footer() {
  const footerStyle = css({
    backgroundColor: "#333",
    color: "#fff",
    padding: "1rem",
    textAlign: "center",
  });

  const linkStyle = css({
    marginRight: "1rem",
    fontSize: "0.75rem",
    textDecoration: "underline",
    color: "#fff",
  });

  return (
    <footer className={footerStyle}>
      <p>©2024 Pigmo. All rights reserved. Licensed and authorized.</p>
      <div>
        <a href="https://discord.com" className={linkStyle}>
          Discord
        </a>
        <a href="https://telegram.org" className={linkStyle}>
          Telegram
        </a>
        <a href="https://twitter.com" className={linkStyle}>
          Twitter
        </a>
        <a href="https://facebook.com" className={linkStyle}>
          Facebook
        </a>
      </div>
    </footer>
  );
}
