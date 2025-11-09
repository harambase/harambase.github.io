import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      image: '/static/picture/inner_b4.jpg',
      title: 'Cras accumsan nulla nec lacus ultricies placerat.',
      date: '24th March 2023',
      author: 'Admin',
      comments: 3,
      link: '/blog-details'
    },
    {
      image: '/static/picture/inner_b5.jpg',
      title: 'Dras accumsan nulla nec lacus ultricies placerat.',
      date: '24th March 2023',
      author: 'Admin',
      comments: 3,
      link: '/blog-details'
    },
    {
      image: '/static/picture/inner_b6.jpg',
      title: 'Seas accumsan nulla nec lacus ultricies placerat.',
      date: '24th March 2023',
      author: 'Admin',
      comments: 3,
      link: '/blog-details'
    }
  ];

  return (
    <section id="blog" className="blog-area blog-area3 p-relative fix pt-120 pb-90">
      <div className="animations-01">
        <img src="/static/picture/an-img-04.png" alt="an-img-01" width={100} height={100}/>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="section-title center-align mb-50 text-center wow fadeInDown animated"
                 data-animation="fadeInDown" data-delay=".4s">
              <h5><i className="fal fa-graduation-cap"></i> Our Blog</h5>
              <h2>Latest Blog & News</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {blogPosts.map((post, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="single-post2 hover-zoomin mb-30 wow fadeInUp animated" data-animation="fadeInUp"
                   data-delay=".4s">
                <div className="blog-thumb2">
                  <Link href={post.link}>
                    <img src={post.image} alt="img" width={400} height={250}/>
                  </Link>
                  <div className="date-home">
                    <i className="fal fa-calendar-alt"></i> {post.date}
                  </div>
                </div>
                <div className="blog-content2">
                  <div className="b-meta">
                    <div className="meta-info">
                      <ul>
                        <li><i className="fal fa-user"></i> By {post.author}</li>
                        <li><i className="fal fa-comments"></i> {post.comments} Comments</li>
                      </ul>
                    </div>
                  </div>
                  <h4><Link href={post.link}>{post.title}</Link></h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
