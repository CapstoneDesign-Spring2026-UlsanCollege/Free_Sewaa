(function () {
  const state = {
    dashboard: null,
    queueFilter: 'all',
    userSearch: '',
    userStatus: 'all',
    listingSearch: '',
    listingStatus: 'all'
  };

  function escapeHtml(value) {
    return String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function getApiBaseUrl() {
    let stored = '';
    try {
      stored = localStorage.getItem('freesewaa-api-base-url') || '';
    } catch (error) {}

    const configured = window.FREESEWAA_API_BASE_URL || window.FREESEWAA_API_ORIGIN || stored || '';
    const normalized = String(configured || window.location.origin).replace(/\/+$/, '');

    if (configured) {
      try {
        localStorage.setItem('freesewaa-api-base-url', normalized);
      } catch (error) {}
    }

    return normalized;
  }

  function apiUrl(path) {
    if (/^https?:\/\//i.test(path)) return path;
    return new URL(String(path), getApiBaseUrl()).toString();
  }

  function getCurrentUserId() {
    return localStorage.getItem('freesewaa-current-user-id') || '';
  }

  function getCurrentUser() {
    try {
      return JSON.parse(localStorage.getItem('freesewaa-user') || '{}');
    } catch (error) {
      return {};
    }
  }

  function isSuperAdmin() {
    return getCurrentUser().role === 'superadmin';
  }

  function getAdminHeaders(extra = {}) {
    const userId = getCurrentUserId();
    const token = localStorage.getItem('freesewaa-token') || '';
    return {
      ...extra,
      ...(userId ? { 'x-user-id': userId } : {}),
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    };
  }

  function redirectToAdminLogin() {
    localStorage.removeItem('freesewaa-auth');
    localStorage.removeItem('freesewaa-current-user-id');
    localStorage.removeItem('freesewaa-token');
    localStorage.removeItem('freesewaa-user');
    window.location.href = '/admin_login.html';
  }

  function toast(message, tone = 'success') {
    if (typeof window.showAdminToast === 'function') {
      window.showAdminToast(message);
      return;
    }

    const el = document.getElementById('adminToast');
    if (!el) return;
    el.textContent = message;
    el.className = `admin-toast is-visible tone-${tone}`;
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => el.classList.remove('is-visible'), 2400);
  }

  function setText(selector, value) {
    document.querySelectorAll(selector).forEach(el => {
      el.textContent = value;
    });
  }

  function formatDate(value) {
    const date = value ? new Date(value) : new Date();
    if (Number.isNaN(date.getTime())) return 'Just now';
    return date.toLocaleString(undefined, {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  function timeAgo(value) {
    const date = value ? new Date(value) : new Date();
    if (Number.isNaN(date.getTime())) return 'recently';
    const diffMin = Math.max(1, Math.floor((Date.now() - date.getTime()) / 60000));
    if (diffMin < 60) return `${diffMin}m ago`;
    const diffHr = Math.floor(diffMin / 60);
    if (diffHr < 24) return `${diffHr}h ago`;
    return `${Math.floor(diffHr / 24)}d ago`;
  }

  async function requestJson(path, options = {}) {
    const response = await fetch(apiUrl(path), {
      ...options,
      headers: getAdminHeaders(options.headers || {})
    });
    const text = await response.text();
    let data = {};
    try {
      data = text ? JSON.parse(text) : {};
    } catch (error) {
      throw new Error('The server returned an unexpected response.');
    }
    if (!response.ok) {
      const error = new Error(data.error || 'Admin request failed.');
      error.status = response.status;
      throw error;
    }
    return data;
  }

  async function loadDashboard() {
    state.dashboard = await requestJson('/api/admin/overview');
    renderAll();
  }

  async function postAction(path, body) {
    const data = await requestJson(path, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    state.dashboard = data.payload || data;
    renderAll();
  }

  function emptyCard(message) {
    return `<article class="admin-v2-itemcard"><p>${escapeHtml(message)}</p></article>`;
  }

  function renderSummary() {
    const summary = state.dashboard?.summary || {};
    const health = Number(summary.healthScore || 0);
    const hidden = (state.dashboard?.listings || []).filter(item => item.status === 'hidden').length;

    setText('[data-admin-users]', summary.users || 0);
    setText('[data-admin-admins]', summary.admins || 0);
    setText('[data-admin-blocked-users]', summary.blockedUsers || 0);
    setText('[data-admin-listings]', summary.listings || 0);
    setText('[data-admin-active]', summary.activeListings || 0);
    setText('[data-admin-hidden]', hidden);
    setText('[data-admin-flagged]', summary.flaggedListings || 0);
    setText('[data-admin-open-report-count]', summary.openReports || 0);
    setText('[data-admin-featured]', summary.featuredListings || 0);
    setText('[data-admin-unread]', summary.unreadNotifications || 0);
    setText('[data-admin-suggestions]', summary.suggestions || 0);
    setText('[data-admin-conversations]', summary.conversations || 0);
    setText('[data-admin-open-risks]', summary.openRisks || 0);
    setText('[data-admin-health-score]', `${health}/100`);
    setText('[data-admin-health-score-big]', `${health}`);
    setText('[data-admin-last-updated]', formatDate(summary.lastUpdatedAt));

    setText('[data-admin-health-text]', health >= 85 ? 'Platform is stable and low risk.' : health >= 60 ? 'Some items need admin review.' : 'Moderation needs attention.');
    setText('[data-admin-security-status]', summary.blockedUsers ? 'Review' : 'Good');
    setText('[data-admin-accessibility-status]', 'Good');
    setText('[data-admin-security-title]', summary.blockedUsers ? 'Blocked accounts present' : 'No blocked accounts');
    setText('[data-admin-security-text]', summary.blockedUsers ? `${summary.blockedUsers} blocked account(s) should be reviewed.` : 'No blocked users are currently active.');
    setText('[data-admin-accessibility-title]', 'Dashboard connected');
    setText('[data-admin-accessibility-text]', 'Admin controls, lists, filters, and moderation actions are available.');

    const bar = document.querySelector('[data-admin-health-bar]');
    if (bar) bar.style.width = `${Math.max(5, Math.min(100, health))}%`;
  }

  function userCard(user) {
    const name = user.name || [user.firstName, user.lastName].filter(Boolean).join(' ') || 'Member';
    const tags = [
      user.role || 'user',
      user.isBlocked ? 'blocked' : 'active',
      `${user.listingCount || 0} listings`
    ];
    const superAdmin = isSuperAdmin();
    const userActionButtons = superAdmin ? `
          <button class="admin-btn admin-btn--soft" type="button" data-user-action="${user.isBlocked ? 'unblock' : 'block'}" data-user-id="${escapeHtml(user.id)}">${user.isBlocked ? 'Unblock' : 'Block'}</button>
          ${user.role === 'superadmin'
            ? '<button class="admin-btn admin-btn--soft" type="button" disabled>Super Admin</button>'
            : `<button class="admin-btn admin-btn--soft" type="button" data-user-action="${user.role === 'admin' ? 'remove-admin' : 'make-admin'}" data-user-id="${escapeHtml(user.id)}">${user.role === 'admin' ? 'Remove Admin' : 'Make Admin'}</button>`}
          <button class="admin-btn admin-btn--danger" type="button" data-user-action="delete-user" data-user-id="${escapeHtml(user.id)}">Delete</button>
    ` : '<p class="muted-copy">Only a super admin can block users, delete users, or change roles.</p>';

    return `
      <article class="admin-v2-itemcard">
        <div class="admin-v2-itemcard__top">
          <div>
            <strong>${escapeHtml(name)}</strong>
            <p>${escapeHtml(user.email || 'No email')} · ${escapeHtml(user.phone || 'No phone')}</p>
            <p>${escapeHtml([user.city, user.region].filter(Boolean).join(', ') || 'No location saved')}</p>
          </div>
          <div class="admin-v2-tags">${tags.map(tag => `<span class="admin-tag">${escapeHtml(tag)}</span>`).join('')}</div>
        </div>
        <div class="admin-row-actions">
          ${userActionButtons}
        </div>
      </article>`;
  }

  function renderUsers() {
    const target = document.getElementById('adminUsersList');
    if (!target) return;

    const query = state.userSearch.toLowerCase();
    const users = (state.dashboard?.users || []).filter(user => {
      const text = `${user.name || ''} ${user.firstName || ''} ${user.lastName || ''} ${user.email || ''} ${user.phone || ''}`.toLowerCase();
      const statusOk =
        state.userStatus === 'all' ||
        (state.userStatus === 'active' && !user.isBlocked) ||
        (state.userStatus === 'blocked' && user.isBlocked) ||
        (state.userStatus === 'admins' && (user.role === 'admin' || user.role === 'superadmin'));
      return statusOk && (!query || text.includes(query));
    });

    target.innerHTML = users.length ? users.map(userCard).join('') : emptyCard('No users match this filter.');
  }

  function listingTags(listing) {
    return [
      listing.status || 'active',
      listing.featured ? 'featured' : '',
      listing.reportCount ? `${listing.reportCount} report${listing.reportCount === 1 ? '' : 's'}` : '',
      ...(listing.flags || [])
    ].filter(Boolean);
  }

  function formatReportReason(reason = '') {
    return String(reason || 'other')
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  function reportDetails(listing) {
    const reports = Array.isArray(listing.reports) ? listing.reports : [];
    if (!reports.length) return '';

    return `
      <div class="admin-report-list">
        ${reports.map(report => `
          <section class="admin-report-item">
            <div>
              <strong>${escapeHtml(formatReportReason(report.reason))}</strong>
              <p>${escapeHtml(report.details || 'No additional details provided.')}</p>
              <span>Reported by ${escapeHtml(report.reporterName || 'Community member')} · ${escapeHtml(timeAgo(report.createdAt))}</span>
            </div>
            <div class="admin-row-actions">
              <button class="admin-btn admin-btn--soft" type="button" data-report-action="dismiss" data-report-id="${escapeHtml(report.id)}">Dismiss</button>
              <button class="admin-btn admin-btn--soft" type="button" data-report-action="hide" data-report-id="${escapeHtml(report.id)}">Hide listing</button>
              <button class="admin-btn admin-btn--danger" type="button" data-report-action="delete" data-report-id="${escapeHtml(report.id)}">Delete listing</button>
            </div>
          </section>
        `).join('')}
      </div>
    `;
  }

  function listingCard(listing, priority = false) {
    const tags = listingTags(listing);
    return `
      <article class="admin-v2-itemcard ${priority ? 'admin-v2-itemcard--priority' : ''}">
        <div class="admin-v2-itemcard__top">
          <div>
            <strong>${escapeHtml(listing.title || 'Untitled listing')}</strong>
            <p>${escapeHtml(listing.ownerName || 'Unknown owner')} · ${escapeHtml(listing.category || 'Uncategorized')} · ${escapeHtml(listing.location || 'No location')}</p>
            <p>${escapeHtml(listing.description || 'No description available.')}</p>
          </div>
          <div class="admin-v2-tags">${tags.map(tag => `<span class="admin-tag">${escapeHtml(tag)}</span>`).join('')}</div>
        </div>
        ${reportDetails(listing)}
        <div class="admin-row-actions">
          <button class="admin-btn admin-btn--soft" type="button" data-listing-action="${listing.featured ? 'unfeature' : 'feature'}" data-listing-id="${escapeHtml(listing.id)}">${listing.featured ? 'Unfeature' : 'Feature'}</button>
          <button class="admin-btn admin-btn--soft" type="button" data-listing-action="review" data-listing-id="${escapeHtml(listing.id)}">Mark Reviewed</button>
          <button class="admin-btn admin-btn--soft" type="button" data-listing-action="${listing.status === 'hidden' ? 'restore' : 'hide'}" data-listing-id="${escapeHtml(listing.id)}">${listing.status === 'hidden' ? 'Restore' : 'Hide'}</button>
          <button class="admin-btn admin-btn--danger" type="button" data-listing-action="delete" data-listing-id="${escapeHtml(listing.id)}">Delete</button>
        </div>
      </article>`;
  }

  function renderListings() {
    const target = document.getElementById('adminListingsList');
    if (!target) return;

    const query = state.listingSearch.toLowerCase();
    const listings = (state.dashboard?.listings || []).filter(listing => {
      const text = `${listing.title || ''} ${listing.ownerName || ''} ${listing.category || ''} ${listing.location || ''}`.toLowerCase();
      const statusOk =
        state.listingStatus === 'all' ||
        (state.listingStatus === 'flagged' && (listing.reportCount || (listing.flags || []).length || !listing.reviewed)) ||
        (state.listingStatus === 'hidden' && listing.status === 'hidden') ||
        (state.listingStatus === 'featured' && listing.featured) ||
        (state.listingStatus === 'active' && listing.status === 'active');
      return statusOk && (!query || text.includes(query));
    });

    target.innerHTML = listings.length ? listings.map(item => listingCard(item)).join('') : emptyCard('No listings match this filter.');
  }

  function renderQueue() {
    const target = document.getElementById('adminModerationQueue');
    if (!target) return;

    const items = (state.dashboard?.moderationQueue || []).filter(item => {
      if (state.queueFilter === 'reported') return Number(item.reportCount || 0) > 0;
      if (state.queueFilter === 'urgent') return item.urgent || item.status === 'hidden' || !item.reviewed;
      if (state.queueFilter === 'reviewed') return item.reviewed;
      return true;
    });

    target.innerHTML = items.length ? items.map(item => listingCard(item, true)).join('') : emptyCard('No moderation items in this queue.');
  }

  function renderActivity() {
    const target = document.getElementById('adminActivityFeed');
    if (!target) return;

    const items = state.dashboard?.activity || [];
    target.innerHTML = items.length
      ? items.map(item => `
          <article class="admin-v2-activityitem">
            <strong>${escapeHtml(item.title || 'Activity')}</strong>
            <p>${escapeHtml(item.detail || 'No details available.')}</p>
            <span>${escapeHtml(timeAgo(item.createdAt))}</span>
          </article>`).join('')
      : emptyCard('No recent platform activity yet.');
  }

  function renderSuggestions() {
    const target = document.getElementById('adminSuggestionsFeed');
    if (!target) return;

    const suggestions = state.dashboard?.suggestions || [];
    target.innerHTML = suggestions.length
      ? suggestions.map(item => `
          <article class="admin-v2-activityitem">
            <strong>${escapeHtml(item.name || 'Free Sewaa user')}</strong>
            <p>${escapeHtml(item.message || 'No suggestion text available.')}</p>
            <span>${escapeHtml(item.email || 'No email')} 쨌 ${escapeHtml(timeAgo(item.createdAt))}</span>
          </article>`).join('')
      : emptyCard('No dashboard suggestions yet.');
  }

  function renderAll() {
    renderSummary();
    renderQueue();
    renderUsers();
    renderListings();
    renderSuggestions();
    renderActivity();
  }

  function bindFilters() {
    document.querySelectorAll('[data-queue-filter]').forEach(button => {
      button.addEventListener('click', () => {
        state.queueFilter = button.dataset.queueFilter || 'all';
        document.querySelectorAll('[data-queue-filter]').forEach(item => item.classList.toggle('is-active', item === button));
        renderQueue();
      });
    });

    document.getElementById('adminUserSearch')?.addEventListener('input', event => {
      state.userSearch = event.target.value || '';
      renderUsers();
    });

    document.getElementById('adminUserStatusFilter')?.addEventListener('change', event => {
      state.userStatus = event.target.value || 'all';
      renderUsers();
    });

    document.getElementById('adminListingSearch')?.addEventListener('input', event => {
      state.listingSearch = event.target.value || '';
      renderListings();
    });

    document.getElementById('adminListingStatusFilter')?.addEventListener('change', event => {
      state.listingStatus = event.target.value || 'all';
      renderListings();
    });
  }

  function bindNavigation() {
    document.querySelectorAll('[data-admin-nav]').forEach(button => {
      button.addEventListener('click', () => {
        const section = document.getElementById(`section-${button.dataset.adminNav}`);
        if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        document.querySelectorAll('[data-admin-nav]').forEach(item => item.classList.toggle('is-active', item === button));
      });
    });
  }

  function bindActions() {
    document.addEventListener('click', async event => {
      const userButton = event.target.closest('[data-user-action]');
      const listingButton = event.target.closest('[data-listing-action]');
      const reportButton = event.target.closest('[data-report-action]');
      if (!userButton && !listingButton && !reportButton) return;

      const button = userButton || listingButton || reportButton;
      const previousText = button.textContent;
      button.disabled = true;
      button.textContent = 'Working...';

      try {
        if (userButton) {
          const action = userButton.dataset.userAction;
          if (action === 'delete-user' && !window.confirm('Delete this user and related records?')) return;
          await postAction('/api/admin/user-action', {
            targetUserId: userButton.dataset.userId,
            action
          });
          toast('User updated.');
        }

        if (listingButton) {
          const action = listingButton.dataset.listingAction;
          if (action === 'delete' && !window.confirm('Delete this listing and related records?')) return;
          await postAction('/api/admin/listing-action', {
            listingId: listingButton.dataset.listingId,
            action
          });
          toast('Listing updated.');
        }

        if (reportButton) {
          const action = reportButton.dataset.reportAction;
          if (action === 'delete' && !window.confirm('Delete this listing and retain the report as audit evidence?')) return;
          await postAction('/api/admin/report-action', {
            reportId: reportButton.dataset.reportId,
            action
          });
          toast(action === 'dismiss' ? 'Report dismissed.' : 'Report resolved and listing updated.');
        }
      } catch (error) {
        console.error(error);
        toast(error.message || 'Admin action failed.', 'error');
      } finally {
        button.disabled = false;
        button.textContent = previousText;
      }
    });
  }

  async function boot() {
    bindNavigation();
    bindFilters();
    bindActions();

    try {
      if (window.FREESEWAA_VERIFY_ADMIN && typeof window.FREESEWAA_VERIFY_ADMIN.then === 'function') {
        await window.FREESEWAA_VERIFY_ADMIN;
      }
      await loadDashboard();
    } catch (error) {
      console.error(error);
      toast(error.message || 'Unable to load admin dashboard.', 'error');
      if (error.status === 401 || error.status === 403 || /admin access|authentication required|session/i.test(error.message || '')) {
        setTimeout(() => {
          redirectToAdminLogin();
        }, 900);
      }
    }
  }

  document.addEventListener('DOMContentLoaded', boot);
})();
