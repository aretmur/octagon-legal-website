import React from 'react';

const Banner: React.FC = () => {
  return (
    <section className="relative pt-8 pb-16" style={{ 
      background: 'linear-gradient(to right, #1c1e2a, #283142)'
    }}>
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight" style={{ 
          fontFamily: 'Playfair Display, serif',
          color: '#f4f4f4'
        }}>
          Trusted Legal Experts
        </h1>
        <p className="text-lg md:text-xl font-light" style={{ 
          fontFamily: 'Lato, sans-serif',
          color: '#f4f4f4'
        }}>
          Criminal, Family, Employment & Immigration Law
        </p>
      </div>
    </section>
  );
};

export default Banner;