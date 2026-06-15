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
          <h1>Continue to your Free Sewaa account.</h1>
          <p className="auth-copy">
            Everyone starts from the same sign-in flow. Regular members continue to their user dashboard,
            while the verified super admin is sent directly to the admin command center.
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
                <strong>Role-based routing</strong>
                <p>The app sends each signed-in account to the right dashboard automatically.</p>
              </div>
            </article>
            <article className="auth-feature">
              <div className="auth-feature__dot" />
              <div>
                <strong>Protected admin tools</strong>
                <p>Admin pages still require a verified super admin session before they load.</p>
              </div>
            </article>
          </div>
        </section>
        <section className="auth-card portal-card">
          <div className="auth-card__top portal-card__top">
            <p className="eyebrow">WELCOME</p>
            <h2>Sign in once</h2>
            <p className="auth-card__text">Use the normal login. Super admin accounts are routed to admin tools automatically.</p>
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
            <div className="portal-option portal-option--admin" aria-label="Restricted admin access" hidden>
              <div className="portal-option__badge">Restricted Access</div>
              <div className="portal-option__icon">🛡️</div>
              <div className="portal-option__body">
                <h3>Admin Access Restricted</h3>
                <p>Administrative tools are available only to authorized staff with a verified super admin session.</p>
                <ul>
                  <li>User controls</li>
                  <li>Listing moderation</li>
                  <li>Admin tools &amp; review</li>
                </ul>
              </div>
              <span className="portal-option__cta">Authorized staff only</span>
            </div>
          </div>
          <div className="portal-footer-links">
            <a className="text-link" href="/signup.html">Need an account? Create one</a>
          </div>
        </section>
      </main>
    </div>
  );
}
