import React, { useState, useEffect } from 'react';
import { Award, Star, User, Check, Facebook, Youtube, Linkedin, Music } from 'lucide-react';

function InstructorHeaderFree() {
    return (
        <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 rounded-full bg-gradient-to-r from-primary/15 via-primary/10 to-secondary/15 border border-primary/30 backdrop-blur-sm">
                <div className="relative">
                    <div className="absolute inset-0 bg-primary rounded-full blur-sm animate-pulse"></div>
                    <Star className="h-4 w-4 text-primary relative z-10 fill-current" />
                </div>
                <span className="text-sm font-bold tracking-wider text-primary uppercase font-sans">
                    Giảng viên là ai?
                </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Người Dẫn Dắt Hành Trình
            </h2>
            <p className="text-text-muted text-lg font-sans max-w-2xl mx-auto">
                Học từ người đã giúp <span className="font-bold text-text-main">hàng nghìn kiến trúc sư</span> chuyển đổi số với BIM và AI
            </p>
        </div>
    );
}

function InstructorProfileImageFree() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    const images = [
        '/profile/hoang 1.png',
        '/profile/sj1.jpeg',
        '/profile/sj2.jpeg'
    ];

    // Auto slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => 
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="w-full lg:w-2/5">
            <div className="relative group">
                {/* Animated Border Gradient */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-2xl opacity-75 group-hover:opacity-100 blur-sm group-hover:blur transition duration-500 animate-pulse"></div>

                {/* Image Container with Glassmorphism */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-bg-muted/50 to-secondary/20 backdrop-blur-xl border border-border">
                    {/* Image Slider */}
                    {images.map((image, index) => (
                        <img 
                            key={index}
                            src={image} 
                            alt={`Tony Hoang - Founder BimSpeed ${index + 1}`}
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                        />
                    ))}

                    {/* Shine Effect on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Slide Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    index === currentImageIndex 
                                        ? 'bg-white w-6' 
                                        : 'bg-white/50 hover:bg-white/75'
                                }`}
                                aria-label={`Slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl bg-gradient-to-r from-primary to-accent shadow-lg shadow-primary/30 border border-primary/30 backdrop-blur-sm transform group-hover:scale-110 transition-transform duration-300">
                    <div className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-white" />
                        <span className="text-xs font-bold text-white font-sans">BimSpeed Founder</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

function InstructorStatCardFree({ icon: Icon, value, label, colorClass, shadowClass }) {
    return (
        <div className={`group relative p-6 rounded-xl bg-gradient-to-br ${colorClass} backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg ${shadowClass} hover:-translate-y-1`}>
            <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg bg-primary/10 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                    <div className="text-3xl font-bold text-text-main font-heading mb-1">{value}</div>
                    <div className="text-sm text-text-muted font-sans">{label}</div>
                </div>
            </div>
        </div>
    );
}

function InstructorStatsFree() {
    const stats = [
        {
            icon: User,
            value: "8000+",
            label: "Users BimSpeed",
            colorClass: "from-primary/20 to-primary/10",
            shadowClass: "shadow-primary/20",
            borderClass: "border-primary/30"
        },
        {
            icon: Check,
            value: "Hàng trăm",
            label: "Doanh nghiệp lớn",
            colorClass: "from-accent/20 to-accent/10",
            shadowClass: "shadow-accent/20",
            borderClass: "border-accent/30"
        },
        {
            icon: Award,
            value: "Top",
            label: "BIM AI Expert VN",
            colorClass: "from-secondary/30 to-secondary/15",
            shadowClass: "shadow-secondary/20",
            borderClass: "border-secondary/30"
        },
        {
            icon: Star,
            value: "10+ năm",
            label: "Kinh nghiệm",
            colorClass: "from-primary/15 to-accent/10",
            shadowClass: "shadow-primary/15",
            borderClass: "border-primary/20"
        }
    ];

    return (
        <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
                <InstructorStatCardFree
                    key={index}
                    icon={stat.icon}
                    value={stat.value}
                    label={stat.label}
                    colorClass={stat.colorClass}
                    shadowClass={stat.shadowClass}
                />
            ))}
        </div>
    );
}

function InstructorContentFree() {
    const socialLinks = [
        {
            name: 'Facebook',
            icon: Facebook,
            url: 'https://www.facebook.com/tonyhoang.bimspeed',
            color: 'hover:text-blue-600'
        },
        {
            name: 'TikTok',
            icon: Music,
            url: 'https://www.tiktok.com/@bimspeed',
            color: 'hover:text-black'
        },
        {
            name: 'LinkedIn',
            icon: Linkedin,
            url: 'https://www.linkedin.com/in/tonyhoang-bimspeed',
            color: 'hover:text-blue-700'
        },
        {
            name: 'YouTube',
            icon: Youtube,
            url: 'https://www.youtube.com/@bimspeed',
            color: 'hover:text-red-600'
        }
    ];

    return (
        <div className="w-full lg:w-3/5">
            {/* Name & Title */}
            <div className="mb-8">
                <h3 className="text-4xl md:text-5xl font-bold font-heading mb-3 text-text-main">
                    Tony Hoang
                </h3>
                <div className="flex items-center gap-3 mb-4">
                    <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                    <p className="text-xl text-text-main font-heading">Founder BimSpeed</p>
                </div>
                {/* Social Media Links */}
                <div className="flex items-center gap-4">
                    {socialLinks.map((social) => {
                        const Icon = social.icon;
                        return (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center justify-center w-10 h-10 rounded-lg bg-bg-surface border border-border text-text-muted transition-all duration-300 hover:border-primary hover:shadow-lg hover:-translate-y-1 ${social.color}`}
                                aria-label={social.name}
                            >
                                <Icon className="h-5 w-5" />
                            </a>
                        );
                    })}
                </div>
            </div>

            {/* Description */}
            <div className="space-y-5 text-text-muted font-sans leading-relaxed mb-10">
                <p className="text-lg">
                    Founder BimSpeed, nền tảng đã giúp hơn <span className="font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">8000+ kiến trúc sư, kỹ sư xây dựng</span> tự động hoá BIM cho kiến trúc, kết cấu, và điện nước.
                </p>
                <p className="text-lg">
                    Đào tạo <span className="font-bold text-accent">hàng chục doanh nghiệp lớn</span> về giải pháp BIM và AI trong xây dựng, mang đến sự chuyển đổi số thực sự cho ngành.
                </p>
                <div className="p-5 border-l-4 border-primary bg-gradient-to-r from-primary/10 to-transparent rounded-r-lg">
                    <p className="italic text-text-main text-lg">
                        "Công ty BimSpeed chuyên về giải pháp BIM AI cho lĩnh vực xây dựng tại Việt Nam."
                    </p>
                </div>
            </div>

            {/* Stats Grid */}
            <InstructorStatsFree />
        </div>
    );
}

export function InstructorFree() {
    return (
        <section id="instructor" className="relative py-20 md:py-32 border-b border-border overflow-hidden bg-bg-surface">
            {/* Gradient Background with Claude colors */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-bg-main/50 to-secondary/5"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/8 via-transparent to-transparent"></div>

            {/* Decorative Elements */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Section Header */}
                <InstructorHeaderFree />

                {/* Main Content */}
                <div className="flex flex-col lg:flex-row gap-12 items-center max-w-6xl mx-auto">
                    <InstructorProfileImageFree />
                    <InstructorContentFree />
                </div>
            </div>
        </section>
    );
}

