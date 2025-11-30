import React from 'react';
import { InstructorHeader } from './InstructorHeader';
import { InstructorProfileImage } from './InstructorProfileImage';
import { InstructorContent } from './InstructorContent';

export function Instructor() {
    return (
        <section id="instructor" className="relative py-20 md:py-32 border-b border-border overflow-hidden bg-bg-surface">
            {/* Gradient Background with Claude colors */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-bg-main/50 to-secondary/5"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/8 via-transparent to-transparent"></div>

            {/* Decorative Elements */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Section Header */}
                <InstructorHeader />

                {/* Main Content */}
                <div className="flex flex-col lg:flex-row gap-12 items-center max-w-6xl mx-auto">
                    <InstructorProfileImage />
                    <InstructorContent />
                </div>
            </div>
        </section>
    );
}

