import React from "react";

const HeaderMobile = () => {
  return (
    <div className="header-mobile">
      <div className="side-wrap">
        <div className="panel_top">
          <nav className="menu-main-nav-area">
            <ul id="menu-mobile" className="menu-main-nav">
              <li className="current-menu-ancestor current-menu-parent">
                <a href="/">
                  <i className="fa fa-undo fa-lg" aria-hidden="true"></i>{" "}
                  <span>صفحه اصلی</span>
                </a>
              </li>
              <li className="current-menu-ancestor current-menu-parent">
                <a href="/session">
                  <i className="fa fa-user" aria-hidden="true"></i>{" "}
                  <span>ثبت نام در سجام</span>
                </a>
              </li>
              <li className="current-menu-ancestor current-menu-parent">
                <a href="/session">
                  <i className="fa fa-edit" aria-hidden="true"></i>{" "}
                  <span>ویرایش اطلاعات قبلی</span>
                </a>
              </li>
              <li className="current-menu-ancestor current-menu-parent">
                <a href="/RecoveryTraceCode">
                  <i className="fa fa-recycle" aria-hidden="true"></i>{" "}
                  <span>بازیابی کد پیگیری</span>
                </a>
              </li>
              <li className="current-menu-ancestor current-menu-parent">
                <a href="/msisdn">
                  <i className="fa fa-lg fa-mobile-phone" aria-hidden="true"></i>{" "}
                  <span>ویرایش شماره تلفن همراه</span>
                </a>
              </li>
              <li className="current-menu-ancestor current-menu-parent">
                <a href="/authenticationOffices">
                  <i className="fa fa-list fa-lg" aria-hidden="true"></i>{" "}
                  <span> مراکز احراز هویت</span>
                </a>
              </li>
              <li className="current-menu-ancestor current-menu-parent">
                <a href="https://www.sejam.ir/fa/FAQ">
                  <i className="fa fa-question fa-lg" aria-hidden="true"></i>{" "}
                  <span>سوالات متداول</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="mask show"></div>
    </div>
  );
};

export default HeaderMobile;
