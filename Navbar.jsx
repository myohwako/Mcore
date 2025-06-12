import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";


const Navbar = () => {
  return (
    <nav className="navbar">
      {/* 왼쪽: 로고 */}
      <div className="navbar-logo">
        <NavLink to="/">∑</NavLink>
      </div>

      {/* 가운데: 메뉴 */}
      <div className="navbar-menu">
        <NavLink to="/game" className="nav-item">Game</NavLink>
        {/* <span>|</span> */}
        <NavLink to="/music" className="nav-item">Music</NavLink>
        {/* <span>|</span> */}
        <NavLink to="/movie" className="nav-item">Movie</NavLink>
        {/* <span>|</span> */}
        <NavLink to="/info" className="nav-item">Info</NavLink>
        {/* <span>|</span> */}
        <NavLink to="/image" className="nav-item">Image</NavLink>
      </div>

      {/* 오른쪽: 유저 아이콘 */}
      <div className="navbar-profile">
        <NavLink to="/my">
          <div className="profile-icon" />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;