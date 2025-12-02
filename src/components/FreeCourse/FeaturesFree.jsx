import React from 'react';
import { Check, Star, User, BookOpen, Clock, Award } from 'lucide-react';

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

function PainPointCardFree({ title, description, image, icon }) {
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

function ProcessComparisonFree() {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
                {/* Old Process */}
                <div className="flex items-start gap-4 p-5 rounded-xl border border-secondary/40 bg-secondary/10">
                    <div className="flex-shrink-0 p-3 rounded-lg bg-secondary/20 text-secondary mt-0.5">
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
                    <div className="flex-shrink-0 p-3 rounded-lg bg-primary/20 text-primary mt-0.5">
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

                {/* Pain Points - Narrative Style */}
                <div className="max-w-4xl mx-auto mb-12">
                    <div className="prose prose-lg max-w-none">
                        {/* Pain Point 1 */}
                        <div className="mb-8 p-8 rounded-xl bg-gradient-to-br from-primary/5 to-bg-surface border border-primary/20">
                            <h3 className="text-2xl font-bold text-text-main mb-4 font-heading flex items-center gap-3">
                                <User className="h-6 w-6 text-primary" />
                                Sợ mất việc
                            </h3>
                            <p className="text-lg text-text-muted leading-relaxed font-sans">
                                AI đang thay đổi ngành kiến trúc. Những ai không biết dùng AI sẽ bị thay thế bởi những người biết.
                            </p>
                        </div>

                        {/* Pain Point 2 */}
                        <div className="mb-8 p-8 rounded-xl bg-gradient-to-br from-primary/5 to-bg-surface border border-primary/20">
                            <h3 className="text-2xl font-bold text-text-main mb-4 font-heading flex items-center gap-3">
                                <User className="h-6 w-6 text-primary" />
                                Sợ mất khách
                            </h3>
                            <p className="text-lg text-text-muted leading-relaxed font-sans">
                                Khách hàng đang chọn những kiến trúc sư có thể đưa ra phương án nhanh hơn, nhiều hơn. Bạn có đang thua cuộc?
                            </p>
                        </div>

                        {/* Pain Point 3 */}
                        <div className="mb-8 p-8 rounded-xl bg-gradient-to-br from-primary/5 to-bg-surface border border-primary/20">
                            <h3 className="text-2xl font-bold text-text-main mb-4 font-heading flex items-center gap-3">
                                <Award className="h-6 w-6 text-primary" />
                                Sợ tụt hậu
                            </h3>
                            <p className="text-lg text-text-muted leading-relaxed font-sans">
                                Đồng nghiệp đã sử dụng AI và làm việc nhanh gấp 10 lần. Còn bạn thì vẫn đang render xuyên đêm.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Comparison */}
                <ProcessComparisonFree />
            </div>
        </section>
    );
}

