import React from 'react';
import { Sparkles, Zap, LayoutTemplate, FileText, Box, Layers, Image as ImageIcon, Map, Home, RotateCcw } from 'lucide-react';

const FeatureHighlight = ({ title, icon: Icon, description1, description2, mainImage, subImage, isReversed, arrowDirection = "down-right" }) => {
    return (
        <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center mb-24 last:mb-0`}>
            {/* Text Content */}
            <div className="flex-1">
                <div className="flex items-center gap-3 mb-6">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-text-main leading-tight">
                        {title.split(' ').map((word, i) => (
                            <span key={i} className="inline-block mr-2">{word}</span>
                        ))}
                    </h3>
                    {Icon && <Icon className="w-10 h-10 md:w-12 md:h-12 text-primary ml-auto lg:ml-4 flex-shrink-0" />}
                </div>

                <div className="w-full h-px bg-border mb-8"></div>

                <div className="space-y-6 text-base md:text-lg leading-relaxed font-sans text-justify">
                    <div className="bg-red-50/50 dark:bg-red-900/10 p-5 rounded-xl border-l-4 border-red-500 shadow-sm">
                        <span className="font-bold text-red-600 dark:text-red-400 block mb-2 uppercase tracking-wide text-xs flex items-center gap-2">
                            ⚠️ Vấn đề
                        </span>
                        <p className="text-text-muted">{description1}</p>
                    </div>
                    <div className="bg-emerald-50/50 dark:bg-emerald-900/10 p-5 rounded-xl border-l-4 border-emerald-500 shadow-sm">
                        <span className="font-bold text-emerald-600 dark:text-emerald-400 block mb-2 uppercase tracking-wide text-xs flex items-center gap-2">
                            ✨ Giải pháp AI
                        </span>
                        <p className="text-text-muted">{description2}</p>
                    </div>
                </div>
            </div>

            {/* Images Visual */}
            <div className="flex-1 relative w-full group">
                {/* Main Image (After) */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] w-full z-10 transition-transform duration-500 group-hover:scale-[1.02]">
                    <img
                        src={mainImage}
                        alt="Render Outcome"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md text-white text-xs font-bold rounded-full border border-white/20">
                        Render
                    </div>
                </div>

                {/* Inset Image (Before) */}
                <div className={`absolute -top-8 md:-top-12 ${isReversed ? '-right-4 md:-right-8' : '-left-4 md:-left-8'} w-[35%] md:w-[40%] aspect-[4/3] rounded-xl overflow-hidden shadow-xl border-4 border-white z-20 transform ${isReversed ? 'rotate-3' : '-rotate-3'} hover:rotate-0 transition-all duration-300 hover:scale-110 hover:z-30`}>
                    <img
                        src={subImage}
                        alt="Input Source"
                        className="w-full h-full object-cover bg-white"
                    />
                    <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold rounded-full border border-white/20">
                        Input
                    </div>
                </div>

                {/* Connection Arrow */}
                <div className={`absolute top-0 ${isReversed ? 'right-[30%]' : 'left-[30%]'} w-24 h-24 z-30 pointer-events-none drop-shadow-lg opacity-80 hidden md:block`}>
                    <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: isReversed ? 'scaleX(-1)' : 'none' }}>
                        <path
                            d="M10,40 Q40,10 80,40"
                            stroke="#fbbf24"
                            strokeWidth="6"
                            fill="none"
                            strokeLinecap="round"
                        />
                        <path
                            d="M65,45 L80,40 L75,25"
                            stroke="#fbbf24"
                            strokeWidth="6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default function Solution() {
    const allFeatures = [
        {
            title: "Sketch To Photo",
            icon: LayoutTemplate,
            mainImage: "/solutions/sketch to image after.png",
            subImage: "/solutions/sketch to image before.jpg",
            description1: "Trong quy trình thiết kế nội thất và kiến trúc, khách hàng rất khó hình dung không gian chỉ từ sketch hoặc bản vẽ line-work, dẫn đến hiểu nhầm ý tưởng và kéo dài các vòng góp ý. Mỗi lần thay vật liệu, chỉnh ánh sáng hay thử phương án mới đều phải dựng lại và render lại từ đầu, tốn nhiều giờ đồng hồ và chi phí nhân sự. Việc render truyền thống còn dễ làm lệch góc máy, thay đổi tỷ lệ và đánh mất bố cục gốc trong sketch. Đây là “nút thắt cổ chai” khiến team thiết kế mất năng suất, còn deadline liên tục bị đẩy lùi.",
            description2: "BimSpeed AI cho phép chuyển sketch → ảnh photoreal chỉ trong vài phút, tự động lock góc máy – tỷ lệ – massing để giữ trọn ý đồ thiết kế, đồng thời mô phỏng vật liệu, ánh sáng, bóng đổ và bối cảnh Việt Nam cực kỳ chân thực. Tất cả prompt đã được BimSpeed AI tinh chỉnh sẵn, chỉ cần upload sketch là hệ thống tự xử lý, không tốn công sức setup hay thử đi thử lại. Từ một bản phác thảo, bạn có thể tạo ngay hàng loạt biến thể để so sánh song song, tối ưu 90% thời gian vòng lặp chỉnh sửa và giúp khách hàng chốt phương án nhanh hơn rất nhiều.."
        },
        {
            title: "CAD To Photo",
            icon: FileText,
            mainImage: "/solutions/cad to photo after.jpg",
            subImage: "/solutions/cad to photo before.jpg",
            description1: "Khách hàng, các bác thợ ít hiểu biết cách đọc Autocad, nên khách hàng dễ mơ hồ, bạn khó chốt đơn? Vậy đâu là giải pháp?",
            description2: "Ứng dụng AI giúp chuyển CAD sang ảnh thật, render nhiều phuơng án 1 lúc, bạn ko cần mất nhiều công sức học, prompt, có sẵn tài liệu App chỉ việc dùng."
        },
        {
            title: "Model To Photo",
            icon: Box,
            mainImage: "/solutions/revit 3d after.jpg",
            subImage: "/solutions/revit 3d before.jpg",
            description1: "Bạn dựng hình từ Revit, Sketchup hay 3ds Max nhưng render quá lâu hoặc máy không đủ mạnh? Việc chuyển đổi qua lại giữa các phần mềm để render thường gặp lỗi, mất map vật liệu, và tốn hàng giờ đồng hồ để setup ánh sáng cho từng view.",
            description2: "Chỉ cần xuất ảnh chụp màn hình thô từ mô hình (viewport), AI sẽ xử lý phần còn lại. Nó tự động nhận diện hình khối, áp vật liệu và ánh sáng thực tế. Giải pháp hoàn hảo cho KTS muốn thấy ngay kết quả render chất lượng cao mà không cần là chuyên gia về V-Ray hay Corona."
        },
        {
            title: "Massing To Photo",
            icon: Layers,
            mainImage: "/solutions/plan to 3d after.png",
            subImage: "/solutions/plan to 3d before.png",
            description1: "Giai đoạn làm concept khối (massing) thường rất trừu tượng. Chủ đầu tư khó hình dung công trình sẽ trông như thế nào khi hoàn thiện chỉ qua các khối trắng (white model). Dựng chi tiết ngay từ đầu thì phí công nếu phương án bị loại.",
            description2: "Biến khối massing đơn giản thành phối cảnh hoàn thiện sống động. AI giúp bạn explore các phong cách kiến trúc khác nhau trên cùng một khối hình học cơ bản. Thử nghiệm nhanh các phương án mặt đứng, vật liệu ốp lát chỉ trong vài cú click chuột."
        },
        {
            title: "Multiple Views",
            icon: ImageIcon,
            mainImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
            subImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
            description1: "Khi làm dự án lớn, việc render nhiều góc nhìn (biệt thự sân vườn, quy hoạch...) đòi hỏi sự đồng bộ về phong cách, ánh sáng và cây cối. Render thủ công dễ bị 'lệch tông' giữa các view nếu không kiểm soát kỹ setting.",
            description2: "Công nghệ AI Consistency giúp tạo ra bộ ảnh đa góc nhìn đồng nhất 100%. Giữ nguyên DNA thiết kế, loại cây, màu sắc vật liệu xuyên suốt từ view tổng thể đến chi tiết. Xuất bản hồ sơ trình bày chuyên nghiệp và thuyết phục hơn bao giờ hết."
        },
        {
            title: "Design To Site",
            icon: Map,
            mainImage: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
            subImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
            description1: "Ảnh phối cảnh thường 'bay bổng' quá mức so với thực tế, khiến khách hàng bị hụt hẫng khi ra công trường. Việc ghép công trình vào ảnh chụp flycam/hiện trạng thủ công bằng Photoshop tốn nhiều thời gian và dễ lộ vết ghép.",
            description2: "Tự động hòa nhập thiết kế vào ảnh chụp hiện trạng. AI phân tích ánh sáng, đổ bóng của môi trường thực và áp dụng lên công trình. Kết quả là những bức ảnh 'dựng trước' chân thực, giúp khách hàng thấy chính xác ngôi nhà tương lai nằm trên mảnh đất của họ."
        },
        {
            title: "Site To Finishing",
            icon: Home,
            mainImage: "/solutions/site to finish after.jpg",
            subImage: "/solutions/site to finish before.jpg",
            description1: "Khách mua nhà xây thô hoặc nhà nát thường không thấy được tiềm năng của bất động sản. Họ chỉ thấy gạch vữa loang lổ và không gian tối tăm, dẫn đến việc ép giá hoặc bỏ qua cơ hội đầu tư.",
            description2: "Chụp ảnh hiện trạng thô và để AI 'hoàn thiện' nó. Quét sơn, lát sàn, bố trí nội thất ảo (Virtual Staging) ngay trên ảnh thực tế. Một công cụ bán hàng quyền năng cho anh em môi giới và các nhà đầu tư cải tạo nhà."
        },
        {
            title: "Restoration",
            icon: RotateCcw,
            mainImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
            subImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
            description1: "Các công trình di sản hoặc nhà cũ xuống cấp cần được trùng tu nhưng hình ảnh tư liệu còn lại rất ít hoặc mờ nhòe. Việc lên phương án phục dựng đòi hỏi trí tưởng tượng và kiến thức lịch sử phong phú.",
            description2: "Phục dựng vẻ đẹp nguyên bản từ những tàn tích. AI giúp tái tạo lại các chi tiết kiến trúc bị mất, làm mới màu sơn và vật liệu dựa trên phong cách gốc. Thổi hồn sức sống mới vào những công trình cũ kỹ."
        },
    ];

    return (
        <section id="solution" className="py-16 md:py-24 border-b border-border bg-bg-surface overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center mb-20 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-primary/30 bg-gradient-to-r from-primary/10 to-accent/10 mb-6 shadow-lg">
                        <Zap className="h-5 w-5 text-primary" />
                        <span className="text-sm font-bold uppercase tracking-wider text-primary">
                            ⚡ Giải Pháp Toàn Diện
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-text-main mb-6 leading-tight">
                        Bộ Công Cụ{' '}
                        <span className="relative inline-block">
                            <span className="relative z-10 text-primary">Quyền Năng</span>
                            <span className="absolute bottom-1 left-0 right-0 h-3 bg-primary/20 -rotate-1"></span>
                        </span>{' '}
                    </h2>
                    <p className="text-text-muted text-lg md:text-xl font-sans leading-relaxed">
                        Không chỉ dừng lại ở Sketch hay CAD, chúng tôi cung cấp giải pháp render cho mọi giai đoạn của quy trình thiết kế kiến trúc.
                    </p>
                </div>

                {/* Features List */}
                <div className="mb-24">
                    {allFeatures.map((feature, index) => (
                        <FeatureHighlight
                            key={index}
                            {...feature}
                            isReversed={index % 2 !== 0} // Alternating layout
                        />
                    ))}
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
        </section>
    );
}
