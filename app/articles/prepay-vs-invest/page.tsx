import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Should You Prepay Your Loan or Invest the Difference? | EMI Guru",
  description:
    "A simple way to decide between prepaying your loan and investing the extra money instead, based on comparing your loan's interest rate to your expected investment return.",
};

export default function PrepayVsInvestPage() {
  return (
    <main className="page-shell">
      <h1 className="hero-heading">
        Should you prepay your loan or invest the difference?
      </h1>
      <p className="hero-sub">
        If you have spare cash, the right choice usually comes down to one
        comparison: your loan&rsquo;s interest rate versus your likely
        investment return.
      </p>

      <section className="seo-content">
        <h2>The core comparison</h2>
        <p>
          Prepaying a loan guarantees a return equal to your loan&rsquo;s
          interest rate, because every rupee you prepay is a rupee of
          interest you no longer pay. Investing that same rupee only pays off
          if the investment&rsquo;s return, after tax, beats that guaranteed
          saving.
        </p>
        <p>
          As a rule of thumb: if your loan&rsquo;s interest rate is higher
          than what you can reliably earn elsewhere after tax, prepaying
          wins. If your investment can reasonably beat the loan rate, and
          you&rsquo;re comfortable with the extra risk, investing may build
          more wealth over time.
        </p>

        <h2>Why loan type matters</h2>
        <p>
          Home loans in India often carry lower interest rates (frequently
          8%&ndash;9.5%) and come with tax benefits on interest and
          principal, which lowers the effective rate further. Personal loans
          and credit card EMIs carry much higher rates (often 12%&ndash;24%+),
          with no comparable tax benefit — so prepaying these almost always
          makes more financial sense than investing.
        </p>

        <h2>When prepaying early matters more</h2>
        <p>
          Because EMIs use the reducing-balance method, interest is heaviest
          in the early years of a loan. Prepaying in year 2 of a 20-year loan
          saves far more total interest than prepaying the same amount in
          year 18, since you&rsquo;re cutting a much larger outstanding
          balance out of many more remaining months. See{" "}
          <Link href="/articles/how-emi-is-calculated">
            how EMI is calculated
          </Link>{" "}
          for why the balance shrinks the way it does.
        </p>

        <h2>Other things to weigh in</h2>
        <p>
          Beyond the pure interest-rate math, consider your emergency fund
          first — don&rsquo;t prepay with money you might need soon. Also
          check your lender for prepayment charges (rare on floating-rate
          home loans in India, but common on personal loans) and factor those
          into the comparison.
        </p>
        <p>
          Use the <Link href="/">EMI calculator</Link> to see how a lump-sum
          prepayment changes your total interest before deciding.
        </p>
      </section>
    </main>
  );
}
