// App.jsx
import React from 'react';
import Header from './Header';
import FlavorShowcase from './FlavorShowcase';

const App = () => {
    return (
        <div className="relative">
            <Header />
            <main>
                <FlavorShowcase />
            </main>
        </div>
    );
};

export default App;
