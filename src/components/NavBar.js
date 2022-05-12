import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <Link to="/">HOME</Link>
      <Link to="/about">ABOUT</Link>
    </div>
  );
}
