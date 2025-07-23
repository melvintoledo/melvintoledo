import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  faMobileAlt,
  faCheck,
  faRecycle,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const Services = () => {
  return (
    <motion.section
      id="services" initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true}}
      className="code-section py-24 bg-[var(--dark-background-color)] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, #E85C05 1px, transparent 1px), radial-gradient(circle at 75% 75%, #FF7A1A 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-16 right-16 w-20 h-20 bg-[var(--accent-color)] rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-24 left-20 w-16 h-16 bg-[var(--accent2-color)] rounded-full opacity-15 animate-bounce"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-[var(--accent-color)] text-white rounded-full mb-6 shadow-md">
            <FontAwesomeIcon icon={faMobileAlt} className="text-white mr-2" />
            <span className="font-semibold text-sm uppercase tracking-wide">
              Our Services
            </span>
          </div>


          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--light-text-color)] mb-6 leading-tight font-[var(--font-family-heading)]">
            Transform Your{" "}
            <span className="bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent2-color)] bg-clip-text text-transparent">
              Content
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-[var(--font-family-body)]">
            From concept to creation, we deliver exceptional video services that
            captivate your audience and drive engagement across all platforms.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Service Card 1 */}
          <ServiceCard
            title="Short-Form Videos"
            icon={faMobileAlt}
            color="var(--accent-color)"
            bg="from-[var(--accent-color)] to-[var(--accent2-color)]"
            border="border-[var(--accent-color)]"
            shadowColor="[var(--accent-color)]"
            features={[
              "Instagram Reels & TikTok",
              "YouTube Shorts",
              "Platform Optimization",
            ]}
          />

          {/* Service Card 2 */}
          <ServiceCard
            title="YouTube Videos"
            icon={faYoutube}
            color="var(--accent2-color)"
            bg="from-[var(--accent2-color)] to-[var(--accent4-color)]"
            border="border-[var(--accent2-color)]"
            shadowColor="[var(--accent2-color)]"
            features={["Talking Head Videos", "Vlogs & Tutorials", "SEO Optimization"]}
          />

          {/* Service Card 3 */}
          <ServiceCard
            title="Repurpose Content"
            icon={faRecycle}
            color="var(--accent3-color)"
            bg="from-[var(--accent3-color)] to-[var(--accent-color)]"
            border="border-[var(--accent3-color)]"
            shadowColor="[var(--accent3-color)]"
            features={["Multi-Platform Clips", "Custom Formats", "Maximum ROI"]}
          />

          {/* Service Card 4 */}
          <ServiceCard
            title="Social Media Creatives"
            icon={faPalette}
            color="var(--accent4-color)"
            bg="from-[var(--accent4-color)] to-[var(--accent2-color)]"
            border="border-[var(--accent4-color)]"
            shadowColor="[var(--accent4-color)]"
            features={["Custom Graphics", "Brand Guidelines", "Multi-Format Design"]}
          />
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            to="/services"
            className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent2-color)] text-[var(--primary-button-text-color)] text-lg font-bold rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
          >
            <span>View All Services</span>
            <svg
              className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

const ServiceCard = ({
  title,
  icon,
  color,
  bg,
  border,
  shadowColor,
  features,
}) => (
  <div className="group relative">
    <div
      className={`bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 h-full border border-gray-700 hover:${border} transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-${shadowColor}/20`}
    >
      {/* Icon */}
      <div className="relative mb-6">
        <div
          className={`w-16 h-16 bg-gradient-to-br ${bg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
        >
          <FontAwesomeIcon icon={icon} className="text-white text-2xl" />
        </div>
        <div
          className={`absolute -top-1 -right-1 w-6 h-6 rounded-full animate-ping`}
          style={{ backgroundColor: color }}
        />
      </div>

      {/* Title */}
      <h3
        className={`text-2xl font-bold text-[var(--light-text-color)] mb-4 transition-colors duration-300 font-[var(--font-family-heading)] group-hover:text-[${color}]`}
      >
        {title}
      </h3>

      {/* Description */}
      <ul className="space-y-2 mb-6">
        {features.map((feat, index) => (
          <li key={index} className="flex items-center text-sm text-gray-400">
            <FontAwesomeIcon icon={faCheck} className="text-[var(--accent-color)] mr-2" />
            {feat}
          </li>
        ))}
      </ul>

      {/* Hover Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${bg} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}
      ></div>
    </div>
  </div>
);

export default Services;
