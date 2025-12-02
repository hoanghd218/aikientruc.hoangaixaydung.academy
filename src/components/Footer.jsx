import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-text-main text-bg-muted py-12 border-t border-border">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="h-8 w-8 rounded bg-primary flex items-center justify-center text-white font-bold font-heading">
                                B
                            </div>
                            <span className="text-xl font-bold font-heading tracking-tight text-white">Bimspeed AI</span>
                        </div>
                        <p className="text-secondary font-sans max-w-xs">
                            Nền tảng đào tạo ứng dụng AI trong kiến trúc hàng đầu Việt Nam.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold font-heading mb-4 text-white">Liên kết</h4>
                        <ul className="space-y-2 text-sm text-secondary font-sans">
                            <li><a href="#" className="hover:text-primary transition-colors">Trang chủ</a></li>
                            <li><a href="#features" className="hover:text-primary transition-colors">Lợi ích</a></li>
                            <li><a href="#curriculum" className="hover:text-primary transition-colors">Nội dung</a></li>
                            <li><a href="#pricing" className="hover:text-primary transition-colors">Đăng ký</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold font-heading mb-4 text-white">Liên hệ</h4>
                        <ul className="space-y-2 text-sm text-secondary font-sans">
                            <li>Email: hoang.tran@bimspeed.net</li>
                            <li>Hotline: 0936.340.376 (Ms. Hiên)</li>
                            <li>Địa chỉ: Helios Building - 75 Tam Trinh - Hà Nội</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
