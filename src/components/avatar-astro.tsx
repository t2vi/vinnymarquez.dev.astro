import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

type AvatarComponentProps = {
  src: string;
  alt: string;
  fallbackText: string;
};

export const AvatarComponent = ({ src, alt, fallbackText }: AvatarComponentProps) => {
  return (
    <Avatar>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>{fallbackText}</AvatarFallback>
    </Avatar>
  );
};