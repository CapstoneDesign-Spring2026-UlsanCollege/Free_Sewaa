export default function AdminLoginPage() {
  return (
    <div>
      <div className="auth-bg" style={{ '--bg': "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1920&q=72')" }} />
      <div className="auth-overlay" />
      <canvas className="particles" id="particles" />
      <header className="auth-header">
        <a href="/index.html" className="brand">Free Sewaa</a>
        <nav className="auth-header__actions">
          <a href="/auth_choice.html" className="mini-link">Choose Portal</a>
          <a href="/signin.html" className="mini-link">User Sign In</a>
        </nav>
      </header>
      <main className="auth-shell">
        <section className="auth-left">
          <p className="eyebrow">ADMIN ACCESS</p>
          <h1>Sign in to manage Free Sewaa.</h1>
          <p className="auth-copy">This portal is only for the admin account. Use the user portal for normal member sign in.</p>
        </section>
        <section className="auth-card">
          <div className="auth-card__top">
            <p className="eyebrow">ADMIN LOGIN</p>
            <h2>Welcome admin</h2>
            <p className="auth-card__text">Use your administrator credentials to continue securely.</p>
          <p className="auth-card__text">Admin credentials are not displayed publicly. Only authorized project administrators should continue here.</p>
          </div>
          <form className="auth-form" id="adminLoginForm" noValidate>
            <label className="field">
              <span>Admin email address</span>
              <input id="adminEmail" type="email" placeholder="admin@example.com" autoComplete="username" required />
            </label>
            <label className="field">
              <span>Password</span>
              <input id="adminPassword" type="password" placeholder="Enter your password" autoComplete="current-password" required />
            </label>
            <button className="primary-btn" id="adminSubmit" type="submit">Sign In</button>
            <p className="auth-message" id="adminMessage" data-tone="default" style={{display: 'none'}} />
          </form>
          <p className="auth-footer">Back to <a href="/auth_choice.html">portal choice</a></p>
        </section>
      </main>
    </div>
  );
}
