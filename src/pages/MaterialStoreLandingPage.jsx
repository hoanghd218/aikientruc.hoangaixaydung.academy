import React from 'react';
import HeaderMaterialStore from '../components/MaterialStore/HeaderMaterialStore';
import HeroMaterialStore from '../components/MaterialStore/HeroMaterialStore';
import SolutionMaterialStore from '../components/MaterialStore/SolutionMaterialStore';
import FeaturesMaterialStore from '../components/MaterialStore/FeaturesMaterialStore';
import PricingMaterialStore from '../components/MaterialStore/PricingMaterialStore';
import FooterMaterialStore from '../components/MaterialStore/FooterMaterialStore';

export default function MaterialStoreLandingPage() {
    return (
        <div className="min-h-screen bg-bg-main font-sans text-text-main selection:bg-primary/20">
            <HeaderMaterialStore />
            <main>
                <HeroMaterialStore />
                <SolutionMaterialStore />
                <FeaturesMaterialStore />
                <PricingMaterialStore />
            </main>
            <FooterMaterialStore />
        </div>
    );
}
