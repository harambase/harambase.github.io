import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Services from '../components/Services';
import ServicesGrid from '../components/ServicesGrid';
import CallToAction from '../components/CallToAction';
import About from '../components/About';
import Video from '../components/Video';
import Brand from '../components/Brand';
import FAQ from '../components/FAQ';
import Gallery from '../components/Gallery';
import Team from '../components/Team';
import Testimonial from '../components/Testimonial';
import Blog from '../components/Blog';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Hero/>
      <Services/>
      <CallToAction/>
      <About/>
      {/* <Video/>
      <Brand/>
      <FAQ/>
      <Gallery/>
      <Team/>
      <Testimonial/>
      <Blog/> */}
    </Layout>
  );
};

export default HomePage;
