import React, { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <footer>
        <p>
          <a href="http://csdiran.com/">
            شرکت سپرده گذاری مرکزی اوراق بهادار و تسویه وجوه
          </a>
        </p>
        <p>
          <a href="Tel:1569">تلفن پشتیبانی سامانه سجام:1569</a>
        </p>
      </footer>
      {/* <div className="row">
        <div
          className="modal fade"
          id="myModal"
          role="dialog"
          data-backdrop="static"
          data-keyboard="false"
        >
          <div style="z-index: 10011; position: fixed;  padding: 5px; margin: 0px; width: 30%; top: 40%; left: 35%; text-align: center; color: rgb(255, 255, 255); border: none; background-color: rgb(0, 0, 0); cursor: wait; border-radius: 10px; opacity: 0.5; font-size: 14px;">
            <p className="text-center">
              <i className="fa fa-cog fa-spin fa-2x fa-fw"></i>
            </p>
            <h4 style="font-size: 12px;line-height: 21px;">
              {" "}
              لطفا کمی صبر نمایید ...
            </h4>
          </div>
        </div>
      </div> */}
    </Fragment>
  );
};

export default Footer;
