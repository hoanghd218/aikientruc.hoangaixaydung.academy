import React from 'react';

export function InstructorStatCard({ icon: Icon, value, label, colorClass, shadowClass }) {
    return (
        <div className={`group relative p-6 rounded-xl bg-gradient-to-br ${colorClass} backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg ${shadowClass} hover:-translate-y-1`}>
            <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg bg-primary/10 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                    <div className="text-3xl font-bold text-text-main font-heading mb-1">{value}</div>
                    <div className="text-sm text-text-muted font-sans">{label}</div>
                </div>
            </div>
        </div>
    );
}

