import React from 'react';
import Layout from '../components/Layout';
import { List, ListItem } from '../components/ui/list';

const AboutPage: React.FC = () => {
  return (
    <Layout title="关于我们 - 元鑫荣华贸易有限公司" description="了解元鑫荣华贸易有限公司的发展历程和企业文化">
      {/* Page Header */}
      <section className="page-header pt-120 pb-120" style={{backgroundImage: 'url(/static/image/slider_bg.png)'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-content text-center">
                <h1>关于我们</h1>
                <p>我们是w专业销售扁钢、带钢、圆钢、热镀锌扁钢、热镀锌角钢、热镀锌圆钢、热镀锌带钢、开平板、盘条等</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="about-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-content">
                <h2>我们是谁</h2>
                <p>
                  元鑫荣华贸易有限公司是一家专业从事钢材销售的企业，我们专业销售扁钢、带钢、圆钢、热镀锌扁钢、热镀锌角钢、热镀锌圆钢、热镀锌带钢、开平板、盘条等产品。
                </p>
                <p>
                  公司尊崇"踏实、拼搏、责任"的企业精神，并以诚信、共赢、开创经营理念，创造良好的企业环境，以全新的管理模式，完善的技术，周到的服务，卓越的品质为生存根本。
                </p>
                <div className="about-features">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="feature-item">
                        <i className="fas fa-check-circle"></i>
                        <h4>专业团队</h4>
                        <p>拥有专业的销售和技术团队</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="feature-item">
                        <i className="fas fa-check-circle"></i>
                        <h4>优质服务</h4>
                        <p>提供全方位的客户服务</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-image">
                <img src="/static/picture/about_img_03.png" alt="关于我们" width={500} height={400}/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Solutions Section */}
      <section className="solutions-area pt-120 pb-120" style={{backgroundColor: '#f8f9fa'}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 text-center">
              <div className="section-title mb-70">
                <span>我们的核心业务</span>
                <h2>元鑫荣华：全行业一站式解决方案专家</h2>
                <p>我们致力于为各行各业提供创新、高效、可持续的解决方案，共同开创美好未来。</p>
              </div>
            </div>
          </div>
          
          {/* Connection Lines */}
          <div className="connection-lines">
            <div className="connection-line line-1"></div>
            <div className="connection-line line-2"></div>
            <div className="connection-line line-3"></div>
            <div className="connection-line line-4"></div>
            <div className="connection-line line-5"></div>
          </div>
          
          {/* Central Hexagon */}
          <div className="row justify-content-center mb-50">
            <div className="col-lg-6 text-center">
              <div className="central-hexagon">
                <div className="hexagon-content">
                  <h3>元鑫荣华</h3>
                  <p>全行业 一站式<br/>解决方案专家</p>
                </div>
              </div>
            </div>
          </div>

          {/* Solutions Grid */}
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-30">
              <div className="solution-card">
                <div className="solution-icon">
                  <i className="fas fa-industry"></i>
                </div>
                <h4>绿色工业方案</h4>
                <p className="solution-desc">促进高耗能制造业转型升级</p>
                <List className="solution-details">
                  <ListItem>自动化工业太阳能电源系统、应急电源</ListItem>
                  <ListItem>海洋检测设备、气象/水文观测设备</ListItem>
                  <ListItem>先进自动化仓储模式</ListItem>
                </List>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6 mb-30">
              <div className="solution-card">
                <div className="solution-icon">
                  <i className="fas fa-building"></i>
                </div>
                <h4>绿色建筑方案</h4>
                <p className="solution-desc">以清洁能源为主要能源体系的新型绿色建筑行业</p>
                <List className="solution-details">
                  <ListItem>高铁, 医院, 商业中心, 航空楼</ListItem>
                  <ListItem>公寓, 写字楼, 数据中心新模式建筑群</ListItem>
                  <ListItem>偏远山区, 荒漠戈壁, 广表深山, 设备网控制站</ListItem>
                </List>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6 mb-30">
              <div className="solution-card">
                <div className="solution-icon">
                  <i className="fas fa-home"></i>
                </div>
                <h4>户用方案</h4>
                <p className="solution-desc">光伏产业建设 美丽新乡村</p>
                <List className="solution-details">
                  <ListItem>户用多场景解决方案致力于特殊应用场景下的光伏项目</ListItem>
                  <ListItem>标准化方案: 以常见的平屋顶、斜屋顶为主</ListItem>
                  <ListItem>实现一站式集成化分布式户用电站安装</ListItem>
                </List>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6 mb-30">
              <div className="solution-card">
                <div className="solution-icon">
                  <i className="fas fa-car"></i>
                </div>
                <h4>交通行业方案</h4>
                <p className="solution-desc">新型绿色交通系统</p>
                <List className="solution-details">
                  <ListItem>信号灯, 信息牌, 助网项明系统</ListItem>
                  <ListItem>房车自发电 高速公路充电站</ListItem>
                </List>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6 mb-30">
              <div className="solution-card">
                <div className="solution-icon">
                  <i className="fas fa-seedling"></i>
                </div>
                <h4>先进农林产解决方案</h4>
                <p className="solution-desc">提供多种互补方案</p>
                <List className="solution-details">
                  <ListItem>农光互补方案</ListItem>
                  <ListItem>林光互补方案</ListItem>
                  <ListItem>牧光互补方案</ListItem>
                  <ListItem>渔光互补方案</ListItem>
                </List>
              </div>
            </div>
          </div>
          
          <div className="row justify-content-center mt-50">
            <div className="col-xl-8 text-center">
              <div className="future-statement">
                <p className="lead">
                  我们还能做很多的，期待与您共同开发新模式，新产业。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="values-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-50">
                <h2>我们的价值观</h2>
                <p>我们始终坚持用户至上，用心服务于客户</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="value-item text-center">
                <div className="value-icon">
                  <i className="fas fa-handshake"></i>
                </div>
                <h4>诚信</h4>
                <p>以诚信为本，建立长期合作关系</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="value-item text-center">
                <div className="value-icon">
                  <i className="fas fa-users"></i>
                </div>
                <h4>共赢</h4>
                <p>追求与客户的共同发展和成功</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="value-item text-center">
                <div className="value-icon">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h4>创新</h4>
                <p>持续创新，提供更好的解决方案</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
