import React from 'react';
import { Store, Sparkles } from 'lucide-react';

export default function HeaderMaterialStore() {
    const handleScrollToPricing = () => {
        const pricingSection = document.getElementById('pricing');
        pricingSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-bg-surface/95 backdrop-blur-md supports-[backdrop-filter]:bg-bg-surface/80">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <a href="/ai-cho-chu-cua-hang-vat-lieu-gach" className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                        <Store className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-heading font-bold text-text-main text-lg leading-tight">BimSpeed AI</span>
                        <span className="text-xs text-text-muted">Cho Cửa Hàng Vật Liệu</span>
                    </div>
                </a>

                <nav className="hidden md:flex items-center gap-6">
                    <a href="#solution" className="text-sm font-medium text-text-muted hover:text-primary transition-colors">
                        Giải pháp
                    </a>
                    <a href="#pricing" className="text-sm font-medium text-text-muted hover:text-primary transition-colors">
                        Đăng ký
                    </a>
                </nav>

                <button
                    onClick={handleScrollToPricing}
                    className="group inline-flex h-10 items-center justify-center rounded-lg bg-gradient-to-r from-primary to-accent px-4 text-sm font-bold text-white shadow-lg shadow-primary/30 transition-all hover:shadow-xl hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary font-sans relative overflow-hidden"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        <Sparkles className="h-4 w-4" />
                        Dùng Thử Miễn Phí
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
            </div>
        </header>
    );
}
