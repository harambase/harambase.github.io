import React from 'react';
import Layout from '../components/Layout';
import { List, ListItem } from '../components/ui/list';
import Link from 'next/link';

const ServicePage: React.FC = () => {
  const services = [
    {
      icon: '/static/picture/sve-icon1.png',
      title: '集中式地面支架系统',
      description: '适用于大型地面光伏电站，具有结构稳定、安装简便、成本经济的特点。',
      features: ['高强度钢材', '防腐处理', '快速安装', '长期稳定']
    },
    {
      icon: '/static/picture/sve-icon2.png',
      title: '螺旋地桩支架系统',
      description: '采用螺旋地桩技术，适用于各种地质条件，安装快速，环保无污染。',
      features: ['螺旋地桩', '地质适应性强', '安装快速', '环保无污染']
    },
    {
      icon: '/static/picture/sve-icon3.png',
      title: '圆管立柱支架系统',
      description: '圆管立柱设计，结构简洁美观，适用于各种光伏组件安装需求。',
      features: ['圆管立柱', '结构简洁', '美观实用', '适应性强']
    },
    {
      icon: '/static/picture/sve-icon4.png',
      title: '彩钢屋顶支架系统',
      description: '专为彩钢屋顶设计，无需破坏屋顶结构，安装安全可靠。',
      features: ['屋顶专用', '无破坏安装', '安全可靠', '防水密封']
    },
    {
      icon: '/static/picture/sve-icon1.png',
      title: '瓦面屋顶支架系统',
      description: '适用于瓦面屋顶，采用专用夹具，安装美观，不影响建筑外观。',
      features: ['瓦面专用', '专用夹具', '安装美观', '保护屋顶']
    },
    {
      icon: '/static/picture/sve-icon2.png',
      title: '工商屋顶支架系统',
      description: '专为工商业屋顶设计，承载能力强，适合大型工商业项目。',
      features: ['工商业专用', '高承载能力', '大型项目', '专业设计']
    },
    {
      icon: '/static/picture/sve-icon3.png',
      title: '追踪式支架系统',
      description: '单轴或双轴追踪系统，提高发电效率，适用于高纬度地区。',
      features: ['单轴追踪', '双轴追踪', '提高效率', '智能控制']
    },
    {
      icon: '/static/picture/sve-icon4.png',
      title: '柔性光伏支架系统',
      description: '适用于非平整屋顶，柔性设计，适应各种复杂地形。',
      features: ['柔性设计', '复杂地形', '适应性强', '安装灵活']
    },
    {
      icon: '/static/picture/sve-icon1.png',
      title: '光伏车棚',
      description: '光伏车棚一体化设计，既提供停车功能，又实现发电收益。',
      features: ['一体化设计', '停车发电', '遮阳功能', '美观实用']
    }
  ];

  return (
    <Layout title="产品服务 - 元鑫荣华贸易有限公司" description="专业的钢材销售和光伏支架系统服务">
      {/* Page Header */}
      <section className="page-header pt-120 pb-120" style={{backgroundImage: 'url(/static/image/slider_bg.png)'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-content text-center">
                <h1>我们的产品与服务</h1>
                <p>专业销售扁钢、带钢、圆钢、热镀锌扁钢、热镀锌角钢、热镀锌圆钢、热镀锌带钢、开平板、盘条等</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-50">
                <h2>光伏支架系列产品</h2>
                <p>我们提供各种类型的光伏支架系统，满足不同应用场景的需求</p>
              </div>
            </div>
          </div>
          <div className="row">
            {services.map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-30">
                <div className="service-item">
                  <div className="service-icon">
                    <img src={service.icon} alt={service.title} width={80} height={80}/>
                  </div>
                  <div className="service-content">
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                    <List className="service-features">
                      {service.features.map((feature, featureIndex) => (
                        <ListItem key={featureIndex}>{feature}</ListItem>
                      ))}
                    </List>
                    <Link href="/contact" className="btn btn-primary">
                      了解更多
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steel Products */}
      <section className="steel-products pt-120 pb-120" style={{backgroundColor: '#f8f9fa'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-50">
                <h2>钢材产品</h2>
                <p>我们专业销售各种规格的钢材产品</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-30">
              <div className="product-item text-center">
                <div className="product-icon">
                  <i className="fas fa-square"></i>
                </div>
                <h4>扁钢</h4>
                <p>各种规格的扁钢产品</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-30">
              <div className="product-item text-center">
                <div className="product-icon">
                  <i className="fas fa-circle"></i>
                </div>
                <h4>圆钢</h4>
                <p>各种规格的圆钢产品</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-30">
              <div className="product-item text-center">
                <div className="product-icon">
                  <i className="fas fa-grip-lines"></i>
                </div>
                <h4>带钢</h4>
                <p>各种规格的带钢产品</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-30">
              <div className="product-item text-center">
                <div className="product-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h4>热镀锌产品</h4>
                <p>热镀锌扁钢、角钢、圆钢、带钢</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section pt-120 pb-120" style={{backgroundImage: 'url(/static/image/call-bg.png)'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="cta-content text-center">
                <h2>需要专业的光伏支架解决方案？</h2>
                <p>我们的专业团队将为您提供最适合的解决方案</p>
                <Link href="/contact" className="btn btn-primary">
                  立即咨询
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicePage;
