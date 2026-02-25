import React from 'react';
import { Users, Award, ArrowRight, Play, ExternalLink } from 'lucide-react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

// Zoom classroom images
const ZOOM_IMAGES = [
    { id: 1, src: '/zoom/bimspeed-ai-kientruc-zoom1.png', alt: 'Code được ngay cái APP trong lúc học' },
    { id: 2, src: '/zoom/zoom 2.png', alt: 'Code được app ngay' },
    { id: 3, src: '/zoom/zoom 3.png', alt: 'Kết quả ngay trong zoom' },
    { id: 4, src: '/zoom/zoom 4.png', alt: 'Kết quả ngay trong zoom' },
    { id: 5, src: '/zoom/zoom 5.png', alt: 'Kết quả ngay trong zoom' },
    { id: 6, src: '/zoom/zoom 6.png', alt: 'Kết quả ngay trong zoom' },
    { id: 7, src: '/zoom/zoom 7.png', alt: 'Kết quả ngay trong zoom' },
    { id: 8, src: '/zoom/zoom 8.png', alt: 'Kết quả ngay trong zoom' },
    { id: 9, src: '/zoom/zoom 9.png', alt: 'Kết quả ngay trong zoom' },
    { id: 10, src: '/zoom/zoom 10.png', alt: 'Kết quả ngay trong zoom' },
    { id: 11, src: '/zoom/zoom 11.png', alt: 'Kết quả ngay trong zoom' },
    { id: 12, src: '/zoom/zoom 12.png', alt: 'Kết quả ngay trong zoom' },
    { id: 14, src: '/zoom/zoom 14.png', alt: 'Kết quả ngay trong zoom' },
    { id: 17, src: '/zoom/zoom 17.png', alt: 'Kết quả ngay trong zoom' },
    { id: 18, src: '/zoom/zoom 18.png', alt: 'Kết quả ngay trong zoom' },
    { id: 19, src: '/zoom/zoom 19.png', alt: 'Kết quả ngay trong zoom' },
    { id: 20, src: '/zoom/zoom 20.png', alt: 'Kết quả ngay trong zoom' },
];


// Student videos from YouTube
const STUDENT_VIDEOS = [
    { id: 'dBligDbuaW4', title: 'Video học viên 1' },
    { id: '8o8C-xYLI38', title: 'Video học viên 2' },
    { id: 'FEwIrFwswxM', title: 'Video học viên 3' },
    { id: 'Gy5YMEPo1vA', title: 'Video học viên 4' },
    { id: '2jvsOtspiNg', title: 'Video học viên 5' },
];

// Real-world demo videos (Facebook)
const REAL_WORLD_VIDEOS = [
    {
        id: 1,
        url: 'https://www.facebook.com/share/r/181mojxfE9/',
        title: 'Video Timelapse',
        description: 'Xem quá trình tạo render timelapse thực tế bằng AI',
        icon: '🎬',
        gradient: 'from-blue-500 to-purple-600',
    },
    {
        id: 2,
        url: 'https://www.facebook.com/share/v/1DHPMwL7Xg/',
        title: 'App Phong Thuỷ',
        description: 'Demo app phong thuỷ được tạo ra bằng AI trong khoá học',
        icon: '🏠',
        gradient: 'from-emerald-500 to-teal-600',
    },
];

export function ZoomGalleryFree() {
    return (
        <section id="zoom-gallery" className="py-16 md:py-24 border-b border-border bg-bg-main">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center mb-12 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
                        <Users className="h-4 w-4 text-primary" />
                        <span className="text-xs font-bold uppercase tracking-wider text-primary">
                            Lớp Học Thực Tế
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-text-main mb-6 leading-tight">
                        Dù chỉ là lớp học 2 ngày miễn phí
                    </h2>

                    <p className="text-text-main text-xl md:text-2xl font-sans font-semibold leading-relaxed">
                        Nhưng hãy xem những <span className="text-primary font-bold">kết quả to lớn</span> mà học viên đạt được <span className="text-primary font-bold underline decoration-2 underline-offset-4">dưới đây</span>
                    </p>
                </div>

                {/* Gallery Grid with PhotoProvider */}
                <PhotoProvider>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
                        {ZOOM_IMAGES.map((image) => (
                            <PhotoView key={image.id} src={image.src}>
                                <div className="group relative aspect-[4/3] overflow-hidden rounded-xl border-2 border-border hover:border-primary/40 cursor-pointer transition-all hover:shadow-xl hover:-translate-y-1">
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 ">
                                        <div className="absolute bottom-3 left-3 right-3">
                                            <p className="text-white text-sm font-medium line-clamp-2">
                                                {image.alt}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Play Icon Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full">
                                            <Award className="h-6 w-6 text-white" />
                                        </div>
                                    </div>
                                </div>
                            </PhotoView>
                        ))}
                    </div>
                </PhotoProvider>

                {/* Real-World Video Section */}
                <div className="text-center mb-10 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 mb-6">
                        <Play className="h-4 w-4 text-accent" />
                        <span className="text-xs font-bold uppercase tracking-wider text-accent">
                            Video Thực Tế
                        </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold font-heading text-text-main mb-4">
                        Xem video thực tế các sản phẩm AI
                    </h3>
                    <p className="text-text-muted text-lg">
                        Những video demo thực tế từ học viên — bấm vào để xem trên Facebook
                    </p>
                </div>

                {/* Real-World Video Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
                    {REAL_WORLD_VIDEOS.map((video) => (
                        <a
                            key={video.id}
                            href={video.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative overflow-hidden rounded-2xl border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-bg-surface block"
                        >
                            {/* Gradient Header */}
                            <div className={`relative h-48 bg-gradient-to-br ${video.gradient} flex items-center justify-center overflow-hidden`}>
                                {/* Animated Background Pattern */}
                                <div className="absolute inset-0 opacity-20">
                                    <div className="absolute top-4 left-4 w-20 h-20 border-2 border-white/30 rounded-full animate-pulse" />
                                    <div className="absolute bottom-6 right-6 w-16 h-16 border-2 border-white/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/10 rounded-full" />
                                </div>

                                {/* Play Button */}
                                <div className="relative z-10 flex flex-col items-center gap-3">
                                    <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300 shadow-lg">
                                        <Play className="h-8 w-8 text-white ml-1" fill="white" />
                                    </div>
                                    <span className="text-white/80 text-sm font-medium group-hover:text-white transition-colors">
                                        Bấm để xem trên Facebook
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex items-start gap-4">
                                    <span className="text-4xl">{video.icon}</span>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="text-lg font-bold text-text-main mb-1 group-hover:text-primary transition-colors flex items-center gap-2">
                                            {video.title}
                                            <ExternalLink className="h-4 w-4 text-text-muted group-hover:text-primary transition-colors flex-shrink-0" />
                                        </h4>
                                        <p className="text-text-muted text-sm leading-relaxed">
                                            {video.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Video Section Header */}
                <div className="text-center mb-12 max-w-4xl mx-auto">
                    <h3 className="text-2xl md:text-3xl font-bold font-heading text-text-main mb-4">
                        Video của các anh em
                    </h3>
                    <p className="text-text-muted text-lg">
                        Được tạo ra ngay trong lớp học 2 ngày miễn phí này
                    </p>
                </div>

                {/* Video Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {STUDENT_VIDEOS.map((video) => (
                        <div key={video.id} className="group relative aspect-video overflow-hidden rounded-xl border-2 border-border hover:border-primary/40 transition-all hover:shadow-xl hover:-translate-y-1 bg-black">
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${video.id}`}
                                title={video.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="mt-16 max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/5 to-bg-surface border border-primary/20">
                            <div className="text-4xl font-bold text-primary mb-2">500+</div>
                            <p className="text-text-muted">Học viên đã tham gia</p>
                        </div>
                        <div className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/5 to-bg-surface border border-primary/20">
                            <div className="text-4xl font-bold text-primary mb-2">100%</div>
                            <p className="text-text-muted">Học viên hài lòng</p>
                        </div>
                        <div className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/5 to-bg-surface border border-primary/20">
                            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                            <p className="text-text-muted">Hỗ trợ học viên</p>
                        </div>
                    </div>
                </div>

                {/* Call To Action */}
                <div className="mt-20 text-center">
                    <h3 className="text-2xl md:text-3xl font-bold font-heading text-text-main mb-8 max-w-3xl mx-auto leading-tight">
                        Hàng trăm anh em khác đã thành thạo AI rồi, <br className="hidden md:block" />
                        <span className="text-primary">bạn còn chần chừ sao?</span>
                    </h3>

                    <button
                        onClick={() => {
                            const pricingSection = document.getElementById('pricing');
                            pricingSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }}
                        className="group inline-flex h-16 items-center justify-center rounded-xl bg-gradient-to-r from-primary to-accent px-10 text-lg font-bold text-white shadow-xl shadow-primary/40 transition-all hover:shadow-2xl hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary font-sans relative overflow-hidden animate-pulse hover:animate-none"
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            Đăng ký ngay hoàn toàn miễn phí 2 ngày <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </button>
                </div>
            </div>
        </section>
    );
}
