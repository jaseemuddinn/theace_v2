'use client';
import React from 'react';
import HomeHero from './components/HomeHero';
import HomeAbout from './components/HomeAbout';
import HomeBenefits from './components/HomeBenefits';

const Home = () => {
  return (
    <div className="">
      <HomeHero />
      <HomeAbout />
      <HomeBenefits />
    </div>
  );
};

export default Home;
