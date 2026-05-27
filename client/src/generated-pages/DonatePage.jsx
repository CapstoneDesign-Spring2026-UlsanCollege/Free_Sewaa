export default function DonatePage() {
  return (
    <div>
      <div className="grain" />
      <canvas id="particles" className="particles" />
      <header className="site-header" id="siteHeader">
        <div className="site-header__inner">
          <a href="app.html" className="brand">Free Sewaa</a>
          <nav className="main-nav" aria-label="Primary">
            <a href="app.html" className="nav-link">Home</a>
            <a href="about.html" className="nav-link">About Us</a>
            <a href="donate.html" className="nav-link active">Donate</a>
            <a href="browse.html" className="nav-link">Browse</a>
            <a href="events.html" className="nav-link">Events</a>
            <a href="donate-us.html" className="nav-link">Donate Us</a>
          </nav>
          <div className="header-actions">
            <a href="notifications.html" className="icon-link"><span className="icon-badge" /><span>Notifications</span></a>
            <a href="messages.html" className="icon-link"><span className="icon-dot" /><span>Messages</span></a>
            <div className="settings-dropdown">
              <button className="icon-link settings-trigger" type="button" aria-expanded="false">
                <span className="icon-gear">⚙</span><span>Settings</span>
              </button>
              <div className="settings-menu">
                <a href="my-posts.html">My Posts</a>
                <a href="orders.html">Track Your Order</a>
                <a href="premium.html">Premium Plans</a>
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
        <section className="page-hero generic-hero donate-hero app-shell-hero">
          <div className="page-hero__bg donate-hero-bg" />
          <div className="hero-overlay" />
          <div className="page-hero__content wrap">
            <div>
              <p className="eyebrow reveal">CREATE A LISTING</p>
              <h1 className="page-title reveal reveal-1">Donate something<br />that still matters.</h1>
              <p className="page-text reveal reveal-2">Create a clear donation post with photos, honest condition notes, pickup timing, and location details so receivers can request with confidence.</p>
            </div>
            <div className="page-badge reveal reveal-3">
              <span className="mini-label">DONATION FLOW</span>
              <strong id="donateStepLabel">Step 1 of 4</strong>
              <p id="donateStepText">Start with strong images and a clear title so people can trust the listing quickly.</p>
            </div>
          </div>
        </section>
        <section className="form-layout wrap donate-app-layout">
          <div className="panel panel-form reveal-card panel-form--wide">
            <div className="panel-head panel-head--between">
              <div>
                <p className="eyebrow">DONATION DETAILS</p>
                <h2 className="section-title small">Post an item</h2>
              </div>
              <div className="stepper" id="donateStepper">
                <span className="step-dot is-active">1</span>
                <span className="step-dot">2</span>
                <span className="step-dot">3</span>
                <span className="step-dot">4</span>
              </div>
            </div>
            <form className="premium-form" id="donateForm">
              <section className="donate-step is-active" data-step={1}>
                <div className="upload-box upload-box--interactive" id="uploadTrigger">
                  <input type="file" id="imageUpload" accept="image/*" multiple hidden />
                  <div className="upload-box__icon">+</div>
                  <strong>Add item photos</strong>
                  <p>Upload up to 5 images. The first image becomes the main listing photo.</p>
                </div>
                <div className="upload-preview-grid" id="uploadPreviewGrid" />
                <div className="field-grid two compact-grid">
                  <label className="field"><span>Item name</span><input type="text" id="itemTitle" placeholder="e.g. Winter jacket" required /></label>
                  <label className="field"><span>Category</span><select id="itemCategory"><option>Clothing</option><option>Books</option><option>Furniture</option><option>Electronics</option><option>Food</option><option>Essentials</option><option>Home</option></select></label>
                </div>
              </section>
              <section className="donate-step" data-step={2}>
                <label className="field"><span>Description</span><textarea id="itemDescription" rows={6} maxLength={240} placeholder="Describe the item, size, condition, pickup timing, and anything important for the receiver." defaultValue={""} /></label>
                <div className="input-meta-row">
                  <span className="helper-text">Write clearly so the right person requests it faster.</span>
                  <strong id="descriptionCount">0 / 240</strong>
                </div>
                <div className="field-grid three compact-grid">
                  <label className="field"><span>Condition</span><select id="itemCondition"><option>Like new</option><option>Good</option><option>Used</option><option>New</option></select></label>
                  <label className="field"><span>Pickup type</span><select id="itemPickup"><option>Pickup only</option><option>Meet halfway</option><option>Flexible</option></select></label>
                  <label className="field"><span>Best pickup time</span><input type="text" id="itemPickupWindow" placeholder="e.g. Weekdays after 6 PM" /></label>
                </div>
              </section>
              <section className="donate-step" data-step={3}>
                <div className="field-grid two compact-grid">
                  <label className="field"><span>City / area</span><input type="text" id="itemLocation" placeholder="e.g. Ulsan, Samsan-dong" /></label>
                  <label className="field"><span>Distance radius</span><select id="itemDistance"><option value={5}>Within 5 km</option><option value={10}>Within 10 km</option><option value={15}>Within 15 km</option><option value={30}>Within 30 km</option></select></label>
                </div>
                <label className="field"><span>Pickup notes</span><textarea id="itemNotes" rows={4} placeholder="Add landmark details, delivery notes, or timing guidance for the receiver." defaultValue={""} /></label>
                <label className="field checkbox-field"><input type="checkbox" id="itemUrgent" /> <span>Mark this listing as urgent support needed</span></label>
              </section>
              <section className="donate-step" data-step={4}>
                <div className="publish-review" id="publishReview" />
                <div className="success-state hidden" id="publishSuccess">
                  <p className="eyebrow">LISTING CREATED</p>
                  <h3>Your item is now live in the app.</h3>
                  <p>The new listing has been added to Browse, saved in your local app data, and is ready for requests.</p>
                  <div className="form-actions stack-mobile">
                    <a className="btn btn-hero" href="browse.html">View in Browse</a>
                    <button className="btn btn-soft" type="button" id="createAnotherListing">Create another listing</button>
                  </div>
                </div>
              </section>
              <div className="form-status" id="donateStatus" />
              <div className="form-actions step-actions stack-mobile">
                <button type="button" className="btn btn-soft" id="saveDraftButton">Save Draft</button>
                <div className="step-actions__right">
                  <button type="button" className="btn btn-soft" id="prevStepButton">Back</button>
                  <button type="button" className="btn btn-hero" id="nextStepButton">Continue</button>
                </div>
              </div>
            </form>
          </div>
          <aside className="panel panel-side reveal-card donate-sidebar">
            <div className="side-card">
              <span className="mini-label">LISTING HEALTH</span>
              <strong id="qualityScore">Listing score: 35%</strong>
              <p id="qualityText">Add a title, description, and location to make your post feel complete and trustworthy.</p>
            </div>
            <div className="side-card">
              <span className="mini-label">BEST PRACTICE</span>
              <strong>Describe honestly</strong>
              <p>Clear condition notes reduce confusion and lead to smoother pickup conversations.</p>
            </div>
            <div className="side-preview side-preview--app">
              <div className="side-preview__media" id="listingPreviewImage" />
              <div className="side-preview__body">
                <span className="mini-label">LIVE PREVIEW</span>
                <strong id="listingPreviewTitle">Your listing preview</strong>
                <p id="listingPreviewMeta">Add details and watch this card update live.</p>
              </div>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}
