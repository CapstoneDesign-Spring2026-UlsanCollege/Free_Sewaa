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
          <div className="portal-brand-panel">
            <div className="portal-brand-panel__image">
              <img className="portal-brand-panel__logo" src="/assets/free-sewaa-logo.svg" alt="Free Sewaa" />
            </div>
            <h1>Welcome back</h1>
            <p>Share freely. Help locally. Give what you can, find what you need.</p>
            <div className="portal-brand-panel__dots" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </section>
        <section className="auth-card portal-card">
          <div className="portal-signin-head">
            <img src="/assets/free-sewaa-logo.svg" alt="Free Sewaa" />
            <p>Welcome back to Free Sewaa</p>
          </div>
          <div className="portal-grid">
            <a className="portal-option portal-option--user" href="/signin.html">
              <div className="portal-option__badge">For Members</div>
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
            <span>New to Free Sewaa?</span>
            <a className="text-link" href="/signup.html">Create Account</a>
          </div>
        </section>
      </main>
    </div>
  );
}
