// ── SHARED DATA ──
const COLORS = ['#ff5c35','#3b82f6','#10b981','#f59e0b','#8b5cf6','#f43f5e','#06b6d4'];
const TAG_STYLES = {HTML:'tag-coral',CSS:'tag-blue',JavaScript:'tag-mint',Firebase:'tag-amber',API:'tag-lavender',Canvas:'tag-rose','Node.js':'tag-mint',default:'tag-default'};

const TEAM_DATA = [
  { name:'Milind Sahu',    role:'Frontend Developer',    emoji:'💻', color:'#ff5c35', bio:'The person who makes everything look great in the browser. Milind handles all of DevVault\'s UI — from pixel-perfect layouts to smooth animations. He believes good code should also be beautiful code.', skills:['HTML','CSS','JavaScript','React'], fun:'Debugs CSS at 2 AM and calls it fun' },
  { name:'Keshav Sharma',  role:'Backend Developer',     emoji:'⚙️', color:'#3b82f6', bio:'The engine behind DevVault. Keshav built the data architecture, Firebase integration, and all the logic that makes the platform actually work. If data moves, Keshav made it happen.',                    skills:['Firebase','Node.js','APIs','Databases'], fun:'Thinks in JSON, dreams in promises' },
  { name:'Soham Puri',     role:'Full Stack Developer',  emoji:'🛠️', color:'#10b981', bio:'Soham is the bridge between front and back. He\'s equally comfortable writing CSS or setting up a REST endpoint. When something breaks at the seams, Soham fixes it — usually before anyone notices.',    skills:['HTML','CSS','JavaScript','Firebase'], fun:'Commits code with haiku messages' },
  { name:'Revant Ganesh',  role:'UI/UX Designer',        emoji:'🎨', color:'#8b5cf6', bio:'The reason DevVault looks the way it does. Revant designed the entire visual identity — color palette, typography, layouts, and every micro-interaction. He obsesses over spacing so you don\'t have to.', skills:['Figma','UI Design','UX Research','Prototyping'], fun:'Measures margins in millimetres' },
];

let PROJECTS = [
  {id:1, title:'Weather Dashboard',  desc:'Real-time weather app using OpenWeatherMap API with animated icons and a 5-day forecast chart. Great starting point for learning API integration.',            tags:['HTML','CSS','JavaScript','API'],  author:'Priya M.',  likes:142, img:'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=300&fit=crop',  difficulty:'Intermediate'},
  {id:2, title:'Real-time Chat App', desc:'Firebase-powered chat with multiple rooms, online presence indicators and emoji reactions. Learn Firestore real-time listeners in depth.',                    tags:['Firebase','JavaScript','CSS'],   author:'Rohan K.',  likes:98,  img:'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=300&fit=crop',  difficulty:'Intermediate'},
  {id:3, title:'Snake Game Clone',   desc:'Classic snake game on HTML Canvas. High score saved to localStorage. Clean code — perfect for understanding game loops and collision detection.',             tags:['Canvas','JavaScript','HTML'],    author:'Dev S.',    likes:211, img:'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=600&h=300&fit=crop',  difficulty:'Beginner'},
  {id:4, title:'Expense Tracker',    desc:'Track expenses by category with pie charts. Includes monthly budget alerts and clean data export. Built entirely with vanilla JS.',                         tags:['JavaScript','CSS','HTML'],       author:'Anjali T.', likes:76,  img:'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=300&fit=crop',  difficulty:'Beginner'},
  {id:5, title:'Music Visualizer',   desc:'Audio visualizer using Web Audio API and Canvas. Upload any file and watch it come alive with colorful waveforms that react to the beat.',                  tags:['Canvas','API','JavaScript'],     author:'Karan P.',  likes:185, img:'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=300&fit=crop',  difficulty:'Advanced'},
  {id:6, title:'Portfolio Template', desc:'Minimalist portfolio with smooth scroll, typed.js animation, contact form and full responsiveness. Clone-and-customize ready.',                             tags:['HTML','CSS','JavaScript'],       author:'Sneha R.',  likes:320, img:'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=300&fit=crop',  difficulty:'Beginner'},
  {id:7, title:'Todo App Pro',       desc:'Feature-rich todo with drag & drop, labels, due dates, priority levels and dark mode. Great deep-dive into DOM manipulation.',                             tags:['JavaScript','CSS','HTML'],       author:'Amit V.',   likes:64,  img:'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=300&fit=crop',  difficulty:'Beginner'},
  {id:8, title:'QR Code Generator', desc:'Instantly generate and download QR codes for any URL or text. Built with qrcode.js. Simple, fast, and very shareable.',                                    tags:['JavaScript','HTML','API'],       author:'Nisha G.',  likes:88,  img:'https://images.unsplash.com/photo-1617997455403-41f333d44d5b?w=600&h=300&fit=crop',  difficulty:'Beginner'},
  {id:9, title:'Blog REST API',      desc:'Full Node.js REST API with JWT auth, CRUD operations, pagination and MongoDB. Perfect reference for backend beginners.',                                    tags:['Node.js','API','JavaScript'],    author:'Vijay M.',  likes:130, img:'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=300&fit=crop',  difficulty:'Advanced'},
  {id:10,title:'E-commerce UI',      desc:'Fully responsive product listing and cart UI. Pure CSS Grid with smooth add-to-cart animations. Pixel-perfect and mobile-friendly.',                       tags:['HTML','CSS','JavaScript'],       author:'Pooja L.',  likes:203, img:'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=300&fit=crop',  difficulty:'Intermediate'},
  {id:11,title:'Memory Card Game',   desc:'Classic flip-and-match memory game with timer, move counter and difficulty levels. Beautiful CSS 3D flip animations.',                                     tags:['HTML','CSS','JavaScript'],       author:'Arjun S.',  likes:115, img:'https://images.unsplash.com/photo-1606503153255-59d5e417b6a7?w=600&h=300&fit=crop',  difficulty:'Beginner'},
  {id:12,title:'Markdown Editor',    desc:'Live markdown preview editor with syntax highlighting and export-to-HTML. A satisfying build that you\'ll actually use daily.',                             tags:['JavaScript','HTML','CSS'],       author:'Riya T.',   likes:97,  img:'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=300&fit=crop',  difficulty:'Intermediate'},
];

const BLOG_POSTS = [
  {title:'5 Projects That Will Actually Get You a Job',      cat:'Career',           img:'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop', excerpt:'Not another todo app. Here are the projects that stand out in interviews.',         author:'Milind S.',  time:'8 min'},
  {title:'Firebase in 30 Minutes — The Honest Guide',        cat:'Tutorial',          img:'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop', excerpt:'Skip the docs rabbit hole. The fastest path from zero to a working Firestore app.',  author:'Keshav S.',  time:'10 min'},
  {title:'Why Your CSS Looks Amateur (And How to Fix It)',   cat:'Design',            img:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop', excerpt:'Revant breaks down the 6 most common CSS mistakes with fixes.',                      author:'Revant G.',  time:'6 min'},
  {title:'How We Built DevVault in 3 Weeks',                 cat:'Behind the Scenes', img:'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=200&fit=crop', excerpt:'The real story — the bugs, the late nights, the arguments about button colors.',     author:'Soham P.',   time:'14 min'},
  {title:'JavaScript Promises: Stop Being Afraid',           cat:'JavaScript',        img:'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop', excerpt:'Plain-English explanation of async/await and promises with working code examples.', author:'Milind S.',  time:'9 min'},
];

const TUTORIALS = [
  {icon:'🌐', title:'Build Your First Website',   level:'Beginner',     color:'#ecfdf5', accent:'#10b981', desc:'Start from an empty file and end with a live personal site.',   lessons:8,  time:'2h 30m'},
  {icon:'🎨', title:'CSS That Actually Works',    level:'Beginner',     color:'#eff6ff', accent:'#3b82f6', desc:'Flexbox, Grid, animations, and responsive design — visually.',   lessons:10, time:'3h'},
  {icon:'⚡', title:'JavaScript Fundamentals',   level:'Beginner',     color:'#fff0ec', accent:'#ff5c35', desc:'Variables to DOM manipulation with a mini project each lesson.',  lessons:14, time:'4h 30m'},
  {icon:'🔥', title:'Firebase for Students',     level:'Intermediate', color:'#fffbeb', accent:'#f59e0b', desc:'Build a real-time app with auth, Firestore, and hosting.',         lessons:9,  time:'3h'},
  {icon:'🎮', title:'Build a Canvas Game',       level:'Intermediate', color:'#faf5ff', accent:'#8b5cf6', desc:'A complete browser game — game loops, collision, score tracking.', lessons:11, time:'3h 30m'},
  {icon:'🖥️', title:'Node.js REST API',          level:'Advanced',     color:'#fdf2f8', accent:'#f43f5e', desc:'Production-ready API with Express, JWT auth, and MongoDB.',       lessons:16, time:'6h'},
];

const TUT_PATH = [
  {name:'HTML Basics',                   meta:'Week 1 · 2h'},
  {name:'CSS Fundamentals & Flexbox',    meta:'Week 2 · 3h'},
  {name:'JavaScript Core Concepts',      meta:'Week 3–4 · 5h'},
  {name:'DOM Manipulation & Events',     meta:'Week 5 · 3h'},
  {name:'Fetch API & JSON',              meta:'Week 6 · 2h'},
  {name:'Firebase & Realtime Apps',      meta:'Week 7–8 · 4h'},
  {name:'Build & Deploy Your Project',   meta:'Week 9 · 2h'},
];

const FAQS = [
  {q:'What is DevVault?',                    a:'DevVault is a student-built platform where developers upload mini-projects, share them, and download others for inspiration. Built by four second-year students at SIES Graduate School of Technology, Navi Mumbai.',cat:'general'},
  {q:'Is DevVault free to use?',             a:'Completely free! Browse, download, and upload projects without paying anything. We want to keep it open and accessible for every student.',cat:'general'},
  {q:'Who can upload projects?',             a:'Anyone! You don\'t need to be a CS student or an expert. If you built something — a game, a portfolio, a todo app — it belongs on DevVault.',cat:'upload'},
  {q:'How do I upload a project?',           a:'Click the "+ Upload" button in the navbar. Fill in your project\'s title, description, tech tags, and optionally a live URL and GitHub link. Hit "Publish" and you\'re live!',cat:'upload'},
  {q:'What types of projects can I upload?', a:'Any web-based project — HTML/CSS/JS sites, Firebase apps, Canvas games, APIs, portfolios, tools, or any frontend/backend project.',cat:'upload'},
  {q:'Can I download any project?',          a:'Yes! Click on any project card and you\'ll see a Download button in the sidebar. Downloads are free and instant.',cat:'download'},
  {q:'How do I create an account?',          a:'Just enter your name on the login page and click Sign In! This is a demo — we use your name to personalize your experience.',cat:'account'},
  {q:'Can I delete a project I uploaded?',   a:'Yes — go to your Profile page, find the project in "My Projects" and you\'ll see a delete option. Only you can delete your own projects.',cat:'account'},
  {q:'Who built DevVault?',                  a:'DevVault was built by Milind Sahu (Frontend), Keshav Sharma (Backend), Soham Puri (Full Stack), and Revant Ganesh (UI/UX) — four second-year students at SIES Graduate School of Technology, Navi Mumbai.',cat:'general'},
  {q:'Is there a mobile app?',               a:'Not yet! DevVault is fully responsive so it works great on mobile browsers. A dedicated app is on our roadmap.',cat:'general'},
];

// ── SHARED STATE (session storage for cross-page) ──
function getUser() {
  try { return JSON.parse(sessionStorage.getItem('dv_user')); } catch { return null; }
}
function setUser(u) { sessionStorage.setItem('dv_user', JSON.stringify(u)); }
function clearUser() { sessionStorage.removeItem('dv_user'); }

function getLiked() {
  try { return new Set(JSON.parse(sessionStorage.getItem('dv_liked') || '[]')); } catch { return new Set(); }
}
function saveLiked(set) { sessionStorage.setItem('dv_liked', JSON.stringify([...set])); }

function getProjects() {
  try {
    const extra = JSON.parse(sessionStorage.getItem('dv_projects') || '[]');
    return [...extra, ...PROJECTS];
  } catch { return PROJECTS; }
}
function addProject(p) {
  const extra = JSON.parse(sessionStorage.getItem('dv_projects') || '[]');
  extra.unshift(p);
  sessionStorage.setItem('dv_projects', JSON.stringify(extra));
}

// ── SHARED UTILITIES ──
function tagStyle(t) { return TAG_STYLES[t] || TAG_STYLES.default; }

function diffBadge(d) {
  if (d === 'Beginner') return '🟢 Beginner';
  if (d === 'Advanced') return '🔴 Advanced';
  return '🟡 Intermediate';
}

function renderCard(p, liked) {
  const initials = p.author.split(' ').map(w=>w[0]).join('').slice(0,2);
  const avColor = COLORS[p.id % COLORS.length];
  const tagsH = (p.tags||[]).slice(0,3).map(t=>`<span class="tag ${tagStyle(t)}">${t}</span>`).join('');
  const isLiked = liked && liked.has(p.id);
  return `
  <a class="card" href="project.html?id=${p.id}">
    <div class="card-thumb">
      <img src="${p.img}" alt="${p.title}" loading="lazy">
      <div class="card-thumb-overlay"></div>
      <div class="card-diff-badge">${diffBadge(p.difficulty)}</div>
    </div>
    <div class="card-body">
      <div class="card-tags">${tagsH}</div>
      <div class="card-title">${p.title}</div>
      <div class="card-desc">${(p.desc||'').slice(0,105)}…</div>
    </div>
    <div class="card-foot">
      <div class="card-author">
        <div class="mini-avatar" style="background:${avColor}">${initials}</div>
        <span class="card-author-name">${p.author}</span>
      </div>
      <div class="card-actions">
        <button class="like-btn${isLiked?' liked':''}" data-id="${p.id}" onclick="event.preventDefault();handleLike(this,${p.id})">${isLiked?'♥':'♡'} <span class="lc">${p.likes||0}</span></button>
        <button class="dl-btn" onclick="event.preventDefault();fakeDownload('${p.title}')">⬇</button>
      </div>
    </div>
  </a>`;
}

function handleLike(btn, id) {
  const liked = getLiked();
  const allP = getProjects();
  const p = allP.find(x => x.id === id);
  if (!p) return;
  const lc = btn.querySelector('.lc');
  if (liked.has(id)) {
    liked.delete(id); p.likes = Math.max(0,(p.likes||0)-1);
    btn.classList.remove('liked'); btn.innerHTML = `♡ <span class="lc">${p.likes}</span>`;
  } else {
    liked.add(id); p.likes = (p.likes||0)+1;
    btn.classList.add('liked'); btn.innerHTML = `♥ <span class="lc">${p.likes}</span>`;
    showToast('Added to your likes ♥', 'success');
  }
  saveLiked(liked);
}

function fakeDownload(title) {
  const html = `<!DOCTYPE html><html><head><title>${title} — DevVault</title><style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:sans-serif;background:#fdf8f2;color:#1a1208;display:flex;align-items:center;justify-content:center;min-height:100vh;flex-direction:column;gap:1rem;padding:2rem;text-align:center}h1{font-size:2rem;font-weight:900}span{color:#ff5c35}p{color:#6b5c44;max-width:400px;line-height:1.7}</style></head><body><div style="font-size:4rem">🚀</div><h1>${title}</h1><p>Downloaded from <span>DevVault</span> — built by Milind, Keshav, Soham &amp; Revant @ SIES GST.</p></body></html>`;
  const blob = new Blob([html],{type:'text/html'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href=url; a.download=title.replace(/\s+/g,'-').toLowerCase()+'.html'; a.click();
  URL.revokeObjectURL(url);
  showToast(`⬇ Downloading "${title}"…`, 'success');
}

function showToast(msg, type='success') {
  let area = document.getElementById('toastArea');
  if (!area) { area = document.createElement('div'); area.id='toastArea'; area.className='toast-area'; document.body.appendChild(area); }
  const el = document.createElement('div');
  el.className = `toast ${type}`; el.textContent = msg; area.appendChild(el);
  setTimeout(()=>{ el.style.transition='opacity .3s,transform .3s'; el.style.opacity='0'; el.style.transform='translateY(8px)'; setTimeout(()=>el.remove(),300); }, 3200);
}

function buildMarquee(id) {
  const items = ['HTML5','CSS3','Vanilla JS','Firebase','Canvas API','REST API','Node.js','Web Audio API','Responsive Design','localStorage','Git & GitHub','Open Source'];
  const el = document.getElementById(id); if(!el) return;
  let h=''; for(let i=0;i<2;i++) items.forEach(it=>{ h+=`<span class="marquee-item">${it}<span class="m-sep">◆</span></span>`; });
  el.innerHTML=h;
}

function renderFooter(id) {
  const el = document.getElementById(id); if(!el) return;
  el.innerHTML = `<footer class="site-footer">
    <div class="site-footer-inner">
      <div class="sf-top">
        <div>
          <div class="sf-brand">Dev<span>Vault</span></div>
          <p class="sf-tagline">Where student projects find their home. Built with ♥ at SIES Graduate School of Technology, Navi Mumbai.</p>
          <div class="sf-college">🎓 SIES GST · 2nd Year · 2024–25</div>
        </div>
        <div class="sf-col"><h4>Platform</h4><a href="index.html">Home</a><a href="explore.html">Explore</a><a href="leaderboard.html">Leaderboard</a></div>
        <div class="sf-col"><h4>Learn</h4><a href="blog.html">Blog</a><a href="tutorials.html">Tutorials</a><a href="faq.html">FAQ</a></div>
        <div class="sf-col"><h4>Team</h4><a href="about.html">About Us</a><a href="contact.html">Contact</a></div>
      </div>
      <hr class="sf-divider">
      <div class="sf-bottom">
        <span class="sf-copy">© 2025 DevVault — Built for students, by students of SIES GST.</span>
        <div class="sf-team-mini">
          ${TEAM_DATA.map(m=>`<div class="sf-team-av" style="background:${m.color}">${m.name[0]}</div>`).join('')}
          <span class="sf-team-label">Made by 4 students</span>
        </div>
        <span class="sf-copy">Milind · Keshav · Soham · Revant</span>
      </div>
    </div>
  </footer>`;
}

function renderNavbar(active) {
  const user = getUser();
  const pages = [
    {href:'index.html',    label:'Home',        key:'home'},
    {href:'explore.html',  label:'Explore',     key:'explore'},
    {href:'blog.html',     label:'Blog',        key:'blog'},
    {href:'tutorials.html',label:'Tutorials',   key:'tutorials'},
    {href:'leaderboard.html',label:'Leaderboard',key:'leaderboard'},
    {href:'about.html',    label:'About',       key:'about'},
  ];
  const navEl = document.getElementById('mainNav'); if(!navEl) return;
  navEl.innerHTML = `
    <a class="nav-logo" href="index.html">Dev<span class="nav-logo-dot">.</span>Vault</a>
    <div class="nav-links">
      ${pages.map(p=>`<a class="nav-link${active===p.key?' active':''}" href="${p.href}">${p.label}</a>`).join('')}
    </div>
    <div class="nav-right">
      <a class="nav-upload" href="upload.html">+ Upload</a>
      <div class="nav-notif" onclick="showToast('No new notifications.','info')">🔔<div class="notif-badge"></div></div>
      ${user
        ? `<div class="avatar-btn" id="navAvatar" onclick="toggleDropdown()">${user.initial}</div>`
        : `<a class="btn-coral" href="login.html" style="padding:.45rem 1.1rem;font-size:.82rem">Sign In</a>`
      }
    </div>`;
  if (user) renderDropdown(user);
}

function renderDropdown(user) {
  let dd = document.getElementById('profileDropdown');
  if (!dd) { dd = document.createElement('div'); dd.id='profileDropdown'; dd.className='profile-dropdown'; document.body.appendChild(dd); }
  dd.innerHTML = `
    <div class="pd-header">
      <div class="pd-av">${user.initial}</div>
      <div><div class="pd-name">${user.name}</div><div class="pd-email">${user.email||'developer'}</div></div>
    </div>
    <a class="pd-item" href="index.html">🏠 &nbsp;Home</a>
    <a class="pd-item" href="profile.html">👤 &nbsp;My Profile</a>
    <a class="pd-item" href="explore.html">🔍 &nbsp;Explore</a>
    <a class="pd-item" href="upload.html">⬆️ &nbsp;Upload</a>
    <div class="pd-sep"></div>
    <div class="pd-item danger" onclick="doLogout()">↩ &nbsp;Sign Out</div>`;
  document.addEventListener('click', e=>{ if(!e.target.closest('#profileDropdown')&&!e.target.closest('#navAvatar')) dd.classList.remove('open'); });
}

let _ddOpen = false;
function toggleDropdown() { _ddOpen=!_ddOpen; document.getElementById('profileDropdown')?.classList.toggle('open',_ddOpen); }

function doLogout() { clearUser(); window.location.href='login.html'; }

function requireAuth() {
  if (!getUser()) { window.location.href = 'login.html'; return false; }
  return true;
}
