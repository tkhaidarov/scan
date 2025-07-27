import React from 'react';
import Image from 'next/image';

interface IImageProps {
  src: string;
  alt: string;
  className?: string;
}

const TheImage: React.FC<IImageProps> = ({ src, alt, className }) => {
  return <Image src={src} alt={alt} fill priority className={className} />;
};

export default TheImage;
