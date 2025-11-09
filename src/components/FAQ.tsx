import React, {useState} from 'react';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const faqs = [
    {
      id: 'collapseOne',
      question: 'Monthly Web Update Pragmatic Releasing ?',
      answer: 'Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.'
    },
    {
      id: 'collapseTwo',
      question: 'How To Use Improve User Experience ?',
      answer: 'Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.'
    },
    {
      id: 'collapseThree',
      question: 'Breaking The Rules Using To Demo Web ?',
      answer: 'Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.'
    },
    {
      id: 'collapseFour',
      question: 'Understanding CSS Layout And Formatting ?',
      answer: 'Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.'
    },
    {
      id: 'collapseFive',
      question: 'Business or organization established to provide ?',
      answer: 'Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.'
    },
    {
      id: 'collapseSix',
      question: 'Business or organization established to provide ?',
      answer: 'Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="faq-area pt-120 pb-120 p-relative fix" style={{
      backgroundImage: 'url(/static/image/faq-bg.png)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6">
            <div className="section-title wow fadeInLeft animated" data-animation="fadeInDown animated"
                 data-delay=".2s">
              <h2>Get every single answer here For Faq.</h2>
              <p>Special wedding garments are often worn, and the ceremony is sometimes followed by a wedding reception.
                Music, poetry.</p>
            </div>
            <div className="faq-wrap mt-30 pr-30 wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
              <div className="accordion" id="accordionExample">
                {faqs.map((faq, index) => (
                  <div key={index} className="card">
                    <div className="card-header" id={`heading${index + 1}`}>
                      <h2 className="mb-0">
                        <button
                          className={`faq-btn ${activeIndex === index ? '' : 'collapsed'}`}
                          type="button"
                          onClick={() => toggleFAQ(index)}
                        >
                          {faq.question}
                        </button>
                      </h2>
                    </div>
                    <div
                      id={faq.id}
                      className={`collapse ${activeIndex === index ? 'show' : ''}`}
                    >
                      <div className="card-body">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <img src="/static/picture/faq-img.png" alt="img" width={500} height={400}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
