import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark py-16">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-serif font-bold text-white mb-4">
                            <span className="text-gradient">Fine Focus</span> Productions
                        </h3>
                        <p className="text-gray-400 mb-6 max-w-md">
                            We craft compelling visual narratives that showcase your brand's unique story and elevate your corporate presence.
                        </p>
                        <p className="text-gray-500">
                            © {new Date().getFullYear()} Fine Focus Productions. All rights reserved.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-gold font-medium mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#home" className="text-gray-400 hover:text-gold transition-colors">Home</a></li>
                            <li><a href="#about" className="text-gray-400 hover:text-gold transition-colors">About</a></li>
                            <li><a href="#portfolio" className="text-gray-400 hover:text-gold transition-colors">Portfolio</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-gold transition-colors">Services</a></li>
                            <li><a href="#testimonials" className="text-gray-400 hover:text-gold transition-colors">Testimonials</a></li>
                            <li><a href="#contact" className="text-gray-400 hover:text-gold transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-gold font-medium mb-4">Services</h4>
                        <ul className="space-y-2">
                            <li><a href="#services" className="text-gray-400 hover:text-gold transition-colors">Corporate Videography</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-gold transition-colors">Event Photography</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-gold transition-colors">Training & Workshops</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-gold transition-colors">Content Planning</a></li>
                            <li><a href="#contact" className="text-gray-400 hover:text-gold transition-colors">Get a Quote</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;