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

document.querySelectorAll('.auth-form').forEach(form => {
  form.addEventListener('submit', async e => {
    e.preventDefault();

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
