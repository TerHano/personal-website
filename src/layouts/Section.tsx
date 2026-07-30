import { Animate } from "../components/animate";
import { Body, RuleLabel } from "../components/typography";

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
    <section className="w-full scroll-mt-24" id={id}>
      <Animate animation="fade-in-up" className="w-full" onView>
        <div className="flex flex-col gap-3">
          <RuleLabel>{label}</RuleLabel>
          {description ? <Body>{description}</Body> : null}
        </div>
        <div className="mt-7">{children}</div>
      </Animate>
    </section>
  );
};
