import { Card, CardBody } from "@heroui/card";

import VisualLeaseLogo from "../assets/images/companies/vl_logo.png";
import PSEGLogo from "../assets/images/companies/pseg_logo.png";
import CostarGroupLogo from "../assets/images/companies/costar_group_logo.png";
import High5GamesLogo from "../assets/images/companies/high_5_games_logo.png";

import { BlackWhiteGradientText } from "./black-white-gradient-text";

export const CompanyShowcase = () => {
  return (
    <div className="flex flex-col items-center gap-2 w-full">
      <BlackWhiteGradientText
        className="font-bold text-xl sm:text-2xl md:text-3xl animate-fade-in-up"
        label="Proud developer for"
      />
      <Card fullWidth className="rounded-none lg:rounded">
        <CardBody className="px-0 animate-fade-in-up">
          <div className="flex overflow-hidden animate-fade-in-left">
            <div className="flex -mx-2 gap-8 animate-ticker items-center justify-evenly">
              <CompanyLogoImage imageSrc={High5GamesLogo} />
              <CompanyLogoImage imageSrc={PSEGLogo} />
              <CompanyLogoImage imageSrc={VisualLeaseLogo} />
              <CompanyLogoImage imageSrc={CostarGroupLogo} />

              <CompanyLogoImage imageSrc={High5GamesLogo} />
              <CompanyLogoImage imageSrc={PSEGLogo} />
              <CompanyLogoImage imageSrc={VisualLeaseLogo} />
              <CompanyLogoImage imageSrc={CostarGroupLogo} />
            </div>
          </div>
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
      className="dark:brightness-0 dark:invert max-w-40 brightness-100 invert-0"
    />
  );
};
