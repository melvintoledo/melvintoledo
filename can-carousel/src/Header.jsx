import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    return (
        <motion.header
            className="fixed top-0 left-0 w-full z-50"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 60 }}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative">
                {/* Logo Far Left */}
                <h1 className="text-3xl font-extrabold text-white tracking-tight drop-shadow-md -ml-40 mt-2">
                    BubblyPop<span className="text-pink-400">!</span>
                </h1>

                {/* Centered Buttons with same size */}
                <nav className="absolute left-1/2 transform -translate-x-1/2 flex space-x-4">
                    {[
                        { name: 'Flavors', color: 'hover:text-pink-400' },
                        { name: 'Shop', color: 'hover:text-green-400' },
                        { name: 'About', color: 'hover:text-blue-400' },
                        { name: 'Contact', color: 'hover:text-red-400' },
                    ].map(({ name, color }) => (
                        <a
                            key={name}
                            href="#"
                            className={`text-white text-xs font-bold uppercase rounded-full w-36 h-10 flex items-center justify-center border-2 border-white/80 transition duration-200 ${color} hover:bg-white/10`}
                        >
                            {name}
                        </a>
                    ))}
                </nav>
            </div>
        </motion.header>
    );
};

export default Header;
