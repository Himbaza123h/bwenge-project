import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import $ from "jquery";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiLogOut } from "react-icons/fi";
import { SiCitrix } from "react-icons/si";
import anime from "animejs";
import history from "../Redux/actions/history";
import Modal from "./Modal";
import BwengeLogo from "./../imgs/Logowhite.jpg";
import ProjectPng from "./../imgs/project.png";
import useWindowDimensions from "./useWindowDimensions";
import "./styles/header.css";


const Header = () => {
  const [loginModal, setLoginModal] = useState(false);

  return (
    <div className="header">
      <nav className="navbar fixed-top navbar-expand-lg bg-body " id="theUpperNav">
        <div className="container-fluid">
          <div className="paragr">
            <Link to="/" className="navbar-brand">
              <img src={BwengeLogo} alt="Bwenge Logo" />
            </Link>
            <p className="par"> Bwenge <style>@import url('https://fonts.cdnfonts.com/css/mogra');</style> </p>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <GiHamburgerMenu size={40} />
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent" style={{ height: "7vh", marginLeft: "211px" }}>
            <ul className="navbar-nav ms-4 me-auto ulnavsBars">
              <li className="nav-item itemu">
                <Link to="/" className="nav-link">HOME</Link>
              </li>

              <li className="nav-item ">
                <Link to="/about" className="nav-link">ABOUT</Link>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  PROJECTS
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/diasporaprojects" className="dropdown-item">Diaspora</Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link to="/universityprojects" className="dropdown-item">University & College</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/communities" className="nav-link">COMMUNITIES</Link>
              </li>

              <li className="nav-item">
                <Link to="/bwengecourses/longcourses" className="nav-link">COURSES</Link>
              </li>

              <li className="nav-item">
                <Link to="/nsangiza" className="nav-link">NSANGIZA</Link>
              </li>

              {localStorage.getItem("institution") && (
                <li className="nav-item">
                  <Link to="/institutiondashboard" className="nav-link">My institution</Link>
                </li>
              )}

              <li>
                <div className="ui search searchPlace">
                  <div className="ui icon input">
                    <input type="text" className="searchinput" id="mySearchBox" placeholder="Search here" />
                  </div>
                </div>
              </li>
              <li>
                <div className="loginSignupBTN">
                  <button type="button" className="btni" onClick={(e) => setLoginModal(true)}>Login</button>
                  <button type="button" className="btnii" onClick={(e) => setLoginModal(true)}>
                    <span className="button-text">SignUp</span>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;

