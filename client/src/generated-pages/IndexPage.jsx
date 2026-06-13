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
          <svg className="ai-feature__logo" viewBox="0 0 420 480" role="img" aria-label="Sewaa AI logo">
            <rect width="420" height="480" fill="#f4e8c7" />
            <g transform="translate(84 54)">
              <path fill="#965715" d="M116 26c-31 20-52 48-65 81-10 24-24 45-43 61 12 9 24 16 37 21-2 43-2 82-31 116 28 2 52-7 67-27 15-19 21-45 18-76-2-20 0-40 6-61 11-41 28-80 51-115-13 1-27 4-40 10z" />
              <path fill="#8d4a16" d="M43 157c10 0 18 3 25 9-12 2-22 1-31-3 2-3 4-5 6-6z" />
              <path fill="#6aa49d" d="M181 76c37 61 46 118 29 171-13 39-35 66-67 80V184c20-26 33-61 38-108z" />
              <path fill="#2f6868" d="M220 118c22 65 8 121-42 168 1-42 5-76 14-102 7-21 16-43 28-66z" />
              <path fill="#b7671e" d="M91 333c24-62 54-108 91-137 37-28 61-63 72-104 1 42-13 78-41 108-17 19-38 34-61 47-25 15-45 43-61 86z" />
              <path fill="#b7671e" d="M109 139c24 41 30 92 17 153-3 13-7 26-11 39 4-72-10-132-41-178l35-14z" />
              <path fill="#2f6868" d="M120 50c28 35 34 72 18 111-29-31-35-68-18-111z" />
              <path fill="#3e7772" d="M93 131c34 17 47 45 39 84-34-18-47-46-39-84z" />
              <path fill="#2f6868" d="M145 147c37-3 61-23 72-60 13 39 2 72-33 99-17-12-30-25-39-39z" />
              <path fill="#3e7772" d="M113 210c33 12 48 36 44 72-31-9-46-33-44-72z" />
              <path fill="none" stroke="#f2dfb2" strokeLinecap="round" strokeWidth="7" d="M122 65c4 40 9 78 15 114M100 142c12 15 24 27 36 37M145 162c18-22 33-43 45-63M116 219c13 14 27 25 42 32" />
            </g>
          </svg>
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
