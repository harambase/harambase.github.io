import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="footer-bg footer-p pt-90"
            style={{backgroundColor: '#2563eb', backgroundImage: 'url(/static/image/footer-bg.png)'}}>
      {/* Footer Top Heading */}
      <div className="footer-top-heiding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="section-title">
                <h2>Get Subscribe Now !</h2>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="newslater-area">
                <form name="ajax-form" id="contact-form4" action="#" method="post" className="contact-form newslater"
                      onSubmit={(e) => e.preventDefault()}>
                  <div className="form-group p-relative">
                    <input className="form-control" id="email2" name="email" type="email" placeholder="Email Address..."
                           required/>
                    <button type="submit" id="send2">Subscribe Now</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Top */}
      <div className="footer-top pb-70">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-4 col-lg-4 col-sm-6">
              <div className="footer-widget mb-30">
                <div className="f-widget-title">
                  <h2>关于我们</h2>
                </div>
                <div className="footer-link">
                  <p>
                    专业销售扁钢、带钢、圆钢、热镀锌扁钢、热镀锌角钢、热镀锌圆钢、热镀锌带钢、开平板、盘条等，
                    公司尊崇"踏实、拼搏、责任"的企业精神，并以诚信、共赢、开创经营理念，创造良好的企业环境，以全新的管理模式，完善的技术，
                    周到的服务，卓越的品质为生存根本，我们始终坚持用户至上用心服务于客户，坚持用自己的服务去打动客户。
                    您如果对我们的产品感兴趣或者有任何的疑问，
                    您可以直接给我们留言或直接与我们联络，我们将在收到您的信息后，会第一时间及时与您联系。
                  </p>
                  <div className="f-contact">
                    <ul>
                      <li>
                        <span className="icon"><img src="/static/picture/fot-icon1.png" alt="img" width={35}
                                                    height={35}/></span>
                        <span>028-65520978<br/>+86 1528351812</span>
                      </li>
                      <li>
                        <span className="icon"><img src="/static/picture/fot-icon2.png" alt="img" width={35}
                                                    height={35}/></span>
                        <span>中国四川省成都市量力钢材城<br/>D区5幢22号</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-1 col-lg-1 col-sm-6"></div>
            <div className="col-xl-2 col-lg-2 col-sm-6">
              <div className="footer-widget mb-30">
                <div className="f-widget-title">
                  <h2>Other Links</h2>
                </div>
                <div className="footer-link">
                  <ul>
                    <li><Link href="/">主页</Link></li>
                    <li><Link href="/about">关于我们</Link></li>
                    <li><Link href="/service">产品</Link></li>
                    <li><Link href="/products">产品列表</Link></li>
                    <li><Link href="/projects">项目</Link></li>
                    <li><Link href="/team">团队</Link></li>
                    <li><Link href="/blog">最新博客</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-sm-6">
              <div className="footer-widget mb-30">
                <div className="f-widget-title">
                  <h2>我们的产品</h2>
                </div>
                <div className="footer-link">
                  <ul>
                    <li><Link href="#">所有产品</Link></li>
                    <li><Link href="#">钢材</Link></li>
                    <li><Link href="#">光伏</Link></li>
                    <li><Link href="#">全天咨询服务</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-sm-6">
              <div className="footer-widget mb-30">
                <div className="f-widget-title">
                  <h2>工作图库</h2>
                </div>
                <div className="f-insta">
                  <ul>
                    <li><a className="popup-image" href="/static/picture/f-galler-01.png"><img
                      src="/static/picture/f-galler-01.png" alt="img" width={60} height={60}/></a></li>
                    <li><a className="popup-image" href="/static/picture/f-galler-02.png"><img
                      src="/static/picture/f-galler-02.png" alt="img" width={60} height={60}/></a></li>
                    <li><a className="popup-image" href="/static/picture/f-galler-03.png"><img
                      src="/static/picture/f-galler-03.png" alt="img" width={60} height={60}/></a></li>
                    <li><a className="popup-image" href="/static/picture/f-galler-04.png"><img
                      src="/static/picture/f-galler-04.png" alt="img" width={60} height={60}/></a></li>
                    <li><a className="popup-image" href="/static/picture/f-galler-05.png"><img
                      src="/static/picture/f-galler-05.png" alt="img" width={60} height={60}/></a></li>
                    <li><a className="popup-image" href="/static/picture/f-galler-06.png"><img
                      src="/static/picture/f-galler-06.png" alt="img" width={60} height={60}/></a></li>
                    <li><a className="popup-image" href="/static/picture/f-galler-07.png"><img
                      src="/static/picture/f-galler-07.png" alt="img" width={60} height={60}/></a></li>
                    <li><a className="popup-image" href="/static/picture/f-galler-08.png"><img
                      src="/static/picture/f-galler-08.png" alt="img" width={60} height={60}/></a></li>
                    <li><a className="popup-image" href="/static/picture/f-galler-09.png"><img
                      src="/static/picture/f-galler-09.png" alt="img" width={60} height={60}/></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="copyright-wrap">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="copy-text">
                Copyright &copy; 2025. 版权所有成都元鑫荣华贸易有限公司 All rights reserved.
              </div>
            </div>
            <div className="col-lg-4 text-center">
              <span style={{ 
                fontSize: '28px', 
                fontWeight: 'bold', 
                color: '#ffffff',
                letterSpacing: '2px'
              }}>
                YXRH
              </span>
            </div>
            <div className="col-lg-4 text-right">
              <div className="footer-social">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
