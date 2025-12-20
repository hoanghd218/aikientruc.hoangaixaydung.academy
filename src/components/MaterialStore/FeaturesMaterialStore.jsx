import React from 'react';
import { Camera, Smartphone, MessageCircle, Clock, Zap, Shield, CheckCircle2 } from 'lucide-react';

export default function FeaturesMaterialStore() {
    const features = [
        {
            icon: <Camera className="h-8 w-8" />,
            title: "Chụp Ảnh → Thay Vật Liệu",
            description: "Chỉ cần chụp ảnh căn phòng hoặc căn nhà của khách bằng điện thoại. Upload lên và AI sẽ tự động thay thế gạch, ngói theo ý muốn.",
            color: "primary"
        },
        {
            icon: <Clock className="h-8 w-8" />,
            title: "30 Giây Có Kết Quả",
            description: "Không cần chờ đợi. AI xử lý ngay lập tức trong khi khách hàng vẫn đang đứng trước mặt bạn. Chốt đơn tại chỗ.",
            color: "accent"
        },
        {
            icon: <Smartphone className="h-8 w-8" />,
            title: "Dùng Được Trên Điện Thoại",
            description: "Không cần máy tính, không cần cài đặt phức tạp. Mở trình duyệt trên điện thoại là dùng được ngay. Nhân viên nào cũng làm được.",
            color: "primary"
        },
        {
            icon: <MessageCircle className="h-8 w-8" />,
            title: "Gửi Qua Zalo/Messenger",
            description: "Tải ảnh về và gửi qua Zalo cho khách về nhà bàn với gia đình. Họ sẽ quay lại vì đã 'nhìn thấy' sản phẩm trong nhà mình.",
            color: "accent"
        },
        {
            icon: <Zap className="h-8 w-8" />,
            title: "So Sánh Nhiều Mẫu",
            description: "Tạo 3-4 phương án khác nhau trong vài phút. Đặt cạnh nhau cho khách dễ chọn. Không còn cảnh 'về suy nghĩ thêm'.",
            color: "primary"
        },
        {
            icon: <Shield className="h-8 w-8" />,
            title: "Không Cần Biết Công Nghệ",
            description: "Giao diện tiếng Việt, đơn giản như xem ảnh trên Facebook. Ai cũng dùng được sau 5 phút hướng dẫn.",
            color: "accent"
        }
    ];

    const stats = [
        { number: "500+", label: "Cửa hàng đang dùng" },
        { number: "10,000+", label: "Ảnh render mỗi ngày" },
        { number: "300%", label: "Tăng tỷ lệ chốt đơn" },
        { number: "80%", label: "Giảm trả hàng" }
    ];

    return (
        <section className="py-16 md:py-24 bg-bg-main border-b border-border">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-primary/30 bg-gradient-to-r from-primary/10 to-accent/10 mb-6 shadow-lg">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <span className="text-sm font-bold uppercase tracking-wider text-primary">
                            ✓ Dễ Dùng - Nhanh - Hiệu Quả
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-text-main mb-6 leading-tight">
                        Tại Sao <span className="text-primary">Hơn 500 Cửa Hàng</span> Đã Chọn Chúng Tôi?
                    </h2>
                    <p className="text-text-muted font-sans text-lg max-w-3xl mx-auto">
                        Công nghệ phức tạp, nhưng cách dùng thì cực kỳ đơn giản.
                        Được thiết kế riêng cho chủ cửa hàng vật liệu xây dựng tại Việt Nam.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center p-6 bg-bg-surface rounded-2xl border border-border shadow-sm hover:shadow-lg transition-shadow">
                            <div className="text-4xl md:text-5xl font-bold text-primary font-heading mb-2">
                                {stat.number}
                            </div>
                            <div className="text-sm text-text-muted font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group p-6 bg-bg-surface rounded-2xl border border-border hover:border-primary/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color === 'primary' ? 'from-primary/20 to-primary/10 text-primary' : 'from-accent/20 to-accent/10 text-accent'} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-text-main font-heading mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-text-muted font-sans leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Testimonial */}
                <div className="mt-16 max-w-4xl mx-auto">
                    <div className="relative">
                        <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl"></div>
                        <div className="relative p-8 md:p-10 bg-bg-surface border-2 border-primary/30 rounded-2xl shadow-xl">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-2xl">
                                        👨‍💼
                                    </div>
                                </div>
                                <div>
                                    <p className="text-lg text-text-main font-sans italic mb-4">
                                        "Trước đây khách vào xem gạch rồi về, 10 người thì chốt được 2-3.
                                        Giờ tôi chụp ảnh phòng họ, thay gạch cho họ xem luôn - 10 người chốt 7-8.
                                        Doanh số tháng này tăng gấp 3 so với tháng trước!"
                                    </p>
                                    <div>
                                        <div className="font-bold text-text-main">Anh Minh Tuấn</div>
                                        <div className="text-sm text-text-muted">Chủ cửa hàng gạch men - Bình Dương</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
