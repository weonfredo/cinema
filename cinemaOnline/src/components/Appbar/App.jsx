import React from "react";
import "./App.css";
import { Fondo } from "../Fondo";
// import feather from "feather-icons";

export default function App() {
  // useEffect(() => {
  //   // Llamar a feather.replace() después de que los elementos se rendericen en el DOM
  //   feather.replace();
  // }, []);
  return (
    <div className="main">
      <div>
        <div className="header h-full">
          <div className="empresa">
            CINEMA ONLINE
            {/* <a
              href="https://www.facebook.com/unsmperu"
              className="navbar__link"
            >
              <i data-feather="facebook"></i>
            </a> */}
          </div>
          <div className="header-menu">
            <div className="logo">Cinema Online</div>
            <ul>
              <li>
                <a href="#">
                  <i className="fas fa-search"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-bell"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-user"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className="body">
          <div className="sidebar">
            <div>
              <ul>
                <li>
                  <a className="button hover:bg-blue-700" href="#">
                    <span className="icon">
                      <i className="fas fa-book"></i>
                    </span>
                    <span className="title">Books</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon">
                      <i className="fas fa-file-video"></i>
                    </span>
                    <span className="title">Movies</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon">
                      <i className="fas fa-volleyball-ball"></i>
                    </span>
                    <span className="title">Sports</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="active">
                    <span className="icon">
                      <i className="fas fa-blog"></i>
                    </span>
                    <span className="title">Blogs</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon">
                      <i className="fas fa-leaf"></i>
                    </span>
                    <span className="title">Nature</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-black text-white"></div>
        </div>
      </div>
    </div>
  );
}
