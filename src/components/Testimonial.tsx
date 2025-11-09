import React from 'react';

const Testimonial: React.FC = () => {
  const testimonials = [
    {
      text: "Morbi neque nisi, tincidunt nec erat vitae, viverra porttitor lorem. Fusce tempor nunc at luctus blandit. Donec eget fermentum magna. Mauris fermentum nulla nec magna dignissim.",
      avatar: '/static/picture/testi_avatar.png',
      name: 'Margie Dose',
      position: 'Sales Executive'
    },
    {
      text: "Morbi neque nisi, tincidunt nec erat vitae, viverra porttitor lorem. Fusce tempor nunc at luctus blandit. Donec eget fermentum magna. Mauris fermentum nulla nec magna dignissim.",
      avatar: '/static/picture/testi_avatar_02.png',
      name: 'Jone Walker',
      position: 'Marketing'
    },
    {
      text: "Morbi neque nisi, tincidunt nec erat vitae, viverra porttitor lorem. Fusce tempor nunc at luctus blandit. Donec eget fermentum magna. Mauris fermentum nulla nec magna dignissim.",
      avatar: '/static/picture/testi_avatar_02.png',
      name: 'Dose Robot',
      position: 'Web Developer'
    },
    {
      text: "Morbi neque nisi, tincidunt nec erat vitae, viverra porttitor lorem. Fusce tempor nunc at luctus blandit. Donec eget fermentum magna. Mauris fermentum nulla nec magna dignissim.",
      avatar: '/static/picture/testi_avatar.png',
      name: 'Jone Walker',
      position: 'Web Designer'
    },
    {
      text: "Morbi neque nisi, tincidunt nec erat vitae, viverra porttitor lorem. Fusce tempor nunc at luctus blandit. Donec eget fermentum magna. Mauris fermentum nulla nec magna dignissim.",
      avatar: '/static/picture/testi_avatar_02.png',
      name: 'Margie Dose',
      position: 'Web Developer'
    },
    {
      text: "Morbi neque nisi, tincidunt nec erat vitae, viverra porttitor lorem. Fusce tempor nunc at luctus blandit. Donec eget fermentum magna. Mauris fermentum nulla nec magna dignissim.",
      avatar: '/static/picture/testi_avatar.png',
      name: 'Jone Walker',
      position: 'Web Designer'
    }
  ];

  return (
    <section className="testimonial-area2 pt-120 pb-115 p-relative fix"
             style={{backgroundImage: 'url(/static/image/testimonial-bg2.png)', backgroundSize: 'cover'}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center mb-50 wow fadeInDown animated" data-animation="fadeInDown"
                 data-delay=".4s">
              <h5>Testimonial</h5>
              <h2>What Our Clients Says</h2>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="testimonial-active2">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="single-testimonial">
                  <p>"{testimonial.text}"</p>
                  <div className="testi-author">
                    <img src={testimonial.avatar} alt="img" width={60} height={60}/>
                    <div className="ta-info">
                      <h6>{testimonial.name}</h6>
                      <span>{testimonial.position}</span>
                    </div>
                  </div>
                  <div className="qt-img">
                    <img src="/static/picture/qt-icon2.png" alt="img" width={30} height={30}/>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
