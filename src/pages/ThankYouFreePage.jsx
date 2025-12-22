import React, { useEffect, useState } from 'react';
import { Check, Sparkles, MessageCircle, ArrowRight, Star, Copy, Gift, Video, BookOpen, Clock, Zap } from 'lucide-react';

export default function ThankYouFreePage() {
    useEffect(() => {
        // Scroll to top when page loads
        window.scrollTo(0, 0);
    }, []);

    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('1031100348');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleJoinZalo = () => {
        window.open('https://zalo.me/g/pmotxf386', '_blank');
    };

    return (
        <div className="min-h-screen bg-bg-surface font-sans text-text-main">
            {/* Animated background elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
                {/* Success Header */}
                <div className="text-center mb-16 animate-fade-in relative">
                    <div className="inline-flex items-center justify-center mb-6 relative">
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
                        <div className="relative bg-gradient-to-br from-primary to-accent rounded-full p-6 shadow-2xl">
                            <Check className="h-16 w-16 text-white stroke-[3]" />
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight">
                        🎉 Chúc Mừng Bạn Đã<br className="hidden md:block" /> Đăng Ký Thành Công!
                    </h1>

                    <p className="text-xl md:text-2xl text-text-main font-semibold mb-4">
                        Khóa học AI Kiến Trúc 2 buổi miễn phí
                    </p>

                    <div className="max-w-3xl mx-auto bg-bg-main/50 backdrop-blur-sm p-6 rounded-2xl border border-primary/20">
                        <p className="text-text-muted text-lg leading-relaxed">
                            Hãy kiểm tra hòm thư email của bạn. Tôi vừa gửi tặng bạn phần quà AI làm kiến trúc nội thất.
                            Nếu không thấy inbox, hãy kiểm tra mục Spam/Promotions và đánh dấu sao để không bỏ lỡ quà tặng tiếp theo! 🚀
                        </p>
                    </div>
                </div>

                {/* Main Action Area Container */}
                <div className="max-w-6xl mx-auto space-y-16">

                    {/* Step 1: Join Zalo */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 rounded-3xl blur-xl opacity-60 animate-pulse group-hover:opacity-100 transition duration-500"></div>
                        <div className="relative bg-bg-surface border-2 border-primary/30 rounded-2xl p-8 md:p-12 shadow-2xl overflow-hidden">
                            {/* Decoration */}
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <MessageCircle className="w-64 h-64 text-primary transform rotate-12 translate-x-20 -translate-y-20" />
                            </div>

                            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                                <div className="flex-1 space-y-6">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
                                        <div className="w-2 h-2 rounded-full bg-primary animate-ping"></div>
                                        <span className="text-sm font-bold text-primary uppercase tracking-wider">
                                            NẾU BẠN THAM GIA MIỄN PHÍ
                                        </span>
                                    </div>

                                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-main">
                                        Tham Gia Nhóm Zalo Lớp Học
                                    </h2>

                                    <p className="text-lg text-text-muted">
                                        Đây là nơi duy nhất bạn nhận được:
                                    </p>

                                    <ul className="space-y-3 inline-block text-left">
                                        {[
                                            "Link Zoom tham gia lớp học",
                                            "Tài liệu và quà tặng khóa học",
                                            "Hỗ trợ trực tiếp từ giảng viên"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-center gap-3">
                                                <Check className="h-5 w-5 text-primary shrink-0" />
                                                <span className="font-medium">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="w-full md:w-auto shrink-0 flex flex-col items-center">
                                    <button
                                        onClick={handleJoinZalo}
                                        className="w-full md:w-auto px-8 py-6 bg-gradient-to-r from-primary via-accent to-primary text-white font-bold rounded-2xl text-xl shadow-lg shadow-primary/25 hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden group/btn"
                                    >
                                        <span className="relative z-10 flex items-center justify-center gap-3">
                                            <MessageCircle className="h-8 w-8" />
                                            Tham Gia Nhóm Zalo Ngay
                                            <ArrowRight className="h-6 w-6 group-hover/btn:translate-x-2 transition-transform" />
                                        </span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000"></div>
                                    </button>
                                    <p className="mt-3 text-sm text-center text-text-muted">
                                        Đã có hơn 500+ học viên đang chờ bạn
                                    </p>

                                    <div className="mt-6 relative group">
                                        <div className="absolute -inset-2 bg-primary/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                                        <img
                                            src="/zoom/group%20k3.png"
                                            alt="Zalo Group QR"
                                            className="relative w-48 md:w-56 rounded-xl shadow-md border-4 border-white"
                                        />
                                    </div>
                                    <p className="mt-2 text-primary font-bold text-sm animate-pulse">
                                        Hoặc quét mã QR tại đây
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 2: Coffee Sponsorship - 2 Cols */}
                    <div className="space-y-8">
                        <div className="text-center">
                            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-text-main">
                                NẾU BẠN MỜI TÔI 1 LY CAFE 199K? ☕️
                            </h2>
                            <p className="text-text-muted text-lg max-w-2xl mx-auto">
                                Để tôi tặng thêm bạn:
                                Thì hãy chuyển khoản cho tôi 199.000đ theo thông tin bên dưới với nội dung chuyển khoản là số điện thoại của bạn
                                Sau khi chuyển khoản xong bạn hãy gửi ảnh chuyển khoản thành công vào nhóm <a className='text-blue-500 font-bold' href="https://zalo.me/g/ozdngh272" target="_blank" rel="noopener noreferrer">Zalo TẠI ĐÂY</a>
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-12 gap-8 items-start">

                            {/* Left: The Offer */}
                            <div className="lg:col-span-5 relative order-1">
                                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-xl opacity-50"></div>
                                <div className="relative p-8 bg-gradient-to-br from-bg-surface via-bg-main to-bg-surface border-2 border-primary/30 rounded-2xl shadow-2xl h-full flex flex-col">

                                    <div className="text-center mb-8 pb-8 border-b border-border">
                                        <div className="text-5xl font-bold text-primary font-heading mb-2">
                                            199.000đ
                                        </div>
                                        <div className="text-text-main font-bold text-lg uppercase tracking-wide">
                                            (1 Ly Cafe)
                                        </div>
                                    </div>

                                    <div className="space-y-6 flex-1">
                                        <p className="font-bold text-lg text-text-main">
                                            Bạn sẽ nhận được ngay:
                                        </p>
                                        <ul className="space-y-4">
                                            <li className="flex gap-4">
                                                <div className="bg-primary/10 p-2 rounded-lg h-fit shrink-0">
                                                    <Video className="h-5 w-5 text-primary" />
                                                </div>
                                                <div>
                                                    <strong className="text-text-main block">1 Buổi Zoom 1-1</strong>
                                                    <span className="text-text-muted text-sm">Tư vấn riêng chiến lược AI cho doanh nghiệp của bạn.</span>
                                                </div>
                                            </li>
                                            <li className="flex gap-4">
                                                <div className="bg-primary/10 p-2 rounded-lg h-fit shrink-0">
                                                    <BookOpen className="h-5 w-5 text-primary" />
                                                </div>
                                                <div>
                                                    <strong className="text-text-main block">Full Tài Liệu & Video</strong>
                                                    <span className="text-text-muted text-sm">Sở hữu trọn đời video ghi hình khóa học.</span>
                                                </div>
                                            </li>
                                            <li className="flex gap-4">
                                                <div className="bg-accent/10 p-2 rounded-lg h-fit shrink-0">
                                                    <Zap className="h-5 w-5 text-accent" />
                                                </div>
                                                <div>
                                                    <strong className="text-accent block">APP BimSpeed AI Pro</strong>
                                                    <span className="text-text-muted text-sm">Công cụ render đột phá giúp X10 hiệu suất.</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-border">
                                        <div className="bg-primary/10 rounded-lg p-3 text-center">
                                            <span className="text-primary font-bold text-sm uppercase tracking-wider">
                                                🔥 Chỉ còn 6 suất duy nhất
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Payment Info */}
                            <div className="lg:col-span-7 relative order-2">
                                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                                    <div className="bg-gradient-to-r from-gray-50 to-white border-b border-gray-100 p-6 md:p-8 text-center">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">Thông Tin Chuyển Khoản</h3>
                                        <p className="text-gray-500 text-sm">Quét mã QR hoặc chuyển khoản thủ công bên dưới</p>
                                    </div>

                                    <div className="p-6 md:p-8">
                                        <div className="flex flex-col md:flex-row gap-8 items-center">
                                            {/* QR Code */}
                                            <div className="shrink-0 relative group">
                                                <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg group-hover:blur-xl transition-all opacity-0 group-hover:opacity-100"></div>
                                                <img
                                                    src="/qr hien vcb.png"
                                                    alt="QR Vietcombank"
                                                    className="relative w-48 md:w-56 rounded-xl shadow-md border border-gray-200"
                                                />
                                            </div>

                                            {/* Bank Details */}
                                            <div className="flex-1 w-full space-y-4">
                                                <div className="bg-gray-50 rounded-xl p-4 space-y-3 border border-gray-100">

                                                    <div className="flex justify-between items-center text-sm md:text-base">
                                                        <span className="text-gray-500">Ngân hàng</span>
                                                        <span className="font-bold text-gray-800">Vietcombank</span>
                                                    </div>

                                                    <div className="h-px bg-gray-200"></div>

                                                    <div className="flex justify-between items-center text-sm md:text-base">
                                                        <span className="text-gray-500">Số tài khoản</span>
                                                        <div className="flex items-center gap-2">
                                                            <span className="font-bold text-primary text-xl">1031100348</span>
                                                            <button
                                                                onClick={handleCopy}
                                                                className="p-1.5 hover:bg-white rounded-md transition-colors text-gray-400 hover:text-primary relative"
                                                                title="Sao chép"
                                                            >
                                                                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                                                                {copied && (
                                                                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-black text-white px-2 py-1 rounded shadow-lg whitespace-nowrap">
                                                                        Đã chép!
                                                                    </span>
                                                                )}
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="h-px bg-gray-200"></div>

                                                    <div className="flex justify-between items-center text-sm md:text-base">
                                                        <span className="text-gray-500">Chủ tài khoản</span>
                                                        <span className="font-bold text-gray-800 uppercase">Tran Thi Hien</span>
                                                    </div>
                                                </div>

                                                <div className="bg-accent/5 rounded-xl p-4 border border-accent/20">
                                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                                                        <span className="text-gray-600 font-medium">Nội dung CK:</span>
                                                        <span className="font-bold text-accent text-lg">SDT CUA BAN</span>
                                                    </div>
                                                    <p className="text-xs text-accent/80 mt-1 text-center md:text-right">
                                                        *Thay bằng số điện thoại đăng ký của bạn
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-8 text-center space-y-4">
                                            <button className="text-primary font-bold hover:underline inline-flex items-center gap-2 group" onClick={() => window.open('https://zalo.me/g/ozdngh272', '_blank')}>
                                                <span>Đã chuyển khoản? Xác nhận tại Zalo</span>
                                                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                            </button>
                                            <p className="text-sm text-gray-400">
                                                Sau đó chúng tôi sẽ liên hệ lại với bạn theo số điện thoại bạn đã ghi trong nội dung chuyển khoản. Hoặc bạn có thể gọi cho chúng tôi theo hotline   <span className="font-medium text-gray-600">0936340576</span> (Ms Hiên) để xác nhận.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
