import React from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
    return (
        <section id="contact" className="section-padding bg-dark">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif mb-6">
                            <span className="text-gradient">Contact</span> Us
                        </h2>

                        <p className="text-gray-300 mb-10">
                            Ready to bring your brand's story to life? Get in touch with us to discuss your project.
                        </p>

                        <div className="space-y-6 mb-10">
                            <div className="flex items-start gap-4">
                                <MapPin className="text-gold mt-1" size={24} />
                                <div>
                                    <h4 className="font-medium text-white mb-1">Visit Us</h4>
                                    <p className="text-gray-400">FINE FOCUS PRODUCTIONS, Limuru Rd, Nairobi</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Mail className="text-gold mt-1" size={24} />
                                <div>
                                    <h4 className="font-medium text-white mb-1">Email Us</h4>
                                    <p className="text-gray-400">finefocusproductions@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Phone className="text-gold mt-1" size={24} />
                                <div>
                                    <h4 className="font-medium text-white mb-1">Call Us</h4>
                                    <p className="text-gray-400">+254 725 440 468</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <MessageCircle className="text-gold mt-1" size={24} />
                                <div>
                                    <h4 className="font-medium text-white mb-1">Message us (Whatsapp)</h4>
                                    <p className="text-gray-400">+254 725 440 468</p>
                                </div>
                            </div>
                            
                        </div>

                        <div>
                            <h4 className="font-medium text-white mb-4">Follow Us</h4>
                            <div className="flex gap-4">
                                <a href="#" className="w-12 h-12 rounded-full bg-dark-lighter flex items-center justify-center transition-all hover:bg-gold hover:text-dark">
                                    <Instagram size={20} />
                                </a>
                                <a href="#" className="w-12 h-12 rounded-full bg-dark-lighter flex items-center justify-center transition-all hover:bg-gold hover:text-dark">
                                    <Linkedin size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-dark-light p-8 rounded-lg">
                        <h3 className="text-2xl font-serif mb-6">Get in Touch</h3>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm text-gray-300">Your Name</label>
                                    <Input
                                        id="name"
                                        placeholder="John Doe"
                                        className="bg-dark-lighter border-dark-lighter focus:border-gold"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm text-gray-300">Your Email</label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="john@example.com"
                                        className="bg-dark-lighter border-dark-lighter focus:border-gold"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="company" className="text-sm text-gray-300">Company Name</label>
                                <Input
                                    id="company"
                                    placeholder="Your Company"
                                    className="bg-dark-lighter border-dark-lighter focus:border-gold"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="service" className="text-sm text-gray-300">Service You're Interested In</label>
                                <select
                                    id="service"
                                    className="w-full px-4 py-2 bg-dark-lighter border border-dark-lighter rounded-md focus:outline-none focus:border-gold text-white"
                                >
                                    <option value="">Select a Service</option>
                                    <option value="corporate">Corporate Videography</option>
                                    <option value="event">Event Photography</option>
                                    <option value="training">Training & Workshops</option>
                                    <option value="planning">Content Planning</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm text-gray-300">Your Message</label>
                                <Textarea
                                    id="message"
                                    placeholder="Tell us about your project..."
                                    className="bg-dark-lighter border-dark-lighter focus:border-gold min-h-[120px]"
                                />
                            </div>

                            <Button type="submit" className="w-full btn-primary">
                                Send Message
                            </Button>
                        </form>

                        <p className="text-center mt-6 text-sm text-gray-400">
                            Or book a consultation directly through our calendar
                        </p>

                        <Button className="w-full mt-4 btn-secondary">
                            Schedule a Consultation
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;