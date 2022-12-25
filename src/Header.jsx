import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <h2 className="header__greeting">Good afternoon, BlackBold.</h2>
      <h3 className="header__subGreeting">What's your main focus for today?</h3>
    </div>
  );
}
