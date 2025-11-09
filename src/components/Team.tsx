import React from 'react';
import Link from 'next/link';

const Team: React.FC = () => {
  const teamMembers = [
    {
      image: '/static/picture/team01.png',
      name: 'Bableo Dablo',
      position: 'Worker',
      link: '/team-single'
    },
    {
      image: '/static/picture/team02.png',
      name: 'Dawon Crisen',
      position: 'Worker',
      link: '/team-single'
    },
    {
      image: '/static/picture/team03.png',
      name: 'David Suarez',
      position: 'Worker',
      link: '/team-single'
    },
    {
      image: '/static/picture/team04.png',
      name: 'Gerard Peano',
      position: 'Worker',
      link: '/team-single'
    }
  ];

  return (
    <section className="team-area2 fix p-relative pb-95">
      <div className="animations-02">
        <img src="/static/picture/an-img-08.png" alt="contact-bg-an-01" width={100} height={100}/>
      </div>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6">
            <div className="section-title center-align mb-50 wow fadeInDown animated" data-animation="fadeInDown"
                 data-delay=".4s">
              <h5>Meet Our Team</h5>
              <h2>
                The Professional <span>Contractors</span>
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
        <div className="row">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-xl-3">
              <div className="single-team mb-40">
                <div className="team-thumb pt-10 pr-10 pl-10">
                  <div className="brd">
                    <img src={member.image} alt="img" width={250} height={300}/>
                    <div className="team-social">
                      <ul>
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="team-info">
                  <h4><Link href={member.link}>{member.name}</Link></h4>
                  <p>{member.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
