import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Sparkles, User, Mail, Phone, Store, Building2 } from 'lucide-react';
import ReactPixel from 'react-facebook-pixel';

export default function PricingMaterialStore() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        storeName: '',
        name: '',
        email: '',
        phone: '',
        materialTypes: []
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const materialOptions = [
        { id: 'gach-san', label: 'Gạch lát sàn' },
        { id: 'gach-tuong', label: 'Gạch ốp tường' },
        { id: 'ngoi-mai', label: 'Ngói mái' },
        { id: 'da-op-lat', label: 'Đá ốp lát' },
        { id: 'vat-lieu-khac', label: 'Vật liệu khác' }
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleMaterialToggle = (materialId) => {
        setFormData(prev => ({
            ...prev,
            materialTypes: prev.materialTypes.includes(materialId)
                ? prev.materialTypes.filter(id => id !== materialId)
                : [...prev.materialTypes, materialId]
        }));
    };

    const handleRegistration = async () => {
        // Validate form data
        if (!formData.name || !formData.phone) {
            alert('Vui lòng điền đầy đủ họ tên và số điện thoại');
            return;
        }

        setIsSubmitting(true);

        ReactPixel.track('Lead', {
            content_name: 'Material Store Landing',
            ...formData
        });

        try {
            // Call API - Using the same webhook for now
            const response = await fetch('https://n8n.bimspeed.net/webhook/6135553c-02ef-4ad6-b05a-c1b431c4f182', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    storeName: formData.storeName,
                    fullName: formData.name,
                    phone: formData.phone,
                    email: formData.email,
                    materialTypes: formData.materialTypes.join(', '),
                    source: 'MATERIAL_STORE_LANDING',
                    submittedAt: new Date().toISOString()
                })
            });

            if (!response.ok) {
                throw new Error('Đăng ký thất bại');
            }

            // Show success message
            alert('Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn trong 24 giờ.');

            // Reset form
            setFormData({
                storeName: '',
                name: '',
                email: '',
                phone: '',
                materialTypes: []
            });

        } catch (error) {
            console.error('Registration error:', error);
            alert('Có lỗi xảy ra khi đăng ký. Vui lòng thử lại!');
        } finally {
            setIsSubmitting(false);
        }
    };

    const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 hours in seconds

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return { h, m, s };
    };

    const time = formatTime(timeLeft);

    const benefits = [
        "10 lần render MIỄN PHÍ để trải nghiệm",
        "Hướng dẫn 1-1 qua Zalo/Zoom",
        "Hỗ trợ kỹ thuật 24/7",
        "Không cần thẻ tín dụng",
        "Hủy bất cứ lúc nào"
    ];

    return (
        <section id="pricing" className="py-16 md:py-24 bg-bg-surface border-b border-border">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
                        <Sparkles className="h-4 w-4 text-primary" />
                        <span className="text-xs font-bold uppercase tracking-wider text-primary">
                            🎁 Ưu Đãi Đặc Biệt Cho Cửa Hàng
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 text-text-main">
                        Đăng Ký Nhận <span className="text-primary">Demo Miễn Phí</span>
                    </h2>
                    <p className="text-text-muted font-sans text-lg max-w-2xl mx-auto">
                        Để lại thông tin ngay. Chúng tôi sẽ liên hệ hướng dẫn bạn sử dụng
                        <span className="font-bold text-accent"> trong vòng 24 giờ</span>.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-8 items-start">
                        {/* Left Column: Benefits */}
                        <div className="relative order-2 lg:order-1">
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-xl opacity-50"></div>

                            <div className="relative p-8 md:p-10 bg-gradient-to-br from-bg-surface via-bg-main to-bg-surface border-2 border-primary/30 rounded-2xl shadow-2xl h-full">
                                <h3 className="text-2xl font-bold text-text-main font-heading mb-6">
                                    Bạn Sẽ Nhận Được
                                </h3>

                                <ul className="space-y-4 mb-8">
                                    {benefits.map((benefit, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center">
                                                <Check className="h-4 w-4 text-primary" />
                                            </div>
                                            <span className="text-text-main font-medium">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="bg-accent/10 border border-accent/30 rounded-xl p-5">
                                    <h4 className="font-bold text-accent mb-2 flex items-center gap-2">
                                        <Sparkles className="h-5 w-5" />
                                        Bonus Đặc Biệt
                                    </h4>
                                    <p className="text-text-muted text-sm">
                                        Đăng ký hôm nay, nhận thêm <span className="font-bold text-accent">bộ mẫu ảnh render 50+ phòng đẹp</span> để tham khảo và gửi cho khách hàng.
                                    </p>
                                </div>

                                {/* Countdown */}
                                <div className="mt-8 text-center">
                                    <p className="text-sm text-text-muted mb-3">Ưu đãi kết thúc sau:</p>
                                    <div className="flex justify-center gap-3">
                                        {[
                                            { label: 'Giờ', value: time.h },
                                            { label: 'Phút', value: time.m },
                                            { label: 'Giây', value: time.s }
                                        ].map((item, index) => (
                                            <div key={index} className="flex flex-col items-center">
                                                <div className="bg-primary w-14 h-14 rounded-lg flex items-center justify-center mb-1 shadow-sm">
                                                    <span className="text-2xl font-bold text-white font-heading">
                                                        {String(item.value).padStart(2, '0')}
                                                    </span>
                                                </div>
                                                <span className="text-xs text-text-muted font-medium">{item.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Registration Form */}
                        <div className="relative order-1 lg:order-2">
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-xl opacity-50"></div>

                            <div className="relative p-8 md:p-10 bg-gradient-to-br from-bg-surface via-bg-main to-bg-surface border-2 border-primary/30 rounded-2xl shadow-2xl">
                                {/* Badge */}
                                <div className="absolute top-0 right-0 -mt-3 -mr-3">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-accent blur-md opacity-50"></div>
                                        <div className="relative bg-gradient-to-r from-accent to-primary text-white text-xs font-bold px-4 py-2 rounded-full font-sans uppercase tracking-wider shadow-lg">
                                            🎁 Miễn Phí 100%
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-text-main font-heading mb-6 flex items-center gap-2">
                                    <Store className="h-6 w-6 text-primary" />
                                    Thông Tin Cửa Hàng
                                </h3>

                                {/* Form */}
                                <div className="space-y-4 mb-6">
                                    {/* Store Name */}
                                    <div className="relative">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted">
                                            <Building2 className="h-5 w-5" />
                                        </div>
                                        <input
                                            type="text"
                                            name="storeName"
                                            value={formData.storeName}
                                            onChange={handleInputChange}
                                            placeholder="Tên cửa hàng"
                                            className="w-full pl-12 pr-4 py-3.5 bg-bg-surface border-2 border-border rounded-xl text-text-main placeholder:text-text-muted font-sans focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                        />
                                    </div>

                                    {/* Name */}
                                    <div className="relative">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted">
                                            <User className="h-5 w-5" />
                                        </div>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder="Họ và tên *"
                                            className="w-full pl-12 pr-4 py-3.5 bg-bg-surface border-2 border-border rounded-xl text-text-main placeholder:text-text-muted font-sans focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div className="relative">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted">
                                            <Phone className="h-5 w-5" />
                                        </div>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder="Số điện thoại *"
                                            className="w-full pl-12 pr-4 py-3.5 bg-bg-surface border-2 border-border rounded-xl text-text-main placeholder:text-text-muted font-sans focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div className="relative">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted">
                                            <Mail className="h-5 w-5" />
                                        </div>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="Email (tùy chọn)"
                                            className="w-full pl-12 pr-4 py-3.5 bg-bg-surface border-2 border-border rounded-xl text-text-main placeholder:text-text-muted font-sans focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                        />
                                    </div>

                                    {/* Material Types */}
                                    <div>
                                        <p className="text-sm font-medium text-text-main mb-3">Loại vật liệu kinh doanh:</p>
                                        <div className="flex flex-wrap gap-2">
                                            {materialOptions.map((material) => (
                                                <button
                                                    key={material.id}
                                                    type="button"
                                                    onClick={() => handleMaterialToggle(material.id)}
                                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${formData.materialTypes.includes(material.id)
                                                            ? 'bg-primary text-white shadow-lg'
                                                            : 'bg-bg-muted text-text-muted hover:bg-primary/10 hover:text-primary border border-border'
                                                        }`}
                                                >
                                                    {material.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <button
                                    onClick={handleRegistration}
                                    disabled={isSubmitting}
                                    className="w-full py-5 bg-gradient-to-r from-primary via-accent to-primary text-white font-bold rounded-xl text-lg hover:shadow-2xl transition-all shadow-lg hover:-translate-y-1 font-sans relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        <Sparkles className="h-5 w-5" />
                                        {isSubmitting ? 'Đang gửi...' : 'Đăng Ký Nhận Demo Miễn Phí'}
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                                </button>

                                <p className="text-center text-xs text-text-muted mt-4">
                                    Chúng tôi sẽ liên hệ bạn trong vòng 24 giờ qua số điện thoại đã đăng ký
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
