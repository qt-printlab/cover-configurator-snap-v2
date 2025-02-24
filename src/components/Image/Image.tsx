import React from "react";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}
const Image = ({ src, alt, className }: ImageProps) => (
  <img src={src} alt={alt} className={className} />
);

export default Image;
