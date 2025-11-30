import React, { useState } from 'react';
import { CurriculumModule } from './CurriculumModule';
import { Sparkles, Video, Clock, Award, Star, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

export function Curriculum() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const modules = [
        {
            title: "Module 1: Render ảnh ngoại thất",
            description: "Học cách render phối cảnh ngoại thất chuyên nghiệp với AI"
        },
        {
            title: "Module 2: Render ảnh nội thất",
            description: "Tạo hình ảnh nội thất ấn tượng trong vài phút"
        },
        {
            title: "Module 3: Các tính năng chỉnh sửa ảnh",
            description: "Nâng cao kỹ năng chỉnh sửa và tối ưu hình ảnh"
        },
        {
            title: "Module 4: Tạo các hình ảnh làm quảng cáo",
            description: "Thiết kế poster và hình ảnh marketing chuyên nghiệp"
        },
        {
            title: "Module 5: Tạo video làm quảng cáo",
            description: "Tạo video giúp bạn kiếm nhiều đơn hơn"
        },
        {
            title: "Module 6: Tạo APP với AI",
            description: "Deploy triển khai app cho doanh nghiệp của bạn"
        }
    ];

    const testimonials = [
        {
            id: 1,
            name: "Nguyễn Văn Hùng",
            initials: "NV",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
            role: "Kiến trúc sư",
            rating: 5,
            text: "Em thật sự biết ơn anh Hoàng đã tận tình chỉ dẫn trong suốt quá trình học. Nhờ anh, em đã thay đổi hoàn toàn cách tiếp cận công việc, từ nỗi khó khăn lên đến tự tưởng giải quyết vấn đề. Cảm ơn anh Hoàng rất nhiều đã truyền cảm hứng và động lực cho em!",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
            verified: true
        },
        {
            id: 2,
            name: "Trần Thị Bình",
            initials: "TT",
            avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
            role: "Nhà Thiết Kế Nội Thất",
            rating: 5,
            text: "Cảm ơn anh Hoàng đã chia sẻ những kiến thức quý giá về AI trong thiết kế. Nhờ anh, em đã mở mang tầm mắt và có thể áp dụng được vào công việc thực tế. Em rất trân trọng sự tận tâm và nhiệt tình của anh trong từng buổi học.",
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
            verified: true
        },
        {
            id: 3,
            name: "Lê Minh Cường",
            initials: "LM",
            avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
            role: "Quản Lý Dự Án Xây Dựng",
            rating: 5,
            text: "Em cảm ơn anh Hoàng đã giúp em hiểu rõ hơn về tiềm năng của AI trong quản lý dự án. Những kiến thức anh chia sẻ rất thực tế và dễ áp dụng, giúp team em tiết kiệm được nhiều thời gian và chi phí. Thật sự biết ơn anh!",
            image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
            verified: true
        }
    ];

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section id="curriculum" className="py-16 md:py-24 border-b border-border bg-bg-main">
            <div className="container mx-auto px-4 md:px-6">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
                        <Sparkles className="h-4 w-4 text-primary" />
                        <span className="text-xs font-bold uppercase tracking-wider text-primary">
                            Nội Dung Khóa Học
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-text-main mb-6 leading-tight max-w-4xl mx-auto">
                        Học Từ Video Có Sẵn & <span className="text-primary">Zoom Live</span> Hàng Tuần
                    </h2>
                </div>

                {/* Highlighted Value Proposition */}
                <div className="max-w-5xl mx-auto mb-16">
                    <div className="relative">
                        {/* Decorative corner */}
                        <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-primary/30 rounded-tl-2xl"></div>
                        <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-primary/30 rounded-br-2xl"></div>
                        
                        <div className="relative bg-gradient-to-br from-primary/10 via-bg-surface to-secondary/5 border-2 border-primary/20 rounded-2xl p-8 md:p-10 shadow-lg">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="flex-shrink-0 p-3 rounded-xl bg-primary/15 text-primary">
                                    <Sparkles className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-text-main font-heading mb-3">
                                        🎯 Cam Kết Của Khóa Học
                                    </h3>
                                    <p className="text-base md:text-lg text-text-main font-sans leading-relaxed">
                                        <span className="font-bold text-primary">Tất cả các giải pháp trên</span> được tôi trình bày trong khóa học này đã được tôi quay sẵn, trình bày rõ ràng, ngắn gọn, chi tiết. 
                                        Và <span className="font-bold text-accent">mỗi tuần zoom 1 buổi 2 tiếng</span> hỗ trợ các bạn và hướng dẫn kiến thức mới.
                                    </p>
                                </div>
                            </div>

                            {/* Features Grid */}
                            <div className="grid md:grid-cols-3 gap-4 mt-8">
                                <div className="flex items-center gap-3 p-4 bg-bg-surface/80 backdrop-blur rounded-xl border border-border">
                                    <Video className="h-5 w-5 text-primary flex-shrink-0" />
                                    <div>
                                        <div className="font-bold text-text-main text-sm">Video Học Sẵn</div>
                                        <div className="text-xs text-text-muted">Học bất cứ lúc nào</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-bg-surface/80 backdrop-blur rounded-xl border border-border">
                                    <Clock className="h-5 w-5 text-accent flex-shrink-0" />
                                    <div>
                                        <div className="font-bold text-text-main text-sm">Zoom Live 2h</div>
                                        <div className="text-xs text-text-muted">Mỗi tuần</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-bg-surface/80 backdrop-blur rounded-xl border border-border">
                                    <Award className="h-5 w-5 text-secondary flex-shrink-0" />
                                    <div>
                                        <div className="font-bold text-text-main text-sm">Hỗ Trợ Trực Tiếp</div>
                                        <div className="text-xs text-text-muted">Giải đáp thắc mắc</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modules Grid */}
                <div className="max-w-6xl mx-auto">
                    <h3 className="text-2xl md:text-3xl font-bold font-heading text-text-main mb-8 text-center">
                        6 Modules Chuyên Sâu
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {modules.map((module, index) => (
                            <CurriculumModule 
                                key={index} 
                                module={module.title}
                                description={module.description}
                                number={index + 1}
                            />
                        ))}
                    </div>

                    {/* Student Testimonials Section */}
                    <div className="mt-20">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 mb-6">
                                <Star className="h-4 w-4 text-accent fill-accent" />
                                <span className="text-xs font-bold uppercase tracking-wider text-accent">
                                    Phản Hồi Từ Học Viên
                                </span>
                            </div>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold font-heading text-text-main mb-4">
                                Học Viên Nói Gì Về Khóa Học?
                            </h3>
                            <p className="text-text-muted text-lg max-w-2xl mx-auto">
                                Hàng trăm học viên đã thay đổi cách làm việc và tăng thu nhập nhờ khóa học
                            </p>
                        </div>

                        {/* Testimonials Grid - Desktop: 3 columns, Mobile: Carousel */}
                        <div className="relative max-w-7xl mx-auto">
                            {/* Desktop: Grid of 3 cards */}
                            <div className="hidden lg:grid lg:grid-cols-3 gap-6">
                                {testimonials.map((testimonial) => (
                                    <div 
                                        key={testimonial.id}
                                        className="bg-bg-surface border-2 border-border rounded-2xl shadow-lg overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all hover:-translate-y-1"
                                    >
                                        {/* Header with Avatar and Name */}
                                        <div className="p-6 border-b border-border">
                                            <div className="flex items-center gap-3 mb-4">
                                                {/* Avatar */}
                                                <div className="relative">
                                                    <img 
                                                        src={testimonial.avatar} 
                                                        alt={testimonial.name}
                                                        className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                                                    />
                                                    {testimonial.verified && (
                                                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
                                                            <CheckCircle2 className="h-3 w-3 text-white" />
                                                        </div>
                                                    )}
                                                </div>
                                                
                                                {/* Name and Role */}
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="font-bold text-base text-text-main truncate">
                                                        {testimonial.name}
                                                    </h4>
                                                    <p className="text-xs text-text-muted truncate">
                                                        {testimonial.role}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Star Rating */}
                                            <div className="flex gap-1">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                                                ))}
                                            </div>
                                        </div>

                                        {/* Testimonial Text */}
                                        <div className="p-6">
                                            <p className="text-text-main leading-relaxed italic text-sm mb-4 line-clamp-6">
                                                "{testimonial.text}"
                                            </p>
                                            
                                            {/* Trust Badge */}
                                            <div className="flex items-center gap-2 text-xs text-text-muted mb-4">
                                                <CheckCircle2 className="h-3 w-3 text-green-500 flex-shrink-0" />
                                                <span>Học viên đã hoàn thành</span>
                                            </div>
                                        </div>

                                        {/* Project Image */}
                                        <div className="relative h-48">
                                            <img 
                                                src={testimonial.image} 
                                                alt={`Dự án của ${testimonial.name}`}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-text-main/30 to-transparent"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Mobile & Tablet: Carousel */}
                            <div className="lg:hidden">
                                {/* Navigation Buttons */}
                                <button 
                                    onClick={prevTestimonial}
                                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-3 bg-white rounded-full shadow-xl border-2 border-border hover:border-primary/40 hover:bg-primary/5 transition-all hover:scale-110 hidden sm:block"
                                    aria-label="Previous testimonial"
                                >
                                    <ChevronLeft className="h-6 w-6 text-text-main" />
                                </button>
                                
                                <button 
                                    onClick={nextTestimonial}
                                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-3 bg-white rounded-full shadow-xl border-2 border-border hover:border-primary/40 hover:bg-primary/5 transition-all hover:scale-110 hidden sm:block"
                                    aria-label="Next testimonial"
                                >
                                    <ChevronRight className="h-6 w-6 text-text-main" />
                                </button>

                                {/* Testimonial Cards Container */}
                                <div className="overflow-hidden px-4">
                                    <div 
                                        className="flex transition-transform duration-500 ease-in-out"
                                        style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                                    >
                                        {testimonials.map((testimonial) => (
                                            <div 
                                                key={testimonial.id}
                                                className="w-full flex-shrink-0 px-2"
                                            >
                                                <div className="bg-bg-surface border-2 border-border rounded-2xl shadow-lg overflow-hidden">
                                                    {/* Header with Avatar and Name */}
                                                    <div className="p-6 border-b border-border">
                                                        <div className="flex items-center gap-3 mb-4">
                                                            {/* Avatar */}
                                                            <div className="relative">
                                                                <img 
                                                                    src={testimonial.avatar} 
                                                                    alt={testimonial.name}
                                                                    className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                                                                />
                                                                {testimonial.verified && (
                                                                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
                                                                        <CheckCircle2 className="h-3 w-3 text-white" />
                                                                    </div>
                                                                )}
                                                            </div>
                                                            
                                                            {/* Name and Role */}
                                                            <div>
                                                                <h4 className="font-bold text-base text-text-main">
                                                                    {testimonial.name}
                                                                </h4>
                                                                <p className="text-sm text-text-muted">
                                                                    {testimonial.role}
                                                                </p>
                                                            </div>
                                                        </div>

                                                        {/* Star Rating */}
                                                        <div className="flex gap-1">
                                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                                <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Testimonial Text */}
                                                    <div className="p-6">
                                                        <p className="text-text-main leading-relaxed italic text-sm mb-4">
                                                            "{testimonial.text}"
                                                        </p>
                                                        
                                                        {/* Trust Badge */}
                                                        <div className="flex items-center gap-2 text-xs text-text-muted mb-4">
                                                            <CheckCircle2 className="h-3 w-3 text-green-500" />
                                                            <span>Học viên đã hoàn thành khóa học</span>
                                                        </div>
                                                    </div>

                                                    {/* Project Image */}
                                                    <div className="relative h-56">
                                                        <img 
                                                            src={testimonial.image} 
                                                            alt={`Dự án của ${testimonial.name}`}
                                                            className="w-full h-full object-cover"
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-text-main/30 to-transparent"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Dots Navigation */}
                                <div className="flex justify-center gap-2 mt-8">
                                    {testimonials.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentTestimonial(index)}
                                            className={`h-2.5 rounded-full transition-all ${
                                                index === currentTestimonial 
                                                    ? 'w-8 bg-primary' 
                                                    : 'w-2.5 bg-border hover:bg-primary/40'
                                            }`}
                                            aria-label={`Go to testimonial ${index + 1}`}
                                        />
                                    ))}
                                </div>

                                {/* Mobile Navigation Buttons */}
                                <div className="flex justify-center gap-4 mt-6 sm:hidden">
                                    <button 
                                        onClick={prevTestimonial}
                                        className="p-3 bg-white rounded-full shadow-lg border-2 border-border hover:border-primary/40 hover:bg-primary/5 transition-all"
                                        aria-label="Previous testimonial"
                                    >
                                        <ChevronLeft className="h-5 w-5 text-text-main" />
                                    </button>
                                    <button 
                                        onClick={nextTestimonial}
                                        className="p-3 bg-white rounded-full shadow-lg border-2 border-border hover:border-primary/40 hover:bg-primary/5 transition-all"
                                        aria-label="Next testimonial"
                                    >
                                        <ChevronRight className="h-5 w-5 text-text-main" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-12 text-center">
                        <div className="inline-block p-6 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl">
                            <p className="text-text-main font-sans text-lg mb-4">
                                <span className="font-bold text-primary">Kiến thức thực chiến</span>, áp dụng được ngay vào công việc 💼
                            </p>
                            <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-0.5">
                                <Sparkles className="h-5 w-5" />
                                Đăng ký ngay
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

