import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import Header from "./header";

import SideNav from "./SideNav";

const FullNotifs = () => {
  const notifs = useSelector((state) => state.notifs);

  const [sideKey, setSideKey] = useState("notif");

  const style1 = {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    zIndex: "1030",
  };

  return (
    <Fragment>
      <link rel="stylesheet" href="./css/bootstrap-rtl-min.css" />
      <link rel="stylesheet" href="./css/lastStyles.css" />
      <link rel="stylesheet" href="./css/sejamTow.css" />
      <link rel="stylesheet" href="./css/font.css" />
      <link rel="stylesheet" href="./css/newStyle.css" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
      />
      <Header />
      <main role="main" className="newsContain">
        <div className="row">
          <SideNav sideKey={sideKey} setSideKey={setSideKey} />

          <div className="col-lg-9">
            <div className="row sejamVid">
              <h4>
                <i className="nc-icon-outline  ui-1_notification-70 paddL5 iconLg"></i>
                اطلاعیه های سامانه
                <i
                  className="nc-icon-outline arrows-2_circle-out paddR5"
                  style={{ verticalAlign: "sub" }}
                ></i>
              </h4>
            </div>
            {notifs.map((notif) => (
              <div className="row">
                <div class="col-md-12">
                  <div class="card flex-md-row mb-4 box-shadow h-md-250">
                    <div class="card-body d-flex flex-column align-items-start">
                      <h5 class="mb-0">
                        <a
                          class="text-dark newsTitle"
                          href="/fa/Home/NewsItem/20083"
                        >
                          {notif.title}
                        </a>
                      </h5>
                      <div class="mb-1 text-muted"></div>
                      <p class="card-text mb-auto">{notif.text}</p>
                      <a href="/fa/Home/NewsItem/20083">
                        ادامه مطلب
                        <i
                          class="nc-icon-outline arrows-2_circle-out paddR5"
                          style={{ verticalAlign: "sub" }}
                        ></i>
                      </a>
                    </div>
                    <img
                      alt="Not Found"
                      class="card-img-right flex-auto d-none d-md-block"
                      onclick=""
                      src={`http://localhost:4000/${notif.imageUrl}`}
                    />{" "}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* <script>
    var video = document.getElementById("sejamVideo");
    var btn = document.getElementById("vidBtn");
    function vidFunction() {
        if (video.paused) {
            video.play();
            btn.innerHTML = "توقف ویدئوی آموزشی";
        } else {
            video.pause();
            btn.innerHTML = "مشاهده ویدئوی آموزشی";
        }
    };
    if (screen.width <= 768) {
        //$(".first-slide").attr("src", "/Content/img/sejamBannerSm.svg");
        $(".first-slide").addclassName("img-fluid");
    };
    if (screen.width <= 421) {
        //$(".first-slide").attr("src", "/Content/img/sejamBannerXs.svg");
        $(".first-slide").addclassName("img-fluid");
    };
</script> */}
    </Fragment>
  );
};

export default FullNotifs;
