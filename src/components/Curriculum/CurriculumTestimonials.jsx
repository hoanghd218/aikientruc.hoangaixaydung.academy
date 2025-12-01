import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

export function CurriculumTestimonials() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: "Nguyễn Văn Hùng",
            initials: "NV",
            avatar: "/hoc vien/nguyen van hung.png",
            role: "Kiến trúc sư",
            rating: 5,
            text: "Em thật sự biết ơn @hoc vien đã tận tình chỉ dẫn trong suốt quá trình học. Nhờ @hoc vien, em đã thay đổi hoàn toàn cách tiếp cận công việc, từ nỗi khó khăn lên đến tự tưởng giải quyết vấn đề. Cảm ơn @hoc vien rất nhiều đã truyền cảm hứng và động lực cho em!",
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
            text: "Cảm ơn @hoc vien đã chia sẻ những kiến thức quý giá về AI trong thiết kế. Nhờ @hoc vien, em đã mở mang tầm mắt và có thể áp dụng được vào công việc thực tế. Em rất trân trọng sự tận tâm và nhiệt tình của @hoc vien trong từng buổi học.",
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
            text: "Em cảm ơn @hoc vien đã giúp em hiểu rõ hơn về tiềm năng của AI trong quản lý dự án. Những kiến thức @hoc vien chia sẻ rất thực tế và dễ áp dụng, giúp team em tiết kiệm được nhiều thời gian và chi phí. Thật sự biết ơn @hoc vien!",
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

