export type LoanType = "home" | "personal" | "car";

export interface LoanPreset {
  key: LoanType;
  label: string;
  defaultAmount: number;
  minAmount: number;
  maxAmount: number;
  amountStep: number;
  defaultRate: number;
  minRate: number;
  maxRate: number;
  defaultTenureYears: number;
  minTenureYears: number;
  maxTenureYears: number;
}

export const LOAN_PRESETS: LoanPreset[] = [
  {
    key: "home",
    label: "Home Loan",
    defaultAmount: 5000000,
    minAmount: 100000,
    maxAmount: 20000000,
    amountStep: 50000,
    defaultRate: 8.5,
    minRate: 5,
    maxRate: 15,
    defaultTenureYears: 20,
    minTenureYears: 1,
    maxTenureYears: 30,
  },
  {
    key: "personal",
    label: "Personal Loan",
    defaultAmount: 500000,
    minAmount: 25000,
    maxAmount: 4000000,
    amountStep: 5000,
    defaultRate: 12,
    minRate: 9,
    maxRate: 24,
    defaultTenureYears: 5,
    minTenureYears: 1,
    maxTenureYears: 7,
  },
  {
    key: "car",
    label: "Car Loan",
    defaultAmount: 800000,
    minAmount: 100000,
    maxAmount: 5000000,
    amountStep: 10000,
    defaultRate: 9.5,
    minRate: 6,
    maxRate: 16,
    defaultTenureYears: 7,
    minTenureYears: 1,
    maxTenureYears: 10,
  },
];

export interface EmiResult {
  emi: number;
  totalInterest: number;
  totalPayment: number;
  principal: number;
}

/**
 * Standard reducing-balance EMI formula:
 * EMI = P x R x (1+R)^N / ((1+R)^N - 1)
 * where R is the monthly interest rate and N is the tenure in months.
 */
export function calculateEmi(
  principal: number,
  annualRatePercent: number,
  tenureMonths: number
): EmiResult {
  if (principal <= 0 || tenureMonths <= 0) {
    return { emi: 0, totalInterest: 0, totalPayment: 0, principal };
  }

  const monthlyRate = annualRatePercent / 12 / 100;

  let emi: number;
  if (monthlyRate === 0) {
    emi = principal / tenureMonths;
  } else {
    const factor = Math.pow(1 + monthlyRate, tenureMonths);
    emi = (principal * monthlyRate * factor) / (factor - 1);
  }

  const totalPayment = emi * tenureMonths;
  const totalInterest = totalPayment - principal;

  return {
    emi,
    totalInterest,
    totalPayment,
    principal,
  };
}
