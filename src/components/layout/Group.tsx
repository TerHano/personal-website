import { useMemo } from "react";

interface GroupProps {
  fullWidth?: boolean;
  direction?: "vertical" | "horizontal";
  className?: string;
  children: React.ReactNode;
}

export const Group = ({
  fullWidth = false,
  direction = "horizontal",
  className = "",
  children,
}: GroupProps) => {
  const classNames = useMemo(() => {
    const classes = ["flex"];

    if (direction === "vertical") {
      classes.push("flex-col");
    }

    if (fullWidth) {
      classes.push("w-full");
    }

    return classes.join(" ").concat(" " + className);
  }, [direction, className, fullWidth]);

  return <div className={classNames}>{children}</div>;
};
