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
  edu2_title: string;
  edu2_sub: string;
  edu2_meta: string;
  edu3_title: string;
  edu3_sub: string;
  edu3_meta: string;
  cert_title: string;
  cert_view: string;
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
      "Full-Stack Software Engineer educated in Information & Technology (IT) and Tahfidz Al-Qur'an at Pondok Pesantren Qur'an & IT Al Mahir (PPQITA), Karanganyar (Solo Raya), with prior education at SMP JIC (Jajar Islamic Center) and SD Al-Ihsan Gowa. Experienced in building and deploying 50+ web repositories and production systems including SIAKAD Almahira (Internship & Final Project / TA · Teamwork · siakad-almahir.wasmer.app), Qur'an for Santri (Teamwork · quran-for-santri-gamma.vercel.app), Best Kaca Film (Teamwork · bestkacafilm.com), Student Master Registry systems, Point-of-Sale (POS) cashier apps, offline-first PWAs, and RESTful APIs using Laravel 12, React 19, TypeScript, Node.js, and Supabase. Certified in Responsive Web Design (PPQITA), TEKNOVISTAFEST Web Design Competition (Universitas Airlangga), Arabic Language Preparation (Darul Lughah Al Arabiyah), and Intensive English (Pare-Dise Kampung Inggris).",
    skills_title: 'Technical Skills',
    sk_fe: 'Frontend Development',
    sk_be: 'Backend Development',
    sk_db: 'Database & Cloud',
    sk_tools: 'Tools & Workflow',
    sk_lang: 'Languages',
    sk_lang_val:
      'Indonesian (Native), Arabic (Certified · Darul Lughah Al Arabiyah), English (Certified · Kampung Inggris Pare)',
    exp_title: 'Featured Projects, Internship (Magang) & Final Project (TA)',
    exp1_title:
      'SIAKAD Almahira (Internship & Final Project / Magang & TA · Teamwork)',
    exp1_sub:
      'Laravel 12, Tailwind CSS 4, Alpine.js, DomPDF, Supabase · siakad-almahir.wasmer.app · github.com/Ghifari-S/almahir',
    exp1_meta: 'PPQ IT Al Mahir · 2025 – 2026',
    exp1_b1:
      "Collaborated in a team for our Internship & Final Project (Magang & Tugas Akhir) to engineer the Assessment & Attendance module (PenilaianDanPresensi) of SIAKAD Almahira integrating 5 sub-modules: Real-Time Analytics Dashboard, Academic Grading, Tahfidz Al-Qur'an Tracking, Schedule-Based Attendance, and Student Leave/Sick Permits (IzinSakit).",
    exp1_b2:
      'Implemented automated Smart Attendance Override: approving a student leave/sick request automatically syncs with active class schedules (JadwalPelajaran) and updates attendance records without manual teacher re-entry.',
    exp1_b3:
      'Built dynamic weighted grading formulas (Daily Average, Mid-Term/UTS, Final/UAS) with KKM validation, automatic class ranking, predicate conversion, and print-ready A4 Digital Report Cards (PDF).',
    exp2_title:
      "Teamwork & Production Web Projects: Qur'an for Santri, Best Kaca Film & Buku Induk",
    exp2_sub: 'React 19, TypeScript, Vite, SheetJS (XLSX), Supabase, HTML/CSS/JS',
    exp2_meta: '2024 – 2026',
    exp2_b1:
      "Qur'an for Santri (Teamwork · quran-for-santri-gamma.vercel.app): Collaborated in a team to build an interactive Al-Qur'an memorization (Tahfidz) and digital Mushaf web app in TypeScript with page-by-page repetition and progress tracking.",
    exp2_b2:
      'Best Kaca Film (Teamwork · www.bestkacafilm.com): Collaborated in a team to develop and deploy the official production company profile & catalog website for Best Kaca Film.',
    exp2_b3:
      'Student Master Registry (Buku Induk Siswa): Built a digital student registry platform connected to Supabase Cloud Database with multi-class filtering and one-click Excel (.xlsx) import/export using SheetJS.',
    exp3_title:
      'Independent Web Apps: POS Coffee Shop, Dompet Santri & Tugazku PWA',
    exp3_sub: 'React.js, TypeScript, IndexedDB, Service Worker, Node.js, Express.js',
    exp3_meta: '2023 – 2026',
    exp3_b1:
      'Developed and deployed POS Coffee Shop (pos-coffe-shop.vercel.app), Web Kasir POS (web-kasir-pi.vercel.app), and Dompet Santri (dompets-santri.vercel.app) on Vercel.',
    exp3_b2:
      "Created Tugazku offline-first Progressive Web App (tugazku.vercel.app) using IndexedDB & Service Workers, RESTful Qur'an API, PSB/PPDB admission apps, Zakat Mal Calculator, and Mahir Wisata.",
    edu_title: 'Education History',
    edu1_title: "Pondok Pesantren Qur'an & IT Al Mahir (PPQITA)",
    edu1_sub: "SMA / Paket C · Information & Technology (IT) and Tahfidz Al-Qur'an",
    edu1_meta: 'Karanganyar, Solo Raya · 2023 – 2026',
    edu1_b1:
      "Completed secondary education (Program Kesetaraan Paket C · PKBM Inisiator Salam Kariim, NISN: 0086397610) with specialization in Software Engineering, Full-Stack Web Development, Arabic Language, and Tahfidz Al-Qur'an.",
    edu2_title: 'SMP JIC (Jajar Islamic Center)',
    edu2_sub: 'Junior High School (SMP)',
    edu2_meta: 'Surakarta, Jawa Tengah',
    edu3_title: 'SD Al-Ihsan Gowa',
    edu3_sub: 'Elementary School (SD)',
    edu3_meta: 'Gowa, Sulawesi Selatan',
    cert_title: 'Official Certifications',
    cert_view: 'View Certificate',
    c1_t: 'Responsive Web Design Certification',
    c1_i: 'PPQ IT Al Mahir (PPQITA) · T.A. 2023/2024',
    c1_d: 'Completed 1-semester intensive Responsive Web Design curriculum signed by Headmaster Dhanny Ardiansyah. See certificate for grade details.',
    c2_t: 'Web Design Competition · TEKNOVISTAFEST',
    c2_i: 'Fakultas Vokasi Universitas Airlangga (UNAIR) · 19 Oct 2024',
    c2_d: 'Awarded official certificate as Participant in the TEKNOVISTAFEST Web Design Competition organized by HIMA Teknik Informatika UNAIR.',
    c3_t: 'Arabic Language Preparation Certificate',
    c3_i: 'Darul Lughah Al Arabiyah · 29 Jan 2024 · Reg: 243193631',
    c3_d: "Completed Level 1 Intensive Arabic Preparation (I'dad Lughawiy) covering Listening, Speaking, Writing, and Reading. See certificate for score details.",
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
      "Full-Stack Software Engineer lulusan program Informasi & Teknologi (IT) dan Tahfidz Al-Qur'an di Pondok Pesantren Qur'an & IT Al Mahir (PPQITA), Karanganyar (Solo Raya), dengan riwayat pendidikan di SMP JIC (Jajar Islamic Center) dan SD Al-Ihsan Gowa. Berpengalaman merancang dan mempublikasikan 50+ repositori web dan sistem produksi termasuk SIAKAD Almahira (Magang & Tugas Akhir / TA · Teamwork · siakad-almahir.wasmer.app), Qur'an for Santri (Teamwork · quran-for-santri-gamma.vercel.app), Best Kaca Film (Teamwork · bestkacafilm.com), Sistem Buku Induk Siswa, aplikasi kasir POS, PWA offline-first, dan RESTful API menggunakan Laravel 12, React 19, TypeScript, Node.js, dan Supabase. Memiliki sertifikasi resmi Responsive Web Design (PPQITA), Lomba Web Design TEKNOVISTAFEST (Universitas Airlangga), Persiapan Bahasa Arab (Darul Lughah Al Arabiyah), dan Bahasa Inggris (Pare-Dise Kampung Inggris).",
    skills_title: 'Keahlian Teknis',
    sk_fe: 'Pengembangan Frontend',
    sk_be: 'Pengembangan Backend',
    sk_db: 'Basis Data & Cloud',
    sk_tools: 'Alat Kerja & Workflow',
    sk_lang: 'Bahasa',
    sk_lang_val:
      'Bahasa Indonesia (Penutur Asli), Bahasa Arab (Sertifikat · Darul Lughah Al Arabiyah), Bahasa Inggris (Sertifikat · Kampung Inggris Pare)',
    exp_title: 'Proyek Unggulan, Magang & Tugas Akhir (TA)',
    exp1_title: 'SIAKAD Almahira (Magang & Tugas Akhir / TA · Teamwork)',
    exp1_sub:
      'Laravel 12, Tailwind CSS 4, Alpine.js, DomPDF, Supabase · siakad-almahir.wasmer.app · github.com/Ghifari-S/almahir',
    exp1_meta: 'PPQ IT Al Mahir · 2025 – 2026',
    exp1_b1:
      "Bekerja secara tim dalam program Magang & Tugas Akhir (TA) merancang modul inti (PenilaianDanPresensi) SIAKAD Almahira yang mengintegrasikan 5 sub-modul: Dashboard Statistik Real-Time, Penilaian Akademik Guru, Rekap Tahfidz Al-Qur'an, Presensi Terintegrasi Jadwal, dan Pengajuan Izin/Sakit Siswa (IzinSakit).",
    exp1_b2:
      'Membangun sinkronisasi otomatis Smart Attendance Override: persetujuan izin/sakit otomatis memperbarui presensi jam pelajaran aktif tanpa input ulang manual oleh guru pengampu.',
    exp1_b3:
      'Menerapkan kalkulasi pembobotan nilai dinamis (Rata-rata Harian, UTS, UAS) dengan validasi KKM, perankingan otomatis, konversi predikat nilai, dan cetak raport digital A4 (DomPDF).',
    exp2_title:
      "Proyek Teamwork & Produksi: Qur'an for Santri, Best Kaca Film & Buku Induk Siswa",
    exp2_sub: 'React 19, TypeScript, Vite, SheetJS (XLSX), Supabase, HTML/CSS/JS',
    exp2_meta: '2024 – 2026',
    exp2_b1:
      "Qur'an for Santri (Teamwork · quran-for-santri-gamma.vercel.app): Berkolaborasi dalam tim membangun aplikasi web Tahfidz Al-Qur'an & Mushaf digital per halaman berbasis TypeScript.",
    exp2_b2:
      'Best Kaca Film (Teamwork · www.bestkacafilm.com): Berkolaborasi dalam tim merancang dan mempublikasikan website profil perusahaan & katalog layanan resmi Best Kaca Film.',
    exp2_b3:
      'Sistem Buku Induk Siswa: Mengembangkan platform pendataan siswa terhubung ke Cloud Database Supabase dengan filter multi-kelas dan ekspor/impor spreadsheet Excel (.xlsx) menggunakan SheetJS.',
    exp3_title:
      'Aplikasi Web Mandiri: POS Coffee Shop, Dompet Santri & Tugazku PWA',
    exp3_sub: 'React.js, TypeScript, IndexedDB, Service Worker, Node.js, Express.js',
    exp3_meta: '2023 – 2026',
    exp3_b1:
      'Membangun dan mempublikasikan POS Coffee Shop (pos-coffe-shop.vercel.app), Web Kasir POS (web-kasir-pi.vercel.app), dan Dompet Santri (dompets-santri.vercel.app) di Vercel.',
    exp3_b2:
      "Membangun aplikasi Tugazku PWA Offline-First (tugazku.vercel.app) berbasis IndexedDB & Service Worker, REST API Al-Qur'an, sistem PSB/PPDB Santri, Kalkulator Zakat Mal, dan Mahir Wisata.",
    edu_title: 'Riwayat Pendidikan',
    edu1_title: "Pondok Pesantren Qur'an & IT Al Mahir (PPQITA)",
    edu1_sub: "SMA / Paket C · Informasi & Teknologi (IT) dan Tahfidz Al-Qur'an",
    edu1_meta: 'Karanganyar, Solo Raya · 2023 – 2026',
    edu1_b1:
      "Menyelesaikan pendidikan menengah (Program Kesetaraan Paket C · PKBM Inisiator Salam Kariim, NISN: 0086397610) dengan fokus Rekayasa Perangkat Lunak, Pengembangan Web Full-Stack, Bahasa Arab, dan Tahfidz Al-Qur'an.",
    edu2_title: 'SMP JIC (Jajar Islamic Center)',
    edu2_sub: 'Sekolah Menengah Pertama (SMP)',
    edu2_meta: 'Surakarta, Jawa Tengah',
    edu3_title: 'SD Al-Ihsan Gowa',
    edu3_sub: 'Sekolah Dasar (SD)',
    edu3_meta: 'Gowa, Sulawesi Selatan',
    cert_title: 'Sertifikasi Resmi',
    cert_view: 'Lihat Sertifikat',
    c1_t: 'Sertifikat Responsive Web Design',
    c1_i: 'PPQ IT Al Mahir (PPQITA) · T.A. 2023/2024',
    c1_d: 'Menyelesaikan kurikulum intensif Responsive Web Design selama 1 semester. Ditandatangani Kepala Sekolah Dhanny Ardiansyah. Rincian nilai tertera pada sertifikat.',
    c2_t: 'Sertifikat Lomba Web Design · TEKNOVISTAFEST',
    c2_i: 'Fakultas Vokasi Universitas Airlangga (UNAIR) · 19 Okt 2024',
    c2_d: 'Diberikan sebagai Peserta pada Lomba Web Design TEKNOVISTAFEST yang diselenggarakan oleh HIMA Teknik Informatika UNAIR Surabaya.',
    c3_t: 'Sertifikat Persiapan Bahasa Arab',
    c3_i: 'Darul Lughah Al Arabiyah · 29 Jan 2024 · No: 243193631',
    c3_d: "Menyelesaikan program I'dad Lughawiy Tingkat Pertama (mendengar, berbicara, menulis, dan membaca). Rincian nilai dapat dilihat langsung pada dokumen sertifikat.",
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
      'مهندس برمجيات Full-Stack خريج تخصص تقنية المعلومات (IT) وتحفيظ القرآن الكريم في معهد القرآن وتقنية المعلومات الماهر (PPQITA) بصولو، بعد إتمام المرحلة المتوسطة في معهد جاجار الإسلامي (SMP JIC) والمرحلة الابتدائية في مدرسة الإحسان بغوا (SD Al-Ihsan Gowa). يمتلك خبرة عملية في تطوير ونشر أكثر من 50 مستودعاً برمجياً وأنظمة إنتاجية، تشمل نظام SIAKAD Almahira (التدريب العملي ومشروع التخرج · عمل جماعي · siakad-almahir.wasmer.app)، ومشروع Qur\'an for Santri (عمل جماعي)، وموقع Best Kaca Film (عمل جماعي)، ونظام سجل الطلاب العام، وتطبيقات نقاط البيع والكاشير، وتطبيقات الويب التقدمية PWA دون اتصال، باستخدام Laravel 12 وReact 19 وTypeScript وNode.js وSupabase. حاصل على شهادات معتمدة في تصميم الويب المتجاوب، ومسابقة TEKNOVISTAFEST بجامعة إيرلانغا، وإعداد اللغة العربية (دار اللغة العربية)، واللغة الإنجليزية (باري، كديري).',
    skills_title: 'المهارات التقنية',
    sk_fe: 'تطوير الواجهات الأمامية (Frontend)',
    sk_be: 'تطوير الخوادم الخلفية (Backend)',
    sk_db: 'قواعد البيانات والسحابة',
    sk_tools: 'الأدوات وسير العمل',
    sk_lang: 'اللغات',
    sk_lang_val:
      'الإندونيسية (اللغة الأم)، العربية (شهادة معتمدة · دار اللغة العربية)، الإنجليزية (شهادة معتمدة · قرية الإنجليزية باري)',
    exp_title: 'المشاريع البارزة والتدريب العملي ومشروع التخرج (TA)',
    exp1_title:
      'نظام SIAKAD Almahira (التدريب العملي ومشروع التخرج · عمل جماعي)',
    exp1_sub:
      'Laravel 12, Tailwind CSS 4, Alpine.js, DomPDF, Supabase · siakad-almahir.wasmer.app · github.com/Ghifari-S/almahir',
    exp1_meta: 'معهد الماهر PPQITA · ٢٠٢٥ – ٢٠٢٦',
    exp1_b1:
      'العمل ضمن فريق التدريب ومشروع التخرج لهندسة الوحدة الأساسية (PenilaianDanPresensi) التي تدمج 5 وحدات فرعية: لوحة إحصاءات فورية، ورصد درجات الطلاب، ومتابعة إنجاز تحفيظ القرآن، والحضور المرتبط بالجدول الدراسي، وتصاريح الإجازات المرضية (IzinSakit).',
    exp1_b2:
      'بناء نظام المزامنة التلقائية (Smart Attendance Override): اعتماد إجازة الطالب يعكس غيابه مباشرة على حصص اليوم دون الحاجة لإدخال يدوي مكرر من المعلمين.',
    exp1_b3:
      'تطبيق معادلات حساب الدرجات التلقائية (معدل اليومي، النصفي، النهائي) مع معايير النجاح KKM، والترتيب الصفي الآلي، وطباعة الشهادات الرقمية A4 بتنسيق PDF.',
    exp2_title:
      'مشاريع العمل الجماعي (Teamwork): تطبيق Qur\'an for Santri وموقع Best Kaca Film وسجل الطلاب',
    exp2_sub: 'React 19, TypeScript, Vite, SheetJS (XLSX), Supabase, HTML/CSS/JS',
    exp2_meta: '٢٠٢٤ – ٢٠٢٦',
    exp2_b1:
      'تطبيق Qur\'an for Santri (عمل جماعي · quran-for-santri-gamma.vercel.app): تطوير تطبيق ويب تفاعلي لتحفيظ القرآن الكريم والمصحف الرقمي للطلاب باستخدام TypeScript.',
    exp2_b2:
      'موقع Best Kaca Film (عمل جماعي · www.bestkacafilm.com): العمل ضمن فريق لتطوير ونشر الموقع الرسمي لشركة Best Kaca Film.',
    exp2_b3:
      'نظام سجل الطلاب العام (Buku Induk): تطوير منصة سجل الطلاب المتصلة بقاعدة بيانات Supabase مع تصنيف الفصول وتصدير واستيراد جداول Excel (.xlsx) عبر SheetJS.',
    exp3_title:
      'المشاريع المستقلة: POS Coffee Shop، وDompet Santri، وTugazku PWA',
    exp3_sub: 'React.js, TypeScript, IndexedDB, Service Worker, Node.js, Express.js',
    exp3_meta: '٢٠٢٣ – ٢٠٢٦',
    exp3_b1:
      'تطوير ونشر تطبيقات POS Coffee Shop (pos-coffe-shop.vercel.app)، وWeb Kasir POS، وDompet Santri (dompets-santri.vercel.app) على منصة Vercel.',
    exp3_b2:
      'بناء تطبيق Tugazku PWA الذي يعمل دون اتصال بالإنترنت باستخدام IndexedDB، وواجهة برمجة تطبيقات القرآن الكريم بـ TypeScript، وحاسبة زكاة المال، وموقع Mahir Wisata.',
    edu_title: 'المسيرة التعليمية',
    edu1_title: 'معهد القرآن وتقنية المعلومات الماهر (PPQITA)',
    edu1_sub: 'المرحلة الثانوية · تخصص تقنية المعلومات (IT) وتحفيظ القرآن الكريم',
    edu1_meta: 'كارانغانيار، صولو، إندونيسيا · ٢٠٢٣ – ٢٠٢٦',
    edu1_b1:
      'إتمام المرحلة الثانوية (برنامج Kesetaraan Paket C · الرقم التعريفي الوطني NISN: 0086397610) مع التركيز على هندسة البرمجيات، وتطوير الويب المتكامل، واللغة العربية، والعلوم الشرعية وتحفيظ القرآن.',
    edu2_title: 'مدرسة جاجار الإسلامية المتوسطة — SMP JIC (Jajar Islamic Center)',
    edu2_sub: 'المرحلة المتوسطة (SMP)',
    edu2_meta: 'سوراكارتا (صولو)، جاوة الوسطى',
    edu3_title: 'مدرسة الإحسان الابتدائية بغوا (SD Al-Ihsan Gowa)',
    edu3_sub: 'المرحلة الابتدائية (SD)',
    edu3_meta: 'غوا، سولاويزي الجنوبية',
    cert_title: 'الشهادات الرسمية',
    cert_view: 'عرض الشهادة',
    c1_t: 'شهادة تصميم الويب المتجاوب (Responsive Web Design)',
    c1_i: 'معهد القرآن وتقنية المعلومات الماهر · ٢٠٢٣/٢٠٢٤',
    c1_d: 'إتمام دراسة منهج تصميم الويب المتجاوب لمدة فصل دراسي مكثف بتوقيع مدير المعهد الأستاذ داني أرديانشاه. تفاصيل التقدير موضحة في الشهادة.',
    c2_t: 'شهادة مسابقة تصميم الويب · TEKNOVISTAFEST',
    c2_i: 'كلية الدراسات المهنية بجامعة إيرلانغا (UNAIR) · ١٩ أكتوبر ٢٠٢٤',
    c2_d: 'شهادة مشاركة رسمية في مسابقة TEKNOVISTAFEST لتصميم الويب المنظمة من رابطة هندسة المعلوماتية بجامعة إيرلانغا، سورابايا.',
    c3_t: 'شهادة إعداد اللغة العربية',
    c3_i: 'دار اللغة العربية · ٢٩ يناير ٢٠٢٤ · رقم القيد: 243193631',
    c3_d: 'إتمام برنامج الإعداد اللغوي للمستوى الأول في مهارات الاستماع والمحادثة والكتابة والقراءة. تفاصيل الدرجات مرفقة في ملف الشهادة.',
    c4_t: 'شهادة برنامج اللغة الإنجليزية المكثف',
    c4_i: 'أكاديمية Pare-Dise للغات · ١٨ أغسطس ٢٠٢٣ · رقم: 005654',
    c4_d: 'إتمام دورة مكثفة في مهارات التواصل باللغة الإنجليزية لمدة شهر في قرية الإنجليزية باري، كديري.',
  },
};

export default function ResumePage() {
  const [lang, setLang] = useState<Lang>('id');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const queryLang = params.get('lang') as Lang | null;
    const saved = localStorage.getItem('lang') as Lang | null;
    const initial: Lang =
      queryLang && CV_DATA[queryLang]
        ? queryLang
        : saved && CV_DATA[saved]
        ? saved
        : 'id';

    setLang(initial);
    localStorage.setItem('lang', initial);
    document.documentElement.lang = initial;
    document.documentElement.dir = initial === 'ar' ? 'rtl' : 'ltr';
  }, []);

  const handleLangChange = (newLang: Lang) => {
    setLang(newLang);
    localStorage.setItem('lang', newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };

  const isRtl = lang === 'ar';
  const t = CV_DATA[lang];

  return (
    <div
      className={`cv-page-root ${isRtl ? 'is-rtl' : 'is-ltr'}`}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
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
          padding: 15mm 17mm;
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
        .cv-summary { color: #27272a; text-align: justify; margin: 0; line-height: 1.62; }
        .cv-skills-table { width: 100%; border-collapse: collapse; }
        .cv-skills-table td { padding: 3px 0; vertical-align: top; }
        .cv-skills-table td.label { width: 175px; font-weight: 700; color: #09090b; }
        .cv-skills-table td.val { color: #27272a; }
        .cv-item { margin-bottom: 9px; }
        .cv-item:last-child { margin-bottom: 0; }
        .cv-item-head {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 12px;
        }
        .cv-item-title { font-weight: 700; font-size: 13.3px; color: #09090b; }
        .cv-item-sub { font-weight: 600; color: #52525b; font-size: 12px; }
        .cv-item-meta { font-size: 11.5px; font-weight: 600; color: #71717a; white-space: nowrap; font-family: 'Fira Code', monospace; }
        .cv-item ul { margin: 3px 0 0 18px; color: #27272a; }
        .cv-page-root.is-rtl .cv-item ul { margin: 3px 18px 0 0; }
        .cv-item li { margin-bottom: 2px; line-height: 1.55; }
        .cv-cert-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px 14px; }
        .cv-cert-box {
          border: 1px solid #e4e4e7;
          border-radius: 8px;
          padding: 8px 11px;
          background: #fafafa;
        }
        .cv-cert-box h4 { font-size: 12.3px; font-weight: 700; color: #09090b; margin: 0 0 2px 0; }
        .cv-cert-box .issuer { font-size: 11.2px; font-weight: 600; color: #52525b; margin-bottom: 2px; }
        .cv-cert-box p { font-size: 11.2px; color: #27272a; margin: 0; line-height: 1.48; }
        .cv-cert-link {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          margin-top: 5px;
          font-size: 11px;
          font-weight: 700;
          color: #09090b;
          text-decoration: none;
        }
        .cv-cert-link:hover { text-decoration: underline; }
        @media print {
          .cv-page-root { background: #fff; padding: 0; }
          .cv-toolbar { display: none !important; }
          .cv-sheet { box-shadow: none; border: none; border-radius: 0; padding: 8mm 12mm; max-width: 100%; }
          .cv-cert-link { display: none; }
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
        <Link href={`/?lang=${lang}`} className="cv-btn">
          <i className={`fas ${isRtl ? 'fa-arrow-right' : 'fa-arrow-left'}`}></i>{' '}
          {t.back}
        </Link>
        <div className="cv-actions-group">
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
          <a
            href={`/assets/resume-${lang}.pdf`}
            download={`CV-Yahya-Al-Faruq-${lang.toUpperCase()}.pdf`}
            className="cv-btn"
          >
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
                  <bdi dir="ltr">
                    HTML5, CSS3, Tailwind CSS, JavaScript (ES6+), TypeScript,
                    React 19, Next.js, Alpine.js, Blade, Vite, Framer Motion,
                    PWA (IndexedDB)
                  </bdi>
                </td>
              </tr>
              <tr>
                <td className="label">{t.sk_be}</td>
                <td className="val">
                  <bdi dir="ltr">
                    PHP 8.2+, Laravel 11/12, Node.js, Express.js, RESTful API,
                    DomPDF
                  </bdi>
                </td>
              </tr>
              <tr>
                <td className="label">{t.sk_db}</td>
                <td className="val">
                  <bdi dir="ltr">
                    MySQL, PostgreSQL, Supabase (PostgreSQL &amp; RLS), SQLite,
                    MongoDB, IndexedDB
                  </bdi>
                </td>
              </tr>
              <tr>
                <td className="label">{t.sk_tools}</td>
                <td className="val">
                  <bdi dir="ltr">
                    Git, GitHub, Vercel, Wasmer, Composer, NPM, SheetJS (XLSX),
                    Laragon, Linux CLI, Figma
                  </bdi>
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
                <span className="cv-item-title">{t.exp1_title}</span> &middot;{' '}
                <span className="cv-item-sub">
                  <bdi dir="ltr">{t.exp1_sub}</bdi>
                </span>
              </div>
              <span className="cv-item-meta">
                <bdi dir="ltr">{t.exp1_meta}</bdi>
              </span>
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
                <span className="cv-item-title">{t.exp2_title}</span> &middot;{' '}
                <span className="cv-item-sub">
                  <bdi dir="ltr">{t.exp2_sub}</bdi>
                </span>
              </div>
              <span className="cv-item-meta">
                <bdi dir="ltr">{t.exp2_meta}</bdi>
              </span>
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
                <span className="cv-item-title">{t.exp3_title}</span> &middot;{' '}
                <span className="cv-item-sub">
                  <bdi dir="ltr">{t.exp3_sub}</bdi>
                </span>
              </div>
              <span className="cv-item-meta">
                <bdi dir="ltr">{t.exp3_meta}</bdi>
              </span>
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
                <span className="cv-item-title">{t.edu1_title}</span> &middot;{' '}
                <span className="cv-item-sub">{t.edu1_sub}</span>
              </div>
              <span className="cv-item-meta">
                <bdi dir="ltr">{t.edu1_meta}</bdi>
              </span>
            </div>
            <ul>
              <li>{t.edu1_b1}</li>
            </ul>
          </div>

          <div className="cv-item">
            <div className="cv-item-head">
              <div>
                <span className="cv-item-title">{t.edu2_title}</span> &middot;{' '}
                <span className="cv-item-sub">{t.edu2_sub}</span>
              </div>
              <span className="cv-item-meta">
                <bdi dir="ltr">{t.edu2_meta}</bdi>
              </span>
            </div>
          </div>

          <div className="cv-item">
            <div className="cv-item-head">
              <div>
                <span className="cv-item-title">{t.edu3_title}</span> &middot;{' '}
                <span className="cv-item-sub">{t.edu3_sub}</span>
              </div>
              <span className="cv-item-meta">
                <bdi dir="ltr">{t.edu3_meta}</bdi>
              </span>
            </div>
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
              <a
                href="/assets/certificates/sertifikat-rwd-ppqita.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="cv-cert-link"
              >
                <i className="fas fa-arrow-up-right-from-square"></i>{' '}
                {t.cert_view}
              </a>
            </div>
            <div className="cv-cert-box">
              <h4>{t.c2_t}</h4>
              <div className="issuer">{t.c2_i}</div>
              <p>{t.c2_d}</p>
              <a
                href="/assets/certificates/sertifikat-teknovistafest-unair.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="cv-cert-link"
              >
                <i className="fas fa-arrow-up-right-from-square"></i>{' '}
                {t.cert_view}
              </a>
            </div>
            <div className="cv-cert-box">
              <h4>{t.c3_t}</h4>
              <div className="issuer">{t.c3_i}</div>
              <p>{t.c3_d}</p>
              <a
                href="/assets/certificates/sertifikat-bahasa-arab.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="cv-cert-link"
              >
                <i className="fas fa-arrow-up-right-from-square"></i>{' '}
                {t.cert_view}
              </a>
            </div>
            <div className="cv-cert-box">
              <h4>{t.c4_t}</h4>
              <div className="issuer">{t.c4_i}</div>
              <p>{t.c4_d}</p>
              <a
                href="/assets/certificates/sertifikat-bahasa-inggris.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="cv-cert-link"
              >
                <i className="fas fa-arrow-up-right-from-square"></i>{' '}
                {t.cert_view}
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
