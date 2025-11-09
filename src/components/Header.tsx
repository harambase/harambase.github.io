import React, {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header-area header">
      {/* Header Top */}
      <div className="header-top-two d-none d-md-block">
        <div className="container">
          <div className="second-header">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-2"></div>
              <div className="col-lg-5 col-md-5 d-none d-lg-block">
                <div className="header-social">
                  <span>
                    <strong>关注我们：</strong>
                    <a href="#" title="Weixin"><i className="fab fa-weixin"></i></a>
                    <a href="#" title="WhatsApp"><i className="fab fa-whatsapp"></i></a>
                  </span>
                </div>
              </div>
              <div className="col-lg-5 col-md-5 d-none d-lg-block text-right">
                <div className="header-cta">
                  <ul>
                    <li>
                      <div className="call-box">
                        <div className="icon">
                          <Image src="/static/picture/phone-call.png" alt="img" width={35} height={35}/>
                        </div>
                        <div className="text">
                          <span><strong>电话垂询：</strong></span>
                          <strong><a href="tel:+861528351812">+86 1528351812</a></strong>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="call-box">
                        <div className="icon">
                          <Image src="/static/picture/mailing.png" alt="img" width={35} height={35}/>
                        </div>
                        <div className="text">
                          <span>Email垂询</span>
                          <strong><a href="mailto:info@yxrhgt.com">info@yxrhgt.com</a></strong>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div id="header-sticky" className="menu-area">
        <div className="container">
          <div className="second-menu">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-2">
                <div className="logo">
                  <Link href="/">
                    <Image src="/static/picture/f_logo.png" alt="logo" width={120} height={60}/>
                  </Link>
                </div>
              </div>
              <div className="col-xl-7 col-lg-7">
                <div className="main-menu">
                  <nav id="mobile-menu">
                    <ul>
                      <li className="has-sub">
                        <Link href="/">主页</Link>
                      </li>
                      <li><Link href="/about">关于我们</Link>
                      </li>
                      <li className="has-sub">
                        <Link href="/products">产品</Link>
                      </li>
                      <li><Link href="/compare">产品对比</Link></li>
                      <li><Link href="/contact">联系我们</Link></li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 text-right d-none d-lg-block">
                <div className="login">
                  <ul>
                    <li><a href="#" className="menu-tigger"><i className="fal fa-search"></i></a></li>
                    <li>
                      <div className="second-header-btn">
                        <Link href="/contact" className="btn">联系我们</Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12">
                <div className="mobile-menu"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Offcanvas Menu */}
      <div className={`offcanvas-menu ${isMenuOpen ? 'active' : ''}`}>
        <span className="menu-close" onClick={toggleMenu}>
          <i className="fas fa-times"></i>
        </span>
        <form role="search" method="get" id="searchform" className="searchform" action="#">
          <input type="text" name="s" id="search" placeholder="Search"/>
          <button><i className="fa fa-search"></i></button>
        </form>
        <div id="cssmenu3" className="menu-one-page-menu-container">
          <ul className="menu">
            <li className="menu-item menu-item-type-custom menu-item-object-custom">
              <Link href="/">主页</Link>
            </li>
            <li className="menu-item menu-item-type-custom menu-item-object-custom">
              <Link href="/about">关于我们</Link>
            </li>
            <li className="menu-item menu-item-type-custom menu-item-object-custom">
              <Link href="/products">产品</Link>
            </li>
            <li className="menu-item menu-item-type-custom menu-item-object-custom">
              <Link href="/compare">产品对比</Link>
            </li>
          </ul>
        </div>
        <div id="cssmenu2" className="menu-one-page-menu-container">
          <ul id="menu-one-page-menu-12" className="menu">
            <li className="menu-item menu-item-type-custom menu-item-object-custom">
              <Link href="#home"><span>+86 1528351812</span></Link>
            </li>
            <li className="menu-item menu-item-type-custom menu-item-object-custom">
              <Link href="#howitwork"><span>info@yxrhgt.com</span></Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="offcanvas-overly" onClick={toggleMenu}></div>
    </header>
  );
};

export default Header;
