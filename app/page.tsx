import EmiCalculator from "@/components/EmiCalculator";
import FeaturedSidebar from "@/components/FeaturedSidebar";
import SeoContent from "@/components/SeoContent";

export default function Home() {
  return (
    <main className="page-shell">
      <h1 className="hero-heading">EMI Calculator</h1>
      <p className="hero-sub">
        Work out your monthly instalment for a home loan, personal loan or
        car loan, and see how much of it goes toward interest.
      </p>

      <div className="content-grid">
        <div className="content-main">
          <EmiCalculator />
          <SeoContent />
        </div>
        <FeaturedSidebar />
      </div>
    </main>
  );
}
