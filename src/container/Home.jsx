import React, { Fragment } from "react";

import Header from "../components/header";
import Carousel from "../components/Carousel";
import Guidence from "../components/Guidence";
import Notif from "../components/Notif";
import News from "../components/News";
import GuidenceVideos from "../components/GuidenceVideos";
import Footer from "../components/Footer";
// import FullNotifs from "../components/FullNotifs";
// import FullNews from "../components/FullNews";

const Home = () => {
  return (
    <Fragment>
      <link rel="stylesheet" href="./css/bootstrap-rtl-min.css" />
      <link rel="stylesheet" href="./css/sejamTow.css" />
      <link rel="stylesheet" href="./css/font.css" />
      <link rel="stylesheet" href="./css/newStyle.css" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
      />

      <Header />
      <link href="./css/mediaIndex.css" rel="stylesheet" />
      <main role="main">
        <Carousel />
        <Guidence />
        <Notif />
        <News />
        <GuidenceVideos />
        <Footer />
      </main>
      {/* <FullNotifs/> */}
    </Fragment>
  );
};

export default Home;
