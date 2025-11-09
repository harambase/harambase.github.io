import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({
                                         children,
                                         title = '元鑫荣华贸易有限公司',
                                         description = '专业销售扁钢、带钢、圆钢、热镀锌扁钢、热镀锌角钢、热镀锌圆钢、热镀锌带钢、开平板、盘条等'
                                       }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/static/picture/f_logo.png"/>
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header/>
        <main className="flex-grow">
          {children}
        </main>
        <Footer/>
      </div>

      {/* Original template JS: load in correct order */}
      <Script src="/static/js/modernizr-3.5.0.min.js" strategy="beforeInteractive"/>
      <Script
        src="/static/js/jquery-3.6.4.min.js"
        strategy="beforeInteractive"
        onLoad={() => {
          // Ensure global aliases for plugins
          const w: any = window as any;
          if (!w.jQuery && w.$) w.jQuery = w.$;
          if (!w.$ && w.jQuery) w.$ = w.jQuery;
        }}
      />
      <Script src="/static/js/popper.min.js" strategy="afterInteractive"/>
      <Script src="/static/js/bootstrap.min.js" strategy="afterInteractive"/>
      <Script src="/static/js/slick.min.js" strategy="afterInteractive"/>
      <Script src="/static/js/ajax-form.js" strategy="afterInteractive"/>
      <Script src="/static/js/paroller.js" strategy="afterInteractive"/>
      <Script src="/static/js/wow.min.js" strategy="afterInteractive"/>
      {/* imagesLoaded should come before Isotope */}
      <Script src="/static/js/imagesloaded.min.js" strategy="afterInteractive"/>
      <Script src="/static/js/js_isotope.pkgd.min.js" strategy="afterInteractive"/>
      <Script src="/static/js/parallax.min.js" strategy="afterInteractive"/>
      <Script src="/static/js/jquery.waypoints.min.js" strategy="afterInteractive"/>
      <Script src="/static/js/jquery.counterup.min.js" strategy="afterInteractive"/>
      <Script src="/static/js/jquery.scrollUp.min.js" strategy="afterInteractive"/>
      <Script src="/static/js/jquery.meanmenu.min.js" strategy="afterInteractive"/>
      <Script src="/static/js/parallax-scroll.js" strategy="afterInteractive"/>
      {/* Ensure magnificPopup loads early, after jQuery */}
      <Script src="/static/js/jquery.magnific-popup.min.js" strategy="beforeInteractive"/>
      <Script src="/static/js/element-in-view.js" strategy="afterInteractive"/>
      <Script
        src="/static/js/main.js"
        strategy="afterInteractive"
        onLoad={() => {
          // Re-run initializations in case main.js expects DOMReady
          const w: any = window as any;
          if (w && w.$) {
            try {
              if (w.WOW) new w.WOW().init();
              if (typeof w.$.fn?.meanmenu === 'function') {
                w.$('#mobile-menu').meanmenu();
              }
            } catch {
            }
          }
        }}
      />
    </>
  );
};

export default Layout;
