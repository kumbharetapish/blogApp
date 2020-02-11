import React from "react";
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";
import SearchBar from "./SearchBar/SerachBar";
const Navbar = () => {
  return (
    <div className="navBar">
      <div className="logo-nav">
        <Logo />
        <Navigation />
      </div>
      <SearchBar />
    </div>
  );
};

export default Navbar;
