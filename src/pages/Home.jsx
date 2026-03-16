import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ProblemSection from '../components/home/ProblemSection';
import MentorshipSpotlight from '../components/home/MentorshipSpotlight';
import HowItWorks from '../components/home/HowItWorks';
import SocialProof from '../components/home/SocialProof';
import FinalCTA from '../components/home/FinalCTA';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <MentorshipSpotlight />
      <HowItWorks />
      <SocialProof />
      <FinalCTA />
    </>
  );
}