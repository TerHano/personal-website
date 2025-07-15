import { Group } from "../layouts/Group";
import { Section } from "../layouts/Section";

import { BlackWhiteGradientText } from "./black-white-gradient-text";

export const EducationSection = () => {
  return (
    <Section id="education" label="Education">
      <Group className="w-full max-w-lg" direction="vertical">
        <Group className="flex text-sm sm:text-base justify-between">
          <BlackWhiteGradientText label="Rutgers University" />
          <BlackWhiteGradientText label="May 2019" />
        </Group>
        <Group className="flex text-tiny sm:text-sm justify-between">
          <BlackWhiteGradientText label="B.S In Computer Science" />
          <BlackWhiteGradientText label="New Brunswick, NJ" />
        </Group>
      </Group>
    </Section>
  );
};
