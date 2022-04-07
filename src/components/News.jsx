import React from "react";
import { Link } from 'react-router-dom';

const News = () => {
  return (
    <div className="container">
      <div className="row sejamNoti">
        <h4>
          <i className="nc-icon-outline files_paper paddL5 iconLg align-middle"></i>
          آخرین اخبار سامانه
          <Link className="viewAll" to="/News">
            <i className="fas fa-link pl-2 align-middle"></i>مشاهده همه
          </Link>
        </h4>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="col">
            <div className="card  mb-3">
              <div className="card-body">
                <span className="cardDate">1400/4/27</span>
                <h5 className="mb-0" style={{ paddingTop: "15px" }}>
                  <a
                    className="text-dark newsTitle"
                    href="/fa/Home/NewsItem/20093"
                  >
                    فعال شدن ویرایش اطلاعات حقوقی ها در سجام
                  </a>
                </h5>

                <div className="row notiTxt">
                  <div className="col-md-2">
                    <img
                      alt="Not Found"
                      className="SejamNewsImgCard"
                      onclick=""
                      src="./images/b49b11c3-64f7-eb11-b80e-e0071bf34ae7.jpg"
                    />
                  </div>
                  <div className="col-md-10">
                    <p className="card-text mb-auto pr-5 text-justify">
                      <span></span>
                      <span>
                        شرکت سپرده گذاری مرکزی اوراق بهادار و تسویه وجوه اعلام
                        کرد : امکان ویرایش اطلاعات سهامداران حقوقی و تغییر
                        نماینده معرفی شده آنان در سامانه سجام فعال شد.
                      </span>
                    </p>
                  </div>
                </div>

                <a
                  href="/fa/Home/NewsItem/20093"
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
                <span className="cardDate">1400/5/11</span>
                <h5 className="mb-0" style={{ paddingTop: "15px" }}>
                  <a
                    className="text-dark newsTitle"
                    href="/fa/Home/NewsItem/20092"
                  >
                    آمار تیر ۱۴۰۰ اعلام شد: احراز هویت ۱۱۲ هزار سهامدار درسامانه
                    سجام
                  </a>
                </h5>

                <div className="row notiTxt">
                  <div className="col-md-2">
                    <img
                      alt="Not Found"
                      className="SejamNewsImgCard"
                      onclick=""
                      src="./images/b49b11c3-64f7-eb11-b80e-e0071bf34ae7.jpg"
                    />
                  </div>
                  <div className="col-md-10">
                    <p className="card-text mb-auto pr-5 text-justify">
                      <span></span>
                      <span>
                        تازه ترین آمارهای منتشر شده از سوی شرکت سپرده گذاری
                        مرکزی اوراق بهادار و تسویه وجوه نشان می‌دهد که در تیر
                        ماه سال جاری 112 هزار و 263 احراز هویت در سامانه (سجام)
                        صورت گرفته است.
                      </span>
                    </p>
                  </div>
                </div>

                <a
                  href="/fa/Home/NewsItem/20092"
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
                <span className="cardDate">1399/11/1</span>
                <h5 className="mb-0" style={{ paddingTop: "15px" }}>
                  <a
                    className="text-dark newsTitle"
                    href="/fa/Home/NewsItem/20091"
                  >
                    ارسال پیامک جعلی سجام برای دارندگان سهام عدالت
                  </a>
                </h5>

                <div className="row notiTxt">
                  <div className="col-md-2">
                    <img
                      alt="Not Found"
                      className="SejamNewsImgCard"
                      onclick=""
                      src="./images/2a89f95c-1c5b-eb11-b80c-e0071bf34ae6.jpg"
                    />
                  </div>
                  <div className="col-md-10">
                    <p className="card-text mb-auto pr-5 text-justify">
                      <span></span>
                      <span>
                        مشاور اجرایی سهام عدالت شرکت سپرده‌گذاری مرکزی نسبت به
                        ارسال پیامک‌های جعلی به دارندگان سهام عدالت، با عنوان
                        پیامک‌های ثبت‌نام سامانه سجام، هشدار داد.
                      </span>
                    </p>
                  </div>
                </div>

                <a
                  href="/fa/Home/NewsItem/20091"
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
                <span className="cardDate">1399/10/9</span>
                <h5 className="mb-0" style={{ paddingTop: "15px" }}>
                  <a
                    className="text-dark newsTitle"
                    href="/fa/Home/NewsItem/20089"
                  >
                    ۲ مصوبه سهام عدالتی شورای عالی بورس
                  </a>
                </h5>

                <div className="row notiTxt">
                  <div className="col-md-2">
                    <img
                      alt="Not Found"
                      className="SejamNewsImgCard"
                      onclick=""
                      src="./images/493730d5-a549-eb11-b80c-e0071bf34ae6.jpg"
                    />
                  </div>
                  <div className="col-md-10">
                    <p className="card-text mb-auto pr-5 text-justify">
                      <span></span>
                      <span>
                        معاون نظارت بر نهادهای مالی سازمان بورس با تکذیب شایعات
                        مرتبط با عدم نیاز سهامداران سهام عدالت برای ثبت نام در
                        سامانه سجام اعلام کرد : همه سهامداران سهام عدالت در روش
                        مستقیم و غیر مستقیم باید در سامانه سجام ثبت نام کنند.
                      </span>
                    </p>
                  </div>
                </div>

                <a
                  href="/fa/Home/NewsItem/20089"
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

export default News;
