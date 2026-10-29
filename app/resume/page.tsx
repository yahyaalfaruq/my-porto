'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

type Lang = 'en' | 'id' | 'ar';

interface CvDict {
  back: string;
  download: string;
  print: string;
  role: string;
  loc: string;
  summary_title: string;
  summary: string;
  skills_title: string;
  sk_fe: string;
  sk_be: string;
  sk_db: string;
  sk_tools: string;
  sk_lang: string;
  sk_lang_val: string;
  exp_title: string;
  exp1_title: string;
  exp1_sub: string;
  exp1_meta: string;
  exp1_b1: string;
  exp1_b2: string;
  exp1_b3: string;
  exp2_title: string;
  exp2_sub: string;
  exp2_meta: string;
  exp2_b1: string;
  exp2_b2: string;
  exp2_b3: string;
  exp3_title: string;
  exp3_sub: string;
  exp3_meta: string;
  exp3_b1: string;
  exp3_b2: string;
  edu_title: string;
  edu1_title: string;
  edu1_sub: string;
  edu1_meta: string;
  edu1_b1: string;
  cert_title: string;
  c1_t: string;
  c1_i: string;
  c1_d: string;
  c2_t: string;
  c2_i: string;
  c2_d: string;
  c3_t: string;
  c3_i: string;
  c3_d: string;
  c4_t: string;
  c4_i: string;
  c4_d: string;
}

const CV_DATA: Record<Lang, CvDict> = {
  en: {
    back: 'Back to Portfolio',
    download: 'Download PDF',
    print: 'Print / Save as PDF',
    role: 'Full-Stack Software Engineer · Laravel, React, TypeScript & Node.js',
    loc: 'Makassar / Solo Raya, Indonesia',
    summary_title: 'Professional Summary',
    summary:
      "Full-Stack Software Engineer educated in Information & Technology (IT) and Tahfidz Al-Qur'an at Pondok Pesantren Qur'an & IT Al Mahir (PPQITA), Karanganyar (Solo Raya). Experienced in architecting and deploying 50+ web repositories and institutional platforms including SIAKAD Almahira (Assessment, Attendance, Tahfidz Tracking & Digital Report Cards), Student Master Registry systems, Point-of-Sale (POS) cashier apps, offline-first PWAs, and RESTful APIs using Laravel 12, React 19, TypeScript, Node.js, and Supabase. Certified in Responsive Web Design (PPQITA), TEKNOVISTAFEST Web Design Competition (Universitas Airlangga), Arabic Language Preparation (Mumtaz / 87.50% — Darul Lughah Al Arabiyah), and Intensive English (Pare-Dise Kampung Inggris).",
    skills_title: 'Technical Skills',
    sk_fe: 'Frontend Development',
    sk_be: 'Backend Development',
    sk_db: 'Database & Cloud',
    sk_tools: 'Tools & Workflow',
    sk_lang: 'Languages',
    sk_lang_val: 'Indonesian (Native), Arabic (Certified Mumtaz · 87.50%), English (Certified · Kampung Inggris Pare)',
    exp_title: 'Featured Projects & Engineering Experience',
    exp1_title: 'SIAKAD Almahira · Assessment, Attendance & Digital Report Cards',
    exp1_sub: 'Laravel 12, Tailwind CSS 4, Alpine.js, DomPDF, Supabase',
    exp1_meta: 'PPQ IT Al Mahir · 2025 – 2026',
    exp1_b1:
      'Engineered the core downstream module (PenilaianDanPresensi) integrating 5 sub-modules: Real-Time Analytics Dashboard, Academic Grading, Tahfidz Al-Qur\'an Tracking, Schedule-Based Attendance, and Student Leave/Sick Permits (IzinSakit).',
    exp1_b2:
      'Built automated Smart Attendance Override: approving a student leave/sick request automatically syncs with active class schedules (JadwalPelajaran) and updates attendance records without manual teacher re-entry.',
    exp1_b3:
      'Implemented dynamic weighted grading formulas (Daily Average, Mid-Term/UTS, Final/UAS) with KKM validation, automatic class ranking, Arabic predicate conversion (Mumtaz, Jayyid Jiddan, Jayyid, Maqbul), and print-optimized A4 Digital Report Cards (PDF).',
    exp2_title: 'Student Master Registry, POS Cashier & Santri Platforms',
    exp2_sub: 'React 19, TypeScript, Vite, SheetJS (XLSX), Supabase',
    exp2_meta: '2024 – 2026',
    exp2_b1:
      'Developed modern student registry & digital Buku Induk platform connected to Supabase Cloud Database with multi-class filtering and one-click Excel (.xlsx) import/export using SheetJS.',
    exp2_b2:
      'Built Web Kasir POS (TypeScript) with real-time shopping cart calculation, receipts, and responsive cashier layout.',
    exp2_b3:
      'Built Dompet Santri (student digital allowance tracker) and PSB/PPDB online student admission portals on Vercel.',
    exp3_title: 'Tugazku PWA, Qur\'an REST API & Responsive Web Portfolios',
    exp3_sub: 'IndexedDB, Service Worker, Node.js, Express.js, TypeScript',
    exp3_meta: '2023 – 2025',
    exp3_b1:
      'Created Tugazku offline-first Progressive Web App (PWA) with client-side task persistence using browser IndexedDB and Service Workers.',
    exp3_b2:
      'Architected RESTful Qur\'an API service in TypeScript, Zakat Mal Calculator, Latin-to-Arabic Converter, and 15+ live client web apps including Best Kaca Film and Mahir Wisata.',
    edu_title: 'Education',
    edu1_title: "Pondok Pesantren Qur'an & IT Al Mahir (PPQITA)",
    edu1_sub: "Information & Technology (IT) and Tahfidz Al-Qur'an",
    edu1_meta: 'Karanganyar, Jawa Tengah · 2023 – 2026',
    edu1_b1:
      'Completed secondary education (Program Kesetaraan Paket C — PKBM Inisiator Salam Kariim, NISN: 0086397610) with specialization in Software Engineering, Full-Stack Web Development, Arabic Language, and Tahfidz Al-Qur\'an.',
    cert_title: 'Official Certifications',
    c1_t: 'Responsive Web Design Certification',
    c1_i: 'PPQ IT Al Mahir (PPQITA) · T.A. 2023/2024',
    c1_d: 'Completed 1-semester intensive Responsive Web Design curriculum with Grade B (Good). Signed by Headmaster Dhanny Ardiansyah.',
    c2_t: 'Web Design Competition — TEKNOVISTAFEST',
    c2_i: 'Fakultas Vokasi Universitas Airlangga (UNAIR) · 19 Oct 2024',
    c2_d: 'Awarded official certificate as Participant in the TEKNOVISTAFEST Web Design Competition organized by HIMA Teknik Informatika UNAIR.',
    c3_t: 'Arabic Language Preparation (Mumtaz / 87.50)',
    c3_i: 'Darul Lughah Al Arabiyah · 29 Jan 2024 · Reg: 243193631',
    c3_d: 'Graduated Level 1 Arabic with predicate Mumtaz (87.50%): Listening 92, Speaking 89, Writing 85, Reading 84.',
    c4_t: 'Intensive English Program Kampung Inggris',
    c4_i: 'Pare-Dise International Language Academy · 18 Aug 2023 · Reg: 005654',
    c4_d: 'Completed 1-month intensive English communication program at Pare-Dise, Kampung Inggris Pare, Kediri.',
  },
  id: {
    back: 'Kembali ke Portfolio',
    download: 'Unduh PDF',
    print: 'Cetak / Simpan PDF',
    role: 'Full-Stack Software Engineer · Laravel, React, TypeScript & Node.js',
    loc: 'Makassar / Solo Raya, Indonesia',
    summary_title: 'Ringkasan Profesional',
    summary:
      "Full-Stack Software Engineer lulusan program Informasi & Teknologi (IT) dan Tahfidz Al-Qur'an di Pondok Pesantren Qur'an & IT Al Mahir (PPQITA), Karanganyar (Solo Raya). Berpengalaman merancang dan mempublikasikan 50+ repositori web dan sistem institusi — termasuk SIAKAD Almahira (Modul Penilaian, Presensi Pintar, Tahfidz & Cetak Raport Digital), Sistem Buku Induk Siswa, aplikasi kasir POS, PWA offline-first, dan RESTful API menggunakan Laravel 12, React 19, TypeScript, Node.js, dan Supabase. Memiliki sertifikasi resmi Responsive Web Design (PPQITA), Lomba Web Design TEKNOVISTAFEST (Universitas Airlangga), Bahasa Arab (Predikat Mumtaz / 87.50% — Darul Lughah Al Arabiyah), dan Bahasa Inggris (Pare-Dise Kampung Inggris).",
    skills_title: 'Keahlian Teknis',
    sk_fe: 'Pengembangan Frontend',
    sk_be: 'Pengembangan Backend',
    sk_db: 'Basis Data & Cloud',
    sk_tools: 'Alat Kerja & Workflow',
    sk_lang: 'Bahasa',
    sk_lang_val: 'Bahasa Indonesia (Penutur Asli), Bahasa Arab (Sertifikat Mumtaz · 87.50%), Bahasa Inggris (Sertifikat · Kampung Inggris Pare)',
    exp_title: 'Proyek Unggulan & Pengalaman Rekayasa',
    exp1_title: 'SIAKAD Almahira · Modul Penilaian, Presensi & Raport Digital',
    exp1_sub: 'Laravel 12, Tailwind CSS 4, Alpine.js, DomPDF, Supabase',
    exp1_meta: 'PPQ IT Al Mahir · 2025 – 2026',
    exp1_b1:
      'Merancang modul inti (PenilaianDanPresensi) yang mengintegrasikan 5 sub-modul: Dashboard Statistik Real-Time, Penilaian Akademik Guru, Rekap Tahfidz Al-Qur\'an, Presensi Terintegrasi Jadwal, dan Pengajuan Izin/Sakit Siswa (IzinSakit).',
    exp1_b2:
      'Membangun sinkronisasi otomatis Smart Attendance Override: persetujuan izin/sakit otomatis memperbarui presensi jam pelajaran aktif tanpa input ulang manual oleh guru pengampu.',
    exp1_b3:
      'Menerapkan kalkulasi pembobotan nilai dinamis (Rata-rata Harian, UTS, UAS) dengan validasi KKM, perankingan otomatis, konversi predikat Arab (Mumtaz, Jayyid Jiddan, Jayyid, Maqbul), dan cetak raport digital A4 (DomPDF).',
    exp2_title: 'Sistem Buku Induk Siswa, Web Kasir POS & Portal Santri',
    exp2_sub: 'React 19, TypeScript, Vite, SheetJS (XLSX), Supabase',
    exp2_meta: '2024 – 2026',
    exp2_b1:
      'Mengembangkan platform Buku Induk Siswa terhubung ke Cloud Database Supabase dengan fitur filter multi-kelas dan ekspor/impor spreadsheet Excel (.xlsx) sekali klik menggunakan SheetJS.',
    exp2_b2:
      'Membangun aplikasi kasir POS (TypeScript) dengan perhitungan keranjang belanja real-time, cetak struk, dan tampilan antarmuka kasir yang responsif.',
    exp2_b3:
      'Mengembangkan Dompet Santri (pencatat keuangan santri) dan portal pendaftaran santri baru (PSB/PPDB) di Vercel.',
    exp3_title: 'Tugazku PWA, REST API Al-Qur\'an & Portfolio Web Responsif',
    exp3_sub: 'IndexedDB, Service Worker, Node.js, Express.js, TypeScript',
    exp3_meta: '2023 – 2025',
    exp3_b1:
      'Membangun aplikasi web progresif Tugazku PWA yang berfungsi offline menggunakan Service Worker dan penyimpanan IndexedDB browser.',
    exp3_b2:
      'Merancang REST API Al-Qur\'an dengan TypeScript, Kalkulator Zakat Mal, Konversi Latin ke Arab, dan 15+ website klien aktif termasuk Best Kaca Film dan Mahir Wisata.',
    edu_title: 'Pendidikan',
    edu1_title: "Pondok Pesantren Qur'an & IT Al Mahir (PPQITA)",
    edu1_sub: "Informasi & Teknologi (IT) dan Tahfidz Al-Qur'an",
    edu1_meta: 'Karanganyar, Jawa Tengah · 2023 – 2026',
    edu1_b1:
      'Menyelesaikan pendidikan menengah (Program Kesetaraan Paket C — PKBM Inisiator Salam Kariim, NISN: 0086397610) dengan fokus Rekayasa Perangkat Lunak, Pengembangan Web Full-Stack, Bahasa Arab, dan Tahfidz Al-Qur\'an.',
    cert_title: 'Sertifikasi Resmi',
    c1_t: 'Sertifikat Responsive Web Design',
    c1_i: 'PPQ IT Al Mahir (PPQITA) · T.A. 2023/2024',
    c1_d: 'Menyelesaikan kurikulum intensif Responsive Web Design selama 1 semester dengan Predikat B (Baik). Ditandatangani Kepala Sekolah Dhanny Ardiansyah.',
    c2_t: 'Sertifikat Lomba Web Design — TEKNOVISTAFEST',
    c2_i: 'Fakultas Vokasi Universitas Airlangga (UNAIR) · 19 Okt 2024',
    c2_d: 'Diberikan sebagai Peserta pada Lomba Web Design TEKNOVISTAFEST yang diselenggarakan oleh HIMA Teknik Informatika UNAIR Surabaya.',
    c3_t: 'Sertifikat Bahasa Arab (Predikat Mumtaz / 87.50)',
    c3_i: 'Darul Lughah Al Arabiyah · 29 Jan 2024 · No: 243193631',
    c3_d: 'Lulus program I\'dad Lughawiy Tingkat Pertama dengan predikat Mumtaz (87.50%): Istima\' 92, Kalam 89, Kitabah 85, Qira\'ah 84.',
    c4_t: 'Sertifikat Program Bahasa Inggris Kampung Inggris',
    c4_i: 'Pare-Dise International Language Academy · 18 Agu 2023 · No: 005654',
    c4_d: 'Menyelesaikan program intensif komunikasi Bahasa Inggris selama 1 bulan di Pare-Dise, Kampung Inggris Pare, Kediri.',
  },
  ar: {
    back: 'العودة للموقع',
    download: 'تحميل PDF',
    print: 'طباعة / حفظ PDF',
    role: 'مهندس برمجيات Full-Stack · Laravel, React, TypeScript & Node.js',
    loc: 'ماكاسار / صولو، إندونيسيا',
    summary_title: 'الملخص المهني',
    summary:
      'مهندس برمجيات Full-Stack خريج تخصص تقنية المعلومات (IT) وتحفيظ القرآن الكريم في معهد القرآن وتقنية المعلومات الماهر (PPQITA) بصولو. يمتلك خبرة عملية في تطوير ونشر أكثر من 50 مستودعاً برمجياً وأنظمة مؤسسية، تشمل نظام SIAKAD Almahira (وحدات التقييم ورصد الدرجات، والحضور الذكي، ومتابعة التحفيظ، وطباعة الشهادات الرقمية)، ونظام سجل الطلاب العام، وتطبيقات نقاط البيع والكاشير، وتطبيقات الويب التقدمية PWA دون اتصال، وواجهات RESTful API باستخدام Laravel 12 وReact 19 وTypeScript وNode.js وSupabase. حاصل على شهادات معتمدة في تصميم الويب المتجاوب، ومسابقة TEKNOVISTAFEST بجامعة إيرلانغا، واللغة العربية (بتقدير ممتاز 87.50% — دار اللغة العربية)، واللغة الإنجليزية (باري، كديري).',
    skills_title: 'المهارات التقنية',
    sk_fe: 'تطوير الواجهات الأمامية (Frontend)',
    sk_be: 'تطوير الخوادم الخلفية (Backend)',
    sk_db: 'قواعد البيانات والسحابة',
    sk_tools: 'الأدوات وسير العمل',
    sk_lang: 'اللغات',
    sk_lang_val: 'الإندونيسية (اللغة الأم)، العربية (شهادة ممتاز · 87.50%)، الإنجليزية (شهادة معتمدة · قرية الإنجليزية باري)',
    exp_title: 'المشاريع البارزة والخبرة البرمجية',
    exp1_title: 'نظام SIAKAD Almahira · وحدة التقييم والحضور والشهادات الرقمية',
    exp1_sub: 'Laravel 12, Tailwind CSS 4, Alpine.js, DomPDF, Supabase',
    exp1_meta: 'معهد الماهر PPQITA · ٢٠٢٥ – ٢٠٢٦',
    exp1_b1:
      'هندسة الوحدة الأساسية (PenilaianDanPresensi) التي تدمج 5 وحدات فرعية: لوحة إحصاءات فورية، ورصد درجات الطلاب، ومتابعة إنجاز تحفيظ القرآن، والحضور المرتبط بالجدول الدراسي، وتصاريح الإجازات المرضية (IzinSakit).',
    exp1_b2:
      'بناء نظام المزامنة التلقائية (Smart Attendance Override): اعتماد إجازة الطالب يعكس غيابه مباشرة على حصص اليوم دون الحاجة لإدخال يدوي مكرر من المعلمين.',
    exp1_b3:
      'تطبيق معادلات حساب الدرجات التلقائية (معدل اليومي، النصفي، النهائي) مع معايير النجاح KKM، والترتيب الصفي الآلي، والتقديرات العربية (ممتاز، جيد جداً، جيد، مقبول)، وطباعة الشهادات الرقمية A4 بتنسيق PDF.',
    exp2_title: 'سجل الطلاب الرقمي، ونظام الكاشير POS، والمنظومة الطلابية',
    exp2_sub: 'React 19, TypeScript, Vite, SheetJS (XLSX), Supabase',
    exp2_meta: '٢٠٢٤ – ٢٠٢٦',
    exp2_b1:
      'تطوير نظام سجل الطلاب العام (Buku Induk) المتصل بقاعدة بيانات Supabase مع تصنيف الفصول وتصدير واستيراد جداول Excel (.xlsx) بنقرة واحدة عبر SheetJS.',
    exp2_b2:
      'بناء تطبيق كاشير ونقاط بيع Web Kasir POS بـ TypeScript مع حسابات فورية لسلة المشتريات وطباعة الإيصالات.',
    exp2_b3:
      'تطوير تطبيق محفظة الطالب المالية (Dompet Santri) وبوابات تسجيل وقبول الطلاب الجدد (PSB) على منصة Vercel.',
    exp3_title: 'تطبيق Tugazku PWA، وواجهة القرآن الكريم، وتصميم المواقع',
    exp3_sub: 'IndexedDB, Service Worker, Node.js, Express.js, TypeScript',
    exp3_meta: '٢٠٢٣ – ٢٠٢٥',
    exp3_b1:
      'بناء تطبيق المهام التقدمي Tugazku PWA الذي يعمل دون اتصال بالإنترنت باستخدام Service Worker وقاعدة بيانات المتصفح IndexedDB.',
    exp3_b2:
      'تطوير واجهة برمجة تطبيقات القرآن الكريم REST API بـ TypeScript، وحاسبة زكاة المال، ومحول الخط اللاتيني إلى العربي، وأكثر من 15 موقعاً حياً مثل Best Kaca Film وMahir Wisata.',
    edu_title: 'التعليم',
    edu1_title: 'معهد القرآن وتقنية المعلومات الماهر (PPQITA)',
    edu1_sub: 'تخصص تقنية المعلومات (IT) وتحفيظ القرآن الكريم',
    edu1_meta: 'كارانغانيار، صولو، إندونيسيا · ٢٠٢٣ – ٢٠٢٦',
    edu1_b1:
      'إتمام المرحلة الثانوية (برنامج Kesetaraan Paket C — الرقم التعريفي الوطني NISN: 0086397610) مع التركيز على هندسة البرمجيات، وتطوير الويب المتكامل، واللغة العربية، والعلوم الشرعية وتحفيظ القرآن.',
    cert_title: 'الشهادات الرسمية',
    c1_t: 'شهادة تصميم الويب المتجاوب (Responsive Web Design)',
    c1_i: 'معهد القرآن وتقنية المعلومات الماهر · ٢٠٢٣/٢٠٢٤',
    c1_d: 'إتمام دراسة منهج تصميم الويب المتجاوب لمدة فصل دراسي مكثف بتقدير جيد (Grade B) بتوقيع مدير المعهد الأستاذ داني أرديانشاه.',
    c2_t: 'شهادة مسابقة تصميم الويب — TEKNOVISTAFEST',
    c2_i: 'كلية الدراسات المهنية بجامعة إيرلانغا (UNAIR) · ١٩ أكتوبر ٢٠٢٤',
    c2_d: 'شهادة مشاركة رسمية في مسابقة TEKNOVISTAFEST لتصميم الويب المنظمة من رابطة هندسة المعلوماتية بجامعة إيرلانغا، سورابايا.',
    c3_t: 'شهادة إعداد اللغة العربية (بتقدير ممتاز / 87.50)',
    c3_i: 'دار اللغة العربية · ٢٩ يناير ٢٠٢٤ · رقم القيد: 243193631',
    c3_d: 'التخرج من المستوى الأول لإعداد اللغة العربية بتقدير ممتاز (87.50%): الاستماع 92، المحادثة 89، الكتابة 85، القراءة 84.',
    c4_t: 'شهادة برنامج اللغة الإنجليزية المكثف',
    c4_i: 'أكاديمية Pare-Dise للغات · ١٨ أغسطس ٢٠٢٣ · رقم: 005654',
    c4_d: 'إتمام دورة مكثفة في مهارات التواصل باللغة الإنجليزية لمدة شهر في قرية الإنجليزية باري، كديري.',
  },
};

export default function ResumePage() {
  const [lang, setLang] = useState<Lang>('en');

  // Load language preference from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('lang') as Lang | null;
    if (saved && CV_DATA[saved]) {
      setLang(saved);
    }
  }, []);

  const handleLangChange = (newLang: Lang) => {
    setLang(newLang);
    localStorage.setItem('lang', newLang);
  };

  const isRtl = lang === 'ar';
  const t = CV_DATA[lang];

  return (
    <div className={`cv-page-root ${isRtl ? 'is-rtl' : 'is-ltr'}`} dir={isRtl ? 'rtl' : 'ltr'}>
      <style>{`
        .cv-page-root {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          background: #f4f4f5;
          color: #09090b;
          line-height: 1.5;
          font-size: 13.2px;
          padding: 32px 16px;
          min-height: 100vh;
        }
        .cv-page-root.is-rtl {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans Arabic', Tahoma, sans-serif;
        }
        .cv-toolbar {
          max-width: 210mm;
          margin: 0 auto 18px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }
        .cv-actions-group {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }
        .cv-lang-picker {
          display: inline-flex;
          align-items: center;
          background: #fff;
          border: 1px solid #d4d4d8;
          border-radius: 999px;
          padding: 3px;
          gap: 2px;
        }
        .cv-lang-btn {
          border: none;
          background: transparent;
          color: #71717a;
          font-size: 11.5px;
          font-weight: 700;
          padding: 5px 11px;
          border-radius: 999px;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        .cv-lang-btn:hover {
          color: #09090b;
        }
        .cv-lang-btn.active {
          background: #09090b;
          color: #fafafa;
        }
        .cv-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
          border: 1px solid #d4d4d8;
          background: #fff;
          color: #09090b;
          transition: all 0.2s;
        }
        .cv-btn:hover { border-color: #09090b; color: #09090b; background: #f4f4f5; }
        .cv-btn.primary {
          background: #09090b;
          color: #fafafa;
          border: 1px solid #09090b;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);
        }
        .cv-btn.primary:hover {
          background: #27272a;
          color: #fafafa;
        }
        .cv-sheet {
          max-width: 210mm;
          margin: 0 auto;
          background: #fff;
          padding: 16mm 18mm;
          border-radius: 12px;
          border: 1px solid #e4e4e7;
          box-shadow: 0 10px 35px rgba(0, 0, 0, 0.06);
          box-sizing: border-box;
        }
        .cv-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 20px;
          padding: 0 0 14px 0 !important;
          border-bottom: 2px solid #09090b;
          margin-bottom: 14px;
          position: static !important;
          background: transparent !important;
        }
        .cv-brand { display: flex; align-items: center; gap: 14px; }
        .cv-brand-logo { width: 44px; height: 44px; flex-shrink: 0; }
        .cv-header h1 {
          font-size: 24px;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #09090b;
          line-height: 1.15;
          margin: 0;
        }
        .cv-page-root.is-rtl .cv-header h1 {
          letter-spacing: 0;
        }
        .cv-role {
          font-size: 13.5px;
          font-weight: 600;
          color: #3f3f46;
          margin-top: 2px;
        }
        .cv-contact {
          font-size: 12px;
          color: #3f3f46;
          line-height: 1.65;
          white-space: nowrap;
        }
        .cv-page-root.is-ltr .cv-contact { text-align: right; }
        .cv-page-root.is-rtl .cv-contact { text-align: left; }
        .cv-contact a { color: #3f3f46; text-decoration: none; }
        .cv-contact i { width: 14px; text-align: center; }
        .cv-section {
          padding: 0 !important;
          margin: 0 0 14px 0 !important;
          position: static !important;
        }
        .cv-section-title {
          font-size: 11.5px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #09090b;
          border-bottom: 1px solid #d4d4d8;
          padding-bottom: 4px;
          margin-bottom: 8px;
        }
        .cv-page-root.is-rtl .cv-section-title {
          letter-spacing: 0;
          font-size: 12.5px;
        }
        .cv-summary { color: #27272a; text-align: justify; margin: 0; line-height: 1.65; }
        .cv-skills-table { width: 100%; border-collapse: collapse; }
        .cv-skills-table td { padding: 3px 0; vertical-align: top; }
        .cv-skills-table td.label { width: 175px; font-weight: 700; color: #09090b; }
        .cv-skills-table td.val { color: #27272a; }
        .cv-item { margin-bottom: 10px; }
        .cv-item:last-child { margin-bottom: 0; }
        .cv-item-head {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 12px;
        }
        .cv-item-title { font-weight: 700; font-size: 13.5px; color: #09090b; }
        .cv-item-sub { font-weight: 600; color: #52525b; font-size: 12.2px; }
        .cv-item-meta { font-size: 11.8px; font-weight: 600; color: #71717a; white-space: nowrap; font-family: 'Fira Code', monospace; }
        .cv-item ul { margin: 4px 0 0 18px; color: #27272a; }
        .cv-page-root.is-rtl .cv-item ul { margin: 4px 18px 0 0; }
        .cv-item li { margin-bottom: 2.5px; line-height: 1.6; }
        .cv-cert-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px 16px; }
        .cv-cert-box {
          border: 1px solid #e4e4e7;
          border-radius: 8px;
          padding: 8px 11px;
          background: #fafafa;
        }
        .cv-cert-box h4 { font-size: 12.5px; font-weight: 700; color: #09090b; margin: 0 0 2px 0; }
        .cv-cert-box .issuer { font-size: 11.5px; font-weight: 600; color: #52525b; margin-bottom: 2px; }
        .cv-cert-box p { font-size: 11.5px; color: #27272a; margin: 0; line-height: 1.5; }
        @media print {
          .cv-page-root { background: #fff; padding: 0; }
          .cv-toolbar { display: none !important; }
          .cv-sheet { box-shadow: none; border: none; border-radius: 0; padding: 10mm 14mm; max-width: 100%; }
        }
        @media (max-width: 640px) {
          .cv-header { flex-direction: column; }
          .cv-contact { text-align: left !important; }
          .cv-cert-grid { grid-template-columns: 1fr; }
          .cv-item-head { flex-direction: column; gap: 2px; }
          .cv-skills-table td.label { width: 130px; }
        }
      `}</style>

      {/* Toolbar */}
      <div className="cv-toolbar">
        <Link href="/" className="cv-btn">
          <i className={`fas ${isRtl ? 'fa-arrow-right' : 'fa-arrow-left'}`}></i> {t.back}
        </Link>
        <div className="cv-actions-group">
          {/* Language Switcher */}
          <div className="cv-lang-picker" aria-label="Resume Language">
            <button
              type="button"
              className={`cv-lang-btn ${lang === 'en' ? 'active' : ''}`}
              onClick={() => handleLangChange('en')}
            >
              EN
            </button>
            <button
              type="button"
              className={`cv-lang-btn ${lang === 'id' ? 'active' : ''}`}
              onClick={() => handleLangChange('id')}
            >
              ID
            </button>
            <button
              type="button"
              className={`cv-lang-btn ${lang === 'ar' ? 'active' : ''}`}
              onClick={() => handleLangChange('ar')}
            >
              العربية
            </button>
          </div>
          <a href="/assets/resume.pdf" download className="cv-btn">
            <i className="fas fa-download"></i> {t.download}
          </a>
          <button
            type="button"
            onClick={() => window.print()}
            className="cv-btn primary"
          >
            <i className="fas fa-print"></i> {t.print}
          </button>
        </div>
      </div>

      {/* Main Resume Sheet */}
      <main className="cv-sheet">
        <div className="cv-header">
          <div className="cv-brand">
            <svg
              className="cv-brand-logo"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect
                x="2"
                y="2"
                width="32"
                height="32"
                rx="8"
                fill="#09090b"
                stroke="#09090b"
                strokeWidth="2"
              />
              <path
                d="M11.5 11.5L18 19.2L24.5 11.5M18 19.2V25.5"
                stroke="#fafafa"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="25.5" cy="24.5" r="1.9" fill="#fafafa" />
            </svg>
            <div>
              <h1>{isRtl ? 'يحيى الفاروق' : 'YAHYA AL FARUQ'}</h1>
              <div className="cv-role">{t.role}</div>
            </div>
          </div>
          <div className="cv-contact">
            <div>
              <i className="fas fa-envelope"></i>{' '}
              <a href="mailto:jhonelfarq@gmail.com">
                <bdi dir="ltr">jhonelfarq@gmail.com</bdi>
              </a>
            </div>
            <div>
              <i className="fab fa-whatsapp"></i>{' '}
              <bdi dir="ltr">+62 813-2992-4856</bdi>
            </div>
            <div>
              <i className="fas fa-map-marker-alt"></i> {t.loc}
            </div>
            <div>
              <i className="fab fa-github"></i>{' '}
              <a
                href="https://github.com/yahyaalfaruq"
                target="_blank"
                rel="noopener noreferrer"
              >
                <bdi dir="ltr">github.com/yahyaalfaruq</bdi>
              </a>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="cv-section">
          <h2 className="cv-section-title">{t.summary_title}</h2>
          <p className="cv-summary">{t.summary}</p>
        </div>

        {/* Technical Skills */}
        <div className="cv-section">
          <h2 className="cv-section-title">{t.skills_title}</h2>
          <table className="cv-skills-table">
            <tbody>
              <tr>
                <td className="label">{t.sk_fe}</td>
                <td className="val">
                  <bdi dir="ltr">HTML5, CSS3, Tailwind CSS, JavaScript (ES6+), TypeScript, React 19, Next.js, Alpine.js, Blade, Vite, Framer Motion, PWA (IndexedDB)</bdi>
                </td>
              </tr>
              <tr>
                <td className="label">{t.sk_be}</td>
                <td className="val">
                  <bdi dir="ltr">PHP 8.2+, Laravel 11/12, Node.js, Express.js, RESTful API, DomPDF</bdi>
                </td>
              </tr>
              <tr>
                <td className="label">{t.sk_db}</td>
                <td className="val">
                  <bdi dir="ltr">MySQL, PostgreSQL, Supabase (PostgreSQL &amp; RLS), SQLite, MongoDB, IndexedDB</bdi>
                </td>
              </tr>
              <tr>
                <td className="label">{t.sk_tools}</td>
                <td className="val">
                  <bdi dir="ltr">Git, GitHub, Vercel, Composer, NPM, SheetJS (XLSX), Laragon, Linux CLI, Figma</bdi>
                </td>
              </tr>
              <tr>
                <td className="label">{t.sk_lang}</td>
                <td className="val">{t.sk_lang_val}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Experience & Projects */}
        <div className="cv-section">
          <h2 className="cv-section-title">{t.exp_title}</h2>

          <div className="cv-item">
            <div className="cv-item-head">
              <div>
                <span className="cv-item-title">{t.exp1_title}</span>{' '}
                &middot;{' '}
                <span className="cv-item-sub"><bdi dir="ltr">{t.exp1_sub}</bdi></span>
              </div>
              <span className="cv-item-meta"><bdi dir="ltr">{t.exp1_meta}</bdi></span>
            </div>
            <ul>
              <li>{t.exp1_b1}</li>
              <li>{t.exp1_b2}</li>
              <li>{t.exp1_b3}</li>
            </ul>
          </div>

          <div className="cv-item">
            <div className="cv-item-head">
              <div>
                <span className="cv-item-title">{t.exp2_title}</span>{' '}
                &middot;{' '}
                <span className="cv-item-sub"><bdi dir="ltr">{t.exp2_sub}</bdi></span>
              </div>
              <span className="cv-item-meta"><bdi dir="ltr">{t.exp2_meta}</bdi></span>
            </div>
            <ul>
              <li>{t.exp2_b1}</li>
              <li>{t.exp2_b2}</li>
              <li>{t.exp2_b3}</li>
            </ul>
          </div>

          <div className="cv-item">
            <div className="cv-item-head">
              <div>
                <span className="cv-item-title">{t.exp3_title}</span>{' '}
                &middot;{' '}
                <span className="cv-item-sub"><bdi dir="ltr">{t.exp3_sub}</bdi></span>
              </div>
              <span className="cv-item-meta"><bdi dir="ltr">{t.exp3_meta}</bdi></span>
            </div>
            <ul>
              <li>{t.exp3_b1}</li>
              <li>{t.exp3_b2}</li>
            </ul>
          </div>
        </div>

        {/* Education */}
        <div className="cv-section">
          <h2 className="cv-section-title">{t.edu_title}</h2>
          <div className="cv-item">
            <div className="cv-item-head">
              <div>
                <span className="cv-item-title">{t.edu1_title}</span>{' '}
                &middot;{' '}
                <span className="cv-item-sub">{t.edu1_sub}</span>
              </div>
              <span className="cv-item-meta"><bdi dir="ltr">{t.edu1_meta}</bdi></span>
            </div>
            <ul>
              <li>{t.edu1_b1}</li>
            </ul>
          </div>
        </div>

        {/* Official Certifications */}
        <div className="cv-section" style={{ marginBottom: 0 }}>
          <h2 className="cv-section-title">{t.cert_title}</h2>
          <div className="cv-cert-grid">
            <div className="cv-cert-box">
              <h4>{t.c1_t}</h4>
              <div className="issuer">{t.c1_i}</div>
              <p>{t.c1_d}</p>
            </div>
            <div className="cv-cert-box">
              <h4>{t.c2_t}</h4>
              <div className="issuer">{t.c2_i}</div>
              <p>{t.c2_d}</p>
            </div>
            <div className="cv-cert-box">
              <h4>{t.c3_t}</h4>
              <div className="issuer">{t.c3_i}</div>
              <p>{t.c3_d}</p>
            </div>
            <div className="cv-cert-box">
              <h4>{t.c4_t}</h4>
              <div className="issuer">{t.c4_i}</div>
              <p>{t.c4_d}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
