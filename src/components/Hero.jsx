import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import ImageSlider from './ImageSlider';

const slides = [
    {
        image: '/hero-image/biet thu co gia dinh.png',
        title: 'Biệt Thự Hiện Đại Có Gia Đình',
        subtitle: 'PHƯƠNG ÁN AI #01'
    },
    {
        image: '/hero-image/noi that 1.png',
        title: 'Phòng Khách Nội Thất Sang Trọng',
        subtitle: 'PHƯƠNG ÁN AI #02'
    },
    {
        image: '/hero-image/chen nguoi vao anh.png',
        title: 'Biệt Thự Nghỉ Dưỡng Ven Biển',
        subtitle: 'PHƯƠNG ÁN AI #03'
    },
    {
        image: '/hero-image/xoay goc biet thu.png',
        title: 'Biệt Thự Góc Nhìn Đa Chiều',
        subtitle: 'PHƯƠNG ÁN AI #04'
    }
];

export default function Hero() {
    return (
        <section className="relative overflow-hidden border-b border-border bg-bg-surface py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                    <div className="flex flex-col justify-center space-y-8">
                        <div className="space-y-6">
                            <div className="inline-flex items-center rounded-full border-2 border-primary/30 bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-2 text-sm font-bold text-primary font-sans shadow-lg backdrop-blur-sm">
                                <span className="flex h-2.5 w-2.5 rounded-full bg-primary mr-2 animate-pulse"></span>
                                🚀 Thành thạo kỹ năng AI Kiến Trúc Nội Thất
                            </div>
                            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/tight font-heading text-text-main leading-tight">

                                <span className="relative inline-block">
                                    Trở thành  <span className="relative z-10 text-primary">Master AI Kiến Trúc Nội Thất</span>
                                </span>
                                kỹ năng quan trọng nhất trong năm 2026
                            </h1>
                            <p className="max-w-[600px] text-text-main md:text-xl font-sans leading-relaxed">
                                Dù bạn chưa biết gì về AI hay làm kiến trúc nội thất cũng đều có thể làm và{' '}
                                <span className="font-bold text-primary">tạo ra các bản vẽ, render, visualization chuyên nghiệp</span>{' '}
                                ngay sau 1 tuần học
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 min-[400px]:flex-row">
                            <button
                                onClick={() => {
                                    const pricingSection = document.getElementById('pricing');
                                    pricingSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }}
                                className="group inline-flex h-14 items-center justify-center rounded-xl bg-gradient-to-r from-primary to-accent px-8 text-base font-bold text-white shadow-xl shadow-primary/40 transition-all hover:shadow-2xl hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary font-sans relative overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Đăng ký ngay <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </button>
                            <button className="inline-flex h-14 items-center justify-center rounded-xl border-2 border-primary/30 bg-bg-surface px-8 text-base font-bold text-text-main shadow-sm transition-all hover:bg-primary/5 hover:border-primary/50 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary font-sans">
                                Xem nội dung chi tiết
                            </button>
                        </div>

                        <div className="flex flex-col gap-3 text-base text-text-main font-sans">
                            <div className="flex items-center gap-3">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center">
                                    <CheckCircle2 className="h-4 w-4 text-primary" />
                                </div>
                                <span className="font-medium">Mỗi ngày 1 tiếng trở thành <span className="font-bold text-primary">Master AI Kiến Trúc Nội Thất trong 5 ngày</span></span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/15 flex items-center justify-center">
                                    <CheckCircle2 className="h-4 w-4 text-accent" />
                                </div>
                                <span className="font-medium">Học trực tiếp cùng <span className="font-bold text-accent">chuyên gia Tony Hoang, cùng sự hỗ trợ của các trợ lý</span></span>
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto lg:mr-0 relative w-full max-w-md lg:max-w-full">
                        <ImageSlider slides={slides} />

                        {/* Decorative elements - adjusted for slider */}
                        <div className="absolute -bottom-6 -left-6 -z-10 h-full w-full rounded-2xl border border-border bg-bg-muted"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
