import React, { useEffect } from 'react';
import { Check, Sparkles, Users, Gift, Calendar, Clock, MessageCircle, ArrowRight, Star, Zap, BookOpen, Video, Copy } from 'lucide-react';

export default function ThankYouFreePage() {
    useEffect(() => {
        // Scroll to top when page loads
        window.scrollTo(0, 0);
    }, []);

    const nextSteps = [
        {
            icon: <MessageCircle className="h-6 w-6" />,
            title: "Bước 1: Tham gia nhóm Zalo",
            description: "Nhấn vào nút bên dưới để tham gia nhóm học viên. Đây là nơi bạn nhận thông báo lịch học và trao đổi với giảng viên.",
            highlight: true
        },
        {
            icon: <Calendar className="h-6 w-6" />,
            title: "Bước 2: Chờ thông báo lịch học",
            description: "Chúng tôi sẽ gửi thông tin chi tiết về lịch học, link Zoom và tài liệu qua nhóm Zalo trong vòng 24h.",
            highlight: false
        },
        {
            icon: <Video className="h-6 w-6" />,
            title: "Bước 3: Tham gia buổi học đầu tiên",
            description: "Chuẩn bị sẵn máy tính và tinh thần sẵn sàng để bắt đầu hành trình làm chủ AI Kiến Trúc!",
            highlight: false
        }
    ];

    const whatYouGet = [
        {
            icon: <Video className="h-5 w-5" />,
            text: "2 buổi học LIVE với giảng viên"
        },
        {
            icon: <BookOpen className="h-5 w-5" />,
            text: "Tài liệu và Prompt AI chuyên nghiệp"
        },
        {
            icon: <Users className="h-5 w-5" />,
            text: "Cộng đồng học viên hỗ trợ 24/7"
        },
        {
            icon: <Gift className="h-5 w-5" />,
            text: "Quà tặng APP AI miễn phí trọn đời"
        }
    ];

    const handleJoinZalo = () => {
        // Open Zalo group in new tab
        window.open('https://zalo.me/g/ghjisy452', '_blank');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-bg-main via-bg-surface to-bg-main font-sans text-text-main">
            {/* Animated background elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
                {/* Success Icon & Message */}
                <div className="text-center mb-12 animate-fade-in">
                    {/* Success checkmark animation */}
                    <div className="inline-flex items-center justify-center mb-6">
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
                            <div className="relative bg-gradient-to-br from-primary to-accent rounded-full p-6 shadow-2xl">
                                <Check className="h-16 w-16 text-white stroke-[3]" />
                            </div>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                        🎉 Chúc Mừng Bạn!
                    </h1>
                    <p className="text-xl md:text-2xl text-text-main font-semibold mb-3">
                        Đăng ký thành công khóa học AI Kiến Trúc 2 buổi miễn phí
                    </p>
                    <p className="text-text-muted text-lg max-w-2xl mx-auto">
                        Hãy kiểm tra hòm thư email của bạn. Tôi vừa có gửi cho bạn 1 món quà là bộ video 30 ngày chia sẻ về phát triển kinh doanh cho các chủ doanh nghiệp ngành xây dựng.
                        Hãy coi như đây là 1 món quà làm quen. Nếu bạn không thấy trong hòm thư chính, hãy kiểm tra trong hòm thư rác và nhớ gắn dấu sao thư của tôi để tôi gửi cho bạn nhiều phần quà hơn ở các email sau. 🚀
                    </p>
                </div>


                {/* Main CTA - Join Zalo Group */}
                <div className="max-w-3xl mx-auto mb-12">
                    <div className="relative">
                        {/* Decorative background blur */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 rounded-3xl blur-2xl opacity-60 animate-pulse"></div>

                        <div className="relative bg-gradient-to-br from-primary via-accent to-primary p-[3px] rounded-2xl shadow-2xl">
                            <div className="bg-bg-surface rounded-2xl p-8 md:p-10">
                                <div className="text-center mb-8">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-4">
                                        <Star className="h-4 w-4 text-primary" />
                                        <span className="text-sm font-bold text-primary uppercase tracking-wider">
                                            Nếu bạn đăng ký miễn phí
                                        </span>
                                    </div>
                                    <p className=" text-lg mb-6">
                                        Hãy Tham gia nhóm Zalo ở bên dưới để xác nhận tham gia cũng như nhận thông báo chi tiết về chương trình Zoom trực tiếp trong 2n ngày 13,14/12/2025 vào lúc 20h-22h này nhé.
                                    </p>
                                </div>

                                {/* Large CTA Button */}
                                <button
                                    onClick={handleJoinZalo}
                                    className="w-full py-6 bg-gradient-to-r from-primary via-accent to-primary text-white font-bold rounded-xl text-xl hover:shadow-2xl transition-all shadow-lg hover:scale-105 relative overflow-hidden group"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-3">
                                        <MessageCircle className="h-6 w-6" />
                                        Tham Gia Nhóm Zalo Ngay
                                        <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
                                    </span>
                                    {/* Shine effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Coffee Sponsorship Section */}
                <div className="max-w-3xl mx-auto mb-20">
                    <div className="text-center mb-12">
                        <div className="inline-block mx-auto bg-gradient-to-r from-primary/10 to-accent/10 px-6 py-2 rounded-full border border-primary/20 mb-4">
                            <span className="text-primary font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                                <Sparkles className="h-4 w-4" />
                                Ưu đãi đặc biệt
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-text-main">
                            Mời tôi 1 ly Cafe? ☕️
                        </h2>
                        <p className="text-text-muted text-lg max-w-2xl mx-auto">
                            Đây là sự úng hộ tuyệt vời để tôi có thêm động lực chia sẻ nhiều hơn.
                        </p>
                    </div>

                    <div className="relative order-1 lg:order-1 mb-12">
                        {/* Decorative blur for left card */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-xl opacity-50"></div>

                        <div className="relative p-8 md:p-10 bg-gradient-to-br from-bg-surface via-bg-main to-bg-surface border-2 border-primary/30 rounded-2xl shadow-2xl h-full flex flex-col">
                            <div className="text-center mb-8">
                                <div className="text-text-muted text-xl md:text-2xl font-bold line-through mb-2 font-heading">
                                    2.868.000Đ
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-heading uppercase">
                                    Chỉ còn 0đ
                                </h3>
                                <h4 className="text-text-main text-xl md:text-2xl font-bold font-heading mb-2">
                                    Hoặc Mời Cafe Tôi
                                </h4>
                                <div className="text-4xl md:text-5xl font-bold text-primary font-heading">
                                    199.000đ
                                </div>
                            </div>

                            <div className="space-y-4 mb-8 flex-1">
                                <p className="font-bold text-text-main text-lg border-b border-border pb-2">
                                    Tôi tặng thêm bạn:
                                </p>

                                <ul className="space-y-4 text-text-secondary font-sans">
                                    <li className="flex gap-3">
                                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                        <span>
                                            <strong className="text-text-main">1 buổi Zoom 1-1</strong> trước khoá học để tư vấn riêng cho doanh nghiệp của bạn, bạn có thể hỏi tôi bất cứ điều gì về số hoá, AI hoá doanh nghiệp của bạn.
                                        </span>
                                    </li>
                                    <li className="flex gap-3">
                                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                        <span>
                                            Toàn bộ video ghi hình 2 buổi zoom và tài liệu chương trình.
                                        </span>
                                    </li>
                                    <li className="flex gap-3">
                                        <Sparkles className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                        <span>
                                            Đặc biệt: <strong className="text-accent">"APP BimSpeed AI Pro"</strong> cho render ảnh video kiến trúc nội thất giúp bạn tạo ra bước nhảy đột phá doanh số 10X
                                        </span>
                                    </li>
                                </ul>


                            </div>

                            <div className="inline-block  mx-auto bg-primary/10 px-6 rounded-lg">
                                <p className="text-primary font-bold text-lg mb-1 mx-auto">6 SUẤT DUY NHẤT</p>
                            </div>


                        </div>
                    </div>

                    {/* Payment Instructions & Info */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
                        <p className="text-lg text-center text-text-main font-medium mb-8">
                            Thì hãy chuyển khoản cho tôi <span className="text-primary font-bold text-xl">199.000đ</span> theo thông tin bên dưới với nội dung chuyển khoản là <span className="font-bold">số điện thoại của bạn</span>
                        </p>

                        {/* Bank Details Box */}
                        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
                            <img
                                src="/qr hien vcb.png"
                                alt="QR Code"
                                className="h-[500px] object-contain rounded-lg shadow-sm bg-white"
                            />
                            <div className="space-y-3 w-full max-w-xs">
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="text-gray-600">Ngân hàng:</span>
                                    <span className="font-bold">Vietcombank</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="text-gray-600">Số tài khoản:</span>
                                    <div className="flex items-center gap-2">
                                        <span className="font-bold text-primary text-lg">1031100348</span>
                                        <button
                                            onClick={() => {
                                                navigator.clipboard.writeText('1031100348');
                                            }}
                                            className="text-gray-400 hover:text-primary transition-colors"
                                            title="Sao chép số tài khoản"
                                        >
                                            <Copy className="h-4 w-4" />
                                        </button>
                                    </div>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="text-gray-600">Chủ tài khoản:</span>
                                    <span className="font-bold uppercase">Tran Thi Hien</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Nội dung:</span>
                                    <span className="font-bold text-accent">SDT CUA BAN</span>
                                </div>

                                <div className="text-center space-y-4 mt-10">
                                    <p className="text-lg">
                                        Sau khi chuyển khoản xong bạn hãy gửi ảnh chuyển khoản thành công vào nhóm Zalo <a href="https://zalo.me/g/ghjisy452" target="_blank" rel="noopener noreferrer" className="font-bold text-primary hover:underline inline-flex items-center">TẠI ĐÂY <ArrowRight className="h-4 w-4 ml-1" /></a>
                                    </p>
                                    <p className="text-text-muted text-sm px-4">
                                        Sau đó chúng tôi sẽ liên hệ lại với bạn theo số điện thoại bạn đã ghi trong nội dung chuyển khoản. Hoặc bạn có thể gọi cho chúng tôi theo hotline <span className="font-bold text-text-main">0936340576</span> (Gặp Ms Hiên) để xác nhận.
                                    </p>
                                </div>
                            </div>


                        </div>


                    </div>
                </div>





            </div>
        </div>
    );
}

