import React from "react";
import img2 from "../img/2.png";
import img3 from "../img/3.png";
import img4 from "../img/4.png";
import img5 from "../img/5.png";
import "./travel.css";
import Img_text from "./img_text";
import { Link } from "react-router-dom";

function TravelExhibition() {
  return (
    <div>
      <header>
        <div className="table">
          <div className="navbar">
            <h1>travel</h1>
            <ul>
              <li>
                <Link to={"/about"} href="">
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/about"} href="">
                  Home
                </Link>
              </li>
              <li>
                <a href="">
                  <Link to={"/about"} href="">
                    Home
                  </Link>
                </a>
              </li>
              <li>
                <Link to={"/about"} href="">
                  Home
                </Link>
              </li>
            </ul>
            <button>Get in Touch</button>
          </div>
          <div className="main">
            <div className="main_fan">
              <div className="easy">
                <div className="words">
                  <img src={img2} alt="" />
                  <p>Date</p>
                </div>
                <div className="words">
                  <img src={img3} alt="" />
                  <p>price low to High</p>
                </div>
                <div className="words">
                  <img src={img4} alt="" />
                  <p>Price High to low</p>
                </div>
                <div className="words">
                  <img src={img5} alt="" />
                  <p>Name (A-z)</p>
                </div>
              </div>
              <Img_text />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default TravelExhibition;
