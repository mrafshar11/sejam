import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import { Link } from "react-router-dom";

const Carousel = () => {
  return (
    <Fragment>
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item sliderImgOne active">
            <img
              className="first-slide img-fluid"
              src="./images/sejamBannerDarker.svg"
              alt="سامانه سجام"
            />
            <div className="container">
              <div className="carousel-caption">
                <section className="slider-link-icons">
                  <div className="container" style={{ maxWidth: "1500px" }}>
                    <div className="row">
                      <div className="col py-0 px-1">
                        <a
                          className="slider-btn"
                          href="http://localhost:3001/"
                          target="_blank"
                        >
                          <img src="./images/profile.svg" /> ثبت نام در سجام 
                        </a>
                      </div>
                      <div className="col py-0 px-1">
                        <a
                          className="slider-btn"N
                          href="http://localhost:3001/"
                          target="_blank"
                        >
                          <img src="./images/edit-profile.svg" /> ویرایش
                          اطلاعـات
                        </a>
                      </div>
                      <div className="col py-0 px-1">
                        <a className="slider-btn" href="/fa/AU" target="_blank">
                          <img src="./images/auth.svg" /> احـــراز هــویت
                        </a>
                      </div>
                      <div className="col py-0 px-1">
                        <a
                          className="slider-btn"
                          href="https://profilesejam.csdiran.ir/msisdn"
                          target="_blank"
                        >
                          <img src="./images/phone.svg" /> ویـرایش موبایـل
                        </a>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col py-0 px-1">
                        <a
                          className="slider-btn"
                          href="https://profilesejam.csdiran.ir/RecoveryTraceCode"
                          target="_blank"
                        >
                          <img src="./images/retrieve.svg" /> بازیابی کد پیگیری
                        </a>
                      </div>
                      <div className="col py-0 px-1">
                        <a
                          className="slider-btn"
                          href="/fa/SejamNodes"
                          target="_blank"
                        >
                          <img src="./images/node.svg" /> درگاه&zwnj;هـای ورودی
                        </a>
                      </div>
                      <div className="col py-0 px-1">
                        <a
                          className="slider-btn"
                          href="https://ddn.csdiran.ir"
                          target="_blank"
                        >
                          <img src="./images/sep.svg" />
                          درگاه یکپارچه ذینفعان
                        </a>
                      </div>
                      <div className="col py-0 px-1">
                        <a
                          className="slider-btn "
                          href="https://sahamedalat.ir/"
                          target="_blank"
                        >
                          <img src="./images/saham-edalat.svg" /> سهــام عــدالت
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="link-icons">
        <div className="container" style={{ maxWidth: " 400px" }}>
          <div className="row">
            <div className="col-12 py-0 px-1">
              <a
                className="slider-btn mt-0"
                href="https://profilesejam.csdiran.ir"
                target="_blank"
              >
                <img src="/Content/SVG/profile.svg" /> ثبت نام در سجام
              </a>
            </div>
            <div className="col-6 py-0 px-1">
              <a
                className="slider-btn"
                href="http://localhost:3001/"
                target="_blank"
              >
                <img src="/Content/SVG/edit-profile.svg" /> ویرایش اطلاعـات
              </a>
            </div>
            <div className="col-6 py-0 px-1">
              <a className="slider-btn" href="/fa/AU" target="_blank">
                <img src="/Content/SVG/auth.svg" /> احـــراز هــویت
              </a>
            </div>
            <div className="col-6 py-0 px-1">
              <a
                className="slider-btn"
                href="https://profilesejam.csdiran.ir/msisdn"
                target="_blank"
              >
                <img src="/Content/SVG/phone.svg" /> ویـرایش موبایـل
              </a>
            </div>
            <div className="col-6 py-0 px-1">
              <a
                className="slider-btn"
                href="https://profilesejam.csdiran.ir/RecoveryTraceCode"
                target="_blank"
              >
                <img src="/Content/SVG/retrieve.svg" /> بازیابی کد پیگیری
              </a>
            </div>
            <div className="col-6 py-0 px-1">
              <a className="slider-btn" href="/fa/SejamNodes" target="_blank">
                <img src="/Content/SVG/node.svg" /> درگاه‌هـای ورودی
              </a>
            </div>
            <div className="col-6 py-0 px-1">
              <a
                className="slider-btn"
                href="https://ddn.csdiran.ir"
                target="_blank"
              >
                <img src="/Content/SVG/sep.svg" />
                درگاه یکپارچه ذینفعان
              </a>
            </div>
            <div className="col-12 py-0 px-1">
              <a
                className="slider-btn"
                href="https://sahamedalat.ir/"
                target="_blank"
              >
                <img src="/Content/SVG/saham-edalat.svg" /> سهــام عــدالت
              </a>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Carousel;
