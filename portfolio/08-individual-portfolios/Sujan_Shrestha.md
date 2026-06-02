# Sujan Shrestha — Frontend & UI Development

## Short Summary

I focused on building the user-facing pages and interface of Free Sewaa, including the landing page, browse page, donate form, and messaging UI. This work helped make the platform easy to use and navigate for both donors and recipients.

## 1. My Role

- **Name:** Sujan Shrestha
- **Team:** Free Sewaa
- **Project:** Free Sewaa
- **Main responsibilities:** Developing HTML/CSS/JavaScript pages, implementing user interface components, ensuring responsive design, and improving user experience flows.
- **Role during the semester:** Frontend developer and QA lead (also served as project manager in Week 1).

## 2. My Strongest Contributions

| Contribution | What I personally did | Evidence |
|---|---|---|
| Landing and core pages | Built the initial versions of index.html (landing), browse.html (item listing), donate.html (item posting form), and messages.html (chat interface). | [HTML files](../../html/) |
| Page flow and navigation | Connected the pages through consistent navigation menus, buttons, and links so users could move from login to browsing to requesting without confusion. | [UI Flow diagram](../../docs/DESIGN/UI_FLOW.md) |
| Responsive design adjustments | Updated CSS to improve layout on mobile devices, including adjusting font sizes, padding, and grid layouts for better usability on small screens. | [CSS theme](../../css/theme.css) |
| Messaging UI | Designed and implemented the chat interface where donors and recipients could communicate after a request was made, including message bubbles and input fields. | [messages.html](../../html/messages.html) |

## 3. One Area I Can Explain Clearly

- **Area:** How the browse page displays items from the backend API
- **File/folder/doc:** `html/browse.html` and associated JavaScript in `js/site.js` (specifically the `renderItems` function)
- **What it does:** Fetches item data from the `/api/items` endpoint and dynamically renders each item as a card in a grid layout with image, title, category, and request button.
- **How it works:** On page load, JavaScript makes a GET request to `/api/items`, receives an array of item objects, loops through them, and creates HTML elements for each item using `document.createElement()` and `innerHTML`. Each card includes an image, title, category badge, and a “Request” button that opens a modal.
- **How it was tested:** I tested it by posting items via the donate page, then refreshing the browse page to see if the new items appeared. I also checked the browser’s Network tab to confirm the API request returned data and inspected the DOM to verify the cards were created correctly.
- **One limitation:** The current implementation re-renders the entire item list on every update, which could be inefficient with large datasets. A better approach might use a virtualized list or a frontend framework like React for efficient updates.
- **Evidence:** [Browse page code](../../html/browse.html), [JavaScript site file](../../js/site.js) (search for `renderItems` or `fetchItems`)

## 4. My AI Use and Review

- **AI tools used:** GitHub Copilot
- **What AI helped with:** Suggesting boilerplate HTML structures for forms (e.g., the donate page layout) and providing ideas for JavaScript event handlers (e.g., form submission handlers).
- **What I personally checked:** I reviewed every AI-generated HTML snippet for correct form attributes (like `name` and `id` fields) and ensured they matched the expected backend API parameters. I also verified that JavaScript suggestions actually targeted the correct DOM elements and handled errors gracefully.
- **What I personally changed:** I rewrote most of the AI-generated code to match our project’s styling and functionality needs. For example, I adjusted the donate form to include proper category selection and image preview, and I fixed JavaScript suggestions that incorrectly assumed certain elements existed.
- **How I tested or verified it:** I manually tested each form by submitting it with valid and invalid data, checked that the backend received the correct parameters (via server logs or network tab), and verified that error messages appeared when expected.
- **One area I still need to improve:** I would like to move toward a component-based architecture (e.g., using React) to reduce code duplication and improve state management across pages like the browse page and dashboard.

## 5. One Problem I Helped Solve

- **Problem:** The donate form lacked proper validation and feedback—users could submit empty fields or invalid image files without clear error messages, leading to failed submissions or poor user experience.
- **Why it mattered:** If users couldn’t easily post items, the core donation flow of the platform would break, discouraging participation.
- **What I did:** I added client-side validation to the donate form (e.g., checking for required fields, file type, and size) and implemented dynamic error messages that appear next to the relevant input when validation fails. I also added a loading state during submission.
- **What changed:** Users now see immediate feedback when they try to submit an incomplete form, and they cannot submit unless all required fields are valid, reducing failed API calls.
- **Evidence:** [Donate page](../../html/donate.html), [Form validation checklist](../../FORM_VALIDATION_CHECKLIST.md) (shows rules we aimed to follow)

## 6. Reflection

### What I learned
I learned how to build a cohesive user interface across multiple pages, ensuring consistency in design, navigation, and behavior. I also gained experience in frontend form validation, handling file uploads, and creating interactive elements like modals and dropdowns.

### What I am proud of
The core user flows—signing up, browsing items, posting a donation, requesting an item, and sending a message—are all functional and intuitive. A new user can figure out how to use the platform without needing instructions.

### What I should have done better
I should have started using a frontend framework like React earlier in the semester to manage UI state more effectively and reduce the amount of manual DOM manipulation. Relying on vanilla JavaScript made complex interactions harder to maintain as the project grew.

### What I would improve next
I would migrate the remaining pages to React components, implement a shared state solution (e.g., using Context API or a simple state library), and add client-side routing to enable smoother transitions between pages without full reloads.

### One skill I want to continue developing
Frontend architecture and state management, particularly how to build scalable, maintainable user interfaces in JavaScript without over-reliance on frameworks.

## 7. Presentation Readiness

- [x] I can explain my main contribution: frontend pages and user interface
- [x] I can explain one technical area clearly: how the browse page renders items from the API
- [x] I know the final MVP demo flow (landing → sign up → browse → post item → request item → send message → admin panel)
- [x] I know at least one bug or limitation: no client-side routing causes full page reloads on navigation; form validation could be more robust
- [x] I reviewed the technical defense questions
- [x] I can answer honestly if I do not know something

## 8. My Best Evidence Links

1. [Browse page code](../../html/browse.html) — Shows item rendering logic
2. [Donate page code](../../html/donate.html) — Shows form with validation
3. [Messages page code](../../html/messages.html) — Shows chat interface
4. [UI Flow diagram](../../docs/DESIGN/UI_FLOW.md) — Shows how pages connect
5. [Form validation checklist](../../FORM_VALIDATION_CHECKLIST.md) — References the rules we implemented

---
[Back to Individual Portfolios](./README.md) | [Back to Portfolio Home](../README.md)