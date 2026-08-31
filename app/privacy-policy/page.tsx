import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — EMI Guru",
  description:
    "Privacy policy for EMI Guru, covering cookies, third-party advertising and how information is handled on this site.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="page-shell">
      <h1 className="hero-heading">Privacy Policy</h1>
      <p className="hero-sub">Last updated: 31 August 2026</p>

      <section className="seo-content">
        <h2>Overview</h2>
        <p>
          EMI Guru (&ldquo;we&rdquo;, &ldquo;us&rdquo;) provides free loan EMI
          calculators and related articles. This page explains what
          information is collected when you visit this site and how it is
          used.
        </p>

        <h3>Information we collect</h3>
        <p>
          The calculators on this site run entirely in your browser. Loan
          amounts, interest rates and tenure values you enter are not sent to
          or stored on our servers.
        </p>
        <p>
          Like most websites, our hosting provider and any advertising
          partners may automatically collect standard technical information,
          such as your browser type, device type, approximate location and
          pages visited, for analytics and ad-serving purposes.
        </p>

        <h3>Cookies and advertising</h3>
        <p>
          This site uses Google AdSense to display advertisements. Google and
          its partners may use cookies, including the DoubleClick DART
          cookie, to serve ads based on your visits to this site and other
          sites on the internet. This helps show ads that are more relevant
          to you.
        </p>
        <p>
          You can opt out of personalized advertising by visiting{" "}
          <a
            href="https://adssettings.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Ads Settings
          </a>
          . You can also learn more about how Google uses data at{" "}
          <a
            href="https://policies.google.com/technologies/partner-sites"
            target="_blank"
            rel="noopener noreferrer"
          >
            How Google uses information from sites that use its services
          </a>
          .
        </p>

        <h3>Third-party links</h3>
        <p>
          Articles on this site may link to third-party websites. We are not
          responsible for the content or privacy practices of those sites.
        </p>

        <h3>Children&rsquo;s privacy</h3>
        <p>
          This site is not directed at children under 13, and we do not
          knowingly collect personal information from children.
        </p>

        <h3>Changes to this policy</h3>
        <p>
          We may update this privacy policy from time to time. Changes will
          be posted on this page with an updated revision date.
        </p>

        <h3>Contact</h3>
        <p>
          If you have questions about this privacy policy, you can reach us
          at <strong>contact@emiguru.vercel.app</strong>.
        </p>
      </section>
    </main>
  );
}
