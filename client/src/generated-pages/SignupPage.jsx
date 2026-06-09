export default function SignupPage() {
  return (
    <div>
      <div className="auth-bg" style={{ '--bg': "url('https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1920&q=80')" }} />
      <div className="auth-overlay" />
      <canvas className="particles" id="particles" />
      <header className="auth-header">
        <a href="index.html" className="brand">Free Sewaa</a>
        <nav className="auth-header__actions">
          <a href="/signin.html" className="mini-link">Sign In</a>
          <a href="/signup.html" className="mini-link is-active">Sign Up</a>
        </nav>
      </header>
      <main className="auth-shell">
        <section className="auth-left">
          <p className="eyebrow">JOIN THE COMMUNITY</p>
          <h1>Create your account and start giving meaningfully.</h1>
          <p className="auth-copy">Share useful items, support people with dignity, and connect through a platform designed to feel warm, safe, and modern.</p>
        </section>
        <section className="auth-card">
          <div className="auth-card__top">
            <p className="eyebrow">SIGN UP</p>
            <h2>Create account</h2>
            <p className="auth-card__text">Start with Google, email, or phone number.</p>
          </div>
          <div className="social-row">
            <button className="social-btn" type="button" data-auth-provider="google">
              <span className="social-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M21.8 12.2c0-.7-.1-1.3-.2-1.9H12v3.6h5.5c-.2 1.2-.9 2.3-2 3v2.5h3.3c1.9-1.8 3-4.4 3-7.2Z" /><path fill="currentColor" d="M12 22c2.7 0 5-.9 6.7-2.5l-3.3-2.5c-.9.6-2.1 1-3.4 1-2.6 0-4.8-1.8-5.6-4.1H3v2.6A10 10 0 0 0 12 22Z" /><path fill="currentColor" d="M6.4 13.9a6 6 0 0 1 0-3.8V7.5H3a10 10 0 0 0 0 9l3.4-2.6Z" /><path fill="currentColor" d="M12 5.9c1.4 0 2.7.5 3.7 1.4l2.8-2.8A9.9 9.9 0 0 0 3 7.5l3.4 2.6c.8-2.4 3-4.2 5.6-4.2Z" /></svg>
              </span>
              Continue with Google
            </button>
          </div>
          <div className="divider"><span>or</span></div>
          <div className="auth-toggle">
            <button className="toggle-btn is-active" data-panel-target="emailPanel">Email</button>
            <button className="toggle-btn" data-panel-target="phonePanel">Phone Number</button>
          </div>
          <div className="auth-panel is-active" id="emailPanel">
            <form className="auth-form" data-auth-panel="email">
              <div className="field-grid">
                <label className="field"><span>First name</span><input type="text" placeholder="First name" /></label>
                <label className="field"><span>Last name</span><input type="text" placeholder="Last name" /></label>
              </div>
              <label className="field"><span>Email address</span><input type="email" placeholder="you@example.com" autoComplete="email" /></label>
              <label className="field"><span>Password</span><input type="password" placeholder="Create password" minLength={8} maxLength={10} autoComplete="new-password" /></label>
              <label className="checkbox"><input type="checkbox" /><span>I agree to the Terms and Privacy Policy</span></label>
              <button className="primary-btn" type="submit">Create Account</button>
            </form>
          </div>
          <div className="auth-panel" id="phonePanel">
            <form className="auth-form" data-auth-panel="phone">
              <div className="field-grid">
                <label className="field"><span>First name</span><input type="text" placeholder="First name" /></label>
                <label className="field"><span>Last name</span><input type="text" placeholder="Last name" /></label>
              </div>
              <div className="field-grid">
                <label className="field">
                  <span>Country</span>
                  <select>
                    <option value={+82}>Korea +82</option>
                    <option value={+1}>US/Canada +1</option>
                    <option value={+44}>UK +44</option>
                    <option value={+91}>India +91</option>
                    <option value={+977}>Nepal +977</option>
                  </select>
                </label>
                <label className="field"><span>Phone number</span><input type="tel" placeholder="010-1234-5678" autoComplete="tel" /></label>
              </div>
              <button className="secondary-btn" type="button" data-phone-action="send-code">Send Verification Code</button>
              <label className="field"><span>Verification code</span><input type="text" placeholder="Enter 6-digit code" inputMode="numeric" /></label>
              <label className="checkbox"><input type="checkbox" /><span>I agree to the Terms and Privacy Policy</span></label>
              <div id="recaptcha-container" />
              <button className="primary-btn" type="submit">Create Account</button>
            </form>
          </div>
          <p className="auth-footer">Already have an account? <a href="/signin.html">Sign in</a></p>
        </section>
      </main>
    </div>
  );
}
