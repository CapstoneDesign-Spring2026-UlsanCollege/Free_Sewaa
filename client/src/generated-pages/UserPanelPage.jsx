export default function UserPanelPage() {
  return (
    <div>
      <div className="grain" />
      <canvas id="particles" className="particles" />
      <header className="site-header" id="siteHeader">
        <div className="site-header__inner">
          <a href="app.html" className="brand">Free Sewaa</a>
          <nav className="main-nav" aria-label="Primary">
            <a href="app.html" className="nav-link">Home</a>
            <a href="browse.html" className="nav-link">Browse</a>
            <a href="donate.html" className="nav-link">Donate</a>
            <a href="messages.html" className="nav-link">Messages</a>
          </nav>
          <div className="header-actions">
            <a href="notifications.html" className="icon-link"><span className="icon-dot" /><span>Notifications</span></a>
            <div className="settings-dropdown">
              <button className="icon-link settings-trigger" type="button"><span className="icon-gear" aria-hidden="true" /><span>Settings</span></button>
              <div className="settings-menu">
                <a href="profile.html">Profile</a>
                <a href="logout.html">Logout</a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="user-dashboard user-dashboard--pro">
        <section className="page-hero generic-hero app-shell-hero user-hero user-hero--pro">
          <div className="hero-overlay" />
          <div className="page-hero__content wrap user-hero__grid">
            <div className="user-hero__copy">
              <p className="eyebrow">MEMBER WORKSPACE</p>
              <h1 className="page-title">Welcome back, <span data-user-name>Member</span>.</h1>
              <p className="page-text">Manage your donations, requests, saved items, profile, and conversations from one focused dashboard.</p>
              <div className="action-stack user-hero-actions">
                <a className="btn btn-hero" href="donate.html">Create donation post</a>
                <a className="btn btn-soft" href="browse.html">Browse items</a>
              </div>
            </div>
            <aside className="page-badge user-command-card">
              <span className="mini-label">ACCOUNT OVERVIEW</span>
              <strong data-user-role-badge>Member account</strong>
              <p>Your workspace shows only your own listings, requests, saved items, and private messages.</p>
              <div className="user-command-card__meta">
                <div><span>Region</span><strong data-user-region>Ulsan</strong></div>
                <div><span>Profile</span><strong data-user-profile-status>Active</strong></div>
              </div>
            </aside>
          </div>
        </section>
        <section className="wrap user-kpi-grid" aria-label="Dashboard summary">
          <article className="user-kpi-card"><span>Active posts</span><strong data-user-active data-stat-active>0</strong><p>Live donations you manage</p></article>
          <article className="user-kpi-card"><span>Requests sent</span><strong data-user-requests data-stat-requested>0</strong><p>Items you asked for</p></article>
          <article className="user-kpi-card"><span>Saved items</span><strong data-user-saved data-stat-saved>0</strong><p>Your shortlist</p></article>
          <article className="user-kpi-card"><span>Unread messages</span><strong data-user-unread>0</strong><p>Conversation updates</p></article>
        </section>
        <section className="wrap user-workspace-grid">
          <article className="panel reveal-card user-profile-panel">
            <div className="panel-head"><div><p className="eyebrow">MY ACCOUNT</p><h2 className="section-title small">Profile snapshot</h2></div></div>
            <div id="userProfileSummary" className="user-summary-card" />
          </article>
          <article className="panel reveal-card user-actions-panel">
            <div className="panel-head"><div><p className="eyebrow">QUICK ACCESS</p><h2 className="section-title small">Primary actions</h2></div></div>
            <div className="user-action-grid">
              <a className="user-action-card" href="my-posts.html"><span>01</span><strong>Manage posts</strong><p>Edit, reserve, or remove your donations.</p></a>
              <a className="user-action-card" href="requests.html"><span>02</span><strong>Track requests</strong><p>Review the items you asked for.</p></a>
              <a className="user-action-card" href="saved.html"><span>03</span><strong>Saved items</strong><p>Return to listings you are considering.</p></a>
              <a className="user-action-card" href="profile.html"><span>04</span><strong>Edit profile</strong><p>Update contact and pickup details.</p></a>
            </div>
          </article>
        </section>
        <section className="wrap user-activity-grid">
          <article className="panel reveal-card user-activity-panel">
            <div className="panel-head"><div><p className="eyebrow">MY POSTS</p><h2 className="section-title small">Current listings</h2></div></div>
            <div id="userPostsList" className="stack-list" />
          </article>
          <article className="panel reveal-card user-activity-panel">
            <div className="panel-head"><div><p className="eyebrow">MY REQUESTS</p><h2 className="section-title small">Items requested</h2></div></div>
            <div id="userRequestsList" className="stack-list" />
          </article>
          <article className="panel reveal-card user-activity-panel">
            <div className="panel-head"><div><p className="eyebrow">SAVED &amp; MESSAGES</p><h2 className="section-title small">Private activity</h2></div></div>
            <div id="userSavedList" className="stack-list" />
          </article>
        </section>
        <section className="wrap user-contact-grid">
          <article className="panel reveal-card user-contact-card">
            <div className="panel-head">
              <div>
                <p className="eyebrow">CONTACT</p>
                <h2 className="section-title small">Get in touch with Free Sewaa</h2>
              </div>
            </div>
            <p className="section-text">Questions, support, partnerships, or community collaboration - we'd love to hear from you.</p>
            <div className="contact-action-grid">
              <a className="contact-action" href="tel:01096646162">
                <span>Call</span>
                <strong>010-9664-6162</strong>
              </a>
              <a className="contact-action" href="https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/issues">
                <span>Email</span>
                <strong>GitHub Issues</strong>
              </a>
            </div>
          </article>
          <article className="panel reveal-card user-contact-card user-suggestion-card">
            <div className="panel-head">
              <div>
                <p className="eyebrow">SUGGESTIONS</p>
                <h2 className="section-title small">Share your idea</h2>
              </div>
            </div>
            <form className="contact-suggestion-form" id="contactSuggestionForm">
              <label className="field">
                <span>Your name</span>
                <input id="suggestionName" type="text" autoComplete="name" placeholder="Your name" />
              </label>
              <label className="field">
                <span>Email</span>
                <input id="suggestionEmail" type="email" autoComplete="email" placeholder="you@example.com" />
              </label>
              <label className="field">
                <span>Suggestion</span>
                <textarea id="suggestionMessage" rows={5} maxLength={1200} placeholder="Tell us what would make Free Sewaa better." required defaultValue={""} />
              </label>
              <div className="form-actions contact-form-actions">
                <button className="btn btn-hero" type="submit">Send suggestion</button>
                <p className="form-status" id="suggestionStatus" data-tone="default" />
              </div>
            </form>
          </article>
        </section>
      </main>
    </div>
  );
}
