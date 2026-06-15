document.querySelectorAll('.auth-toggle').forEach(toggle => {
  const buttons = [...toggle.querySelectorAll('.toggle-btn')];
  const card = toggle.closest('.auth-card');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      const target = btn.dataset.panelTarget;
      card.querySelectorAll('.auth-panel').forEach(panel => {
        panel.classList.toggle('is-active', panel.id === target);
      });
    });
  });
});

const canvas = document.getElementById('particles');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let particles = [];
  let dpr = window.devicePixelRatio || 1;

  function resizeCanvas() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    dpr = window.devicePixelRatio || 1;

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    particles = Array.from(
      { length: Math.min(28, Math.max(12, Math.floor(w / 65))) },
      () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.8 + 0.5,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        a: Math.random() * 0.18 + 0.03
      })
    );
  }

  function renderParticles() {
    const w = window.innerWidth;
    const h = window.innerHeight;

    ctx.clearRect(0, 0, w, h);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < -10) p.x = w + 10;
      if (p.x > w + 10) p.x = -10;
      if (p.y < -10) p.y = h + 10;
      if (p.y > h + 10) p.y = -10;

      ctx.beginPath();
      ctx.fillStyle = `rgba(156,232,213,${p.a})`;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(renderParticles);
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();
  renderParticles();
}

const STORAGE_KEYS = {
  auth: 'freesewaa-auth',
  currentUserId: 'freesewaa-current-user-id',
  token: 'freesewaa-token',
  user: 'freesewaa-user'
};

const EMAIL_ONLY_MESSAGE = 'Please use a real email address from a recognized email provider.';
const PASSWORD_POLICY_MESSAGE = 'Password must be 8-10 characters and include uppercase, lowercase, and a number.';
const DEMO_EMAIL_DOMAINS = new Set([
  'demo.com',
  'example.com',
  'example.net',
  'example.org',
  'localhost',
  'test.com'
]);
const RECOGNIZED_EMAIL_DOMAINS = new Set([
  'aol.com',
  'daum.net',
  'freesewaa.local',
  'gmail.com',
  'hanmail.net',
  'hotmail.com',
  'icloud.com',
  'kakao.com',
  'live.com',
  'mac.com',
  'me.com',
  'msn.com',
  'nate.com',
  'naver.com',
  'outlook.com',
  'proton.me',
  'protonmail.com',
  'yahoo.com',
  'yandex.com',
  'zoho.com'
]);

function getApiBaseUrl() {
  let stored = '';
  try {
    stored = localStorage.getItem('freesewaa-api-base-url') || '';
  } catch (error) {}

  const pageOrigin = window.location.origin && window.location.origin !== 'null'
    ? window.location.origin
    : 'https://free-sewaa-qh05.onrender.com';
  const storedOrigin = /^https?:\/\//i.test(stored) ? stored : '';
  const configured = window.FREESEWAA_API_BASE_URL || window.FREESEWAA_API_ORIGIN || '';
  const normalized = String(configured || pageOrigin || storedOrigin).replace(/\/+$/, '');

  if (normalized) {
    try {
      localStorage.setItem('freesewaa-api-base-url', normalized);
    } catch (error) {}
  }

  return normalized;
}

function apiUrl(path) {
  if (/^https?:\/\//i.test(path)) return path;
  if (String(path).startsWith('//')) return `${window.location.protocol}${path}`;
  return new URL(String(path), getApiBaseUrl()).toString();
}

function isRealEmailAddress(email = '') {
  const value = String(email || '').trim().toLowerCase();
  const domain = value.split('@')[1] || '';
  const hasValidFormat = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(value);
  const isRecognizedDomain =
    RECOGNIZED_EMAIL_DOMAINS.has(domain) ||
    domain.endsWith('.edu') ||
    domain.endsWith('.edu.kr') ||
    domain.endsWith('.ac.kr');

  return hasValidFormat && isRecognizedDomain && !DEMO_EMAIL_DOMAINS.has(domain);
}

function isStrongPassword(password = '') {
  const value = String(password || '');
  return (
    value.length >= 8 &&
    value.length <= 10 &&
    /[a-z]/.test(value) &&
    /[A-Z]/.test(value) &&
    /\d/.test(value)
  );
}

function generateStrongPassword() {
  const lower = 'abcdefghijkmnopqrstuvwxyz';
  const upper = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
  const digits = '23456789';
  const all = `${lower}${upper}${digits}`;
  const required = [
    lower[Math.floor(Math.random() * lower.length)],
    upper[Math.floor(Math.random() * upper.length)],
    digits[Math.floor(Math.random() * digits.length)]
  ];

  while (required.length < 10) {
    required.push(all[Math.floor(Math.random() * all.length)]);
  }

  return required
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(item => item.value)
    .join('');
}

function getPageMode() {
  const path = window.location.pathname.toLowerCase();
  if (path.includes('signup')) return 'signup';
  if (path.includes('admin_login') || path.includes('admin-login')) return 'admin-signin';
  return 'signin';
}

function formValues(form) {
  const inputs = [...form.querySelectorAll('input')].filter(input => input.type !== 'checkbox');
  return inputs.map(input => input.value.trim());
}

function showInlineMessage(form, message, tone = 'default') {
  let el = form.querySelector('.auth-message');

  if (!el) {
    el = document.createElement('p');
    el.className = 'auth-message';
    form.appendChild(el);
  }

  el.textContent = message;
  el.dataset.tone = tone;
}

function clearInlineMessage(form) {
  const el = form.querySelector('.auth-message');
  if (el) {
    el.textContent = '';
    el.dataset.tone = 'default';
  }
}

function showCardMessage(source, message, tone = 'default') {
  const card = source.closest('.auth-card') || document.body;
  let el = card.querySelector(':scope > .auth-message');

  if (!el) {
    el = document.createElement('p');
    el.className = 'auth-message';
    const footer = card.querySelector('.auth-footer');
    card.insertBefore(el, footer || null);
  }

  el.textContent = message;
  el.dataset.tone = tone;
}

async function postJson(url, payload) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(data.error || data.message || 'Something went wrong.');
    }

    return data;
  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error(
        'Cannot reach the server. Set FREESEWAA_API_BASE_URL for deployment or open the app through the server that hosts the API.'
      );
    }
    throw error;
  }
}

function setSession(data) {
  const user = data.user || {};
  const userId = user.id || data.auth?.userId || '';
  const token = data.token || data.auth?.token || '';
  const sessionRole = user.role || data.auth?.role || 'user';

  if (!userId) throw new Error('Invalid response format from server.');

  user.role = sessionRole;

  localStorage.setItem(STORAGE_KEYS.auth, 'true');
  localStorage.setItem(STORAGE_KEYS.currentUserId, userId);
  localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(user));

  if (token) {
    localStorage.setItem(STORAGE_KEYS.token, token);
  } else {
    localStorage.removeItem(STORAGE_KEYS.token);
  }

  window.location.href = sessionRole === 'superadmin' ? '/admin.html' : '/user_panel.html';
  setTimeout(() => {
    window.location.replace(sessionRole === 'superadmin' ? '/admin.html' : '/user_panel.html');
  }, 200);
}

function validateSignupEmailForm(form, values) {
  const [firstName, lastName, email, password] = values;
  const agreed = form.querySelector('input[type="checkbox"]')?.checked;

  if (!firstName) throw new Error('Please enter your first name.');
  if (!lastName) throw new Error('Please enter your last name.');
  if (!email) throw new Error('Please enter your email address.');
  if (!isRealEmailAddress(email)) throw new Error(EMAIL_ONLY_MESSAGE);
  if (!isStrongPassword(password)) throw new Error(PASSWORD_POLICY_MESSAGE);
  if (!agreed) throw new Error('Please agree to the Terms and Privacy Policy.');
}

function validateSigninEmailForm(values) {
  const [email, password] = values;
  if (!email) throw new Error('Please enter your email address.');
  if (!isRealEmailAddress(email)) throw new Error(EMAIL_ONLY_MESSAGE);
  if (!password) throw new Error('Please enter your password.');
}

function getFirebaseAuth() {
  if (!window.firebase || !window.FREESEWAA_FIREBASE_CONFIG?.apiKey) {
    return null;
  }

  if (!window.firebase.apps.length) {
    window.firebase.initializeApp(window.FREESEWAA_FIREBASE_CONFIG);
  }

  const auth = window.firebase.auth();
  auth.useDeviceLanguage();
  return auth;
}

function normalizePhoneNumber(value = '') {
  const phone = String(value || '').trim().replace(/[^\d+]/g, '');
  if (!phone) return '';
  return phone.startsWith('+') ? phone : '';
}

function getSignupNamePayload(form) {
  return {
    firstName: form.querySelector('[data-first-name]')?.value.trim() || '',
    lastName: form.querySelector('[data-last-name]')?.value.trim() || ''
  };
}

async function finishFirebaseSignin(result, provider, extra = {}) {
  const user = result?.user || getFirebaseAuth()?.currentUser;
  if (!user) throw new Error('Firebase did not return a signed-in user.');

  const idToken = await user.getIdToken(true);
  const data = await postJson(apiUrl('/api/auth/firebase'), {
    idToken,
    provider,
    ...extra
  });

  setSession(data);
}

function firebaseErrorMessage(error, fallback = 'Firebase authentication failed.') {
  const code = String(error?.code || '');

  if (code.includes('popup-blocked') || code.includes('popup-closed')) {
    return 'The Google sign-in window was blocked. Redirecting sign-in is now used instead.';
  }
  if (code.includes('invalid-phone-number')) {
    return 'Enter the phone number in international format, including + and country code.';
  }
  if (code.includes('captcha-check-failed') || code.includes('invalid-app-credential')) {
    return 'Firebase could not validate reCAPTCHA. Refresh the page and try again.';
  }
  if (code.includes('billing-not-enabled')) {
    return 'Firebase billing or SMS quota blocked this request. Use the configured Firebase test number or try again after the daily quota resets.';
  }
  if (code.includes('quota-exceeded') || code.includes('too-many-requests')) {
    return 'Firebase SMS quota or abuse protection blocked this request. The free project currently allows 10 real SMS messages per day; use the configured test number if needed.';
  }
  if (code.includes('operation-not-allowed')) {
    return 'This Firebase sign-in method is not enabled for the project.';
  }
  if (code.includes('unauthorized-domain')) {
    return 'This website domain is not authorized in Firebase Authentication.';
  }
  if (code.includes('invalid-action-code') || code.includes('expired-action-code')) {
    return 'This email sign-in link is invalid or expired. Request a new link.';
  }

  return error?.message || fallback;
}

function getEmailLinkSettings() {
  const url = new URL(window.location.href);
  url.search = '';
  url.hash = '';
  url.searchParams.set('firebaseEmailLink', '1');

  return {
    url: url.toString(),
    handleCodeInApp: true
  };
}

async function sendFirebaseEmailLink(form) {
  const auth = getFirebaseAuth();
  if (!auth) throw new Error('Firebase is not configured for this page.');

  const email = form.querySelector('[data-email-link-input]')?.value.trim().toLowerCase() || '';
  if (!isRealEmailAddress(email)) throw new Error(EMAIL_ONLY_MESSAGE);

  if (getPageMode() === 'signup') {
    if (!form.querySelector('[data-email-link-terms]')?.checked) {
      throw new Error('Please agree to the Terms and Privacy Policy.');
    }

    localStorage.setItem('freesewaa-email-link-profile', JSON.stringify(getSignupNamePayload(form)));
  }

  await auth.sendSignInLinkToEmail(email, getEmailLinkSettings());
  localStorage.setItem('freesewaa-email-for-signin', email);
  showInlineMessage(form, `Verification link sent to ${email}. Open that email on this browser to continue.`, 'success');
}

async function completeFirebaseEmailLink() {
  const auth = getFirebaseAuth();
  if (!auth || !auth.isSignInWithEmailLink(window.location.href)) return;

  const email = localStorage.getItem('freesewaa-email-for-signin') || '';
  if (!email) {
    const emailPanelButton = document.querySelector('[data-panel-target="emailLinkPanel"]');
    emailPanelButton?.click();
    const form = document.querySelector('[data-firebase-auth="email-link"]');
    if (form) {
      showInlineMessage(form, 'Enter the same email address used to request this link, then request a new link.', 'error');
    }
    return;
  }

  const profile = JSON.parse(localStorage.getItem('freesewaa-email-link-profile') || '{}');
  const result = await auth.signInWithEmailLink(email, window.location.href);
  localStorage.removeItem('freesewaa-email-for-signin');
  localStorage.removeItem('freesewaa-email-link-profile');
  window.history.replaceState({}, document.title, window.location.pathname);
  await finishFirebaseSignin(result, 'password', profile);
}

async function completeGoogleRedirect() {
  const auth = getFirebaseAuth();
  if (!auth) return;

  const result = await auth.getRedirectResult();
  if (result?.user) {
    await finishFirebaseSignin(result, 'google.com');
  }
}

async function startPhoneOtp(form) {
  const auth = getFirebaseAuth();
  if (!auth) throw new Error('Firebase is not configured for this page.');

  const phone = normalizePhoneNumber(form.querySelector('[data-phone-input]')?.value);
  if (!phone) throw new Error('Enter the phone number in international format, including + and country code.');

  const sendButton = form.querySelector('[data-phone-action="send"]');
  sendButton.disabled = true;
  sendButton.textContent = 'Sending OTP...';

  try {
    const recaptchaId = sendButton.id;
    if (!recaptchaId) throw new Error('Phone verification button is missing its reCAPTCHA identifier.');

    if (!window.freesewaaRecaptchaVerifier) {
      window.freesewaaRecaptchaVerifier = new window.firebase.auth.RecaptchaVerifier(recaptchaId, {
        size: 'invisible',
        callback: () => {}
      });
    }

    window.freesewaaPhoneConfirmation = await auth.signInWithPhoneNumber(phone, window.freesewaaRecaptchaVerifier);
    showInlineMessage(form, 'OTP sent. Enter the 6-digit code to continue.', 'success');
  } catch (error) {
    if (window.freesewaaRecaptchaVerifier?.clear) {
      window.freesewaaRecaptchaVerifier.clear();
    }
    window.freesewaaRecaptchaVerifier = null;
    throw error;
  } finally {
    sendButton.disabled = false;
    sendButton.textContent = 'Send OTP';
  }
}

async function completePhoneOtp(form) {
  const code = form.querySelector('[data-phone-code]')?.value.trim();
  if (!window.freesewaaPhoneConfirmation) {
    throw new Error('Please send the OTP first.');
  }
  if (!code) throw new Error('Please enter the verification code.');

  if (getPageMode() === 'signup') {
    const agreed = form.querySelector('[data-phone-terms]')?.checked;
    if (!agreed) throw new Error('Please agree to the Terms and Privacy Policy.');
  }

  const result = await window.freesewaaPhoneConfirmation.confirm(code);
  await finishFirebaseSignin(result, 'phone', {
    ...getSignupNamePayload(form),
    phone: normalizePhoneNumber(form.querySelector('[data-phone-input]')?.value)
  });
}

document.querySelectorAll('[data-password-action="generate"]').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const form = btn.closest('.auth-form');
    const passwordInput = form?.querySelector('input[type="password"]');
    if (!passwordInput) return;

    passwordInput.value = generateStrongPassword();
    passwordInput.type = 'text';
    showInlineMessage(form, 'Generated a strong 10-character password.', 'success');
  });
});

document.querySelectorAll('[data-firebase-provider="google"]').forEach(button => {
  button.addEventListener('click', async () => {
    const defaultText = button.textContent;
    try {
      const auth = getFirebaseAuth();
      if (!auth) throw new Error('Firebase is not configured for this page.');

      button.disabled = true;
      button.textContent = 'Redirecting to Google...';
      const provider = new window.firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({ prompt: 'select_account' });
      await auth.signInWithRedirect(provider);
    } catch (error) {
      console.warn('Google sign-in failed:', error);
      showCardMessage(button, firebaseErrorMessage(error, 'Google sign-in failed.'), 'error');
      button.disabled = false;
      button.textContent = defaultText;
    }
  });
});

document.querySelectorAll('[data-phone-action="send"]').forEach(button => {
  button.addEventListener('click', async () => {
    const form = button.closest('[data-firebase-auth="phone"]');
    if (!form) return;

    try {
      clearInlineMessage(form);
      await startPhoneOtp(form);
    } catch (error) {
      console.warn('Phone OTP send failed:', error);
      showInlineMessage(form, firebaseErrorMessage(error, 'Could not send OTP.'), 'error');
    }
  });
});

document.querySelectorAll('.auth-form').forEach(form => {
  form.addEventListener('submit', async e => {
    e.preventDefault();

    if (form.dataset.firebaseAuth === 'email-link') {
      const submitButton = form.querySelector('.primary-btn');
      const defaultButtonText = submitButton.textContent;
      try {
        clearInlineMessage(form);
        submitButton.disabled = true;
        submitButton.textContent = 'Sending Link...';
        await sendFirebaseEmailLink(form);
      } catch (error) {
        console.warn('Email link send failed:', error);
        showInlineMessage(form, firebaseErrorMessage(error, 'Could not send the email link.'), 'error');
      } finally {
        submitButton.disabled = false;
        submitButton.textContent = defaultButtonText;
      }
      return;
    }

    if (form.dataset.firebaseAuth === 'phone') {
      const submitButton = form.querySelector('.primary-btn');
      const defaultButtonText = submitButton.textContent;
      try {
        clearInlineMessage(form);
        submitButton.disabled = true;
        submitButton.textContent = 'Verifying...';
        await completePhoneOtp(form);
      } catch (error) {
        console.warn('Phone OTP verification failed:', error);
        showInlineMessage(form, firebaseErrorMessage(error, 'Phone verification failed.'), 'error');
        submitButton.disabled = false;
        submitButton.textContent = defaultButtonText;
      }
      return;
    }

    const pageMode = getPageMode();
    const submitButton = form.querySelector('.primary-btn');
    const defaultButtonText = pageMode === 'signup' ? 'Create Account' : 'Sign In';

    try {
      clearInlineMessage(form);
      submitButton.disabled = true;
      submitButton.textContent = pageMode === 'signup' ? 'Creating...' : 'Signing in...';

      const raw = formValues(form);
      let payload = {};
      let endpoint = '';

      if (pageMode === 'signup') {
        validateSignupEmailForm(form, raw);
        const [firstName, lastName, email, password] = raw;
        payload = { firstName, lastName, email, password };
        endpoint = apiUrl('/api/auth/signup');
      } else if (pageMode === 'admin-signin') {
        validateSigninEmailForm(raw);
        const [email, password] = raw;
        payload = { email, password };
        endpoint = apiUrl('/api/auth/admin/signin');
      } else {
        validateSigninEmailForm(raw);
        const [email, password] = raw;
        payload = { email, password };
        endpoint = apiUrl('/api/auth/signin');
      }

      const data = await postJson(endpoint, payload);
      setSession(data);
    } catch (error) {
      console.warn('Authentication failed:', error);
      showInlineMessage(form, error.message || 'Authentication failed.', 'error');
      submitButton.disabled = false;
      submitButton.textContent = defaultButtonText;
    }
  });
});

Promise.resolve()
  .then(completeFirebaseEmailLink)
  .then(completeGoogleRedirect)
  .catch(error => {
    console.warn('Firebase redirect completion failed:', error);
    const card = document.querySelector('.auth-card');
    if (card) showCardMessage(card, firebaseErrorMessage(error), 'error');
  });
