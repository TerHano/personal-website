/*
  The three type roles the site is built from: a Newsreader display face for
  names and headings, a mono eyebrow for labels and metadata, and body copy
  held to a readable measure.
*/

export const Display = ({
  children,
  className = "",
  as: Tag = "span",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "span" | "p";
}) => (
  <Tag className={`font-display text-ink text-balance ${className}`}>
    {children}
  </Tag>
);

export const Eyebrow = ({
  children,
  className = "",
  tone = "teal",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "teal" | "muted";
}) => (
  <span
    className={`font-mono text-[0.6875rem] font-medium uppercase tracking-[0.16em] ${
      tone === "teal" ? "text-teal" : "text-muted"
    } ${className}`}
  >
    {children}
  </span>
);

/* A label followed by a hairline rule that fills the remaining width. */
export const RuleLabel = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`flex items-center gap-3.5 ${className}`}>
    <Eyebrow>{children}</Eyebrow>
    <span aria-hidden="true" className="h-px flex-1 bg-rule" />
  </div>
);

export const Body = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <p className={`max-w-[64ch] text-ink-soft text-pretty ${className}`}>
    {children}
  </p>
);
