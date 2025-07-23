import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import {
  faMobileAlt,
  faCheck,
  faRecycle,
  faPalette,
  faBullhorn,
  faCogs,
  faCameraRetro,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

import Header from "../General/Header.jsx";
import Footer from "../General/Footer.jsx";

const CompleteService = () => {
  return (
    <div className="scroll-smooth min-h-screen bg-[var(--dark-background-color)] text-white">
      <Header />

      <motion.section initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true}}
        className="code-section py-24 bg-[var(--dark-background-color)] relative overflow-hidden"
      >
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-5 z-0">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25% 25%, #E85C05 1px, transparent 1px), radial-gradient(circle at 75% 75%, #FF7A1A 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        {/* Animated Dots */}
        <div className="absolute top-16 right-16 w-20 h-20 bg-[var(--accent-color)] rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-24 left-20 w-16 h-16 bg-[var(--accent2-color)] rounded-full opacity-15 animate-bounce"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Text */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-[var(--accent-color)] text-white rounded-full mb-6 shadow-md">
              <FontAwesomeIcon icon={faMobileAlt} className="text-white mr-2" />
              <span className="font-semibold text-sm uppercase tracking-wide">Our Services</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--light-text-color)] mb-6 leading-tight font-[var(--font-family-heading)]">
              Transform Your{" "}
              <span className="bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent2-color)] bg-clip-text text-transparent">
                Content
              </span>
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-[var(--font-family-body)]">
              From concept to creation, we deliver exceptional video services that captivate your audience and drive engagement across all platforms.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <ServiceCard key={idx} {...service} />
            ))}
          </div>

          {/* Back to Home CTA */}
          <div className="text-center mt-16">
            <Link
              to="/"
              className="inline-flex items-center px-10 py-5 border-2 border-[var(--accent-color)] text-[var(--accent-color)] text-lg font-bold rounded-full hover:bg-[var(--accent-color)] hover:text-white transition-all duration-300 group"
            >
              <span>Back to Home</span>
              <svg
                className="ml-3 w-6 h-6 group-hover:-translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12h18m-6 6l6-6-6-6" />
              </svg>
            </Link>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

// Service list
const services = [
  {
    title: "Short-Form Videos",
    icon: faMobileAlt,
    color: "var(--accent-color)",
    bg: "from-[var(--accent-color)] to-[var(--accent2-color)]",
    border: "border-[var(--accent-color)]",
    shadowColor: "[var(--accent-color)]",
    features: ["Instagram Reels", "TikTok Shorts", "Optimization"],
  },
  {
    title: "YouTube Videos",
    icon: faYoutube,
    color: "var(--accent2-color)",
    bg: "from-[var(--accent2-color)] to-[var(--accent4-color)]",
    border: "border-[var(--accent2-color)]",
    shadowColor: "[var(--accent2-color)]",
    features: ["Vlogs", "Tutorials", "SEO"],
  },
  {
    title: "Repurpose Content",
    icon: faRecycle,
    color: "var(--accent3-color)",
    bg: "from-[var(--accent3-color)] to-[var(--accent-color)]",
    border: "border-[var(--accent3-color)]",
    shadowColor: "[var(--accent3-color)]",
    features: ["Multi-Platform", "Custom Formats", "ROI"],
  },
  {
    title: "Social Media Creatives",
    icon: faPalette,
    color: "var(--accent4-color)",
    bg: "from-[var(--accent4-color)] to-[var(--accent2-color)]",
    border: "border-[var(--accent4-color)]",
    shadowColor: "[var(--accent4-color)]",
    features: ["Graphics", "Branding", "Design"],
  },
  {
    title: "Promotional Videos",
    icon: faBullhorn,
    color: "var(--accent-color)",
    bg: "from-[var(--accent-color)] to-[var(--accent3-color)]",
    border: "border-[var(--accent-color)]",
    shadowColor: "[var(--accent-color)]",
    features: ["Brand Teasers", "Product Ads", "Launch Videos"],
  },
  {
    title: "Automation & Scheduling",
    icon: faCogs,
    color: "var(--accent2-color)",
    bg: "from-[var(--accent2-color)] to-[var(--accent3-color)]",
    border: "border-[var(--accent2-color)]",
    shadowColor: "[var(--accent2-color)]",
    features: ["Auto Posts", "Batch Edits", "Efficiency Tools"],
  },
  {
    title: "Event Coverage",
    icon: faCameraRetro,
    color: "var(--accent3-color)",
    bg: "from-[var(--accent3-color)] to-[var(--accent2-color)]",
    border: "border-[var(--accent3-color)]",
    shadowColor: "[var(--accent3-color)]",
    features: ["Corporate Events", "Behind the Scenes", "Live Footage"],
  },
  {
    title: "Video Editing",
    icon: faEdit,
    color: "var(--accent4-color)",
    bg: "from-[var(--accent4-color)] to-[var(--accent-color)]",
    border: "border-[var(--accent4-color)]",
    shadowColor: "[var(--accent4-color)]",
    features: ["Transitions", "Effects", "Subtitles"],
  },
];

// Card component
const ServiceCard = ({ title, icon, color, bg, border, shadowColor, features }) => (
  <div className="group relative">
    <div
      className={`bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 h-full border border-gray-700 hover:${border} transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-${shadowColor}/20`}
    >
      <div className={`w-16 h-16 bg-gradient-to-br ${bg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
        <FontAwesomeIcon icon={icon} className="text-white text-2xl" />
      </div>
      <h3 className={`text-2xl font-bold text-[var(--light-text-color)] mt-6 mb-4 font-[var(--font-family-heading)] group-hover:text-[${color}]`}>
        {title}
      </h3>
      <ul className="space-y-2 mb-4">
        {features.map((feat, index) => (
          <li key={index} className="flex items-center text-sm text-gray-400">
            <FontAwesomeIcon icon={faCheck} className="text-[var(--accent-color)] mr-2" />
            {feat}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default CompleteService;
