import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      image: '/static/picture/inner_b4.jpg',
      title: '光伏支架系统的发展趋势',
      excerpt: '随着光伏技术的不断发展，光伏支架系统也在不断创新和改进。本文将分析当前光伏支架系统的发展趋势。',
      date: '2024年1月15日',
      author: '技术团队',
      category: '技术资讯',
      link: '/blog-details'
    },
    {
      image: '/static/picture/inner_b5.jpg',
      title: '钢材在光伏支架中的应用',
      excerpt: '钢材作为光伏支架的主要材料，其质量和性能直接影响支架系统的稳定性和使用寿命。',
      date: '2024年1月10日',
      author: '技术团队',
      category: '产品知识',
      link: '/blog-details'
    },
    {
      image: '/static/picture/inner_b6.jpg',
      title: '光伏支架安装注意事项',
      excerpt: '光伏支架的安装质量直接影响整个光伏系统的发电效率和安全性。本文介绍安装过程中的注意事项。',
      date: '2024年1月5日',
      author: '技术团队',
      category: '安装指南',
      link: '/blog-details'
    },
    {
      image: '/static/picture/inner_b4.jpg',
      title: '光伏支架维护保养指南',
      excerpt: '定期维护保养是确保光伏支架系统长期稳定运行的关键。本文提供详细的维护保养指南。',
      date: '2023年12月28日',
      author: '技术团队',
      category: '维护保养',
      link: '/blog-details'
    },
    {
      image: '/static/picture/inner_b5.jpg',
      title: '分布式光伏支架系统设计',
      excerpt: '分布式光伏项目对支架系统有特殊要求，本文介绍分布式光伏支架系统的设计要点。',
      date: '2023年12月20日',
      author: '技术团队',
      category: '技术资讯',
      link: '/blog-details'
    },
    {
      image: '/static/picture/inner_b6.jpg',
      title: '光伏支架成本优化策略',
      excerpt: '在保证质量的前提下，如何优化光伏支架系统的成本是项目成功的关键因素之一。',
      date: '2023年12月15日',
      author: '技术团队',
      category: '成本优化',
      link: '/blog-details'
    }
  ];

  const categories = ['全部', '技术资讯', '产品知识', '安装指南', '维护保养', '成本优化'];

  return (
    <Layout title="博客资讯 - 元鑫荣华贸易有限公司" description="最新的光伏行业资讯、技术文章和产品知识">
      {/* Page Header */}
      <section className="page-header pt-120 pb-120" style={{backgroundImage: 'url(/static/image/slider_bg.png)'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-content text-center">
                <h1>博客资讯</h1>
                <p>最新的光伏行业资讯、技术文章和产品知识</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Filter */}
      <section className="blog-filter pt-60 pb-60">
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

      {/* Blog Posts */}
      <section className="blog-posts pt-60 pb-120">
        <div className="container">
          <div className="row">
            {blogPosts.map((post, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-30">
                <div className="blog-post">
                  <div className="post-image">
                    <Link href={post.link}>
                      <img src={post.image} alt={post.title} width={400} height={250}/>
                    </Link>
                    <div className="post-category">
                      <span>{post.category}</span>
                    </div>
                  </div>
                  <div className="post-content">
                    <div className="post-meta">
                      <span><i className="fas fa-calendar"></i> {post.date}</span>
                      <span><i className="fas fa-user"></i> {post.author}</span>
                    </div>
                    <h4><Link href={post.link}>{post.title}</Link></h4>
                    <p>{post.excerpt}</p>
                    <Link href={post.link} className="read-more">
                      阅读更多 <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="newsletter pt-120 pb-120" style={{backgroundColor: '#f8f9fa'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="newsletter-content text-center">
                <h2>订阅我们的资讯</h2>
                <p>获取最新的光伏行业资讯和技术文章</p>
                <form className="newsletter-form">
                  <div className="form-group">
                    <input type="email" placeholder="输入您的邮箱地址" required/>
                    <button type="submit" className="btn btn-primary">
                      订阅
                    </button>
                  </div>
                </form>
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
                <h2>需要更多技术资讯？</h2>
                <p>我们的技术团队将为您提供专业的技术支持和咨询服务</p>
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

export default BlogPage;
