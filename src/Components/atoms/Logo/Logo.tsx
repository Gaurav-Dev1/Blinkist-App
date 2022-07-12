import React from "react";
import BlinkistLogo from "./BlinkistLogo.svg";

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
