export default function IndexPage() {
  return (
    <div>
      <div className="site-noise" />
      <canvas id="particles" className="particles" />
      <div className="loader" id="loader">
        <div className="loader__inner">
          <div className="loader__brand">Free Sewaa</div>
          <div className="loader__line"><span /></div>
        </div>
      </div>
      <header className="header" id="header">
        <a href="index.html" className="brand">Free Sewaa</a>
        <nav className="header__actions" aria-label="Authentication navigation">
          <a href="events.html" className="btn btn--ghost">Events</a>
          <a href="/auth_choice.html" className="btn btn--ghost">Sign In</a>
          <a href="/signup.html" className="btn btn--solid">Sign Up</a>
        </nav>
      </header>
      <main>
        <section className="hero landing-hero" id="hero">
          <div className="hero__slides">
            <div className="hero__slide is-active" data-bg="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1920&q=80" />
            <div className="hero__slide" data-bg="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1920&q=80" />
            <div className="hero__slide" data-bg="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1920&q=80" />
          </div>
          <div className="hero__overlay" />
          <div className="hero__content wrap">
            <div className="hero__copy">
              <p className="eyebrow reveal">COMMUNITY GIVING • DIGNITY • CARE</p>
              <h1 className="hero__title reveal reveal--1">Give with heart.<br />Share with purpose.</h1>
              <p className="hero__text reveal reveal--2">
                Free Sewaa is a human-centered donation platform where extra belongings become real help.
                A warm Korea-based sharing platform with AI guidance, trusted admin safety, and community-first donation flows.
              </p>
              <div className="hero__cta reveal reveal--3">
                <a href="/signup.html" className="btn btn--hero">Start Sharing</a>
                <a href="#stories" className="text-link">Explore stories</a>
              </div>
            </div>
            <aside className="hero__glass reveal reveal--4">
              <div className="metric">
                <span className="metric__label">Items shared</span>
                <strong className="counter" data-target={8400}>0</strong>
              </div>
              <div className="metric">
                <span className="metric__label">Families supported</span>
                <strong className="counter" data-target={1250}>0</strong>
              </div>
              <div className="metric">
                <span className="metric__label">Communities reached</span>
                <strong className="counter" data-target={42}>0</strong>
              </div>
              <div className="hero__note">
                <span className="eyebrow">TRUSTED PLATFORM</span>
                <p>A warm Korea-based sharing platform connecting communities through dignified giving.</p>
              </div>
            </aside>
          </div>
          <div className="hero__controls wrap">
            <div className="hero__progress"><span id="progressBar" /></div>
            <div className="hero__dots" id="heroDots">
              <button className="dot is-active" aria-label="Hero slide 1" />
              <button className="dot" aria-label="Hero slide 2" />
              <button className="dot" aria-label="Hero slide 3" />
            </div>
          </div>
        </section>
        <section className="ai-feature wrap reveal-block">
          <img
            src="/assets/ai-logo.svg"
            alt="Sewaa AI logo"
            className="ai-feature__logo"
            width={112}
            height={128}
            loading="lazy"
            decoding="async"
          />
          <div className="intro__left">
            <p className="eyebrow">New service</p>
            <h2 className="section-title">Sewaa AI helps users donate smarter and safer.</h2>
          </div>
          <p className="section-copy">
            Users can write better donation posts, choose categories, translate pickup messages, and get safe-meetup guidance before requesting items.
          </p>
          <a href="app.html" className="btn btn--ghost">Explore Sewaa AI</a>
        </section>
        <section className="stories wrap" id="stories">
          <div className="stories__header reveal-block">
            <div>
              <p className="eyebrow">Stories</p>
              <h2 className="section-title">Built on moments of real care.</h2>
            </div>
            <p className="section-copy">Every feature was shaped by the people who use it: donors, recipients, and community leaders.</p>
          </div>
          <article className="story-card tilt reveal-card">
            <img loading="lazy" decoding="async" width={900} height={1200} src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=900&q=80" alt="Community resilience and support" className="story-card__image" />
            <div className="story-card__overlay" />
            <div className="story-card__content">
              <p className="story-card__tag">01 • RESILIENCE</p>
              <h3>Support should feel human, not transactional.</h3>
              <p>Free Sewaa turns donated items into thoughtful acts of care, presented with emotional depth and dignity.</p>
            </div>
          </article>
          <article className="story-card tilt reveal-card">
            <img loading="lazy" decoding="async" width={900} height={1200} src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=900&q=80" alt="Joyful human moment" className="story-card__image" />
            <div className="story-card__overlay" />
            <div className="story-card__content">
              <p className="story-card__tag">02 • JOY</p>
              <h3>Every moment of kindness deserves a premium experience.</h3>
              <p>Elegant typography, layered gradients, and soft motion make generosity feel warm, modern, and memorable.</p>
            </div>
          </article>
          <article className="story-card tilt reveal-card">
            <img loading="lazy" decoding="async" width={900} height={1200} src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80" alt="Giving and community support" className="story-card__image" />
            <div className="story-card__overlay" />
            <div className="story-card__content">
              <p className="story-card__tag">03 • GIVING</p>
              <h3>Giving should look intentional, trusted, and real.</h3>
              <p>From first impression to first donation, the experience is designed to feel clear, premium, and emotionally grounded.</p>
            </div>
          </article>
        </section>
        <footer className="footer wrap">
          <div>
            <a href="index.html" className="brand">Free Sewaa</a>
            <p>Community Giving Platform · Korea</p>
          </div>
          <nav aria-label="Footer authentication navigation">
            <a href="/auth_choice.html" className="btn btn--ghost">Sign In</a>
            <a href="/signup.html" className="btn btn--solid">Get Started</a>
          </nav>
        </footer>
      </main>
    </div>
  );
}
