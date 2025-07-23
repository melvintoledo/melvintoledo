import React from "react";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section
      id="heroSection"
      className="code-section relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image + Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/9b37d157-4dec-424b-4cc1-27eb827d2800/public"
          alt="A young man focuses intently on his dual monitor setup, editing video content in a dimly lit room decorated with ambient blue lights. His thoughtful expression reveals concentration."
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--dark-background-color)] via-[var(--dark-background-color)] to-transparent opacity-85" />
        <div className="absolute inset-0 bg-[var(--primary-color)] opacity-20" />
      </div>

      {/* Animated Decorative Circles */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-[var(--accent-color)] rounded-full opacity-20 animate-bounce" />
      <div className="absolute bottom-32 right-16 w-20 h-20 bg-[var(--accent2-color)] rounded-full opacity-15 animate-pulse" />
      <div
        className="absolute top-1/3 right-20 w-12 h-12 bg-[var(--accent3-color)] rounded-full opacity-25 animate-bounce"
        style={{ animationDelay: "1s" }}
      />

      {/* Main Content */}
      <motion.div initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[var(--light-text-color)] mb-6 leading-tight font-[var(--font-family-heading)]">
            <span className="bg-gradient-to-r from-[var(--accent-color)] via-[var(--accent2-color)] to-[var(--accent4-color)] bg-clip-text text-transparent animate-pulse">
              Shoot and Tell
            </span>
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 leading-relaxed font-[var(--font-family-body)] max-w-3xl mx-auto">
            Crafting captivating video content and strategically utilizing video content are my twin passions.
            <br />
            <span className="text-[var(--accent-color)] font-semibold">Work with us!</span>
          </p>


          {/* Metrics */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-12">
            {[
              { value: "3+", label: "Years Experience", color: "var(--accent-color)" },
              { value: "100+", label: "Projects Completed", color: "var(--accent2-color)" },
              { value: "24/7", label: "Support Available", color: "var(--accent4-color)" },
            ].map((item, index) => (
              <React.Fragment key={index}>
                <div className="text-center">
                  <div
                    className="text-3xl font-bold font-[var(--font-family-heading)]"
                    style={{ color: item.color }}
                  >
                    {item.value}
                  </div>
                  <div className="text-gray-400 font-medium">{item.label}</div>
                </div>
                {index < 2 && <div className="hidden sm:block w-px h-12 bg-gray-600" />}
              </React.Fragment>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="space-y-6">
            <a
              href="/contact"
              className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent2-color)] text-[var(--primary-button-text-color)] text-xl font-bold rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
            >
              <span>Let's Collaborate</span>
              <svg
                className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <div>
              <a
                href="/portfolio"
                className="inline-flex items-center px-8 py-3 border-2 border-[var(--light-text-color)] text-[var(--light-text-color)] text-lg font-semibold rounded-full hover:bg-[var(--light-text-color)] hover:text-[var(--dark-text-color)] transition-all duration-300"
              >
                View Our Work
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Down Icon */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-[var(--light-text-color)]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>



    </section>
  );
};

export default Hero;
