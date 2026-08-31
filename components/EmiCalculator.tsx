"use client";

import { useMemo, useState } from "react";
import { LOAN_PRESETS, LoanType, calculateEmi } from "@/lib/emiCalculations";
import LoanSlider from "./LoanSlider";
import BreakdownChart from "./BreakdownChart";

function formatCurrency(n: number): string {
  return `₹${Math.round(n).toLocaleString("en-IN")}`;
}

type TenureUnit = "years" | "months";

export default function EmiCalculator() {
  const [loanType, setLoanType] = useState<LoanType>("home");
  const preset = LOAN_PRESETS.find((p) => p.key === loanType)!;

  const [amount, setAmount] = useState(preset.defaultAmount);
  const [rate, setRate] = useState(preset.defaultRate);
  const [tenureUnit, setTenureUnit] = useState<TenureUnit>("years");
  const [tenureValue, setTenureValue] = useState(preset.defaultTenureYears);

  function handleTabChange(next: LoanType) {
    const nextPreset = LOAN_PRESETS.find((p) => p.key === next)!;
    setLoanType(next);
    setAmount(nextPreset.defaultAmount);
    setRate(nextPreset.defaultRate);
    setTenureUnit("years");
    setTenureValue(nextPreset.defaultTenureYears);
  }

  const tenureMonths = tenureUnit === "years" ? tenureValue * 12 : tenureValue;

  const result = useMemo(
    () => calculateEmi(amount, rate, tenureMonths),
    [amount, rate, tenureMonths]
  );

  const tenureMax = tenureUnit === "years" ? preset.maxTenureYears : preset.maxTenureYears * 12;
  const tenureMin = tenureUnit === "years" ? preset.minTenureYears : preset.minTenureYears * 12;
  const tenureStep = tenureUnit === "years" ? 1 : 6;

  return (
    <div className="calculator-layout">
      <div className="calculator-card">
        <div className="tab-row">
          {LOAN_PRESETS.map((p) => (
            <button
              key={p.key}
              type="button"
              className={p.key === loanType ? "tab tab-active" : "tab"}
              onClick={() => handleTabChange(p.key)}
            >
              {p.label}
            </button>
          ))}
        </div>

        <LoanSlider
          label={`${preset.label} Amount`}
          value={amount}
          min={preset.minAmount}
          max={preset.maxAmount}
          step={preset.amountStep}
          prefix="₹"
          displayValue={Math.round(amount).toLocaleString("en-IN")}
          onChange={setAmount}
        />

        <LoanSlider
          label="Interest Rate"
          value={rate}
          min={preset.minRate}
          max={preset.maxRate}
          step={0.1}
          suffix="%"
          displayValue={rate.toString()}
          onChange={setRate}
        />

        <div className="loan-field">
          <div className="loan-field-top">
            <span className="loan-field-label">Loan Tenure</span>
            <div className="tenure-input-group">
              <div className="loan-field-input tenure-input">
                <input
                  type="text"
                  inputMode="numeric"
                  value={tenureValue.toString()}
                  onChange={(e) => {
                    const raw = e.target.value.replace(/[^0-9]/g, "");
                    setTenureValue(raw ? parseInt(raw, 10) : 0);
                  }}
                  aria-label="Loan tenure"
                />
              </div>
              <div className="unit-toggle">
                <button
                  type="button"
                  className={tenureUnit === "years" ? "unit-btn unit-active" : "unit-btn"}
                  onClick={() => {
                    setTenureUnit("years");
                    setTenureValue(preset.defaultTenureYears);
                  }}
                >
                  Yr
                </button>
                <button
                  type="button"
                  className={tenureUnit === "months" ? "unit-btn unit-active" : "unit-btn"}
                  onClick={() => {
                    setTenureUnit("months");
                    setTenureValue(preset.defaultTenureYears * 12);
                  }}
                >
                  Mo
                </button>
              </div>
            </div>
          </div>
          <div className="slider-track-wrap">
            <div className="slider-track-base" />
            <div
              className="slider-track-fill"
              style={{
                width: `${
                  tenureMax > tenureMin
                    ? Math.min(
                        100,
                        Math.max(0, ((tenureValue - tenureMin) / (tenureMax - tenureMin)) * 100)
                      )
                    : 0
                }%`,
              }}
            />
            <input
              type="range"
              className="loan-slider"
              min={tenureMin}
              max={tenureMax}
              step={tenureStep}
              value={tenureValue}
              onChange={(e) => setTenureValue(parseFloat(e.target.value))}
              aria-label="Loan tenure slider"
            />
          </div>
        </div>

        <div className="results-row">
          <div className="results-list">
            <div className="result-item">
              <span className="result-item-label">Monthly EMI</span>
              <span className="result-item-value result-item-primary">
                {formatCurrency(result.emi)}
              </span>
            </div>
            <div className="result-item">
              <span className="result-item-label">Principal amount</span>
              <span className="result-item-value">{formatCurrency(result.principal)}</span>
            </div>
            <div className="result-item">
              <span className="result-item-label">Total interest</span>
              <span className="result-item-value">{formatCurrency(result.totalInterest)}</span>
            </div>
            <div className="result-item">
              <span className="result-item-label">Total payment</span>
              <span className="result-item-value">{formatCurrency(result.totalPayment)}</span>
            </div>
          </div>

          <div className="results-chart">
            <BreakdownChart principal={result.principal} interest={result.totalInterest} />
          </div>
        </div>
      </div>
    </div>
  );
}
