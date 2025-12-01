import React, { useState, useRef, useEffect } from 'react';

export default function ImageComparisonSliderFree({
    beforeImage,
    afterImage,
    beforeLabel = "Before",
    afterLabel = "After",
    title,
    description
}) {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef(null);

    const handleMove = (clientX) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percentage = (x / rect.width) * 100;

        setSliderPosition(Math.min(Math.max(percentage, 0), 100));
    };

    const handleMouseDown = () => {
        setIsDragging(true);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        handleMove(e.clientX);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        handleMove(e.touches[0].clientX);
    };

    useEffect(() => {
        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
            document.addEventListener('touchmove', handleTouchMove);
            document.addEventListener('touchend', handleMouseUp);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleMouseUp);
        };
    }, [isDragging]);

    return (
        <div className="space-y-3">
            {/* Comparison Container */}
            <div
                ref={containerRef}
                className="relative w-full aspect-[4/3] overflow-hidden rounded-xl border border-border bg-bg-muted cursor-ew-resize select-none"
                onMouseDown={handleMouseDown}
                onTouchStart={handleMouseDown}
            >
                {/* After Image (Full) */}
                <div className="absolute inset-0">
                    <img
                        src={afterImage}
                        alt={afterLabel}
                        className="w-full h-full object-cover"
                        draggable={false}
                    />
                    {/* After Label */}
                    <div className="absolute top-3 right-3 px-3 py-1.5 bg-primary text-white text-xs font-bold rounded-md shadow-lg">
                        {afterLabel}
                    </div>
                </div>

                {/* Before Image (Clipped) */}
                <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: `${sliderPosition}%` }}
                >
                    <img
                        src={beforeImage}
                        alt={beforeLabel}
                        className="w-full h-full object-cover"
                        style={{ width: `${(100 / sliderPosition) * 100}%` }}
                        draggable={false}
                    />
                    {/* Before Label */}
                    <div className="absolute top-3 left-3 px-3 py-1.5 bg-secondary text-white text-xs font-bold rounded-md shadow-lg">
                        {beforeLabel}
                    </div>
                </div>

                {/* Slider Handle */}
                <div
                    className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-lg"
                    style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
                >
                    {/* Handle Circle */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl border-2 border-gray-300 flex items-center justify-center">
                        <div className="flex gap-1">
                            <div className="w-0.5 h-4 bg-gray-400"></div>
                            <div className="w-0.5 h-4 bg-gray-400"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Title and Description */}
            {(title || description) && (
                <div className="space-y-1">
                    {title && (
                        <h3 className="text-base font-bold text-text-main font-heading">
                            {title}
                        </h3>
                    )}
                    {description && (
                        <p className="text-sm text-text-muted font-sans">
                            {description}
                        </p>
                    )}
                </div>
            )}
        </div>
    );
}

