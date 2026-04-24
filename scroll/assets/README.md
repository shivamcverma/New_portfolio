# 🚀 Personal Portfolio — Developer Guide

## 📁 Folder Structure

```
portfolio/
├── index.html              ← Main HTML (all sections)
├── css/
│   └── style.css           ← All styles (themed with CSS variables)
├── js/
│   └── app.js              ← All JS (typed effect, scroll, form, etc.)
├── assets/
│   ├── profile.jpg         ← ⬅️ ADD YOUR PHOTO HERE
│   └── resume.pdf          ← ⬅️ ADD YOUR RESUME HERE
└── README.md
```

---

## ✏️ How to Customize

### 1. Your Name
Search for `Your Name` in `index.html` and replace everywhere.

### 2. Profile Photo
Replace `assets/profile.jpg` with your own photo.
- Recommended: Square image, 500×500px minimum
- If no image is present, an icon placeholder is shown automatically

### 3. Resume
Place your resume PDF at `assets/resume.pdf`

### 4. Social Links
Search for `yourusername` in `index.html` and replace with your real handles:
- GitHub: `https://github.com/yourusername`
- LinkedIn: `https://linkedin.com/in/yourusername`
- Twitter/X: `https://twitter.com/yourusername`

### 5. Contact Info
Replace `your@email.com` and `+91 99999 99999` with your real contact info.

### 6. Add a New Project
Copy any `.project-card` block in the `#projects` section and update:
- `data-category` attribute
- Project title, description, tech stack
- GitHub and demo links

### 7. Color Theme
Open `css/style.css` → Section 1 (CSS Variables).
Change `--accent` to any color:
- Purple: `#a855f7`
- Green: `#00e676`
- Orange: `#ff6d00`

---

## 🌐 Deploy to GitHub Pages

1. Push your portfolio folder to a GitHub repo (e.g., `username.github.io`)
2. Go to **Settings → Pages**
3. Set source to `main` branch, root `/`
4. Your site will be live at `https://username.github.io`

> **Custom domain?** Add a `CNAME` file with your domain name in the root folder.

---

## 🌐 Deploy to Netlify

**Option A — Drag & Drop:**
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your `portfolio/` folder onto the dashboard
3. You're live in seconds ✅

**Option B — Git Integration:**
1. Push to GitHub
2. Connect the repo in Netlify → "New site from Git"
3. Build command: *(leave empty)*
4. Publish directory: `/` (root)

---

## 💡 Bonus Improvement Ideas

| Feature | How to implement |
|---|---|
| **Blog Section** | Add a Markdown-rendered blog using a library like `marked.js` |
| **Real Contact Form** | Use [Formspree](https://formspree.io) or [EmailJS](https://emailjs.com) — free tiers available |
| **Custom Cursor** | Add a trailing dot cursor effect with JS for uniqueness |
| **GitHub Activity Feed** | Fetch your GitHub contributions graph via the public API |
| **Testimonials Carousel** | Bootstrap carousel with client/colleague quotes |
| **Project Filtering** | Add filter buttons (All / Backend / Scraping / Fullstack) with JS |
| **Counter Animation** | Animate the hero stat numbers counting up on scroll |
| **Noise Texture** | Add a subtle grain overlay (`filter: url(#noise)`) for depth |
| **Page Transitions** | Use [Barba.js](https://barba.js.org/) for smooth page transitions |
| **PWA** | Add a `manifest.json` and `service-worker.js` to make it installable |

---

## 📦 Libraries Used (All CDN — Zero Build Step)

| Library | Purpose |
|---|---|
| Bootstrap 5.3 | Responsive grid + components |
| Bootstrap Icons 1.11 | Icon set |
| AOS 2.3 | Scroll-triggered animations |
| Google Fonts (Syne + DM Mono + DM Sans) | Typography |

---

Made with ❤️ — easy to update, easy to deploy.