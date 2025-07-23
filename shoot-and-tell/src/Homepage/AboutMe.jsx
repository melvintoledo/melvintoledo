import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useCountUp } from "../hooks/useCountUp";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const AboutMe = () => {
  const stats = [
    {
      icon: "fas fa-video",
      colorClass: "bg-[var(--accent-color)] text-[var(--accent-color)]",
      stat: 500,
      label: "Videos Created",
      suffix: "+",
    },
    {
      icon: "fas fa-trophy",
      colorClass: "bg-[var(--accent2-color)] text-[var(--accent2-color)]",
      stat: 98,
      label: "Client Satisfaction",
      suffix: "%",
    },
  ];

  return (
    <section
      id="about"
      className="code-section py-24 bg-[var(--light-background-color)] text-[var(--dark-text-color)] relative overflow-hidden"
    >
      {/* Decorative Circles */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-[var(--accent-color)] rounded-full opacity-10 animate-pulse" />
      <div className="absolute bottom-20 left-16 w-24 h-24 bg-[var(--accent2-color)] rounded-full opacity-15" />

      <motion.div initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: false, amount: 0.5 }} 
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-[var(--accent-color)] text-white rounded-full animate-fadeIn shadow-md">
              <FontAwesomeIcon icon={faUserCircle} className="mr-2" />
              <span className="font-semibold text-sm uppercase tracking-wide">
                About Us
              </span>
            </div>



            {/* Heading */}
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--dark-text-color)] mb-6 leading-tight font-[var(--font-family-heading)]">
                <span>Meet </span>
                <span className="bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent2-color)] bg-clip-text text-transparent">
                  Shoot and Tell
                </span>
              </h2>
              <div className="space-y-6 text-lg text-[var(--gray-text-color)] leading-relaxed font-[var(--font-family-body)]">
                <p>
                  Greetings! We are{" "}
                  <strong className="text-[var(--dark-text-color)]">Shoot and Tell</strong>, and I
                  specialize in assisting coaches and businesses in boosting their
                  engagement and receiving more inquiries by strategically utilizing
                  video content.
                </p>
                <p>
                  With over{" "}
                  <strong className="text-[var(--accent-color)]">three years of expertise</strong>, I
                  deliver exceptional video services, crafting captivating content that
                  exceeds expectations. My team and I meticulously refine every detail for
                  flawless execution.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              {stats.map(({ icon, colorClass, stat, label, suffix }, idx) => {
                const { ref, inView } = useInView({ triggerOnce: false });
                const count = useCountUp(stat, inView);

                return (
                  <div
                    ref={ref}
                    key={idx}
                    className="bg-white p-6 rounded-2xl shadow-lg border border-[var(--light-border-color)] transform hover:scale-105 transition-transform duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-12 h-12 flex items-center justify-center rounded-full ${colorClass} bg-opacity-10`}
                      >
                        <i className={`${icon} text-xl`} />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-[var(--dark-text-color)] font-[var(--font-family-heading)]">
                          {count}
                          {suffix}
                        </div>
                        <div className="text-sm text-[var(--gray-text-color)]">{label}</div>
                      </div>
                    </div>
                  </div>
                );
              })}


            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-[var(--accent-color)] text-white font-semibold rounded-full hover:bg-[var(--accent3-color)] transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
              >
                <span>Work With Me</span>
                <svg
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
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

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative z-10">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/65f0abb5-7bc3-46ec-f94c-f585a8331200/public"
                  alt="Confident man recording video content"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-color)] via-transparent to-transparent opacity-20" />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-2xl border border-[var(--light-border-color)]">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-[var(--accent-color)] bg-opacity-10 rounded-full">
                    <i className="fas fa-play text-[var(--accent-color)] text-lg" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[var(--dark-text-color)]">
                      Video Expert
                    </div>
                    <div className="text-xs text-[var(--gray-text-color)]">
                      3+ Years Experience
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Oval Behind */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-[var(--accent-color)] to-[var(--accent2-color)] rounded-full opacity-10 -z-10" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
