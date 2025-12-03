import React from 'react';
import { Check, Star, User, BookOpen, Clock, Award } from 'lucide-react';
import { FeaturesHeader } from './FeaturesHeader';
import { ProcessComparison } from './ProcessComparison';

export function Features() {
    const painPoints = [
        {
            title: "Sợ mất việc",
            description: "AI đang thay đổi ngành kiến trúc. Những ai không biết dùng AI sẽ bị thay thế bởi những người biết.",
            icon: <User className="h-6 w-6" />
        },
        {
            title: "Sợ mất khách",
            description: "Khách hàng đang chọn những kiến trúc sư có thể đưa ra phương án nhanh hơn, nhiều hơn. Bạn có đang thua cuộc?",
            icon: <User className="h-6 w-6" />
        },
        {
            title: "Sợ tụt hậu",
            description: "Đồng nghiệp đã sử dụng AI và làm việc nhanh gấp 10 lần. Còn bạn thì vẫn đang render xuyên đêm.",
            icon: <Award className="h-6 w-6" />
        }
    ];

    return (
        <section id="features" className="py-16 md:py-24 border-b border-border bg-bg-main">
            <div className="container mx-auto px-4 md:px-6">
                <FeaturesHeader />

                {/* Pain Points - Narrative Style */}
                <div className="max-w-4xl mx-auto mb-12">
                    <div className="prose prose-lg max-w-none">
                        {painPoints.map((point, index) => (
                            <div key={index} className="mb-8 p-8 rounded-xl bg-gradient-to-br from-primary/5 to-bg-surface border border-primary/20">
                                <h3 className="text-2xl font-bold text-text-main mb-4 font-heading flex items-center gap-3">
                                    <span className="text-primary">{point.icon}</span>
                                    {point.title}
                                </h3>
                                <p className="text-lg text-text-muted leading-relaxed font-sans">
                                    {point.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Comparison */}
                <ProcessComparison />
            </div>
        </section>
    );
}

