import React from "react";
import { useSelector } from "react-redux";

const SideNav = ({ sideKey, setSideKey }) => {
  const { news, notifs } = useSelector((state) => state);

  return (
    <div className="col-lg-3 newsSidebar">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <a
            className={`nav-link ${sideKey == "notif" ? "active" : null}`}
            id="home-tab"
            data-toggle="tab"
            onClick={() => {
              setSideKey("notif");
            }}
            role="tab"
            aria-controls="home"
            aria-selected={sideKey == "notif" ? true : false}
          >
            اطلاعیه ها
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${sideKey == "news" ? "active" : null}`}
            id="profile-tab"
            data-toggle="tab"
            onClick={() => {
              setSideKey("news");
            }}
            role="tab"
            aria-controls="profile"
            aria-selected={sideKey == "news" ? true : false}
          >
            اخبـــار
          </a>
        </li>
      </ul>

      <div className="tab-content" id="myTabContent">
        <div
          className={`tab-pane fade ${
            sideKey == "notif" ? "show active" : null
          }`}
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          {notifs.map((notif) => (
            <div className="row recentRow">
              <div className="col-md-3 ">
                <img
                  alt="Not Found"
                  className="recentImg"
                  onclick=""
                  src={`http://localhost:4000/${notif.imageUrl}`}
                />
              </div>
              <div className="col-md-9 recenttitle">
                <a href="/fa/Home/NewsItem/20083">{notif.title} . </a>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`tab-pane fade ${
            sideKey == "news" ? "show active" : null
          }`}
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          {news.map((n) => (
            <div className="row recentRow">
              <div className="col-md-3 ">
                <img
                  alt="Not Found"
                  className="recentImg"
                  onclick=""
                  src={`http://localhost:4000/${n.imageUrl}`}
                />
              </div>
              <div className="col-md-9 recenttitle">
                <a href="/fa/Home/NewsItem/20093">{n.title} </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideNav;
