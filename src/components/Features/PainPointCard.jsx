import React from 'react';

export function PainPointCard({ title, description, image, icon }) {
    return (
        <div className="group relative overflow-hidden rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-bg-surface hover:border-primary/40 hover:shadow-xl transition-all duration-300">
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-surface via-bg-surface/60 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-6 relative -mt-8">
                <div className="flex items-center gap-3 mb-3">
                    <div className="p-3 rounded-lg bg-primary/15 text-primary border border-primary/30">
                        {icon}
                    </div>
                    <h3 className="text-xl font-bold text-text-main font-heading">
                        {title}
                    </h3>
                </div>
                <p className="text-text-muted text-sm font-sans leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
}

