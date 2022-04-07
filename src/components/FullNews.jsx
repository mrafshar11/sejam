import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";

import SideNav from "./SideNav";
import Header from "./header";
import Pagination from "./Pagination";
import { paginate } from "../utils/paginate";

const FullNews = () => {
  const news = useSelector((state) => state.news);

  const [sideKey, setSideKey] = useState("news");
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState();

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const newsPerPage = paginate(news, currentPage, perPage);
  return (
    <Fragment>
      {/* <style>
    .custom-fixed-top {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1030;
    }
</style> */}
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
      <main role="main" class="newsContain">
        <div class="row">
          <SideNav sideKey={sideKey} setSideKey={setSideKey} />

          <div class="col-lg-9">
            <div class="row sejamVid">
              <h4>
                <i class="nc-icon-outline files_paper paddL5 iconLg"></i>اخبار
                سامانه
                <i
                  class="nc-icon-outline arrows-2_circle-out paddR5"
                  style={{ verticalAlign: "sub" }}
                ></i>
              </h4>
            </div>

            <div class="row">
              {newsPerPage.map((news) => (
                <div class="col-md-12">
                  <div class="card flex-md-row mb-4 box-shadow h-md-250">
                    <div class="card-body d-flex flex-column align-items-start">
                      <h5 class="mb-0">
                        <a
                          class="text-dark newsTitle"
                          href="/fa/Home/NewsItem/20077"
                        >
                          {news.title}
                        </a>
                      </h5>
                      <div class="mb-1 text-muted"></div>
                      <p class="card-text mb-auto">{news.text}</p>
                      <a href="/fa/Home/NewsItem/20077">
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
                      src={`http://localhost:4000/${news.imageUrl}`}
                    />
                  </div>
                </div>
              ))}
            </div>

            <Pagination
              totalnews={news.length}
              perPage={perPage}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
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
        $(".first-slide").addClass("img-fluid");
    };
    if (screen.width <= 421) {
        //$(".first-slide").attr("src", "/Content/img/sejamBannerXs.svg");
        $(".first-slide").addClass("img-fluid");
    };
</script> */}
    </Fragment>
  );
};

export default FullNews;
