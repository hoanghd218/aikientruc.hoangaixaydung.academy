import React, { useState } from 'react';
import { Sparkles, Video, Clock, Award, BookOpen, CheckCircle2, Star, ChevronLeft, ChevronRight } from 'lucide-react';

function CurriculumModuleFree({ module, description, number }) {
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

function CurriculumTestimonialsFree() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: "Nguyễn Văn Hùng",
            initials: "NV",
            avatar: "/hoc vien/nguyen van hung.png",
            role: "Kiến trúc sư",
            rating: 5,
            text: "Dù chỉ là 2 ngày miễn phí thôi nhưng em đã được mở mang tầm mắt mình. Cảm ơn anh Tony Hoàng rất nhiều đã giúp em có tư duy mới, tìm ra con đường mới.",
            image: "/hoc vien/nguyen van hung.png",
            verified: true
        },
        {
            id: 2,
            name: "Trần Thị Bình",
            initials: "TT",
            avatar: "/hoc vien/tran thi binh.png",
            role: "Nhà Thiết Kế Nội Thất",
            rating: 5,
            text: "Khóa học này thực sự giúp tôi tiết kiệm rất nhiều thời gian trong công việc hàng ngày. Những công cụ AI mà anh Tony dạy đã giúp tôi tăng năng suất lên gấp 3 lần. Quá tuyệt vời!",
            image: "/hoc vien/tran thi binh.png",
            verified: true
        },
        {
            id: 3,
            name: "Lê Minh Cường",
            initials: "LM",
            avatar: "/hoc vien/le quang cuong.png",
            role: "Quản Lý Dự Án Xây Dựng",
            rating: 5,
            text: "Em rất ấn tượng với cách anh Tony hướng dẫn chi tiết từng bước. Các template và prompt có sẵn giúp em áp dụng ngay mà không cần phải tìm hiểu quá nhiều. Đây là khóa học thực tiễn nhất mà em từng tham gia!",
            image: "/hoc vien/le quang cuong.png",
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
        <div className="mt-20">
            {/* Header */}
            <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 mb-6">
                    <Star className="h-4 w-4 text-accent fill-accent" />
                    <span className="text-xs font-bold uppercase tracking-wider text-accent">
                        Bạn muốn xem các bạn khoá trước nói gì về 2 buổi miễn phí này không?
                    </span>
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold font-heading text-text-main mb-4">
                    Cùng xem feedback của các bạn ý nhé
                </h3>
                <p className="text-text-muted text-lg max-w-2xl mx-auto">
                    Tôi đã giúp hàng trăm học viên đã thay đổi cách làm việc và tăng thu nhập nhờ khóa học này dù chỉ là miễn phí
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
                                        {/* <div className="relative h-56">
                                            <img
                                                src={testimonial.image}
                                                alt={`Dự án của ${testimonial.name}`}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-text-main/30 to-transparent"></div>
                                        </div> */}
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
                                className={`h-2.5 rounded-full transition-all ${index === currentTestimonial
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
    );
}

export function CurriculumFree() {
    // CHỈ 2 MODULES ĐẦU TIÊN - MIỄN PHÍ
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
            title: "Module 3: Tạo video từ hình ảnh",
            description: "Biến hình ảnh kiến trúc thành video động chuyên nghiệp"
        },
        {
            title: "Module 4: Tạo app AI riêng",
            description: "Xây dựng ứng dụng AI chuyên dụng cho kiến trúc của bạn"
        }
    ];

    return (
        <section id="curriculum" className="py-16 md:py-24 border-b border-border bg-bg-main">
            <div className="container mx-auto px-4 md:px-6">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
                        <Sparkles className="h-4 w-4 text-primary" />
                        <span className="text-xs font-bold uppercase tracking-wider text-primary">
                            Nội Dung 2 Buổi Miễn Phí
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-text-main mb-6 leading-tight max-w-4xl mx-auto">
                        Học Thử <span className="text-primary">2 Module Đầu Tiên</span> Hoàn Toàn Miễn Phí
                    </h2>
                    <p className="text-text-muted text-lg max-w-2xl mx-auto">
                        Trải nghiệm sức mạnh của AI trong kiến trúc mà không mất bất kỳ chi phí nào
                    </p>
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
                                        🎯 Bạn có dám bỏ ra 2 ngày cùng tôi Tony Hoang chinh phục AI kiến trúc nội thất không?
                                    </h3>
                                    <p className="text-base md:text-lg text-text-main font-sans leading-relaxed">
                                        <span className="font-bold text-primary">Trong 2 buổi Zoom này</span>, bạn sẽ <span className="font-bold text-primary">làm được ngay</span> cách 
                                        <span className="font-semibold"> render ảnh ngoại thất, nội thất</span> chuyên nghiệp, cách <span className="font-semibold">chỉnh sửa ảnh</span> bằng AI dễ dàng, 
                                        cách <span className="font-semibold">tạo video</span> từ hình ảnh kiến trúc, và thậm chí cách <span className="font-semibold">tạo app AI riêng</span> cho mình.
                                    </p>
                                </div>
                            </div>

                            {/* Ready-to-use Resources Highlight */}
                            <div className="bg-accent/10 border-2 border-accent/30 rounded-xl p-6 mb-6">
                                <div className="flex items-start gap-3">
                                    <Award className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-text-main text-base mb-2">
                                            Bạn sợ tốn thời gian ư?
                                        </h4>
                                        <p className="text-text-main text-sm leading-relaxed">
                                            Tôi đã chuẩn bị sẵn <span className="font-bold text-accent">toàn bộ prompts mẫu, template mẫu, và APP AI</span> mà 
                                            bạn <span className="font-semibold">chỉ việc sử dụng ngay, không hề tốn công sức tìm hiểu</span>!
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Features Grid */}
                            <div className="grid md:grid-cols-3 gap-4 mt-8">
                                <div className="flex items-center gap-3 p-4 bg-bg-surface/80 backdrop-blur rounded-xl border border-border">
                                    <Video className="h-5 w-5 text-primary flex-shrink-0" />
                                    <div>
                                        <div className="font-bold text-text-main text-sm">Học Trực Tiếp 2 Buổi Zoom</div>
                                        <div className="text-xs text-text-muted">20h-22h</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-bg-surface/80 backdrop-blur rounded-xl border border-border">
                                    <Clock className="h-5 w-5 text-accent flex-shrink-0" />
                                    <div>
                                        <div className="font-bold text-text-main text-sm">Chỉ việc sài, copy paste rồi dùng</div>
                                        <div className="text-xs text-text-muted">Áp dụng tức thì</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-bg-surface/80 backdrop-blur rounded-xl border border-border">
                                    <Award className="h-5 w-5 text-secondary flex-shrink-0" />
                                    <div>
                                        <div className="font-bold text-text-main text-sm">Công cụ có sẵn, chỉ việc sử dụng</div>
                                        <div className="text-xs text-text-muted">Chỉ việc dùng</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modules Grid - CHỈ 2 MODULES */}
                <div className="max-w-6xl mx-auto">
                    <h3 className="text-2xl md:text-3xl font-bold font-heading text-text-main mb-8 text-center">
                        2 Modules Miễn Phí
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {modules.map((module, index) => (
                            <CurriculumModuleFree 
                                key={index} 
                                module={module.title}
                                description={module.description}
                                number={index + 1}
                            />
                        ))}
                    </div>

                    {/* Student Testimonials Section */}
                    <CurriculumTestimonialsFree />

                    {/* Bottom CTA */}
                    <div className="mt-12 text-center">
                        <div className="inline-block p-6 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl">
                            <p className="text-text-main font-sans text-lg mb-4">
                                <span className="font-bold text-primary">Kiến thức thực chiến</span>, áp dụng được ngay vào công việc 💼
                            </p>
                            <button 
                                onClick={() => {
                                    const pricingSection = document.getElementById('pricing');
                                    pricingSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-0.5"
                            >
                                <Sparkles className="h-5 w-5" />
                                Đăng ký miễn phí ngay
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

