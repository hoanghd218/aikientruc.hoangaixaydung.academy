import React from 'react';
import { CurriculumModule } from './CurriculumModule';
import { CurriculumTestimonials } from './CurriculumTestimonials';
import { ZoomGalleryKhoaChinhThuc } from '../ZoomGalleryKhoaChinhThuc';
import { Sparkles, Video, Clock, Award } from 'lucide-react';

export function Curriculum() {
    const handleScrollToPricing = () => {
        const pricingSection = document.getElementById('pricing');
        if (pricingSection) {
            pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const modules = [
        {
            title: "Module 1: Render ảnh ngoại thất",
            description: [
                "Học cách render phối cảnh ngoại thất chuyên nghiệp với AI",
                "Render ảnh biệt thự ngoại thất",
                "Render phối cảnh công trình tổng thể",
                "Tối ưu hóa chất lượng hình ảnh render"
            ],
            outcomes: [
                {
                    title: "Render ảnh biệt thự ngoại thất",
                    description: "Tạo hình ảnh render chuyên nghiệp cho biệt thự",
                    media: {
                        type: "image",
                        url: "/hero-image/biet thu.png"
                    }
                },
                {
                    title: "Render phối cảnh công trình",
                    description: "Tạo phối cảnh tổng thể công trình",
                    media: {
                        type: "image",
                        url: "/hero-image/anh-bat-dong-san.png"
                    }
                }
            ]
        },
        {
            title: "Module 2: Render ảnh nội thất",
            description: [
                "Tạo hình ảnh nội thất ấn tượng trong vài phút",
                "Render không gian nội thất chân thực",
                "Thiết kế nội thất với AI",
                "Ánh sáng và bố cục trong render nội thất"
            ],
            outcomes: [
                {
                    title: "Render không gian nội thất",
                    description: "Tạo hình ảnh nội thất chân thực",
                    media: {
                        type: "image",
                        url: "/hero-image/noi that 1.png"
                    }
                },
                {
                    title: "Thiết kế nội thất với AI",
                    description: "Thiết kế và render nội thất nhanh chóng",
                    media: {
                        type: "image",
                        url: "/hero-image/biet thu co gia dinh.png"
                    }
                }
            ]
        },
        {
            title: "Module 3: Các tính năng chỉnh sửa ảnh",
            description: [
                "Nâng cao kỹ năng chỉnh sửa và tối ưu hình ảnh",
                "Chuyển đổi CAD sang ảnh render chân thực",
                "Chuyển đổi ngày sang đêm",
                "Thêm người vào ảnh một cách tự nhiên",
                "Các kỹ thuật chỉnh sửa nâng cao khác"
            ],
            outcomes: [
                {
                    title: "Chuyển đổi CAD sang ảnh",
                    description: "Biến bản vẽ CAD thành ảnh render chân thực",
                    media: {
                        type: "compare",
                        beforeImage: "/solutions/cad to photo before.jpg",
                        afterImage: "/solutions/cad to photo after.jpg",
                        beforeLabel: "CAD",
                        afterLabel: "Render"
                    }
                },
                {
                    title: "Chuyển đổi ngày sang đêm",
                    description: "Tạo hiệu ứng đêm cho ảnh ban ngày",
                    media: {
                        type: "compare",
                        beforeImage: "/solutions/day to night before.jpg",
                        afterImage: "/solutions/day to night after.png",
                        beforeLabel: "Ban ngày",
                        afterLabel: "Ban đêm"
                    }
                },
                {
                    title: "Thêm người vào ảnh",
                    description: "Chèn người vào ảnh render một cách tự nhiên",
                    media: {
                        type: "compare",
                        beforeImage: "/solutions/them nguoi vao anh before.png",
                        afterImage: "/solutions/them nguoi vao anh after.png",
                        beforeLabel: "Trước",
                        afterLabel: "Sau"
                    }
                }
            ]
        },
        {
            title: "Module 4: Tạo các hình ảnh làm quảng cáo",
            description: [
                "Thiết kế poster và hình ảnh marketing chuyên nghiệp",
                "Tạo poster quảng cáo với AI",
                "Thiết kế hình ảnh quảng cáo bất động sản",
                "Tối ưu hình ảnh cho các kênh marketing",
                "Best practices trong thiết kế hình ảnh quảng cáo"
            ],
            outcomes: [
                {
                    title: "Tạo poster quảng cáo",
                    description: "Thiết kế poster marketing chuyên nghiệp",
                    media: {
                        type: "image",
                        url: "/hero-image/anh-nha-thau-poster.png"
                    }
                },
                {
                    title: "Tạo hình ảnh quảng cáo BĐS",
                    description: "Thiết kế hình ảnh marketing bất động sản",
                    media: {
                        type: "image",
                        url: "/hero-image/anh-bat-dong-san.png"
                    }
                }
            ]
        },
        {
            title: "Module 5: Tạo video làm quảng cáo",
            description: [
                "Tạo video giúp bạn kiếm nhiều đơn hơn",
                "Sản xuất video marketing chuyên nghiệp",
                "Tạo video demo sản phẩm/dự án",
                "Kỹ thuật chỉnh sửa và tối ưu video",
                "Xuất bản và phân phối video"
            ],
            outcomes: [
                {
                    title: "Tạo video quảng cáo",
                    description: "Sản xuất video marketing chuyên nghiệp",
                    media: {
                        type: "video",
                        url: "https://www.youtube.com/watch?v=Mqn-XG_UYdc"
                    }
                },
                {
                    title: "Video demo sản phẩm",
                    description: "Tạo video giới thiệu sản phẩm/dự án",
                    media: {
                        type: "gif",
                        url: "/solutions/day to night after.png"
                    }
                }
            ]
        },
        {
            title: "Module 6: Tạo APP với AI",
            description: [
                "Deploy triển khai app cho doanh nghiệp của bạn",
                "Xây dựng ứng dụng với AI",
                "Tích hợp AI vào workflow công việc",
                "Deploy ứng dụng lên production",
                "Bảo trì và cập nhật ứng dụng"
            ],
            outcomes: [
                {
                    title: "Xây dựng ứng dụng với AI",
                    description: "Tạo app cho doanh nghiệp của bạn",
                    media: {
                        type: "image",
                        url: "/rendering-interface.png"
                    }
                },
                {
                    title: "Deploy ứng dụng",
                    description: "Triển khai app lên production",
                    media: {
                        type: "image",
                        url: "/rendering-interface.png"
                    }
                }
            ]
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
                    <div className="grid grid-cols-1 gap-6">
                        {modules.map((module, index) => (
                            <CurriculumModule
                                key={index}
                                module={module.title}
                                description={module.description}
                                number={index + 1}
                                outcomes={module.outcomes}
                            />
                        ))}
                    </div>

                    <CurriculumTestimonials />

                    <ZoomGalleryKhoaChinhThuc />

                    {/* Bottom CTA */}
                    <div className="mt-12 text-center">
                        <div className="inline-block p-6 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl">
                            <p className="text-text-main font-sans text-lg mb-4">
                                <span className="font-bold text-primary">Kiến thức thực chiến</span>, áp dụng được ngay vào công việc 💼
                            </p>
                            <button
                                onClick={handleScrollToPricing}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-0.5"
                            >
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

