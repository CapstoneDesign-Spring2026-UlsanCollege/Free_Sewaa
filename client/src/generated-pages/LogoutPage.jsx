export default function LogoutPage() {
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
          <div className="page-hero__bg logout-hero-bg" />
          <div className="hero-overlay" />
          <div className="page-hero__content wrap">
            <div>
              <p className="eyebrow reveal">ACCOUNT</p>
              <h1 className="page-title reveal reveal-1">You are ready to<br />sign out.</h1>
              <p className="page-text reveal reveal-2">This page can later connect to real authentication logout logic. For now it provides a cleaner, more complete product flow.</p>
            </div>
            <div className="page-badge reveal reveal-3">
              <span className="mini-label">SAFE EXIT</span>
              <strong>End your session cleanly</strong>
              <p>Return anytime to continue donating, browsing, or messaging.</p>
            </div>
          </div>
        </section>
        <section className="section-intro wrap reveal-block">
          <div><p className="eyebrow">LOGOUT</p><h2 className="section-title small">This is a styled placeholder for a real sign-out action.</h2></div>
          <div className="form-actions"><a href="app.html" className="btn btn-soft">Back Home</a><button className="btn btn-hero" id="logoutNow">Sign Out</button></div>
        </section>
      </main>
    </div>
  );
}
