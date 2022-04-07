import React from 'react';


const Footer = () => {
    return (
        < footer className="footer">
            <div className="row">
                <div className="col-md-4">
                    <p className="footerCopyRight">
                        تمامی حقوق برای شرکت سپرده گذاری مرکزی اوراق بهادار و تسویه وجوه محفوظ می باشد.
                    </p>
                    <p className="footerCopyRight">طراحی و توسعه توسط شرکت <span></span>
                        <a href="https://samatsamaneh.ir/" target="_blank">سمات سامانه بازار سرمایه
                        </a>
                    </p>
                </div>

                <div className="col-md-4">
                    <p className="footerNo">
                        <i className="nc-icon-outline media-2_headphones-mic paddL5 iconLgFooter">
                        </i>شماره تماس پشتیبانی: 1569
                    </p>
                </div>

                <div className="col-md-4 footerRelated">
                    <a target="_blank" href="https://www.seo.ir/">
                        <img src="./images/relatedlink1.png" />
                    </a>
                    <a target="_blank" href="http://www.tse.ir/">
                        <img src="./images/relatedlink2.png" />
                    </a>
                    <a target="_blank" href="https://www.ifb.ir/">
                        <img src="./images/relatedlink3.png" />
                    </a>
                    <a target="_blank" href="https://www.ime.co.ir/">
                        <img src="./images/relatedlink4.png" />
                    </a>
                    <a target="_blank" href="http://www.irenex.ir/">
                        <img src="./images/relatedlink5.png" />
                    </a>
                    <a target="_blank" href="https://www.csdiran.ir/">
                        <img src="./images/sepordeLogoFooter.png" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;