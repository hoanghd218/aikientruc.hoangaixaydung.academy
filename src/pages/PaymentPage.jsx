import React, { useState, useEffect } from 'react';
import { Phone, Copy, Check } from 'lucide-react';

export default function PaymentPage() {
    const [timeLeft, setTimeLeft] = useState(5 * 60); // 5 minutes in seconds
    const [copied, setCopied] = useState(false);

    // Countdown timer
    useEffect(() => {
        if (timeLeft <= 0) return;

        const timer = setInterval(() => {
            setTimeLeft(prev => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    const handleCopyAccountNumber = () => {
        navigator.clipboard.writeText('9866915868');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleConfirmPayment = () => {
        // Open Zalo link or redirect
        window.open('https://zalo.me/g/ynrgqw511', '_blank');
    };

    return (
        <div className="min-h-screen bg-bg-main py-12 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                    {/* Left Side - Bank Transfer Information */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        {/* Header */}
                        <div className="bg-gradient-to-r from-primary to-accent p-6">
                            <h2 className="text-white text-2xl font-bold font-heading flex items-center gap-3">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <rect x="3" y="4" width="18" height="16" rx="2" strokeWidth="2" />
                                    <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" />
                                </svg>
                                THÔNG TIN CHUYỂN KHOẢN
                            </h2>
                        </div>

                        {/* QR Code Section */}
                        <div className="p-8">
                            <div className="bg-white border-4 border-gray-100 rounded-2xl p-6 shadow-lg mb-6">
                                <div className="flex justify-center mb-4">
                                    <img
                                        src="https://img.vietqr.io/image/VCB-9866915868-compact2.png?amount=899000&addInfo=KHOAHOC%20AI%20KIENTRUC&accountName=TRAN%20VAN%20HOANG"
                                        alt="VietQR Code"
                                        className="w-64 h-64 object-contain"
                                    />
                                </div>

                                {/* Account Details */}
                                <div className="space-y-3 border-t pt-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-600 font-sans">Tên tài khoản</span>
                                        <span className="text-sm font-bold text-gray-900 font-sans">Tran Van Hoang</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-600 font-sans">Số tài khoản</span>
                                        <span className="text-sm font-bold text-gray-900 font-sans">9866915868</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-600 font-sans">Số tiền</span>
                                        <span className="text-lg font-bold text-primary font-sans">899.000 VND</span>
                                    </div>
                                </div>
                            </div>

                            {/* Bank Information */}
                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between items-center p-4 bg-bg-surface rounded-xl border border-border">
                                    <span className="text-gray-600 font-medium font-sans">Ngân Hàng</span>
                                    <div className="text-right">
                                        <div className="font-bold text-gray-900 font-heading">Vietcombank</div>
                                        <div className="text-sm text-gray-600 font-sans">Ngân Hàng Ngoại Thương Việt Nam</div>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center p-4 bg-bg-surface rounded-xl border border-border">
                                    <span className="text-gray-600 font-medium font-sans">Chủ Tài Khoản</span>
                                    <span className="font-bold text-gray-900 font-sans">TRAN VAN HOANG</span>
                                </div>

                                <div className="p-4 bg-bg-surface rounded-xl border border-border">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600 font-medium font-sans">Số Tài Khoản</span>
                                        <div className="flex items-center gap-2">
                                            <span className="font-bold text-primary font-mono text-lg">9866915868</span>
                                            <button
                                                onClick={handleCopyAccountNumber}
                                                className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
                                                title="Copy số tài khoản"
                                            >
                                                {copied ? (
                                                    <Check className="h-5 w-5 text-green-600" />
                                                ) : (
                                                    <Copy className="h-5 w-5 text-primary" />
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center p-4 bg-accent/10 rounded-xl border-2 border-accent/30">
                                    <span className="text-gray-900 font-bold font-sans">Số Tiền</span>
                                    <span className="font-bold text-2xl text-primary font-heading">899.000 VND</span>
                                </div>
                            </div>

                            {/* Note */}
                            <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-4">
                                <p className="text-sm text-amber-900 font-sans">
                                    <span className="font-bold">Lưu ý:</span> Quét mã QR để nội dung chuyển khoản được nhập tự động chính xác nhất.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Confirmation Section */}
                    <div className="space-y-6">
                        {/* Main Card */}
                        <div className="bg-white rounded-2xl shadow-xl p-8">
                            <h2 className="text-4xl font-bold text-center mb-6 font-heading text-primary">
                                CÒN 1 BƯỚC NỮA
                            </h2>

                            <p className="text-center text-lg text-gray-700 mb-8 font-sans leading-relaxed">
                                Sau khi chuyển khoản thành công, hãy gửi
                                <br />
                                <span className="font-bold text-gray-900">Thành Toán Vào Nhóm Zalo</span>
                            </p>

                            {/* Confirmation Button */}
                            <button
                                onClick={handleConfirmPayment}
                                className="w-full py-6 bg-gradient-to-r from-primary via-accent to-primary text-white font-bold rounded-xl text-lg hover:shadow-2xl transition-all shadow-lg hover:-translate-y-1 font-sans relative overflow-hidden group mb-4"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    TÔI ĐÃ CHUYỂN KHOẢN THÀNH CÔNG
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <circle cx="12" cy="12" r="10" strokeWidth="2" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
                                    </svg>
                                </span>
                                {/* Shine effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                            </button>

                            <p className="text-center text-sm text-gray-600 font-sans">
                                (Sẵm vào đây để vào nhóm Zalo)
                            </p>

                            {/* Hotline */}
                            <div className="mt-8 p-4 bg-red-50 border-2 border-red-200 rounded-xl">
                                <div className="flex items-center justify-center gap-3 text-red-600">
                                    <Phone className="h-6 w-6" />
                                    <span className="font-bold text-xl font-sans">Liên hệ MS Hiên: 0936340576</span>
                                </div>
                            </div>

                            {/* Countdown Timer */}
                            <div className="mt-8 text-center">
                                <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto">
                                    <div className="bg-bg-surface rounded-xl p-4 border-2 border-border">
                                        <div className="text-4xl font-bold text-primary font-heading">{hours}</div>
                                        <div className="text-sm text-gray-600 font-sans uppercase mt-1">Hours</div>
                                    </div>
                                    <div className="bg-bg-surface rounded-xl p-4 border-2 border-border">
                                        <div className="text-4xl font-bold text-primary font-heading">{minutes}</div>
                                        <div className="text-sm text-gray-600 font-sans uppercase mt-1">Minutes</div>
                                    </div>
                                    <div className="bg-bg-surface rounded-xl p-4 border-2 border-border">
                                        <div className="text-4xl font-bold text-primary font-heading">{seconds}</div>
                                        <div className="text-sm text-gray-600 font-sans uppercase mt-1">Seconds</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Additional Info */}
                        <div className="bg-primary/10 border-2 border-primary/30 rounded-xl p-6">
                            <h3 className="font-bold text-lg mb-3 text-gray-900 font-heading">📌 Lưu ý quan trọng:</h3>
                            <ul className="space-y-2 text-sm text-gray-700 font-sans">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary font-bold">•</span>
                                    <span>Vui lòng chuyển khoản <strong>đúng số tiền</strong> để được xác nhận tự động</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary font-bold">•</span>
                                    <span>Sau khi chuyển khoản, nhấn nút xác nhận để vào nhóm Zalo</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary font-bold">•</span>
                                    <span>Bạn sẽ nhận được thông tin khóa học qua Zalo trong vòng 5 phút</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Back to Home Link */}
                <div className="text-center mt-12">
                    <a
                        href="/"
                        className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-sans font-medium"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Quay lại trang chủ
                    </a>
                </div>
            </div>
        </div>
    );
}

