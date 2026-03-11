// ─── JOB DATA ───────────────────────────────────────────────
const ALL_JOBS = [
  {
    title: 'Frontend Developer',
    company: 'TechCorp',
    logo: 'TC',
    location: 'Remote',
    type: 'Full-time',
    category: 'Technology',
    salary: '$90K–$130K',
    badge: 'hot',
    badgeLabel: '🔥 Hot',
    skills: ['React', 'TypeScript', 'CSS'],
    posted: '2 days ago',
    desc: 'Build beautiful, high-performance web applications for millions of users worldwide.',
  },
  {
    title: 'Data Analyst',
    company: 'DataWorks',
    logo: 'DW',
    location: 'New York',
    type: 'Full-time',
    category: 'Technology',
    salary: '$75K–$100K',
    badge: 'new',
    badgeLabel: '✨ New',
    skills: ['Python', 'SQL', 'Tableau'],
    posted: '1 day ago',
    desc: 'Turn complex datasets into actionable insights that drive business decisions.',
  },
  {
    title: 'UI/UX Designer',
    company: 'DesignHub',
    logo: 'DH',
    location: 'Remote',
    type: 'Full-time',
    category: 'Design',
    salary: '$80K–$115K',
    badge: 'featured',
    badgeLabel: '⭐ Featured',
    skills: ['Figma', 'Prototyping', 'User Research'],
    posted: '3 days ago',
    desc: 'Create stunning, user-centered designs for cutting-edge digital products.',
  },
  {
    title: 'Backend Engineer',
    company: 'CloudBase',
    logo: 'CB',
    location: 'San Francisco',
    type: 'Full-time',
    category: 'Technology',
    salary: '$120K–$160K',
    badge: 'hot',
    badgeLabel: '🔥 Hot',
    skills: ['Node.js', 'PostgreSQL', 'AWS'],
    posted: '5 days ago',
    desc: 'Build and scale the infrastructure powering millions of cloud-based applications.',
  },
  {
    title: 'Digital Marketing Manager',
    company: 'GrowthLab',
    logo: 'GL',
    location: 'London',
    type: 'Full-time',
    category: 'Marketing',
    salary: '$65K–$90K',
    badge: 'new',
    badgeLabel: '✨ New',
    skills: ['SEO', 'Google Ads', 'Analytics'],
    posted: '4 hours ago',
    desc: 'Drive growth through data-driven digital marketing campaigns and strategies.',
  },
  {
    title: 'Product Manager',
    company: 'Launchpad',
    logo: 'LP',
    location: 'Remote',
    type: 'Full-time',
    category: 'Technology',
    salary: '$110K–$150K',
    badge: 'featured',
    badgeLabel: '⭐ Featured',
    skills: ['Strategy', 'Roadmapping', 'Agile'],
    posted: '1 week ago',
    desc: 'Lead product vision and strategy for a fast-growing B2B SaaS platform.',
  },
  {
    title: 'DevOps Engineer',
    company: 'InfraStack',
    logo: 'IS',
    location: 'Remote',
    type: 'Full-time',
    category: 'Technology',
    salary: '$100K–$140K',
    badge: 'remote',
    badgeLabel: '🏠 Remote',
    skills: ['Docker', 'Kubernetes', 'Terraform'],
    posted: '3 days ago',
    desc: 'Architect and maintain robust CI/CD pipelines and cloud infrastructure.',
  },
  {
    title: 'Content Writer',
    company: 'WordFlow',
    logo: 'WF',
    location: 'Remote',
    type: 'Part-time',
    category: 'Marketing',
    salary: '$40K–$55K',
    badge: 'new',
    badgeLabel: '✨ New',
    skills: ['Copywriting', 'SEO', 'WordPress'],
    posted: '6 hours ago',
    desc: 'Craft compelling content that engages audiences and drives organic traffic.',
  },
  {
    title: 'Financial Analyst',
    company: 'WealthEdge',
    logo: 'WE',
    location: 'New York',
    type: 'Full-time',
    category: 'Finance',
    salary: '$85K–$110K',
    badge: 'featured',
    badgeLabel: '⭐ Featured',
    skills: ['Excel', 'Financial Modeling', 'Bloomberg'],
    posted: '2 weeks ago',
    desc: 'Analyze financial data and build models to support strategic investment decisions.',
  },
  {
    title: 'React Native Developer',
    company: 'AppFactory',
    logo: 'AF',
    location: 'Berlin',
    type: 'Contract',
    category: 'Technology',
    salary: '$80K–$110K',
    badge: 'hot',
    badgeLabel: '🔥 Hot',
    skills: ['React Native', 'JavaScript', 'iOS/Android'],
    posted: '5 days ago',
    desc: 'Build cross-platform mobile apps for clients in health, fintech, and e-commerce.',
  },
  {
    title: 'ML Engineer',
    company: 'AIForge',
    logo: 'AI',
    location: 'Remote',
    type: 'Full-time',
    category: 'Technology',
    salary: '$130K–$180K',
    badge: 'hot',
    badgeLabel: '🔥 Hot',
    skills: ['Python', 'TensorFlow', 'PyTorch'],
    posted: '1 day ago',
    desc: 'Design and train machine learning models that power next-generation AI products.',
  },
  {
    title: 'Graphic Designer',
    company: 'BrandCraft',
    logo: 'BC',
    location: 'London',
    type: 'Full-time',
    category: 'Design',
    salary: '$50K–$70K',
    badge: 'new',
    badgeLabel: '✨ New',
    skills: ['Illustrator', 'Photoshop', 'Branding'],
    posted: '3 days ago',
    desc: 'Create visual identities and brand assets for world-class global brands.',
  },
  {
    title: 'Sales Development Rep',
    company: 'SellSmart',
    logo: 'SS',
    location: 'San Francisco',
    type: 'Full-time',
    category: 'Marketing',
    salary: '$55K–$80K',
    badge: 'remote',
    badgeLabel: '🏠 Remote',
    skills: ['CRM', 'Cold Outreach', 'HubSpot'],
    posted: '1 week ago',
    desc: 'Drive top-of-funnel pipeline for a high-growth SaaS company.',
  },
  {
    title: 'UX Researcher',
    company: 'InsightLab',
    logo: 'IL',
    location: 'Remote',
    type: 'Full-time',
    category: 'Design',
    salary: '$85K–$120K',
    badge: 'featured',
    badgeLabel: '⭐ Featured',
    skills: ['User Interviews', 'Usability Testing', 'Data Analysis'],
    posted: '4 days ago',
    desc: 'Uncover deep user insights that guide design and product strategy.',
  },
  {
    title: 'Python Backend Developer',
    company: 'PipeDream',
    logo: 'PD',
    location: 'Remote',
    type: 'Contract',
    category: 'Technology',
    salary: '$90K–$120K',
    badge: 'remote',
    badgeLabel: '🏠 Remote',
    skills: ['Python', 'FastAPI', 'Redis'],
    posted: '1 week ago',
    desc: 'Build fast, scalable backend APIs powering a next-gen automation platform.',
  },
  {
    title: 'Finance Manager',
    company: 'ClearBooks',
    logo: 'CB',
    location: 'London',
    type: 'Full-time',
    category: 'Finance',
    salary: '$95K–$125K',
    badge: 'new',
    badgeLabel: '✨ New',
    skills: ['GAAP', 'Forecasting', 'ERP'],
    posted: '2 days ago',
    desc: 'Lead financial planning and reporting for a rapidly scaling fintech company.',
  },
];

// ─── BADGE COLORS ──────────────────────────────────────────
function getBadgeClass(badge) {
  const map = { hot: 'badge-hot', new: 'badge-new', featured: 'badge-featured', remote: 'badge-remote' };
  return map[badge] || 'badge-new';
}

// ─── RENDER FUNCTIONS ──────────────────────────────────────
function createJobCard(job, index, delay = 0) {
  return `
    <div class="job-card" style="animation-delay:${delay}s;" onclick="window.location.href='job-detail.html?id=${index}'">
      <div class="job-card-top">
        <div class="company-logo">${job.logo}</div>
        <span class="job-badge ${getBadgeClass(job.badge)}">${job.badgeLabel}</span>
      </div>
      <a href="job-detail.html?id=${index}" class="job-title" onclick="event.stopPropagation()">${job.title}</a>
      <div class="job-company">
        <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
        ${job.company}
      </div>
      <div class="job-meta">
        <span class="job-tag">
          <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          ${job.location}
        </span>
        <span class="job-tag">
          <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
          ${job.type}
        </span>
        ${job.skills.map(s => `<span class="job-tag">${s}</span>`).join('')}
      </div>
      <div class="job-footer">
        <span class="job-salary">${job.salary}</span>
        <span class="job-posted">${job.posted}</span>
      </div>
    </div>
  `;
}

function renderFeaturedJobs() {
  const container = document.getElementById('featuredJobs');
  if (!container) return;
  const featured = ALL_JOBS.filter(j => j.badge === 'featured' || j.badge === 'hot').slice(0, 6);
  container.innerHTML = featured.map((job, i) => createJobCard(job, ALL_JOBS.indexOf(job), i * 0.08)).join('');
}

function renderAllJobs() {
  const container = document.getElementById('jobGrid');
  if (!container) return;
  container.innerHTML = ALL_JOBS.map((job, i) => createJobCard(job, i, i * 0.04)).join('');
  document.getElementById('jobCount').textContent = ALL_JOBS.length;
}

// ─── FILTER ────────────────────────────────────────────────
function filterJobs() {
  const q = (document.getElementById('searchInput')?.value || '').toLowerCase();
  const cat = document.getElementById('categoryFilter')?.value || '';
  const type = document.getElementById('typeFilter')?.value || '';
  const loc = document.getElementById('locationFilter')?.value || '';

  const filtered = ALL_JOBS.filter(job => {
    const matchQ = !q || job.title.toLowerCase().includes(q) || job.company.toLowerCase().includes(q) || job.skills.some(s => s.toLowerCase().includes(q)) || job.desc.toLowerCase().includes(q);
    const matchCat = !cat || job.category === cat;
    const matchType = !type || job.type === type;
    const matchLoc = !loc || job.location.toLowerCase().includes(loc.toLowerCase());
    return matchQ && matchCat && matchType && matchLoc;
  });

  const container = document.getElementById('jobGrid');
  const empty = document.getElementById('emptyState');
  const count = document.getElementById('jobCount');
  if (!container) return;

  if (filtered.length === 0) {
    container.innerHTML = '';
    if (empty) empty.style.display = 'block';
    if (count) count.textContent = '0';
  } else {
    if (empty) empty.style.display = 'none';
    container.innerHTML = filtered.map((job, i) => createJobCard(job, ALL_JOBS.indexOf(job), i * 0.04)).join('');
    if (count) count.textContent = filtered.length;
  }
}

// ─── TOAST ─────────────────────────────────────────────────
function showToast(msg, color = 'var(--green)') {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  if (!toast) return;
  toastMsg.textContent = msg;
  toast.style.borderColor = color;
  toast.style.boxShadow = `0 4px 20px ${color}40`;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

// ─── SCROLL ANIMATIONS ─────────────────────────────────────
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
}

// ─── NAVBAR SCROLL ─────────────────────────────────────────
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// ─── COUNTER ANIMATION ─────────────────────────────────────
function animateCounters() {
  document.querySelectorAll('.stat-number').forEach(el => {
    const target = el.textContent;
    const num = parseFloat(target.replace(/[^0-9.]/g, ''));
    if (!num) return;
    const suffix = target.replace(/[0-9.]/g, '');
    let start = 0;
    const step = num / 50;
    const timer = setInterval(() => {
      start += step;
      if (start >= num) { start = num; clearInterval(timer); }
      el.textContent = (Number.isInteger(num) ? Math.round(start) : start.toFixed(1)) + suffix;
    }, 30);
  });
}

// Trigger counter when hero stats visible
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounters();
      statsObserver.disconnect();
    }
  });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
  const statsBar = document.querySelector('.stats-bar');
  if (statsBar) statsObserver.observe(statsBar);
});
