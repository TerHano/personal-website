import VisualLeaseLogo from "../../assets/images/companies/vl_logo.png";
import PSEGLogo from "../../assets/images/companies/pseg_logo.png";
import CostarGroupLogo from "../../assets/images/companies/costar_group_logo.png";
import High5GamesLogo from "../../assets/images/companies/high_5_games_logo.png";
import { BlackWhiteGradientText } from "../black-white-gradient-text";

import styles from "./company-showcase.module.css";

export const CompanyShowcase = () => {
  return (
    <div className="flex flex-col items-center gap-1 w-full">
      <BlackWhiteGradientText
        className="font-bold text-xl sm:text-2xl md:text-3xl animate-fade-in-up"
        label="Proud developer for"
      />

      <div className={styles.companyContainer}>
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
    </div>
  );
};

export const CompanyLogoImage = ({ imageSrc }: { imageSrc: string }) => {
  return (
    <img
      alt="Company Logo"
      className="dark:brightness-0 dark:invert max-w-40 brightness-100 invert-0"
      src={imageSrc}
      style={{ transform: "translateZ(0)" }}
    />
  );
};
