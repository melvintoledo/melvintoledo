import React from "react";
import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaInstagram,
    FaYoutube,
    FaLinkedin,
    FaTiktok,
    FaChevronRight,
    FaVideo,
    FaRecycle,
    FaPalette,
    FaChevronUp,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer
            id="global-footer"
            className="bg-[#343A40] text-[var(--light-text-color)] pt-20 pb-8"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer */}
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
                    {/* Brand Info */}
                    <div className="lg:col-span-2 space-y-6">
                        <a href="/" className="block w-fit">
                            <img
                                src="/SATwDMAinv.png"
                                alt="Shoot And Tell"
                                className="h-28 py-2 w-auto brightness-110"
                            />
                        </a>
                        <p className="text-gray-300 text-lg leading-relaxed max-w-md font-[var(--font-family-body)]">
                            Crafting captivating video content and strategically utilizing
                            video content are our twin passions. We help coaches and
                            businesses boost engagement through exceptional video services.
                        </p>
                        <div className="space-y-3 text-gray-300">
                            <div className="flex items-center">
                                <FaEnvelope className="text-[var(--accent2-color)] mr-3 text-lg" />
                                hello@shootandtell.com
                            </div>
                            <div className="flex items-center">
                                <FaPhone className="text-[var(--accent3-color)] mr-3 text-lg" />
                                +1 (555) 123-4567
                            </div>
                            <div className="flex items-center">
                                <FaMapMarkerAlt className="text-[var(--accent4-color)] mr-3 text-lg" />
                                Los Angeles, CA
                            </div>
                        </div>

                        {/* Socials */}
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="w-12 h-12 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-[var(--accent-color)] transition-all duration-300"
                            >
                                <FaInstagram className="text-white text-lg" />
                            </a>
                            <a
                                href="#"
                                className="w-12 h-12 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-[var(--accent2-color)] transition-all duration-300"
                            >
                                <FaYoutube className="text-white text-lg" />
                            </a>
                            <a
                                href="#"
                                className="w-12 h-12 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-[var(--accent3-color)] transition-all duration-300"
                            >
                                <FaLinkedin className="text-white text-lg" />
                            </a>
                            <a
                                href="#"
                                className="w-12 h-12 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-[var(--accent4-color)] transition-all duration-300"
                            >
                                <FaTiktok className="text-white text-lg" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold text-[var(--light-text-color)] mb-6 font-[var(--font-family-heading)]">
                            Quick Links
                        </h3>
                        <ul className="space-y-4">
                            {[
                                { href: "#", label: "Home" },
                                { href: "#about", label: "About Me" },
                                { href: "#services", label: "Services" },
                                { href: "#portfolio", label: "Portfolio" },
                                { href: "#contact", label: "Contact" },
                            ].map(({ href, label }, i) => (
                                <li key={i}>
                                    <a
                                        href={href}
                                        className="text-gray-300 hover:text-[var(--accent-color)] transition-colors duration-200 flex items-center group"
                                    >
                                        <FaChevronRight className="text-[var(--accent-color)] mr-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-xl font-bold text-[var(--light-text-color)] mb-6 font-[var(--font-family-heading)]">
                            Our Services
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="#services"
                                    className="text-gray-300 hover:text-[var(--accent-color)] transition-colors duration-200 flex items-center group"
                                >
                                    <FaVideo className="text-[var(--accent-color)] mr-2 text-sm" />
                                    Short-Form Videos
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    className="text-gray-300 hover:text-[var(--accent2-color)] transition-colors duration-200 flex items-center group"
                                >
                                    <FaYoutube className="text-[var(--accent2-color)] mr-2 text-sm" />
                                    YouTube Videos
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    className="text-gray-300 hover:text-[var(--accent3-color)] transition-colors duration-200 flex items-center group"
                                >
                                    <FaRecycle className="text-[var(--accent3-color)] mr-2 text-sm" />
                                    Content Repurposing
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    className="text-gray-300 hover:text-[var(--accent4-color)] transition-colors duration-200 flex items-center group"
                                >
                                    <FaPalette className="text-[var(--accent4-color)] mr-2 text-sm" />
                                    Social Media Creatives
                                </a>
                            </li>
                        </ul>

                        {/* CTA */}
                        <div className="mt-8">
                            <a
                                href="#contact"
                                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent2-color)] text-[var(--primary-button-text-color)] font-semibold rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 group"
                            >
                                <span>Get Started</span>
                                <svg
                                    className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="border-t border-gray-700 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-gray-400 text-sm font-[var(--font-family-body)]">
                            © 2025 Shoot And Tell. All rights reserved.
                        </div>
                        <div className="flex space-x-6">
                            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                                (label, i) => (
                                    <a
                                        key={i}
                                        href="#"
                                        className="text-gray-400 hover:text-[var(--accent-color)] text-sm transition-colors duration-200"
                                    >
                                        {label}
                                    </a>
                                )
                            )}
                        </div>
                        <div>
                            <button
                                onClick={() =>
                                    window.scrollTo({ top: 0, behavior: "smooth" })
                                }
                                className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-[var(--accent-color)] transition-all duration-300"
                            >
                                <FaChevronUp className="text-white text-sm" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
