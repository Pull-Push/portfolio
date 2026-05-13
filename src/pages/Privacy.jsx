import { useEffect } from "react";

const styles = {
  root: {
    fontFamily: "'DM Sans', sans-serif",
    background: "#0F1923",
    color: "#e8edf2",
    minHeight: "100vh",
    padding: "48px 24px",
    lineHeight: 1.7,
  },
  page: {
    maxWidth: 820,
    margin: "0 auto",
  },
  // ── HEADER ──
  header: {
    borderBottom: "1px solid #1e3048",
    paddingBottom: 36,
    marginBottom: 40,
    paddingLeft: 20,
    position: "relative",
  },
  headerAccent: {
    position: "absolute",
    left: 0, top: 0,
    width: 3, height: "100%",
    background: "linear-gradient(180deg, #00D4FF, transparent)",
    borderRadius: 2,
  },
  brandLine: {
    fontFamily: "'DM Mono', monospace",
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "#00D4FF",
    marginBottom: 12,
  },
  docTitle: {
    fontSize: 28,
    fontWeight: 700,
    color: "#c8dff0",
    lineHeight: 1.2,
    letterSpacing: "-0.02em",
    marginBottom: 10,
  },
  docMeta: {
    fontFamily: "'DM Mono', monospace",
    fontSize: 12,
    color: "#4a6278",
    display: "flex",
    gap: 24,
    flexWrap: "wrap",
  },
  metaItem: {
    display: "flex",
    alignItems: "center",
    gap: 6,
  },
  metaDot: {
    width: 5, height: 5,
    borderRadius: "50%",
    background: "#4a6278",
    display: "inline-block",
  },
  // ── CALLOUT ──
  callout: {
    background: "rgba(0,212,255,0.10)",
    border: "1px solid rgba(0,212,255,0.25)",
    borderRadius: 8,
    padding: "20px 24px",
    marginBottom: 40,
    display: "grid",
    gridTemplateColumns: "auto 1fr",
    gap: 16,
    alignItems: "start",
  },
  calloutIcon: {
    width: 32, height: 32,
    background: "rgba(0,212,255,0.10)",
    border: "1px solid rgba(0,212,255,0.3)",
    borderRadius: 6,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  calloutLabel: {
    fontFamily: "'DM Mono', monospace",
    fontSize: 10,
    fontWeight: 500,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "#00D4FF",
    marginBottom: 10,
  },
  calloutItems: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  calloutItem: {
    display: "flex",
    alignItems: "baseline",
    gap: 10,
    fontSize: 13.5,
    color: "#7a94b0",
    lineHeight: 1.6,
  },
  tag: {
    fontFamily: "'DM Mono', monospace",
    fontSize: 10,
    background: "rgba(0,212,255,0.15)",
    color: "#00D4FF",
    borderRadius: 4,
    padding: "2px 8px",
    whiteSpace: "nowrap",
    flexShrink: 0,
  },
  // ── SECTION ──
  section: {
    marginBottom: 36,
    paddingBottom: 36,
    borderBottom: "1px solid #1e3048",
  },
  sectionHeader: {
    display: "flex",
    alignItems: "center",
    gap: 14,
    marginBottom: 16,
  },
  sectionNum: {
    fontFamily: "'DM Mono', monospace",
    fontSize: 11,
    fontWeight: 500,
    color: "#4a6278",
    minWidth: 24,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: 600,
    color: "#c8dff0",
    letterSpacing: "0.01em",
    margin: 0,
  },
  sectionBody: {
    paddingLeft: 38,
  },
  p: {
    fontSize: 14,
    color: "#7a94b0",
    lineHeight: 1.75,
    marginBottom: 14,
    marginTop: 0,
  },
  // ── LISTS ──
  bulletList: {
    listStyle: "none",
    margin: "12px 0",
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  bulletItem: {
    display: "flex",
    alignItems: "baseline",
    gap: 12,
    fontSize: 14,
    color: "#7a94b0",
    lineHeight: 1.6,
  },
  bullet: {
    width: 5, height: 5,
    borderRadius: "50%",
    background: "#00D4FF",
    flexShrink: 0,
    marginTop: 8,
    display: "inline-block",
  },
  // ── HIGHLIGHT BLOCKS ──
  highlightBlock: {
    background: "#162030",
    borderLeft: "3px solid #00D4FF",
    borderRadius: "0 6px 6px 0",
    padding: "14px 18px",
    margin: "16px 0",
  },
  highlightBlockAmber: {
    background: "#162030",
    borderLeft: "3px solid #FFB84D",
    borderRadius: "0 6px 6px 0",
    padding: "14px 18px",
    margin: "16px 0",
  },
  highlightP: {
    fontSize: 14,
    color: "#e8edf2",
    lineHeight: 1.75,
    margin: 0,
  },
  highlightPAmber: {
    fontSize: 14,
    fontWeight: 500,
    color: "#FFB84D",
    lineHeight: 1.75,
    margin: 0,
  },
  // ── NON-SHARING BADGE ──
  nonSharingBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    background: "rgba(46,204,113,0.10)",
    border: "1px solid rgba(46,204,113,0.3)",
    borderRadius: 6,
    padding: "10px 16px",
    margin: "14px 0",
  },
  nonSharingP: {
    fontSize: 13.5,
    fontWeight: 500,
    color: "#2ecc71",
    margin: 0,
    lineHeight: 1.55,
  },
  // ── RATES BLOCK ──
  ratesBlock: {
    background: "#162030",
    border: "1px solid #1e3048",
    borderRadius: 8,
    padding: "18px 20px",
    margin: "14px 0",
  },
  ratesHeadline: {
    fontFamily: "'DM Mono', monospace",
    fontSize: 13,
    fontWeight: 500,
    color: "#FFB84D",
    marginBottom: 8,
  },
  ratesP: {
    fontSize: 13.5,
    color: "#7a94b0",
    lineHeight: 1.7,
    margin: 0,
  },
  // ── FOOTER ──
  footer: {
    marginTop: 48,
    paddingTop: 24,
    borderTop: "1px solid #1e3048",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 12,
  },
  footerBrand: {
    fontFamily: "'DM Mono', monospace",
    fontSize: 11,
    color: "#4a6278",
    letterSpacing: "0.08em",
  },
  footerNote: {
    fontSize: 12,
    color: "#4a6278",
    fontStyle: "italic",
  },
};

const Bullet = ({ children }) => (
  <li style={styles.bulletItem}>
    <span style={styles.bullet} />
    <span>{children}</span>
  </li>
);

const Section = ({ num, title, children }) => (
  <div style={styles.section}>
    <div style={styles.sectionHeader}>
      <span style={styles.sectionNum}>{num}</span>
      <h2 style={styles.sectionTitle}>{title}</h2>
    </div>
    <div style={styles.sectionBody}>{children}</div>
  </div>
);

export default function Privacy() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,700;1,400&family=DM+Mono:wght@400;500&display=swap";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  return (
    <div style={styles.root}>
      <div style={styles.page}>

        {/* HEADER */}
        <header style={styles.header}>
          <div style={styles.headerAccent} />
          <div style={styles.brandLine}>ICR — Incident Command Response</div>
          <h1 style={styles.docTitle}>SMS Messaging Privacy Policy</h1>
          <div style={styles.docMeta}>
            {["Effective Date: May 13, 2025", "Messaging Provider: Twilio", "Program: Job Assignment & Status Updates"].map((item) => (
              <span key={item} style={styles.metaItem}>
                <span style={styles.metaDot} />
                {item}
              </span>
            ))}
          </div>
        </header>

        {/* REQUIRED DISCLOSURES CALLOUT */}
        <div style={styles.callout}>
          <div style={styles.calloutIcon}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div>
            <div style={styles.calloutLabel}>Twilio Required Disclosures</div>
            <div style={styles.calloutItems}>
              {[
                { tag: "§ 3", text: "Mobile opt-in data is never shared with third parties" },
                { tag: "§ 4", text: "Message frequency varies — multiple messages per day possible" },
                { tag: "§ 5", text: "Message and data rates may apply" },
              ].map(({ tag, text }) => (
                <div key={tag} style={styles.calloutItem}>
                  <span style={styles.tag}>{tag}</span>
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 1 */}
        <Section num="01" title="Overview">
          <p style={styles.p}>
            Incident Command Response (ICR) uses SMS text messaging to communicate with authorized personnel regarding job assignments, incident status updates, and operational notifications. This Privacy Policy explains how we collect, use, and protect your mobile phone number in connection with our SMS messaging program.
          </p>
        </Section>

        {/* SECTION 2 */}
        <Section num="02" title="Information We Collect">
          <p style={styles.p}>When you are enrolled in the ICR SMS notification program, we collect the following information:</p>
          <ul style={styles.bulletList}>
            <Bullet>Your mobile phone number</Bullet>
            <Bullet>Your name and employee or contact information, as provided during account setup</Bullet>
            <Bullet>Message delivery status and timestamps</Bullet>
          </ul>
        </Section>

        {/* SECTION 3 — NON-SHARING */}
        <Section num="03" title="How We Use Your Mobile Number">
          <p style={styles.p}>Your mobile phone number is used exclusively to send SMS notifications related to the ICR platform, including:</p>
          <ul style={styles.bulletList}>
            <Bullet>New incident or job assignment notifications</Bullet>
            <Bullet>Incident status updates (e.g., Open, In Progress, Complete)</Bullet>
            <Bullet>System alerts relevant to your assigned role</Bullet>
          </ul>
          <div style={styles.nonSharingBadge}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2ecc71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <p style={styles.nonSharingP}>
              Your mobile phone number will not be shared, sold, rented, or disclosed to any third party for marketing or promotional purposes. Mobile opt-in data and consent are never shared with third parties.
            </p>
          </div>
        </Section>

        {/* SECTION 4 — FREQUENCY */}
        <Section num="04" title="Message Frequency">
          <div style={styles.highlightBlock}>
            <p style={styles.highlightP}>
              Message frequency varies based on operational activity. You may receive multiple messages per day during active incidents or high-volume periods.
            </p>
          </div>
          <p style={styles.p}>
            Messages are sent only in connection with job assignments, status changes, and system notifications relevant to your role within the ICR platform.
          </p>
        </Section>

        {/* SECTION 5 — RATES */}
        <Section num="05" title="Message and Data Rates">
          <div style={styles.ratesBlock}>
            <div style={styles.ratesHeadline}>⚠ Message and data rates may apply.</div>
            <p style={styles.ratesP}>
              Standard SMS and data charges from your mobile carrier may apply to messages you receive through the ICR notification program. ICR is not responsible for any charges incurred by your mobile carrier.
            </p>
          </div>
        </Section>

        {/* SECTION 6 — OPT OUT */}
        <Section num="06" title="How to Opt Out">
          <p style={styles.p}>You may opt out of ICR SMS notifications at any time by:</p>
          <ul style={styles.bulletList}>
            <Bullet>Replying <strong>STOP</strong> to any ICR SMS message</Bullet>
            <Bullet>Contacting your system administrator to update your notification preferences within the ICR platform</Bullet>
          </ul>
          <p style={{ ...styles.p, marginTop: 12 }}>
            After opting out, you will receive a one-time confirmation message. No further SMS messages will be sent to your number unless you re-enroll.
          </p>
        </Section>

        {/* SECTION 7 — SECURITY */}
        <Section num="07" title="Data Security">
          <p style={styles.p}>
            We take reasonable technical and organizational measures to protect your mobile phone number and other personal data from unauthorized access, disclosure, or misuse. SMS messages are transmitted through Twilio, a third-party messaging service provider. Twilio's privacy practices are governed by their own Privacy Policy, available at{" "}
            <a href="https://www.twilio.com/en-us/legal/privacy" style={{ color: "#00D4FF", textDecoration: "none" }}>
              twilio.com/en-us/legal/privacy
            </a>.
          </p>
          <p style={styles.p}>
            Twilio is used solely as a message delivery platform. They are not authorized to use your mobile number for any purpose other than delivering ICR notifications on our behalf.
          </p>
        </Section>

        {/* SECTION 8 — CONTACT */}
        <Section num="08" title="Contact Information">
          <p style={styles.p}>
            For questions or concerns about this Privacy Policy or our SMS messaging practices, please contact your ICR system administrator or the responsible party for your organization's deployment of the ICR platform.
          </p>
        </Section>

        {/* FOOTER */}
        <footer style={styles.footer}>
          <span style={styles.footerBrand}>ICR — Incident Command Response</span>
          <span style={styles.footerNote}>SMS Messaging Privacy Policy · Effective May 13, 2025</span>
        </footer>

      </div>
    </div>
  );
}
