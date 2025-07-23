// FlavorShowcase.jsx
import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import CountUp from 'react-countup';
import clsx from 'clsx';
import './index.css';
import blueCan from './assets/blueCan.png';
import redCan from './assets/redCan.png';
import greenCan from './assets/greenCan.png';

const flavorConfig = {
    green: {
        color: '#4CAF50',
        label: 'GREEN',
        text: 'Juicy Pear',
        image: greenCan,
        x: 0.5,
        stats: [
            { value: 5, label: 'Juicy Layers' },
            { value: 90, label: 'Organic', suffix: '%' },
            { value: 0, label: 'Sugar' },
        ],
    },
    blue: {
        color: '#014381',
        label: 'BLUE',
        text: 'Wild Blueberry',
        image: blueCan,
        x: 0.2,
        stats: [
            { value: 3, label: 'Antioxidants' },
            { value: 100, label: 'Natural', suffix: '%' },
            { value: 0, label: 'Artificial Colors' },
        ],
    },
    red: {
        color: '#F44336',
        label: 'RED',
        text: 'Bright Cherry',
        image: redCan,
        x: 0.8,
        stats: [
            { value: 4, label: 'Flavor Blasts' },
            { value: 85, label: 'Vitamin Boost', suffix: '%' },
            { value: 0, label: 'Caffeine' },
        ],
    },
};


const positionVariants = {
    left: { x: '-320%', scale: 1.5, opacity: 0.6, zIndex: 1 },
    center: { x: '0%', scale: 2.2, opacity: 1, zIndex: 3 },
    right: { x: '320%', scale: 1.5, opacity: 0.6, zIndex: 2 },
};

const FlavorShowcase = () => {
    const [activeFlavor, setActiveFlavor] = useState('green');
    const [order, setOrder] = useState(['blue', 'green', 'red']);

    // Motion value for smooth transition of background color
    const colorValue = useMotionValue(flavorConfig[activeFlavor].color);

    const background = useTransform(colorValue, (color) => {
        return `radial-gradient(
            circle at 68% 49%,
            white 0%,
            white 15%,
            ${color}66 25%,
            ${color}CC 60%,
            ${color}FF 100%
        )`;
    });

    useEffect(() => {
        animate(colorValue, flavorConfig[activeFlavor].color, {
            duration: 0.3,
            ease: [0.42, 0, 0.58, 1],
        });
    }, [activeFlavor]);

    const switchFlavor = (flavor) => {
        if (flavor === activeFlavor) return;

        const index = order.indexOf(flavor);
        if (index === -1) return;

        const newOrder = [...order];
        while (newOrder[1] !== flavor) {
            newOrder.push(newOrder.shift());
        }
        setOrder(newOrder);
        setActiveFlavor(flavor);
    };

    return (
        <section className="relative min-h-screen overflow-hidden w-full">
            {/* Dynamic Radial Background */}
            <motion.div
                className="absolute inset-0 z-0 w-full h-full"
                style={{ background }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
            />

            {/* Foreground Content */}
            <div className="relative z-30 max-w-7xl mx-auto px-4 py-20 pt-60 pb-50">
                <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-24 items-center">
                    {/* Text Side */}
                    <div className="text-center lg:text-left lg:-ml-60">
                        <h1 className="text-5xl sm:text-8xl lg:text-8xl font-extrabold mb-6 leading-tight tracking-tight text-white">
                            Sip the Bold. <br />
                            <span
                                className="block"
                                style={{
                                    color: '#ffffff', // white text
                                    textShadow: `12px 10px 5px ${flavorConfig[activeFlavor].color}CC`, // darker flavor shadow
                                }}
                            >
                                {flavorConfig[activeFlavor].text}
                            </span>

                        </h1>

                        <p className="text-xl sm:text-2xl text-gray-800 font-medium mb-8 text-white">
                            Bubbly. Fruity. Unforgettable.<br />
                            Grab a can, taste the hype.
                        </p>

                        <div className="flex gap-4 mb-12 justify-center lg:justify-start flex-wrap">
                            <a
                                href="#"
                                className="px-7 py-3 rounded-full text-white text-lg font-bold uppercase tracking-wide transition transform 
        shadow-[0_2px_0_0_white] hover:translate-y-1 active:translate-y-0 active:shadow-none border-2 border-white"
                                style={{ backgroundColor: flavorConfig[activeFlavor].color }}
                            >
                                Taste the Difference
                            </a>

                            <a
                                href="#"
                                className="px-7 py-3 rounded-full text-lg font-bold uppercase tracking-wide border-2 transition transform hover:scale-105"
                                style={{
                                    borderColor: 'white',
                                    color: 'white',
                                }}
                            >
                                Explore Flavors
                            </a>
                        </div>

                        {/* ✅ Flavor Stats */}
                        <div className="flex justify-start">
                            <div className="grid grid-cols-3 gap-4 text-center max-w-2xl w-full">
                                {flavorConfig[activeFlavor].stats.map((stat, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-white/80 backdrop-blur-sm rounded-xl px-4 py-3 shadow-md hover:shadow-lg transition-all duration-300"
                                    >
                                        <div
                                            className="text-2xl font-bold mb-1"
                                            style={{ color: flavorConfig[activeFlavor].color }}
                                        >
                                            <CountUp
                                                start={0}
                                                end={stat.value}
                                                duration={1.5}
                                                separator=","
                                                suffix={stat.suffix || ''}
                                                preserveValue={false}
                                            />
                                        </div>
                                        <div className="text-gray-800 text-sm font-medium">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Can Carousel */}
                    <div className="relative h-[40vh] sm:h-[50vh] w-full flex items-center justify-center">
                        {order.map((flavor, idx) => {
                            const pos = idx === 0 ? 'left' : idx === 1 ? 'center' : 'right';
                            const config = flavorConfig[flavor];

                            return (
                                <motion.div
                                    key={flavor}
                                    className="absolute cursor-pointer"
                                    variants={positionVariants}
                                    animate={pos}
                                    transition={{ type: 'spring', stiffness: 80, damping: 20 }}
                                    onClick={() => switchFlavor(flavor)}
                                >
                                    <img
                                        src={config.image}
                                        alt={config.label}
                                        className={clsx(
                                            'drop-shadow-xl transition-all duration-500',
                                            pos === 'center'
                                                ? 'w-32 sm:w-40 h-64 sm:h-80'
                                                : 'w-20 sm:w-28 h-48 sm:h-64'
                                        )}
                                    />
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Flavor Pills */}
                    <div className="col-span-2 mt-10 flex justify-center gap-4 flex-wrap">
                        {Object.keys(flavorConfig).map((flavor) => {
                            const isActive = activeFlavor === flavor;
                            const color = flavorConfig[flavor].color;
                            const description = `Flavor: ${flavorConfig[flavor].text}`;

                            return (
                                <button
                                    key={flavor}
                                    onClick={() => switchFlavor(flavor)}
                                    className={clsx(
                                        'relative group px-6 py-3 rounded-full font-semibold transition-all duration-300 ease-out transform flex items-center gap-2 shadow-md hover:shadow-xl hover:scale-105 active:scale-100 active:shadow-inner border-2',
                                        isActive ? 'text-white' : 'text-black'
                                    )}
                                    style={{
                                        backgroundColor: isActive ? color : 'white',
                                        borderColor: color,
                                        color: isActive ? 'white' : color,
                                        boxShadow: isActive
                                            ? `0 0 8px 2px ${color}, 0 0 14px 4px ${color}88`
                                            : undefined,
                                    }}
                                >
                                    <span className="text-sm">🍹</span>
                                    {flavorConfig[flavor].text} {flavorConfig[flavor].label}

                                    {/* Tooltip */}
                                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-sm text-white bg-black bg-opacity-80 px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap z-50">
                                        {description}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FlavorShowcase;
