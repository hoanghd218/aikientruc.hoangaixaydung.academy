import React from 'react';
import { Star, User, Clock, Award } from 'lucide-react';

// Pain point data
const PAIN_POINTS = [
    {
        icon: User,
        title: 'Sợ mất việc',
        description: 'AI đang thay đổi ngành kiến trúc. Những ai không biết dùng AI sẽ bị thay thế bởi những người biết.'
    },
    {
        icon: User,
        title: 'Sợ mất khách',
        description: 'Khách hàng đang chọn những kiến trúc sư có thể đưa ra phương án nhanh hơn, nhiều hơn. Bạn có đang thua cuộc?'
    },
    {
        icon: Award,
        title: 'Sợ tụt hậu',
        description: 'Đồng nghiệp đã sử dụng AI và làm việc nhanh gấp 10 lần. Còn bạn thì vẫn đang render xuyên đêm.'
    }
];

function FeaturesHeaderFree() {
    return (
        <div className="text-center mb-12 max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    Bạn có đang gặp phải các nỗi đau này
                </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-text-main mb-6 leading-tight">
                Kỷ nguyên <span className="line-through decoration-primary decoration-2">"tay to sài phần mềm cả ngày"</span> đã kết thúc rồi bạn ạ.
            </h2>

            {/* Description */}
            <p className="text-text-muted text-lg md:text-xl font-sans leading-relaxed">
                Bạn có đang mất hàng giờ đồng hồ để dựng hình, render, đổi thử các phương án? <br />
                Trong khi bạn đang làm, đối thủ dùng AI – đã giúp xong <span className="font-bold text-text-main">3 phương án demo</span> và ký hợp đồng.
            </p>
        </div>
    );
}

function PainPointCard({ icon: Icon, title, description }) {
    return (
        <div className="p-8 rounded-xl bg-gradient-to-br from-primary/5 to-bg-surface border border-primary/20 hover:border-primary/30 transition-colors">
            <h3 className="text-2xl font-bold text-text-main mb-4 font-heading flex items-center gap-3">
                <Icon className="h-6 w-6 text-primary flex-shrink-0" />
                {title}
            </h3>
            <p className="text-lg text-text-muted leading-relaxed font-sans">
                {description}
            </p>
        </div>
    );
}

function ProcessComparisonFree() {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
                {/* Old Process */}
                <div className="flex items-start gap-4 p-5 rounded-xl border border-secondary/40 bg-secondary/10">
                    <div className="flex-shrink-0 p-3 rounded-lg bg-secondary/20 text-secondary">
                        <Clock className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-text-main mb-2 font-heading">Quy trình Cũ</h3>
                        <p className="text-sm text-text-muted font-sans">
                            3-4 ngày/phương án. Sửa đổi lại kéo dài, khách hàng lo lắng về chờ đợi. Mất khách vì chậm.
                        </p>
                    </div>
                </div>

                {/* New AI Process */}
                <div className="flex items-start gap-4 p-5 rounded-xl border border-primary/40 bg-primary/10">
                    <div className="flex-shrink-0 p-3 rounded-lg bg-primary/20 text-primary">
                        <Star className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-text-main mb-2 font-heading">Quy trình AI Architect</h3>
                        <p className="text-sm text-text-main font-sans">
                            <span className="font-bold">30 phút/3-5 phương án.</span> Sửa trực tiếp lập tức. Chốt deal nóng. Khách hàng ấn tượng.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function FeaturesFree() {
    return (
        <section id="features" className="py-16 md:py-24 border-b border-border bg-bg-main">
            <div className="container mx-auto px-4 md:px-6">
                <FeaturesHeaderFree />

                {/* Pain Points */}
                <div className="max-w-4xl mx-auto mb-12 space-y-6">
                    {PAIN_POINTS.map((point, index) => (
                        <PainPointCard key={index} {...point} />
                    ))}
                </div>

                {/* Process Comparison */}
                <ProcessComparisonFree />
            </div>
        </section>
    );
}

