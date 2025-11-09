import React from 'react';
import Link from 'next/link';
import { PRODUCTS } from '../types/products';

const Services: React.FC = () => {
  const getDescription = (category: string) => {
    switch (category) {
      case 'Steel':
        return '高质量热镀锌钢材产品，适用于各种建筑和工业应用';
      case 'Solar Frame':
        return '专业光伏支架系统，适用于地面和屋顶安装';
      case '太阳能板':
        return '高效双面太阳能电池板，提供卓越的发电性能';
      case '太阳能支架组件':
        return '优质太阳能支架组件，确保系统稳定可靠';
      default:
        return '专业产品，品质保证';
    }
  };

  const services = PRODUCTS.map(product => ({
    id: product.id,
    icon: product.image,
    title: product.name,
    description: getDescription(product.category),
    link: `/products/${product.id}`,
    category: product.category
  }));

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
              <h5><i className="fa-light fa-industry-windows"></i> 产品系列</h5>
              <h2>
                我们的 <span>产品</span>
              </h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section-title center-align mb-50 wow fadeInDown animated" data-animation="fadeInDown"
                 data-delay=".4s">
              <p>
                我们提供全面的产品系列，包括热镀锌钢材、光伏支架系统、太阳能电池板及支架组件，满足各种应用需求。
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-center class-active">
          {services.map((service) => (
            <div key={service.id} className="col-lg-3 col-md-6 col-sm-12">
              <div className="services-box mb-30 wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                <div className="sr-contner">
                  <div className="icon">
                    <img src={service.icon} alt={service.title} width={60} height={60} style={{objectFit: 'cover'}}/>
                  </div>
                  <div className="text">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <Link href={service.link} className="readmore">
                      了解更多 <i className="fal fa-long-arrow-right"></i>
                    </Link>
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

export default Services;
