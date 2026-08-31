export default function SeoContent() {
  return (
    <section className="seo-content">
      <h2>About this EMI calculator</h2>
      <p>
        This calculator works out the Equated Monthly Instalment (EMI) for
        home loans, personal loans and car loans. Enter the loan amount,
        interest rate and tenure — either using the input box or the slider —
        and the EMI, total interest payable, and total payment update
        instantly, along with a break-up chart of principal versus interest.
      </p>

      <h3>How is EMI calculated?</h3>
      <p>
        EMI is calculated using the standard reducing-balance formula:
        <br />
        <strong>EMI = P × R × (1+R)ⁿ / ((1+R)ⁿ − 1)</strong>
        <br />
        where <strong>P</strong> is the loan principal, <strong>R</strong> is
        the monthly interest rate (annual rate ÷ 12 ÷ 100), and{" "}
        <strong>n</strong> is the loan tenure in months. This is the same
        method banks and NBFCs use to calculate EMIs in India.
      </p>

      <h3>Frequently asked questions</h3>

      <h4>Does a longer tenure reduce my EMI?</h4>
      <p>
        Yes — spreading the same loan amount over a longer tenure lowers the
        monthly EMI, but increases the total interest paid over the life of
        the loan. A shorter tenure means a higher EMI but less interest
        overall.
      </p>

      <h4>Does this calculator account for processing fees or prepayments?</h4>
      <p>
        No — this calculator shows the standard EMI based on principal, rate
        and tenure only. Processing fees, insurance charges and prepayment
        scenarios aren&rsquo;t included, so your bank&rsquo;s final offer may
        vary slightly.
      </p>

      <h4>Is the interest rate the same throughout the loan?</h4>
      <p>
        This calculator assumes a fixed interest rate for the full tenure. If
        your loan has a floating rate, your actual EMI will change whenever
        the bank revises its rate.
      </p>
    </section>
  );
}
