import React, { useEffect } from 'react';
import { Check, Sparkles, Users, Gift, Calendar, Clock, MessageCircle, ArrowRight, Star, Zap, BookOpen, Video } from 'lucide-react';

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
                        Bạn đã có quyết định đúng đắn trong việc nắm bắt công nghệ AI. 
                        Chúng tôi rất vui khi được đồng hành cùng bạn! 🚀
                    </p>
                </div>

                {/* What You Get - Quick Summary */}
                <div className="max-w-4xl mx-auto mb-12">
                    <div className="bg-gradient-to-br from-bg-surface to-bg-main border-2 border-primary/20 rounded-2xl p-8 shadow-xl">
                        <h2 className="text-2xl font-bold font-heading mb-6 text-center flex items-center justify-center gap-3">
                            <Sparkles className="h-6 w-6 text-primary" />
                            Bạn Sẽ Nhận Được
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {whatYouGet.map((item, index) => (
                                <div key={index} className="flex items-center gap-3 p-4 bg-bg-muted/50 rounded-xl border border-border hover:border-primary/30 transition-all">
                                    <div className="flex-shrink-0 bg-primary/15 text-primary rounded-lg p-2">
                                        {item.icon}
                                    </div>
                                    <span className="font-medium text-text-main">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
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
                                            Bước quan trọng nhất
                                        </span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-text-main">
                                        Tham gia nhóm Zalo <span className="text-primary">ngay bây giờ!</span>
                                    </h2>
                                    <p className="text-text-muted text-lg mb-6">
                                        Đây là nơi chúng tôi thông báo lịch học, chia sẻ tài liệu và hỗ trợ bạn trong suốt khóa học.
                                        <span className="block mt-2 font-semibold text-accent">
                                            ⚠️ Lưu ý: Nếu không tham gia nhóm, bạn sẽ bỏ lỡ thông tin quan trọng!
                                        </span>
                                    </p>
                                </div>

                                {/* Large CTA Button */}
                                <button
                                    onClick={handleJoinZalo}
                                    className="w-full py-6 bg-gradient-to-r from-primary via-accent to-primary text-white font-bold rounded-xl text-xl hover:shadow-2xl transition-all shadow-lg hover:scale-105 relative overflow-hidden group"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-3">
                                        <MessageCircle className="h-6 w-6" />
                                        Tham Gia Nhóm Zalo Học Viên
                                        <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
                                    </span>
                                    {/* Shine effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                                </button>

                                <div className="mt-4 flex items-center justify-center gap-2 text-sm text-text-muted">
                                    <Users className="h-4 w-4" />
                                    <span>Hơn 500+ học viên đã tham gia</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Next Steps */}
                <div className="max-w-4xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold font-heading mb-8 text-center flex items-center justify-center gap-3">
                        <Zap className="h-7 w-7 text-accent" />
                        Các Bước Tiếp Theo
                    </h2>
                    <div className="space-y-6">
                        {nextSteps.map((step, index) => (
                            <div
                                key={index}
                                className={`relative p-6 rounded-xl transition-all hover:scale-[1.02] ${
                                    step.highlight
                                        ? 'bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-2 border-primary/30 shadow-lg'
                                        : 'bg-bg-surface border border-border'
                                }`}
                            >
                                {step.highlight && (
                                    <div className="absolute -top-3 -right-3 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                        Quan trọng!
                                    </div>
                                )}
                                <div className="flex items-start gap-4">
                                    <div className={`flex-shrink-0 rounded-xl p-3 ${
                                        step.highlight
                                            ? 'bg-primary/20 text-primary'
                                            : 'bg-secondary/15 text-secondary'
                                    }`}>
                                        {step.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className={`text-xl font-bold font-heading mb-2 ${
                                            step.highlight ? 'text-primary' : 'text-text-main'
                                        }`}>
                                            {step.title}
                                        </h3>
                                        <p className="text-text-muted">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Additional Info Cards */}
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {/* Schedule Info */}
                    <div className="bg-bg-surface border border-border rounded-xl p-6 hover:border-primary/30 transition-all">
                        <div className="flex items-start gap-4">
                            <div className="bg-primary/15 text-primary rounded-lg p-3">
                                <Clock className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold font-heading mb-2 text-text-main">
                                    Lịch học linh hoạt
                                </h3>
                                <p className="text-text-muted text-sm">
                                    Thời gian học sẽ được thông báo chi tiết qua nhóm Zalo. Chúng tôi sẽ sắp xếp phù hợp với đa số học viên.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Support Info */}
                    <div className="bg-bg-surface border border-border rounded-xl p-6 hover:border-primary/30 transition-all">
                        <div className="flex items-start gap-4">
                            <div className="bg-accent/15 text-accent rounded-lg p-3">
                                <Users className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold font-heading mb-2 text-text-main">
                                    Hỗ trợ tận tình
                                </h3>
                                <p className="text-text-muted text-sm">
                                    Đội ngũ giảng viên và cộng đồng học viên sẵn sàng hỗ trợ bạn 24/7 trong nhóm Zalo.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Final CTA reminder */}
                <div className="max-w-2xl mx-auto text-center">
                    <div className="bg-gradient-to-r from-accent/10 via-primary/10 to-accent/10 border border-accent/30 rounded-xl p-6">
                        <p className="text-text-main font-semibold mb-4">
                            💡 <span className="text-accent font-bold">Chưa tham gia nhóm Zalo?</span> Đừng bỏ lỡ!
                        </p>
                        <button
                            onClick={handleJoinZalo}
                            className="px-8 py-3 bg-accent hover:bg-accent/90 text-white font-bold rounded-lg transition-all hover:scale-105 inline-flex items-center gap-2"
                        >
                            <MessageCircle className="h-5 w-5" />
                            Tham Gia Ngay
                            <ArrowRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                {/* Back to home link */}
                <div className="text-center mt-12">
                    <a
                        href="/"
                        className="text-text-muted hover:text-primary transition-colors inline-flex items-center gap-2 text-sm"
                    >
                        ← Quay lại trang chủ
                    </a>
                </div>
            </div>
        </div>
    );
}

