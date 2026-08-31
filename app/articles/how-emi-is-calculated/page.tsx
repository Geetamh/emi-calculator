import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How EMI Is Calculated — The Formula Explained | EMI Guru",
  description:
    "A plain-English walkthrough of the EMI formula banks use, with a worked example showing exactly how principal, interest rate and tenure combine into your monthly instalment.",
};

export default function HowEmiIsCalculatedPage() {
  return (
    <main className="page-shell">
      <h1 className="hero-heading">How EMI is calculated — the formula explained</h1>
      <p className="hero-sub">
        Every EMI, whether for a home loan, personal loan or car loan, comes
        from the same reducing-balance formula. Here&rsquo;s how it works, step
        by step.
      </p>

      <section className="seo-content">
        <h2>The EMI formula</h2>
        <p>
          Banks and NBFCs in India calculate EMI using the reducing-balance
          method:
        </p>
        <p>
          <strong>EMI = P × R × (1+R)ⁿ / ((1+R)ⁿ − 1)</strong>
        </p>
        <p>Where:</p>
        <p>
          <strong>P</strong> is the principal loan amount you borrow.
          <br />
          <strong>R</strong> is the monthly interest rate — take your bank&rsquo;s
          annual rate, divide by 12, then divide by 100.
          <br />
          <strong>n</strong> is the loan tenure in months (a 20-year loan is
          n = 240).
        </p>

        <h2>A worked example</h2>
        <p>
          Say you take a home loan of ₹50,00,000 at 8.5% annual interest for
          20 years.
        </p>
        <p>
          P = 50,00,000
          <br />
          R = 8.5 ÷ 12 ÷ 100 = 0.007083
          <br />
          n = 20 × 12 = 240
        </p>
        <p>
          Plugging these into the formula gives an EMI of roughly ₹43,391 per
          month. Over 240 months, you&rsquo;d pay about ₹1,04,13,879 in total —
          meaning around ₹54,13,879 of that is interest.
        </p>
        <p>
          You can plug in your own numbers on the{" "}
          <Link href="/">EMI calculator</Link> and see this update instantly.
        </p>

        <h2>Why interest is front-loaded</h2>
        <p>
          In the reducing-balance method, interest is charged only on the
          outstanding principal. Early in the loan, the outstanding balance
          is largest, so a bigger share of each EMI goes toward interest.
          As the balance shrinks over time, more of each EMI goes toward
          principal — which is why the principal-versus-interest split
          changes as the loan matures, even though the EMI itself stays
          fixed.
        </p>

        <h2>Why the formula matters</h2>
        <p>
          Understanding the formula helps explain two things borrowers often
          ask about: why a longer tenure lowers the EMI but increases total
          interest, and why prepaying early in the loan saves more interest
          than prepaying later. Both come directly from how R and n interact
          with the shrinking outstanding balance.
        </p>
      </section>
    </main>
  );
}
