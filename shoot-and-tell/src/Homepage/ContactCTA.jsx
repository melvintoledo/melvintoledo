import React from "react";
import { motion } from 'framer-motion';

import {
    FaHandshake,
    FaBolt,
    FaStar,
    FaUsers,
    FaChartLine,
    FaEnvelope,
    FaPhone,
    FaClock,
    FaPaperPlane,
} from "react-icons/fa";

const ContactCTA = () => {
    return (
        <motion.section initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true}} id="contact" className="relative py-32 overflow-hidden">
            {/* Background Layers */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/2178fc24-317f-449b-3714-79d6ce47eb00/public"
                    alt="Video editor background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--dark-background-color)] via-[var(--dark-background-color)] to-transparent opacity-90" />
                <div className="absolute inset-0 bg-[var(--primary-color)] opacity-10" />
            </div>

            {/* Floating Background Elements */}
            <div className="absolute top-20 right-20 w-20 h-20 bg-[var(--accent-color)] rounded-full opacity-20 animate-pulse" />
            <div className="absolute bottom-24 left-16 w-16 h-16 bg-[var(--accent2-color)] rounded-full opacity-15 animate-bounce" />
            <div className="absolute top-1/2 right-1/3 w-12 h-12 bg-[var(--accent3-color)] rounded-full opacity-25 animate-ping" />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side */}
                    <div className="space-y-8">
                        {/* Badge */}
                        import {FaHandshake} from "react-icons/fa";

                        <div className="inline-flex items-center px-4 py-2 bg-[var(--accent-color)] text-white rounded-full backdrop-blur-sm shadow-md font-semibold text-sm uppercase tracking-wide">
                            <FaHandshake className="mr-2" />
                            Let’s Collaborate
                        </div>


                        {/* Heading and Subtext */}
                        <div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--light-text-color)] mb-6 leading-tight font-[var(--font-family-heading)]">
                                Ready to Elevate Your{" "}
                                <span className="bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent2-color)] bg-clip-text text-transparent">
                                    Video Content?
                                </span>
                            </h2>
                            <p className="text-xl text-gray-300 leading-relaxed mb-8 font-[var(--font-family-body)]">
                                Transform your business with captivating video content that
                                drives engagement, builds trust, and converts viewers into loyal
                                customers. Let’s discuss how we can bring your vision to life.
                            </p>
                        </div>

                        {/* Feature List */}
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { icon: <FaBolt />, label: "Fast Turnaround", color: "accent-color" },
                                { icon: <FaStar />, label: "Premium Quality", color: "accent2-color" },
                                { icon: <FaUsers />, label: "Expert Team", color: "accent3-color" },
                                { icon: <FaChartLine />, label: "Proven Results", color: "accent4-color" },
                            ].map(({ icon, label, color }, i) => (
                                <div key={i} className="flex items-center space-x-3">
                                    <div
                                        className={`w-8 h-8 bg-[var(--${color})] bg-opacity-20 rounded-full flex items-center justify-center text-[var(--${color})] text-sm`}
                                    >
                                        {icon}
                                    </div>
                                    <span className="text-gray-300 font-medium">{label}</span>
                                </div>
                            ))}
                        </div>

                        {/* Contact Info Box */}
                        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20">
                            <h3 className="text-lg font-semibold text-[var(--light-text-color)] mb-4 font-[var(--font-family-heading)]">
                                Get In Touch Today
                            </h3>
                            <div className="space-y-3 text-gray-300">
                                <div className="flex items-center">
                                    <FaEnvelope className="text-[var(--accent-color)] mr-3" />
                                    <span>hello@shootandtell.com</span>
                                </div>
                                <div className="flex items-center">
                                    <FaPhone className="text-[var(--accent2-color)] mr-3" />
                                    <span>+1 (555) 123-4567</span>
                                </div>
                                <div className="flex items-center">
                                    <FaClock className="text-[var(--accent3-color)] mr-3" />
                                    <span>Response within 24 hours</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 border border-white border-opacity-20 shadow-2xl">
                        <div className="text-center mb-8">
                            <h3 className="text-3xl font-bold text-[var(--light-text-color)] mb-4 font-[var(--font-family-heading)]">
                                Start Your Project
                            </h3>
                            <p className="text-gray-300 leading-relaxed font-[var(--font-family-body)]">
                                Fill out the form below and we'll get back to you within 24
                                hours with a custom proposal.
                            </p>
                        </div>

                        {/* Form */}
                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="John"
                                        className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] backdrop-blur-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Doe"
                                        className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] backdrop-blur-sm"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="john@example.com"
                                    className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] backdrop-blur-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Project Type</label>
                                <select
                                    name="projectType"
                                    className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] backdrop-blur-sm"
                                >
                                    <option className="text-gray-800" value="">Select a service</option>
                                    <option className="text-gray-800" value="short-form">Short-Form Videos</option>
                                    <option className="text-gray-800" value="youtube">YouTube Videos</option>
                                    <option className="text-gray-800" value="repurpose">Content Repurposing</option>
                                    <option className="text-gray-800" value="social-creatives">Social Media Creatives</option>
                                    <option className="text-gray-800" value="custom">Custom Project</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Project Details</label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                                    className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] backdrop-blur-sm resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent2-color)] text-white py-4 px-8 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[var(--accent-color)] focus:ring-opacity-50"
                            >
                                Send My Message <FaPaperPlane className="ml-2 inline" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default ContactCTA;
