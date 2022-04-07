import React from "react";

const Navbar = () => {
  return (
    <div class="navbar navbar-inverse my-navber">
      <div class="logo-wrapper cllose">
        <a href="javascript:;">
          <img src="./images/logo-min.png" class="img-responsive" />
        </a>
        <a href="javascript:;" class="menu-bar-mobile">
          <i class="fa fa-bars color-white fa-lg" aria-hidden="true"></i>
        </a>
      </div>
      <div class="header-wrapper   cllose">
        <div class="pull-left main-header-button-container">
          <a href="/session" class="btn btn-white">
            <i class="fa fa-sign-in"></i>
            <span>ورود به سجام</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
