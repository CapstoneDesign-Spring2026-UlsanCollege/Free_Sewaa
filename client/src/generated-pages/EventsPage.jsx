export default function EventsPage() {
  return (
    <div>
      <div className="grain" />
      <canvas id="particles" className="particles" />
      <header className="site-header" id="siteHeader">
        <div className="site-header__inner">
          <a href="index.html" className="brand">Free Sewaa</a>
          <nav className="main-nav" aria-label="Primary">
            <a href="index.html" className="nav-link">Home</a>
            <a href="events.html" className="nav-link active">Events</a>
            <a href="signup.html" data-member-href="donate.html" data-guest-href="signup.html" className="nav-link">Donate</a>
            <a href="signup.html" data-member-href="browse.html" data-guest-href="signup.html" className="nav-link">Browse</a>
          </nav>
          <div className="header-actions">
            <a href="#eventParticipation" className="icon-link"><span>Volunteer</span></a>
            <a href="signup.html" data-member-href="donate-us.html" data-guest-href="signup.html" className="icon-link active-link"><span>Support Us</span></a>
          </div>
        </div>
      </header>
      <main>
        <section className="page-hero events-hero">
          <div className="page-hero__bg events-hero-bg" />
          <div className="hero-overlay" />
          <div className="page-hero__content wrap">
            <div>
              <p className="eyebrow reveal">FREE COMMUNITY EVENTS</p>
              <h1 className="page-title reveal reveal-1">Help that happens<br />in real places.</h1>
              <p className="page-text reveal reveal-2">Find upcoming donation camps, free pickup days, supply drives, and volunteer meetups organized around the Free Sewaa community.</p>
            </div>
            <div className="page-badge reveal reveal-3">
              <span className="mini-label">NEXT EVENT</span>
              <strong>Food &amp; Essentials Donation Camp</strong>
              <p>May 24, 2026 - 10:00 AM to 3:00 PM - Community Hall</p>
            </div>
          </div>
        </section>
        <section className="section-intro wrap reveal-block">
          <div>
            <p className="eyebrow">WHAT WE POST HERE</p>
            <h2 className="section-title">Upcoming free events and donation camps.</h2>
          </div>
          <p className="section-text">This section can be updated with food drives, clothing donation camps, student supply days, blood donation camps, awareness programs, and volunteer planning meetups.</p>
        </section>
        <section className="event-board wrap">
          <article className="event-card event-card--featured reveal-card">
            <div className="event-card__date"><span>May</span><strong>24</strong></div>
            <div className="event-card__body">
              <p className="mini-label">DONATION CAMP</p>
              <h3>Food &amp; Essentials Donation Camp</h3>
              <p>Bring unopened pantry items, rice, blankets, hygiene kits, clean clothes, and daily essentials. Volunteers will sort items and prepare family support bundles.</p>
              <div className="event-meta">
                <span>10:00 AM - 3:00 PM</span>
                <span>Community Hall, Ulsan</span>
                <span>Free entry</span>
              </div>
              <a href="#eventParticipation" className="event-inline-link">Volunteer for this event</a>
            </div>
          </article>
          <article className="event-card reveal-card">
            <div className="event-card__date"><span>Jun</span><strong>02</strong></div>
            <div className="event-card__body">
              <p className="mini-label">STUDENT SUPPORT</p>
              <h3>Student Supplies Free Pickup</h3>
              <p>Families can collect notebooks, books, bags, stationery, and learning materials donated by the community.</p>
              <div className="event-meta">
                <span>1:00 PM - 5:00 PM</span>
                <span>Library Support Desk</span>
              </div>
              <a href="#eventParticipation" className="event-inline-link">Volunteer for this event</a>
            </div>
          </article>
          <article className="event-card reveal-card">
            <div className="event-card__date"><span>Jun</span><strong>15</strong></div>
            <div className="event-card__body">
              <p className="mini-label">VOLUNTEERS</p>
              <h3>Community Volunteer Meetup</h3>
              <p>Meet other volunteers, plan collection points, assign sorting teams, and prepare future outreach activities.</p>
              <div className="event-meta">
                <span>4:00 PM - 6:00 PM</span>
                <span>Free Sewaa Local Desk</span>
              </div>
              <a href="#eventParticipation" className="event-inline-link">Volunteer for this event</a>
            </div>
          </article>
        </section>
        <section className="event-participation wrap reveal-block" id="eventParticipation">
          <form className="panel event-form" id="eventVolunteerForm">
            <div className="panel-head">
              <p className="eyebrow">VOLUNTEER</p>
              <h2 className="section-title small">Tell us when you can help.</h2>
              <p className="section-text">Choose an event, share your available time, and tell us how you want to support the team.</p>
            </div>
            <div className="field-grid two">
              <label className="field">
                <span>Your name</span>
                <input type="text" id="volunteerName" name="name" placeholder="Your full name" required />
              </label>
              <label className="field">
                <span>Email or phone</span>
                <input type="text" id="volunteerContact" name="contact" placeholder="How we can contact you" required />
              </label>
            </div>
            <div className="field-grid two">
              <label className="field">
                <span>Event</span>
                <select id="volunteerEvent" name="event" required>
                  <option value>Choose an event</option>
                  <option>Food &amp; Essentials Donation Camp - May 24</option>
                  <option>Student Supplies Free Pickup - Jun 02</option>
                  <option>Community Volunteer Meetup - Jun 15</option>
                </select>
              </label>
              <label className="field">
                <span>Available time</span>
                <input type="text" id="volunteerTime" name="time" placeholder="Example: 10 AM to 1 PM" required />
              </label>
            </div>
            <label className="field">
              <span>How can you help?</span>
              <textarea id="volunteerHelp" name="help" rows={4} placeholder="Sorting items, pickup help, registration desk, food support, sharing the event..." required defaultValue={""} />
            </label>
            <div className="event-form__actions">
              <button type="submit" className="btn btn-hero">Submit Volunteer Request</button>
              <p className="form-status" id="volunteerStatus" aria-live="polite" />
            </div>
          </form>
          <form className="panel event-form" id="eventSuggestionForm">
            <div className="panel-head">
              <p className="eyebrow">ADD AN EVENT</p>
              <h2 className="section-title small">Suggest a free event or donation camp.</h2>
              <p className="section-text">Share the event idea and Free Sewaa can review it before listing it publicly.</p>
            </div>
            <div className="field-grid two">
              <label className="field">
                <span>Event name</span>
                <input type="text" id="newEventName" name="eventName" placeholder="Example: Winter Clothing Camp" required />
              </label>
              <label className="field">
                <span>Date and time</span>
                <input type="text" id="newEventDate" name="eventDate" placeholder="Example: July 5, 11 AM" required />
              </label>
            </div>
            <div className="field-grid two">
              <label className="field">
                <span>Location</span>
                <input type="text" id="newEventLocation" name="location" placeholder="Venue or area" required />
              </label>
              <label className="field">
                <span>Contact person</span>
                <input type="text" id="newEventContact" name="contact" placeholder="Name, email, or phone" required />
              </label>
            </div>
            <label className="field">
              <span>Event details</span>
              <textarea id="newEventDetails" name="details" rows={4} placeholder="What is needed, who it supports, and how volunteers can help." required defaultValue={""} />
            </label>
            <div className="event-form__actions">
              <button type="submit" className="btn btn-hero">Submit Event Idea</button>
              <p className="form-status" id="eventSuggestionStatus" aria-live="polite" />
            </div>
          </form>
        </section>
        <section className="event-support wrap reveal-block">
          <div>
            <p className="eyebrow">JOIN THE WORK</p>
            <h2 className="section-title small">Support an event in whatever way you can.</h2>
            <p className="section-text">You can volunteer during the camp, help sort donated items, bring food or essentials, sponsor supplies, share the event with your community, or suggest a new donation drive for Free Sewaa to list here.</p>
          </div>
          <div className="event-support__actions">
            <a href="#eventParticipation" className="btn btn-hero">Join as Volunteer</a>
            <a href="#eventParticipation" className="btn btn-soft">Add Event</a>
            <a href="signup.html" data-member-href="donate.html" data-guest-href="signup.html" className="btn btn-soft">Donate Items</a>
            <a href="signup.html" data-member-href="donate-us.html" data-guest-href="signup.html" className="btn btn-soft">Support Free Sewaa</a>
          </div>
        </section>
      </main>
    </div>
  );
}
