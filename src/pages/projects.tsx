import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const ProjectsPage: React.FC = () => {
  const projects = [
    {
      image: '/static/picture/protfolio-oli-img01.png',
      title: '元鑫荣华光伏项目 1',
      category: '地面光伏',
      description: '大型地面光伏电站项目，装机容量50MW',
      link: '/single-projects'
    },
    {
      image: '/static/picture/protfolio-oli-img02.png',
      title: '元鑫荣华光伏项目 2',
      category: '屋顶光伏',
      description: '工商业屋顶光伏项目，装机容量10MW',
      link: '/single-projects'
    },
    {
      image: '/static/picture/protfolio-img04.png',
      title: '元鑫荣华光伏项目 3',
      category: '分布式光伏',
      description: '分布式光伏项目，装机容量5MW',
      link: '/single-projects'
    },
    {
      image: '/static/picture/protfolio-oli-img04.png',
      title: '元鑫荣华光伏项目 4',
      category: '地面光伏',
      description: '大型地面光伏电站项目，装机容量100MW',
      link: '/single-projects'
    },
    {
      image: '/static/picture/protfolio-oli-img05.png',
      title: '元鑫荣华光伏项目 5',
      category: '屋顶光伏',
      description: '住宅屋顶光伏项目，装机容量2MW',
      link: '/single-projects'
    },
    {
      image: '/static/picture/protfolio-oli-img06.png',
      title: '元鑫荣华光伏项目 6',
      category: '分布式光伏',
      description: '分布式光伏项目，装机容量8MW',
      link: '/single-projects'
    }
  ];

  const categories = ['全部', '地面光伏', '屋顶光伏', '分布式光伏'];

  return (
    <Layout title="项目展示 - 元鑫荣华贸易有限公司" description="查看我们的成功项目案例和光伏支架应用">
      {/* Page Header */}
      <section className="page-header pt-120 pb-120" style={{backgroundImage: 'url(/static/image/slider_bg.png)'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-content text-center">
                <h1>项目展示</h1>
                <p>我们成功完成的光伏支架项目案例</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Filter */}
      <section className="project-filter pt-60 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="filter-buttons text-center">
                {categories.map((category, index) => (
                  <button key={index} className="filter-btn">
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-area pt-60 pb-120">
        <div className="container">
          <div className="row">
            {projects.map((project, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-30">
                <div className="project-item">
                  <div className="project-image">
                    <Link href={project.link}>
                      <img src={project.image} alt={project.title} width={400} height={300}/>
                    </Link>
                    <div className="project-overlay">
                      <div className="project-info">
                        <h4>{project.title}</h4>
                        <p>{project.description}</p>
                        <span className="project-category">{project.category}</span>
                      </div>
                    </div>
                  </div>
                  <div className="project-content">
                    <h4><Link href={project.link}>{project.title}</Link></h4>
                    <p>{project.description}</p>
                    <Link href={project.link} className="btn btn-primary">
                      查看详情
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="project-stats pt-120 pb-120" style={{backgroundColor: '#f8f9fa'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-50">
                <h2>项目数据</h2>
                <p>我们的项目成果统计</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-30">
              <div className="stat-item text-center">
                <div className="stat-number">200+</div>
                <div className="stat-label">完成项目</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-30">
              <div className="stat-item text-center">
                <div className="stat-number">500MW+</div>
                <div className="stat-label">装机容量</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-30">
              <div className="stat-item text-center">
                <div className="stat-number">100+</div>
                <div className="stat-label">合作客户</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-30">
              <div className="stat-item text-center">
                <div className="stat-number">5年+</div>
                <div className="stat-label">行业经验</div>
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
                <h2>想要了解更多项目案例？</h2>
                <p>联系我们获取详细的项目资料和解决方案</p>
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

export default ProjectsPage;
