import React from 'react';
import { Phone, CheckCircle2, Home } from 'lucide-react';

export default function PaymentPage() {
    return (
        <div className="min-h-screen bg-bg-main py-20 px-4 flex items-center justify-center">
            <div className="container mx-auto max-w-2xl">
                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center border border-gray-100">
                    {/* Success Icon */}
                    <div className="flex justify-center mb-8">
                        <div className="bg-green-50 p-4 rounded-full">
                            <CheckCircle2 className="w-16 h-16 text-green-500" />
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        Cảm ơn bạn!
                    </h1>

                    <div className="space-y-6 mb-12">
                        <p className="text-xl md:text-2xl text-gray-700 font-sans leading-relaxed">
                            Đăng ký của bạn đã được nhận hệ thống ghi nhận thành công.
                        </p>

                        <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                            <p className="text-lg md:text-xl font-medium text-gray-800 font-sans italic">
                                "Bạn hãy để ý điện thoại trợ lý <span className="text-primary font-bold">Tony Hoang</span> sẽ gọi ngay cho bạn nhé."
                            </p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30 font-sans"
                        >
                            <Home className="w-5 h-5" />
                            Quay lại trang chủ
                        </a>

                        <div className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-bg-surface text-gray-700 font-bold rounded-xl border-2 border-border hover:bg-gray-50 transition-all font-sans">
                            <Phone className="w-5 h-5 text-primary" />
                            Hotline: 0936340576
                        </div>
                    </div>

                    {/* Footer decoration */}
                    <div className="mt-12 pt-8 border-t border-gray-50">
                        <p className="text-sm text-gray-400 font-sans">
                            Học viện AI Xây Dựng - Cùng bạn dẫn đầu xu hướng AI
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

