import React from 'react';
import { Sparkles, Zap } from 'lucide-react';
import ImageComparisonSlider from './ImageComparisonSlider';

export default function Solution() {
    // Sample features with before/after comparisons or GIF demos
    // If gifImage is provided, it will be shown instead of the slider
    const features = [
        {
            title: "Sketch to Photo",
            beforeLabel: "Sketch",
            afterLabel: "Render",
            description: "Phác thảo thành ảnh thật",
            beforeImage: "/solutions/sketch to image before.jpg",
            afterImage: "/solutions/sketch to image after.png",
            // gifImage: "/path/to/sketch-to-photo.gif" // Optional: if provided, shows GIF instead of slider
        },
        {
            title: "CAD to Photo",
            beforeLabel: "CAD",
            afterLabel: "Render",
            description: "Bản vẽ CAD thành ảnh thật",
            beforeImage: "/solutions/cad to photo before.jpg",
            afterImage: "/solutions/cad to photo after.jpg"
        },
        {
            title: "Revit, Sketchup, 3ds Max Model to Photo",
            beforeLabel: "Model",
            afterLabel: "Render",
            description: "Mô hình thành ảnh thật",
            beforeImage: "/solutions/revit 3d before.jpg",
            afterImage: "/solutions/revit 3d after.jpg"
        },
        {
            title: "3D Model to Photo",
            beforeLabel: "3D",
            afterLabel: "Render",
            description: "Khối 3D thô thành ảnh thật",
            beforeImage: "/solutions/plan to 3d before.png",
            afterImage: "/solutions/plan to 3d after.png"
        },
        {
            title: "Multiple Views",
            beforeLabel: "Single",
            afterLabel: "Multi",
            description: "Đa góc nhìn đồng bộ",
            beforeImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
            afterImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
        },
        {
            title: "Design to Site",
            beforeLabel: "Design",
            afterLabel: "Site",
            description: "Ghép thiết kế vào đất thực tế",
            beforeImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
            afterImage: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80"
        },
        {
            title: "Site to Finishing",
            beforeLabel: "Raw",
            afterLabel: "Finished",
            description: "Hiện trạng thô thành hoàn thiện",
            beforeImage: "/solutions/site to finish before.jpg",
            afterImage: "/solutions/site to finish after.jpg"
        },
        {
            title: "Restoration",
            beforeLabel: "Old",
            afterLabel: "Restored",
            description: "Phục dựng công trình cũ",
            beforeImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
            afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
        },
        {
            title: "Repainting",
            beforeLabel: "Before",
            afterLabel: "After",
            description: "Phối lại màu sơn",
            beforeImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
            afterImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
        },
        {
            title: "Renovation",
            beforeLabel: "Current",
            afterLabel: "Renovated",
            description: "Lên phương án cải tạo",
            beforeImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
            afterImage: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80"
        },
        {
            title: "Camera Angle",
            beforeLabel: "Standard",
            afterLabel: "Creative",
            description: "Sáng tạo góc máy mới",
            beforeImage: "/solutions/doi goc cong trinh before.jpg",
            afterImage: "/solutions/doi goc cong trinh after.jpg"
        },
        {
            title: "Shot Size",
            beforeLabel: "Wide",
            afterLabel: "Close-up",
            description: "Zoom cận cảnh",
            beforeImage: "/solutions/zoom can canh before.jpg",
            afterImage: "/solutions/zoom can canh after.jpg"
        },
        {
            title: "Multiple Shot Sizes",
            beforeLabel: "Single",
            afterLabel: "Multiple",
            description: "Tạo bộ ảnh đa cự ly",
            beforeImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
            afterImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80"
        },
        {
            title: "Thêm người, vật vào ảnh",
            beforeLabel: "Static",
            afterLabel: "Alive",
            description: "Thêm người, vật vào ảnh",
            beforeImage: "/solutions/them nguoi vao anh before.png",
            afterImage: "/solutions/them nguoi vao anh after.png"
        },
        {
            title: "Day to Night",
            beforeLabel: "Day",
            afterLabel: "Night",
            description: "Biến ngày thành đêm",
            beforeImage: "/solutions/day to night before.png",
            afterImage: "/solutions/day to night after.png"
        },
        {
            title: "Upscale & Enhance 4k",
            beforeLabel: "Low Res",
            afterLabel: "High Res",
            description: "Nâng cấp & Làm nét ảnh 4k",
            beforeImage: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
            afterImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80"
        }
    ];



    return (
        <section id="solution" className="py-16 md:py-24 border-b border-border bg-bg-surface">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-primary/30 bg-gradient-to-r from-primary/10 to-accent/10 mb-6 shadow-lg">
                        <Zap className="h-5 w-5 text-primary" />
                        <span className="text-sm font-bold uppercase tracking-wider text-primary">
                            ⚡ Đang đang tìm kiếm giải pháp đúng không?
                        </span>
                    </div>

                    {/* Headline */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-text-main mb-6 leading-tight">
                        Nhưng tôi có{' '}
                        <span className="relative inline-block">
                            <span className="relative z-10 text-primary">giải pháp</span>
                            <span className="absolute bottom-1 left-0 right-0 h-3 bg-primary/20 -rotate-1"></span>
                        </span>{' '}
                        dành cho bạn
                    </h2>
                    <p className="text-text-main text-lg md:text-xl font-sans leading-relaxed mb-8">
                        Sử dụng AI mới nhất{' '}
                        <span className="font-bold text-primary bg-primary/10 px-3 py-1 rounded-lg">
                            Google Nano Banana Pro 12/2025
                        </span>
                        <br />
                        Bạn sẽ thoát khỏi các nỗi đau đó.
                    </p>

                    {/* Benefits */}
                    <div className="text-center mb-12 max-w-4xl mx-auto">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
                            <div className="h-2 w-2 rounded-full bg-primary"></div>
                            <span className="text-xs font-bold uppercase tracking-wider text-primary">
                                Kỹ năng bạn cần
                            </span>
                        </div>

                        {/* Headline */}
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold font-heading text-text-main mb-6 leading-tight">
                            Để Sếp tăng lương,{' '}
                            <span className="text-primary">bạn bè ngưỡng mộ</span>,{' '}
                            đơn về như mưa
                        </h3>

                        {/* Description */}
                        <p className="text-text-muted text-lg md:text-xl font-sans leading-relaxed">
                            Đừng để điều đó chỉ là ước mơ. Hãy biến nó thành hiện thực bằng cách làm chủ các kỹ năng sau.
                        </p>
                    </div>
                </div>

                {/* Features Grid */}
                <div>
                    <div className="text-center mb-10">
                        <h3 className="text-2xl md:text-3xl font-bold font-heading text-text-main mb-3">
                            Kỹ năng dùng AI render Ảnh
                        </h3>
                        <p className="text-text-muted font-sans">
                            Đừng đi xoay từng view, gán vật liệu, gán map từng cái 1 nữa...
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                        {features.map((feature, index) => (
                            <div key={index} className="group p-4 border-2 border-border bg-bg-main rounded-xl hover:border-primary/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                                {feature.gifImage ? (
                                    // Show GIF if provided
                                    <div className="relative">
                                        <div className="relative aspect-video rounded-lg overflow-hidden bg-bg-muted">
                                            <img
                                                src={feature.gifImage}
                                                alt={feature.title}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute top-2 right-2 px-2 py-1 bg-primary text-white text-xs font-bold rounded shadow-lg flex items-center gap-1">
                                                <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                                                GIF
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <h4 className="font-bold text-text-main mb-1">{feature.title}</h4>
                                            <p className="text-sm text-text-muted">{feature.description}</p>
                                        </div>
                                    </div>
                                ) : (
                                    // Show slider if no GIF
                                    <ImageComparisonSlider
                                        beforeImage={feature.beforeImage}
                                        afterImage={feature.afterImage}
                                        beforeLabel={feature.beforeLabel}
                                        afterLabel={feature.afterLabel}
                                        title={feature.title}
                                        description={feature.description}
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Additional Capabilities */}
                    <div className="mb-12">
                        <div className="text-center mb-6">
                            <h4 className="text-xl md:text-2xl font-bold font-heading text-text-main mb-2 flex items-center justify-center gap-2">
                                <Sparkles className="h-6 w-6 text-primary" />
                                Và Còn Nhiều Hơn Thế Nữa...
                            </h4>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            <div className="group p-6 bg-bg-surface rounded-xl border-2 border-border hover:border-primary/40 transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Sparkles className="h-8 w-8 text-primary" />
                                </div>
                                <p className="font-bold text-text-main">Tạo hàng chục phương án render ngoại thất, nội thất</p>
                            </div>
                            <div className="group p-6 bg-bg-surface rounded-xl border-2 border-border hover:border-accent/40 transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Sparkles className="h-8 w-8 text-accent" />
                                </div>
                                <p className="font-bold text-text-main">Tạo ảnh poster quảng cáo chuyên nghiệp</p>
                            </div>
                            <div className="group p-6 bg-bg-surface rounded-xl border-2 border-border hover:border-secondary/40 transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Sparkles className="h-8 w-8 text-secondary" />
                                </div>
                                <p className="font-bold text-text-main">Tạo video quảng cáo ấn tượng</p>
                            </div>
                        </div>
                    </div>

                    {/* Video Creation Features with Veo 3.1 */}
                    <div className="max-w-6xl mx-auto">
                        <div className="relative">
                            <div className="absolute -inset-3 bg-gradient-to-r from-accent/30 via-primary/30 to-accent/30 rounded-3xl blur-2xl"></div>
                            <div className="relative p-8 md:p-10 border-2 border-accent/40 bg-gradient-to-br from-accent/10 via-bg-surface to-primary/10 rounded-3xl shadow-2xl">
                                <div className="text-center mb-10">
                                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-accent/40 bg-gradient-to-r from-accent/20 to-primary/20 mb-6 shadow-lg">
                                        <Sparkles className="h-5 w-5 text-accent animate-pulse" />
                                        <span className="text-sm font-bold uppercase tracking-wider text-accent">
                                            🎬 Sử Dụng Veo 3.1 Mới Nhất
                                        </span>
                                    </div>
                                    <h3 className="text-2xl md:text-4xl font-bold font-heading text-text-main mb-4">
                                        Tính Năng Tạo Video AI
                                    </h3>
                                    <p className="text-text-main font-sans text-lg max-w-3xl mx-auto">
                                        Công nghệ <span className="font-bold text-accent">AI video thế hệ mới nhất từ Google</span> giúp bạn tạo video chuyên nghiệp trong vài phút
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="group bg-bg-surface rounded-2xl border-2 border-border hover:border-accent/60 transition-all hover:shadow-2xl overflow-hidden hover:-translate-y-2 duration-300 cursor-pointer">
                                        {/* YouTube Video Preview */}
                                        <div className="relative h-56 overflow-hidden bg-bg-muted">
                                            <iframe
                                                width="100%"
                                                height="100%"
                                                src="https://www.youtube.com/embed/Mqn-XG_UYdc"
                                                title="Video Review Nhà Demo"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            ></iframe>
                                            <div className="absolute inset-0 bg-gradient-to-t from-text-main/80 via-text-main/20 to-transparent pointer-events-none"></div>
                                            <div className="absolute top-4 left-4 px-3 py-1.5 bg-accent text-white text-xs font-bold rounded-lg shadow-lg flex items-center gap-1.5">
                                                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                                VIDEO
                                            </div>
                                        </div>

                                        <div className="p-6">
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 text-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                                    <Sparkles className="h-6 w-6" />
                                                </div>
                                                <h4 className="text-xl font-bold text-text-main font-heading">
                                                    Video Review Nhà
                                                </h4>
                                            </div>
                                            <p className="text-sm text-text-muted font-sans leading-relaxed">
                                                Tạo video tour 3D chuyên nghiệp quanh căn nhà, giống như có cameraman thực sự
                                            </p>
                                        </div>
                                    </div>

                                    <div className="group bg-bg-surface rounded-2xl border-2 border-border hover:border-primary/60 transition-all hover:shadow-2xl overflow-hidden hover:-translate-y-2 duration-300 cursor-pointer">
                                        {/* YouTube Video Preview */}
                                        <div className="relative h-56 overflow-hidden bg-bg-muted">
                                            <iframe
                                                width="100%"
                                                height="100%"
                                                src="https://www.youtube.com/embed/U2tVYMGdCdw"
                                                title="Video Timelapse Demo"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            ></iframe>
                                            <div className="absolute inset-0 bg-gradient-to-t from-text-main/80 via-text-main/20 to-transparent pointer-events-none"></div>
                                            <div className="absolute top-4 left-4 px-3 py-1.5 bg-primary text-white text-xs font-bold rounded-lg shadow-lg flex items-center gap-1.5">
                                                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                                VIDEO
                                            </div>
                                        </div>

                                        <div className="p-6">
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                                    <Sparkles className="h-6 w-6" />
                                                </div>
                                                <h4 className="text-xl font-bold text-text-main font-heading">
                                                    Video Timelapse
                                                </h4>
                                            </div>
                                            <p className="text-sm text-text-muted font-sans leading-relaxed">
                                                Tạo video timelapse quá trình xây dựng từ nền móng đến hoàn thiện, ấn tượng và chuyên nghiệp
                                            </p>
                                        </div>
                                    </div>

                                    <div className="group bg-bg-surface rounded-2xl border-2 border-border hover:border-accent/60 transition-all hover:shadow-2xl overflow-hidden hover:-translate-y-2 duration-300 cursor-pointer">
                                        {/* GIF/Video Preview */}
                                        <div className="relative h-56 overflow-hidden bg-bg-muted">
                                            <img
                                                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80"
                                                alt="Video Quảng Cáo Demo"
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-text-main/80 via-text-main/20 to-transparent"></div>
                                            <div className="absolute top-4 left-4 px-3 py-1.5 bg-accent text-white text-xs font-bold rounded-lg shadow-lg flex items-center gap-1.5">
                                                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                                VIDEO
                                            </div>
                                        </div>

                                        <div className="p-6">
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 text-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                                    <Sparkles className="h-6 w-6" />
                                                </div>
                                                <h4 className="text-xl font-bold text-text-main font-heading">
                                                    Video Quảng Cáo
                                                </h4>
                                            </div>
                                            <p className="text-sm text-text-muted font-sans leading-relaxed">
                                                Tạo video quảng cáo cinematic cho dự án, thu hút khách hàng với hình ảnh đẹp mắt
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
