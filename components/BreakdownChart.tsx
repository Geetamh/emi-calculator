interface BreakdownChartProps {
  principal: number;
  interest: number;
}

const RADIUS = 66;
const STROKE = 34;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function BreakdownChart({ principal, interest }: BreakdownChartProps) {
  const total = principal + interest;
  const interestShare = total > 0 ? interest / total : 0;

  const interestLength = CIRCUMFERENCE * interestShare;

  return (
    <div className="breakdown-chart">
      <div className="breakdown-legend">
        <span className="legend-item">
          <span className="legend-dot" style={{ background: "var(--principal-color)" }} />
          Principal amount
        </span>
        <span className="legend-item">
          <span className="legend-dot" style={{ background: "var(--interest-color)" }} />
          Interest amount
        </span>
      </div>
      <svg viewBox="0 0 176 176" className="breakdown-svg">
        <circle
          cx="88"
          cy="88"
          r={RADIUS}
          fill="none"
          stroke="var(--principal-color)"
          strokeWidth={STROKE}
        />
        <circle
          cx="88"
          cy="88"
          r={RADIUS}
          fill="none"
          stroke="var(--interest-color)"
          strokeWidth={STROKE}
          strokeDasharray={`${interestLength} ${CIRCUMFERENCE - interestLength}`}
          strokeDashoffset={0}
          transform="rotate(-90 88 88)"
          strokeLinecap="butt"
        />
      </svg>
    </div>
  );
}
