import AboutPage from './AboutPage.jsx';
import AdminPage from './AdminPage.jsx';
import AdminLoginPage from './AdminLoginPage.jsx';
import AppPage from './AppPage.jsx';
import AuthChoicePage from './AuthChoicePage.jsx';
import BrowsePage from './BrowsePage.jsx';
import DonateUsPage from './DonateUsPage.jsx';
import DonatePage from './DonatePage.jsx';
import EventsPage from './EventsPage.jsx';
import IndexPage from './IndexPage.jsx';
import LogoutPage from './LogoutPage.jsx';
import MessagesPage from './MessagesPage.jsx';
import MyPostsPage from './MyPostsPage.jsx';
import NotificationsPage from './NotificationsPage.jsx';
import OrdersPage from './OrdersPage.jsx';
import PremiumPage from './PremiumPage.jsx';
import ProfilePage from './ProfilePage.jsx';
import RegionPage from './RegionPage.jsx';
import RequestsPage from './RequestsPage.jsx';
import SavedPage from './SavedPage.jsx';
import SecurityAuditPage from './SecurityAuditPage.jsx';
import SigninPage from './SigninPage.jsx';
import SignupPage from './SignupPage.jsx';
import UserPanelPage from './UserPanelPage.jsx';

export const pageRoutes = {
  '/about.html': { Component: AboutPage, meta: {
      "title": "Free Sewaa - About Us",
      "description": "Learn about Free Sewaa, a community platform for free donations, local support, and volunteer-led care.",
      "bodyAttrs": {
        "data-page": "about"
      },
      "links": [
        {
          "rel": "preconnect",
          "href": "https://fonts.googleapis.com"
        },
        {
          "rel": "preconnect",
          "href": "https://fonts.gstatic.com",
          "crossorigin": ""
        },
        {
          "rel": "preconnect",
          "href": "https://images.unsplash.com",
          "crossorigin": ""
        },
        {
          "rel": "dns-prefetch",
          "href": "//images.unsplash.com"
        },
        {
          "href": "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Cormorant+Garamond:wght@500;600;700&display=swap",
          "rel": "stylesheet"
        },
        {
          "rel": "stylesheet",
          "href": "/css/theme.css"
        }
      ],
      "scripts": [
        {
          "attrs": {
            "src": "/js/site.js"
          },
          "content": ""
        }
      ]
    } },
  '/admin.html': { Component: AdminPage, meta: {
      "title": "Free Sewaa ??Admin Control Center",
      "description": "",
      "bodyAttrs": {
        "data-page": "admin",
        "class": "admin-v2-body"
      },
      "links": [
        {
          "rel": "preconnect",
          "href": "https://fonts.googleapis.com"
        },
        {
          "rel": "preconnect",
          "href": "https://fonts.gstatic.com",
          "crossorigin": ""
        },
        {
          "href": "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Cormorant+Garamond:wght@600;700&display=swap",
          "rel": "stylesheet"
        },
        {
          "rel": "stylesheet",
          "href": "/css/theme.css?v=adminrebuild20260418"
        }
      ],
      "scripts": [
        {
          "attrs": {},
          "content": "(function () {\n      document.documentElement.classList.add('admin-locked');\n\n      try {\n        const storedUser = JSON.parse(localStorage.getItem('freesewaa-user') || '{}');\n        const isAuthed = localStorage.getItem('freesewaa-auth') === 'true';\n\n        if (!isAuthed || !storedUser || storedUser.role !== 'superadmin' || !localStorage.getItem('freesewaa-current-user-id')) {\n          window.location.replace('/admin_login.html');\n        }\n      } catch (error) {\n        window.location.replace('/admin_login.html');\n      }\n    })();"
        },
        {
          "attrs": {
            "src": "/api-config.js"
          },
          "content": ""
        },
        {
          "attrs": {},
          "content": "function setAdminLogoutInProgress() {\n      window.FREESEWAA_ADMIN_LOGGING_OUT = true;\n    }\n\n    function isAdminLogoutInProgress() {\n      return window.FREESEWAA_ADMIN_LOGGING_OUT === true;\n    }\n\n    function clearAdminSession() {\n      localStorage.removeItem('freesewaa-auth');\n      localStorage.removeItem('freesewaa-current-user-id');\n      localStorage.removeItem('freesewaa-token');\n      localStorage.removeItem('freesewaa-user');\n    }\n\n    function redirectToAdminLogin() {\n      window.location.replace('/admin_login.html');\n    }\n\n    window.FREESEWAA_VERIFY_ADMIN = (async function verifyAdminAccess() {\n      function clearSessionAndRedirect() {\n        clearAdminSession();\n        redirectToAdminLogin();\n      }\n\n      function getApiBaseUrl() {\n        let stored = '';\n        try {\n          stored = localStorage.getItem('freesewaa-api-base-url') || '';\n        } catch (error) {}\n\n        const configured = window.FREESEWAA_API_BASE_URL || window.FREESEWAA_API_ORIGIN || stored || '';\n        return String(configured || window.location.origin).replace(/\\/+$/, '');\n      }\n\n      function apiUrl(path) {\n        if (/^https?:\\/\\//i.test(path)) return path;\n        return new URL(String(path), getApiBaseUrl()).toString();\n      }\n\n      try {\n        const userId = localStorage.getItem('freesewaa-current-user-id') || '';\n        const token = localStorage.getItem('freesewaa-token') || '';\n\n        if (isAdminLogoutInProgress()) {\n          throw new Error('Admin logout in progress.');\n        }\n\n        if (!userId) {\n          clearSessionAndRedirect();\n          throw new Error('Admin session missing.');\n        }\n\n        const response = await fetch(apiUrl('/api/auth/session'), {\n          headers: {\n            'x-user-id': userId,\n            ...(token ? { Authorization: `Bearer ${token}` } : {})\n          }\n        });\n        const data = await response.json();\n        const user = data.user || {};\n\n        if (!response.ok || user.role !== 'superadmin') {\n          clearSessionAndRedirect();\n          throw new Error('Super admin access required.');\n        }\n\n        if (isAdminLogoutInProgress()) {\n          throw new Error('Admin logout in progress.');\n        }\n\n        localStorage.setItem('freesewaa-user', JSON.stringify(user));\n        document.documentElement.classList.remove('admin-locked');\n        return user;\n      } catch (error) {\n        if (!isAdminLogoutInProgress()) {\n          clearSessionAndRedirect();\n        }\n        throw error;\n      }\n    })();"
        },
        {
          "attrs": {
            "src": "/admin-panel.js?v=adminonly20260513"
          },
          "content": ""
        },
        {
          "attrs": {},
          "content": "function showAdminToast(message) {\r\n      const toast = document.getElementById('adminToast');\r\n      if (!toast) return;\r\n\r\n      toast.textContent = message;\r\n      toast.classList.add('is-visible');\r\n\r\n      clearTimeout(showAdminToast._timer);\r\n      showAdminToast._timer = setTimeout(() => {\r\n        toast.classList.remove('is-visible');\r\n      }, 2200);\r\n    }\n\n    async function handleAdminLogout() {\n      setAdminLogoutInProgress();\n\n      const logoutButton = document.getElementById('adminLogoutButton');\n      if (logoutButton) {\n        logoutButton.disabled = true;\n        logoutButton.textContent = 'Logging out...';\n      }\n\n      try {\n        const token = localStorage.getItem('freesewaa-token') || '';\n\n        if (\n          window.FREESEWAA_FIREBASE_CONFIG &&\n          window.firebase &&\n          window.firebase.apps &&\r\n          !window.firebase.apps.length\r\n        ) {\r\n          window.firebase.initializeApp(window.FREESEWAA_FIREBASE_CONFIG);\r\n        }\r\n\r\n        if (window.firebase && window.firebase.auth) {\r\n          try {\r\n            await window.firebase.auth().signOut();\r\n          } catch (firebaseError) {\r\n            console.warn('Firebase logout warning:', firebaseError);\n          }\n        }\n\n        try {\n          await fetch('/api/auth/logout', {\n            method: 'POST',\n            headers: token ? { Authorization: `Bearer ${token}` } : {}\n          });\n        } catch (apiError) {\n          console.warn('API logout warning:', apiError);\n        }\n      } catch (error) {\n        console.warn('Logout cleanup warning:', error);\n      } finally {\n        clearAdminSession();\n        redirectToAdminLogin();\n      }\n    }\n\n    const logoutButton = document.getElementById('adminLogoutButton');\n    if (logoutButton) {\n      logoutButton.addEventListener('click', handleAdminLogout);\n    }"
        }
      ]
    } },
  '/admin_login.html': { Component: AdminLoginPage, meta: {
      "title": "Admin Login - Free Sewaa",
      "description": "",
      "bodyAttrs": {
        "class": "auth-page"
      },
      "links": [
        {
          "rel": "preconnect",
          "href": "https://fonts.googleapis.com"
        },
        {
          "rel": "preconnect",
          "href": "https://fonts.gstatic.com",
          "crossorigin": ""
        },
        {
          "rel": "preconnect",
          "href": "https://images.unsplash.com",
          "crossorigin": ""
        },
        {
          "href": "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Cormorant+Garamond:wght@500;600;700&display=swap",
          "rel": "stylesheet"
        },
        {
          "rel": "stylesheet",
          "href": "/css/auth.css?v=20260418"
        }
      ],
      "scripts": [
        {
          "attrs": {
            "src": "/api-config.js"
          },
          "content": ""
        },
        {
          "attrs": {},
          "content": "try {\r\n      const user = JSON.parse(localStorage.getItem('freesewaa-user') || '{}');\r\n      const authed = localStorage.getItem('freesewaa-auth') === 'true';\r\n      if (authed && user && user.id) {\r\n        window.location.replace(user.role === 'superadmin' ? '/admin.html' : '/user_panel.html');\r\n      }\r\n    } catch (e) {}"
        },
        {
          "attrs": {},
          "content": "function getApiBaseUrl() {\r\n      let stored = '';\r\n      try {\r\n        stored = localStorage.getItem('freesewaa-api-base-url') || '';\r\n      } catch (error) {}\r\n\r\n      const configured = window.FREESEWAA_API_BASE_URL || window.FREESEWAA_API_ORIGIN || stored || '';\r\n      const normalized = String(configured || window.location.origin).replace(/\\/+$/, '');\r\n\r\n      if (configured) {\r\n        try {\r\n          localStorage.setItem('freesewaa-api-base-url', normalized);\r\n        } catch (error) {}\r\n      }\r\n\r\n      return normalized;\r\n    }\r\n\r\n    function apiUrl(path) {\r\n      if (/^https?:\\/\\//i.test(path)) return path;\r\n      if (String(path).startsWith('//')) return `${window.location.protocol}${path}`;\r\n      return new URL(String(path), getApiBaseUrl()).toString();\r\n    }\r\n\r\n    const canvas = document.getElementById('particles');\r\n    if (canvas) {\r\n      const ctx = canvas.getContext('2d');\r\n      let particles = [];\r\n      let dpr = window.devicePixelRatio || 1;\r\n      function resizeCanvas() {\r\n        const w = window.innerWidth;\r\n        const h = window.innerHeight;\r\n        dpr = window.devicePixelRatio || 1;\r\n        canvas.width = w * dpr;\r\n        canvas.height = h * dpr;\r\n        canvas.style.width = `${w}px`;\r\n        canvas.style.height = `${h}px`;\r\n        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);\r\n        particles = Array.from({ length: Math.min(28, Math.max(12, Math.floor(w / 65))) }, () => ({\r\n          x: Math.random() * w, y: Math.random() * h, r: Math.random() * 1.8 + 0.5,\r\n          vx: (Math.random() - 0.5) * 0.15, vy: (Math.random() - 0.5) * 0.15, a: Math.random() * 0.18 + 0.03\r\n        }));\r\n      }\r\n      function renderParticles() {\r\n        const w = window.innerWidth; const h = window.innerHeight;\r\n        ctx.clearRect(0, 0, w, h);\r\n        particles.forEach(p => {\r\n          p.x += p.vx; p.y += p.vy;\r\n          if (p.x < -10) p.x = w + 10; if (p.x > w + 10) p.x = -10;\r\n          if (p.y < -10) p.y = h + 10; if (p.y > h + 10) p.y = -10;\r\n          ctx.beginPath(); ctx.fillStyle = `rgba(234,216,191,${p.a})`; ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();\r\n        });\r\n        requestAnimationFrame(renderParticles);\r\n      }\r\n      window.addEventListener('resize', resizeCanvas); resizeCanvas(); renderParticles();\r\n    }\r\n\r\n    const form = document.getElementById('adminLoginForm');\r\n    const submitBtn = document.getElementById('adminSubmit');\r\n    const message = document.getElementById('adminMessage');\r\n    const demoEmailDomains = new Set(['demo.com', 'example.com', 'example.net', 'example.org', 'freesewaa.local', 'localhost', 'test.com']);\r\n\r\n    function isRealEmailAddress(email = '') {\r\n      const value = String(email || '').trim().toLowerCase();\r\n      const domain = value.split('@')[1] || '';\r\n      return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$/.test(value) && !demoEmailDomains.has(domain);\r\n    }\r\n\r\n    function showMessage(text, tone = 'error') {\r\n      message.style.display = 'block';\r\n      message.textContent = text;\r\n      message.dataset.tone = tone;\r\n    }\r\n\r\n    async function postJson(path, payload) {\r\n      const response = await fetch(apiUrl(path), {\r\n        method: 'POST',\r\n        headers: { 'Content-Type': 'application/json' },\r\n        body: JSON.stringify(payload)\r\n      });\r\n      const text = await response.text();\r\n      let data = {};\r\n      try {\r\n        data = text ? JSON.parse(text) : {};\r\n      } catch (error) {\r\n        throw new Error('Admin sign in endpoint is not available yet.');\r\n      }\r\n      if (!response.ok) {\r\n        throw new Error(data.error || 'Admin sign in failed.');\r\n      }\r\n      return data;\r\n    }\r\n\r\n    async function signInAdmin(email, password) {\r\n      try {\r\n        return await postJson('/api/auth/admin/signin', { email, password });\r\n      } catch (error) {\r\n        const fallback = await postJson('/api/auth/signin', { email, password });\r\n        const fallbackUser = fallback.user || {};\r\n        if (fallbackUser.role !== 'superadmin' && fallback.auth?.role !== 'superadmin') {\r\n          throw error;\r\n        }\r\n        return fallback;\r\n      }\r\n    }\r\n\r\n    form.addEventListener('submit', async (e) => {\r\n      e.preventDefault();\r\n      message.style.display = 'none';\r\n      const email = document.getElementById('adminEmail').value.trim();\r\n      const password = document.getElementById('adminPassword').value;\r\n      if (!email || !password) {\r\n        showMessage('Please enter your admin email address and password.');\r\n        return;\r\n      }\r\n      if (!isRealEmailAddress(email)) {\r\n        showMessage('Please use a real admin email address, not a demo or test email.');\r\n        return;\r\n      }\r\n      submitBtn.disabled = true;\r\n      submitBtn.textContent = 'Signing in...';\r\n      try {\r\n        const data = await signInAdmin(email, password);\r\n        const user = data.user || {};\r\n        const token = data.token || data.auth?.token || '';\r\n        const userId = user.id || data.auth?.userId || '';\r\n        if (!userId || user.role !== 'superadmin') {\r\n          throw new Error('Super admin access required.');\r\n        }\r\n        localStorage.setItem('freesewaa-auth', 'true');\r\n        localStorage.setItem('freesewaa-current-user-id', userId);\r\n        localStorage.setItem('freesewaa-user', JSON.stringify(user));\r\n        if (token) localStorage.setItem('freesewaa-token', token);\r\n        window.location.href = '/admin.html';\r\n      } catch (error) {\r\n        const msg = error && error.message ? error.message : 'Could not sign in.';\r\n        if (error instanceof TypeError || /Failed to fetch/i.test(msg)) {\r\n          showMessage('Cannot reach the server. Start the project with \"npm start\" and open the localhost address shown in the terminal. Admin login will not work if you open the HTML file directly.');\r\n        } else {\r\n          showMessage(msg);\r\n        }\r\n      } finally {\r\n        submitBtn.disabled = false;\r\n        submitBtn.textContent = 'Sign In';\r\n      }\r\n    });"
        }
      ]
    } },
  '/app.html': { Component: AppPage, meta: {
      "title": "Free Sewaa - Home",
      "description": "Free Sewaa home for donating items, browsing support, events, and community help.",
      "bodyAttrs": {},
      "links": [
        {
          "rel": "preconnect",
          "href": "https://fonts.googleapis.com"
        },
        {
          "rel": "preconnect",
          "href": "https://fonts.gstatic.com",
          "crossorigin": ""
        },
        {
          "rel": "preconnect",
          "href": "https://images.unsplash.com",
          "crossorigin": ""
        },
        {
          "rel": "dns-prefetch",
          "href": "//images.unsplash.com"
        },
        {
          "href": "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Cormorant+Garamond:wght@500;600;700&display=swap",
          "rel": "stylesheet"
        },
        {
          "rel": "stylesheet",
          "href": "/css/theme.css"
        }
      ],
      "scripts": [
        {
          "attrs": {
            "src": "/api-config.js"
          },
          "content": ""
        },
        {
          "attrs": {
            "src": "/js/site.js"
          },
          "content": ""
        }
      ]
    } },
  '/auth_choice.html': { Component: AuthChoicePage, meta: {
      "title": "Choose Portal - Free Sewaa",
      "description": "",
      "bodyAttrs": {
        "class": "auth-page portal-page"
      },
      "links": [
        {
          "rel": "preconnect",
          "href": "https://fonts.googleapis.com"
        },
        {
          "rel": "preconnect",
          "href": "https://fonts.gstatic.com",
          "crossorigin": ""
        },
        {
          "href": "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Cormorant+Garamond:wght@500;600;700&display=swap",
          "rel": "stylesheet"
        },
        {
          "rel": "stylesheet",
          "href": "/css/auth.css?v=20260418"
        }
      ],
      "scripts": []
    } },
  '/browse.html': { Component: BrowsePage, meta: {
      "title": "Free Sewaa - Browse Listings",
      "description": "Browse community donations on Free Sewaa",
      "bodyAttrs": {
        "data-page": "browse"
      },
      "links": [
        {
          "rel": "preconnect",
          "href": "https://fonts.googleapis.com"
        },
        {
          "rel": "preconnect",
          "href": "https://fonts.gstatic.com",
          "crossorigin": ""
        },
        {
          "href": "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Cormorant+Garamond:wght@500;600;700&display=swap",
          "rel": "stylesheet"
        },
        {
          "rel": "stylesheet",
          "href": "/css/theme.css?v=20260527-browse"
        }
      ],
      "scripts": [
        {
          "attrs": {
            "src": "/js/site.js"
          },
          "content": ""
        }
      ]
    } },
  '/donate-us.html': { Component: DonateUsPage, meta: {
      "title": "Free Sewaa - Support Our Work",
      "description": "Support Free Sewaa community events, donation delivery, student supplies, and family essentials.",
      "bodyAttrs": {
        "data-page": "donate-us"
      },
      "links": [
        {
          "rel": "preconnect",
          "href": "https://fonts.googleapis.com"
        },
        {
          "rel": "preconnect",
          "href": "https://fonts.gstatic.com",
          "crossorigin": ""
        },
        {
          "rel": "preconnect",
          "href": "https://images.unsplash.com",
          "crossorigin": ""
        },
        {
          "rel": "dns-prefetch",
          "href": "//images.unsplash.com"
        },
        {
          "href": "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Cormorant+Garamond:wght@500;600;700&display=swap",
          "rel": "stylesheet"
        },
        {
          "rel": "stylesheet",
          "href": "/css/theme.css"
        }
      ],
      "scripts": [
        {
          "attrs": {
            "src": "/js/site.js"
          },
          "content": ""
        }
      ]
    } },
  '/donate.html': { Component: DonatePage, meta: {
      "title": "Free Sewaa - Create Listing",
      "description": "Create a donation listing on Free Sewaa",
      "bodyAttrs": {
        "data-page": "donate"
      },
      "links": [
        {
          "rel": "preconnect",
          "href": "https://fonts.googleapis.com"
        },
        {
          "rel": "preconnect",
          "href": "https://fonts.gstatic.com",
          "crossorigin": ""
        },
        {
          "href": "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Cormorant+Garamond:wght@500;600;700&display=swap",
          "rel": "stylesheet"
        },
        {
          "rel": "stylesheet",
          "href": "/css/theme.css"
        }
      ],
      "scripts": [
        {
          "attrs": {
            "src": "/js/site.js"
          },
          "content": ""
        }
      ]
    } },
  '/events.html': { Component: EventsPage, meta: {
      "title": "Free Sewaa - Events",
      "description": "Upcoming Free Sewaa free events, donation camps, volunteer drives, and community support days.",
      "bodyAttrs": {
        "data-page": "events",
        "data-public": "true"
      },
      "links": [
        {
          "rel": "preconnect",
          "href": "https://fonts.googleapis.com"
        },
        {
          "rel": "preconnect",
          "href": "https://fonts.gstatic.com",
          "crossorigin": ""
        },
        {
          "rel": "preconnect",
          "href": "https://images.unsplash.com",
          "crossorigin": ""
        },
        {
          "rel": "dns-prefetch",
          "href": "//images.unsplash.com"
        },
        {
          "href": "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Cormorant+Garamond:wght@500;600;700&display=swap",
          "rel": "stylesheet"
        },
        {
          "rel": "stylesheet",
          "href": "/css/theme.css"
        }
      ],
      "scripts": [
        {
          "attrs": {
            "src": "/js/site.js"
          },
          "content": ""
        }
      ]
    } },
  '/': { Component: IndexPage, meta: {
      "title": "Free Sewaa - Community Giving",
      "description": "Free Sewaa community giving platform for free donations, events, and local support.",
      "bodyAttrs": {},
      "links": [
        {
          "rel": "preconnect",
          "href": "https://fonts.googleapis.com"
        },
        {
          "rel": "preconnect",
          "href": "https://fonts.gstatic.com",
          "crossorigin": ""
        },
        {
          "rel": "preconnect",
          "href": "https://images.unsplash.com",
          "crossorigin": ""
        },
        {
          "rel": "dns-prefetch",
          "href": "//images.unsplash.com"
        },
        {
          "href": "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Cormorant+Garamond:wght@500;600;700&display=swap",
          "rel": "stylesheet"
        },
        {
          "rel": "stylesheet",
          "href": "/css/style.css"
        }
      ],
      "scripts": [
        {
          "attrs": {},
          "content": "if (localStorage.getItem('freesewaa-auth') === 'true' && localStorage.getItem('freesewaa-current-user-id')) {\n  try { const u = JSON.parse(localStorage.getItem('freesewaa-user') || '{}'); window.location.replace(u.role === 'superadmin' ? 'admin.html' : 'app.html'); } catch(e) { window.location.replace('app.html'); }\n}"
        },
        {
          "attrs": {
            "src": "/js/index.js"
          },
          "content": ""
        }
      ]
    } },
  '/logout.html': { Component: LogoutPage, meta: {
      "title": "Free Sewaa — Logout",
      "description": "Free Sewaa premium page",
      "bodyAttrs": {},
      "links": [
        {
          "rel": "preconnect",
          "href": "https://fonts.googleapis.com"
        },
        {
          "rel": "preconnect",
          "href": "https://fonts.gstatic.com",
          "crossorigin": ""
        },
        {
          "rel": "preconnect",
          "href": "https://images.unsplash.com",
          "crossorigin": ""
        },
        {
          "rel": "dns-prefetch",
          "href": "//images.unsplash.com"
        },
        {
          "href": "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Cormorant+Garamond:wght@500;600;700&display=swap",
          "rel": "stylesheet"
        },
        {
          "rel": "stylesheet",
          "href": "/css/theme.css"
        }
      ],
      "scripts": [
        {
          "attrs": {
            "src": "/js/site.js"
          },
          "content": ""
        },
        {
          "attrs": {},
          "content": "document.addEventListener(\"DOMContentLoaded\",()=>{const b=document.getElementById(\"logoutNow\"); if(b){b.addEventListener(\"click\",async()=>{const token=localStorage.getItem('freesewaa-token')||''; try{await fetch(\"/api/auth/logout\",{method:\"POST\",headers:token?{Authorization:`Bearer ${token}`}:{}});}catch(e){} localStorage.removeItem(\"freesewaa-auth\"); localStorage.removeItem(\"freesewaa-current-user-id\"); localStorage.removeItem(\"freesewaa-token\"); localStorage.removeItem(\"freesewaa-user\"); window.location.href=\"index.html\";});}});"
        }
      ]
    } },
  '/messages.html': { Component: MessagesPage, meta: {
      "title": "Free Sewaa — Messages",
      "description": "Manage conversations on Free Sewaa",
      "bodyAttrs": {
        "data-page": "messages"
      },
      "links": [
        {
          "rel": "preconnect",
          "href": "https://fonts.googleapis.com"
        },
        {
          "rel": "preconnect",
          "href": "https://fonts.gstatic.com",
          "crossorigin": ""
        },
        {
          "href": "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Cormorant+Garamond:wght@500;600;700&display=swap",
          "rel": "stylesheet"
        },
        {
          "rel": "stylesheet",
          "href": "/css/theme.css"
        }
      ],
      "scripts": [
        {
          "attrs": {
            "src": "/js/site.js"
          },
          "content": ""
        }
      ]
    } },
  '/my-posts.html': { Component: MyPostsPage, meta: {
      "title": "Free Sewaa — My Posts",
      "description": "",
      "bodyAttrs": {
        "data-page": "my-posts"
      },
      "links": [
        {
          "rel": "preconnect",
          "href": "https://fonts.googleapis.com"
        },
        {
          "rel": "preconnect",
          "href": "https://fonts.gstatic.com",
          "crossorigin": ""
        },
        {
          "href": "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Cormorant+Garamond:wght@500;600;700&display=swap",
          "rel": "stylesheet"
        },
        {
          "rel": "stylesheet",
          "href": "/css/theme.css"
        }
      ],
      "scripts": [
        {
          "attrs": {
            "src": "/js/site.js"
          },
          "content": ""
        }
      ]
    } },
  '/notifications.html': { Component: NotificationsPage, meta: {
      "title": "Free Sewaa — Notifications",
      "description": "",
      "bodyAttrs": {
        "data-page": "notifications"
      },
      "links": [
        {
          "rel": "preconnect",
          "href": "https://fonts.googleapis.com"
        },
        {
          "rel": "preconnect",
          "href": "https://fonts.gstatic.com",
          "crossorigin": ""
        },
        {
          "href": "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Cormorant+Garamond:wght@500;600;700&display=swap",
          "rel": "stylesheet"
        },
        {
          "rel": "stylesheet",
          "href": "/css/theme.css"
        }
      ],
      "scripts": [
        {
          "attrs": {
            "src": "/js/site.js"
          },
          "content": ""
        }
      ]
    } },
  '/orders.html': { Component: OrdersPage, meta: {
      "title": "Free Sewaa — Track Your Order",
      "description": "Free Sewaa premium page",
      "bodyAttrs": {},
      "links": [
        {
          "rel": "preconnect",
          "href": "https://fonts.googleapis.com"
        },
        {
          "rel": "preconnect",
          "href": "https://fonts.gstatic.com",
          "crossorigin": ""
        },
        {
          "rel": "preconnect",
          "href": "https://images.unsplash.com",
          "crossorigin": ""
        },
        {
          "rel": "dns-prefetch",
          "href": "//images.unsplash.com"
        },
        {
          "href": "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Cormorant+Garamond:wght@500;600;700&display=swap",
          "rel": "stylesheet"
        },
        {
          "rel": "stylesheet",
          "href": "/css/theme.css"
        }
      ],
      "scripts": [
        {
          "attrs": {
            "src": "/js/site.js"
          },
          "content": ""
        }
      ]
    } },
  '/premium.html': { Component: PremiumPage, meta: {
      "title": "Free Sewaa — Premium Plans",
      "description": "Free Sewaa premium page",
      "bodyAttrs": {},
      "links": [
        {
          "rel": "preconnect",
          "href": "https://fonts.googleapis.com"
        },
        {
          "rel": "preconnect",
          "href": "https://fonts.gstatic.com",
          "crossorigin": ""
        },
        {
          "rel": "preconnect",
          "href": "https://images.unsplash.com",
          "crossorigin": ""
        },
        {
          "rel": "dns-prefetch",
          "href": "//images.unsplash.com"
        },
        {
          "href": "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Cormorant+Garamond:wght@500;600;700&display=swap",
          "rel": "stylesheet"
        },
        {
          "rel": "stylesheet",
          "href": "/css/theme.css"
        }
      ],
      "scripts": [
        {
          "attrs": {
            "src": "/js/site.js"
          },
          "content": ""
        }
      ]
    } },
  '/profile.html': { Component: ProfilePage, meta: {
      "title": "Free Sewaa — Personal Information",
      "description": "",
      "bodyAttrs": {
        "data-page": "profile"
      },
      "links": [
        {
          "rel": "preconnect",
          "href": "https://fonts.googleapis.com"
        },
        {
          "rel": "preconnect",
          "href": "https://fonts.gstatic.com",
          "crossorigin": ""
        },
        {
          "href": "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Cormorant+Garamond:wght@500;600;700&display=swap",
          "rel": "stylesheet"
        },
        {
          "rel": "stylesheet",
          "href": "/css/theme.css"
        }
      ],
      "scripts": [
        {
          "attrs": {
            "src": "/js/site.js"
          },
          "content": ""
        }
      ]
    } },
  '/region.html': { Component: RegionPage, meta: {
      "title": "Free Sewaa — Change Region",
      "description": "Free Sewaa premium page",
      "bodyAttrs": {},
      "links": [
        {
          "rel": "preconnect",
          "href": "https://fonts.googleapis.com"
        },
        {
          "rel": "preconnect",
          "href": "https://fonts.gstatic.com",
          "crossorigin": ""
        },
        {
          "rel": "preconnect",
          "href": "https://images.unsplash.com",
          "crossorigin": ""
        },
        {
          "rel": "dns-prefetch",
          "href": "//images.unsplash.com"
        },
        {
          "href": "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Cormorant+Garamond:wght@500;600;700&display=swap",
          "rel": "stylesheet"
        },
        {
          "rel": "stylesheet",
          "href": "/css/theme.css"
        }
      ],
      "scripts": [
        {
          "attrs": {
            "src": "/js/site.js"
          },
          "content": ""
        }
      ]
    } },
  '/requests.html': { Component: RequestsPage, meta: {
      "title": "Free Sewaa — My Requests",
      "description": "",
      "bodyAttrs": {
        "data-page": "requests"
      },
      "links": [
        {
          "rel": "preconnect",
          "href": "https://fonts.googleapis.com"
        },
        {
          "rel": "preconnect",
          "href": "https://fonts.gstatic.com",
          "crossorigin": ""
        },
        {
          "href": "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Cormorant+Garamond:wght@500;600;700&display=swap",
          "rel": "stylesheet"
        },
        {
          "rel": "stylesheet",
          "href": "/css/theme.css"
        }
      ],
      "scripts": [
        {
          "attrs": {
            "src": "/js/site.js"
          },
          "content": ""
        }
      ]
    } },
  '/saved.html': { Component: SavedPage, meta: {
      "title": "Free Sewaa — Saved Items",
      "description": "",
      "bodyAttrs": {
        "data-page": "saved"
      },
      "links": [
        {
          "rel": "preconnect",
          "href": "https://fonts.googleapis.com"
        },
        {
          "rel": "preconnect",
          "href": "https://fonts.gstatic.com",
          "crossorigin": ""
        },
        {
          "href": "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Cormorant+Garamond:wght@500;600;700&display=swap",
          "rel": "stylesheet"
        },
        {
          "rel": "stylesheet",
          "href": "/css/theme.css"
        }
      ],
      "scripts": [
        {
          "attrs": {
            "src": "/js/site.js"
          },
          "content": ""
        }
      ]
    } },
  '/security_audit.html': { Component: SecurityAuditPage, meta: {
      "title": "Free Sewaa — Security Audit",
      "description": "",
      "bodyAttrs": {
        "data-page": "security-audit"
      },
      "links": [
        {
          "rel": "preconnect",
          "href": "https://fonts.googleapis.com"
        },
        {
          "rel": "preconnect",
          "href": "https://fonts.gstatic.com",
          "crossorigin": ""
        },
        {
          "href": "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Cormorant+Garamond:wght@500;600;700&display=swap",
          "rel": "stylesheet"
        },
        {
          "rel": "stylesheet",
          "href": "/css/theme.css"
        }
      ],
      "scripts": [
        {
          "attrs": {
            "src": "/js/site.js"
          },
          "content": ""
        }
      ]
    } },
  '/signin.html': { Component: SigninPage, meta: {
      "title": "Free Sewaa - Sign In",
      "description": "",
      "bodyAttrs": {
        "class": "auth-page auth-page--signin"
      },
      "links": [
        {
          "rel": "preconnect",
          "href": "https://fonts.googleapis.com"
        },
        {
          "rel": "preconnect",
          "href": "https://fonts.gstatic.com",
          "crossorigin": ""
        },
        {
          "rel": "preconnect",
          "href": "https://images.unsplash.com",
          "crossorigin": ""
        },
        {
          "href": "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Cormorant+Garamond:wght@500;600;700&display=swap",
          "rel": "stylesheet"
        },
        {
          "rel": "stylesheet",
          "href": "/css/auth.css?v=20260527"
        }
      ],
      "scripts": [
        {
          "attrs": {},
          "content": "if (localStorage.getItem('freesewaa-auth') === 'true' && localStorage.getItem('freesewaa-current-user-id')) {\n  try { const u = JSON.parse(localStorage.getItem('freesewaa-user') || '{}'); window.location.replace(u.role === 'superadmin' ? '/admin.html' : '/user_panel.html'); } catch(e) { window.location.replace('/app.html'); }\n}"
        },
        {
          "attrs": {
            "src": "https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js"
          },
          "content": ""
        },
        {
          "attrs": {
            "src": "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth-compat.js"
          },
          "content": ""
        },
        {
          "attrs": {
            "src": "/firebase-config.js"
          },
          "content": ""
        },
        {
          "attrs": {
            "src": "/api-config.js"
          },
          "content": ""
        },
        {
          "attrs": {
            "src": "/js/auth.js"
          },
          "content": ""
        }
      ]
    } },
  '/signup.html': { Component: SignupPage, meta: {
      "title": "Free Sewaa - Sign Up",
      "description": "",
      "bodyAttrs": {
        "class": "auth-page auth-page--signup"
      },
      "links": [
        {
          "rel": "preconnect",
          "href": "https://fonts.googleapis.com"
        },
        {
          "rel": "preconnect",
          "href": "https://fonts.gstatic.com",
          "crossorigin": ""
        },
        {
          "rel": "preconnect",
          "href": "https://images.unsplash.com",
          "crossorigin": ""
        },
        {
          "href": "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Cormorant+Garamond:wght@500;600;700&display=swap",
          "rel": "stylesheet"
        },
        {
          "rel": "stylesheet",
          "href": "/css/auth.css?v=20260527"
        }
      ],
      "scripts": [
        {
          "attrs": {},
          "content": "if (localStorage.getItem('freesewaa-auth') === 'true' && localStorage.getItem('freesewaa-current-user-id')) {\n  try { const u = JSON.parse(localStorage.getItem('freesewaa-user') || '{}'); window.location.replace(u.role === 'superadmin' ? '/admin.html' : '/user_panel.html'); } catch(e) { window.location.replace('/app.html'); }\n}"
        },
        {
          "attrs": {
            "src": "https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js"
          },
          "content": ""
        },
        {
          "attrs": {
            "src": "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth-compat.js"
          },
          "content": ""
        },
        {
          "attrs": {
            "src": "/firebase-config.js"
          },
          "content": ""
        },
        {
          "attrs": {
            "src": "/api-config.js"
          },
          "content": ""
        },
        {
          "attrs": {
            "src": "/js/auth.js"
          },
          "content": ""
        }
      ]
    } },
  '/user_panel.html': { Component: UserPanelPage, meta: {
      "title": "Free Sewaa - User Dashboard",
      "description": "",
      "bodyAttrs": {
        "data-page": "user-panel"
      },
      "links": [
        {
          "rel": "preconnect",
          "href": "https://fonts.googleapis.com"
        },
        {
          "rel": "preconnect",
          "href": "https://fonts.gstatic.com",
          "crossorigin": ""
        },
        {
          "href": "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Cormorant+Garamond:wght@500;600;700&display=swap",
          "rel": "stylesheet"
        },
        {
          "rel": "stylesheet",
          "href": "/css/theme.css?v=dashboardsticky20260514"
        }
      ],
      "scripts": [
        {
          "attrs": {
            "src": "/api-config.js"
          },
          "content": ""
        },
        {
          "attrs": {
            "src": "/js/site.js?v=dashboardsticky20260514"
          },
          "content": ""
        }
      ]
    } },
  '/auth-choice.html': { Component: AuthChoicePage, meta: {
      "title": "Choose Portal - Free Sewaa",
      "description": "",
      "bodyAttrs": {
        "class": "auth-page portal-page"
      },
      "links": [
        {
          "rel": "preconnect",
          "href": "https://fonts.googleapis.com"
        },
        {
          "rel": "preconnect",
          "href": "https://fonts.gstatic.com",
          "crossorigin": ""
        },
        {
          "href": "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Cormorant+Garamond:wght@500;600;700&display=swap",
          "rel": "stylesheet"
        },
        {
          "rel": "stylesheet",
          "href": "/css/auth.css?v=20260418"
        }
      ],
      "scripts": []
    } },
  '/admin-login.html': { Component: AdminLoginPage, meta: {
      "title": "Admin Login - Free Sewaa",
      "description": "",
      "bodyAttrs": {
        "class": "auth-page"
      },
      "links": [
        {
          "rel": "preconnect",
          "href": "https://fonts.googleapis.com"
        },
        {
          "rel": "preconnect",
          "href": "https://fonts.gstatic.com",
          "crossorigin": ""
        },
        {
          "rel": "preconnect",
          "href": "https://images.unsplash.com",
          "crossorigin": ""
        },
        {
          "href": "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Cormorant+Garamond:wght@500;600;700&display=swap",
          "rel": "stylesheet"
        },
        {
          "rel": "stylesheet",
          "href": "/css/auth.css?v=20260418"
        }
      ],
      "scripts": [
        {
          "attrs": {
            "src": "/api-config.js"
          },
          "content": ""
        },
        {
          "attrs": {},
          "content": "try {\r\n      const user = JSON.parse(localStorage.getItem('freesewaa-user') || '{}');\r\n      const authed = localStorage.getItem('freesewaa-auth') === 'true';\r\n      if (authed && user && user.id) {\r\n        window.location.replace(user.role === 'superadmin' ? '/admin.html' : '/user_panel.html');\r\n      }\r\n    } catch (e) {}"
        },
        {
          "attrs": {},
          "content": "function getApiBaseUrl() {\r\n      let stored = '';\r\n      try {\r\n        stored = localStorage.getItem('freesewaa-api-base-url') || '';\r\n      } catch (error) {}\r\n\r\n      const configured = window.FREESEWAA_API_BASE_URL || window.FREESEWAA_API_ORIGIN || stored || '';\r\n      const normalized = String(configured || window.location.origin).replace(/\\/+$/, '');\r\n\r\n      if (configured) {\r\n        try {\r\n          localStorage.setItem('freesewaa-api-base-url', normalized);\r\n        } catch (error) {}\r\n      }\r\n\r\n      return normalized;\r\n    }\r\n\r\n    function apiUrl(path) {\r\n      if (/^https?:\\/\\//i.test(path)) return path;\r\n      if (String(path).startsWith('//')) return `${window.location.protocol}${path}`;\r\n      return new URL(String(path), getApiBaseUrl()).toString();\r\n    }\r\n\r\n    const canvas = document.getElementById('particles');\r\n    if (canvas) {\r\n      const ctx = canvas.getContext('2d');\r\n      let particles = [];\r\n      let dpr = window.devicePixelRatio || 1;\r\n      function resizeCanvas() {\r\n        const w = window.innerWidth;\r\n        const h = window.innerHeight;\r\n        dpr = window.devicePixelRatio || 1;\r\n        canvas.width = w * dpr;\r\n        canvas.height = h * dpr;\r\n        canvas.style.width = `${w}px`;\r\n        canvas.style.height = `${h}px`;\r\n        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);\r\n        particles = Array.from({ length: Math.min(28, Math.max(12, Math.floor(w / 65))) }, () => ({\r\n          x: Math.random() * w, y: Math.random() * h, r: Math.random() * 1.8 + 0.5,\r\n          vx: (Math.random() - 0.5) * 0.15, vy: (Math.random() - 0.5) * 0.15, a: Math.random() * 0.18 + 0.03\r\n        }));\r\n      }\r\n      function renderParticles() {\r\n        const w = window.innerWidth; const h = window.innerHeight;\r\n        ctx.clearRect(0, 0, w, h);\r\n        particles.forEach(p => {\r\n          p.x += p.vx; p.y += p.vy;\r\n          if (p.x < -10) p.x = w + 10; if (p.x > w + 10) p.x = -10;\r\n          if (p.y < -10) p.y = h + 10; if (p.y > h + 10) p.y = -10;\r\n          ctx.beginPath(); ctx.fillStyle = `rgba(234,216,191,${p.a})`; ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();\r\n        });\r\n        requestAnimationFrame(renderParticles);\r\n      }\r\n      window.addEventListener('resize', resizeCanvas); resizeCanvas(); renderParticles();\r\n    }\r\n\r\n    const form = document.getElementById('adminLoginForm');\r\n    const submitBtn = document.getElementById('adminSubmit');\r\n    const message = document.getElementById('adminMessage');\r\n    const demoEmailDomains = new Set(['demo.com', 'example.com', 'example.net', 'example.org', 'freesewaa.local', 'localhost', 'test.com']);\r\n\r\n    function isRealEmailAddress(email = '') {\r\n      const value = String(email || '').trim().toLowerCase();\r\n      const domain = value.split('@')[1] || '';\r\n      return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$/.test(value) && !demoEmailDomains.has(domain);\r\n    }\r\n\r\n    function showMessage(text, tone = 'error') {\r\n      message.style.display = 'block';\r\n      message.textContent = text;\r\n      message.dataset.tone = tone;\r\n    }\r\n\r\n    async function postJson(path, payload) {\r\n      const response = await fetch(apiUrl(path), {\r\n        method: 'POST',\r\n        headers: { 'Content-Type': 'application/json' },\r\n        body: JSON.stringify(payload)\r\n      });\r\n      const text = await response.text();\r\n      let data = {};\r\n      try {\r\n        data = text ? JSON.parse(text) : {};\r\n      } catch (error) {\r\n        throw new Error('Admin sign in endpoint is not available yet.');\r\n      }\r\n      if (!response.ok) {\r\n        throw new Error(data.error || 'Admin sign in failed.');\r\n      }\r\n      return data;\r\n    }\r\n\r\n    async function signInAdmin(email, password) {\r\n      try {\r\n        return await postJson('/api/auth/admin/signin', { email, password });\r\n      } catch (error) {\r\n        const fallback = await postJson('/api/auth/signin', { email, password });\r\n        const fallbackUser = fallback.user || {};\r\n        if (fallbackUser.role !== 'superadmin' && fallback.auth?.role !== 'superadmin') {\r\n          throw error;\r\n        }\r\n        return fallback;\r\n      }\r\n    }\r\n\r\n    form.addEventListener('submit', async (e) => {\r\n      e.preventDefault();\r\n      message.style.display = 'none';\r\n      const email = document.getElementById('adminEmail').value.trim();\r\n      const password = document.getElementById('adminPassword').value;\r\n      if (!email || !password) {\r\n        showMessage('Please enter your admin email address and password.');\r\n        return;\r\n      }\r\n      if (!isRealEmailAddress(email)) {\r\n        showMessage('Please use a real admin email address, not a demo or test email.');\r\n        return;\r\n      }\r\n      submitBtn.disabled = true;\r\n      submitBtn.textContent = 'Signing in...';\r\n      try {\r\n        const data = await signInAdmin(email, password);\r\n        const user = data.user || {};\r\n        const token = data.token || data.auth?.token || '';\r\n        const userId = user.id || data.auth?.userId || '';\r\n        if (!userId || user.role !== 'superadmin') {\r\n          throw new Error('Super admin access required.');\r\n        }\r\n        localStorage.setItem('freesewaa-auth', 'true');\r\n        localStorage.setItem('freesewaa-current-user-id', userId);\r\n        localStorage.setItem('freesewaa-user', JSON.stringify(user));\r\n        if (token) localStorage.setItem('freesewaa-token', token);\r\n        window.location.href = '/admin.html';\r\n      } catch (error) {\r\n        const msg = error && error.message ? error.message : 'Could not sign in.';\r\n        if (error instanceof TypeError || /Failed to fetch/i.test(msg)) {\r\n          showMessage('Cannot reach the server. Start the project with \"npm start\" and open the localhost address shown in the terminal. Admin login will not work if you open the HTML file directly.');\r\n        } else {\r\n          showMessage(msg);\r\n        }\r\n      } finally {\r\n        submitBtn.disabled = false;\r\n        submitBtn.textContent = 'Sign In';\r\n      }\r\n    });"
        }
      ]
    } },
  '/user-panel.html': { Component: UserPanelPage, meta: {
      "title": "Free Sewaa - User Dashboard",
      "description": "",
      "bodyAttrs": {
        "data-page": "user-panel"
      },
      "links": [
        {
          "rel": "preconnect",
          "href": "https://fonts.googleapis.com"
        },
        {
          "rel": "preconnect",
          "href": "https://fonts.gstatic.com",
          "crossorigin": ""
        },
        {
          "href": "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Cormorant+Garamond:wght@500;600;700&display=swap",
          "rel": "stylesheet"
        },
        {
          "rel": "stylesheet",
          "href": "/css/theme.css?v=dashboardsticky20260514"
        }
      ],
      "scripts": [
        {
          "attrs": {
            "src": "/api-config.js"
          },
          "content": ""
        },
        {
          "attrs": {
            "src": "/js/site.js?v=dashboardsticky20260514"
          },
          "content": ""
        }
      ]
    } },
  '/security-audit.html': { Component: SecurityAuditPage, meta: {
      "title": "Free Sewaa — Security Audit",
      "description": "",
      "bodyAttrs": {
        "data-page": "security-audit"
      },
      "links": [
        {
          "rel": "preconnect",
          "href": "https://fonts.googleapis.com"
        },
        {
          "rel": "preconnect",
          "href": "https://fonts.gstatic.com",
          "crossorigin": ""
        },
        {
          "href": "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Cormorant+Garamond:wght@500;600;700&display=swap",
          "rel": "stylesheet"
        },
        {
          "rel": "stylesheet",
          "href": "/css/theme.css"
        }
      ],
      "scripts": [
        {
          "attrs": {
            "src": "/js/site.js"
          },
          "content": ""
        }
      ]
    } }
};
