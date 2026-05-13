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
  // ── AGREEMENT BANNER ──
  agreementBanner: {
    background: "rgba(255,184,77,0.10)",
    border: "1px solid rgba(255,184,77,0.25)",
    borderRadius: 8,
    padding: "16px 20px",
    marginBottom: 40,
    display: "flex",
    alignItems: "center",
    gap: 14,
  },
  agreementP: {
    fontSize: 13.5,
    color: "#FFB84D",
    margin: 0,
    lineHeight: 1.5,
  },
  // ── SECTION ──
  section: {
    marginBottom: 36,
    paddingBottom: 36,
    borderBottom: "1px solid #1e3048",
  },
  sectionLast: {
    marginBottom: 36,
    paddingBottom: 36,
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
  pLast: {
    fontSize: 14,
    color: "#7a94b0",
    lineHeight: 1.75,
    margin: 0,
  },
  strong: {
    color: "#e8edf2",
    fontWeight: 600,
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
  highlightBlockGreen: {
    background: "#162030",
    borderLeft: "3px solid #2ecc71",
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
  highlightPGreen: {
    fontSize: 14,
    fontWeight: 500,
    color: "#2ecc71",
    lineHeight: 1.75,
    margin: 0,
  },
  // ── KEYWORD ──
  keyword: {
    fontFamily: "'DM Mono', monospace",
    fontSize: 12,
    background: "rgba(0,212,255,0.12)",
    color: "#00D4FF",
    borderRadius: 4,
    padding: "1px 7px",
  },
  // ── CONTACT BLOCK ──
  contactBlock: {
    background: "#162030",
    border: "1px solid #1e3048",
    borderRadius: 8,
    padding: "20px 24px",
    marginTop: 14,
  },
  contactLabel: {
    fontFamily: "'DM Mono', monospace",
    fontSize: 10,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "#4a6278",
    marginBottom: 8,
  },
  contactP: {
    fontSize: 14,
    color: "#7a94b0",
    margin: 0,
    lineHeight: 1.7,
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

const Section = ({ num, title, last, children }) => (
  <div style={last ? styles.sectionLast : styles.section}>
    <div style={styles.sectionHeader}>
      <span style={styles.sectionNum}>{num}</span>
      <h2 style={styles.sectionTitle}>{title}</h2>
    </div>
    <div style={styles.sectionBody}>{children}</div>
  </div>
);

export default function Terms() {
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
          <h1 style={styles.docTitle}>SMS Messaging Terms &amp; Conditions</h1>
          <div style={styles.docMeta}>
            {["Effective Date: May 13, 2025", "Operated by: Sokol", "Governing Law: State of New Jersey"].map((item) => (
              <span key={item} style={styles.metaItem}>
                <span style={styles.metaDot} />
                {item}
              </span>
            ))}
          </div>
        </header>

        {/* AGREEMENT BANNER */}
        <div style={styles.agreementBanner}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFB84D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <p style={styles.agreementP}>
            By enrolling in or using the ICR SMS notification service, you agree to these Terms &amp; Conditions. Please read them carefully before participating.
          </p>
        </div>

        {/* SECTION 1 */}
        <Section num="01" title="Program Description">
          <p style={styles.p}>Sokol operates the Incident Command Response (ICR) platform, which provides SMS-based notifications to enrolled users. The ICR SMS program delivers the following types of messages:</p>
          <ul style={styles.bulletList}>
            <Bullet>Job assignment notifications sent to field service technicians</Bullet>
            <Bullet>Incident status updates (e.g., Open, In Progress, Complete)</Bullet>
            <Bullet>Operational alerts relevant to the recipient's assigned role</Bullet>
            <Bullet>Account or system notifications related to ICR platform activity</Bullet>
          </ul>
          <p style={{ ...styles.p, marginTop: 12 }}>
            This program is available to authorized Sokol employees and external clients or customers who have been granted access to the ICR platform.
          </p>
        </Section>

        {/* SECTION 2 */}
        <Section num="02" title="Enrollment and Consent">
          <p style={styles.p}>
            By providing your mobile phone number and enrolling in the ICR SMS notification program, you expressly consent to receive recurring automated text messages from Sokol at the mobile number you provide. Consent is not a condition of purchase or use of any Sokol product or service.
          </p>
          <p style={styles.p}>Enrollment may occur through any of the following:</p>
          <ul style={styles.bulletList}>
            <Bullet>Account creation or profile setup within the ICR platform by a system administrator</Bullet>
            <Bullet>Written or electronic agreement with Sokol that includes SMS notification opt-in</Bullet>
            <Bullet>Direct opt-in request submitted to a Sokol administrator</Bullet>
          </ul>
        </Section>

        {/* SECTION 3 */}
        <Section num="03" title="Message Frequency">
          <div style={styles.highlightBlock}>
            <p style={styles.highlightP}>
              Message frequency varies. You may receive multiple messages per day depending on operational activity, active incidents, and your assigned role within the ICR platform.
            </p>
          </div>
          <p style={styles.pLast}>
            Sokol does not send marketing or promotional messages through the ICR SMS program. All messages are operational in nature and directly related to your role or active incidents.
          </p>
        </Section>

        {/* SECTION 4 */}
        <Section num="04" title="Message and Data Rates">
          <div style={styles.highlightBlockAmber}>
            <p style={styles.highlightPAmber}>
              Message and data rates may apply. Standard SMS and data charges from your mobile carrier may apply to all messages sent and received through the ICR SMS program.
            </p>
          </div>
          <p style={styles.pLast}>
            Sokol is not responsible for any charges billed to you by your mobile carrier. Contact your carrier for details about your messaging plan.
          </p>
        </Section>

        {/* SECTION 5 */}
        <Section num="05" title="How to Opt Out">
          <p style={styles.p}>You may opt out of ICR SMS notifications at any time using any of the following methods:</p>
          <ul style={styles.bulletList}>
            <Bullet>Reply <span style={styles.keyword}>STOP</span> to any ICR SMS message to immediately cancel your subscription</Bullet>
            <Bullet>Reply <span style={styles.keyword}>HELP</span> to any ICR SMS message for assistance</Bullet>
            <Bullet>Contact your ICR system administrator to update your notification preferences</Bullet>
          </ul>
          <div style={styles.highlightBlockGreen}>
            <p style={styles.highlightPGreen}>
              After texting STOP, you will receive one final confirmation message and no further messages will be sent unless you re-enroll.
            </p>
          </div>
          <p style={styles.pLast}>
            Opting out of SMS notifications does not deactivate your ICR account. You will continue to receive notifications through other channels available within the platform.
          </p>
        </Section>

        {/* SECTION 6 */}
        <Section num="06" title="Supported Carriers">
          <p style={styles.pLast}>
            ICR SMS notifications are supported by all major U.S. carriers, including but not limited to AT&amp;T, Verizon, T-Mobile, and US Cellular. Sokol is not liable for delayed or undelivered messages due to carrier coverage, technical outages, or other factors outside of Sokol's control.
          </p>
        </Section>

        {/* SECTION 7 */}
        <Section num="07" title="Privacy and Data Use">
          <p style={styles.p}>
            Your mobile phone number and enrollment data are governed by the ICR SMS Messaging Privacy Policy, which is incorporated into these Terms &amp; Conditions by reference.
          </p>
          <p style={styles.p}>
            Your mobile number will not be shared, sold, or disclosed to any third party for marketing or promotional purposes. Mobile opt-in data and consent are never shared with third parties.
          </p>
          <p style={styles.pLast}>
            SMS messages are delivered through Twilio, Inc., acting solely as a message delivery provider on behalf of Sokol. Twilio is not authorized to use your data for any independent purpose.
          </p>
        </Section>

        {/* SECTION 8 */}
        <Section num="08" title="Limitation of Liability">
          <p style={styles.p}>
            Sokol provides the ICR SMS notification service on an "as-is" and "as-available" basis. Sokol makes no warranties, express or implied, regarding the availability, accuracy, or timeliness of SMS messages.
          </p>
          <p style={styles.pLast}>
            To the fullest extent permitted by applicable law, Sokol shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of or reliance on the ICR SMS notification program, including but not limited to missed notifications, delayed messages, or carrier-related failures.
          </p>
        </Section>

        {/* SECTION 9 */}
        <Section num="09" title="Modifications to These Terms">
          <p style={styles.pLast}>
            Sokol reserves the right to modify these Terms &amp; Conditions at any time. Changes will be effective upon posting of the updated terms within the ICR platform or notification to enrolled users. Your continued participation in the SMS program after any such changes constitutes your acceptance of the revised terms.
          </p>
        </Section>

        {/* SECTION 10 */}
        <Section num="10" title="Governing Law">
          <p style={styles.pLast}>
            These Terms &amp; Conditions are governed by and construed in accordance with the laws of the{" "}
            <strong style={styles.strong}>State of New Jersey</strong>, without regard to its conflict of law provisions. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in the State of New Jersey.
          </p>
        </Section>

        {/* SECTION 11 */}
        <Section num="11" title="Contact Information" last>
          <p style={styles.p}>
            For questions, concerns, or assistance regarding the ICR SMS notification program or these Terms &amp; Conditions, please contact:
          </p>
          <div style={styles.contactBlock}>
            <div style={styles.contactLabel}>Program Administrator</div>
            <p style={styles.contactP}>
              <strong style={styles.strong}>Sokol</strong> — Incident Command Response (ICR)<br />
              Contact your assigned ICR system administrator or reply{" "}
              <span style={styles.keyword}>HELP</span> to any ICR SMS message for support.
            </p>
          </div>
        </Section>

        {/* FOOTER */}
        <footer style={styles.footer}>
          <span style={styles.footerBrand}>ICR — Incident Command Response · Sokol</span>
          <span style={styles.footerNote}>SMS Terms &amp; Conditions · Effective May 13, 2025 · Governing Law: New Jersey</span>
        </footer>

      </div>
    </div>
  );
}
