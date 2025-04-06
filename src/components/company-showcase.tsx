import { Card, CardBody } from "@heroui/card";

import Glide from "@glidejs/glide";

import VisualLeaseLogo from "../assets/images/companies/vl_logo.png";
import PSEGLogo from "../assets/images/companies/pseg_logo.png";
import CostarGroupLogo from "../assets/images/companies/costar_group_logo.png";
import High5GamesLogo from "../assets/images/companies/high_5_games_logo.png";

import { BlackWhiteGradientText } from "./black-white-gradient-text";
import { Button } from "@heroui/button";
import { useEffect } from "react";

export const CompanyShowcase = () => {
  useEffect(() => {
    const glide = new Glide(".glide", {
      type: "carousel",
      breakpoints: {
        800: {
          perView: 2,
        },
        1000: {
          perView: 3,
          gap: 0,
        },
      },
      perView: 4,
      autoplay: 1,
      peek: 10,
      // hoverpause: false,
      animationDuration: 6000,
      animationTimingFunc: "linear",
      //gap: 10,
    }).mount();

    return () => {
      glide.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-2 w-full">
      <BlackWhiteGradientText
        className="font-bold text-base sm:text-xl md:text-2xl animate-fade-in-up"
        label="Proud developer for"
      />
      <Card fullWidth className="rounded-none lg:rounded">
        <CardBody className="px-4 animate-fade-in-up">
          <div className="glide">
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides items-center justify-center">
                <li className="glide__slide">
                  <CompanyLogoImage imageSrc={High5GamesLogo} />
                </li>
                <li className="glide__slide">
                  <CompanyLogoImage imageSrc={PSEGLogo} />
                </li>
                <li className="glide__slide">
                  <CompanyLogoImage imageSrc={VisualLeaseLogo} />
                </li>
                <li className="glide__slide">
                  <CompanyLogoImage imageSrc={CostarGroupLogo} />
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="flex items-center justify-evenly gap-6 overflow-hidden animate-fade-in-left">
            <CompanyLogoImage imageSrc={High5GamesLogo} />
            <CompanyLogoImage imageSrc={PSEGLogo} />
            <CompanyLogoImage imageSrc={VisualLeaseLogo} />
            <CompanyLogoImage imageSrc={CostarGroupLogo} />
          </div> */}
        </CardBody>
      </Card>
    </div>
  );
};

export const CompanyLogoImage = ({ imageSrc }: { imageSrc: string }) => {
  return (
    <img
      alt="Company Logo"
      src={imageSrc}
      className="dark:brightness-0 dark:invert min-w-32 max-w-56 brightness-100 invert-0"
    />
  );
};
