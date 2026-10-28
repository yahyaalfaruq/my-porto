'use client';

import React from 'react';
import Link from 'next/link';

export default function ResumePage() {
  return (
    <div
      style={{
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        background: '#f1f5f9',
        color: '#0f172a',
        lineHeight: 1.5,
        fontSize: '13.2px',
        padding: '32px 16px',
        minHeight: '100vh',
      }}
    >
      <style>{`
        .cv-toolbar {
          max-width: 210mm;
          margin: 0 auto 18px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }
        .cv-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 18px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
          border: 1px solid #cbd5e1;
          background: #fff;
          color: #0f172a;
          transition: all 0.2s;
        }
        .cv-btn:hover { border-color: #6d28d9; color: #6d28d9; }
        .cv-btn.primary {
          background: linear-gradient(135deg, #7c3aed, #06b6d4);
          color: #fff;
          border: none;
          box-shadow: 0 4px 14px rgba(124, 58, 237, 0.25);
        }
        .cv-sheet {
          max-width: 210mm;
          margin: 0 auto;
          background: #fff;
          padding: 16mm 18mm;
          border-radius: 12px;
          box-shadow: 0 10px 35px rgba(15, 23, 42, 0.08);
        }
        .cv-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 20px;
          padding-bottom: 14px;
          border-bottom: 2px solid #0f172a;
          margin-bottom: 14px;
        }
        .cv-brand { display: flex; align-items: center; gap: 14px; }
        .cv-brand-logo { width: 44px; height: 44px; flex-shrink: 0; }
        .cv-header h1 {
          font-size: 24px;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #0f172a;
          line-height: 1.15;
        }
        .cv-role {
          font-size: 13.5px;
          font-weight: 600;
          color: #6d28d9;
          margin-top: 2px;
        }
        .cv-contact {
          text-align: right;
          font-size: 12px;
          color: #334155;
          line-height: 1.65;
        }
        .cv-contact a { color: #334155; text-decoration: none; }
        .cv-section { margin-bottom: 14px; }
        .cv-section-title {
          font-size: 11.5px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #6d28d9;
          border-bottom: 1px solid #e2e8f0;
          padding-bottom: 4px;
          margin-bottom: 8px;
        }
        .cv-summary { color: #334155; text-align: justify; }
        .cv-skills-table { width: 100%; border-collapse: collapse; }
        .cv-skills-table td { padding: 3px 0; vertical-align: top; }
        .cv-skills-table td.label { width: 155px; font-weight: 700; color: #0f172a; }
        .cv-skills-table td.val { color: #334155; }
        .cv-item { margin-bottom: 10px; }
        .cv-item:last-child { margin-bottom: 0; }
        .cv-item-head {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 12px;
        }
        .cv-item-title { font-weight: 700; font-size: 13.5px; color: #0f172a; }
        .cv-item-sub { font-weight: 600; color: #0891b2; font-size: 12.2px; }
        .cv-item-meta { font-size: 11.8px; font-weight: 600; color: #64748b; white-space: nowrap; }
        .cv-item ul { margin: 4px 0 0 16px; color: #334155; }
        .cv-item li { margin-bottom: 2.5px; }
        .cv-cert-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px 16px; }
        .cv-cert-box {
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 8px 11px;
          background: #f8fafc;
        }
        .cv-cert-box h4 { font-size: 12.5px; font-weight: 700; color: #0f172a; }
        .cv-cert-box .issuer { font-size: 11.5px; font-weight: 600; color: #6d28d9; margin-bottom: 2px; }
        .cv-cert-box p { font-size: 11.5px; color: #334155; }
        @media print {
          .cv-toolbar { display: none !important; }
          .cv-sheet { box-shadow: none; border-radius: 0; padding: 10mm 14mm; max-width: 100%; }
        }
        @media (max-width: 640px) {
          .cv-header { flex-direction: column; }
          .cv-contact { text-align: left; }
          .cv-cert-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="cv-toolbar">
        <Link href="/" className="cv-btn">
          <i className="fas fa-arrow-left"></i> Back to Portfolio
        </Link>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <a href="/assets/resume.pdf" download className="cv-btn">
            <i className="fas fa-download"></i> Download PDF
          </a>
          <button
            type="button"
            onClick={() => window.print()}
            className="cv-btn primary"
          >
            <i className="fas fa-print"></i> Print / Save as PDF
          </button>
        </div>
      </div>

      <main className="cv-sheet">
        <header className="cv-header">
          <div className="cv-brand">
            <svg
              className="cv-brand-logo"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="cvGrad"
                  x1="0"
                  y1="0"
                  x2="36"
                  y2="36"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="#7c3aed" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
              <rect
                x="2"
                y="2"
                width="32"
                height="32"
                rx="10"
                fill="#050b18"
                stroke="url(#cvGrad)"
                strokeWidth="2"
              />
              <path
                d="M11.5 11.5L18 19.2L24.5 11.5M18 19.2V25.5"
                stroke="url(#cvGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="25.5" cy="24.5" r="1.9" fill="#06b6d4" />
            </svg>
            <div>
              <h1>YAHYA AL FARUQ</h1>
              <div className="cv-role">
                Full-Stack Software Engineer · Laravel, React, TypeScript &amp;
                Node.js
              </div>
            </div>
          </div>
          <div className="cv-contact">
            <div>
              <i className="fas fa-envelope"></i>{' '}
              <a href="mailto:jhonelfarq@gmail.com">jhonelfarq@gmail.com</a>
            </div>
            <div>
              <i className="fab fa-whatsapp"></i> +62 813-2992-4856
            </div>
            <div>
              <i className="fas fa-map-marker-alt"></i> Makassar / Solo Raya,
              Indonesia
            </div>
            <div>
              <i className="fab fa-github"></i>{' '}
              <a
                href="https://github.com/yahyaalfaruq"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/yahyaalfaruq
              </a>
            </div>
          </div>
        </header>

        <section className="cv-section">
          <h2 className="cv-section-title">Professional Summary</h2>
          <p className="cv-summary">
            Full-Stack Software Engineer educated in Information &amp;
            Technology (IT) and Tahfidz Al-Qur&apos;an at{' '}
            <strong>Pondok Pesantren Qur&apos;an &amp; IT Al Mahir (PPQITA)</strong>
            , Karanganyar (Solo Raya). Experienced in architecting and deploying
            50+ web repositories and institutional platforms — including{' '}
            <strong>SIAKAD Almahira</strong> (Assessment, Attendance, Tahfidz
            Tracking &amp; Digital Report Cards), Student Master Registry
            systems, Point-of-Sale (POS) cashier apps, offline-first PWAs, and
            RESTful APIs using{' '}
            <strong>
              Laravel 12, React 19, TypeScript, Node.js, and Supabase
            </strong>
            . Certified in Responsive Web Design (PPQITA), TEKNOVISTAFEST Web
            Design Competition (Universitas Airlangga), Arabic Language
            Preparation (<em>Mumtaz / 87.50%</em> — Darul Lughah Al Arabiyah),
            and Intensive English (Pare-Dise Kampung Inggris).
          </p>
        </section>

        <section className="cv-section">
          <h2 className="cv-section-title">Technical Skills</h2>
          <table className="cv-skills-table">
            <tbody>
              <tr>
                <td className="label">Frontend Development</td>
                <td className="val">
                  HTML5, CSS3, Tailwind CSS, JavaScript (ES6+), TypeScript,
                  React.js (React 19), Next.js, Alpine.js, Blade, Vite, Framer
                  Motion, PWA (Service Worker &amp; IndexedDB)
                </td>
              </tr>
              <tr>
                <td className="label">Backend Development</td>
                <td className="val">
                  PHP 8.2+, Laravel 11/12 (Modular Architecture, DomPDF, Spatie
                  Activitylog), Node.js, Express.js, RESTful API Design, GraphQL
                </td>
              </tr>
              <tr>
                <td className="label">Database &amp; Cloud</td>
                <td className="val">
                  MySQL, PostgreSQL, Supabase (Cloud Database &amp; Row-Level
                  Security), SQLite, MongoDB, IndexedDB, LocalStorage
                </td>
              </tr>
              <tr>
                <td className="label">Tools &amp; Workflow</td>
                <td className="val">
                  Git, GitHub, Vercel, Composer, NPM, SheetJS (XLSX), Laragon,
                  XAMPP, Figma, Postman, Linux CLI
                </td>
              </tr>
              <tr>
                <td className="label">Languages</td>
                <td className="val">
                  Indonesian (Native), Arabic (Certified <em>Mumtaz</em> —
                  87.50%), English (Certified — Kampung Inggris Pare)
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="cv-section">
          <h2 className="cv-section-title">
            Featured Projects &amp; Engineering Experience
          </h2>

          <div className="cv-item">
            <div className="cv-item-head">
              <div>
                <span className="cv-item-title">
                  SIAKAD Almahira — Modul Penilaian, Presensi &amp; Raport
                  Digital
                </span>{' '}
                ·{' '}
                <span className="cv-item-sub">
                  Laravel 12, Tailwind CSS 4, Alpine.js, DomPDF, Supabase
                </span>
              </div>
              <span className="cv-item-meta">PPQ IT Al Mahir · 2025 – 2026</span>
            </div>
            <ul>
              <li>
                Engineered the core downstream module (
                <code>PenilaianDanPresensi</code>) integrating 5 sub-modules:
                Real-Time Analytics Dashboard, Academic Grading, Tahfidz
                Al-Qur&apos;an Tracking, Schedule-Based Attendance, and Student
                Leave/Sick Permits (<code>IzinSakit</code>).
              </li>
              <li>
                Built automated <strong>Smart Attendance Override</strong>:
                approving a student leave/sick request automatically syncs with
                active class schedules (<code>JadwalPelajaran</code>) and
                updates attendance records without manual teacher re-entry.
              </li>
              <li>
                Implemented dynamic weighted grading formulas (Daily Average,
                Mid-Term/UTS, Final/UAS) with KKM validation, automatic class
                ranking, Arabic predicate conversion (
                <em>Mumtaz, Jayyid Jiddan, Jayyid, Maqbul</em>), and
                print-optimized A4 Digital Report Cards (PDF).
              </li>
            </ul>
          </div>

          <div className="cv-item">
            <div className="cv-item-head">
              <div>
                <span className="cv-item-title">
                  Sistem Buku Induk &amp; Pendataan Siswa
                </span>{' '}
                ·{' '}
                <span className="cv-item-sub">
                  React 19, Vite 8, Supabase, Framer Motion, SheetJS (XLSX)
                </span>
              </div>
              <span className="cv-item-meta">PPQ IT Al Mahir · 2026</span>
            </div>
            <ul>
              <li>
                Developed a modern student registry and digital{' '}
                <em>Buku Induk Siswa</em> web platform connected to Supabase
                Cloud Database.
              </li>
              <li>
                Implemented multi-class student filtering, structured biodata
                management, and one-click spreadsheet import/export (
                <code>.xlsx</code>) using SheetJS.
              </li>
            </ul>
          </div>

          <div className="cv-item">
            <div className="cv-item-head">
              <div>
                <span className="cv-item-title">
                  Dompet Santri, Web Kasir (POS) &amp; PSB/PPDB Santri
                </span>{' '}
                ·{' '}
                <span className="cv-item-sub">
                  TypeScript, React.js, Next.js, Tailwind CSS, Vercel
                </span>
              </div>
              <span className="cv-item-meta">2024 – 2025</span>
            </div>
            <ul>
              <li>
                <strong>Dompet Santri &amp; Catatan Keuangan</strong> (
                <code>dompets-santri.vercel.app</code>): Built digital student
                allowance and financial ledger apps tailored for boarding school
                ecosystems.
              </li>
              <li>
                <strong>Web Kasir &amp; POS Coffee Shop</strong> (
                <code>web-kasir-pi.vercel.app</code>): Developed responsive
                Point-of-Sale cashier applications in TypeScript and React with
                real-time cart calculation and receipt generation.
              </li>
              <li>
                <strong>PSB / PPDB Santri</strong> (<code>psb-app</code>,{' '}
                <code>pdb-santri</code>): Created online student admission and
                enrollment management systems using TypeScript.
              </li>
            </ul>
          </div>

          <div className="cv-item">
            <div className="cv-item-head">
              <div>
                <span className="cv-item-title">
                  Tugazku (Offline-First PWA), SAS Todo-List Laravel &amp;
                  Qur&apos;an REST API
                </span>{' '}
                ·{' '}
                <span className="cv-item-sub">
                  JavaScript, IndexedDB, PWA, Laravel Blade, Node.js, Express.js
                </span>
              </div>
              <span className="cv-item-meta">2024 – 2025</span>
            </div>
            <ul>
              <li>
                <strong>Tugazku PWA</strong> (<code>tugazku.vercel.app</code>):
                Built an offline-first Progressive Web App for student task CRUD
                powered by browser IndexedDB and Service Workers.
              </li>
              <li>
                <strong>Qur&apos;an API &amp; Islamic Utilities</strong>: Built
                a TypeScript Qur&apos;an REST API (
                <code>api-application-quran</code>),{' '}
                <strong>Kalkulator Zakat Mal</strong>, and real-time{' '}
                <strong>Latin-to-Arabic Script Converter</strong>.
              </li>
              <li>
                <strong>Responsive Web Design Portfolio</strong>: Delivered 15+
                live websites including <em>Best Kaca Film</em>,{' '}
                <em>Mahir Wisata Travel</em>, <em>Ma&apos;had Umar Bin Khattab</em>,
                and <em>TEKNOVISTAFEST &amp; BytesFest 2024</em> entries.
              </li>
            </ul>
          </div>
        </section>

        <section className="cv-section">
          <h2 className="cv-section-title">Education</h2>
          <div className="cv-item">
            <div className="cv-item-head">
              <div>
                <span className="cv-item-title">
                  Pondok Pesantren Qur&apos;an &amp; IT Al Mahir (PPQITA)
                </span>{' '}
                ·{' '}
                <span className="cv-item-sub">
                  Information &amp; Technology (IT) and Tahfidz Al-Qur&apos;an
                </span>
              </div>
              <span className="cv-item-meta">
                Karanganyar, Jawa Tengah · 2023 – 2026
              </span>
            </div>
            <ul>
              <li>
                Completed secondary education (Program Kesetaraan Paket C — PKBM
                Inisiator Salam Kariim, NISN: 0086397610) with specialization in
                Software Engineering, Full-Stack Web Development, Arabic
                Language, and Tahfidz Al-Qur&apos;an.
              </li>
            </ul>
          </div>
        </section>

        <section className="cv-section" style={{ marginBottom: 0 }}>
          <h2 className="cv-section-title">Official Certifications</h2>
          <div className="cv-cert-grid">
            <div className="cv-cert-box">
              <h4>Responsive Web Design Certification</h4>
              <div className="issuer">
                Pondok Pesantren Qur&apos;an &amp; IT Al Mahir (PPQITA) · T.A.
                2023/2024
              </div>
              <p>
                Completed 1-semester intensive Responsive Web Design curriculum
                with <strong>Grade B (Baik / Good)</strong>. Signed by
                Headmaster Dhanny Ardiansyah.
              </p>
            </div>
            <div className="cv-cert-box">
              <h4>Web Design Competition — TEKNOVISTAFEST</h4>
              <div className="issuer">
                Fakultas Vokasi Universitas Airlangga (UNAIR) · 19 Oct 2024
              </div>
              <p>
                Awarded official certificate as Participant in the
                TEKNOVISTAFEST Web Design Competition organized by HIMA Teknik
                Informatika, Fakultas Vokasi Universitas Airlangga, Surabaya.
              </p>
            </div>
            <div className="cv-cert-box">
              <h4>Arabic Language Preparation (شهادة التفاصيل)</h4>
              <div className="issuer">
                Darul Lughah Al Arabiyah · 29 Jan 2024 · Reg No: 243193631
              </div>
              <p>
                Completed Level 1 Intensive Arabic Program with predicate{' '}
                <strong>Mumtaz (Excellent — 87.50%)</strong>: Listening 92,
                Speaking 89, Writing 85, Reading 84.
              </p>
            </div>
            <div className="cv-cert-box">
              <h4>English Program Kampung Inggris</h4>
              <div className="issuer">
                Pare-Dise International Language Academy · 18 Aug 2023 · Reg No:
                005654
              </div>
              <p>
                Completed 1-month intensive English communication program at
                Pare-Dise, Kampung Inggris Pare, Kediri (NPSN: K9989845).
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

