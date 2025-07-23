import React, { useState, useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable";
import { FaChevronLeft, FaChevronRight, FaPlay, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
const slides = [
    {
        image: "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/677b89ce-1bec-40c2-e75d-739377998a00/public",
        badge: "YouTube Campaign",
        title: "Business Coach Success Story",
        description:
            "A comprehensive video marketing campaign that helped a business coach increase their client inquiries by 300%.",
        stats: { views: "2.5M", engagement: "850K" },
        features: ["YouTube Optimization", "Social Media Clips", "Brand Consistency", "Analytics Tracking"],
        badgeColor: "accent-color",
    },
    {
        image: "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/567cb164-62fe-4865-93a3-da3eb9054300/public",
        badge: "Social Media Campaign",
        title: "Viral Content Series",
        description:
            "Created a series of short-form videos that went viral across multiple platforms, generating massive brand awareness.",
        stats: { reach: "1.8M", retention: "95%" },
        features: ["Viral Strategy", "Multi-Platform", "Content Repurposing", "Engagement Boost"],
        badgeColor: "accent3-color",
    },
    {
        image: "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/46fc60a0-6b1e-4d8f-0fd7-d8d19b4cf300/public",
        badge: "Brand Video",
        title: "Professional Brand Film",
        description:
            "High-quality brand video showcasing company values and services, boosting trust and conversions.",
        stats: { views: "500K", conversion: "40%" },
        features: ["Cinematic Quality", "Professional Equipment", "Brand Storytelling", "Multi-Use Content"],
        badgeColor: "accent4-color",
    },
];

const VideoCarousel = () => {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    const handleNext = () => {
        setIndex((prev) => (prev + 1) % slides.length);
    };

    const handlePrev = () => {
        setIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const handlers = useSwipeable({
        onSwipedLeft: handleNext,
        onSwipedRight: handlePrev,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    useEffect(() => {
        timeoutRef.current = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timeoutRef.current);
    }, []);

    return (
        <motion.section
            id="portfolio" initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: false, amount: 0.5 }}
            className="relative py-24 bg-gradient-to-br from-white to-[var(--light-background-color)] overflow-hidden"
            {...handlers}
        >
            {/* Background decorations */}
            <div className="absolute top-20 left-10 w-24 h-24 bg-[var(--accent2-color)] rounded-full opacity-10 animate-bounce" />
            <div className="absolute bottom-16 right-16 w-32 h-32 bg-[var(--accent-color)] rounded-full opacity-10 animate-pulse" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 bg-[var(--accent-color)] text-white rounded-full mb-6 shadow-md">
                        <FaPlay className="text-white mr-2" />
                        <span className="font-semibold text-sm uppercase tracking-wide">
                            Sample Work
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--dark-text-color)] mb-6 leading-tight font-[var(--font-family-heading)]">
                        See Our{" "}
                        <span className="bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent2-color)] bg-clip-text text-transparent">
                            Work
                        </span>
                    </h2>
                    <p className="text-xl text-[var(--dark-text-color)] max-w-3xl mx-auto leading-relaxed font-[var(--font-family-body)]">
                        Explore our portfolio of captivating video content that drives engagement and delivers results.
                    </p>
                </div>

                {/* Slides */}
                <div className="overflow-hidden">
                    <div className="relative perspective-[1500px]">
                        <div
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{ transform: `translateX(-${index * 100}%)` }}
                        >
                            {slides.map((slide, i) => (
                                <div key={i} className="w-full flex-shrink-0 px-2">
                                    <div
                                        className={`grid lg:grid-cols-2 gap-12 items-center bg-white rounded-3xl p-10 transition-all duration-700 transform-gpu border-2 ${i === index
                                            ? "scale-100 border-[var(--accent-color)]"
                                            : "scale-95 opacity-80 border-transparent"
                                            }`}
                                        style={{ perspective: "1000px" }}
                                    >
                                        {/* Media */}
                                        <div className="relative group">
                                            <div className="aspect-video rounded-2xl overflow-hidden relative">
                                                <img
                                                    src={slide.image}
                                                    alt={slide.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-2xl"
                                                />
                                                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                                                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl">
                                                        <FaPlay className="text-[var(--primary-color)] text-2xl ml-1" />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Stats */}
                                            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-[var(--light-border-color)] text-[var(--dark-text-color)]">
                                                <div className="flex items-center space-x-3">
                                                    {Object.entries(slide.stats).map(([key, val]) => (
                                                        <div key={key} className="text-center">
                                                            <div className="text-lg font-bold text-[var(--accent-color)]">{val}</div>
                                                            <div className="text-xs text-[var(--gray-text-color)] capitalize">{key}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Text */}
                                        <div className="space-y-6">
                                            <span
                                                className="inline-block px-3 py-1 text-white text-sm font-semibold rounded-full mb-4"
                                                style={{ backgroundColor: `var(--${slide.badgeColor})`, opacity: 0.9 }}
                                            >
                                                {slide.badge}
                                            </span>

                                            <h3 className="text-3xl font-bold text-[var(--dark-text-color)] font-[var(--font-family-heading)]">
                                                {slide.title}
                                            </h3>

                                            <p className="text-lg text-[var(--gray-text-color)] font-[var(--font-family-body)]">
                                                {slide.description}
                                            </p>

                                            <div className="grid grid-cols-2 gap-4">
                                                {slide.features.map((feature, idx) => (
                                                    <div key={idx} className="flex items-center">
                                                        <FaCheckCircle className="text-[var(--accent-color)] mr-3" />
                                                        <span className="text-[var(--dark-text-color)] font-medium">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>


                {/* Indicators + Buttons Below */}
                {/* Controls: Prev | Dots | Next */}
                <div className="flex items-center justify-center mt-8 gap-6 flex-wrap">
                    {/* Prev Button */}
                    <button
                        onClick={handlePrev}
                        className="w-10 h-10 bg-[var(--accent-color)] text-white rounded-full flex items-center justify-center hover:bg-[var(--accent3-color)] transition-colors duration-200 shadow-md"
                    >
                        <FaChevronLeft />
                    </button>

                    {/* Dots */}
                    <ul className="flex items-center justify-center gap-3">
                        {slides.map((_, i) => (
                            <li
                                key={i}
                                className={`h-3 w-3 rounded-full ${i === index ? "bg-[var(--accent-color)]" : "bg-gray-300"
                                    }`}
                            />
                        ))}
                    </ul>

                    {/* Next Button */}
                    <button
                        onClick={handleNext}
                        className="w-10 h-10 bg-[var(--accent-color)] text-white rounded-full flex items-center justify-center hover:bg-[var(--accent3-color)] transition-colors duration-200 shadow-md"
                    >
                        <FaChevronRight />
                    </button>
                </div>


                {/* CTA */}
                <div className="text-center mt-16">
                    <a
                        href="/portfolio"
                        className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent2-color)] text-white text-lg font-bold rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
                    >
                        <span>See More Projects</span>
                        <svg
                            className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-200"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </motion.section>
    );
};

export default VideoCarousel;
