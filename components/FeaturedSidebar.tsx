const FEATURED_ITEMS = [
  {
    title: "How EMI is calculated — the formula explained",
    kind: "Article",
  },
  {
    title: "Home Loan EMI Calculator with prepayments",
    kind: "Calculator",
  },
  {
    title: "Credit Card EMI vs. Personal Loan — which costs less?",
    kind: "Article",
  },
  {
    title: "Should you prepay your loan or invest the difference?",
    kind: "Article",
  },
  {
    title: "Car Loan EMI Calculator",
    kind: "Calculator",
  },
];

export default function FeaturedSidebar() {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-heading">Featured calculators &amp; articles</h2>
      <ul className="sidebar-list">
        {FEATURED_ITEMS.map((item) => (
          <li key={item.title} className="sidebar-item">
            <span className="sidebar-kind">{item.kind}</span>
            <span className="sidebar-title">{item.title}</span>
          </li>
        ))}
      </ul>
      <p className="sidebar-note">More calculators and guides are on the way.</p>

      {/* <div className="ad-slot" role="complementary" aria-label="Advertisement placeholder">
        <span className="ad-slot-label">Ad space</span>
        <span className="ad-slot-hint">Connect Google AdSense to fill this slot</span>
      </div> */}
    </aside>
  );
}
