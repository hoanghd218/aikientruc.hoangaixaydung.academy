import React from 'react';
import { Store, Phone, Mail, MapPin } from 'lucide-react';

export default function FooterMaterialStore() {
    return (
        <footer className="bg-bg-main border-t border-border py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <a href="/ai-cho-chu-cua-hang-vat-lieu-gach" className="flex items-center gap-2 mb-4">
                            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                                <Store className="h-6 w-6 text-white" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-heading font-bold text-text-main text-lg leading-tight">BimSpeed AI</span>
                                <span className="text-xs text-text-muted">Cho Cửa Hàng Vật Liệu</span>
                            </div>
                        </a>
                        <p className="text-text-muted text-sm leading-relaxed">
                            Công nghệ AI giúp chủ cửa hàng vật liệu xây dựng tăng doanh số bằng cách cho khách hàng xem trước sản phẩm trong không gian thực.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-text-main mb-4">Liên kết nhanh</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#solution" className="text-text-muted hover:text-primary transition-colors text-sm">
                                    Giải pháp AI
                                </a>
                            </li>
                            <li>
                                <a href="#pricing" className="text-text-muted hover:text-primary transition-colors text-sm">
                                    Đăng ký dùng thử
                                </a>
                            </li>
                            <li>
                                <a href="/" className="text-text-muted hover:text-primary transition-colors text-sm">
                                    Khóa học AI Kiến Trúc
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-text-main mb-4">Liên hệ</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-text-muted text-sm">
                                <Phone className="h-4 w-4 text-primary" />
                                <span>0968 18 4368</span>
                            </li>
                            <li className="flex items-center gap-3 text-text-muted text-sm">
                                <Mail className="h-4 w-4 text-primary" />
                                <span>support@bimspeed.net</span>
                            </li>
                            <li className="flex items-start gap-3 text-text-muted text-sm">
                                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                                <span>Vinhomes Ocean Park, Gia Lâm, Hà Nội</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border pt-8 text-center">
                    <p className="text-text-muted text-sm">
                        © {new Date().getFullYear()} BimSpeed AI. Tất cả quyền được bảo lưu.
                    </p>
                </div>
            </div>
        </footer>
    );
}
