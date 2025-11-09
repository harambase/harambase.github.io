import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section className="cta-area cta-bg pt-170 pb-170" style={{backgroundImage: 'url(/static/image/call-bg.png)'}}>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-xl-9 col-lg-9 col-md-12">
            <div className="section-title cta-title text-center wow fadeInLeft animated"
                 data-animation="fadeInDown animated" data-delay=".2s"
                 style={{visibility: 'visible', animationName: 'fadeInLeft'}}>
              <h2>
                专业光伏支架供应商 <br/>
                <a href="#">+86 1528351812</a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
