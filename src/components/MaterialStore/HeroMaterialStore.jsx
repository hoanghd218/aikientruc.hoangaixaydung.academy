import React from 'react';
import { ArrowRight, CheckCircle2, Store, TrendingUp, Users } from 'lucide-react';

export default function HeroMaterialStore() {
    const handleScrollToPricing = () => {
        const pricingSection = document.getElementById('pricing');
        pricingSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <section className="relative overflow-hidden border-b border-border bg-bg-surface py-12 md:py-24 lg:py-32">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                    <div className="flex flex-col justify-center space-y-8">
                        <div className="space-y-6">
                            <div className="inline-flex items-center rounded-full border-2 border-primary/30 bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-2 text-sm font-bold text-primary font-sans shadow-lg backdrop-blur-sm">
                                <Store className="h-4 w-4 mr-2" />
                                🏪 Dành riêng cho Chủ Cửa Hàng Vật Liệu Xây Dựng
                            </div>
                            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/tight font-heading text-text-main leading-tight">
                                Tăng{' '}
                                <span className="relative inline-block">
                                    <span className="relative z-10 text-primary">300% Doanh Số</span>
                                    <span className="absolute bottom-1 left-0 right-0 h-3 bg-primary/20 -rotate-1"></span>
                                </span>
                                {' '}Nhờ Khách Hàng Nhìn Thấy Gạch, Ngói Trong Không Gian Thực
                            </h1>
                            <p className="max-w-[600px] text-text-main md:text-xl font-sans leading-relaxed">
                                Khách hàng đắn đo không dám mua vì không hình dung được sản phẩm?
                                <span className="font-bold text-primary"> Công nghệ AI giúp họ nhìn thấy gạch, ngói của bạn trong căn nhà thật</span>
                                {' '}— chốt đơn nhanh hơn, ít trả hàng hơn.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 sm:flex-row">
                            <button
                                onClick={handleScrollToPricing}
                                className="group inline-flex h-auto min-h-[56px] items-center justify-center rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-4 text-base font-bold text-white shadow-xl shadow-primary/40 transition-all hover:shadow-2xl hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary font-sans relative overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-2 text-center">
                                    Đăng Ký Nhận Demo Miễn Phí <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform shrink-0" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </button>
                        </div>

                        <div className="flex flex-col gap-3 text-base text-text-main font-sans">
                            <div className="flex items-center gap-3">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center">
                                    <CheckCircle2 className="h-4 w-4 text-primary" />
                                </div>
                                <span className="font-medium">
                                    Khách hàng <span className="font-bold text-primary">xem trước gạch/ngói trong căn nhà thật</span> trước khi mua
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/15 flex items-center justify-center">
                                    <CheckCircle2 className="h-4 w-4 text-accent" />
                                </div>
                                <span className="font-medium">
                                    <span className="font-bold text-accent">Giảm 80% tình trạng trả hàng</span> vì khách không hài lòng
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center">
                                    <CheckCircle2 className="h-4 w-4 text-primary" />
                                </div>
                                <span className="font-medium">
                                    <span className="font-bold text-primary">Tạo ấn tượng chuyên nghiệp</span> hơn đối thủ cạnh tranh
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Visual showcase */}
                    <div className="mx-auto lg:mr-0 relative w-full max-w-md lg:max-w-full">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] w-full z-10">
                            <img
                                src="/solutions/site to finish after.jpg"
                                alt="Visualization Demo"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-4 right-4 px-4 py-2 bg-black/60 backdrop-blur-md text-white text-sm font-bold rounded-full border border-white/20">
                                ✨ Trước & Sau khi dùng AI
                            </div>
                        </div>

                        {/* Stats cards */}
                        <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-4 border border-border z-20">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center">
                                    <TrendingUp className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-primary">+300%</div>
                                    <div className="text-xs text-text-muted">Tăng doanh số</div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-4 border border-border z-20">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center">
                                    <Users className="h-5 w-5 text-accent" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-accent">500+</div>
                                    <div className="text-xs text-text-muted">Cửa hàng tin dùng</div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative element */}
                        <div className="absolute -bottom-6 -left-6 -z-10 h-full w-full rounded-2xl border border-border bg-bg-muted"></div>
                    </div>
                </div>
            </div>

            {/* Floating Button for Mobile */}
            <button
                onClick={handleScrollToPricing}
                className="md:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 group inline-flex h-14 items-center justify-center rounded-xl bg-gradient-to-r from-primary to-accent px-8 text-base font-bold text-white shadow-2xl shadow-primary/50 transition-all hover:shadow-3xl hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary font-sans overflow-hidden"
            >
                <span className="relative z-10 flex items-center gap-2">
                    Đăng ký ngay <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
        </section>
    );
}
