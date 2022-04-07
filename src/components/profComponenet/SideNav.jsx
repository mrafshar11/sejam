import React from "react";

const SideNav = () => {
  return (
    <div className="rirgh-menu hidden-xs cllose">
      <ul className="sidebar-menu tree">
        <li className="">
          <a href="/">
            <i className="fa fa-lg fa-home" aria-hidden="true"></i>{" "}
            <span>صفحه اصلی</span>
          </a>
        </li>
        <li className="">
          <a href="/session">
            <i className="fa fa-user" aria-hidden="true"></i>{" "}
            <span>ثبت نام در سجام</span>
          </a>
        </li>
        <li className="">
          <a href="/session">
            <i className="fa fa-edit" aria-hidden="true"></i>{" "}
            <span>ویرایش اطلاعات قبلی</span>
          </a>
        </li>
        <li className="">
          <a href="/RecoveryTraceCode">
            <i className="fa fa-recycle" aria-hidden="true"></i>{" "}
            <span>بازیابی کد پیگیری</span>
          </a>
        </li>
        <li className="">
          <a href="/msisdn">
            <i className="fa fa-lg fa-mobile-phone" aria-hidden="true"></i>{" "}
            <span>ویرایش شماره تلفن همراه</span>
          </a>
        </li>
        <li className="">
          <a href="/authenticationOffices">
            <i className="fa fa-lg fa-building" aria-hidden="true"></i>{" "}
            <span>لیست مراکز احراز هویت</span>
          </a>
        </li>
        <li className="">
          <a href="https://www.sejam.ir/fa/FAQ">
            <i className="fa fa-question" aria-hidden="true"></i>{" "}
            <span>سوالات متداول</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
