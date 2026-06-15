export default function AdminPage() {
  return (
    <div>
      <div className="grain" />
      <div className="admin-v2-shell">
        <aside className="admin-v2-sidebar">
          <a href="admin.html" className="admin-v2-brand">Free Sewaa <span>Admin</span></a>
          <p className="admin-v2-copy">A dedicated moderation workspace with platform-wide control over users, posts, review queues, and safety signals.</p>
          <nav className="admin-v2-nav" aria-label="Admin sections">
            <button type="button" className="admin-v2-nav__link is-active" data-admin-nav="overview">Overview</button>
            <button type="button" className="admin-v2-nav__link" data-admin-nav="moderation">Moderation</button>
            <button type="button" className="admin-v2-nav__link" data-admin-nav="users">Users</button>
            <button type="button" className="admin-v2-nav__link" data-admin-nav="listings">Listings</button>
            <button type="button" className="admin-v2-nav__link" data-admin-nav="suggestions">Suggestions</button>
            <button type="button" className="admin-v2-nav__link" data-admin-nav="activity">Activity</button>
          </nav>
          <div className="admin-v2-sidepanel">
            <div className="admin-v2-sidecard">
              <span className="mini-label">Boundaries</span>
              <strong>Separate from user panel</strong>
              <p>Admins can moderate everything. Regular users only manage their own profile, listings, and requests.</p>
            </div>
            <div className="admin-v2-sidecard">
              <span className="mini-label">Quick links</span>
              <div className="admin-v2-quicklinks">
                <a href="/user_panel.html">View user dashboard</a>
                <a href="/security_audit.html">Security audit</a>
                <a href="accessibility-audit.html">Accessibility audit</a>
              </div>
            </div>
          </div>
        </aside>
        <main className="admin-v2-main">
          <nav className="admin-v2-topnav" aria-label="Admin account">
            <div>
              <span className="mini-label">Signed in as</span>
              <strong>Super Admin</strong>
            </div>
            <div className="admin-v2-topnav__actions">
              <a href="/index.html">Home</a>
              <a href="/security_audit.html">Security audit</a>
              <button type="button" className="admin-v2-logoutlink" id="adminLogoutButton">Logout</button>
            </div>
          </nav>

          <header className="admin-v2-hero" id="section-overview">
            <div>
              <p className="eyebrow">ADMIN CONTROL CENTER</p>
              <h1>New professional admin panel for moderation, trust, and platform operations.</h1>
              <p className="admin-v2-hero__text">This panel fully replaces the old admin page. It gives admins cleaner oversight of risky posts, blocked users, featured content, unread alerts, and recent moderation activity from one dashboard.</p>
              <div className="admin-v2-hero__chips">
                <span className="admin-v2-chip"><strong data-admin-last-updated>--</strong><small>Last updated</small></span>
                <span className="admin-v2-chip"><strong data-admin-health-score>--/100</strong><small>Platform health</small></span>
                <span className="admin-v2-chip"><strong data-admin-open-risks>0</strong><small>Open risks</small></span>
              </div>
            </div>
            <section className="admin-v2-healthcard">
              <span className="mini-label">Health monitor</span>
              <strong data-admin-health-score-big>--</strong>
              <p data-admin-health-text>Loading dashboard status??/p&gt;
              </p><div className="admin-v2-progress"><span data-admin-health-bar /></div>
              <div className="admin-v2-healthmeta">
                <div><span>Security</span><strong data-admin-security-status>--</strong></div>
                <div><span>Accessibility</span><strong data-admin-accessibility-status>--</strong></div>
              </div>
            </section>
          </header>
          <section className="admin-v2-stats" aria-label="Summary metrics">
            <article className="admin-v2-stat admin-v2-stat--accent">
              <span>Total users</span>
              <strong data-admin-users>0</strong>
              <p><span data-admin-admins>0</span> admins · <span data-admin-blocked-users>0</span> blocked</p>
            </article>
            <article className="admin-v2-stat">
              <span>Total listings</span>
              <strong data-admin-listings>0</strong>
              <p><span data-admin-active>0</span> active · <span data-admin-hidden>0</span> hidden</p>
            </article>
            <article className="admin-v2-stat">
              <span>Review queue</span>
              <strong data-admin-flagged>0</strong>
              <p><span data-admin-featured>0</span> featured · needs moderation</p>
            </article>
            <article className="admin-v2-stat">
              <span>Inbox alerts</span>
              <strong data-admin-unread>0</strong>
              <p><span data-admin-conversations>0</span> conversations · <span data-admin-suggestions>0</span> suggestions</p>
            </article>
          </section>
          <section className="admin-v2-grid admin-v2-grid--top" id="section-moderation">
            <article className="admin-v2-panel admin-v2-panel--wide">
              <div className="admin-v2-panel__head">
                <div>
                  <p className="eyebrow">MODERATION INBOX</p>
                  <h2>Priority posts requiring admin action</h2>
                </div>
                <div className="admin-v2-togglebar">
                  <button className="admin-v2-toggle is-active" type="button" data-queue-filter="all">All</button>
                  <button className="admin-v2-toggle" type="button" data-queue-filter="urgent">Urgent</button>
                  <button className="admin-v2-toggle" type="button" data-queue-filter="reviewed">Reviewed</button>
                </div>
              </div>
              <div id="adminModerationQueue" className="admin-v2-stack" />
            </article>
            <article className="admin-v2-panel">
              <div className="admin-v2-panel__head">
                <div>
                  <p className="eyebrow">ADMIN CAPABILITIES</p>
                  <h2>Actions available</h2>
                </div>
              </div>
              <div className="admin-v2-capabilities">
                <div><strong>User safety</strong><p>Block abusive users, promote trusted admins, remove bad accounts.</p></div>
                <div><strong>Listing control</strong><p>Hide, restore, review, feature, or delete listings with one click.</p></div>
                <div><strong>Live oversight</strong><p>Monitor unread alerts, risk score, queue volume, and recent actions.</p></div>
                <div><strong>Cleaner workflow</strong><p>Search and filter users or listings before applying moderation.</p></div>
              </div>
              <div className="admin-v2-miniinfo">
                <strong>Best practice</strong>
                <p>Use <em>hide</em> for temporary moderation, <em>review</em> for cleared items, and <em>delete</em> when a listing or account should be permanently removed.</p>
              </div>
            </article>
          </section>
          <section className="admin-v2-grid admin-v2-grid--middle" id="section-users">
            <article className="admin-v2-panel">
              <div className="admin-v2-panel__head admin-v2-panel__head--stacked">
                <div>
                  <p className="eyebrow">USER CONTROL</p>
                  <h2>Manage accounts and roles</h2>
                </div>
                <div className="admin-v2-controls">
                  <input id="adminUserSearch" type="search" placeholder="Search by name, email, or phone" />
                  <select id="adminUserStatusFilter" aria-label="Filter user status">
                    <option value="all">All users</option>
                    <option value="active">Active only</option>
                    <option value="blocked">Blocked only</option>
                    <option value="admins">Admins only</option>
                  </select>
                </div>
              </div>
              <div id="adminUsersList" className="admin-v2-cardlist" />
            </article>
            <article className="admin-v2-panel" id="section-listings">
              <div className="admin-v2-panel__head admin-v2-panel__head--stacked">
                <div>
                  <p className="eyebrow">LISTING CONTROL</p>
                  <h2>Moderate current posts</h2>
                </div>
                <div className="admin-v2-controls">
                  <input id="adminListingSearch" type="search" placeholder="Search by title, owner, category, or location" />
                  <select id="adminListingStatusFilter" aria-label="Filter listing status">
                    <option value="all">All listings</option>
                    <option value="flagged">Needs review</option>
                    <option value="hidden">Hidden</option>
                    <option value="featured">Featured</option>
                    <option value="active">Active</option>
                  </select>
                </div>
              </div>
              <div id="adminListingsList" className="admin-v2-cardlist" />
            </article>
          </section>
          <section className="admin-v2-grid admin-v2-grid--top" id="section-suggestions">
            <article className="admin-v2-panel admin-v2-panel--wide">
              <div className="admin-v2-panel__head">
                <div>
                  <p className="eyebrow">USER FEEDBACK</p>
                  <h2>Suggestions from dashboard contact form</h2>
                </div>
              </div>
              <div id="adminSuggestionsFeed" className="admin-v2-activity" />
            </article>
            <article className="admin-v2-panel">
              <div className="admin-v2-panel__head">
                <div>
                  <p className="eyebrow">CONTACT CHANNELS</p>
                  <h2>Free Sewaa contact</h2>
                </div>
              </div>
              <div className="admin-v2-audits">
                <div className="admin-v2-audititem">
                  <span>Phone</span>
                  <strong>010-9664-6162</strong>
                  <p>Users can call directly from the dashboard contact card.</p>
                </div>
                <div className="admin-v2-audititem">
                  <span>Email</span>
                  <strong>GitHub Issues</strong>
                  <p>Users can email the organization from the dashboard contact card.</p>
                </div>
              </div>
            </article>
          </section>
          <section className="admin-v2-grid admin-v2-grid--bottom" id="section-activity">
            <article className="admin-v2-panel">
              <div className="admin-v2-panel__head">
                <div>
                  <p className="eyebrow">RECENT ADMIN ACTIVITY</p>
                  <h2>Latest actions</h2>
                </div>
              </div>
              <div id="adminActivityFeed" className="admin-v2-activity" />
            </article>
            <article className="admin-v2-panel">
              <div className="admin-v2-panel__head">
                <div>
                  <p className="eyebrow">SYSTEM CHECKS</p>
                  <h2>Audit snapshot</h2>
                </div>
              </div>
              <div className="admin-v2-audits">
                <div className="admin-v2-audititem">
                  <span>Security status</span>
                  <strong data-admin-security-title>Loading??/strong&gt;
                    <p data-admin-security-text>Checking security posture??/p&gt;
                    </p></strong></div><strong data-admin-security-title>
                  <div className="admin-v2-audititem">
                    <span>Accessibility status</span>
                    <strong data-admin-accessibility-title>Loading??/strong&gt;
                      <p data-admin-accessibility-text>Checking accessibility quality??/p&gt;
                      </p></strong></div><strong data-admin-accessibility-title>
                    <div className="admin-v2-audititem">
                      <span>System guidance</span>
                      <strong>Admin only workspace</strong>
                      <p>This panel is intentionally separate from the user experience so moderation powers stay restricted.</p>
                    </div>
                  </strong></strong></div><strong data-admin-security-title><strong data-admin-accessibility-title>
                </strong></strong></article><strong data-admin-security-title><strong data-admin-accessibility-title>
              </strong></strong></section><strong data-admin-security-title><strong data-admin-accessibility-title>
            </strong></strong></main><strong data-admin-security-title><strong data-admin-accessibility-title>
          </strong></strong></div><strong data-admin-security-title><strong data-admin-accessibility-title>
          <div className="admin-toast" id="adminToast" />
        </strong></strong></div>
  );
}
