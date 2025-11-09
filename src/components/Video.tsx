import React from 'react';

const Video: React.FC = () => {
  return (
    <section id="video" className="video-area p-relative">
      <div className="container">
        <div className="row justify-content-center align-items-center"
             style={{backgroundImage: 'url(/static/image/video-img.png)'}}>
          <div className="col-xl-7 col-lg-7 col-md-12">
            <div className="s-video-wrap">
              <div className="s-video-content text-center">
                <h2>Were Building The Future And Restoring The Past</h2>
                <p>Our community is being called to reimagine the future. As the only university where a renowned design
                  school colleges,</p>
                <div className="s-video-content mt-50">
                  <a href="#" className="popup-video mb-50">
                    <img src="/static/picture/play-button.png" alt="circle_right" width={80} height={80}/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
