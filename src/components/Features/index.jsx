import React from 'react';
import { Check, Star, User, BookOpen, Clock, Award } from 'lucide-react';
import { FeaturesHeader } from './FeaturesHeader';
import { PainPointCard } from './PainPointCard';
import { ProcessComparison } from './ProcessComparison';

export function Features() {
    const painPoints = [
        {
            title: "Sợ mất việc",
            description: "AI đang thay đổi ngành kiến trúc. Những ai không biết dùng AI sẽ bị thay thế bởi những người biết.",
            image: "/fear-job-loss.png",
            icon: <User className="h-6 w-6" />
        },
        {
            title: "Sợ mất khách",
            description: "Khách hàng đang chọn những kiến trúc sư có thể đưa ra phương án nhanh hơn, nhiều hơn. Bạn có đang thua cuộc?",
            image: "/fear-customer-loss.png",
            icon: <User className="h-6 w-6" />
        },
        {
            title: "Sợ tụt hậu",
            description: "Đồng nghiệp đã sử dụng AI và làm việc nhanh gấp 10 lần. Còn bạn thì vẫn đang render xuyên đêm.",
            image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: <Award className="h-6 w-6" />
        }
    ];

    return (
        <section id="features" className="py-16 md:py-24 border-b border-border bg-bg-main">
            <div className="container mx-auto px-4 md:px-6">
                <FeaturesHeader />

                {/* Pain Points - Large Cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {painPoints.map((point, index) => (
                        <PainPointCard
                            key={index}
                            title={point.title}
                            description={point.description}
                            image={point.image}
                            icon={point.icon}
                        />
                    ))}
                </div>

                {/* Bottom Comparison */}
                <ProcessComparison />
            </div>
        </section>
    );
}

