import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      image: '/static/picture/team01.png',
      name: 'Bableo Dablo',
      position: '总经理',
      description: '拥有10年光伏行业经验，专注于大型地面光伏项目开发和管理。',
      social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      image: '/static/picture/team02.png',
      name: 'Dawon Crisen',
      position: '技术总监',
      description: '光伏支架系统设计专家，负责技术方案设计和项目实施。',
      social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      image: '/static/picture/team03.png',
      name: 'David Suarez',
      position: '销售经理',
      description: '负责客户关系维护和业务拓展，拥有丰富的销售经验。',
      social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      image: '/static/picture/team04.png',
      name: 'Gerard Peano',
      position: '项目经理',
      description: '负责项目执行和现场管理，确保项目按时高质量完成。',
      social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#'
      }
    }
  ];

  return (
    <Layout title="团队介绍 - 元鑫荣华贸易有限公司" description="认识我们的专业团队，他们拥有丰富的行业经验">
      {/* Page Header */}
      <section className="page-header pt-120 pb-120" style={{backgroundImage: 'url(/static/image/slider_bg.png)'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-content text-center">
                <h1>我们的团队</h1>
                <p>专业的团队，为您提供最优质的服务</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="team-intro pt-120 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-50">
                <h2>专业团队</h2>
                <p>
                  我们拥有一支经验丰富的专业团队，团队成员在光伏行业、钢材贸易、项目管理等领域拥有深厚的专业背景。
                  我们致力于为客户提供最专业、最优质的服务。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="team-members pt-60 pb-120">
        <div className="container">
          <div className="row">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-lg-3 col-md-6 mb-40">
                <div className="team-member">
                  <div className="member-image">
                    <img src={member.image} alt={member.name} width={300} height={400}/>
                    <div className="member-overlay">
                      <div className="member-social">
                        <a href={member.social.facebook}><i className="fab fa-facebook-f"></i></a>
                        <a href={member.social.twitter}><i className="fab fa-twitter"></i></a>
                        <a href={member.social.linkedin}><i className="fab fa-linkedin-in"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4><Link href="/team-single">{member.name}</Link></h4>
                    <p className="position">{member.position}</p>
                    <p className="description">{member.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="team-values pt-120 pb-120" style={{backgroundColor: '#f8f9fa'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-50">
                <h2>团队价值观</h2>
                <p>我们的团队秉承以下价值观，为客户提供最优质的服务</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-30">
              <div className="value-item text-center">
                <div className="value-icon">
                  <i className="fas fa-handshake"></i>
                </div>
                <h4>诚信合作</h4>
                <p>以诚信为本，与客户建立长期稳定的合作关系</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-30">
              <div className="value-item text-center">
                <div className="value-icon">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h4>专业创新</h4>
                <p>持续创新，为客户提供最先进的技术解决方案</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-30">
              <div className="value-item text-center">
                <div className="value-icon">
                  <i className="fas fa-users"></i>
                </div>
                <h4>团队协作</h4>
                <p>团队协作，发挥集体智慧，为客户创造最大价值</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="team-stats pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-50">
                <h2>团队实力</h2>
                <p>我们的团队拥有丰富的行业经验和专业技能</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-30">
              <div className="stat-item text-center">
                <div className="stat-number">50+</div>
                <div className="stat-label">专业工程师</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-30">
              <div className="stat-item text-center">
                <div className="stat-number">10+</div>
                <div className="stat-label">年行业经验</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-30">
              <div className="stat-item text-center">
                <div className="stat-number">100+</div>
                <div className="stat-label">成功项目</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-30">
              <div className="stat-item text-center">
                <div className="stat-number">24/7</div>
                <div className="stat-label">技术支持</div>
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
                <h2>想要了解更多关于我们的团队？</h2>
                <p>联系我们，我们的专业团队将为您提供最优质的服务</p>
                <Link href="/contact" className="btn btn-primary">
                  联系我们
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TeamPage;
