import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import CountUp from "./CountUp.jsx";

type CountUpMetricProps = {
  value: number;
  suffix?: string;
  className?: string;
};

export function CountUpMetric({ value, suffix = "", className }: CountUpMetricProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const finalValue = `${value.toLocaleString("en-IN")}${suffix}`;

  return (
    <data value={value} className={className}>
      <span aria-hidden="true">
        {prefersReducedMotion ? (
          finalValue
        ) : (
          <CountUp to={value} duration={0.9} separator="," suffix={suffix} trigger="view" />
        )}
      </span>
      <span className="sr-only">{finalValue}</span>
    </data>
  );
}
