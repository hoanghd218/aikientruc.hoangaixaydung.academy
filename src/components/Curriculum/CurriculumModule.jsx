import React from 'react';
import { BookOpen, CheckCircle2 } from 'lucide-react';

export function CurriculumModule({ module, description, number }) {
    return (
        <div className="group relative flex items-start gap-4 p-6 border-2 border-border rounded-xl bg-bg-surface hover:border-primary/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            {/* Module Number Badge */}
            <div className="flex-shrink-0">
                <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border border-primary/30 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-lg font-bold text-primary font-heading">{number}</span>
                    </div>
                    {/* Check icon overlay on hover */}
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <CheckCircle2 className="h-3 w-3 text-white" />
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
                <div className="flex items-start gap-2 mb-2">
                    <BookOpen className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <h4 className="font-bold font-heading text-text-main text-lg leading-tight">
                        {module}
                    </h4>
                </div>
                {description && (
                    <p className="text-sm text-text-muted font-sans leading-relaxed ml-7">
                        {description}
                    </p>
                )}
            </div>

            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/5 to-transparent rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
    );
}

