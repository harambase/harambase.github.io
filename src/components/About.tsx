import React from 'react';
import Link from 'next/link';

const About: React.FC = () => {
  return (
    <section className="about-area about-p pt-120 pb-120 p-relative fix">
      <div className="animations-05">
        <img src="/static/picture/an-img-02.png" alt="contact-bg-an-01" width={100} height={100}/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-12 col-sm-12">
            <div className="about-title second-title pb-25">
              <h5>About Us</h5>
              <h2>We Make Essential Innovations The World Needs Now.</h2>
            </div>
            <div className="slider-btn">
              <Link href="/about" className="btn ss-btn smoth-scroll">
                Read More <i className="fal fa-long-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12">
            <div className="s-about-img p-relative wow fadeInLeft animated" data-animation="fadeInLeft"
                 data-delay=".4s">
              <img src="/static/picture/about_img_03.png" alt="img" width={300} height={400}/>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="about-content s-about-content pl-15 wow fadeInRight animated" data-animation="fadeInRight"
                 data-delay=".4s">
              <p className="txt-clr">
                We're Industris, a broad energy company with a proud history. We are 20,000 committed colleagues
                developing oil, gas, wind and solar energy in more than 30 countries worldwide. We're the largest
                operator in Norway,
              </p>
              <p>
                We are proud to offer top ranige in employment services such and asser payroll and benefits administr
                managemen and asistance with global business from religious.
              </p>
              <p>
                <img src="/static/picture/singature.png" alt="img" width={150} height={50}/>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
