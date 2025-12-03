import React from 'react';
import { Menu, Sparkles } from 'lucide-react';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-bg-surface/80 backdrop-blur-md supports-[backdrop-filter]:bg-bg-surface/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <div className="flex items-center gap-2">
                    <div className="hidden md:flex h-8 w-8 rounded bg-primary items-center justify-center text-white font-bold font-heading shadow-sm">
                        B
                    </div>
                    <span className="text-lg font-bold font-heading tracking-tight text-text-main">KHOÁ HỌC LÀM CHỦ AI KIẾN TRÚC NỘI THẤT 5 NGÀY</span>
                </div>

                <nav className="hidden md:flex items-center gap-6 text-sm font-medium font-sans text-text-muted">
                    <a href="#features" className="hover:text-primary transition-colors">Lợi ích</a>
                    <a href="#curriculum" className="hover:text-primary transition-colors">Nội dung</a>
                    <a href="#instructor" className="hover:text-primary transition-colors">Giảng viên</a>
                    <a href="#pricing" className="hover:text-primary transition-colors">Học phí</a>
                </nav>

                <div className="flex items-center gap-2 md:gap-4">
                    <button 
                        onClick={() => {
                            const pricingSection = document.getElementById('pricing');
                            pricingSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }}
                        className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg bg-primary px-3 md:px-4 py-2 text-xs md:text-sm font-bold text-white shadow transition-all hover:bg-primary/90 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 font-sans"
                    >
                        <Sparkles className="h-3.5 w-3.5 md:h-4 md:w-4" />
                        <span className="hidden sm:inline">Đăng ký ngay</span>
                        <span className="sm:hidden">Đăng ký</span>
                    </button>
                    <button className="md:hidden p-2 text-text-main">
                        <Menu className="h-6 w-6" />
                    </button>
                </div>
            </div>
        </header>
    );
}
