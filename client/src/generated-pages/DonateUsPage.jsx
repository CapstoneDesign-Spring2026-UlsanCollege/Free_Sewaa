export default function DonateUsPage() {
  return (
    <div>
      <div className="grain" />
      <canvas id="particles" className="particles" />
      <header className="site-header" id="siteHeader">
        <div className="site-header__inner">
          <a href="app.html" className="brand">Free Sewaa</a>
          <nav className="main-nav" aria-label="Primary">
            <a href="app.html" className="nav-link">Home</a>
            <a href="about.html" className="nav-link">About Us</a>
            <a href="donate.html" className="nav-link">Donate</a>
            <a href="browse.html" className="nav-link">Browse</a>
            <a href="events.html" className="nav-link">Events</a>
            <a href="donate-us.html" className="nav-link active">Donate Us</a>
          </nav>
          <div className="header-actions">
            <a href="notifications.html" className="icon-link"><span className="icon-badge" /><span>Notifications</span></a>
            <a href="messages.html" className="icon-link"><span className="icon-dot" /><span>Messages</span></a>
            <div className="settings-dropdown">
              <button className="icon-link settings-trigger" type="button" aria-expanded="false">
                <span className="icon-gear" /><span>Settings</span>
              </button>
              <div className="settings-menu">
                <a href="my-posts.html">My Posts</a>
                <a href="orders.html">Track Your Request</a>
                <a href="premium.html">Free Services</a>
                <a href="profile.html">Personal Information</a>
                <a href="profile.html#edit">Edit Profile</a>
                <a href="region.html">Change Region</a>
                <a href="saved.html">Saved Items</a>
                <a href="requests.html">My Requests</a>
                <button type="button" className="settings-button" data-theme-toggle="true">Toggle Dark Mode</button>
                <a href="logout.html">Logout</a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="page-hero generic-hero">
          <div className="page-hero__bg donateus-hero-bg" />
          <div className="hero-overlay" />
          <div className="page-hero__content wrap">
            <div>
              <p className="eyebrow reveal">SUPPORT FREE SEWAA</p>
              <h1 className="page-title reveal reveal-1">Help free support<br />reach more people.</h1>
              <p className="page-text reveal reveal-2">Your support helps Free Sewaa organize donation camps, prepare family care bundles, cover pickup and delivery needs, and keep the platform free for the community.</p>
            </div>
            <div className="page-badge reveal reveal-3">
              <span className="mini-label">COMMUNITY FUND</span>
              <strong>Transparent, practical support</strong>
              <p>Food, clothing, school materials, event supplies, sorting, packaging, and local delivery support.</p>
            </div>
          </div>
        </section>
        <section className="support-impact-strip wrap reveal-block" aria-label="Donation impact examples">
          <article>
            <span className="mini-label">10 USD</span>
            <strong>Hygiene support</strong>
            <p>Helps prepare soap, sanitary items, and daily-use essentials for one care bundle.</p>
          </article>
          <article>
            <span className="mini-label">25 USD</span>
            <strong>Student supplies</strong>
            <p>Helps cover notebooks, pens, art supplies, and learning materials for students.</p>
          </article>
          <article>
            <span className="mini-label">50 USD</span>
            <strong>Family essentials</strong>
            <p>Helps support food, clothing, and basic household needs for a local family.</p>
          </article>
          <article>
            <span className="mini-label">100 USD</span>
            <strong>Donation camp</strong>
            <p>Helps with sorting materials, transport, packaging, and event-day supplies.</p>
          </article>
        </section>
        <section className="wrap support-layout">
          <article className="panel reveal-card support-card support-card--primary">
            <p className="eyebrow">DONATE MONEY</p>
            <h2 className="section-title small">Choose how you want to support.</h2>
            <p className="section-text">This page records your support intent and transfer details for the Free Sewaa team. Replace the sample bank fields below with your verified organization account before collecting real public donations.</p>
            <div className="amount-grid support-amount-grid" role="group" aria-label="Suggested donation amounts">
              <button className="amount-card" type="button" data-amount="$10">$10<span>Hygiene kit</span></button>
              <button className="amount-card" type="button" data-amount="$25">$25<span>Student pack</span></button>
              <button className="amount-card" type="button" data-amount="$50">$50<span>Family bundle</span></button>
              <button className="amount-card" type="button" data-amount="$100">$100<span>Event support</span></button>
            </div>
            <form className="support-form" id="moneySupportForm">
              <div className="field-grid two">
                <label className="field"><span>Donation amount</span><input id="supportAmount" type="text" placeholder="Example: $25" required /></label>
                <label className="field"><span>Donation purpose</span><select id="supportPurpose"><option>Where it is needed most</option><option>Food and essentials</option><option>Student supplies</option><option>Donation camp support</option><option>Pickup and delivery</option></select></label>
              </div>
              <div className="field-grid two">
                <label className="field"><span>Your name</span><input id="supportName" type="text" placeholder="Your full name" /></label>
                <label className="field"><span>Email or phone</span><input id="supportContact" type="text" placeholder="Receipt contact" /></label>
              </div>
              <label className="field"><span>Transfer note or message</span><textarea id="supportNote" rows={4} placeholder="Optional: transfer reference, receipt request, or how you want this used." defaultValue={""} /></label>
              <div className="form-actions contact-form-actions">
                <button className="btn btn-hero" type="submit">Send Support Details</button>
                <p className="form-status" id="supportStatus" aria-live="polite" />
              </div>
            </form>
          </article>
          <aside className="panel reveal-card support-side-card">
            <p className="eyebrow">TRANSFER DETAILS</p>
            <h2 className="section-title small">Bank transfer</h2>
            <div className="bank-details support-bank-details">
              <div><strong>Account Name</strong><span>Free Sewaa Community Fund</span></div>
              <div><strong>Bank Name</strong><span>Update with verified bank</span></div>
              <div><strong>Account Number</strong><span>To be confirmed</span></div>
              <div><strong>Reference</strong><span>Your name + support purpose</span></div>
            </div>
            <p className="helper-text">For real payments, publish only verified bank or payment information approved by your team. Keep receipts for transparency.</p>
            <a className="btn btn-soft" href="https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/issues">Request receipt by email</a>
          </aside>
        </section>
        <section className="wrap support-layout support-layout--secondary">
          <article className="panel reveal-card">
            <p className="eyebrow">SUPPORT WITHOUT MONEY</p>
            <h2 className="section-title small">You can help in many real ways.</h2>
            <div className="support-action-list">
              <a href="donate.html"><strong>Donate useful items</strong><span>Clothes, books, food essentials, furniture, school supplies</span></a>
              <a href="events.html#eventParticipation"><strong>Volunteer at events</strong><span>Sorting, pickup help, registration, delivery, community outreach</span></a>
              <a href="events.html#eventParticipation"><strong>Suggest a donation camp</strong><span>Add a free event idea for the Free Sewaa team to review</span></a>
            </div>
          </article>
          <article className="panel reveal-card">
            <p className="eyebrow">TRANSPARENCY</p>
            <h2 className="section-title small">How Free Sewaa should report support.</h2>
            <ul className="impact-list support-check-list">
              <li>Record each donation or transfer reference.</li>
              <li>Share how funds were used for events and care bundles.</li>
              <li>Keep receipts for purchased supplies and delivery costs.</li>
              <li>Review event suggestions before publishing them publicly.</li>
            </ul>
          </article>
        </section>
      </main>
    </div>
  );
}
