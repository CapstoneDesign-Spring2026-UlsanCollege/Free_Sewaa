export default function SavedPage() {
  return (
    <div>
      <div className="grain" />
      <canvas id="particles" className="particles" />
      <header className="site-header" id="siteHeader">
        <div className="site-header__inner">
          <a href="app.html" className="brand">Free Sewaa</a>
          <nav className="main-nav" aria-label="Primary">
            <a href="app.html" className="nav-link">Home</a><a href="about.html" className="nav-link">About Us</a><a href="donate.html" className="nav-link">Donate</a><a href="browse.html" className="nav-link">Browse</a><a href="donate-us.html" className="nav-link">Donate Us</a>
          </nav>
          <div className="header-actions">
            <a href="notifications.html" className="icon-link"><span className="icon-badge" /><span>Notifications</span></a>
            <a href="messages.html" className="icon-link"><span className="icon-dot" /><span>Messages</span></a>
            <div className="settings-dropdown">
              <button className="icon-link settings-trigger active-link" type="button" aria-expanded="false"><span className="icon-gear">⚙</span><span>Settings</span></button>
              <div className="settings-menu">
                <a href="my-posts.html">My Posts</a><a href="orders.html">Track Your Request</a><a href="premium.html">Free Services</a><a href="profile.html">Personal Information</a><a href="profile.html#edit">Edit Profile</a><a href="region.html">Change Region</a><a href="saved.html">Saved Items</a><a href="requests.html">My Requests</a><button type="button" className="settings-button" data-theme-toggle="true">Toggle Dark Mode</button><a href="logout.html">Logout</a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="page-hero generic-hero">
          <div className="page-hero__bg browse-hero-bg" />
          <div className="hero-overlay" />
          <div className="page-hero__content wrap">
            <div>
              <p className="eyebrow reveal">SAVED COLLECTION</p>
              <h1 className="page-title reveal reveal-1">Keep your shortlist<br />organized.</h1>
              <p className="page-text reveal reveal-2">Compare saved listings, jump into a request, and remove anything you no longer need.</p>
            </div>
            <div className="page-badge reveal reveal-3"><span className="mini-label" id="savedCount">0 saved items</span><strong>These cards stay synced with Browse.</strong></div>
          </div>
        </section>
        <section className="wrap saved-grid" id="savedGrid" />
      </main>
      <div className="modal-shell hidden" id="accountListingModal" aria-hidden="true">
        <div className="modal-backdrop" data-close-modal />
        <div className="modal-card panel">
          <button className="modal-close" type="button" data-close-modal>×</button>
          <div id="accountListingContent" />
        </div>
      </div>
    </div>
  );
}
