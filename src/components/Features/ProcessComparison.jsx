import React from 'react';
import { Clock, Star } from 'lucide-react';

export function ProcessComparison() {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
                {/* Old Process */}
                <div className="flex items-start gap-4 p-5 rounded-xl border border-secondary/40 bg-secondary/10">
                    <div className="flex-shrink-0 p-3 rounded-lg bg-secondary/20 text-secondary mt-0.5">
                        <Clock className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-text-main mb-2 font-heading">Quy trình Cũ</h3>
                        <p className="text-sm text-text-muted font-sans">
                            3-4 ngày/phương án. Sửa đổi lại kéo dài, khách hàng lo lắng về chờ đợi. Mất khách vì chậm.
                        </p>
                    </div>
                </div>

                {/* New AI Process */}
                <div className="flex items-start gap-4 p-5 rounded-xl border border-primary/40 bg-primary/10">
                    <div className="flex-shrink-0 p-3 rounded-lg bg-primary/20 text-primary mt-0.5">
                        <Star className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-text-main mb-2 font-heading">Quy trình AI Architect</h3>
                        <p className="text-sm text-text-main font-sans">
                            <span className="font-bold">30 phút/3-5 phương án.</span> Sửa trực tiếp lập tức. Chốt deal nóng. Khách hàng ấn tượng.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

