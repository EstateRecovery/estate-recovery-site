import React, { useMemo, useState } from "react";

export default function EstateRecoverySolutions() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [form, setForm] = useState({
    name: "",
    organization: "",
    phone: "",
    email: "",
    message: "",
  });

  const links = useMemo(
    () => [
      { href: "#home", label: "Home" },
      { href: "#about", label: "About Us" },
      { href: "#services", label: "Services" },
      { href: "#faq", label: "FAQ" },
      { href: "#contact", label: "Contact" },
    ],
    []
  );

  const onNav = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "phone") {
      const digits = value.replace(/[^0-9]/g, "").slice(0, 10);
      let formatted = digits;
      if (digits.length > 0) formatted = "(" + digits.substring(0, 3);
      if (digits.length >= 4) formatted = "(" + digits.substring(0, 3) + ") " + digits.substring(3, 6);
      if (digits.length >= 7) formatted = "(" + digits.substring(0, 3) + ") " + digits.substring(3, 6) + "-" + digits.substring(6, 10);
      setForm((p) => ({ ...p, [id]: formatted }));
    } else {
      setForm((p) => ({ ...p, [id]: value }));
    }
  };

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <button type="button" onClick={() => onNav("#home")} className="flex items-center gap-3 text-left" aria-label="Go to home">
            <svg viewBox="0 0 140 48" aria-label="ERS Logo" className="h-14 w-auto transition-all duration-300 hover:scale-[1.02]" role="img">
              <rect x="0" y="0" width="140" height="48" rx="6" fill="#16375C" />
              <line x1="10" y1="24" x2="42" y2="24" stroke="#C8A03C" strokeWidth="3.5" />
              <line x1="98" y1="24" x2="130" y2="24" stroke="#C8A03C" strokeWidth="3.5" />
              <text x="70" y="31" textAnchor="middle" fontSize="20" fontWeight="700" fill="#FFFFFF" letterSpacing="2" fontFamily="Arial, Helvetica, sans-serif">ERS</text>
            </svg>
            <div>
              <h1 className="text-4xl font-extrabold leading-tight text-[#16375C]">
  Florida Probate Recovery for Institutional Creditors
</h1>
              <p className="text-sm text-gray-500">Expert probate debt recovery for businesses.</p>
            </div>
          </button>

          <nav className="hidden md:flex gap-6 items-center text-sm">
            {links.slice(0, 4).map((l) => (
              <button key={l.href} type="button" onClick={() => onNav(l.href)} className="hover:text-[#C8A03C] transition-colors duration-200">
                {l.label}
              </button>
            ))}
            <button type="button" onClick={() => onNav("#contact")} className="text-white bg-[#16375C] px-4 py-2 rounded-md shadow-sm hover:opacity-95">
              Contact
            </button>
          </nav>

          <button type="button" className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border bg-white" onClick={() => setMenuOpen((v) => !v)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
            <span className="text-xl leading-none">{menuOpen ? "×" : "≡"}</span>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-2 text-sm">
              {links.map((l) => (
                <button key={l.href} type="button" onClick={() => onNav(l.href)} className="py-2 text-left hover:text-[#C8A03C] transition-colors duration-200">
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <section id="home" className="py-16 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-extrabold leading-tight text-[#16375C]">Institutional Probate Recovery, Simplified</h2>
            <p className="mt-4 text-lg text-gray-600">
              Attorney-led recovery of outstanding receivables from estates — structured, compliant, and performance-driven. We specialize in Florida probate creditor claims, estate debt recovery, and institutional receivables recovery within Florida probate courts.

            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3"><div className="w-3 h-3 mt-2 flex-shrink-0 rounded-full bg-[#C8A03C]" /><span className="text-gray-700">Attorney-led process that makes your claim our priority from day one</span></li>
              <li className="flex items-start gap-3"><div className="w-3 h-3 mt-2 flex-shrink-0 rounded-full bg-[#C8A03C]" /><span className="text-gray-700">Comprehensive estate identification and strategic claim preparation designed to expedite recovery outcomes</span></li>
              <li className="flex items-start gap-3"><div className="w-3 h-3 mt-2 flex-shrink-0 rounded-full bg-[#C8A03C]" /><span className="text-gray-700">Powered by ERS ProbateTrack™, our proprietary estate monitoring and claim management platform delivering real-time estate intelligence, accelerated filing, precise tracking, and compliant probate administration</span></li>
              <li className="flex items-start gap-3"><div className="w-3 h-3 mt-2 flex-shrink-0 rounded-full bg-[#C8A03C]" /><span className="text-gray-700">Responsive communication throughout every step of the probate process</span></li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
              <button type="button" onClick={() => onNav("#contact")} className="inline-block px-6 py-4 rounded-md font-medium bg-[#16375C] text-white">Request a Consultation</button>
              <button type="button" onClick={() => onNav("#services")} className="inline-block px-6 py-4 rounded-md font-medium border border-[#C8A03C] text-[#16375C]">Our Services</button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8">
            <h3 className="text-xl font-semibold text-[#16375C]">How It Works</h3>
            <ol className="mt-4 space-y-4 text-gray-700">
              <li><strong>1. Case Intake & Estate Identification.</strong> You provide debtor information and supporting documentation. ERS ProbateTrack™ immediately initiates a multi-source estate search and status verification.</li>
              <li><strong>2. Asset & Viability Assessment.</strong> We confirm probate status, analyze court filings, evaluate asset composition, and determine strategic recovery positioning.</li>
              <li><strong>3. Strategic Claim Filing.</strong> Our attorneys prepare and file compliant statements of claim within statutory deadlines, ensuring proper notice and protection of your recovery rights.</li>
              <li><strong>4. Ongoing Monitoring & Resolution.</strong> We continuously monitor estate activity, engage fiduciaries as appropriate, recover available funds, and provide reconciled reporting through final distribution.</li>
              <li><strong>5. Contingency Based. No Risk To You.</strong> Our services are provided on a contingency basis, meaning we are compensated only when recovery is achieved.</li>
            </ol>
            <p className="mt-6 text-sm text-gray-500">We operate with sensitivity to family situations while protecting institutional interests and regulatory compliance.</p>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-white scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-[#16375C]">About Estate Recovery Solutions</h3>
              <p className="mt-4 text-gray-700">Estate Recovery Solutions (ERS) is a Florida-based probate recovery firm dedicated exclusively to representing institutional creditors in estate matters. We combine experienced probate counsel, disciplined legal process, and purpose-built technology to protect and advance our clients’ recovery rights.</p>
              <p className="mt-4 text-gray-700">When a customer passes away, outstanding receivables often become operationally burdensome and legally complex. ERS steps in immediately — confirming probate status, identifying responsible fiduciaries, assessing asset viability, and positioning claims for maximum lawful recovery.</p>
              <p className="mt-4 text-gray-700">ERS ProbateTrack™ powers our approach with continuous estate monitoring, intelligent case management, deadline tracking, and compliant claim filing throughout Florida probate courts. Our integrated legal and technology framework delivers transparency, consistency, and measurable recovery performance while reducing internal workload for your organization.</p>
              <h4 className="mt-6 font-semibold">Why our clients trust us</h4>
              <ul className="mt-3 list-disc list-inside text-gray-700 space-y-2">
                <li>Exclusive focus on institutional probate recovery</li>
                <li>Attorney-led representation with disciplined statutory compliance</li>
                <li>ERS ProbateTrack™ technology providing transparency and real-time case visibility</li>
                <li>Structured recovery strategy designed to maximize lawful estate distributions</li>
                <li>Contingency-based fee model — aligned incentives with no upfront cost</li>
                <li>Consistent communication and reconciled reporting from intake through final resolution</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-[#16375C]">Services</h3>
          <p className="mt-2 text-gray-600">Risk-free, attorney-led probate recovery services for financial institutions, auto lenders, and healthcare providers — with no upfront cost.</p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm"><h4 className="font-semibold">Estate Identification & Monitoring</h4><p className="mt-2 text-sm text-gray-600">Multi-source probate searches and continuous monitoring powered by ERS ProbateTrack™ to identify opened estates, trusts and recovery opportunities quickly.</p></div>
            <div className="bg-white p-6 rounded-lg shadow-sm"><h4 className="font-semibold">Strategic Claim Filing</h4><p className="mt-2 text-sm text-gray-600">Attorney-prepared and compliant statements of claim filed within statutory deadlines to protect and position your recovery rights.</p></div>
            <div className="bg-white p-6 rounded-lg shadow-sm"><h4 className="font-semibold">Asset & Recovery Analysis</h4><p className="mt-2 text-sm text-gray-600">Detailed review of estate inventories, court filings, and asset composition to evaluate viability and maximize lawful distributions.</p></div>
            <div className="bg-white p-6 rounded-lg shadow-sm"><h4 className="font-semibold">Fiduciary & Counsel Engagement</h4><p className="mt-2 text-sm text-gray-600">Professional communication with executors, administrators, and estate counsel to facilitate timely resolution and payment.</p></div>
            <div className="bg-white p-6 rounded-lg shadow-sm"><h4 className="font-semibold">Ongoing Case Management</h4><p className="mt-2 text-sm text-gray-600">Active monitoring through final distribution, including deadline tracking, court updates, and strategic follow-up.</p></div>
            <div className="bg-white p-6 rounded-lg shadow-sm"><h4 className="font-semibold">Reporting & Reconciliation</h4><p className="mt-2 text-sm text-gray-600">Clear, reconciled remittances with comprehensive reporting to support internal compliance and accounting requirements.</p></div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 bg-white scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-[#16375C]">Frequently Asked Questions</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
            <div className="bg-gray-50 border rounded-xl p-5"><h5 className="font-semibold">How do you begin a recovery case?</h5><p className="mt-2 text-sm">Upon receiving debtor information, ERS ProbateTrack™ initiates estate identification and status verification. Our attorneys then evaluate viability and position the claim appropriately within statutory deadlines.</p></div>
            <div className="bg-gray-50 border rounded-xl p-5"><h5 className="font-semibold">What are your fees?</h5><p className="mt-2 text-sm">Our fee structure is contingency-based. We are compensated only upon successful recovery, aligning our incentives directly with yours.</p></div>
            <div className="bg-gray-50 border rounded-xl p-5"><h5 className="font-semibold">How long does the probate recovery process take?</h5><p className="mt-2 text-sm">Timelines vary depending on court schedules, estate complexity, and asset structure. ERS provides ongoing monitoring and reporting throughout the administration process until final distribution.</p></div>
            <div className="bg-gray-50 border rounded-xl p-5"><h5 className="font-semibold">Do you handle estates that have not yet been opened?</h5><p className="mt-2 text-sm">Yes. Through ERS ProbateTrack™, we monitor for newly opened estates and take appropriate legal action once probate proceedings commence.</p></div>
            <div className="bg-gray-50 border rounded-xl p-5"><h5 className="font-semibold">What types of institutions do you represent?</h5><p className="mt-2 text-sm">We represent financial institutions, auto lenders, healthcare providers, and other organizations seeking lawful recovery of outstanding receivables from Florida estates.</p></div>
            <div className="bg-gray-50 border rounded-xl p-5"><h5 className="font-semibold">How do you ensure compliance?</h5><p className="mt-2 text-sm">Our attorney-led process adheres strictly to Florida probate statutes and court rules, supported by structured deadline tracking and documentation through ERS ProbateTrack™.</p></div>
            <div className="bg-gray-50 border rounded-xl p-5"><h5 className="font-semibold">Can you recover debts if assets are in a trust?</h5><p className="mt-2 text-sm">Yes. We evaluate trust structures and pursue recovery where creditor rights exist under Florida law.</p></div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 scroll-mt-24">
        <div className="max-w-4xl mx-auto px-6 bg-white rounded-2xl shadow-sm p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-bold text-[#16375C]">Contact Us</h3>
              <p className="mt-2 text-gray-600">Speak directly with our probate recovery team. We respond promptly and handle every inquiry with discretion and professionalism.</p>
              <div className="mt-6 text-sm text-gray-700 space-y-2">
                <div><span className="font-semibold">Address:</span><br /><a href="https://www.google.com/maps/search/?api=1&query=2881+East+Oakland+Park+Blvd,+Suite+469,+Fort+Lauderdale,+FL+33306" target="_blank" rel="noopener noreferrer" className="hover:text-[#C8A03C] transition-colors duration-200" aria-label="Open address in Google Maps">2881 East Oakland Park Blvd, Suite 469<br />Fort Lauderdale, FL 33306</a></div>
                <div><span className="font-semibold">Telephone:</span><br /><a href="tel:+17543497070" className="hover:text-[#C8A03C] transition-colors duration-200" aria-label="Call Estate Recovery Solutions">(754) 349-7070</a></div>
                <div><span className="font-semibold">Email:</span><br /><a href="mailto:info@estaterecoverysolutions.com" className="hover:text-[#C8A03C] transition-colors duration-200" aria-label="Email Estate Recovery Solutions">info@estaterecoverysolutions.com</a></div>
              </div>

              {status.type === "success" && (
                <div role="status" className="mt-5 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-900">
                  <div className="font-semibold">Message sent</div>
                  <div className="mt-1">{status.message}</div>
                </div>
              )}
              {status.type === "error" && (
                <div role="alert" className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-900">
                  <div className="font-semibold">Message not sent</div>
                  <div className="mt-1">{status.message}</div>
                </div>
              )}
            </div>

            <form
              className="space-y-4"
              onSubmit={async (e) => {
                e.preventDefault();
                setStatus({ type: "loading", message: "Sending..." });
                try {
                  const res = await fetch("https://formspree.io/f/xgoneled", {
                    method: "POST",
                    headers: { "Accept": "application/json", "Content-Type": "application/json" },
                    body: JSON.stringify(form),
                  });
                  if (res.ok) {
                    setStatus({ type: "success", message: "Thank you. Your message has been received." });
                    setForm({ name: "", organization: "", phone: "", email: "", message: "" });
                  } else {
                    setStatus({ type: "error", message: "Something went wrong. Please try again." });
                  }
                } catch (err) {
                  setStatus({ type: "error", message: "Network error. Please try again." });
                }
              }}
            >
              <div><label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label><input id="name" name="name" value={form.name} onChange={handleChange} type="text" className="mt-1 block w-full border rounded-md p-2" placeholder="Full name" required /></div>
              <div><label htmlFor="organization" className="block text-sm font-medium text-gray-700">Organization</label><input id="organization" name="organization" value={form.organization} onChange={handleChange} type="text" className="mt-1 block w-full border rounded-md p-2" placeholder="Company" required /></div>
              <div><label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label><input id="phone" name="phone" value={form.phone} onChange={handleChange} type="tel" className="mt-1 block w-full border rounded-md p-2" placeholder="(555) 123-4567" /></div>
              <div><label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label><input id="email" name="email" value={form.email} onChange={handleChange} type="email" className="mt-1 block w-full border rounded-md p-2" placeholder="you@company.com" required /></div>
              <div><label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label><textarea id="message" name="message" value={form.message} onChange={handleChange} className="mt-1 block w-full border rounded-md p-2" rows={4} placeholder="Brief details about the case" required /></div>
              <div className="flex items-center justify-between gap-3">
                <button type="submit" className="px-5 py-2 rounded-md font-medium bg-[#16375C] text-white">
                  {status.type === "loading" ? "Sending..." : "Send Message"}
                </button>
                <small className="text-xs text-gray-500">We respect privacy and handle data securely.</small>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-[#16375C] text-white py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-semibold">Estate Recovery Solutions</div>
            <div className="text-sm text-gray-200">© 2026 Estate Recovery Solutions. All rights reserved.</div>
          </div>
          <div className="text-sm text-gray-200">Designed for financial institutions, auto lenders & healthcare providers</div>
        </div>
      </footer>
    </div>
  );
}
