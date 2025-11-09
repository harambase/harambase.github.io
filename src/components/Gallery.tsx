import React from 'react';
import Link from 'next/link';

const Gallery: React.FC = () => {
  const projects = [
    {
      image: '/static/picture/protfolio-oli-img01.png',
      title: '元鑫荣华 Project',
      tags: ['#Factory', '#industry'],
      link: '/single-projects'
    },
    {
      image: '/static/picture/protfolio-oli-img02.png',
      title: '元鑫荣华 Project 2',
      tags: ['#Factory', '#industry'],
      link: '/single-projects'
    },
    {
      image: '/static/picture/protfolio-img04.png',
      title: '元鑫荣华 Project 3',
      tags: ['#Factory', '#industry'],
      link: '/single-projects'
    },
    {
      image: '/static/picture/protfolio-oli-img04.png',
      title: '元鑫荣华 Project 4',
      tags: ['#Factory', '#industry'],
      link: '/single-projects'
    },
    {
      image: '/static/picture/protfolio-oli-img05.png',
      title: '元鑫荣华 Project 5',
      tags: ['#Factory', '#industry'],
      link: '/single-projects'
    },
    {
      image: '/static/picture/protfolio-oli-img06.png',
      title: '元鑫荣华 Project 6',
      tags: ['#Factory', '#industry'],
      link: '/single-projects'
    }
  ];

  return (
    <section id="work" className="pt-110 pb-95">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-6">
            <div className="section-title text-center mb-50">
              <h5>Meet Our Project</h5>
              <h2>Explore Projects</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="masonry-gallery-huge">
              <div className="grid col2">
                {projects.map((project, index) => (
                  <div key={index} className="grid-item hover-zoomin financial">
                    <Link href={project.link}>
                      <figure className="gallery-image">
                        <img src={project.image} alt="img" className="img" width={400} height={300}/>
                        <figcaption>
                          <h4>{project.title}</h4>
                          <ul>
                            {project.tags.map((tag, tagIndex) => (
                              <li key={tagIndex}>{tag}</li>
                            ))}
                          </ul>
                        </figcaption>
                      </figure>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
