import { BlackWhiteGradientText } from "../components/black-white-gradient-text";
import { Animate } from "../components/animate";

import { Group } from "./Group";

export const Section = ({
  id,
  label,
  description,
  children,
}: {
  id: string;
  label: string;
  description?: string;
  children: React.ReactNode;
}) => {
  return (
    <section
      className="relative flex flex-col items-center gap-2 justify-center px-3 sm:px-6 py-8 sm:py-10 w-full sm:items-center rounded-3xl border border-default-200/60 dark:border-default-100/10 bg-default-100/30 dark:bg-default-100/5 backdrop-blur-sm overflow-hidden"
      id={id}
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 -left-16 h-44 w-44 rounded-full bg-primary-300/10 blur-3xl" />
        <div className="absolute -bottom-20 -right-14 h-44 w-44 rounded-full bg-warning-300/10 blur-3xl" />
      </div>
      <Animate animation="fade-in-up" className="w-full" onView>
        <Group className="gap-0 mb-2" direction="vertical">
          <BlackWhiteGradientText
            className="text-3xl font-bold text-center"
            label={label}
          />
          {description ? (
            <BlackWhiteGradientText
              className="font-semibold text-small"
              label={description}
            />
          ) : null}
        </Group>

        {children}
      </Animate>
    </section>
  );
};
