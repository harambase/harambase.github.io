import React, {useEffect} from 'react';
import type {AppProps} from 'next/app';
import {useRouter} from 'next/router';
import '../styles/globals.css';

export default function App({Component, pageProps}: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const initPlugins = () => {
      const w = window as any;
      if (w && w.$) {
        try {
          // Ensure the plugin is registered
          if (!w.$.fn?.magnificPopup && w.magnificPopup) {
            w.$.fn.magnificPopup = w.magnificPopup.fn || w.magnificPopup;
          }
          // Initialize WOW animations if present
          if (w.WOW) {
            new w.WOW().init();
          }
          // Initialize meanmenu mobile menu if present
          if (typeof w.$.fn?.meanmenu === 'function') {
            w.$('#mobile-menu').meanmenu();
          }
          // Re-run counters if needed
          if (typeof w.$.fn?.counterUp === 'function') {
            w.$('.counter').counterUp({delay: 10, time: 1000});
          }
          // Initialize magnificPopup for gallery links if present
          if (typeof w.$.fn?.magnificPopup === 'function') {
            w.$('.popup-image').magnificPopup({type: 'image', gallery: {enabled: true}});
          }
        } catch (e) {
          // Silently ignore init errors
        }
      }
    };

    initPlugins();
    router.events.on('routeChangeComplete', initPlugins);
    return () => {
      router.events.off('routeChangeComplete', initPlugins);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}
