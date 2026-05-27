export default function ProfilePage() {
  return (
    <div>
      <div className="grain" />
      <canvas id="particles" className="particles" />
      <header className="site-header" id="siteHeader">
        <div className="site-header__inner">
          <a href="app.html" className="brand">Free Sewaa</a>
          <nav className="main-nav" aria-label="Primary">
            <a href="app.html" className="nav-link">Home</a><a href="about.html" className="nav-link">About Us</a><a href="donate.html" className="nav-link">Donate</a><a href="browse.html" className="nav-link">Browse</a><a href="donate-us.html" className="nav-link">Donate Us</a>
          </nav>
          <div className="header-actions">
            <a href="notifications.html" className="icon-link"><span className="icon-badge" /><span>Notifications</span></a>
            <a href="messages.html" className="icon-link"><span className="icon-dot" /><span>Messages</span></a>
            <div className="settings-dropdown">
              <button className="icon-link settings-trigger active-link" type="button" aria-expanded="false"><span className="icon-gear">⚙</span><span>Settings</span></button>
              <div className="settings-menu">
                <a href="my-posts.html">My Posts</a><a href="orders.html">Track Your Order</a><a href="premium.html">Premium Plans</a><a href="profile.html">Personal Information</a><a href="profile.html#edit">Edit Profile</a><a href="region.html">Change Region</a><a href="saved.html">Saved Items</a><a href="requests.html">My Requests</a><button type="button" className="settings-button" data-theme-toggle="true">Toggle Dark Mode</button><a href="logout.html">Logout</a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="page-hero generic-hero">
          <div className="page-hero__bg profile-hero-bg" />
          <div className="hero-overlay" />
          <div className="page-hero__content wrap">
            <div>
              <p className="eyebrow reveal">ACCOUNT CONTROL</p>
              <h1 className="page-title reveal reveal-1">Your profile now powers<br />the rest of the app.</h1>
              <p className="page-text reveal reveal-2">Update your contact details, pickup availability, and notification preferences in one connected profile page.</p>
            </div>
          </div>
        </section>
        <section className="wrap profile-layout">
          <article className="panel profile-summary-card">
            <div id="profileSummary" />
            <div className="badge-stat-row" id="profileStats" />
          </article>
          <article className="panel" id="edit">
            <div className="panel-head--between">
              <div>
                <p className="eyebrow">EDIT PROFILE</p>
                <h2 className="section-title small">Keep your account trustworthy</h2>
              </div>
            </div>
            <form className="premium-form" id="profileForm">
              <div className="profile-photo-editor">
                <div className="profile-photo-preview" id="profilePhotoPreview" aria-hidden="true" />
                <div>
                  <p className="eyebrow">PROFILE PICTURE</p>
                  <p className="helper-text">Add a clear photo so donors, receivers, and volunteers can recognize your account more easily.</p>
                  <div className="profile-photo-actions">
                    <label className="btn btn-soft profile-photo-button">
                      Upload Photo
                      <input id="profilePhotoInput" type="file" accept="image/*" />
                    </label>
                    <button className="btn btn-soft" id="profilePhotoRemove" type="button">Remove</button>
                  </div>
                  <p className="helper-text" id="profilePhotoHelp">Use JPG, PNG, or WebP under 1 MB.</p>
                </div>
              </div>
              <div className="field-grid two">
                <label className="field"><span>First Name</span><input id="profileFirstName" type="text" /></label>
                <label className="field"><span>Last Name</span><input id="profileLastName" type="text" /></label>
              </div>
              <div className="field-grid two">
                <label className="field"><span>Email</span><input id="profileEmail" type="email" /></label>
                <label className="field"><span>Phone</span><input id="profilePhone" type="text" /></label>
              </div>
              <div className="field-grid two">
                <label className="field"><span>City</span><input id="profileCity" type="text" /></label>
                <label className="field"><span>Region</span><input id="profileRegion" type="text" /></label>
              </div>
              <label className="field"><span>Bio</span><textarea id="profileBio" rows={4} defaultValue={""} /></label>
              <label className="field"><span>Pickup Availability</span><input id="profilePickupAvailability" type="text" /></label>
              <div className="field-grid two">
                <label className="field"><span>Language</span><select id="profileLanguage"><option>English</option><option>Korean</option><option>Nepali</option></select></label>
                <div className="preference-stack">
                  <label className="checkbox-field"><input id="profileNotifications" type="checkbox" /><span>Push notifications</span></label>
                  <label className="checkbox-field"><input id="profilePickupReminders" type="checkbox" /><span>Pickup reminders</span></label>
                </div>
              </div>
              <div className="form-actions"><button className="btn btn-hero" type="submit">Save Changes</button></div>
              <p className="form-status" id="profileStatus" />
            </form>
          </article>
        </section>
      </main>
    </div>
  );
}
