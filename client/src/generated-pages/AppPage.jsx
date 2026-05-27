export default function AppPage() {
  return (
    <div>
      <div className="grain" />
      <canvas id="particles" className="particles" />
      <header className="site-header" id="siteHeader">
        <div className="site-header__inner">
          <a href="app.html" className="brand">Free Sewaa</a>
          <nav className="main-nav" aria-label="Primary">
            <a href="app.html" className="nav-link active">Home</a>
            <a href="about.html" className="nav-link">About Us</a>
            <a href="donate.html" className="nav-link">Donate</a>
            <a href="browse.html" className="nav-link">Browse</a>
            <a href="events.html" className="nav-link">Events</a>
            <a href="donate-us.html" className="nav-link">Donate Us</a>
          </nav>
          <div className="header-actions">
            <a href="notifications.html" className="icon-link "><span className="icon-badge" /><span>Notifications</span></a>
            <a href="messages.html" className="icon-link "><span className="icon-dot" /><span>Messages</span></a>
            <div className="settings-dropdown">
              <button className="icon-link settings-trigger " type="button" aria-expanded="false">
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
        <section className="hero hero-home">
          <div className="hero-bg hero-home-bg" />
          <div className="hero-overlay" />
          <div className="hero-inner wrap">
            <div className="hero-copy">
              <p className="eyebrow reveal">COMMUNITY GIVING HUB</p>
              <h1 className="hero-title reveal reveal-1">Give what you can.<br />Find what you need.</h1>
              <p className="hero-text reveal reveal-2">Free Sewaa connects neighbors through free item donations, community events, messages, and trusted pickup coordination.</p>
              <div className="hero-cta reveal reveal-3">
                <a href="donate.html" className="btn btn-hero">Donate an Item</a>
                <a href="browse.html" className="text-link">Browse Free Items</a>
              </div>
            </div>
            <div className="hero-visual reveal reveal-4">
              <div className="showcase-grid">
                <article className="showcase-card tilt">
                  <div className="showcase-card__media media-a" />
                  <div className="showcase-card__body">
                    <span className="mini-label">DONATE</span>
                    <strong>Share useful items with confidence</strong>
                    <p>Post clothing, books, food support, furniture, or school supplies with clear pickup details.</p>
                  </div>
                </article>
                <article className="showcase-card tilt">
                  <div className="showcase-card__media media-b" />
                  <div className="showcase-card__body">
                    <span className="mini-label">BROWSE</span>
                    <strong>Find free support nearby</strong>
                    <p>Search available items, save what matters, and request support respectfully.</p>
                  </div>
                </article>
                <article className="showcase-card tilt wide-card">
                  <div className="showcase-card__media media-c" />
                  <div className="showcase-card__body">
                    <span className="mini-label">EVENTS</span>
                    <strong>Join community support days</strong>
                    <p>Volunteer for donation camps, suggest free events, and support outreach work.</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <div className="hero-stats wrap reveal-block">
            <div className="stat-card"><span className="stat-label">Items Shared</span><strong className="counter" data-target={8400}>0</strong></div>
            <div className="stat-card"><span className="stat-label">Families Supported</span><strong className="counter" data-target={1250}>0</strong></div>
            <div className="stat-card"><span className="stat-label">Communities Reached</span><strong className="counter" data-target={42}>0</strong></div>
          </div>
        </section>
        <section className="section-intro wrap reveal-block">
          <div>
            <p className="eyebrow">COMMUNITY HUB</p>
            <h2 className="section-title">A practical place for giving, receiving, and volunteering.</h2>
          </div>
          <p className="section-text">From item donations to pickup messages and free events, your home page keeps the main Free Sewaa actions easy to reach.</p>
        </section>
        <section className="feature-grid wrap">
          <article className="feature-card reveal-card">
            <div className="feature-card__media feature-media-1" />
            <div className="feature-card__body">
              <p className="mini-label">ABOUT THE MISSION</p>
              <h3>Built to make generosity easier to trust.</h3>
              <p>Free Sewaa helps people share useful items with dignity and connect communities through practical support.</p>
            </div>
          </article>
          <article className="feature-card reveal-card">
            <div className="feature-card__media feature-media-2" />
            <div className="feature-card__body">
              <p className="mini-label">DONATE US</p>
              <h3>Support care beyond item donations.</h3>
              <p>Financial support helps prepare care bundles, transport items, and run community events.</p>
            </div>
          </article>
          <article className="feature-card reveal-card">
            <div className="feature-card__media feature-media-3" />
            <div className="feature-card__body">
              <p className="mini-label">YOUR ACCOUNT</p>
              <h3>Keep your giving organized.</h3>
              <p>Manage your profile, saved items, requests, messages, and donation posts from one place.</p>
            </div>
          </article>
        </section>
        <section className="event-support wrap reveal-block">
          <div>
            <p className="eyebrow">COMMUNITY EVENTS</p>
            <h2 className="section-title small">Find free events and volunteer opportunities.</h2>
            <p className="section-text">Discover food drives, clothing camps, student supply pickups, blood donation camps, and volunteer meetups in one dedicated section.</p>
          </div>
          <div className="event-support__actions">
            <a href="events.html" className="btn btn-hero">View Events</a>
            <a href="donate.html" className="btn btn-soft">Donate Items</a>
          </div>
        </section>
      </main>
    </div>
  );
}
