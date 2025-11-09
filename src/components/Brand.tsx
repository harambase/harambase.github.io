import React from 'react';

const Brand: React.FC = () => {
  const brands = [
    '/static/picture/b-logo1.png',
    '/static/picture/b-logo2.png',
    '/static/picture/b-logo3.png',
    '/static/picture/b-logo4.png',
    '/static/picture/b-logo5.png',
    '/static/picture/b-logo1.png',
    '/static/picture/b-logo2.png',
    '/static/picture/b-logo3.png',
    '/static/picture/b-logo4.png',
    '/static/picture/b-logo5.png'
  ];

  return (
    <div className="brand-area pt-60 pb-120">
      <div className="container">
        <div className="row brand-active">
          {brands.map((brand, index) => (
            <div key={index} className="col-xl-2">
              <div className="single-brand">
                <img src={brand} alt="img" width={120} height={60}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brand;
