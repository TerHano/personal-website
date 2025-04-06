import { BlackWhiteGradientText } from "../black-white-gradient-text";
import { useAppearOnScroll } from "../hooks/useAppearOnScroll";
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
  const { ref, shouldAppear } = useAppearOnScroll();

  return (
    <section
      ref={ref}
      className="flex flex-col items-center gap-2 justify-center mx-6 mb-8 sm:items-center animate-fade-in-up"
      id={id}
      style={{ animationPlayState: shouldAppear ? "running" : "paused" }}
    >
      <Group direction="vertical" className="gap-0 mb-2">
        <BlackWhiteGradientText
          className="text-3xl font-bold text-center mb-1"
          label={label}
        />
        {description ? (
          <BlackWhiteGradientText
            className="font-semibold"
            label={description}
          />
        ) : null}
      </Group>

      {children}
    </section>
  );
};
