export default function SigninPage() {
  return (
    <div>
      <div className="auth-bg" style={{ '--bg': "url('https://images.unsplash.com/photo-1593113598332-cd59a93f9724?auto=format&fit=crop&w=1920&q=80')" }} />
      <div className="auth-overlay" />
      <canvas className="particles" id="particles" />
      <header className="auth-header">
        <a href="index.html" className="brand">Free Sewaa</a>
        <nav className="auth-header__actions">
          <a href="/signin.html" className="mini-link is-active">Member Sign In</a>
          <a href="/signup.html" className="mini-link">Create Account</a>
        </nav>
      </header>
      <main className="auth-shell">
        <section className="auth-left">
          <p className="eyebrow">WELCOME BACK</p>
          <h1>Sign in to continue sharing care.</h1>
          <p className="auth-copy">Access your donations, requests, messages, and community activity in one calm, premium space.</p>
        </section>
        <section className="auth-card">
          <div className="auth-card__top">
            <p className="eyebrow">SIGN IN</p>
            <h2>Welcome back</h2>
            <p className="auth-card__text">Sign in with your email and password.</p>
          </div>
          <div className="auth-panel is-active" id="emailPanel">
            <form className="auth-form" data-auth-panel="email">
              <label className="field">
                <span>Email address</span>
                <input type="email" placeholder="you@yourmail.com" autoComplete="email" />
              </label>
              <label className="field">
                <span>Password</span>
                <input type="password" placeholder="Enter your password" />
              </label>
              <div className="form-row">
                <label className="checkbox"><input type="checkbox" /><span>Remember me</span></label>
                <a href="#" className="text-link">Forgot password?</a>
              </div>
              <button className="primary-btn" type="submit">Sign In</button>
            </form>
          </div>
          <p className="auth-footer">Don't have an account? <a href="/signup.html">Create one</a></p>
        </section>
      </main>
    </div>
  );
}
