# DevVault 🚀
### Student Project Showcase — SIES Graduate School of Technology

Built by **Milind Sahu**, **Keshav Sharma**, **Soham Puri** & **Revant Ganesh**  
2nd Year · Computer Engineering · 2024–25

---

## 📁 Folder Structure

```
devvault/
├── index.html          ← Home page
├── login.html          ← Login / Sign in
├── explore.html        ← Browse all projects
├── project.html        ← Project detail view
├── upload.html         ← Upload a project
├── about.html          ← About us + Team section
├── blog.html           ← Blog articles
├── tutorials.html      ← Learning tutorials
├── contact.html        ← Contact form
├── faq.html            ← FAQ / Help
├── leaderboard.html    ← Top creators
├── profile.html        ← User profile
├── vercel.json         ← Vercel config (clean URLs)
├── css/
│   └── styles.css      ← All styles
└── js/
    └── data.js         ← Shared data, utilities & state
```

---

## 🚀 Deploy to Vercel (3 steps)

### Option A — Drag & Drop (Easiest)
1. Go to [vercel.com](https://vercel.com) and sign up / log in
2. Click **"Add New Project"** → **"Deploy without Git"**
3. Drag the entire `devvault` folder into the upload area
4. Click **Deploy** — done! ✅

### Option B — Via GitHub
1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repo
4. Leave all settings as default → Click **Deploy**

---

## 💻 Run Locally

Open a terminal in the `devvault` folder and run:

```bash
# Python 3
python -m http.server 8080

# Node.js
npx serve .
```

Then open **http://localhost:8080** in your browser.

> ⚠️ Don't double-click the HTML files directly — use a local server  
> because `sessionStorage` and relative JS imports need HTTP.

---

## ✨ Features

- 🔐 Fake login (stores name in sessionStorage)
- 📤 Upload projects with drag & drop
- 🔍 Search + filter by tech / difficulty
- ♥ Like / unlike projects (persisted in session)
- ⬇ Download projects (generates a sample HTML file)
- 🏆 Leaderboard of top creators
- 👤 Personal profile with stats
- 📝 Blog, Tutorials, Contact, FAQ pages
- 🦶 Consistent footer on every page
- 📱 Fully responsive

---

## 👥 The Team

| Name | Role |
|------|------|
| Milind Sahu | Frontend Developer |
| Keshav Sharma | Backend Developer |
| Soham Puri | Full Stack Developer |
| Revant Ganesh | UI/UX Designer |

**College:** SIES Graduate School of Technology, Nerul, Navi Mumbai
