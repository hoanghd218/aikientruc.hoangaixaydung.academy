import React from 'react';
import { InstructorStats } from './InstructorStats';

export function InstructorContent() {
    return (
        <div className="w-full lg:w-3/5">
            {/* Name & Title */}
            <div className="mb-8">
                <h3 className="text-4xl md:text-5xl font-bold font-heading mb-3 text-text-main">
                    Tony Hoang
                </h3>
                <div className="flex items-center gap-3 mb-6">
                    <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                    <p className="text-xl text-text-main font-heading">Founder BimSpeed</p>
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
            <InstructorStats />
        </div>
    );
}

