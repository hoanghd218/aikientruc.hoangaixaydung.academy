import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Sparkles, Clock, Users, BookOpen, Video, Gift, Smartphone, MapPin, Headphones, Heart, User, Mail, Phone } from 'lucide-react';

export default function PricingFree() {
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
            // Call API - Sử dụng webhook cho khóa FREE 2 ngày
            const response = await fetch('https://n8n.bimspeed.net/webhook/6135553c-02ef-4ad6-b05a-c1b431c4f182', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fullName: formData.name,
                    phone: formData.phone,
                    email: formData.email,
                    courseType: 'FREE_2_SESSIONS', // Đánh dấu là khóa miễn phí
                    submittedAt: new Date().toISOString()
                })
            });

            if (!response.ok) {
                throw new Error('Đăng ký thất bại');
            }

            // Redirect to thank you page
            navigate('/cam-on-dang-ky-khoa-free');
        } catch (error) {
            console.error('Registration error:', error);
            alert('Có lỗi xảy ra khi đăng ký. Vui lòng thử lại!');
        } finally {
            setIsSubmitting(false);
        }
    };

    const benefits = [
        {
            icon: <Video className="h-4 w-4" />,
            title: "Module 1: Render ảnh ngoại thất",
            highlight: true
        },
        {
            icon: <Video className="h-4 w-4" />,
            title: "Module 2: Render ảnh nội thất",
            highlight: true
        },
        {
            icon: <Sparkles className="h-4 w-4" />,
            title: "Bộ Prompt AI chuyên dụng cho 2 module",
            highlight: true
        },
        {
            icon: <BookOpen className="h-4 w-4" />,
            title: "Tài liệu hướng dẫn chi tiết, template, prompts, APP FREE"
        },
    ];

    return (
        <section id="pricing" className="py-16 md:py-24 bg-bg-surface border-b border-border">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
                        <Sparkles className="h-4 w-4 text-primary" />
                        <span className="text-xs font-bold uppercase tracking-wider text-primary">
                            100% Miễn Phí
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 text-text-main">
                        Bước cuối cùng rồi. Tôi đã sẵn sàng cho bạn rồi, bạn có dám hành động cùng tôi <span className="text-primary">không?</span>
                    </h2>
                    <p className="text-text-muted font-sans text-lg max-w-2xl mx-auto">
                        Trong 2 buổi zoom này tôi sẽ cho bạn thấy AI là 1 phần không thể thiếu ở xã hội hiện tại và cho ngành kiến trúc nội thất. <span className="font-bold text-accent">Bạn có muốn bị đào thải thì đừng học khoá này</span>
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
                                        🎁 100% Free
                                    </div>
                                </div>
                            </div>

                            {/* Pricing Header */}
                            <div className="text-center mb-10">
                                <h3 className="text-2xl font-bold text-text-main font-heading mb-4">
                                    2 Buổi Học AI Kiến Trúc Miễn Phí
                                </h3>
                                <div className="flex items-center justify-center gap-3 mb-3">
                                    <span className="text-5xl md:text-6xl font-bold text-primary font-heading">
                                        0đ
                                    </span>
                                </div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full">
                                    <Sparkles className="h-4 w-4 text-accent" />
                                    <span className="text-sm font-bold text-accent font-sans">
                                        Miễn phí 100% - Không có chi phí ẩn!
                                    </span>
                                </div>
                            </div>

                            {/* Benefits List */}
                            <div className="space-y-2 mb-8">
                                <h4 className="text-base font-bold text-text-main font-heading mb-3 flex items-center gap-2">
                                    <Gift className="h-4 w-4 text-primary" />
                                    Bạn sẽ làm được ngay:
                                </h4>
                                {benefits.map((item, i) => (
                                    <div
                                        key={i}
                                        className={`flex items-center gap-3 p-2.5 rounded-lg transition-all relative ${item.highlight
                                                ? 'bg-primary/5 border border-primary/20'
                                                : 'bg-bg-muted/50 border border-border'
                                            }`}
                                    >
                                        <div className={`rounded-md p-1.5 ${item.highlight
                                                ? 'bg-primary/15 text-primary'
                                                : 'bg-secondary/15 text-secondary'
                                            }`}>
                                            {item.icon}
                                        </div>
                                        <div className="flex-1">
                                            <span className={`text-sm font-sans ${item.highlight
                                                    ? 'font-bold text-text-main'
                                                    : 'font-medium text-text-main'
                                                }`}>
                                                {item.title}
                                            </span>
                                        </div>
                                        <Check className={`h-4 w-4 shrink-0 ${item.highlight ? 'text-primary' : 'text-secondary'
                                            }`} />
                                    </div>
                                ))}
                            </div>

                            {/* Registration Form */}
                            <div className="mb-6 space-y-4">
                                <h4 className="text-lg font-bold text-text-main font-heading flex items-center gap-2">
                                    <Sparkles className="h-5 w-5 text-primary" />
                                    Thông tin đăng ký miễn phí
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
                                    {isSubmitting ? 'Đang đăng ký...' : 'Đăng Ký Miễn Phí Ngay'}
                                </span>
                                {/* Shine effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                            </button>

                            {/* Additional Note */}
                            <p className="text-center text-xs text-text-muted mt-4">
                                Bằng việc đăng ký, bạn đồng ý nhận thông tin từ BimSpeed AI
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

