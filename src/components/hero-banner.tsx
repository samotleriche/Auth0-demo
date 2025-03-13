import Image from "next/image";
import React from "react";

export const HeroBanner: React.FC = () => {
  const logo = "https://gradle.com/assets/images/gradle.svg";

  return (
    <div className="hero-banner hero-banner--pink-yellow">
      <div className="hero-banner__logo">
        <Image
          className="hero-banner__image hero-banner--pink-yellow"
          src={logo}
          alt="Next.js logo"
          height={108}
          width={108}
        />
      </div>
      <h1 className="hero-banner__headline">Verify Email Demo Flow</h1>
    </div>
  );
};
