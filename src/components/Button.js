import React from 'react';

export default ({ src, width, height, className, alt, button, onClick, title }) => (
  <img
    alt={alt}
    title={title}
    src={src}
    width={width}
    height={height}
    className={className}
    style={button ? { cursor: 'pointer' } : {}}
    onClick={onClick}
  />
);
