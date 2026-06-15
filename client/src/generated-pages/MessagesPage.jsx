export default function MessagesPage() {
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
            <a href="donate.html" className="nav-link">Donate</a>
            <a href="browse.html" className="nav-link">Browse</a>
            <a href="donate-us.html" className="nav-link">Donate Us</a>
          </nav>
          <div className="header-actions">
            <a href="notifications.html" className="icon-link"><span className="icon-badge" /><span>Notifications</span></a>
            <a href="messages.html" className="icon-link active-link"><span className="icon-dot" /><span>Messages</span></a>
            <div className="settings-dropdown">
              <button className="icon-link settings-trigger" type="button" aria-expanded="false">
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
        <section className="page-hero generic-hero messages-hero app-shell-hero">
          <div className="page-hero__bg messages-hero-bg" />
          <div className="hero-overlay" />
          <div className="page-hero__content wrap">
            <div>
              <p className="eyebrow reveal">COMMUNICATION</p>
              <h1 className="page-title reveal reveal-1">Live product chat<br />for every request.</h1>
              <p className="page-text reveal reveal-2">Talk with donors or requesters in real time, coordinate pickup, and keep every product conversation connected to its listing.</p>
            </div>
            <div className="page-badge reveal reveal-3">
              <span className="mini-label">CONNECTED INBOX</span>
              <strong id="conversationCountLabel">0 active conversations</strong>
              <p id="conversationStatusText">Product requests show up here automatically.</p>
            </div>
          </div>
        </section>
        <section className="messages-layout wrap messages-layout--app">
          <aside className="panel chat-list-panel reveal-card">
            <div className="panel-head panel-head--between">
              <div>
                <p className="eyebrow">INBOX</p>
                <h2 className="section-title small">Recent conversations</h2>
              </div>
              <div className="sort-pill" id="unreadSummary">0 unread</div>
            </div>
            <label className="field field--compact">
              <span>Search conversations</span>
              <input type="text" id="conversationSearch" placeholder="Search by person or listing" />
            </label>
            <div className="chat-list" id="conversationList" />
          </aside>
          <section className="panel conversation-panel reveal-card">
            <div className="conversation-head" id="conversationHead" />
            <div className="message-thread" id="messageThread" />
            <div className="quick-actions" id="quickReplies">
              <button className="chip" type="button" data-quick-message="Yes, it is still available.">Still available</button>
              <button className="chip" type="button" data-quick-message="Pickup works for me today after 6 PM.">Pickup today</button>
              <button className="chip" type="button" data-quick-message="I will send you the exact pickup location shortly.">Send address</button>
            </div>
            <form className="message-compose message-compose--app" id="messageForm">
              <input type="text" id="messageInput" placeholder="Write a message..." />
              <button className="btn btn-soft" type="button" id="confirmPickupButton">Confirm pickup</button>
              <button className="btn btn-hero" type="submit">Send</button>
            </form>
          </section>
        </section>
      </main>
      <div className="modal-shell hidden" id="conversationListingModal" aria-hidden="true">
        <div className="modal-backdrop" data-close-modal />
        <div className="modal-card panel">
          <button className="modal-close" type="button" data-close-modal aria-label="Close listing">×</button>
          <div id="conversationListingContent" />
        </div>
      </div>
    </div>
  );
}
