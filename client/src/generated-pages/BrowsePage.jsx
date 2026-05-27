export default function BrowsePage() {
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
            <a href="browse.html" className="nav-link active">Browse</a>
            <a href="events.html" className="nav-link">Events</a>
            <a href="donate-us.html" className="nav-link">Donate Us</a>
          </nav>
          <div className="header-actions">
            <a href="notifications.html" className="icon-link"><span className="icon-badge" /><span>Notifications</span></a>
            <a href="messages.html" className="icon-link"><span className="icon-dot" /><span>Messages</span></a>
            <div className="settings-dropdown">
              <button className="icon-link settings-trigger" type="button" aria-expanded="false">
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
        <section className="page-hero generic-hero browse-hero app-shell-hero">
          <div className="page-hero__bg browse-hero-bg" />
          <div className="hero-overlay" />
          <div className="page-hero__content wrap">
            <div>
              <p className="eyebrow reveal">DISCOVER LISTINGS</p>
              <h1 className="page-title reveal reveal-1">Browse items<br />like a real marketplace.</h1>
              <p className="page-text reveal reveal-2">Search, sort, save, request, and preview listings with a connected frontend flow that feels much more like a live product.</p>
            </div>
            <div className="page-badge reveal reveal-3 browse-badge-grid">
              <div>
                <span className="mini-label">LIVE FILTERS</span>
                <strong id="browseResultsHeadline">0 listings available</strong>
                <p id="browseResultsSubline">Updated as you search by item, category, condition, and distance.</p>
              </div>
              <div className="badge-stat-row">
                <div><span className="mini-label">Saved</span><strong id="savedCountBadge">0</strong></div>
                <div><span className="mini-label">Requests</span><strong id="requestCountBadge">0</strong></div>
              </div>
            </div>
          </div>
        </section>
        <section className="browse-feature-strip wrap">
          <article className="browse-feature-card reveal-card">
            <span className="feature-pill">Real marketplace mode</span>
            <h2>No fake checkout. Users request items and chat with the donor.</h2>
            <p>Listings show Korea pickup context, save/request actions, and launch-ready filters.</p>
          </article>
          <article className="browse-feature-card reveal-card">
            <h2>Sewaa AI listing help</h2>
            <p>Users can ask AI to improve title, category, description, pickup message, or safety wording.</p>
            <a className="btn btn-soft" href="donate.html">Open Sewaa AI</a>
          </article>
        </section>
        <section className="browse-layout wrap app-layout">
          <aside className="panel filters-panel reveal-card browse-sidebar">
            <div className="panel-head">
              <p className="eyebrow">SEARCH &amp; FILTERS</p>
              <h2 className="section-title small">Refine results</h2>
            </div>
            <div className="filters-stack">
              <label className="field">
                <span>Search</span>
                <input type="text" id="browseSearch" placeholder="Search items, categories, or cities" />
              </label>
              <div>
                <span className="field-label">Category</span>
                <div className="chip-row" id="categoryChips">
                  <button className="chip active-chip" type="button" data-category="All">All</button>
                  <button className="chip" type="button" data-category="Clothing">Clothing</button>
                  <button className="chip" type="button" data-category="Books">Books</button>
                  <button className="chip" type="button" data-category="Food">Food</button>
                  <button className="chip" type="button" data-category="Essentials">Essentials</button>
                  <button className="chip" type="button" data-category="Home">Home</button>
                </div>
              </div>
              <div className="field-grid two compact-grid">
                <label className="field">
                  <span>Condition</span>
                  <select id="conditionFilter">
                    <option value="All">Any condition</option>
                    <option value="Like new">Like new</option>
                    <option value="Good">Good</option>
                    <option value="Used">Used</option>
                    <option value="New">New</option>
                  </select>
                </label>
                <label className="field">
                  <span>Distance</span>
                  <select id="distanceFilter">
                    <option value={999}>Anywhere</option>
                    <option value={5}>Within 5 km</option>
                    <option value={15}>Within 15 km</option>
                    <option value={30}>Within 30 km</option>
                  </select>
                </label>
              </div>
              <label className="field">
                <span>Sort by</span>
                <select id="sortFilter">
                  <option value="newest">Newest</option>
                  <option value="nearest">Nearest</option>
                  <option value="popular">Most requested</option>
                  <option value="saved">Most saved</option>
                </select>
              </label>
              <div className="active-filters" id="activeFilters" />
              <div className="form-actions stack-mobile">
                <button className="btn btn-soft" type="button" id="resetFilters">Reset</button>
                <a className="btn btn-hero" href="donate.html">Post New Listing</a>
              </div>
            </div>
          </aside>
          <div className="listings-area">
            <div className="listings-toolbar reveal-block app-toolbar">
              <div>
                <p className="eyebrow">AVAILABLE NOW</p>
                <h2 className="section-title small">Curated community listings</h2>
              </div>
              <div className="toolbar-right toolbar-wrap">
                <div className="sort-pill" id="resultsSummary">0 Results</div>
                <div className="sort-pill" id="savedSummary">0 Saved</div>
                <div className="sort-pill" id="requestsSummary">0 Requested</div>
              </div>
            </div>
            <div className="listing-grid app-listing-grid" id="listingGrid" />
            <div className="empty-state panel reveal-card hidden" id="browseEmptyState">
              <p className="eyebrow">NO MATCHES</p>
              <h3>No listings match these filters.</h3>
              <p>Try removing a filter, searching a broader keyword, or posting the item you want to give away.</p>
              <div className="form-actions stack-mobile">
                <button className="btn btn-soft" type="button" id="emptyResetButton">Clear filters</button>
                <a className="btn btn-hero" href="donate.html">Create a listing</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="modal-shell hidden" id="listingModal" aria-hidden="true">
        <div className="modal-backdrop" data-close-modal />
        <div className="modal-card panel">
          <button className="modal-close" type="button" data-close-modal aria-label="Close preview">×</button>
          <div id="listingModalContent" />
        </div>
      </div>
    </div>
  );
}
