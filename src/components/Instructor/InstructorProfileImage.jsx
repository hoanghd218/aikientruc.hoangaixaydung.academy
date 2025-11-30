import React, { useState, useEffect } from 'react';
import { Award } from 'lucide-react';

export function InstructorProfileImage() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    const images = [
        '/profile/hoang 1.png',
        '/profile/sj1.jpeg',
        '/profile/sj2.jpeg'
    ];

    // Auto slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => 
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="w-full lg:w-2/5">
            <div className="relative group">
                {/* Animated Border Gradient */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-2xl opacity-75 group-hover:opacity-100 blur-sm group-hover:blur transition duration-500 animate-pulse"></div>

                {/* Image Container with Glassmorphism */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-bg-muted/50 to-secondary/20 backdrop-blur-xl border border-border">
                    {/* Image Slider */}
                    {images.map((image, index) => (
                        <img 
                            key={index}
                            src={image} 
                            alt={`Tony Hoang - Founder BimSpeed ${index + 1}`}
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                        />
                    ))}

                    {/* Shine Effect on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Slide Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    index === currentImageIndex 
                                        ? 'bg-white w-6' 
                                        : 'bg-white/50 hover:bg-white/75'
                                }`}
                                aria-label={`Slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl bg-gradient-to-r from-primary to-accent shadow-lg shadow-primary/30 border border-primary/30 backdrop-blur-sm transform group-hover:scale-110 transition-transform duration-300">
                    <div className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-white" />
                        <span className="text-xs font-bold text-white font-sans">BimSpeed Founder</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

