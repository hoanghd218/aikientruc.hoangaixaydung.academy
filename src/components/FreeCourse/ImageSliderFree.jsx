import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ImageSliderFree({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    // Auto-play functionality
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [currentIndex]); // Restart timer on slide change

    if (!slides || slides.length === 0) {
        return null;
    }

    return (
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl group">
            {/* Images */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <img
                        src={slide.image}
                        alt={slide.title}
                        className="h-full w-full object-cover"
                    />
                    {/* Gradient Overlay for better text visibility if needed, though we have a card */}
                    <div className="absolute inset-0 bg-black/10"></div>
                </div>
            ))}

            {/* Navigation Arrows (Optional - visible on hover) */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-800 opacity-0 transition-opacity hover:bg-white group-hover:opacity-100 focus:outline-none"
                aria-label="Previous slide"
            >
                <ChevronLeft className="h-6 w-6" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-800 opacity-0 transition-opacity hover:bg-white group-hover:opacity-100 focus:outline-none"
                aria-label="Next slide"
            >
                <ChevronRight className="h-6 w-6" />
            </button>

            {/* Bottom Card Overlay */}
            <div className="absolute bottom-6 left-6 right-6 mx-auto max-w-md rounded-xl bg-white/95 p-4 shadow-lg backdrop-blur-sm transition-all duration-300 md:left-1/2 md:right-auto md:-translate-x-1/2 md:min-w-[400px]">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
                            {slides[currentIndex].subtitle}
                        </p>
                        <h3 className="text-lg font-bold text-gray-900">
                            {slides[currentIndex].title}
                        </h3>
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex space-x-2 ml-4">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${index === currentIndex
                                        ? 'bg-primary w-4' // Active dot style (primary and slightly wider)
                                        : 'bg-secondary hover:bg-secondary/80'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

