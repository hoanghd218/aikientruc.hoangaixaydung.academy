import React from 'react';
import { Star } from 'lucide-react';

export function InstructorHeader() {
    return (
        <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 rounded-full bg-gradient-to-r from-primary/15 via-primary/10 to-secondary/15 border border-primary/30 backdrop-blur-sm">
                <div className="relative">
                    <div className="absolute inset-0 bg-primary rounded-full blur-sm animate-pulse"></div>
                    <Star className="h-4 w-4 text-primary relative z-10 fill-current" />
                </div>
                <span className="text-sm font-bold tracking-wider text-primary uppercase font-sans">
                    Giảng viên
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

