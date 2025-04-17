import React, { useState } from 'react';
import Rebrand from '@/assets/images/rebrand_f4e.png';
import Aftermovie from '@/assets/images/aftermovie_bw.png';
import InnovWeek from '@/assets/images/innov_week.png';
import Time100 from '@/assets/images/time100_f4e.png';
import BlanketsSummer2 from '@/assets/images/blankets_summer2.png';
import FamilyImage from '@/assets/images/family_image.png';
import MogoImage from '@/assets/images/mogo_image.png';

type Category = 'all' | 'corporate' | 'events' | 'humanitarian' | 'fashion';

type PortfolioItem = {
    id: number;
    title: string;
    category: Category;
    type: 'video' | 'photo';
    videoUrl?: string; // Optional for photo items
    thumbnailUrl?: string; // Optional for photo items
    imageUrl?: string; // Optional for video items
    description?: string; // Optional for all items
    client?: string; // Optional for all items
};

const PortfolioSection = () => {
    const [activeCategory, setActiveCategory] = useState<Category>('all');
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    const portfolioItems: PortfolioItem[] = [
        {
            id: 1,
            title: "Rebranding - Food for Education",
            category: 'corporate',
            type: 'video',
            videoUrl: "https://youtu.be/2N_K4di7eD0",
            thumbnailUrl: Rebrand,
            client: "Food for Education",
        },
        {
            id: 2,
            title: "Time 100 - Food For Education",
            category: 'corporate',
            type: 'video',
            videoUrl: "https://youtu.be/NRoo3J5h6xs",
            thumbnailUrl: Time100,
            client: "Food for Education",
        },
        {
            id: 3,
            title: "Kenya Innovation Week 2023",
            category: 'corporate',
            type: 'video',
            videoUrl: "https://youtu.be/vm7NzXunWKQ",
            thumbnailUrl: InnovWeek,
            client: "British Council",
        },
        {
            id: 4,
            title: "Dishi Na County - 1yr Anniversary",
            category: 'humanitarian',
            type: 'video',
            videoUrl: "https://youtu.be/ZPVkonQLQJ0",
            thumbnailUrl: "https://i.ytimg.com/vi/0v1g2x4X8aE/hqdefault.jpg",
            client: "Food for Education & Nairobi City County",
            description: "State Documentary Production"
        },
        {
            id: 5,
            title: "Family Photoshoot",
            category: 'fashion',
            type: 'photo',
            imageUrl: FamilyImage,
            description: "Always sustain yourself with the love of family. ❤"
        },
        {
            id: 6,
            title: "Blankets & Wine Aftermovie",
            category: 'events',
            type: 'video',
            videoUrl: "https://youtu.be/ASKypjwiW_o",
            thumbnailUrl: Aftermovie,
            client: "Blankets & Wine",
        },
        {
            id: 7,
            title: " Blankets & Wine Edition: Kenyan Summer II",
            category: 'events',
            type: 'photo',
            imageUrl: BlanketsSummer2,
            client: "Blankets & Wine"
        },
        {
            id: 8,
            title: "Product Photography",
            category: 'corporate',
            type: 'photo',
            imageUrl: MogoImage,
            client: "Mogo Kenya"
        },
    ];

    const filteredItems = activeCategory === 'all'
        ? portfolioItems
        : portfolioItems.filter(item => item.category === activeCategory);

    const categories = [
        { value: 'all', label: 'All Work' },
        { value: 'corporate', label: 'Corporate' },
        { value: 'events', label: 'Events' },
        { value: 'humanitarian', label: 'Humanitarian | Documentary' },
        { value: 'fashion', label: 'Fashion & Lifestyle' },
    ];

    // Video modal component
    const VideoModal = ({ videoUrl, onClose }: { videoUrl: string; onClose: () => void }) => {
        // Convert YouTube URL to embed format
        const getEmbedUrl = (url: string) => {
            if (url.includes('youtu.be')) {
                const id = url.split('/').pop();
                return `https://www.youtube.com/embed/${id}`;
            } else if (url.includes('youtube.com/watch')) {
                const id = new URL(url).searchParams.get('v');
                return `https://www.youtube.com/embed/${id}`;
            }
            return url;
        };

        return (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={onClose}>
                <div className="relative w-full max-w-7xl" onClick={(e) => e.stopPropagation()}>
                    <button
                        className="absolute -top-10 right-0 text-white hover:text-gold"
                        onClick={onClose}
                    >
                        Close
                    </button>
                    <div className="aspect-video w-full">
                        <iframe
                            src={getEmbedUrl(videoUrl)}
                            className="w-full h-full"
                            allowFullScreen
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        ></iframe>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section id="portfolio" className="section-padding bg-dark-light">
            <div className="container mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif mb-6">
                        <span className="text-gradient">Our</span> Portfolio
                    </h2>
                    <p className="text-gray-300">
                        Explore our diverse collection of visual storytelling projects across various industries and formats.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category.value}
                            className={`px-4 py-2 rounded-full transition-all duration-300 ${activeCategory === category.value
                                ? 'bg-gold text-dark font-medium'
                                : 'bg-dark-lighter text-white hover:bg-gold/20'
                                }`}
                            onClick={() => setActiveCategory(category.value as Category)}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredItems.map((item) => (
                        <div
                            key={item.id}
                            className="portfolio-card group animate-zoom-in cursor-pointer"
                            onClick={() => {
                                if (item.type === 'video' && item.videoUrl) {
                                    setSelectedVideo(item.videoUrl);
                                }
                            }}
                        >
                            <div className="aspect-[3/4] bg-dark-lighter rounded-lg overflow-hidden flex items-center justify-center">
                                {item.type === 'video' && item.thumbnailUrl ? (
                                    <img
                                        src={item.thumbnailUrl}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                ) : item.type === 'photo' && item.imageUrl ? (
                                    <img
                                        src={item.imageUrl}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <span className="text-xl text-gold/30">{item.type === 'video' ? 'Video' : 'Photo'}</span>
                                )}
                            </div>

                            <div className="portfolio-card-overlay group-hover:animate-fade-in">
                                <span className="text-gold text-sm uppercase tracking-wider">{item.category}</span>
                                <h3 className="text-xl font-serif text-white mt-1">{item.title}</h3>
                                {item.client && <p className="text-gray-400 text-sm mt-1">Client: {item.client}</p>}
                                {item.description && (
                                    <p className="text-gray-300 text-sm mt-2">{item.description}</p>
                                )}
                                {item.type === 'video' && (
                                    <div className="mt-2">
                                        {item.type === 'video' ? (
                                            <span className="inline-flex items-center text-gold">
                                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                                                </svg>
                                                Play Video
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center text-gold">
                                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v-4m0 4h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                                                </svg>
                                                View Full Image
                                            </span>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Video Modal */}
                {selectedVideo && (
                    <VideoModal
                        videoUrl={selectedVideo}
                        onClose={() => setSelectedVideo(null)}
                    />
                )}


                <div className="text-center mt-12">
                    <a href="#" className="btn-secondary inline-flex items-center">
                        View Full Portfolio
                    </a>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;