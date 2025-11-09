import {Html, Head, Main, NextScript} from 'next/document';

export default function Document() {
  return (
    <Html lang="zh-CN">
      <Head>
        <meta charSet="utf-8"/>
        <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
        <link rel="icon" href="/static/picture/f_logo.png"/>
        {/* Original template CSS (order preserved) */}
        <link rel="stylesheet" href="/static/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="/static/css/animate.min.css"/>
        <link rel="stylesheet" href="/static/css/magnific-popup.css"/>
        <link rel="stylesheet" href="/static/css/all.min.css"/>
        <link rel="stylesheet" href="/static/css/dripicons.css"/>
        <link rel="stylesheet" href="/static/css/slick.css"/>
        <link rel="stylesheet" href="/static/css/meanmenu.css"/>
        <link rel="stylesheet" href="/static/css/default.css"/>
        <link rel="stylesheet" href="/static/css/style.css"/>
        <link rel="stylesheet" href="/static/css/responsive.css"/>
      </Head>
      <body>
      <Main/>
      <NextScript/>
      </body>
    </Html>
  );
}
