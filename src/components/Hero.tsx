import React from 'react';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section id="parallax" className="slider-area slider-two fix p-relative">
      <div className="slider-active">
        <div className="single-slider slider-bg d-flex align-items-center"
             style={{background: 'url(/static/image/slider_img04.png) center center no-repeat'}}>
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-7 col-md-9">
                <div className="slider-content s-slider-content pt-20 text-center">
                  <h5 data-animation="fadeInUp"
                      data-delay=".4s">提供光伏支架系统方案、光伏支架销售、光伏板销售等一站式服务</h5>
                  <h2 data-animation="fadeInUp" data-delay=".4s">光伏系统方案供应商</h2>
                  <div className="slider-btn mt-0">
                    <a href="/about" className="btn mr-15" data-animation="fadeInUp" data-delay=".4s">了解更多 <i
                      className="fal fa-long-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-slider slider-bg d-flex align-items-center"
             style={{background: 'url(/static/image/slider_img04.png) center center no-repeat'}}>
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-7 col-md-9">
                <div className="slider-content s-slider-content pt-20 text-center">
                  <h5 data-animation="fadeInUp"
                      data-delay=".4s">专业销售扁钢、带钢、圆钢、热镀锌扁钢、热镀锌角钢、热镀锌圆钢、热镀锌带钢、开平板、盘条等</h5>

                  <h2 data-animation="fadeInUp" data-delay=".4s">工程钢材板材供应商</h2>
                  <div className="slider-btn mt-0">
                    <a href="/about" className="btn mr-15" data-animation="fadeInUp" data-delay=".4s">了解更多 <i
                      className="fal fa-long-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
