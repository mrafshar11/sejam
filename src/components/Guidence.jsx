import React from 'react';


const Guidence = () => {
    return (
        <div className="container">
            <div className="row vidCol align-items-center">
                <div className="col-md-5">
                    <img src="./images/sejamVerify.svg" className="sejamVerifyImg ml-5 mr-auto d-block" /></div>
                <div className="col-md-6 col-xs-12">
                    <div className="guidCard pr-md-5">
                        <h5 className="card-title mb-4">چگونه می توانم در سامانه سجام ثبت نام کنم؟</h5>
                        <div className="row" style={{display: 'inline-block'}}>
                            <p className="card-text font-weight-light mb-4 text-justify" style={{lineHeight: 2}}>
                                تنها با یک بار ثبت نام در سامانه سجام به تمامی سرویس
                                های بازار سرمایه دسترسی داشته باشید و در هیچ یک از مراجعات خود
                                به نهادهای مالی اعم از کارگزاری، صندوقهای سرمایه گذاری،شرکتهای
                                تامین سرمایه و ... نیاز به احراز هویت مجدد نخواهید داشت.
                            </p>
                            <div className="cardBtn">
                                <p>
                                    <a className="btn btn-raised btn-primary" href="/fa/Help">
                                        <i className="nc-icon-outline media-1_button-circle-play paddL5 align-middle">
                                        </i>راهنمای مراحل ثبت نام</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Guidence;

