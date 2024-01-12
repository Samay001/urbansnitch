// pages/Home.js
import React from 'react';
import Layout from '../components/layout/layout'; 
import Banner from '../components/layout/banner'; 
import { NavLink } from 'react-router-dom';
const discountBanner = '/images/discountBanner.webp';
const maleBanner = '/images/maleBanner.jpg';
const femaleBanner = '/images/femaleBanner.avif';

const Home = () => {

  return (
    <Layout>
      
      {/* Discount Banner */}
      <Banner imageUrl={discountBanner} altText="Discount Banner" to="/Male" />

      {/* Male Section Banner */}
      <Banner imageUrl={maleBanner} altText="Male Section Banner" to="/Male" />

      {/* Female Section Banner */}
      <Banner imageUrl={femaleBanner} altText="Female Section Banner" to="/Female" />

    </Layout>
  );
};


export default Home;
