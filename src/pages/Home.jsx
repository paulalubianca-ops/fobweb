import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ProblemSection from '../components/home/ProblemSection';
import WhoWeAre from '../components/home/WhoWeAre';
import TakePart from '../components/home/TakePart';
import EventsSpotlight from '../components/home/EventsSpotlight';
import HowItWorks from '../components/home/HowItWorks';
import SocialProof from '../components/home/SocialProof';
import ReviewsSection from '../components/shared/ReviewsSection';
import FinalCTA from '../components/home/FinalCTA';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <WhoWeAre />
      <TakePart />
      <EventsSpotlight />
      <HowItWorks />
      <SocialProof />
      <ReviewsSection bg="bg-white" />
      <FinalCTA />
    </>
  );
}