export default function RegionPage() {
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
          <div className="page-hero__bg region-hero-bg" />
          <div className="hero-overlay" />
          <div className="page-hero__content wrap">
            <div>
              <p className="eyebrow reveal">LOCATION SETTINGS</p>
              <h1 className="page-title reveal reveal-1">Change your<br />region.</h1>
              <p className="page-text reveal reveal-2">Select a city or area to improve nearby results, messages, and pickup relevance.</p>
            </div>
          </div>
        </section>
        <section className="content-grid wrap">
          <article className="panel reveal-card">
            <p className="eyebrow">CURRENT REGION</p>
            <h2 className="section-title small">Brampton, Ontario</h2>
            <p className="section-text">Your current region controls nearby browse results and pickup visibility.</p>
          </article>
          <article className="panel reveal-card">
            <p className="eyebrow">CHANGE REGION</p>
            <form className="premium-form">
              <label className="field"><span>Select region</span><select><option>Brampton</option><option>Mississauga</option><option>Toronto</option><option>North York</option></select></label>
              <div className="form-actions"><button className="btn btn-hero" type="submit">Update Region</button></div>
            </form>
          </article>
        </section>
      </main>
    </div>
  );
}
