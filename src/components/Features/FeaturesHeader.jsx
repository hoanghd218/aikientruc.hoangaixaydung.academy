import React from 'react';

export function FeaturesHeader() {
    return (
        <div className="text-center mb-12 max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    Bạn có đang gặp phải các nỗi đau này
                </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-text-main mb-6 leading-tight">
                Kỷ nguyên <span className="line-through decoration-primary decoration-2">"tay to sài phần mềm cả ngày"</span> đã kết thúc rồi bạn ạ.
            </h2>

            {/* Description */}
            <p className="text-text-muted text-lg md:text-xl font-sans leading-relaxed">
                Bạn có đang mất hàng giờ đồng hồ để dựng hình, render, đổi thử các phương án? <br />
                Trong khi bạn đang làm, đối thủ dùng AI – đã giúp xong <span className="font-bold text-text-main">3 phương án demo</span> và ký hợp đồng.
            </p>
        </div>
    );
}

