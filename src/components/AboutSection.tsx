import React from 'react';

const AboutSection = () => {
    return (
        <section id="about" className="section-padding bg-dark">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="animate-fade-in">
                        <h2 className="text-3xl md:text-4xl font-serif mb-6">
                            <span className="text-gradient">About</span> Fine Focus Productions
                        </h2>

                        <p className="text-gray-300 mb-6">
                            At Fine Focus Productions, we are storytellers at heart. Based in Nairobi, we've been transforming corporate narratives into compelling visual content since 2015.
                        </p>

                        <p className="text-gray-300 mb-6">
                            Our team of creative professionals combines technical expertise with artistic vision to produce premium videography and photography that captures the essence of your brand.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 mt-10">
                            <div>
                                <h3 className="text-gold font-serif text-xl mb-2">Authenticity</h3>
                                <p className="text-gray-400">We believe in capturing genuine moments and real emotions in every project.</p>
                            </div>

                            <div>
                                <h3 className="text-gold font-serif text-xl mb-2">Innovation</h3>
                                <p className="text-gray-400">We constantly explore new techniques and approaches to visual storytelling.</p>
                            </div>

                            <div>
                                <h3 className="text-gold font-serif text-xl mb-2">Excellence</h3>
                                <p className="text-gray-400">We are committed to delivering the highest quality in every aspect of our work.</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative animate-fade-in-right">
                        <div className="aspect-[4/5] bg-dark-light rounded-lg overflow-hidden relative z-10">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-2xl text-gold/30">Team Image</span>
                            </div>
                        </div>

                        <div className="absolute top-10 -right-10 w-4/5 h-4/5 border-2 border-gold rounded-lg -z-0"></div>
                    </div>
                </div>

                <div className="mt-24">
                    <h3 className="text-center text-xl font-serif text-gold mb-10">Trusted by Leading Brands</h3>

                    <div className="flex flex-wrap justify-center gap-10 md:gap-16 opacity-70">
                        {["Brand 1", "Brand 2", "Brand 3", "Brand 4", "Brand 5"].map((brand, index) => (
                            <div
                                key={index}
                                className="w-24 h-12 flex items-center justify-center bg-dark-light rounded-md"
                            >
                                <span className="text-white/40">{brand}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
