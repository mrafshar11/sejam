import React from "react";
import { Link } from 'react-router-dom';

const Notif = () => {
  return (
    <div className="container">
      <div className="row sejamNoti">
        <h4>
          <i className="nc-icon-outline ui-1_notification-70 paddL5 iconLg align-middle"></i>
          آخرین اطلاعیه های سامانه
          <Link className="viewAll" to="/Notifications">
            <i className="fas fa-link pl-2 align-middle"></i>مشاهده همه
          </Link>
        </h4>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="col">
            <div className="card  mb-3">
              <div className="card-body">
                <span className="cardDate">1399/6/18</span>
                <h5 className="mb-0" style={{ paddingTop: "15px" }}>
                  <a
                    className="text-dark newsTitle"
                    href="/fa/Home/NewsItem/20083"
                  >
                    هشدار پلیس فتا: مراقب سایت های جعلی سجام باشید!
                  </a>
                </h5>
                <p className="card-text mb-auto notiTxt text-justify "></p>
                <a
                  href="/fa/Home/NewsItem/20083"
                  className="btn btn-default btn-light pull-left seeMore "
                >
                  مشاهد متن کامل...
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="col">
            <div className="card  mb-3">
              <div className="card-body">
                <span className="cardDate">1399/2/17</span>
                <h5 className="mb-0" style={{ paddingTop: "15px" }}>
                  <a
                    className="text-dark newsTitle"
                    href="/fa/Home/NewsItem/20076"
                  >
                    اطلاعیه شرکت سپرده گذاری مرکزی درخصوص احراز هویت الکترونیک
                  </a>
                </h5>
                <p className="card-text mb-auto notiTxt text-justify ">
                  شرکت سپرده گذاری مرکزی اوراق بهادار و تسویه وجوه (سمات) با
                  انتشار اطلاعیه ای از راه اندازی عملیات اجرایی احراز هویت
                  الکترونیک در هفته آینده خبر داد.
                </p>
                <a
                  href="/fa/Home/NewsItem/20076"
                  className="btn btn-default btn-light pull-left seeMore "
                >
                  مشاهد متن کامل...
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="col">
            <div className="card  mb-3">
              <div className="card-body">
                <span className="cardDate">1398/6/25</span>
                <h5 className="mb-0" style={{ paddingTop: "15px" }}>
                  <a
                    className="text-dark newsTitle"
                    href="/fa/Home/NewsItem/20060"
                  >
                    شناسایی اولیه و کامل سهامداران در سامانه سجام
                  </a>
                </h5>
                <p className="card-text mb-auto notiTxt text-justify ">
                  معاونت عملیات شرکت سپرده گذاری مرکزی اوراق بهادار و تسویه وجوه
                  با انتشار اطلاعیه ای اعلام کرد: تمام متقاضیان دریافت خدمات
                  پایه مکلف به ثبت اطلاعات خود در سامانه جامع اطلاعات مشتریان
                  (سجام) هستند.
                </p>
                <a
                  href="/fa/Home/NewsItem/20060"
                  className="btn btn-default btn-light pull-left seeMore "
                >
                  مشاهد متن کامل...
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="col">
            <div className="card  mb-3">
              <div className="card-body">
                <span className="cardDate">1398/3/4</span>
                <h5 className="mb-0" style={{ paddingTop: "15px" }}>
                  <a
                    className="text-dark newsTitle"
                    href="/fa/Home/NewsItem/10061"
                  >
                    اطلاعیه مهم در خصوص نحوه احراز هویت ثبت نام کنندگان در
                    سامانه سجام
                  </a>
                </h5>
                <p className="card-text mb-auto notiTxt text-justify ">
                  شرکت سپرده گذاری مرکزی اوراق بهادار و تسویه وجوه (سمات) در
                  خصوص نحوه احراز هویت ثبت نام کنندگان در سامانه جامع اطلاعات
                  مشتریان (سجام) اطلاعیه مهمی صادر کرد.
                </p>
                <a
                  href="/fa/Home/NewsItem/10061"
                  className="btn btn-default btn-light pull-left seeMore "
                >
                  مشاهد متن کامل...
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notif;
