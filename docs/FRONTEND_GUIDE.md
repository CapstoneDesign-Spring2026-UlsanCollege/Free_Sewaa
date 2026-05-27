# Frontend Guide

## Folder Structure

```
html/                  # 28 HTML pages
css/
├── style.css          # Main styles
├── theme.css          # Theme variables and dark mode
└── auth.css           # Authentication page styles
js/
├── site.js            # Main application logic (dashboard, browse, etc.)
└── auth.js            # Authentication logic
```

## Page List

| Page | File | Description |
|------|------|-------------|
| Landing | `index.html` | Homepage with hero, features, and login prompt |
| Sign Up | `signup.html` | New user registration |
| Sign In | `signin.html` | User login |
| Admin Login | `admin_login.html` | Admin login page |
| Dashboard | `app.html` | User dashboard after login |
| Browse | `browse.html` | Browse donation items |
| Donate | `donate.html` | Post a new donation |
| Messages | `messages.html` | User messaging |
| Profile | `profile.html` | User profile |
| Admin Panel | `admin.html` | Admin dashboard |
| Events | `events.html` | Community events |
| Orders | `orders.html` | User orders |
| Requests | `requests.html` | Incoming/outgoing requests |
| Notifications | `notifications.html` | User notifications |
| Saved Items | `saved.html` | Bookmarked items |
| My Posts | `my-posts.html` | User's posted items |
| Premium | `premium.html` | Premium/donate page |

## CSS Conventions

- Use class names with kebab-case (e.g. `.user-card`, `.nav-container`)
- Theme colors are defined as CSS variables in `theme.css`
- Dark mode is supported via a `.dark` class toggle
- Responsive breakpoints at 760px, 900px, 980px, 1080px, 1150px, 1200px

## How to Add a New Page

1. Create a new `.html` file in `html/`
2. Include `<link>` to `css/style.css` and `css/theme.css`
3. Include `<script src="js/site.js">` for shared functionality
4. Add the `<canvas id="particles">` element for particle background
5. Add navigation using the existing pattern from other pages

---

## React Frontend Update

Free Sewaa frontend pages have been updated toward a React-based structure. Future frontend work should use reusable components, shared styles, and consistent page layouts.

- Use reusable React components
- Keep page structure clean
- Reuse shared styles to avoid duplicated CSS
- Do not break existing user flows during migration
- Make sure React page styles load correctly
- Test pages after every UI change

The React frontend is built with [Vite](https://vitejs.dev/) and uses `@vitejs/plugin-react`. The dev server runs on port 5173 with an API proxy to the backend on port 3000. Production builds output to the `dist/` directory, which the server serves for root-level React page requests.

---

*Last updated: May 2026*
