// ── DEVVAULT — data.js (Firebase Edition) ──
// Real Firestore + Auth · SIES Graduate School of Technology
// Team: Milind Sahu · Keshav Sharma · Soham Puri · Revant Ganesh

const FIREBASE_VERSION = "10.12.0";
const B = `https://www.gstatic.com/firebasejs/${FIREBASE_VERSION}`;

// ── CONFIG ──
const firebaseConfig = {
  apiKey: "AIzaSyARex03ddn5FpbT3z5gz1Tjo87Y1S4eIlw",
  authDomain: "dev-vault-bd091.firebaseapp.com",
  projectId: "dev-vault-bd091",
  storageBucket: "dev-vault-bd091.firebasestorage.app",
  messagingSenderId: "975523092960",
  appId: "1:975523092960:web:175a6405ec58e0099e3385"
};

// ── DYNAMIC IMPORTS ──
const { initializeApp } = await import(`${B}/firebase-app.js`);
const { getAuth, onAuthStateChanged, signOut,
        createUserWithEmailAndPassword, signInWithEmailAndPassword,
        updateProfile, GoogleAuthProvider, signInWithPopup }
      = await import(`${B}/firebase-auth.js`);
const { getFirestore, collection, doc, addDoc, getDoc, getDocs,
        setDoc, updateDoc, deleteDoc, query, where, orderBy,
        limit, serverTimestamp, increment, arrayUnion, arrayRemove }
      = await import(`${B}/firebase-firestore.js`);

const app  = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db   = getFirestore(app);

// ── CONSTANTS ──
const COLORS = ['#ff5c35','#3b82f6','#10b981','#f59e0b','#8b5cf6','#f43f5e','#06b6d4'];
const TAG_STYLES = {
  HTML:'tag-coral', CSS:'tag-blue', JavaScript:'tag-mint',
  Firebase:'tag-amber', API:'tag-lavender', Canvas:'tag-rose',
  'Node.js':'tag-mint', default:'tag-default'
};

const TEAM_DATA = [
  { name:'Milind Sahu',   role:'Frontend Developer',   emoji:'💻', color:'#ff5c35',
    bio:'The person who makes everything look great in the browser. Milind handles all of DevVault\'s UI — from pixel-perfect layouts to smooth animations. He believes good code should also be beautiful code.',
    skills:['HTML','CSS','JavaScript','React'], fun:'Debugs CSS at 2 AM and calls it fun' },
  { name:'Keshav Sharma', role:'Backend Developer',    emoji:'⚙️', color:'#3b82f6',
    bio:'The engine behind DevVault. Keshav built the Firebase integration and all the Firestore data architecture. If data moves on this platform, Keshav made it happen.',
    skills:['Firebase','Node.js','Firestore','APIs'], fun:'Thinks in JSON, dreams in promises' },
  { name:'Soham Puri',    role:'Full Stack Developer', emoji:'🛠️', color:'#10b981',
    bio:'Soham bridges front and back. Equally comfortable writing CSS or a Firestore query. When something breaks at the seams, Soham fixes it — usually before anyone notices.',
    skills:['HTML','CSS','JavaScript','Firebase'], fun:'Commits code with haiku messages' },
  { name:'Revant Ganesh', role:'UI/UX Designer',       emoji:'🎨', color:'#8b5cf6',
    bio:'The reason DevVault looks the way it does. Revant designed the full visual identity — palette, typography, layouts, and every micro-interaction. He obsesses over spacing so you don\'t have to.',
    skills:['Figma','UI Design','UX Research','Prototyping'], fun:'Measures margins in millimetres' },
];

const SEED_PROJECTS = [
  { title:'Weather Dashboard',  desc:'Real-time weather app using OpenWeatherMap API with animated icons and 5-day forecast. Great starting point for API integration.', tags:['HTML','CSS','JavaScript','API'],  authorName:'Priya M.',  likes:142, img:'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=300&fit=crop', difficulty:'Intermediate' },
  { title:'Real-time Chat App', desc:'Firebase-powered chat with rooms, online presence indicators and emoji reactions. Learn Firestore real-time listeners.', tags:['Firebase','JavaScript','CSS'], authorName:'Rohan K.',  likes:98,  img:'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=300&fit=crop', difficulty:'Intermediate' },
  { title:'Snake Game Clone',   desc:'Classic snake on HTML Canvas. High score in localStorage. Clean code — perfect for understanding game loops.', tags:['Canvas','JavaScript','HTML'], authorName:'Dev S.',    likes:211, img:'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=600&h=300&fit=crop', difficulty:'Beginner' },
  { title:'Expense Tracker',    desc:'Track expenses by category with pie charts. Monthly budget alerts. Built entirely with vanilla JS.', tags:['JavaScript','CSS','HTML'], authorName:'Anjali T.', likes:76,  img:'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=300&fit=crop', difficulty:'Beginner' },
  { title:'Music Visualizer',   desc:'Web Audio API + Canvas visualizer. Upload any audio and watch colorful waveforms react to the beat.', tags:['Canvas','API','JavaScript'], authorName:'Karan P.',  likes:185, img:'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=300&fit=crop', difficulty:'Advanced' },
  { title:'Portfolio Template', desc:'Minimalist portfolio with smooth scroll, typed.js, contact form, fully responsive. Clone-and-customize ready.', tags:['HTML','CSS','JavaScript'], authorName:'Sneha R.',  likes:320, img:'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=300&fit=crop', difficulty:'Beginner' },
  { title:'Todo App Pro',       desc:'Drag & drop todo with labels, due dates, priority levels and dark mode.', tags:['JavaScript','CSS','HTML'], authorName:'Amit V.',   likes:64,  img:'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=300&fit=crop', difficulty:'Beginner' },
  { title:'QR Code Generator', desc:'Generate and download QR codes for any URL or text. Built with qrcode.js.', tags:['JavaScript','HTML','API'], authorName:'Nisha G.',  likes:88,  img:'https://images.unsplash.com/photo-1617997455403-41f333d44d5b?w=600&h=300&fit=crop', difficulty:'Beginner' },
  { title:'Blog REST API',      desc:'Node.js REST API with JWT auth, CRUD, pagination and MongoDB.', tags:['Node.js','API','JavaScript'], authorName:'Vijay M.',  likes:130, img:'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=300&fit=crop', difficulty:'Advanced' },
  { title:'E-commerce UI',      desc:'Responsive product listing + cart UI. Pure CSS Grid with smooth animations.', tags:['HTML','CSS','JavaScript'], authorName:'Pooja L.',  likes:203, img:'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=300&fit=crop', difficulty:'Intermediate' },
  { title:'Memory Card Game',   desc:'Flip-and-match game with timer, move counter and 3D CSS flip animations.', tags:['HTML','CSS','JavaScript'], authorName:'Arjun S.',  likes:115, img:'https://images.unsplash.com/photo-1606503153255-59d5e417b6a7?w=600&h=300&fit=crop', difficulty:'Beginner' },
  { title:'Markdown Editor',    desc:'Live markdown preview with syntax highlighting and export-to-HTML.', tags:['JavaScript','HTML','CSS'], authorName:'Riya T.',   likes:97,  img:'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=300&fit=crop', difficulty:'Intermediate' },
];

const BLOG_POSTS = [
  { title:'5 Projects That Will Actually Get You a Job',     cat:'Career',           img:'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop', excerpt:'Not another todo app. Here are the projects that stand out in interviews.',        author:'Milind S.',  time:'8 min' },
  { title:'Firebase in 30 Minutes — The Honest Guide',       cat:'Tutorial',          img:'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop', excerpt:'Skip the docs rabbit hole. Fastest path from zero to a working Firestore app.',   author:'Keshav S.',  time:'10 min' },
  { title:'Why Your CSS Looks Amateur (And How to Fix It)',  cat:'Design',            img:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop', excerpt:'Revant breaks down the 6 most common CSS mistakes with fixes.',                   author:'Revant G.',  time:'6 min' },
  { title:'How We Built DevVault in 3 Weeks',                cat:'Behind the Scenes', img:'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=200&fit=crop', excerpt:'The real story — bugs, late nights, arguments about button colors, and shipping.', author:'Soham P.',   time:'14 min' },
  { title:'JavaScript Promises: Stop Being Afraid',          cat:'JavaScript',        img:'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop', excerpt:'Plain-English async/await and promises with real working code examples.',         author:'Milind S.',  time:'9 min' },
];

const TUTORIALS = [
  { icon:'🌐', title:'Build Your First Website',  level:'Beginner',     color:'#ecfdf5', accent:'#10b981', desc:'Start from empty and end with a live personal site.', lessons:8,  time:'2h 30m' },
  { icon:'🎨', title:'CSS That Actually Works',   level:'Beginner',     color:'#eff6ff', accent:'#3b82f6', desc:'Flexbox, Grid, animations and responsive design.',      lessons:10, time:'3h' },
  { icon:'⚡', title:'JavaScript Fundamentals',  level:'Beginner',     color:'#fff0ec', accent:'#ff5c35', desc:'Variables to DOM — each concept with a mini project.',  lessons:14, time:'4h 30m' },
  { icon:'🔥', title:'Firebase for Students',    level:'Intermediate', color:'#fffbeb', accent:'#f59e0b', desc:'Auth, Firestore, hosting — no backend knowledge needed.',lessons:9,  time:'3h' },
  { icon:'🎮', title:'Build a Canvas Game',      level:'Intermediate', color:'#faf5ff', accent:'#8b5cf6', desc:'Complete browser game with collision & score tracking.', lessons:11, time:'3h 30m' },
  { icon:'🖥️', title:'Node.js REST API',         level:'Advanced',     color:'#fdf2f8', accent:'#f43f5e', desc:'Production API with Express, JWT auth and MongoDB.',     lessons:16, time:'6h' },
];

const TUT_PATH = [
  { name:'HTML Basics',                 meta:'Week 1 · 2h' },
  { name:'CSS Fundamentals & Flexbox',  meta:'Week 2 · 3h' },
  { name:'JavaScript Core Concepts',    meta:'Week 3–4 · 5h' },
  { name:'DOM Manipulation & Events',   meta:'Week 5 · 3h' },
  { name:'Fetch API & JSON',            meta:'Week 6 · 2h' },
  { name:'Firebase & Realtime Apps',    meta:'Week 7–8 · 4h' },
  { name:'Build & Deploy Your Project', meta:'Week 9 · 2h' },
];

const FAQS = [
  { q:'What is DevVault?',                    a:'DevVault is a student-built platform where developers upload mini-projects and share them. Built by four second-year students at SIES Graduate School of Technology using Firebase Firestore as the database.',                  cat:'general' },
  { q:'Is DevVault free?',                    a:'Completely free to browse, upload, and download.',                                                                                                                                                                            cat:'general' },
  { q:'Who can upload projects?',             a:'Anyone with an account. All skill levels welcome.',                                                                                                                                                                           cat:'upload' },
  { q:'How do I upload a project?',           a:'Click "+ Upload", fill in title, description, tags, and optional links, hit Publish.',                                                                                                                                        cat:'upload' },
  { q:'Can I download any project?',          a:'Yes! Click any card → Download button in the sidebar.',                                                                                                                                                                      cat:'download' },
  { q:'How do I create an account?',          a:'Click "Sign In" → enter your name, email and password. You can also sign in with Google.',                                                                                                                                    cat:'account' },
  { q:'Can I delete my project?',             a:'Yes — Profile → My Projects → delete button.',                                                                                                                                                                               cat:'account' },
  { q:'What database does DevVault use?',     a:'Firebase Firestore — a NoSQL cloud database by Google. User accounts are managed by Firebase Authentication.',                                                                                                               cat:'general' },
  { q:'Who built DevVault?',                  a:'Milind Sahu (Frontend), Keshav Sharma (Backend), Soham Puri (Full Stack), Revant Ganesh (UI/UX) — second-year students at SIES GST, Navi Mumbai.',                                                                           cat:'general' },
];

// ── FIRESTORE FUNCTIONS ──

async function seedProjects() {
  const snap = await getDocs(query(collection(db, 'projects'), limit(1)));
  if (!snap.empty) return;
  for (const p of SEED_PROJECTS) {
    await addDoc(collection(db, 'projects'), {
      ...p, authorId:'seed', likedBy:[], createdAt: serverTimestamp()
    });
  }
}

async function getProjects() {
  const snap = await getDocs(query(collection(db, 'projects'), orderBy('createdAt','desc')));
  return snap.docs.map(d => ({ id:d.id, ...d.data() }));
}

async function getProject(id) {
  const snap = await getDoc(doc(db, 'projects', id));
  return snap.exists() ? { id:snap.id, ...snap.data() } : null;
}

async function addProject(data) {
  return addDoc(collection(db, 'projects'), {
    ...data, likedBy:[], likes:0, createdAt:serverTimestamp()
  });
}

async function deleteProject(id) {
  return deleteDoc(doc(db, 'projects', id));
}

async function toggleLikeDB(projectId, userId) {
  const ref  = doc(db, 'projects', projectId);
  const snap = await getDoc(ref);
  if (!snap.exists()) return false;
  const alreadyLiked = (snap.data().likedBy || []).includes(userId);
  await updateDoc(ref, {
    likes:   increment(alreadyLiked ? -1 : 1),
    likedBy: alreadyLiked ? arrayRemove(userId) : arrayUnion(userId)
  });
  return !alreadyLiked;
}

async function getUserProfile(uid) {
  const snap = await getDoc(doc(db, 'users', uid));
  return snap.exists() ? snap.data() : null;
}

async function saveUserProfile(uid, data) {
  return setDoc(doc(db, 'users', uid), data, { merge:true });
}

async function getUserProjects(uid) {
  const snap = await getDocs(query(collection(db,'projects'), where('authorId','==',uid)));
  return snap.docs.map(d => ({ id:d.id, ...d.data() }));
}

// ── AUTH FUNCTIONS ──

async function signUpEmail(name, email, password) {
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(cred.user, { displayName: name });
  await saveUserProfile(cred.user.uid, {
    displayName: name, email, photoURL:'', bio:'', createdAt: serverTimestamp()
  });
  return cred.user;
}

async function signInEmail(email, password) {
  const cred = await signInWithEmailAndPassword(auth, email, password);
  return cred.user;
}

async function signInGoogle() {
  const cred = await signInWithPopup(auth, new GoogleAuthProvider());
  await saveUserProfile(cred.user.uid, {
    displayName: cred.user.displayName,
    email: cred.user.email,
    photoURL: cred.user.photoURL || '',
    bio: ''
  });
  return cred.user;
}

async function doSignOut() {
  await signOut(auth);
  window.location.href = 'login.html';
}

function onUser(cb) { return onAuthStateChanged(auth, cb); }

function authError(code) {
  const map = {
    'auth/user-not-found':       'No account with that email.',
    'auth/wrong-password':       'Incorrect password.',
    'auth/email-already-in-use': 'Email already registered.',
    'auth/invalid-email':        'Invalid email address.',
    'auth/weak-password':        'Password must be at least 6 characters.',
    'auth/popup-closed-by-user': 'Sign-in popup was closed.',
    'auth/invalid-credential':   'Wrong email or password.',
  };
  return map[code] || 'Something went wrong. Try again.';
}

// ── UI HELPERS ──

function hashStr(s) {
  let h = 0;
  for (let i = 0; i < (s||'').length; i++) h = Math.imul(31, h) + s.charCodeAt(i) | 0;
  return h;
}
function tagStyle(t)  { return TAG_STYLES[t] || TAG_STYLES.default; }
function diffBadge(d) {
  return d==='Beginner' ? '🟢 Beginner' : d==='Advanced' ? '🔴 Advanced' : '🟡 Intermediate';
}

function renderCard(p, likedIds = new Set()) {
  const name     = p.authorName || p.author || 'Anonymous';
  const initials = name.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
  const avColor  = COLORS[Math.abs(hashStr(p.id||p.title)) % COLORS.length];
  const tagsH    = (p.tags||[]).slice(0,3).map(t=>`<span class="tag ${tagStyle(t)}">${t}</span>`).join('');
  const isLiked  = likedIds.has(p.id);
  return `
  <a class="card" href="project.html?id=${p.id}">
    <div class="card-thumb">
      <img src="${p.img||'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=300&fit=crop'}" alt="${p.title}" loading="lazy">
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
        <span class="card-author-name">${name}</span>
      </div>
      <div class="card-actions">
        <button class="like-btn${isLiked?' liked':''}" data-id="${p.id}"
          onclick="event.preventDefault();window._handleLike&&window._handleLike(this,'${p.id}')">
          ${isLiked?'♥':'♡'} <span class="lc">${p.likes||0}</span>
        </button>
        <button class="dl-btn"
          onclick="event.preventDefault();window.fakeDownload('${(p.title||'').replace(/'/g,"\\'")}')">⬇</button>
      </div>
    </div>
  </a>`;
}

function fakeDownload(title) {
  const html = `<!DOCTYPE html><html><head><title>${title} — DevVault</title>
<style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:sans-serif;background:#fdf8f2;color:#1a1208;display:flex;align-items:center;justify-content:center;min-height:100vh;flex-direction:column;gap:1rem;padding:2rem;text-align:center}h1{font-size:2rem;font-weight:900}span{color:#ff5c35}p{color:#6b5c44;max-width:400px;line-height:1.7}</style>
</head><body><div style="font-size:4rem">🚀</div><h1>${title}</h1>
<p>Downloaded from <span>DevVault</span> — built by Milind, Keshav, Soham &amp; Revant @ SIES GST.</p>
</body></html>`;
  const blob = new Blob([html],{type:'text/html'});
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href=url; a.download=title.replace(/\s+/g,'-').toLowerCase()+'.html'; a.click();
  URL.revokeObjectURL(url);
  showToast(`⬇ Downloading "${title}"…`,'success');
}

function showToast(msg, type='success') {
  let area = document.getElementById('toastArea');
  if (!area) { area=document.createElement('div'); area.id='toastArea'; area.className='toast-area'; document.body.appendChild(area); }
  const el = document.createElement('div');
  el.className=`toast ${type}`; el.textContent=msg; area.appendChild(el);
  setTimeout(()=>{ el.style.transition='opacity .3s,transform .3s'; el.style.opacity='0'; el.style.transform='translateY(8px)'; setTimeout(()=>el.remove(),300); },3200);
}

function buildMarquee(id) {
  const items=['HTML5','CSS3','Vanilla JS','Firebase','Firestore','Canvas API','REST API','Node.js','Auth','Git & GitHub','Open Source','Vercel'];
  const el=document.getElementById(id); if(!el) return;
  let h=''; for(let i=0;i<2;i++) items.forEach(it=>{h+=`<span class="marquee-item">${it}<span class="m-sep">◆</span></span>`;});
  el.innerHTML=h;
}

function renderFooter(id) {
  const el=document.getElementById(id); if(!el) return;
  el.innerHTML=`<footer class="site-footer"><div class="site-footer-inner">
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
      <span class="sf-copy">© 2025 DevVault — Powered by Firebase · Built at SIES GST.</span>
      <div class="sf-team-mini">
        ${TEAM_DATA.map(m=>`<div class="sf-team-av" style="background:${m.color}">${m.name[0]}</div>`).join('')}
        <span class="sf-team-label">Made by 4 students</span>
      </div>
      <span class="sf-copy">Milind · Keshav · Soham · Revant</span>
    </div>
  </div></footer>`;
}

function renderNavbar(active, user) {
  const el=document.getElementById('mainNav'); if(!el) return;
  const pages=[
    {href:'index.html',label:'Home',key:'home'},
    {href:'explore.html',label:'Explore',key:'explore'},
    {href:'blog.html',label:'Blog',key:'blog'},
    {href:'tutorials.html',label:'Tutorials',key:'tutorials'},
    {href:'leaderboard.html',label:'Leaderboard',key:'leaderboard'},
    {href:'about.html',label:'About',key:'about'},
  ];
  const avatar = user
    ? `<div class="avatar-btn" id="navAvatar" onclick="toggleDropdown()">${(user.displayName||user.email||'U')[0].toUpperCase()}</div>`
    : `<a class="btn-coral" href="login.html" style="padding:.45rem 1.1rem;font-size:.82rem;text-decoration:none">Sign In</a>`;
  el.innerHTML=`
    <a class="nav-logo" href="index.html">Dev<span class="nav-logo-dot">.</span>Vault</a>
    <div class="nav-links">${pages.map(p=>`<a class="nav-link${active===p.key?' active':''}" href="${p.href}">${p.label}</a>`).join('')}</div>
    <div class="nav-right">
      <a class="nav-upload" href="upload.html">+ Upload</a>
      <div class="nav-notif" onclick="showToast('No new notifications.','info')">🔔<div class="notif-badge"></div></div>
      ${avatar}
    </div>`;
  if(user) _buildDropdown(user);
}

function _buildDropdown(user) {
  let dd=document.getElementById('profileDropdown');
  if(!dd){dd=document.createElement('div');dd.id='profileDropdown';dd.className='profile-dropdown';document.body.appendChild(dd);}
  const name=user.displayName||user.email||'Developer';
  dd.innerHTML=`
    <div class="pd-header">
      <div class="pd-av">${name[0].toUpperCase()}</div>
      <div><div class="pd-name">${name}</div><div class="pd-email">${user.email||''}</div></div>
    </div>
    <a class="pd-item" href="index.html">🏠 &nbsp;Home</a>
    <a class="pd-item" href="profile.html">👤 &nbsp;My Profile</a>
    <a class="pd-item" href="explore.html">🔍 &nbsp;Explore</a>
    <a class="pd-item" href="upload.html">⬆️ &nbsp;Upload</a>
    <div class="pd-sep"></div>
    <div class="pd-item danger" id="signOutBtn">↩ &nbsp;Sign Out</div>`;
  document.getElementById('signOutBtn').onclick=doSignOut;
  document.addEventListener('click',e=>{if(!e.target.closest('#profileDropdown')&&!e.target.closest('#navAvatar'))dd.classList.remove('open');});
}

let _ddOpen=false;
function toggleDropdown(){_ddOpen=!_ddOpen;document.getElementById('profileDropdown')?.classList.toggle('open',_ddOpen);}

// ── GLOBAL EXPOSE (for inline onclick in non-module scripts) ──
window.showToast     = showToast;
window.fakeDownload  = fakeDownload;
window.toggleDropdown= toggleDropdown;

export {
  auth, db,
  seedProjects, getProjects, getProject, addProject, deleteProject,
  toggleLikeDB, getUserProfile, saveUserProfile, getUserProjects,
  signUpEmail, signInEmail, signInGoogle, doSignOut, onUser, authError,
  TEAM_DATA, BLOG_POSTS, TUTORIALS, TUT_PATH, FAQS, COLORS, TAG_STYLES,
  renderCard, renderNavbar, renderFooter, buildMarquee,
  tagStyle, diffBadge, fakeDownload, showToast, hashStr, toggleDropdown,
};
