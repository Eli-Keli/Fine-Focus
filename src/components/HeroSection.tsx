import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
    return (
        <section id="home" className="relative h-screen">
            <div className="video-container">
                <div className="absolute inset-0 overflow-hidden">
                    <iframe
                        src="https://www.youtube.com/embed/ZPVkonQLQJ0?autoplay=1&controls=0&showinfo=0&rel=0&loop=1&playlist=ZPVkonQLQJ0&mute=1"
                        allow="autoplay; encrypted-media"
                        title="YouTube video player"
                        className="absolute w-[150%] h-[150%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-dark/70 to-dark/60"></div>
                </div>

                <div className="video-overlay">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 animate-fade-in">
                            <span className="text-gradient">Corporate Visionaries.</span><br />
                            <span className="text-white">Creative Storytellers.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
                            We craft compelling visual narratives that showcase your brand's unique story and elevate your corporate presence.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                            <a href="#portfolio" className="btn-primary flex items-center justify-center gap-2">
                                View Our Work <ArrowRight size={16} />
                            </a>
                            <a href="#contact" className="btn-secondary flex items-center justify-center gap-2">
                                Book a Consultation
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <a href="#about" className="text-white opacity-70 hover:opacity-100 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down">
                        <path d="m6 9 6 6 6-6" />
                    </svg>
                </a>
            </div>
        </section>
    );
};

export default HeroSection;