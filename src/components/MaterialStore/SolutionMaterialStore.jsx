import React from 'react';
import { Sparkles, Zap, Grid3X3, Home, Layers, Building2, Palette, ArrowLeftRight } from 'lucide-react';

const FeatureHighlight = ({ title, icon: Icon, description1, description2, mainImage, subImage, isReversed }) => {
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
                            ⚠️ Vấn đề của bạn
                        </span>
                        <p className="text-text-muted">{description1}</p>
                    </div>
                    <div className="bg-emerald-50/50 dark:bg-emerald-900/10 p-5 rounded-xl border-l-4 border-emerald-500 shadow-sm">
                        <span className="font-bold text-emerald-600 dark:text-emerald-400 block mb-2 uppercase tracking-wide text-xs flex items-center gap-2">
                            ✨ Giải pháp AI cho cửa hàng của bạn
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
                        Sau khi dùng AI
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
                        Ảnh gốc
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

export default function SolutionMaterialStore() {
    const allFeatures = [
        {
            title: "Thay Gạch Sàn & Tường",
            icon: Grid3X3,
            mainImage: "/solutions/site to finish after.jpg",
            subImage: "/solutions/site to finish before.jpg",
            description1: "Khách hàng đến cửa hàng của bạn, nhìn mẫu gạch nhỏ xíu trên kệ nhưng không thể hình dung được khi lát cả phòng khách 30m² sẽ như thế nào. Họ đắn đo, so sánh, rồi về nhà... không quay lại. Hoặc tệ hơn, mua về rồi không ưng ý, đòi trả lại. Bạn mất khách, mất thời gian, mất tiền.",
            description2: "Chỉ cần chụp ảnh phòng của khách hàng bằng điện thoại, AI sẽ thay thế gạch sàn/tường trong vài giây. Khách nhìn thấy CHÍNH XÁC gạch của bạn trong căn phòng THẬT của họ. Chốt đơn tại chỗ, không cần suy nghĩ thêm. Gửi ảnh qua Zalo cho họ về nhà bàn với gia đình - tỷ lệ chốt tăng 300%."
        },
        {
            title: "Thay Ngói & Mái Nhà",
            icon: Home,
            mainImage: "/solutions/revit 3d after.jpg",
            subImage: "/solutions/revit 3d before.jpg",
            description1: "Ngói là sản phẩm đắt tiền, khách không thể mua về thử rồi trả. Họ chỉ có thể nhìn mẫu nhỏ và tưởng tượng. Nhiều khách mua ngói sai màu, sai loại so với tổng thể căn nhà, gây cãi vã và ảnh hưởng uy tín cửa hàng. Các đối thủ lớn có showroom hoành tráng, bạn thì không.",
            description2: "Upload ảnh căn nhà khách hàng (từ flycam hoặc chụp từ đường), AI sẽ thay thử các loại ngói khác nhau ngay lập tức. So sánh ngói đỏ, ngói xám, ngói màu mới... tất cả trên CHÍNH căn nhà của họ. Khách tin tưởng tuyệt đối, bạn chốt đơn lớn dễ dàng. Không cần showroom triệu đô."
        },
        {
            title: "Render Phòng Hoàn Thiện",
            icon: Layers,
            mainImage: "/solutions/cad to photo after.jpg",
            subImage: "/solutions/cad to photo before.jpg",
            description1: "Khách xây nhà mới hoặc sửa nhà, họ cần hình dung tổng thể: gạch sàn kết hợp với gạch tường, màu sơn, nội thất... Bạn chỉ bán gạch nhưng không thể giúp họ thấy bức tranh toàn cảnh. Kết quả: khách chọn sai, đổi hàng, hoặc tệ hơn - mua ở chỗ khác có tư vấn tốt hơn.",
            description2: "Từ bản vẽ CAD hoặc ảnh phòng thô, AI render thành phòng hoàn thiện lung linh. Khách thấy gạch của bạn trong không gian đẹp như mơ - kích thích ham muốn mua hàng ngay lập tức. Bạn trở thành 'chuyên gia tư vấn' chứ không chỉ là 'người bán hàng'. Giá trị gia tăng = khách trung thành."
        },
        {
            title: "So Sánh Nhiều Phương Án",
            icon: ArrowLeftRight,
            mainImage: "/solutions/sketch to image after.png",
            subImage: "/solutions/sketch to image before.jpg",
            description1: "Khách hàng muốn so sánh 3-4 loại gạch khác nhau nhưng bạn không thể dựng hết từng phương án. Họ phải tự tưởng tượng và thường chọn sai. Hoặc họ đi nhiều cửa hàng để xem nhiều mẫu - và cuối cùng mua ở chỗ rẻ nhất chứ không phải chỗ bạn.",
            description2: "Tạo 4-5 phương án với các loại gạch khác nhau chỉ trong 2 phút. Đặt cạnh nhau cho khách so sánh trực quan. Họ thấy sự chuyên nghiệp của bạn, cảm thấy được phục vụ tận tình. Khách sẵn sàng chi nhiều hơn khi họ TIN TƯỞNG vào lựa chọn của mình - và người giúp họ chọn đúng."
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
                            ⚡ Giải Pháp AI Cho Cửa Hàng Vật Liệu
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-text-main mb-6 leading-tight">
                        Biến Khách Xem Thành{' '}
                        <span className="relative inline-block">
                            <span className="relative z-10 text-primary">Khách Mua</span>
                            <span className="absolute bottom-1 left-0 right-0 h-3 bg-primary/20 -rotate-1"></span>
                        </span>
                        {' '}Với Công Nghệ AI
                    </h2>
                    <p className="text-text-muted font-sans text-lg max-w-3xl mx-auto">
                        Không cần biết về công nghệ, không cần thuê designer. Chỉ cần điện thoại và 30 giây -
                        bạn đã có thể cho khách hàng thấy sản phẩm của mình trong không gian thực.
                    </p>
                </div>

                {/* Features List */}
                <div className="mb-24">
                    {allFeatures.map((feature, index) => (
                        <FeatureHighlight
                            key={index}
                            {...feature}
                            isReversed={index % 2 !== 0}
                        />
                    ))}
                </div>

                {/* Bottom CTA Section */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        <div className="absolute -inset-3 bg-gradient-to-r from-accent/30 via-primary/30 to-accent/30 rounded-3xl blur-2xl"></div>
                        <div className="relative p-8 md:p-10 border-2 border-primary/40 bg-gradient-to-br from-primary/10 via-bg-surface to-accent/10 rounded-3xl shadow-2xl text-center">
                            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-primary/40 bg-white/80 mb-6 shadow-lg">
                                <Sparkles className="h-5 w-5 text-primary animate-pulse" />
                                <span className="text-sm font-bold uppercase tracking-wider text-primary">
                                    🎁 Ưu Đãi Đặc Biệt
                                </span>
                            </div>
                            <h3 className="text-2xl md:text-4xl font-bold font-heading text-text-main mb-4">
                                Dùng Thử Miễn Phí - Không Cần Thẻ Tín Dụng
                            </h3>
                            <p className="text-text-muted font-sans text-lg max-w-2xl mx-auto mb-6">
                                Đăng ký ngay để nhận <span className="font-bold text-primary">10 lần render miễn phí</span>.
                                Trải nghiệm trước, quyết định sau.
                            </p>
                            <button
                                onClick={() => {
                                    const pricingSection = document.getElementById('pricing');
                                    pricingSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }}
                                className="group inline-flex h-14 items-center justify-center rounded-xl bg-gradient-to-r from-primary to-accent px-8 text-base font-bold text-white shadow-xl shadow-primary/40 transition-all hover:shadow-2xl hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary font-sans relative overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Đăng Ký Nhận Demo Miễn Phí
                                    <Sparkles className="h-5 w-5" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
