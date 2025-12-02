import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Sparkles, Clock, Users, BookOpen, Video, Gift, Smartphone, MapPin, Headphones, Heart, User, Mail, Phone } from 'lucide-react';

export default function Pricing() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleRegistration = async () => {
        // Validate form data
        if (!formData.name || !formData.email || !formData.phone) {
            alert('Vui lòng điền đầy đủ thông tin');
            return;
        }
        
        setIsSubmitting(true);
        
        try {
            // Call API
            const response = await fetch('https://n8n.bimspeed.net/webhook/96f3480a-e078-4b76-813a-79f08caedafc', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fullName: formData.name,
                    phone: formData.phone,
                    email: formData.email,
                    submittedAt: new Date().toISOString()
                })
            });

            if (!response.ok) {
                throw new Error('Đăng ký thất bại');
            }

            // Track Facebook Pixel event
            console.log("window.fbq",window.fbq)
            if (window.fbq) {

                window.fbq('track', 'Đăng ký');

                console.log("đăng ký")
            }

            // Navigate to payment page on success
            navigate('/mua-khoa-hoc-ai-kientruc', { state: formData });
        } catch (error) {
            console.error('Registration error:', error);
            alert('Có lỗi xảy ra khi đăng ký. Vui lòng thử lại!');
        } finally {
            setIsSubmitting(false);
        }
    };
    const benefits = [
        {
            icon: <Video className="h-5 w-5" />,
            title: "Truy cập trọn đời nội dung khóa học",
            highlight: true
        },
        {
            icon: <Smartphone className="h-5 w-5" />,
            title: "APP Render ảnh, video trọn đời (Giá thường 200k/tháng) - Update liên tục",
            highlight: true,
            badge: "Chỉ hôm nay"
        },
        {
            icon: <Sparkles className="h-5 w-5" />,
            title: "Bộ Prompt AI chuyên dụng cho kiến trúc",
            highlight: true
        },
        {
            icon: <BookOpen className="h-5 w-5" />,
            title: "Ebook hướng dẫn chi tiết"
        },
        {
            icon: <Users className="h-5 w-5" />,
            title: "Tham gia cộng đồng học viên kín"
        },
        {
            icon: <Clock className="h-5 w-5" />,
            title: "Zoom Live 2h mỗi tuần - Hỗ trợ trực tiếp",
            highlight: true
        },
        {
            icon: <Gift className="h-5 w-5" />,
            title: "Update kiến thức mới miễn phí"
        }
    ];

    return (
        <section id="pricing" className="py-16 md:py-24 bg-bg-surface border-b border-border">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
                        <Sparkles className="h-4 w-4 text-primary" />
                        <span className="text-xs font-bold uppercase tracking-wider text-primary">
                            Ưu Đãi Đặc Biệt
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 text-text-main">
                        Đầu Tư Cho <span className="text-primary">Tương Lai</span>
                    </h2>
                    <p className="text-text-muted font-sans text-lg max-w-2xl mx-auto">
                        Mức giá ưu đãi chỉ dành cho <span className="font-bold text-accent">50 người đăng ký sớm nhất</span>
                    </p>
                </div>

                <div className="max-w-2xl mx-auto">
                    <div className="relative">
                        {/* Decorative background blur */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-xl opacity-50"></div>
                        
                        {/* Main pricing card */}
                        <div className="relative p-8 md:p-10 bg-gradient-to-br from-bg-surface via-bg-main to-bg-surface border-2 border-primary/30 rounded-2xl shadow-2xl">
                            {/* Badge */}
                            <div className="absolute top-0 right-0 -mt-3 -mr-3">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-accent blur-md opacity-50"></div>
                                    <div className="relative bg-gradient-to-r from-accent to-primary text-white text-xs font-bold px-4 py-2 rounded-full font-sans uppercase tracking-wider shadow-lg">
                                        🔥 Best Value
                                    </div>
                                </div>
                            </div>

                            {/* Pricing Header */}
                            <div className="text-center mb-10">
                                <h3 className="text-2xl font-bold text-text-main font-heading mb-4">
                                    Trọn Bộ Khóa Học AI Architect
                                </h3>
                                <div className="flex items-center justify-center gap-3 mb-3">
                                    <span className="text-2xl md:text-3xl text-text-muted line-through font-sans decoration-primary/50">
                                        2.990.000đ
                                    </span>
                                    <span className="text-5xl md:text-6xl font-bold text-primary font-heading">
                                        799.000đ
                                    </span>
                                </div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full">
                                    <Sparkles className="h-4 w-4 text-accent" />
                                    <span className="text-sm font-bold text-accent font-sans">
                                        Tiết kiệm 75% - Chỉ hôm nay!
                                    </span>
                                </div>
                            </div>

                            {/* Benefits List */}
                            <div className="space-y-4 mb-10">
                                <h4 className="text-lg font-bold text-text-main font-heading mb-4 flex items-center gap-2">
                                    <Gift className="h-5 w-5 text-primary" />
                                    Bạn sẽ nhận được:
                                </h4>
                                {benefits.map((item, i) => (
                                    <div 
                                        key={i} 
                                        className={`flex items-start gap-4 p-4 rounded-xl transition-all relative ${
                                            item.highlight 
                                                ? 'bg-primary/5 border border-primary/20' 
                                                : 'bg-bg-muted/50 border border-border'
                                        }`}
                                    >
                                        {item.badge && (
                                            <div className="absolute -top-2 -right-2 bg-gradient-to-r from-accent to-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                                                {item.badge}
                                            </div>
                                        )}
                                        <div className={`mt-0.5 rounded-lg p-2 ${
                                            item.highlight 
                                                ? 'bg-primary/15 text-primary' 
                                                : 'bg-secondary/15 text-secondary'
                                        }`}>
                                            {item.icon}
                                        </div>
                                        <div className="flex-1">
                                            <span className={`font-sans ${
                                                item.highlight 
                                                    ? 'font-bold text-text-main' 
                                                    : 'font-medium text-text-main'
                                            }`}>
                                                {item.title}
                                            </span>
                                        </div>
                                        <Check className={`h-5 w-5 flex-shrink-0 ${
                                            item.highlight ? 'text-primary' : 'text-secondary'
                                        }`} />
                                    </div>
                                ))}
                            </div>

                            {/* Support Promise */}
                            <div className="mb-6 p-6 bg-gradient-to-br from-accent/10 via-primary/5 to-accent/10 border-2 border-accent/30 rounded-xl">
                                <div className="flex items-start gap-3 mb-4">
                                    <Heart className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                                    <div>
                                        <h5 className="font-bold text-text-main font-heading mb-2 text-lg">
                                            BimSpeed Cam Kết Hỗ Trợ Tận Tâm với bạn đồng hành cùng bạn 1 năm
                                        </h5>
                                        <p className="text-text-main font-sans text-sm leading-relaxed mb-3">
                                            Chúng tôi có <span className="font-bold text-primary">văn phòng ở Hà Nội</span>, có thể cầm tay chỉ việc các bạn 
                                            <span className="font-bold text-primary"> 1-1 trực tiếp</span>, hay <span className="font-bold text-primary">online</span>. 
                                            Hỗ trợ bạn dù là <span className="font-bold">ngày lễ</span>, hay <span className="font-bold">đêm hôm</span>, 
                                            có người online <span className="font-bold text-accent">đến 22h</span> phục vụ bạn.
                                        </p>
                                        <div className="flex items-center gap-2 text-accent font-bold text-sm">
                                            <span className="inline-block w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                                            Tất cả vì 1 Việt Nam vươn mình 🇻🇳
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Note */}
                            <div className="mb-6 p-4 bg-accent/10 border-2 border-accent/30 rounded-lg">
                                <p className="text-text-main font-sans text-sm leading-relaxed">
                                    <span className="font-bold text-accent">Bạn Còn Chần Chừ Gì Nữa?</span> Đầu tư vào trí tuệ không bao giờ là lãng phí.
                                </p>
                            </div>

                            {/* Registration Form */}
                            <div className="mb-6 space-y-4">
                                <h4 className="text-lg font-bold text-text-main font-heading flex items-center gap-2">
                                    <Sparkles className="h-5 w-5 text-primary" />
                                    Thông tin đăng ký
                                </h4>
                                
                                {/* Name Input */}
                                <div className="relative">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted">
                                        <User className="h-5 w-5" />
                                    </div>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Họ và tên"
                                        className="w-full pl-12 pr-4 py-3.5 bg-bg-surface border-2 border-border rounded-xl text-text-main placeholder:text-text-muted font-sans focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                    />
                                </div>

                                {/* Email Input */}
                                <div className="relative">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted">
                                        <Mail className="h-5 w-5" />
                                    </div>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Email của bạn"
                                        className="w-full pl-12 pr-4 py-3.5 bg-bg-surface border-2 border-border rounded-xl text-text-main placeholder:text-text-muted font-sans focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                    />
                                </div>

                                {/* Phone Input */}
                                <div className="relative">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted">
                                        <Phone className="h-5 w-5" />
                                    </div>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="Số điện thoại"
                                        className="w-full pl-12 pr-4 py-3.5 bg-bg-surface border-2 border-border rounded-xl text-text-main placeholder:text-text-muted font-sans focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                    />
                                </div>
                            </div>

                            {/* CTA Button */}
                            <button 
                                onClick={handleRegistration}
                                disabled={isSubmitting}
                                className="w-full py-5 bg-gradient-to-r from-primary via-accent to-primary text-white font-bold rounded-xl text-lg hover:shadow-2xl transition-all shadow-lg hover:-translate-y-1 font-sans relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    <Sparkles className="h-5 w-5" />
                                    {isSubmitting ? 'Đang đăng ký...' : 'Đăng Ký Ngay'}
                                </span>
                                {/* Shine effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
