import React from "react";

function Header() {
  return (
    <nav className="navbar navbar-light bg-light d-flex">
      <h1 className="navbar-brand text-light mr-auto px-3 logo">William Vaughn</h1>
      <a className="px-3" href="/">About</a>
      <a className="px-3" href="/contact">Contact</a>
      <a className="px-3" href="/portfolio">Portfolio</a>
    </nav>
  );
}

export default Header;