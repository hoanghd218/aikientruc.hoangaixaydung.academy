import React from 'react';
import HeaderFree from '../components/FreeCourse/HeaderFree';
import HeroFree from '../components/FreeCourse/HeroFree';
import { FeaturesFree } from '../components/FreeCourse/FeaturesFree';
import SolutionFree from '../components/FreeCourse/SolutionFree';
import { CurriculumFree } from '../components/FreeCourse/CurriculumFree';
import { InstructorFree } from '../components/FreeCourse/InstructorFree';
import PricingFree from '../components/FreeCourse/PricingFree';
import FooterFree from '../components/FreeCourse/FooterFree';

export default function FreeCourse2SessionPage() {
  return (
    <div className="min-h-screen bg-bg-main font-sans text-text-main selection:bg-primary/20">
      <HeaderFree />
      <main>
        <HeroFree />
        <FeaturesFree />
        <SolutionFree />
        <CurriculumFree />
        <InstructorFree />
        <PricingFree />
      </main>
      <FooterFree />
    </div>
  );
}

