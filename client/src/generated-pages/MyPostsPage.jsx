export default function MyPostsPage() {
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
            <a href="notifications.html" className="icon-link"><span className="icon-badge" /><span>Notifications</span></a>
            <a href="messages.html" className="icon-link"><span className="icon-dot" /><span>Messages</span></a>
            <div className="settings-dropdown">
              <button className="icon-link settings-trigger active-link" type="button" aria-expanded="false"><span className="icon-gear">⚙</span><span>Settings</span></button>
              <div className="settings-menu">
                <a href="my-posts.html">My Posts</a><a href="orders.html">Track Your Order</a><a href="premium.html">Premium Plans</a><a href="profile.html">Personal Information</a><a href="profile.html#edit">Edit Profile</a><a href="region.html">Change Region</a><a href="saved.html">Saved Items</a><a href="requests.html">My Requests</a><button type="button" className="settings-button" data-theme-toggle="true">Toggle Dark Mode</button><a href="logout.html">Logout</a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="page-hero generic-hero app-shell-hero">
          <div className="page-hero__bg profile-hero-bg" />
          <div className="hero-overlay" />
          <div className="page-hero__content wrap">
            <div>
              <p className="eyebrow reveal">LISTING CONTROL</p>
              <h1 className="page-title reveal reveal-1">Manage every post<br />like a real product.</h1>
              <p className="page-text reveal reveal-2">Change status, preview items, remove old listings, and track how your donations are performing.</p>
            </div>
            <div className="page-badge reveal reveal-3">
              <span className="mini-label">POST OVERVIEW</span>
              <div className="badge-stat-row" id="myPostsStats" />
            </div>
          </div>
        </section>
        <section className="wrap app-toolbar">
          <div className="toolbar-wrap">
            <button className="btn btn-soft active-chip" data-post-filter="all">All</button>
            <button className="btn btn-soft" data-post-filter="active">Active</button>
            <button className="btn btn-soft" data-post-filter="reserved">Reserved</button>
            <button className="btn btn-soft" data-post-filter="donated">Completed</button>
            <a className="btn btn-hero" href="donate.html">Create new listing</a>
          </div>
        </section>
        <section className="wrap post-grid" id="myPostsGrid" />
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
