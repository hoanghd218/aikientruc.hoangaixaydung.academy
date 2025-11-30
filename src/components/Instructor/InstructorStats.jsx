import React from 'react';
import { User, Check, Award, Star } from 'lucide-react';
import { InstructorStatCard } from './InstructorStatCard';

export function InstructorStats() {
    const stats = [
        {
            icon: User,
            value: "8000+",
            label: "Users BimSpeed",
            colorClass: "from-primary/20 to-primary/10",
            shadowClass: "shadow-primary/20",
            borderClass: "border-primary/30"
        },
        {
            icon: Check,
            value: "Hàng trăm",
            label: "Doanh nghiệp lớn",
            colorClass: "from-accent/20 to-accent/10",
            shadowClass: "shadow-accent/20",
            borderClass: "border-accent/30"
        },
        {
            icon: Award,
            value: "Top",
            label: "BIM AI Expert VN",
            colorClass: "from-secondary/30 to-secondary/15",
            shadowClass: "shadow-secondary/20",
            borderClass: "border-secondary/30"
        },
        {
            icon: Star,
            value: "10+ năm",
            label: "Kinh nghiệm",
            colorClass: "from-primary/15 to-accent/10",
            shadowClass: "shadow-primary/15",
            borderClass: "border-primary/20"
        }
    ];

    return (
        <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
                <InstructorStatCard
                    key={index}
                    icon={stat.icon}
                    value={stat.value}
                    label={stat.label}
                    colorClass={stat.colorClass}
                    shadowClass={stat.shadowClass}
                />
            ))}
        </div>
    );
}

