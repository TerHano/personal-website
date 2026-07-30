import VisualLeaseLogo from "../../assets/images/companies/vl_logo.png";
import PSEGLogo from "../../assets/images/companies/pseg_logo.png";
import CostarGroupLogo from "../../assets/images/companies/costar_group_logo.png";
import High5GamesLogo from "../../assets/images/companies/high_5_games_logo.png";
import { RuleLabel } from "../typography";

import styles from "./company-showcase.module.css";

export const CompanyShowcase = () => {
  return (
    <div className="flex w-full flex-col gap-5">
      <RuleLabel>Proud developer for</RuleLabel>

      <div className={styles.companyContainer}>
        <div
          aria-label="Company logos"
          className="animate-ticker -mx-2 flex items-center justify-evenly gap-8"
          // The container pauses the marquee on :focus-within, so this is the
          // only way a keyboard user can stop the motion — keep it focusable.
          // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
          tabIndex={0}
        >
          <CompanyLogoImage imageSrc={High5GamesLogo} name="High 5 Games" />
          <CompanyLogoImage
            imageSrc={PSEGLogo}
            name="Public Service Enterprise Group"
          />
          <CompanyLogoImage imageSrc={VisualLeaseLogo} name="Visual Lease" />
          <CompanyLogoImage imageSrc={CostarGroupLogo} name="CoStar Group" />
          <CompanyLogoImage imageSrc={High5GamesLogo} name="" />
          <CompanyLogoImage imageSrc={PSEGLogo} name="" />
          <CompanyLogoImage imageSrc={VisualLeaseLogo} name="" />
          <CompanyLogoImage imageSrc={CostarGroupLogo} name="" />
        </div>
      </div>
    </div>
  );
};

export const CompanyLogoImage = ({
  imageSrc,
  name,
}: {
  imageSrc: string;
  name: string;
}) => {
  return (
    <img
      // The duplicated half of the ticker is decorative; only the first pass
      // carries an accessible name.
      alt={name ? `${name} logo` : ""}
      aria-hidden={name ? undefined : true}
      className="max-w-40 opacity-80 transition-opacity duration-300 hover:opacity-100 dark:brightness-0 dark:invert"
      src={imageSrc}
      style={{ transform: "translateZ(0)" }}
    />
  );
};
