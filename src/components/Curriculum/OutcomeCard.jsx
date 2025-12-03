import React from 'react';
import { Play, Image as ImageIcon } from 'lucide-react';
import ImageComparisonSlider from '../ImageComparisonSlider';

export function OutcomeCard({ title, description, media }) {
    const isVideo = media?.type === 'video';
    const isGif = media?.type === 'gif';
    const isImage = media?.type === 'image';
    const isCompare = media?.type === 'compare' || (media?.beforeImage && media?.afterImage);
    const isYouTube = media?.url?.includes('youtube.com') || media?.url?.includes('youtu.be');

    // If it's a compare slider, use ImageComparisonSlider component
    if (isCompare) {
        return (
            <div className="group relative bg-bg-surface border-2 border-border rounded-xl overflow-hidden hover:border-primary/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-4">
                <ImageComparisonSlider
                    beforeImage={media.beforeImage}
                    afterImage={media.afterImage}
                    beforeLabel={media.beforeLabel || "Trước"}
                    afterLabel={media.afterLabel || "Sau"}
                    title={title}
                    description={description}
                />
            </div>
        );
    }

    return (
        <div className="group relative bg-bg-surface border-2 border-border rounded-xl overflow-hidden hover:border-primary/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            {/* Media Section */}
            <div className="relative aspect-video bg-bg-muted overflow-hidden">
                {isVideo && isYouTube ? (
                    // YouTube Video Embed
                    <iframe
                        width="100%"
                        height="100%"
                        src={media.url.replace('watch?v=', 'embed/').replace('youtu.be/', 'youtube.com/embed/')}
                        title={title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                ) : isVideo ? (
                    // Regular Video
                    <video
                        src={media.url}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        controls
                    />
                ) : isGif ? (
                    // GIF Image
                    <img
                        src={media.url}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                ) : isImage ? (
                    // Regular Image
                    <img
                        src={media.url}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                ) : null}

                {/* Media Type Badge */}
                {isVideo && (
                    <div className="absolute top-3 right-3 px-3 py-1.5 bg-primary text-white text-xs font-bold rounded-lg shadow-lg flex items-center gap-1.5 backdrop-blur-sm">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        VIDEO
                    </div>
                )}
                {isGif && (
                    <div className="absolute top-3 right-3 px-3 py-1.5 bg-accent text-white text-xs font-bold rounded-lg shadow-lg flex items-center gap-1.5 backdrop-blur-sm">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        GIF
                    </div>
                )}
                {isImage && !isGif && (
                    <div className="absolute top-3 right-3 px-3 py-1.5 bg-secondary text-white text-xs font-bold rounded-lg shadow-lg flex items-center gap-1.5 backdrop-blur-sm">
                        <ImageIcon className="w-3 h-3" />
                        IMAGE
                    </div>
                )}

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-text-main/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>

            {/* Content Section */}
            <div className="p-4">
                <h5 className="font-bold text-text-main text-sm mb-1 line-clamp-2">
                    {title}
                </h5>
                {description && (
                    <p className="text-xs text-text-muted line-clamp-2">
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
}

