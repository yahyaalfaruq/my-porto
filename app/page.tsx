'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  T,
  LANG_COLORS,
  REPO_META,
  FLAGSHIP_PROJECTS,
  LangCode,
  RepoItem,
} from './data/portfolioData';

const GH_USER = 'yahyaalfaruq';
const GH_CACHE_KEY = `gh_repos_next_v5_${GH_USER}`;
const GH_CACHE_TTL = 1000 * 60 * 30;
const INITIAL_VISIBLE = 6;

interface GhProfile {
  login: string;
  name?: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
}

function prettyRepoName(name: string): string {
  return name
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function relativeDate(iso: string): string {
  const diff = (Date.now() - new Date(iso).getTime()) / 1000;
  const units: [number, string][] = [
    [31536000, 'y'],
    [2592000, 'mo'],
    [604800, 'w'],
    [86400, 'd'],
    [3600, 'h'],
    [60, 'm'],
  ];
  for (const [sec, label] of units) {
    if (diff >= sec) return `${Math.floor(diff / sec)}${label} ago`;
  }
  return 'just now';
}

export default function PortfolioPage() {
  const [lang, setLang] = useState<LangCode>('en');
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Typewriter state
  const [twText, setTwText] = useState('');

  // GitHub & Projects state
  const [profile, setProfile] = useState<GhProfile | null>(null);
  const [repos, setRepos] = useState<RepoItem[]>(FLAGSHIP_PROJECTS);
  const [reposLoading, setReposLoading] = useState(true);
  const [reposError, setReposError] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [showAllProjects, setShowAllProjects] = useState(false);

  // Contact form state
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Refs
  const heroWrapRef = useRef<HTMLDivElement | null>(null);
  const langSwitcherRef = useRef<HTMLDivElement | null>(null);

  const dict = T[lang] || T.en;

  // Initialize saved theme & language
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setLightMode(true);
      document.body.classList.add('light-mode');
    }
    const savedLang = localStorage.getItem('lang') as LangCode | null;
    if (savedLang && T[savedLang]) {
      setLang(savedLang);
      document.documentElement.lang = savedLang;
      document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr';
    }
  }, []);

  // Sync theme & language to DOM
  useEffect(() => {
    document.body.classList.toggle('light-mode', lightMode);
    localStorage.setItem('theme', lightMode ? 'light' : 'dark');
  }, [lightMode]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('lang', lang);
  }, [lang]);

  // Typewriter loop
  useEffect(() => {
    const phrases: string[] =
      (T[lang]?.tw_phrases as string[]) || T.en.tw_phrases;
    let pi = 0;
    let ci = 0;
    let deleting = false;
    let timeoutId: number;

    const tick = () => {
      const word = phrases[pi % phrases.length] || '';
      if (!deleting) {
        ci++;
        setTwText(word.slice(0, ci));
        if (ci === word.length) {
          deleting = true;
          timeoutId = window.setTimeout(tick, 2200);
          return;
        }
        timeoutId = window.setTimeout(tick, 75);
      } else {
        ci--;
        setTwText(word.slice(0, ci));
        if (ci === 0) {
          deleting = false;
          pi = (pi + 1) % phrases.length;
          timeoutId = window.setTimeout(tick, 350);
          return;
        }
        timeoutId = window.setTimeout(tick, 35);
      }
    };

    timeoutId = window.setTimeout(tick, 300);
    return () => window.clearTimeout(timeoutId);
  }, [lang]);

  // Header scroll & active section spy
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sectionIds = [
        'home',
        'about',
        'skills',
        'experience',
        'projects',
        'testimonials',
        'contact',
      ];
      let current = 'home';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 220) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    const onDocClick = (e: MouseEvent) => {
      if (
        langSwitcherRef.current &&
        !langSwitcherRef.current.contains(e.target as Node)
      ) {
        setLangMenuOpen(false);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('click', onDocClick);
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('click', onDocClick);
    };
  }, []);

  // Interactive draggable hero image (moves photo + 3 badges together and snaps back cleanly)
  useEffect(() => {
    const wrap = heroWrapRef.current;
    if (!wrap) return;
    let dragging = false;
    let activePointerId: number | null = null;
    let startX = 0;
    let startY = 0;

    const resetPosition = () => {
      if (!dragging && activePointerId === null) return;
      dragging = false;
      if (activePointerId !== null) {
        try {
          if (wrap.hasPointerCapture(activePointerId)) {
            wrap.releasePointerCapture(activePointerId);
          }
        } catch {
          // ignore
        }
        activePointerId = null;
      }
      wrap.classList.remove('is-dragging');
      wrap.style.transition =
        'transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)';
      wrap.style.transform = 'translate3d(0px, 0px, 0px) rotate(0deg)';
    };

    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      e.preventDefault();
      dragging = true;
      activePointerId = e.pointerId;
      startX = e.clientX;
      startY = e.clientY;
      wrap.classList.add('is-dragging');
      wrap.style.transition = 'none';
      try {
        wrap.setPointerCapture(e.pointerId);
      } catch {
        // ignore
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!dragging || e.pointerId !== activePointerId) return;
      if (e.pointerType === 'mouse' && (e.buttons & 1) === 0) {
        resetPosition();
        return;
      }
      const rawDx = e.clientX - startX;
      const rawDy = e.clientY - startY;
      const maxRadius = 100;
      const dist = Math.hypot(rawDx, rawDy);
      const scale =
        dist > maxRadius ? (maxRadius + (dist - maxRadius) * 0.25) / dist : 1;
      const dx = rawDx * scale;
      const dy = rawDy * scale;
      wrap.style.transform = `translate3d(${dx.toFixed(1)}px, ${dy.toFixed(1)}px, 0px) rotate(${(dx * 0.035).toFixed(2)}deg)`;
    };

    const onPointerUp = () => {
      resetPosition();
    };

    wrap.addEventListener('pointerdown', onPointerDown);
    wrap.addEventListener('pointermove', onPointerMove);
    wrap.addEventListener('pointerup', onPointerUp);
    wrap.addEventListener('pointercancel', onPointerUp);
    wrap.addEventListener('lostpointercapture', onPointerUp);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('blur', onPointerUp);

    return () => {
      wrap.removeEventListener('pointerdown', onPointerDown);
      wrap.removeEventListener('pointermove', onPointerMove);
      wrap.removeEventListener('pointerup', onPointerUp);
      wrap.removeEventListener('pointercancel', onPointerUp);
      wrap.removeEventListener('lostpointercapture', onPointerUp);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('blur', onPointerUp);
    };
  }, []);

  // Load GitHub Repositories
  const fetchGithubData = async (bustCache = false) => {
    setReposLoading(true);
    setReposError(false);
    try {
      if (!bustCache) {
        const cachedRaw = sessionStorage.getItem(GH_CACHE_KEY);
        if (cachedRaw) {
          const parsed = JSON.parse(cachedRaw);
          if (Date.now() - parsed.ts < GH_CACHE_TTL) {
            setProfile(parsed.profile);
            setRepos(parsed.repos);
            setReposLoading(false);
            return;
          }
        }
      }

      const [uRes, rRes] = await Promise.all([
        fetch(`https://api.github.com/users/${GH_USER}`, {
          headers: { Accept: 'application/vnd.github+json' },
        }),
        fetch(
          `https://api.github.com/users/${GH_USER}/repos?per_page=100&sort=updated`,
          {
            headers: { Accept: 'application/vnd.github+json' },
          }
        ),
      ]);

      if (!uRes.ok || !rRes.ok) throw new Error('GitHub API status error');
      const uJson = await uRes.json();
      const rJson = await rRes.json();

      const profData: GhProfile = {
        login: uJson.login,
        name: uJson.name,
        avatar_url: uJson.avatar_url,
        html_url: uJson.html_url,
        public_repos: uJson.public_repos,
        followers: uJson.followers,
      };

      const cleaned: RepoItem[] = rJson
        .filter(
          (r: any) =>
            !r.archived &&
            r.name.toLowerCase() !== GH_USER.toLowerCase() &&
            r.name.toLowerCase() !== 'my-porto'
        )
        .map((r: any) => {
          const meta = REPO_META[r.name] || null;
          return {
            name: r.name,
            full_name: r.full_name,
            html_url: r.html_url,
            description: r.description || (meta ? meta.desc : ''),
            homepage: r.homepage,
            language: r.language,
            topics:
              Array.isArray(r.topics) && r.topics.length
                ? r.topics
                : meta
                ? meta.topics
                : [],
            fork: r.fork,
            size: r.size,
            stars: r.stargazers_count || 0,
            forks: r.forks_count || 0,
            pushed_at: r.pushed_at,
            created_at: r.created_at,
          };
        })
        .sort((a: RepoItem, b: RepoItem) => {
          if (a.fork !== b.fork) return a.fork ? 1 : -1;
          const aScore =
            (a.homepage ? 3 : 0) +
            (a.description ? 2 : 0) +
            Math.min(a.stars, 5);
          const bScore =
            (b.homepage ? 3 : 0) +
            (b.description ? 2 : 0) +
            Math.min(b.stars, 5);
          if (bScore !== aScore) return bScore - aScore;
          return (
            new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
          );
        });

      const merged = [...FLAGSHIP_PROJECTS, ...cleaned];
      sessionStorage.setItem(
        GH_CACHE_KEY,
        JSON.stringify({ ts: Date.now(), profile: profData, repos: merged })
      );
      setProfile(profData);
      setRepos(merged);
    } catch {
      setRepos(FLAGSHIP_PROJECTS);
      setReposError(false);
    } finally {
      setReposLoading(false);
    }
  };

  useEffect(() => {
    fetchGithubData(false);
  }, []);

  // Compute language filters
  const topLanguages = React.useMemo(() => {
    const counts: Record<string, number> = {};
    repos.forEach((r) => {
      if (r.language) counts[r.language] = (counts[r.language] || 0) + 1;
    });
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6);
  }, [repos]);

  const filteredRepos = React.useMemo(() => {
    if (activeFilter === 'all') return repos;
    return repos.filter((r) => r.language === activeFilter);
  }, [repos, activeFilter]);

  const visibleRepos = showAllProjects
    ? filteredRepos
    : filteredRepos.slice(0, INITIAL_VISIBLE);

  const totalStars = React.useMemo(
    () => repos.reduce((sum, r) => sum + (r.stars || 0), 0),
    [repos]
  );

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
    const form = e.currentTarget;
    setTimeout(() => {
      form.reset();
      setFormSubmitted(false);
    }, 3000);
  };

  const langMeta: Record<LangCode, { label: string }> = {
    en: { label: 'EN' },
    id: { label: 'ID' },
    ar: { label: 'AR' },
  };

  return (
    <>
      {/* Header */}
      <header id="header" className={scrolled ? 'scrolled' : ''}>
        <div className="container">
          <nav>
            <a href="#home" className="logo" aria-label="Yahya Al Faruq">
              <span className="logo-mark" aria-hidden="true">
                <svg
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="2"
                    y="2"
                    width="32"
                    height="32"
                    rx="8"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M11.5 11.5L18 19.2L24.5 11.5M18 19.2V25.5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="25.5" cy="24.5" r="1.9" fill="currentColor" />
                </svg>
              </span>
              <span className="logo-wordmark">
                YAF<span className="logo-dot"></span>
              </span>
            </a>

            <ul className={`nav-links ${mobileNavOpen ? 'open' : ''}`}>
              {[
                { id: 'home', label: dict.nav_home },
                { id: 'about', label: dict.nav_about },
                { id: 'skills', label: dict.nav_skills },
                { id: 'experience', label: dict.nav_exp },
                { id: 'projects', label: dict.nav_proj },
                { id: 'testimonials', label: dict.nav_rev },
                { id: 'contact', label: dict.nav_con },
              ].map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`nav-link ${
                      activeSection === item.id ? 'active' : ''
                    }`}
                    onClick={() => setMobileNavOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="nav-controls">
              {/* Language Switcher */}
              <div
                className={`lang-switcher ${langMenuOpen ? 'open' : ''}`}
                ref={langSwitcherRef}
              >
                <button
                  type="button"
                  className={`lang-btn ${langMenuOpen ? 'open' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLangMenuOpen((v) => !v);
                  }}
                >
                  <span id="langLabel">{langMeta[lang].label}</span>
                  <i className="fas fa-chevron-down"></i>
                </button>
                <div className={`lang-menu ${langMenuOpen ? 'open' : ''}`}>
                  {(
                    [
                      { code: 'en', text: 'English (EN)' },
                      { code: 'id', text: 'Indonesia (ID)' },
                      { code: 'ar', text: 'العربية (AR)' },
                    ] as { code: LangCode; text: string }[]
                  ).map((opt) => (
                    <button
                      type="button"
                      key={opt.code}
                      className={`lang-opt ${
                        lang === opt.code ? 'active' : ''
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setLang(opt.code);
                        setLangMenuOpen(false);
                      }}
                    >
                      {opt.text}
                    </button>
                  ))}
                </div>
              </div>

              {/* Theme Toggle */}
              <button
                type="button"
                className="theme-toggle"
                title="Toggle theme"
                onClick={() => setLightMode((v) => !v)}
              >
                <i className={`fas ${lightMode ? 'fa-moon' : 'fa-sun'}`}></i>
              </button>

              <Link href="/resume" className="btn btn-outline" id="resumeBtn">
                <i className="fas fa-file-lines"></i>{' '}
                <span>{dict.nav_resume}</span>
              </Link>

              <button
                type="button"
                className={`hamburger ${mobileNavOpen ? 'open' : ''}`}
                aria-label="Toggle menu"
                onClick={() => setMobileNavOpen((v) => !v)}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              <span>{dict.hero_badge}</span>
            </div>
            <h1>
              <span>{dict.hero_prefix}</span>
              <span className="gradient-text">{dict.hero_name}</span>
            </h1>
            <div className="typewriter-wrapper">
              <span className="tw-prefix">{dict.tw_prefix}</span>
              <span className="typewriter">{twText}</span>
            </div>
            <p className="hero-desc">{dict.hero_desc}</p>
            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary">
                <span>{dict.cta_work}</span>{' '}
                <i className="fas fa-arrow-right"></i>
              </a>
              <a href="#contact" className="btn btn-ghost">
                {dict.cta_talk}
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">50</span>
                <span>+</span>
                <span className="stat-label">{dict.stat_proj}</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <span className="stat-number">3</span>
                <span>+</span>
                <span className="stat-label">{dict.stat_yrs}</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <span className="stat-number">15</span>
                <span>+</span>
                <span className="stat-label">{dict.stat_cli}</span>
              </div>
            </div>
          </div>

          <div className="hero-image" ref={heroWrapRef}>
            <img
              src="/assets/profile.png"
              alt="Yahya Al Faruq"
              id="heroImg"
              draggable={false}
              onDragStart={(e) => e.preventDefault()}
            />
            <div className="floating-badge badge-react">
              <i className="fab fa-react"></i> React &amp; TS
            </div>
            <div className="floating-badge badge-node">
              <i className="fab fa-node-js"></i> Node.js
            </div>
            <div className="floating-badge badge-laravel">
              <i className="fab fa-laravel"></i> Laravel 12
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{dict.about_tag}</span>
            <h2>{dict.about_h2}</h2>
            <p>{dict.about_sub}</p>
          </div>
          <div className="about-content">
            <div className="about-image-wrap">
              <img
                src="/assets/about.png"
                alt="Yahya Al Faruq"
                className="about-img"
              />
              <div className="about-card experience-card">
                <i className="fas fa-graduation-cap"></i>
                <div>
                  <strong>{dict.about_c1t}</strong>
                  <span>{dict.about_c1s}</span>
                </div>
              </div>
              <div className="about-card projects-card">
                <i className="fas fa-code-branch"></i>
                <div>
                  <strong>{dict.about_c2t}</strong>
                  <span>{dict.about_c2s}</span>
                </div>
              </div>
            </div>
            <div className="about-text">
              <h3>{dict.about_h3}</h3>
              <p dangerouslySetInnerHTML={{ __html: dict.about_p1 }} />
              <p dangerouslySetInnerHTML={{ __html: dict.about_p2 }} />
              <div className="about-highlights">
                <div className="highlight-item">
                  <i className="fas fa-check"></i>
                  <span>{dict.about_hi1}</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-check"></i>
                  <span>{dict.about_hi2}</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-check"></i>
                  <span>{dict.about_hi3}</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-check"></i>
                  <span>{dict.about_hi4}</span>
                </div>
              </div>
              <div className="about-actions">
                <a
                  href="/assets/resume.pdf"
                  className="btn btn-primary"
                  download
                >
                  <i className="fas fa-download"></i>{' '}
                  <span>{dict.about_btn}</span>
                </a>
                <Link href="/resume" className="btn btn-outline">
                  <i className="fas fa-arrow-up-right-from-square"></i>{' '}
                  <span>{dict.about_view_cv}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="skills">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{dict.skills_tag}</span>
            <h2>{dict.skills_h2}</h2>
            <p>{dict.skills_sub}</p>
          </div>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>
                <i className="fas fa-laptop-code"></i>{' '}
                <span>{dict.sk_fe}</span>
              </h4>
              <div className="skill-tags">
                <span className="skill-tag">HTML5 &amp; CSS3</span>
                <span className="skill-tag">Tailwind CSS</span>
                <span className="skill-tag">JavaScript (ES6+)</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">React 19</span>
                <span className="skill-tag">Next.js</span>
                <span className="skill-tag">Vite</span>
                <span className="skill-tag">Alpine.js</span>
              </div>
            </div>
            <div className="skill-category">
              <h4>
                <i className="fas fa-server"></i> <span>{dict.sk_be}</span>
              </h4>
              <div className="skill-tags">
                <span className="skill-tag">Laravel 12</span>
                <span className="skill-tag">PHP 8.2+</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Express.js</span>
                <span className="skill-tag">REST API</span>
                <span className="skill-tag">DomPDF</span>
                <span className="skill-tag">SheetJS (XLSX)</span>
              </div>
            </div>
            <div className="skill-category">
              <h4>
                <i className="fas fa-database"></i> <span>{dict.sk_db}</span>
              </h4>
              <div className="skill-tags">
                <span className="skill-tag">MySQL</span>
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">Supabase</span>
                <span className="skill-tag">SQLite</span>
                <span className="skill-tag">IndexedDB (PWA)</span>
                <span className="skill-tag">MongoDB</span>
              </div>
            </div>
            <div className="skill-category">
              <h4>
                <i className="fas fa-terminal"></i> <span>{dict.sk_tools}</span>
              </h4>
              <div className="skill-tags">
                <span className="skill-tag">Git &amp; GitHub</span>
                <span className="skill-tag">Vercel</span>
                <span className="skill-tag">Figma</span>
                <span className="skill-tag">Laragon / Linux CLI</span>
                <span className="skill-tag">Arabic (Mumtaz)</span>
                <span className="skill-tag">English (Pare-Dise)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section id="experience" className="experience">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{dict.exp_tag}</span>
            <h2>{dict.exp_h2}</h2>
            <p>{dict.exp_sub}</p>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3>{dict.exp1_t}</h3>
                    <span className="timeline-company">
                      <span>{dict.exp1_c}</span>
                    </span>
                  </div>
                  <span className="timeline-date">{dict.exp1_d}</span>
                </div>
                <p>{dict.exp1_p}</p>
                <div className="timeline-tags">
                  <span>Laravel 12</span>
                  <span>React 19</span>
                  <span>Supabase</span>
                  <span>Tailwind CSS</span>
                  <span>DomPDF</span>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3>{dict.exp2_t}</h3>
                    <span className="timeline-company">
                      <span>{dict.exp2_c}</span>
                    </span>
                  </div>
                  <span className="timeline-date">{dict.exp2_d}</span>
                </div>
                <p>{dict.exp2_p}</p>
                <div className="timeline-tags">
                  <span>TypeScript</span>
                  <span>Node.js</span>
                  <span>Express.js</span>
                  <span>PWA / IndexedDB</span>
                  <span>Next.js</span>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3>{dict.exp3_t}</h3>
                    <span className="timeline-company">
                      <span>{dict.exp3_c}</span>
                    </span>
                  </div>
                  <span className="timeline-date">{dict.exp3_d}</span>
                </div>
                <p>{dict.exp3_p}</p>
                <div className="timeline-tags">
                  <span>HTML5</span>
                  <span>CSS3</span>
                  <span>JavaScript</span>
                  <span>React.js</span>
                  <span>Responsive UI</span>
                </div>
              </div>
            </div>
          </div>

          <div className="education-wrap">
            <h3 className="edu-title">
              <span>{dict.edu_tit}</span>
            </h3>
            <div className="edu-grid">
              <div className="edu-card">
                <div className="edu-icon">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <div className="edu-info">
                  <h4>{dict.edu1_t}</h4>
                  <span>{dict.edu1_s}</span>
                  <p>{dict.edu1_d}</p>
                </div>
              </div>

              <div className="edu-card">
                <div className="edu-icon">
                  <i className="fas fa-code"></i>
                </div>
                <div className="edu-info">
                  <h4>{dict.edu2_t}</h4>
                  <span>{dict.edu2_s}</span>
                  <p>{dict.edu2_d}</p>
                  <a
                    href="/assets/certificates/sertifikat-rwd-ppqita.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-link"
                  >
                    <span>{dict.cert_view}</span>{' '}
                    <i className="fas fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
              </div>

              <div className="edu-card">
                <div className="edu-icon">
                  <i className="fas fa-certificate"></i>
                </div>
                <div className="edu-info">
                  <h4>{dict.edu5_t}</h4>
                  <span>{dict.edu5_s}</span>
                  <p>{dict.edu5_d}</p>
                  <a
                    href="/assets/certificates/sertifikat-teknovistafest-unair.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-link"
                  >
                    <span>{dict.cert_view}</span>{' '}
                    <i className="fas fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
              </div>

              <div className="edu-card">
                <div className="edu-icon">
                  <i className="fas fa-language"></i>
                </div>
                <div className="edu-info">
                  <h4>{dict.edu3_t}</h4>
                  <span>{dict.edu3_s}</span>
                  <p>{dict.edu3_d}</p>
                  <a
                    href="/assets/certificates/sertifikat-bahasa-arab.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-link"
                  >
                    <span>{dict.cert_view}</span>{' '}
                    <i className="fas fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
              </div>

              <div className="edu-card">
                <div className="edu-icon">
                  <i className="fas fa-file-signature"></i>
                </div>
                <div className="edu-info">
                  <h4>{dict.edu4_t}</h4>
                  <span>{dict.edu4_s}</span>
                  <p>{dict.edu4_d}</p>
                  <a
                    href="/assets/certificates/sertifikat-bahasa-inggris.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-link"
                  >
                    <span>{dict.cert_view}</span>{' '}
                    <i className="fas fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="projects">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{dict.proj_tag}</span>
            <h2>{dict.proj_h2}</h2>
            <p>{dict.proj_sub}</p>
          </div>

          {profile && (
            <div className="gh-profile-bar">
              <a
                href={profile.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="gh-user"
              >
                <img
                  src={profile.avatar_url}
                  alt={profile.login}
                  loading="lazy"
                />
                <div>
                  <strong>{profile.name || profile.login}</strong>
                  <span>@{profile.login}</span>
                </div>
              </a>
              <div className="gh-metrics">
                <div className="gh-metric">
                  <strong>{profile.public_repos}</strong>
                  <span>{dict.gh_repos}</span>
                </div>
                <div className="gh-metric">
                  <strong>{profile.followers}</strong>
                  <span>{dict.gh_followers}</span>
                </div>
                <div className="gh-metric">
                  <strong>{totalStars}</strong>
                  <span>{dict.gh_stars}</span>
                </div>
              </div>
            </div>
          )}

          <div className="project-filters">
            <button
              type="button"
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => {
                setActiveFilter('all');
                setShowAllProjects(false);
              }}
            >
              {dict.f_all} <span className="f-count">{repos.length}</span>
            </button>
            {topLanguages.map(([lName, count]) => (
              <button
                type="button"
                key={lName}
                className={`filter-btn ${
                  activeFilter === lName ? 'active' : ''
                }`}
                onClick={() => {
                  setActiveFilter(lName);
                  setShowAllProjects(false);
                }}
              >
                <span
                  className="lang-dot"
                  style={{ background: LANG_COLORS[lName] || '#a1a1aa' }}
                ></span>
                {lName} <span className="f-count">{count}</span>
              </button>
            ))}
          </div>

          <div className="project-grid">
            {reposLoading && repos.length === 0 ? (
              Array.from({ length: 3 }).map((_, idx) => (
                <div className="project-card skeleton" key={idx}>
                  <div className="sk-img"></div>
                  <div className="project-info">
                    <div className="sk-line w40"></div>
                    <div className="sk-line w80"></div>
                    <div className="sk-line"></div>
                    <div className="sk-line w60"></div>
                  </div>
                </div>
              ))
            ) : reposError ? (
              <div className="project-state">
                <p>{dict.p_error}</p>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => fetchGithubData(true)}
                >
                  {dict.p_retry}
                </button>
              </div>
            ) : visibleRepos.length === 0 ? (
              <div className="project-state">
                <p>{dict.p_empty}</p>
              </div>
            ) : (
              visibleRepos.map((r) => {
                const color = LANG_COLORS[r.language || ''] || '#d4d4d8';
                const live =
                  r.homepage && r.homepage.trim()
                    ? /^https?:\/\//i.test(r.homepage.trim())
                      ? r.homepage.trim()
                      : `https://${r.homepage.trim()}`
                    : '';
                const useFallback = r.custom_preview === 'fallback';
                const preview = useFallback
                  ? ''
                  : r.custom_preview ||
                    `https://opengraph.githubassets.com/1/${r.full_name}`;
                const desc = r.description ? r.description : dict.p_nodesc;
                const tags: string[] = [];
                if (r.language) tags.push(r.language);
                if (Array.isArray(r.topics)) {
                  r.topics.slice(0, 3).forEach((tp) => {
                    if (!tags.includes(tp)) tags.push(tp);
                  });
                }

                return (
                  <article className="project-card" key={r.name}>
                    <div
                      className={`project-image ${
                        useFallback ? 'no-preview' : ''
                      }`}
                    >
                      {!useFallback && (
                        <img
                          src={preview}
                          alt={r.name}
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement?.classList.add(
                              'no-preview'
                            );
                          }}
                        />
                      )}
                      <div className="project-fallback">
                        <i
                          className={
                            useFallback
                              ? 'fas fa-terminal'
                              : 'fab fa-github'
                          }
                        ></i>
                        <span>{r.title || prettyRepoName(r.name)}</span>
                        {tags.length > 0 && (
                          <small>{tags.slice(0, 3).join(' · ')}</small>
                        )}
                      </div>
                      {r.language && (
                        <span className="project-lang-badge">
                          <span
                            className="lang-dot"
                            style={{ background: color }}
                          ></span>
                          {r.language}
                        </span>
                      )}
                      <div className="project-overlay">
                        <div className="project-links">
                          {live && (
                            <a
                              href={live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="project-link"
                            >
                              <i className="fas fa-arrow-up-right-from-square"></i>{' '}
                              <span>{dict.p_live}</span>
                            </a>
                          )}
                          <a
                            href={r.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                          >
                            <i className="fab fa-github"></i>{' '}
                            <span>{dict.p_gh}</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="project-info">
                      <div className="project-tags">
                        {tags.map((tName) => (
                          <span key={tName}>{tName}</span>
                        ))}
                      </div>
                      <h3 className="project-title">
                        <a
                          href={r.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {r.title || prettyRepoName(r.name)}
                        </a>
                        {live && (
                          <a
                            href={live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="live-pill"
                            title={dict.p_live}
                          >
                            <span className="live-dot"></span>Live
                          </a>
                        )}
                      </h3>
                      <p className={r.description ? '' : 'is-muted'}>{desc}</p>
                      <div className="project-meta">
                        <span>
                          <i className="far fa-star"></i> {r.stars}
                        </span>
                        <span>
                          <i className="fas fa-code-branch"></i> {r.forks}
                        </span>
                        <span className="meta-pushed">
                          {relativeDate(r.pushed_at)}
                        </span>
                      </div>
                    </div>
                  </article>
                );
              })
            )}
          </div>

          <div className="project-actions">
            {filteredRepos.length > INITIAL_VISIBLE && (
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => setShowAllProjects((v) => !v)}
              >
                <span>{showAllProjects ? dict.p_less : dict.p_more}</span>
              </button>
            )}
            <a
              href={`https://github.com/${GH_USER}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <i className="fab fa-github"></i> <span>{dict.p_viewall}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Collaboration Notes */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{dict.testi_tag}</span>
            <h2>{dict.testi_h2}</h2>
            <p>{dict.testi_sub}</p>
          </div>

          <div className="testimonial-grid">
            {[
              {
                badge: dict.t1_b,
                quote: dict.t1_p,
                name: dict.t1_n,
                role: dict.t1_r,
                idx: '01',
              },
              {
                badge: dict.t2_b,
                quote: dict.t2_p,
                name: dict.t2_n,
                role: dict.t2_r,
                idx: '02',
              },
              {
                badge: dict.t3_b,
                quote: dict.t3_p,
                name: dict.t3_n,
                role: dict.t3_r,
                idx: '03',
              },
              {
                badge: dict.t4_b,
                quote: dict.t4_p,
                name: dict.t4_n,
                role: dict.t4_r,
                idx: '04',
              },
            ].map((rev) => (
              <div className="testimonial-card" key={rev.idx}>
                <div className="testimonial-top">
                  <span className="testimonial-index">{rev.idx}</span>
                  <span className="testimonial-badge">{rev.badge}</span>
                </div>
                <p>{rev.quote}</p>
                <div className="testimonial-author">
                  <div>
                    <strong>{rev.name}</strong>
                    <span>{rev.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{dict.con_tag}</span>
            <h2>{dict.con_h2}</h2>
            <p>{dict.con_sub}</p>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <strong>{dict.con_email}</strong>
                  <span>
                    <a
                      href="mailto:jhonelfarq@gmail.com"
                      style={{ color: 'inherit', textDecoration: 'none' }}
                    >
                      jhonelfarq@gmail.com
                    </a>
                  </span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <strong>{dict.con_loc}</strong>
                  <span>{dict.con_loc_val}</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-briefcase"></i>
                </div>
                <div>
                  <strong>{dict.con_avail}</strong>
                  <span>{dict.con_avail_val}</span>
                </div>
              </div>
              <div className="social-links">
                <a
                  href="mailto:jhonelfarq@gmail.com"
                  className="social-btn"
                  aria-label="Email"
                >
                  <i className="fas fa-envelope"></i>
                </a>
                <a
                  href="https://github.com/yahyaalfaruq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="GitHub"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://wa.me/6281329924856"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="WhatsApp"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
                <Link
                  href="/resume"
                  className="social-btn"
                  aria-label="Resume"
                >
                  <i className="fas fa-file-alt"></i>
                </Link>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleContactSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">{dict.f_name}</label>
                  <input
                    type="text"
                    id="name"
                    placeholder={dict.f_name_ph}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">{dict.f_email}</label>
                  <input
                    type="email"
                    id="email"
                    placeholder={dict.f_email_ph}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">{dict.f_subj}</label>
                <input
                  type="text"
                  id="subject"
                  placeholder={dict.f_subj_ph}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">{dict.f_msg}</label>
                <textarea
                  id="message"
                  placeholder={dict.f_msg_ph}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-full"
                disabled={formSubmitted}
                style={
                  formSubmitted
                    ? {
                        opacity: 0.75,
                      }
                    : undefined
                }
              >
                <span>{formSubmitted ? dict.f_sent : dict.f_submit}</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <a
              href="#home"
              className="logo footer-logo"
              aria-label="Yahya Al Faruq"
            >
              <span className="logo-mark" aria-hidden="true">
                <svg
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="2"
                    y="2"
                    width="32"
                    height="32"
                    rx="8"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M11.5 11.5L18 19.2L24.5 11.5M18 19.2V25.5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="25.5" cy="24.5" r="1.9" fill="currentColor" />
                </svg>
              </span>
              <span className="logo-wordmark">
                YAF<span className="logo-dot"></span>
              </span>
            </a>
            <p>
              <span>{dict.foot_built}</span>{' '}
              <strong>{dict.footer_name}</strong>
            </p>
            <p className="footer-copy">{dict.foot_copy}</p>
          </div>
        </div>
      </footer>

      <a
        href="#home"
        className={`back-to-top ${scrolled ? 'visible' : ''}`}
        aria-label="Back to top"
      >
        <i className="fas fa-arrow-up"></i>
      </a>
    </>
  );
}
