import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
 
  return (
    <header>
      <nav
        className="navbar navbar-light navbar-expand-xl fixed-top navMenu"
        id="nav"
      >
        <nav className="navbar navbar-expand-xl fixed-top">
          <Link className="navbar-brand" to="/">
            <img
              src="./images/logoMat.png"
              className="logoMat"
              style={{ float: "right" }}
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse dark-Collapse"
            id="navbarCollapse"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" target="_blank" href="http://localhost:3001/">
                  <i className="fas fa-user"></i>ثبت نام در سجام
                </a>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Notifications">
                  <i className="fas fa-list"></i>اطلاعیه ها
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/News">
                  <i className="fas fa-newspaper"></i>اخبار
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink2"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-headset"></i>راهنما
                </a>
                <div
                  className="dropdown-menu dropdown-primary"
                  aria-labelledby="navbarDropdownMenuLink2"
                >
                  <a className="dropdown-item" href="/fa/Guide">
                    راهنمای تکمیل فرم
                  </a>
                  <a className="dropdown-item" href="/fa/Home/VideoGallery">
                    فیلم های آموزشی{" "}
                  </a>
                  <a className="dropdown-item" href="/fa/FAQ">
                    سوالات متداول
                  </a>
                </div>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="http://localhost:3001/">
                  <i className="fas fa-gavel"></i>بیانیه حقوقی
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="https://www.sejam.ir/fa/Gallery">
                  <i className="fas fa-images"></i>گالری
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="https://ddn.csdiran.ir">
                  <i className="fas fa-globe-africa"></i>درگاه یکپارچه ذینفعان{" "}
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  target="_blank"
                  href="https://profilesejam.csdiran.ir/authenticationOffices"
                >
                  <i className="fas fa-user-check"></i>مراکز احراز هویت
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="trainingLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-book"></i>محتوای آموزشی
                </a>
                <div
                  className="dropdown-menu dropdown-primary"
                  aria-labelledby="trainingLink"
                >
                  <a className="dropdown-item" href="/fa/ElementaryLevel">
                    سطح مقدماتی
                  </a>
                  <a className="dropdown-item" href="/fa/AdvancedLevel">
                    سطح پیشرفته{" "}
                  </a>
                </div>
              </li>
            </ul>

            <div className="form-inline mt-2 mt-md-0">
              <a
                className="navbar-brand"
                href="https://www.csdiran.ir/"
                target="_blank"
              >
                <img
                  src="./images/logo.png"
                  className="logoMat left"
                  style={{ float: "right" }}
                />
              </a>
            </div>
          </div>
        </nav>
      </nav>
    </header>
  );
};

export default Header;
