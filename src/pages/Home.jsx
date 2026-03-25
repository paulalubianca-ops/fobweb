import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ProblemSection from '../components/home/ProblemSection';
import EventsSpotlight from '../components/home/EventsSpotlight';
import HowItWorks from '../components/home/HowItWorks';
import SocialProof from '../components/home/SocialProof';
import FinalCTA from '../components/home/FinalCTA';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <EventsSpotlight />
      <HowItWorks />
      <SocialProof />
      <FinalCTA />
    </>
  );
}