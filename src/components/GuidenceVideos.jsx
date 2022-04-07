import React from 'react';


const GuidenceVideos = () => {
    return (
        <div className="container">
            <div className="row sejamNoti">
                <h4>
                    <i className="nc-icon-outline media-1_video-66 paddL5 iconLg align-middle">
                    </i>ویدئوها آموزشی
                    <a className="viewAll" href="/fa/Home/VideoGallery">
                        <i className="fas fa-link pl-2 align-middle">
                        </i>مشاهده همه
                    </a>
                </h4>
            </div>
            <div className="row">
                <div className="col-md-4 ">


                    <div className="mb-3" onclick="showVideo('https://www.aparat.com/video/video/embed/videohash/Z9Ca7/vt/frame')">
                        <a>
                            <img alt="ثبت نام در سجام برای افراد حقوقی" className="img-fluid galleryImg" onclick=""
                                src="./images/cb5c464d-d349-ec11-b80e-e0071bf34ae7.jpg" />
                        </a>
                    </div>


                </div>
                <div className="col-md-4 ">


                    <div className="mb-3" onclick="showVideo('https://www.aparat.com/video/video/embed/videohash/R2v9n/vt/frame')">
                        <a>
                            <img alt="آموزش ثبت نام فرد حقیقی ایرانی در سامانه سجام" className="img-fluid galleryImg" onclick=""
                                src="./images/6040d49a-3260-e911-80d5-0050569442fb.jpg" />
                        </a>
                    </div>


                </div>
                <div className="col-md-4 ">


                    <div className="mb-3" onclick="showVideo('https://www.aparat.com/video/video/embed/videohash/kvFsd/vt/frame')">
                        <a>
                            <img alt="ثبت نام در سامانه سجام برای افراد حقیقی" className="img-fluid galleryImg" onclick=""
                                src="./images/f0ad9cb3-3260-e911-80d5-0050569442fb.JPG" />
                        </a>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default GuidenceVideos;