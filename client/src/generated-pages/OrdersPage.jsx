export default function OrdersPage() {
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
            <a href="donate-us.html" className="nav-link">Donate Us</a>
          </nav>
          <div className="header-actions">
            <a href="notifications.html" className="icon-link "><span className="icon-badge" /><span>Notifications</span></a>
            <a href="messages.html" className="icon-link "><span className="icon-dot" /><span>Messages</span></a>
            <div className="settings-dropdown">
              <button className="icon-link settings-trigger active-link" type="button" aria-expanded="false">
                <span className="icon-gear">⚙</span><span>Settings</span>
              </button>
              <div className="settings-menu">
                <a href="my-posts.html">My Posts</a>
                <a href="orders.html">Track Your Order</a>
                <a href="premium.html">Premium Plans</a>
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
          <div className="page-hero__bg orders-hero-bg" />
          <div className="hero-overlay" />
          <div className="page-hero__content wrap">
            <div>
              <p className="eyebrow reveal">TRACK YOUR ORDER</p>
              <h1 className="page-title reveal reveal-1">Follow every step<br />professionally.</h1>
              <p className="page-text reveal reveal-2">A more polished order/request tracking page where users can see approval, pickup, and completion progress clearly.</p>
            </div>
            <div className="page-badge reveal reveal-3">
              <span className="mini-label">ORDER STATUS</span>
              <strong>Clear progress at a glance</strong>
              <p>Know exactly where your request stands.</p>
            </div>
          </div>
        </section>
        <section className="order-layout wrap">
          <article className="panel reveal-card">
            <p className="eyebrow">ACTIVE REQUEST</p>
            <h2 className="section-title small">Winter Jacket Request</h2>
            <div className="status-chip success-chip">Approved</div>
            <div className="timeline">
              <div className="timeline-item done"><span /><div><strong>Request sent</strong><p>Your request was submitted successfully.</p></div></div>
              <div className="timeline-item done"><span /><div><strong>Donor confirmed</strong><p>The donor approved your request.</p></div></div>
              <div className="timeline-item current"><span /><div><strong>Pickup scheduled</strong><p>Pickup is arranged for tomorrow at 6:30 PM.</p></div></div>
              <div className="timeline-item"><span /><div><strong>Completed</strong><p>Item handoff will be marked complete after pickup.</p></div></div>
            </div>
          </article>
          <aside className="panel reveal-card">
            <p className="eyebrow">ORDER DETAILS</p>
            <div className="detail-stack">
              <div><strong>Item</strong><span>Winter Jacket</span></div>
              <div><strong>Donor</strong><span>Sarah Kim</span></div>
              <div><strong>Pickup Date</strong><span>Tomorrow • 6:30 PM</span></div>
              <div><strong>Location</strong><span>Brampton, ON</span></div>
              <div><strong>Status</strong><span>Pickup Scheduled</span></div>
            </div>
            <button className="btn btn-soft wide">Need Help?</button>
          </aside>
        </section>
      </main>
    </div>
  );
}
