import React from "react";

export interface LogoProps {
  src?: string;
}

const Logo = ({ src }: LogoProps) => {
  return (
    <div>
      <img src={src} alt="My logo" />
    </div>
  );
};

export default Logo;
