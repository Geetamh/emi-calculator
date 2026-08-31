"use client";

interface LoanSliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  prefix?: string;
  suffix?: string;
  displayValue: string;
  onChange: (value: number) => void;
}

export default function LoanSlider({
  label,
  value,
  min,
  max,
  step,
  prefix,
  suffix,
  displayValue,
  onChange,
}: LoanSliderProps) {
  const percent = max > min ? ((value - min) / (max - min)) * 100 : 0;
  const clampedPercent = Math.min(100, Math.max(0, percent));

  return (
    <div className="loan-field">
      <div className="loan-field-top">
        <span className="loan-field-label">{label}</span>
        <div className="loan-field-input">
          {prefix && <span className="loan-field-affix">{prefix}</span>}
          <input
            type="text"
            inputMode="decimal"
            value={displayValue}
            onChange={(e) => {
              const raw = e.target.value.replace(/[^0-9.]/g, "");
              const parsed = parseFloat(raw);
              onChange(isFinite(parsed) ? parsed : 0);
            }}
            aria-label={label}
          />
          {suffix && <span className="loan-field-affix">{suffix}</span>}
        </div>
      </div>
      <div className="slider-track-wrap">
        <div className="slider-track-base" />
        <div className="slider-track-fill" style={{ width: `${clampedPercent}%` }} />
        <input
          type="range"
          className="loan-slider"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(parseFloat(e.target.value))}
          aria-label={`${label} slider`}
        />
      </div>
    </div>
  );
}
