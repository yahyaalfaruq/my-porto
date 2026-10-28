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
const GH_CACHE_KEY = `gh_repos_next_v2_${GH_USER}`;
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

  // Loader state
  const [loading, setLoading] = useState(true);
  const [loaderGone, setLoaderGone] = useState(false);
  const [loaderProgress, setLoaderProgress] = useState(0);
  const [loaderStageIdx, setLoaderStageIdx] = useState(0);

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
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const cursorGlowRef = useRef<HTMLDivElement | null>(null);
  const heroImgRef = useRef<HTMLImageElement | null>(null);
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

  // Loader animation
  useEffect(() => {
    document.body.classList.add('is-loading');
    const circumference = 2 * Math.PI * 52;
    let progress = 0;
    let target = 80;
    let finished = false;
    const minDuration = 850;
    const start = performance.now();

    const finish = () => {
      if (finished) return;
      finished = true;
      setLoaderProgress(100);
      setLoaderStageIdx(4);
      setTimeout(() => {
        setLoading(false);
        document.body.classList.remove('is-loading');
        setTimeout(() => setLoaderGone(true), 700);
      }, 220);
    };

    const timer = window.setInterval(() => {
      if (performance.now() - start >= minDuration) {
        target = 100;
      }
      progress += Math.max(1.2, (target - progress) * 0.18);
      if (progress >= 99.5 && target === 100) {
        window.clearInterval(timer);
        finish();
        return;
      }
      const p = Math.min(99, Math.floor(progress));
      setLoaderProgress(p);
      setLoaderStageIdx(Math.min(4, Math.floor((p / 100) * 5)));
    }, 30);

    const safety = window.setTimeout(() => {
      window.clearInterval(timer);
      finish();
    }, 2500);

    void circumference;
    return () => {
      window.clearInterval(timer);
      window.clearTimeout(safety);
      document.body.classList.remove('is-loading');
    };
  }, []);

  // Typewriter loop
  useEffect(() => {
    const phrases: string[] = (T[lang]?.tw_phrases as string[]) || T.en.tw_phrases;
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
          timeoutId = window.setTimeout(tick, 1800);
          return;
        }
        timeoutId = window.setTimeout(tick, 80);
      } else {
        ci--;
        setTwText(word.slice(0, ci));
        if (ci === 0) {
          deleting = false;
          pi = (pi + 1) % phrases.length;
          timeoutId = window.setTimeout(tick, 350);
          return;
        }
        timeoutId = window.setTimeout(tick, 40);
      }
    };

    timeoutId = window.setTimeout(tick, 400);
    return () => window.clearTimeout(timeoutId);
  }, [lang]);

  // Header scroll & active section spy + cursor glow
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
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

    const onMouseMove = (e: MouseEvent) => {
      if (cursorGlowRef.current) {
        cursorGlowRef.current.style.left = `${e.clientX}px`;
        cursorGlowRef.current.style.top = `${e.clientY}px`;
      }
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
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('click', onDocClick);
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('click', onDocClick);
    };
  }, []);

  // Particle Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId = 0;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const COLORS = ['#a855f7', '#06b6d4', '#f472b6', '#818cf8'];
    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.8 + 0.4,
      dx: (Math.random() - 0.5) * 0.35,
      dy: (Math.random() - 0.5) * 0.35,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: Math.random() * 0.5 + 0.15,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(168,85,247,${0.08 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  // Draggable hero image
  useEffect(() => {
    const heroImg = heroImgRef.current;
    if (!heroImg) return;
    let dragging = false;
    let ox = 0;
    let oy = 0;
    let cx = 0;
    let cy = 0;

    const onDown = (e: MouseEvent) => {
      dragging = true;
      ox = e.clientX - cx;
      oy = e.clientY - cy;
      heroImg.style.transition = 'none';
    };
    const onMove = (e: MouseEvent) => {
      if (!dragging) return;
      cx = e.clientX - ox;
      cy = e.clientY - oy;
      heroImg.style.transform = `translate(${cx}px, ${cy}px) rotate(${cx * 0.04}deg)`;
    };
    const onUp = () => {
      if (!dragging) return;
      dragging = false;
      cx = 0;
      cy = 0;
      heroImg.style.transition =
        'transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)';
      heroImg.style.transform = 'translate(0,0) rotate(0deg)';
    };
    const onTouchStart = (e: TouchEvent) => {
      const t = e.touches[0];
      dragging = true;
      ox = t.clientX - cx;
      oy = t.clientY - cy;
      heroImg.style.transition = 'none';
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!dragging) return;
      const t = e.touches[0];
      cx = t.clientX - ox;
      cy = t.clientY - oy;
      heroImg.style.transform = `translate(${cx}px, ${cy}px)`;
    };

    heroImg.addEventListener('mousedown', onDown);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    heroImg.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onUp);

    return () => {
      heroImg.removeEventListener('mousedown', onDown);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      heroImg.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onUp);
    };
  }, []);

  // GSAP animations & proficiency bars & counters
  useEffect(() => {
    let ctxCleanup: (() => void) | undefined;

    (async () => {
      try {
        const gsapMod = await import('gsap');
        const stMod = await import('gsap/ScrollTrigger');
        const gsap = gsapMod.gsap || gsapMod.default;
        const ScrollTrigger = stMod.ScrollTrigger || stMod.default;
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
        tl.from('.hero-badge', { opacity: 0, y: -20, duration: 0.6 })
          .from('.hero-content h1', { opacity: 0, y: 30, duration: 0.7 }, '-=0.3')
          .from('.typewriter-wrapper', { opacity: 0, y: 20, duration: 0.6 }, '-=0.4')
          .from('.hero-desc', { opacity: 0, y: 20, duration: 0.6 }, '-=0.4')
          .from('.hero-cta', { opacity: 0, y: 20, duration: 0.6 }, '-=0.4')
          .from('.hero-stats', { opacity: 0, y: 20, duration: 0.6 }, '-=0.4')
          .from(
            '.hero-image',
            { opacity: 0, scale: 0.85, duration: 0.9, ease: 'back.out(1.4)' },
            '-=0.6'
          )
          .from(
            '.floating-badge',
            { opacity: 0, scale: 0, stagger: 0.15, duration: 0.5, ease: 'back.out(2)' },
            '-=0.4'
          );

        gsap.utils.toArray<HTMLElement>('.section-header').forEach((el) => {
          gsap.from(el, {
            scrollTrigger: { trigger: el, start: 'top 85%' },
            opacity: 0,
            y: 40,
            duration: 0.7,
            ease: 'power2.out',
          });
        });

        gsap.from('.about-image-wrap', {
          scrollTrigger: { trigger: '.about-content', start: 'top 80%' },
          opacity: 0,
          x: -50,
          duration: 0.8,
          ease: 'power2.out',
        });
        gsap.from('.about-text', {
          scrollTrigger: { trigger: '.about-content', start: 'top 80%' },
          opacity: 0,
          x: 50,
          duration: 0.8,
          ease: 'power2.out',
        });

        document
          .querySelectorAll<HTMLElement>(
            '.skills-grid, .edu-grid, .testimonial-grid'
          )
          .forEach((grid) => {
            gsap.from(Array.from(grid.children), {
              scrollTrigger: { trigger: grid, start: 'top 85%' },
              opacity: 0,
              y: 32,
              stagger: 0.1,
              duration: 0.6,
              ease: 'power2.out',
              clearProps: 'transform,opacity',
            });
          });

        gsap.from('.timeline-item', {
          scrollTrigger: { trigger: '.timeline', start: 'top 80%' },
          opacity: 0,
          x: -35,
          stagger: 0.18,
          duration: 0.65,
          ease: 'power2.out',
          clearProps: 'transform,opacity',
        });

        gsap.from('.contact-info', {
          scrollTrigger: { trigger: '.contact-content', start: 'top 80%' },
          opacity: 0,
          x: -40,
          duration: 0.7,
          ease: 'power2.out',
        });
        gsap.from('.contact-form', {
          scrollTrigger: { trigger: '.contact-content', start: 'top 80%' },
          opacity: 0,
          x: 40,
          duration: 0.7,
          ease: 'power2.out',
        });

        ctxCleanup = () => {
          ScrollTrigger.getAll().forEach((t) => t.kill());
        };
      } catch {
        // Fallback if GSAP fails to load
      }
    })();

    // Counter animation
    const statEls = document.querySelectorAll<HTMLElement>('.stat-number');
    const cObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const target = Number(el.dataset.target || 0);
          let current = 0;
          const step = target / 40;
          const t = window.setInterval(() => {
            current += step;
            if (current >= target) {
              el.textContent = String(target);
              window.clearInterval(t);
            } else {
              el.textContent = String(Math.floor(current));
            }
          }, 30);
          cObs.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    statEls.forEach((el) => cObs.observe(el));

    // Proficiency bars
    const profEls = document.querySelectorAll<HTMLElement>('.prof-fill');
    const pObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.style.width = `${el.dataset.width || 0}%`;
          pObs.unobserve(el);
        });
      },
      { threshold: 0.3 }
    );
    profEls.forEach((el) => pObs.observe(el));

    return () => {
      if (ctxCleanup) ctxCleanup();
      cObs.disconnect();
      pObs.disconnect();
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

  const handleCardTiltMove = (e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = ((y - rect.height / 2) / (rect.height / 2)) * -5;
    const ry = ((x - rect.width / 2) / (rect.width / 2)) * 5;
    card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`;
    const shine = card.querySelector<HTMLElement>('.card-shine');
    if (shine) {
      shine.style.background = `radial-gradient(circle at ${(x / rect.width) * 100}% ${(y / rect.height) * 100}%, rgba(255,255,255,0.10) 0%, transparent 65%)`;
    }
  };

  const handleCardTiltLeave = (e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    card.style.transform =
      'perspective(900px) rotateX(0) rotateY(0) translateY(0)';
    const shine = card.querySelector<HTMLElement>('.card-shine');
    if (shine) shine.style.background = 'none';
  };

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
    const form = e.currentTarget;
    setTimeout(() => {
      form.reset();
      setFormSubmitted(false);
    }, 3000);
  };

  const langMeta: Record<LangCode, { flag: string; label: string }> = {
    en: { flag: '🇬🇧', label: 'EN' },
    id: { flag: '🇮🇩', label: 'ID' },
    ar: { flag: '🇸🇦', label: 'AR' },
  };

  const circumference = 2 * Math.PI * 52;
  const ringOffset = circumference * (1 - loaderProgress / 100);

  return (
    <>
      {/* Loading Screen */}
      {!loaderGone && (
        <div
          className={`loader ${!loading ? 'is-hidden' : ''}`}
          aria-live="polite"
          aria-label="Loading"
        >
          <div className="loader-bg-grid"></div>
          <div className="loader-orb loader-orb-1"></div>
          <div className="loader-orb loader-orb-2"></div>
          <div className="loader-inner">
            <div className="loader-ring">
              <svg viewBox="0 0 120 120">
                <defs>
                  <linearGradient id="loaderGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
                <circle className="loader-ring-track" cx="60" cy="60" r="52" />
                <circle
                  className="loader-ring-fill"
                  cx="60"
                  cy="60"
                  r="52"
                  style={{ strokeDashoffset: ringOffset }}
                />
              </svg>
              <div className="loader-logo">
                <span className="loader-letters">
                  <span>Y</span>
                  <span>A</span>
                  <span>F</span>
                </span>
                <span className="logo-dot"></span>
              </div>
            </div>
            <div className="loader-percent">
              <span>{loaderProgress}</span>%
            </div>
            <div className="loader-bar">
              <div
                className="loader-bar-fill"
                style={{ width: `${loaderProgress}%` }}
              ></div>
            </div>
            <div className="loader-text">
              <span className="loader-prompt">&gt;</span>{' '}
              <span>
                {(dict.ld_msgs && dict.ld_msgs[loaderStageIdx]) ||
                  'initializing'}
              </span>
              <span className="loader-caret">_</span>
            </div>
          </div>
        </div>
      )}

      <div className="cursor-glow" ref={cursorGlowRef}></div>
      <canvas id="particleCanvas" ref={canvasRef}></canvas>

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
                  <defs>
                    <linearGradient
                      id="yafLogoGrad"
                      x1="0"
                      y1="0"
                      x2="36"
                      y2="36"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                  <rect
                    x="2"
                    y="2"
                    width="32"
                    height="32"
                    rx="10"
                    stroke="url(#yafLogoGrad)"
                    strokeWidth="2"
                  />
                  <path
                    d="M11.5 11.5L18 19.2L24.5 11.5M18 19.2V25.5"
                    stroke="url(#yafLogoGrad)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="25.5" cy="24.5" r="1.9" fill="#06b6d4" />
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
                  className="lang-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLangMenuOpen((v) => !v);
                  }}
                >
                  <span>{langMeta[lang].flag}</span>
                  <span>{langMeta[lang].label}</span>
                  <i className="fas fa-chevron-down"></i>
                </button>
                <div className="lang-menu">
                  {(
                    [
                      { code: 'en', text: '🇬🇧 English' },
                      { code: 'id', text: '🇮🇩 Indonesia' },
                      { code: 'ar', text: '🇸🇦 العربية' },
                    ] as { code: LangCode; text: string }[]
                  ).map((opt) => (
                    <button
                      type="button"
                      key={opt.code}
                      className={`lang-opt ${
                        lang === opt.code ? 'active' : ''
                      }`}
                      onClick={() => {
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

              <a
                href="/assets/resume.pdf"
                className="btn btn-outline"
                download
                id="resumeBtn"
              >
                <i className="fas fa-download"></i>{' '}
                <span>{dict.nav_resume}</span>
              </a>

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
                <span className="stat-number" data-target="50">
                  50
                </span>
                <span>+</span>
                <span className="stat-label">{dict.stat_proj}</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <span className="stat-number" data-target="3">
                  3
                </span>
                <span>+</span>
                <span className="stat-label">{dict.stat_yrs}</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <span className="stat-number" data-target="15">
                  15
                </span>
                <span>+</span>
                <span className="stat-label">{dict.stat_cli}</span>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <div className="hero-image-glow"></div>
            <div className="hero-image-ring"></div>
            <img
              src="/assets/profile.png"
              alt="Yahya Al Faruq"
              id="heroImg"
              ref={heroImgRef}
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
        <div className="hero-scroll-hint">
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
          <span>Scroll</span>
        </div>
      </section>

      {/* About */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{dict.about_tag}</span>
            <h2 dangerouslySetInnerHTML={{ __html: dict.about_h2 }} />
            <p>{dict.about_sub}</p>
          </div>
          <div className="about-content">
            <div className="about-image-wrap">
              <div className="about-image-glow"></div>
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
                <i className="fas fa-rocket"></i>
                <div>
                  <strong>{dict.about_c2t}</strong>
                  <span>{dict.about_c2s}</span>
                </div>
              </div>
            </div>
            <div className="about-text">
              <h3 dangerouslySetInnerHTML={{ __html: dict.about_h3 }} />
              <p dangerouslySetInnerHTML={{ __html: dict.about_p1 }} />
              <p dangerouslySetInnerHTML={{ __html: dict.about_p2 }} />
              <div className="about-highlights">
                <div className="highlight-item">
                  <i className="fas fa-check-circle"></i>
                  <span>{dict.about_hi1}</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-check-circle"></i>
                  <span>{dict.about_hi2}</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-check-circle"></i>
                  <span>{dict.about_hi3}</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-check-circle"></i>
                  <span>{dict.about_hi4}</span>
                </div>
              </div>
              <div className="about-actions">
                <a
                  href="/assets/resume.pdf"
                  className="btn btn-primary"
                  download
                >
                  <i className="fas fa-file-pdf"></i>{' '}
                  <span>{dict.about_btn}</span>
                </a>
                <Link href="/resume" className="btn btn-outline">
                  <i className="fas fa-eye"></i>{' '}
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
            <h2 dangerouslySetInnerHTML={{ __html: dict.skills_h2 }} />
            <p>{dict.skills_sub}</p>
          </div>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>
                <i className="fas fa-laptop-code"></i>{' '}
                <span>{dict.sk_fe}</span>
              </h4>
              <div className="skill-tags">
                <span className="skill-tag">
                  <i className="fab fa-html5"></i> HTML5
                </span>
                <span className="skill-tag">
                  <i className="fab fa-css3-alt"></i> CSS3
                </span>
                <span className="skill-tag">
                  <i className="fas fa-wind"></i> Tailwind CSS
                </span>
                <span className="skill-tag">
                  <i className="fab fa-js-square"></i> JavaScript (ES6+)
                </span>
                <span className="skill-tag">
                  <i className="fas fa-code"></i> TypeScript
                </span>
                <span className="skill-tag">
                  <i className="fab fa-react"></i> React.js
                </span>
                <span className="skill-tag">
                  <i className="fas fa-bolt"></i> Next.js &amp; Vite
                </span>
                <span className="skill-tag">
                  <i className="fas fa-feather"></i> Alpine.js
                </span>
              </div>
            </div>
            <div className="skill-category">
              <h4>
                <i className="fas fa-server"></i> <span>{dict.sk_be}</span>
              </h4>
              <div className="skill-tags">
                <span className="skill-tag">
                  <i className="fab fa-laravel"></i> Laravel 12
                </span>
                <span className="skill-tag">
                  <i className="fab fa-php"></i> PHP 8.2+
                </span>
                <span className="skill-tag">
                  <i className="fab fa-node-js"></i> Node.js
                </span>
                <span className="skill-tag">
                  <i className="fas fa-network-wired"></i> Express.js
                </span>
                <span className="skill-tag">
                  <i className="fas fa-plug"></i> RESTful API
                </span>
                <span className="skill-tag">
                  <i className="fas fa-project-diagram"></i> GraphQL
                </span>
                <span className="skill-tag">
                  <i className="fas fa-file-pdf"></i> DomPDF
                </span>
              </div>
            </div>
            <div className="skill-category">
              <h4>
                <i className="fas fa-database"></i> <span>{dict.sk_db}</span>
              </h4>
              <div className="skill-tags">
                <span className="skill-tag">
                  <i className="fas fa-database"></i> MySQL
                </span>
                <span className="skill-tag">
                  <i className="fas fa-database"></i> PostgreSQL
                </span>
                <span className="skill-tag">
                  <i className="fas fa-bolt"></i> Supabase (BaaS)
                </span>
                <span className="skill-tag">
                  <i className="fas fa-hdd"></i> SQLite
                </span>
                <span className="skill-tag">
                  <i className="fas fa-box-open"></i> IndexedDB &amp; PWA
                </span>
                <span className="skill-tag">
                  <i className="fas fa-leaf"></i> MongoDB
                </span>
              </div>
            </div>
            <div className="skill-category">
              <h4>
                <i className="fas fa-tools"></i> <span>{dict.sk_tools}</span>
              </h4>
              <div className="skill-tags">
                <span className="skill-tag">
                  <i className="fab fa-git-alt"></i> Git &amp; GitHub
                </span>
                <span className="skill-tag">
                  <i className="fas fa-cloud-upload-alt"></i> Vercel
                </span>
                <span className="skill-tag">
                  <i className="fab fa-figma"></i> Figma
                </span>
                <span className="skill-tag">
                  <i className="fas fa-terminal"></i> Laragon / CLI
                </span>
                <span className="skill-tag">
                  <i className="fas fa-language"></i> Arabic (Mumtaz)
                </span>
                <span className="skill-tag">
                  <i className="fas fa-globe"></i> English (Pare-Dise)
                </span>
              </div>
            </div>
          </div>

          <div className="proficiency-bars">
            {[
              { label: dict.prof1, pct: 95 },
              { label: dict.prof2, pct: 90 },
              { label: dict.prof3, pct: 90 },
              { label: dict.prof4, pct: 88 },
              { label: dict.prof5, pct: 85 },
              { label: dict.prof6, pct: 88 },
            ].map((bar, i) => (
              <div className="prof-item" key={i}>
                <div className="prof-header">
                  <span>{bar.label}</span>
                  <span>{bar.pct}%</span>
                </div>
                <div className="prof-bar">
                  <div className="prof-fill" data-width={bar.pct}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section id="experience" className="experience">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{dict.exp_tag}</span>
            <h2 dangerouslySetInnerHTML={{ __html: dict.exp_h2 }} />
            <p>{dict.exp_sub}</p>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div
                className="timeline-card"
                onMouseMove={handleCardTiltMove}
                onMouseLeave={handleCardTiltLeave}
              >
                <div className="card-shine"></div>
                <div className="timeline-header">
                  <div>
                    <h3>{dict.exp1_t}</h3>
                    <span className="timeline-company">
                      <i className="fas fa-school"></i>{' '}
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
              <div
                className="timeline-card"
                onMouseMove={handleCardTiltMove}
                onMouseLeave={handleCardTiltLeave}
              >
                <div className="card-shine"></div>
                <div className="timeline-header">
                  <div>
                    <h3>{dict.exp2_t}</h3>
                    <span className="timeline-company">
                      <i className="fas fa-laptop-code"></i>{' '}
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
              <div
                className="timeline-card"
                onMouseMove={handleCardTiltMove}
                onMouseLeave={handleCardTiltLeave}
              >
                <div className="card-shine"></div>
                <div className="timeline-header">
                  <div>
                    <h3>{dict.exp3_t}</h3>
                    <span className="timeline-company">
                      <i className="fas fa-code"></i> <span>{dict.exp3_c}</span>
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
              <i className="fas fa-graduation-cap"></i>{' '}
              <span>{dict.edu_tit}</span>
            </h3>
            <div className="edu-grid">
              <div
                className="edu-card"
                onMouseMove={handleCardTiltMove}
                onMouseLeave={handleCardTiltLeave}
              >
                <div className="card-shine"></div>
                <div className="edu-icon">
                  <i className="fas fa-mosque"></i>
                </div>
                <div className="edu-info">
                  <h4>{dict.edu1_t}</h4>
                  <span>{dict.edu1_s}</span>
                  <p>{dict.edu1_d}</p>
                </div>
              </div>

              <div
                className="edu-card"
                onMouseMove={handleCardTiltMove}
                onMouseLeave={handleCardTiltLeave}
              >
                <div className="card-shine"></div>
                <div className="edu-icon">
                  <i className="fas fa-laptop-code"></i>
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
                    <i className="fas fa-external-link-alt"></i>{' '}
                    <span>{dict.cert_view}</span>
                  </a>
                </div>
              </div>

              <div
                className="edu-card"
                onMouseMove={handleCardTiltMove}
                onMouseLeave={handleCardTiltLeave}
              >
                <div className="card-shine"></div>
                <div className="edu-icon">
                  <i className="fas fa-trophy"></i>
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
                    <i className="fas fa-external-link-alt"></i>{' '}
                    <span>{dict.cert_view}</span>
                  </a>
                </div>
              </div>

              <div
                className="edu-card"
                onMouseMove={handleCardTiltMove}
                onMouseLeave={handleCardTiltLeave}
              >
                <div className="card-shine"></div>
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
                    <i className="fas fa-external-link-alt"></i>{' '}
                    <span>{dict.cert_view}</span>
                  </a>
                </div>
              </div>

              <div
                className="edu-card"
                onMouseMove={handleCardTiltMove}
                onMouseLeave={handleCardTiltLeave}
              >
                <div className="card-shine"></div>
                <div className="edu-icon">
                  <i className="fas fa-award"></i>
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
                    <i className="fas fa-external-link-alt"></i>{' '}
                    <span>{dict.cert_view}</span>
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
            <h2 dangerouslySetInnerHTML={{ __html: dict.proj_h2 }} />
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
                  <i className="fas fa-book-bookmark"></i>
                  <strong>{profile.public_repos}</strong>
                  <span>{dict.gh_repos}</span>
                </div>
                <div className="gh-metric">
                  <i className="fas fa-users"></i>
                  <strong>{profile.followers}</strong>
                  <span>{dict.gh_followers}</span>
                </div>
                <div className="gh-metric">
                  <i className="fas fa-star"></i>
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
                  style={{ background: LANG_COLORS[lName] || '#8b5cf6' }}
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
                <i className="fas fa-triangle-exclamation"></i>
                <p>{dict.p_error}</p>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => fetchGithubData(true)}
                >
                  <i className="fas fa-rotate-right"></i> {dict.p_retry}
                </button>
              </div>
            ) : visibleRepos.length === 0 ? (
              <div className="project-state">
                <i className="fas fa-folder-open"></i>
                <p>{dict.p_empty}</p>
              </div>
            ) : (
              visibleRepos.map((r) => {
                const color = LANG_COLORS[r.language || ''] || '#a855f7';
                const live =
                  r.homepage && r.homepage.trim()
                    ? /^https?:\/\//i.test(r.homepage.trim())
                      ? r.homepage.trim()
                      : `https://${r.homepage.trim()}`
                    : '';
                const preview =
                  r.custom_preview ||
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
                  <article
                    className="project-card"
                    key={r.name}
                    onMouseMove={handleCardTiltMove}
                    onMouseLeave={handleCardTiltLeave}
                  >
                    <div className="card-shine"></div>
                    <div className="project-image">
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
                      <div className="project-fallback">
                        <i className="fab fa-github"></i>
                        <span>{prettyRepoName(r.name)}</span>
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
                              <i className="fas fa-external-link-alt"></i>{' '}
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
                          <i className="far fa-clock"></i>{' '}
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
                <i
                  className={`fas ${showAllProjects ? 'fa-minus' : 'fa-plus'}`}
                ></i>{' '}
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

      {/* Mentor & Peer Reviews (Fixed 2x2 Responsive Grid) */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{dict.testi_tag}</span>
            <h2 dangerouslySetInnerHTML={{ __html: dict.testi_h2 }} />
            <p>{dict.testi_sub}</p>
          </div>

          <div className="testimonial-grid">
            {[
              {
                badge: dict.t1_b,
                quote: dict.t1_p,
                name: dict.t1_n,
                role: dict.t1_r,
                icon: 'fa-layer-group',
              },
              {
                badge: dict.t2_b,
                quote: dict.t2_p,
                name: dict.t2_n,
                role: dict.t2_r,
                icon: 'fa-code',
              },
              {
                badge: dict.t3_b,
                quote: dict.t3_p,
                name: dict.t3_n,
                role: dict.t3_r,
                icon: 'fa-users-cog',
              },
              {
                badge: dict.t4_b,
                quote: dict.t4_p,
                name: dict.t4_n,
                role: dict.t4_r,
                icon: 'fa-mosque',
              },
            ].map((rev, idx) => (
              <div
                className="testimonial-card"
                key={idx}
                onMouseMove={handleCardTiltMove}
                onMouseLeave={handleCardTiltLeave}
              >
                <div className="card-shine"></div>
                <div className="testimonial-top">
                  <div
                    className="testimonial-stars"
                    aria-label="5 out of 5 stars"
                  >
                    ★★★★★
                  </div>
                  <span className="testimonial-badge">{rev.badge}</span>
                </div>
                <p>{rev.quote}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <i className={`fas ${rev.icon}`}></i>
                  </div>
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
            <h2 dangerouslySetInnerHTML={{ __html: dict.con_h2 }} />
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
                  <i className="fas fa-clock"></i>
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
                        background:
                          'linear-gradient(135deg, #22c55e, #06b6d4)',
                      }
                    : undefined
                }
              >
                <i
                  className={`fas ${
                    formSubmitted ? 'fa-check' : 'fa-paper-plane'
                  }`}
                ></i>{' '}
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
                    rx="10"
                    stroke="url(#yafLogoGrad)"
                    strokeWidth="2"
                  />
                  <path
                    d="M11.5 11.5L18 19.2L24.5 11.5M18 19.2V25.5"
                    stroke="url(#yafLogoGrad)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="25.5" cy="24.5" r="1.9" fill="#06b6d4" />
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

