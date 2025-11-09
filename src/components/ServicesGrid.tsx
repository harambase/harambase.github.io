import React from 'react';
import Link from 'next/link';

const ServicesGrid: React.FC = () => {
  const services = [
    {
      image: '/static/picture/srg-01.jpg',
      icon: '/static/picture/svg-icon1.png',
      title: '集中式地面支架系统',
      description: 'Seamlessly visualize quality ellectual capital without superior',
      link: '/single-service'
    },
    {
      image: '/static/picture/srg-02.jpg',
      icon: '/static/picture/svg-icon2.png',
      title: '螺旋地桩支架系统',
      description: 'Seamlessly visualize quality ellectual capital without superior',
      link: '/single-service'
    },
    {
      image: '/static/picture/srg-03.jpg',
      icon: '/static/picture/svg-icon3.png',
      title: '圆管立柱支架系统',
      description: 'Seamlessly visualize quality ellectual capital without superior',
      link: '/single-service'
    },
    {
      image: '/static/picture/srg-04.jpg',
      icon: '/static/picture/svg-icon4.png',
      title: '彩钢屋顶支架系统',
      description: 'Seamlessly visualize quality ellectual capital without superior',
      link: '/single-service'
    },
    {
      image: '/static/picture/srg-05.jpg',
      icon: '/static/picture/svg-icon5.png',
      title: '瓦面屋顶支架系统',
      description: 'Seamlessly visualize quality ellectual capital without superior',
      link: '/single-service'
    },
    {
      image: '/static/picture/srg-06.jpg',
      icon: '/static/picture/svg-icon6.png',
      title: '工商屋顶支架系统',
      description: 'Seamlessly visualize quality ellectual capital without superior',
      link: '/single-service'
    },
    {
      image: '/static/picture/srg-06.jpg',
      icon: '/static/picture/svg-icon6.png',
      title: '追踪式支架系统',
      description: '单轴或双轴支架',
      link: '/single-service'
    },
    {
      image: '/static/picture/srg-06.jpg',
      icon: '/static/picture/svg-icon6.png',
      title: '柔性光伏支架系统',
      description: '适用于非平整屋顶',
      link: '/single-service'
    },
    {
      image: '/static/picture/srg-06.jpg',
      icon: '/static/picture/svg-icon6.png',
      title: '光伏车棚',
      description: '适用于车棚',
      link: '/single-service'
    }
  ];

  return (
    <section className="courses pt-120 pb-120 p-relative fix">
      <div className="animations-01">
        <img src="/static/picture/an-img-03.png" alt="an-img-01" width={100} height={100}/>
      </div>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6">
            <div className="section-title center-align mb-50 wow fadeInDown animated" data-animation="fadeInDown"
                 data-delay=".4s">
              <h5>光伏支架系列产品</h5>
              <h2>
                <span>支架系统</span>
              </h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section-title center-align mb-50 wow fadeInDown animated" data-animation="fadeInDown"
                 data-delay=".4s">
              <p>
                We're Industris, a broad energy company with a proud history. We are 20,000 committed colleagues
                developing oil, gas, wind and solar energy in more than 30 countries worldwide. We're the largest
                operator in Norway,
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12">
              <div className="services-box-05 mb-30 wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                <div className="services-icon-05 hover-zoomin">
                  <Link href={service.link}>
                    <img src={service.image} alt="icon01" width={400} height={250}/>
                  </Link>
                </div>
                <div className="services-content-05">
                  <div className="row">
                    <div className="col-lg-3 col-md-3">
                      <div className="crs-icon">
                        <img src={service.icon} alt="icon01" width={40} height={40}/>
                      </div>
                    </div>
                    <div className="col-lg-9 col-md-9">
                      <h4><Link href={service.link}>{service.title}</Link></h4>
                      <p>{service.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
