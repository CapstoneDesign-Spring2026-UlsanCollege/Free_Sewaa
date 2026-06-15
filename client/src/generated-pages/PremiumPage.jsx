export default function PremiumPage() {
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
          <div className="page-hero__bg premium-hero-bg" />
          <div className="hero-overlay" />
          <div className="page-hero__content wrap">
            <div>
              <p className="eyebrow reveal">FREE COMMUNITY SERVICES</p>
              <h1 className="page-title reveal reveal-1">Everything here is<br />free to use.</h1>
              <p className="page-text reveal reveal-2">Free Sewaa does not sell paid plans, upgrades, or paid visibility. The platform is built for free local giving and support.</p>
            </div>
            <div className="page-badge reveal reveal-3">
              <span className="mini-label">NO PAID TIERS</span>
              <strong>Community access for everyone</strong>
              <p>Donors, receivers, and volunteers can use the core service without monthly fees.</p>
            </div>
          </div>
        </section>
        <section className="pricing-grid wrap">
          <article className="pricing-card reveal-card">
            <p className="eyebrow">DONATE</p>
            <h2>Post items</h2>
            <div className="price">$0<span>/month</span></div>
            <ul>
              <li>Create donation listings</li>
              <li>Add item details and pickup area</li>
              <li>Share useful items with neighbors</li>
              <li>No listing fee or paid placement</li>
            </ul>
            <a className="btn btn-soft wide" href="donate.html">Donate an Item</a>
          </article>
          <article className="pricing-card featured-plan reveal-card">
            <p className="eyebrow">REQUEST</p>
            <h2>Find support</h2>
            <div className="price">$0<span>/month</span></div>
            <ul>
              <li>Browse available donations</li>
              <li>Send item requests</li>
              <li>Coordinate pickup through messages</li>
              <li>No paid request limit in the MVP</li>
            </ul>
            <a className="btn btn-hero wide" href="browse.html">Browse Items</a>
          </article>
          <article className="pricing-card reveal-card">
            <p className="eyebrow">COMMUNITY</p>
            <h2>Stay connected</h2>
            <div className="price">$0<span>/month</span></div>
            <ul>
              <li>View requests and saved items</li>
              <li>Track donation/request progress</li>
              <li>Use region settings for local results</li>
              <li>Designed for free community use</li>
            </ul>
            <a className="btn btn-soft wide" href="requests.html">View Requests</a>
          </article>
        </section>
      </main>
    </div>
  );
}
