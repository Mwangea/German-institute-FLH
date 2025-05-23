import React from 'react';

const ShapeBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large circle */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary-500 opacity-5 animate-pulse" />
      
      {/* Small circles */}
      <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-secondary-500 opacity-5 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-accent-500 opacity-5 animate-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Blobs */}
      <div className="absolute top-1/3 -left-16 w-64 h-64 rounded-full bg-primary-500 opacity-5 blur-3xl animate-blob" />
      <div className="absolute bottom-0 right-1/3 w-80 h-80 rounded-full bg-secondary-500 opacity-5 blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-accent-500 opacity-5 blur-3xl animate-blob" style={{ animationDelay: '4s' }} />
      
      {/* Squares and rectangles */}
      <div className="absolute top-1/2 left-1/2 w-40 h-40 rotate-45 bg-primary-500 opacity-5 animate-float" />
      <div className="absolute bottom-20 left-20 w-20 h-20 rotate-12 bg-secondary-500 opacity-5 animate-float" style={{ animationDelay: '3s' }} />
      <div className="absolute top-20 right-1/3 w-16 h-16 rotate-45 bg-accent-500 opacity-5 animate-float" style={{ animationDelay: '5s' }} />
    </div>
  );
};

export default ShapeBackground;