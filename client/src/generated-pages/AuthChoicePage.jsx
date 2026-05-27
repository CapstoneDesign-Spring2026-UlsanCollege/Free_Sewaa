export default function AuthChoicePage() {
  return (
    <div>
      <div className="auth-overlay" />
      <header className="auth-header">
        <div className="brand">Free Sewaa</div>
        <div className="auth-header__actions">
          <a className="mini-link" href="/index.html">Home</a>
          <a className="mini-link is-active" href="/auth_choice.html">Portal</a>
          <a className="mini-link" href="/signup.html">Create account</a>
        </div>
      </header>
      <main className="auth-shell portal-shell">
        <section className="auth-left portal-left">
          <p className="eyebrow">CONTROL ACCESS</p>
          <h1>Choose the right entrance for your role.</h1>
          <p className="auth-copy">
            Free Sewaa has separate spaces for community members and administrators. Users can donate,
            request, message, and manage their activity. Admins can review listings, manage users,
            handle moderation, and keep the platform safe.
          </p>
          <div className="auth-feature-list portal-feature-list">
            <article className="auth-feature">
              <div className="auth-feature__dot" />
              <div>
                <strong>User Portal</strong>
                <p>Manage donations, requests, saved items, messages, and personal account settings.</p>
              </div>
            </article>
            <article className="auth-feature">
              <div className="auth-feature__dot" />
              <div>
                <strong>Admin Command Center</strong>
                <p>Review posts, block or restore users, feature listings, and monitor platform activity.</p>
              </div>
            </article>
            <article className="auth-feature">
              <div className="auth-feature__dot" />
              <div>
                <strong>Safer Access Flow</strong>
                <p>Clean separation between community access and administrative controls for better security.</p>
              </div>
            </article>
          </div>
        </section>
        <section className="auth-card portal-card">
          <div className="auth-card__top portal-card__top">
            <p className="eyebrow">WELCOME</p>
            <h2>Select your portal</h2>
            <p className="auth-card__text">Choose the space that matches how you want to enter Free Sewaa.</p>
          </div>
          <div className="portal-grid">
            <a className="portal-option portal-option--user" href="/signin.html">
              <div className="portal-option__badge">For Members</div>
              <div className="portal-option__icon">👤</div>
              <div className="portal-option__body">
                <h3>User Login</h3>
                <p>Access your donations, requests, conversations, saved items, and account profile.</p>
                <ul>
                  <li>My donations</li>
                  <li>My requests</li>
                  <li>Messages &amp; saved items</li>
                </ul>
              </div>
              <span className="portal-option__cta">Continue as user</span>
            </a>
            <a className="portal-option portal-option--admin" href="/admin_login.html">
              <div className="portal-option__badge">Restricted Access</div>
              <div className="portal-option__icon">🛡️</div>
              <div className="portal-option__body">
                <h3>Admin Login</h3>
                <p>Open the command center to moderate listings, manage users, and oversee activity.</p>
                <ul>
                  <li>User controls</li>
                  <li>Listing moderation</li>
                  <li>Admin tools &amp; review</li>
                </ul>
              </div>
              <span className="portal-option__cta">Continue as admin</span>
            </a>
          </div>
          <div className="portal-footer-links">
            <a className="text-link" href="/signup.html">Need an account? Create one</a>
          </div>
        </section>
      </main>
    </div>
  );
}
