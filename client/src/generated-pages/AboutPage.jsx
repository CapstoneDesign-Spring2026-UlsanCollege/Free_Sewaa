export default function AboutPage() {
  return (
    <div>
      <div className="grain" />
      <canvas id="particles" className="particles" />
      <header className="site-header" id="siteHeader">
        <div className="site-header__inner">
          <a href="app.html" className="brand">Free Sewaa</a>
          <nav className="main-nav" aria-label="Primary">
            <a href="app.html" className="nav-link">Home</a>
            <a href="about.html" className="nav-link active">About Us</a>
            <a href="donate.html" className="nav-link">Donate</a>
            <a href="browse.html" className="nav-link">Browse</a>
            <a href="events.html" className="nav-link">Events</a>
            <a href="donate-us.html" className="nav-link">Donate Us</a>
          </nav>
          <div className="header-actions">
            <a href="notifications.html" className="icon-link "><span className="icon-badge" /><span>Notifications</span></a>
            <a href="messages.html" className="icon-link "><span className="icon-dot" /><span>Messages</span></a>
            <div className="settings-dropdown">
              <button className="icon-link settings-trigger " type="button" aria-expanded="false">
                <span className="icon-gear">⚙</span><span>Settings</span>
              </button>
              <div className="settings-menu">
                <a href="my-posts.html">My Posts</a>
                <a href="orders.html">Track Your Request</a>
                <a href="premium.html">Free Services</a>
                <a href="profile.html">Personal Information</a>
                <a href="profile.html#edit">Edit Profile</a>
                <a href="region.html">Change Region</a>
                <a href="saved.html">Saved Items</a>
                <a href="requests.html">My Requests</a>
                <button type="button" className="settings-button" data-theme-toggle="true">Toggle Dark Mode</button>
                <a href="logout.html">Logout</a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="page-hero generic-hero">
          <div className="page-hero__bg about-hero-bg" />
          <div className="hero-overlay" />
          <div className="page-hero__content wrap">
            <div>
              <p className="eyebrow reveal">ABOUT FREE SEWAA</p>
              <h1 className="page-title reveal reveal-1">Helping communities<br />share with dignity.</h1>
              <p className="page-text reveal reveal-2">Free Sewaa is built around one simple idea: useful items, local support, and volunteer time should reach people who need them in a respectful and organized way.</p>
            </div>
            <div className="page-badge reveal reveal-3">
              <span className="mini-label">OUR PURPOSE</span>
              <strong>Reduce waste. Increase care.</strong>
              <p>We help everyday generosity become practical support for families, students, and neighbors.</p>
            </div>
          </div>
        </section>
        <section className="content-grid wrap">
          <article className="panel reveal-card">
            <p className="eyebrow">WHO WE ARE</p>
            <h2 className="section-title small">A community-focused giving platform</h2>
            <p className="section-text">Free Sewaa helps people donate clothing, books, household essentials, school supplies, food support, and other useful items without making the process feel complicated or transactional.</p>
          </article>
          <article className="panel reveal-card">
            <p className="eyebrow">WHAT WE DO</p>
            <h2 className="section-title small">Connecting donors, receivers, and volunteers</h2>
            <p className="section-text">We bring donations, requests, pickup messages, free events, and volunteer opportunities into one place so people can help locally with more clarity and trust.</p>
          </article>
          <article className="panel reveal-card">
            <p className="eyebrow">WHY IT MATTERS</p>
            <h2 className="section-title small">Support should feel dignified</h2>
            <p className="section-text">Many families need clothing, food support, school materials, or simple essentials. Free Sewaa creates a calmer path where giving feels thoughtful and receiving feels respectful.</p>
          </article>
        </section>
        <section className="contact-band wrap reveal-block">
          <div className="contact-band__left">
            <p className="eyebrow">CONTACT</p>
            <h2 className="section-title small">Get in touch with Free Sewaa</h2>
            <p className="section-text">Questions, support, partnerships, or community collaboration can be shared through the project repository.</p>
          </div>
          <div className="contact-list">
            <div><strong>Support</strong><span>GitHub Issues</span></div>
            <div><strong>Project</strong><span>Capstone Design Spring 2026</span></div>
            <div><strong>Location</strong><span>Brampton, Ontario, Canada</span></div>
          </div>
        </section>
        <section className="reviews-section wrap reveal-block" id="communityReviews">
          <div className="reviews-section__head">
            <div>
              <p className="eyebrow">COMMUNITY REVIEWS</p>
              <h2 className="section-title small">What people think about Free Sewaa</h2>
              <p className="section-text">Share your experience, rate the platform, and help us understand what is working well for the community.</p>
            </div>
            <div className="review-score-card">
              <span>Average Rating</span>
              <strong id="reviewAverage">4.8</strong>
              <p id="reviewCount">Based on 3 community reviews</p>
            </div>
          </div>
          <div className="reviews-layout">
            <div className="reviews-feed" id="reviewsFeed" aria-live="polite" />
            <form className="panel review-form" id="aboutReviewForm">
              <div className="review-form__header">
                <div>
                  <p className="eyebrow">ADD YOUR REVIEW</p>
                  <h3>Rate your Free Sewaa experience</h3>
                </div>
                <p>Reviews help Free Sewaa improve trust, pickup coordination, events, and community support.</p>
              </div>
              <div className="review-form__grid">
                <label className="field">
                  <span>Your name</span>
                  <input id="reviewName" type="text" autoComplete="name" placeholder="Your name" required />
                </label>
                <label className="field">
                  <span>Email</span>
                  <input id="reviewEmail" type="email" autoComplete="email" placeholder="you@example.com" />
                </label>
                <label className="field">
                  <span>Rating</span>
                  <select id="reviewRating" required>
                    <option value={5}>5 stars - Excellent</option>
                    <option value={4}>4 stars - Very good</option>
                    <option value={3}>3 stars - Good</option>
                    <option value={2}>2 stars - Needs work</option>
                    <option value={1}>1 star - Poor</option>
                  </select>
                </label>
                <label className="field review-form__message">
                  <span>Review</span>
                  <textarea id="reviewMessage" rows={5} maxLength={700} placeholder="Tell us what you liked or what we can improve." required defaultValue={""} />
                </label>
              </div>
              <div className="form-actions">
                <button className="btn btn-hero" type="submit">Submit Review</button>
              </div>
              <p className="form-status" id="reviewStatus" aria-live="polite" />
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
