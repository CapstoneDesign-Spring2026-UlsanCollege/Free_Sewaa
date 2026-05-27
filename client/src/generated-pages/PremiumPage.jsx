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
          <div className="page-hero__bg premium-hero-bg" />
          <div className="hero-overlay" />
          <div className="page-hero__content wrap">
            <div>
              <p className="eyebrow reveal">PREMIUM PLANS</p>
              <h1 className="page-title reveal reveal-1">Choose a plan that<br />fits your activity.</h1>
              <p className="page-text reveal reveal-2">Three professional plan options for users who want fewer ads, more requests, and stronger platform visibility.</p>
            </div>
            <div className="page-badge reveal reveal-3">
              <span className="mini-label">UPGRADE</span>
              <strong>More visibility and flexibility</strong>
              <p>Plans are designed for people who use Free Sewaa more frequently.</p>
            </div>
          </div>
        </section>
        <section className="pricing-grid wrap">
          <article className="pricing-card reveal-card">
            <p className="eyebrow">BASIC</p>
            <h2>Free</h2>
            <div className="price">$0<span>/month</span></div>
            <ul>
              <li>Standard listing access</li>
              <li>Basic browse experience</li>
              <li>Normal ad visibility</li>
              <li>Standard request limit</li>
            </ul>
            <button className="btn btn-soft wide">Current Plan</button>
          </article>
          <article className="pricing-card featured-plan reveal-card">
            <p className="eyebrow">PLUS</p>
            <h2>Premium Plus</h2>
            <div className="price">$9<span>/month</span></div>
            <ul>
              <li>Less ads across the platform</li>
              <li>More item requests per month</li>
              <li>Priority listing visibility</li>
              <li>Faster message support</li>
            </ul>
            <button className="btn btn-hero wide">Upgrade to Plus</button>
          </article>
          <article className="pricing-card reveal-card">
            <p className="eyebrow">PRO</p>
            <h2>Community Pro</h2>
            <div className="price">$19<span>/month</span></div>
            <ul>
              <li>Minimal ads experience</li>
              <li>Highest request limit</li>
              <li>Top placement for listings</li>
              <li>Premium badge and extra tools</li>
            </ul>
            <button className="btn btn-soft wide">Choose Pro</button>
          </article>
        </section>
      </main>
    </div>
  );
}
