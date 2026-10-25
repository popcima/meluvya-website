import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { assetPath } from "@/lib/assets";
import { pageMetadata } from "@/lib/site";
import styles from "./privacy.module.css";

export const metadata = pageMetadata({
  title: "Privacy policy | Meluvya",
  description: "Meluvya’s privacy policy explains website information, photo processing, service providers, storage, deletion and privacy choices.",
  path: "/privacy/",
  image: "meluvya-icon.png",
});

const sections = [
  ["information", "Information we handle"],
  ["photo-processing", "How AI photo creation works"],
  ["providers", "Service providers"],
  ["storage", "Storage and deletion"],
  ["choices", "Your choices"],
  ["contact", "Operator and contact"],
] as const;

export default function PrivacyPage() {
  return <>
    <a className="skip" href="#main">Skip to content</a>
    <Header subPage />
    <main id="main" className={`journal-article ${styles.page}`}>
      <div className={`wrap ${styles.layout}`}>
        <header className={styles.header}>
          <nav className="breadcrumbs" aria-label="Breadcrumb"><a href={assetPath("/")}>Home</a><span aria-hidden="true">/</span><span aria-current="page">Privacy</span></nav>
          <div className={styles.status}><p>Updated <time dateTime="2026-10-25">October 25, 2026</time></p></div>
          <h1>Meluvya Privacy Policy</h1>
          <p className="article-summary">This privacy policy describes how information is handled in the Meluvya iOS app and on meluvya.com.</p>
        </header>

        <nav className={styles.contents} aria-label="Privacy policy sections">{sections.map(([id, title]) => <a href={`#${id}`} key={id}>{title}<span aria-hidden="true">↗</span></a>)}</nav>

        <div className="article-content">
          <section id="information" className="article-section">
            <h2>Information we handle</h2>
            <h3 className={styles.subheading}>When you visit meluvya.com</h3>
            <p>You can read the website and blog without creating an account or uploading a photo. The site does not currently provide a photo-upload form. Its store buttons display a coming-soon message.</p>
            <p>GitHub Pages hosts this website and can process technical request information, such as your IP address, browser information and requested pages, to deliver and protect the site. We have not added advertising pixels or visitor analytics cookies to the website. We use Google Search Console reports to understand how the site appears in search; these reports do not give us your photo library.</p>
            <h3 className={styles.subheading}>When you use the app</h3>
            <ul>
              <li><strong>Photos and creation choices.</strong> The photo you select for cloud generation, the effect or template you choose, and the generated result. A selected photo may include faces or other personal information visible in the image.</li>
              <li><strong>A device-based identity.</strong> The current app uses guest access rather than requiring a new sign-in. A credential stored on your device connects you to your private collection; the service stores a hashed credential and an internal owner identifier.</li>
              <li><strong>Job and service records.</strong> Request identifiers, timestamps, processing status, limited error information and usage records help return results, avoid duplicate jobs, apply service limits and troubleshoot failures.</li>
              <li><strong>Purchase records, when purchases are available.</strong> Apple handles App Store checkout. The subscription system uses transaction identifiers, subscription status and credit records to verify purchases and restore entitlements. Meluvya does not receive your full payment-card details from that checkout.</li>
            </ul>
          </section>

          <section id="photo-processing" className="article-section">
            <h2>How AI photo creation works</h2>
            <p>Cloud generation requires sending the selected photo to Meluvya’s backend on Cloudflare. The backend sends the photo and the instructions needed for the selected effect or template to Google Gemini. Where a template uses a reference image, that reference accompanies the request. The generated result returns to the backend for the app to retrieve.</p>
            <p>Cloud generation is different from a device-only edit. The app also includes editor operations that run on the device. Review the app’s photo-upload notice before starting a cloud creation, and only submit photos you have permission to use.</p>
            <p>Google’s handling of API input and output depends on the applicable service terms and account configuration. Google’s terms distinguish paid and unpaid services, which have different data-use practices. Meluvya does not currently specify its active provider account configuration here, so you should not assume zero provider retention or that submitted content is never used to improve models.</p>
          </section>

          <section id="providers" className="article-section">
            <h2>Service providers</h2>
            <p>Different providers support different parts of Meluvya. Reading this website does not itself send your personal photos to an AI provider.</p>
            <ul className={styles.providers}>
              <li><strong>Cloudflare</strong><p>Hosts the app’s API, private photo storage, database and processing queue.</p><a href="https://www.cloudflare.com/privacypolicy/">Cloudflare privacy policy</a></li>
              <li><strong>Google Gemini</strong><p>Processes the selected photo and creation instructions to produce an AI result.</p><a href="https://ai.google.dev/gemini-api/terms">Gemini API data-use terms</a></li>
              <li><strong>Apple</strong><p>Provides App Store purchases and subscription verification when those features are enabled.</p><a href="https://www.apple.com/legal/privacy/">Apple privacy policy</a></li>
              <li><strong>GitHub</strong><p>Hosts meluvya.com and delivers its public pages and images.</p><a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">GitHub privacy statement</a></li>
              <li><strong>Supabase — legacy access</strong><p>Remains part of administrator authentication and compatibility with older signed-in app sessions. New guest installations do not use Supabase sign-in.</p><a href="https://supabase.com/privacy">Supabase privacy policy</a></li>
            </ul>
            <p>Provider processing may take place outside your country. Linked provider policies explain their services; they do not replace Meluvya’s own responsibilities.</p>
          </section>

          <section id="storage" className="article-section">
            <h2>Storage and deletion</h2>
            <p><strong>Uploaded source photos:</strong> the documented backend deletes the temporary source after processing. A scheduled cleanup and a one-day storage lifecycle provide a backstop. Storage lifecycle cleanup is asynchronous, so this is not a promise that every copy disappears at an exact 24-hour deadline.</p>
            <p><strong>Generated results:</strong> the documented app service keeps results until the owner deletes them. Deleting a result removes its stored photo objects, while minimal job records can remain for ownership, duplicate-request protection and usage limits. A fixed retention period for remaining records, purchase records, provider logs and backups is not currently specified here.</p>
            <p><strong>Copies on your device or elsewhere:</strong> cached images, exports saved to your photo library, and copies shared with other services are separate from the backend result. Deleting one copy does not necessarily delete the others. Removing the app is not a confirmed way to delete server-side data.</p>
            <p>The current guest collection is tied to its device credential and does not automatically sync to a new device. Restoring a purchase restores its credit entitlement, not another device’s private photo collection.</p>
          </section>

          <section id="choices" className="article-section">
            <h2>Your choices and privacy rights</h2>
            <ul>
              <li>Choose which photo to use and review the upload notice before cloud generation.</li>
              <li>Manage camera and photo permissions in your device settings. Changing permissions does not retroactively delete a photo already uploaded.</li>
              <li>Use the app’s photo-deletion controls for saved results, and manage exported or shared copies separately.</li>
              <li>Manage an App Store subscription through Apple. Cancelling a subscription and deleting photo data are separate actions.</li>
            </ul>
            <p>Depending on the law that applies to you, you may have rights to access, correct, delete or receive a copy of your personal information, restrict or object to processing, withdraw consent where it is relied on, or complain to a data-protection authority.</p>
            <p>Do not send passwords, device credentials or payment-card details in a privacy request. Contact details have not yet been provided below; this page does not currently offer a direct privacy-request channel.</p>
          </section>

          <section id="age-and-updates" className="article-section">
            <h2>Age eligibility and updates</h2>
            <p>Google’s current Gemini API terms restrict use in services directed toward, or likely to be accessed by, people under 18. This policy does not confirm that age verification is implemented in the app.</p>
            <p>We may update this policy when Meluvya’s features or information-handling practices change. The date above shows the latest revision.</p>
          </section>

          <section id="contact" className={`article-section ${styles.contact}`}>
            <h2>Operator and privacy contact</h2>
            <p>Contact details have not yet been provided.</p>
            <dl className={styles.fields}>{["Operator / company", "Country", "Privacy and deletion email"].map(label => <div key={label}><dt>{label}</dt><dd><span className={styles.blank} aria-hidden="true" /><span className="sr-only">Not yet provided</span></dd></div>)}</dl>
          </section>
        </div>
      </div>
    </main>
    <Footer subPage />
  </>;
}
