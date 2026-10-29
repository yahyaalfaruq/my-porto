export type LangCode = 'en' | 'id' | 'ar';

export const T: Record<LangCode, Record<string, any>> = {
  en: {
    nav_home:'Home', nav_about:'About', nav_skills:'Stack', nav_exp:'Experience',
    nav_proj:'Projects', nav_rev:'Notes', nav_con:'Contact', nav_resume:'Resume',
    hero_badge:'Available for full-time, internship & freelance', hero_prefix:"Hi, I'm",
    hero_name:' Yahya Al Faruq',
    hero_desc:'Full-stack web developer based in Solo & Makassar. I build academic platforms, POS tools, and web apps with Laravel, React, TypeScript, and Supabase.',
    cta_work:'Selected Work', cta_talk:'Contact Me',
    tw_prefix:'Working on ',
    tw_phrases:['academic systems (SIAKAD).','Laravel & PHP backends.','React & TypeScript interfaces.','offline-first PWAs.','REST APIs & databases.'],
    stat_proj:'Public Repos', stat_yrs:'Years Building', stat_cli:'Live Deployments',
    about_tag:'01 / About',
    about_h2:'Background',
    about_sub:'Software engineering & Tahfidz student at PPQ IT Al Mahir (PPQITA), Karanganyar.',
    about_c1t:'PPQ IT Al Mahir', about_c1s:'IT & Tahfidz Track',
    about_c2t:'50+ Repositories', about_c2s:'GitHub & Vercel',
    about_h3:'Building practical software for schools and everyday workflows.',
    about_p1:"I'm <strong>Yahya Al Faruq</strong>, a web developer born in Makassar and educated at <strong>Pondok Pesantren Qur'an & IT Al Mahir (PPQITA)</strong> in Karanganyar, Solo Raya. Most of my time is spent writing <strong>Laravel, React, TypeScript, Node.js, and SQL</strong>.",
    about_p2:"At PPQITA, I worked on internal school software including <strong>SIAKAD Almahira</strong> (handling student grading, schedule-based attendance, Tahfidz tracking, and PDF report cards), a digital student registry (<strong>Buku Induk Siswa</strong>), a cashier POS app, and <strong>Dompet Santri</strong>. Alongside programming, I completed intensive Arabic training at <strong>Darul Lughah Al Arabiyah (Mumtaz)</strong> and English training at <strong>Kampung Inggris Pare</strong>.",
    about_hi1:'Laravel 12, React 19 & TypeScript',
    about_hi2:'REST APIs, Express.js & Supabase PostgreSQL',
    about_hi3:'Offline-First PWAs, IndexedDB & Excel/PDF Exports',
    about_hi4:'Indonesian, Arabic (Mumtaz) & English',
    about_btn:'Download CV (PDF)', about_view_cv:'Read Full Resume',
    skills_tag:'02 / Tech Stack', skills_h2:'Tools & Technologies', skills_sub:'Languages, frameworks, and tools I use in day-to-day development.',
    sk_fe:'Frontend', sk_be:'Backend', sk_db:'Database & Storage', sk_tools:'Workflow & Languages',
    exp_tag:'03 / Experience', exp_h2:'Experience & Education', exp_sub:'Work history, school projects, and formal certifications.',
    exp1_t:'Full-Stack Developer · SIAKAD Almahira', exp1_c:'PPQ IT Al Mahir (PPQITA) · Karanganyar', exp1_d:'2025 – 2026',
    exp1_p:"Built the Assessment & Attendance module (PenilaianDanPresensi) for SIAKAD Almahira using Laravel 12, Tailwind CSS, and Supabase. Implemented automatic leave-to-attendance sync, KKM-based grading with Arabic predicates, Tahfidz progress tracking, and A4 PDF report cards (DomPDF). Also built the Student Master Registry (Pendataan Siswa) with React 19, Vite, and SheetJS.",
    exp2_t:'Web & TypeScript Developer', exp2_c:'Independent & School Ecosystem Projects', exp2_d:'2024 – 2025',
    exp2_p:"Shipped 30+ web applications on Vercel and GitHub, including Dompet Santri (student allowance ledger), Web Kasir POS (TypeScript), PSB/PPDB Student Admission System, Tugazku Offline-First PWA (IndexedDB), SAS Todo-List (Laravel Blade), Qur'an REST API, and Express.js CRUD services.",
    exp3_t:'Frontend Developer', exp3_c:'PPQ IT Al Mahir & Web Design Competitions', exp3_d:'2023 – 2024',
    exp3_p:'Completed the Responsive Web Design track at PPQ IT Al Mahir and represented the school at TEKNOVISTAFEST 2024 (Universitas Airlangga) and BytesFest 2024. Built Best Kaca Film, Mahir Wisata Travel, POS Coffee Shop (React), Zakat Mal Calculator, Latin-to-Arabic Converter, and Mahad Umar Bin Khattab.',
    edu_tit:'Education & Certifications',
    edu1_t:"Pondok Pesantren Qur'an & IT Al Mahir (PPQITA)", edu1_s:'Karanganyar, Solo Raya · 2023 – 2026',
    edu1_d:"Information & Technology (IT) and Tahfidz Al-Qur'an track (PKBM Inisiator Salam Kariim). Focused on full-stack web development, software engineering, Arabic, and Islamic studies.",
    edu2_t:'Responsive Web Design Certificate', edu2_s:'PPQ IT Al Mahir (PPQITA) · 2023/2024',
    edu2_d:"Completed 1-semester Responsive Web Design curriculum at Pondok Pesantren Qur'an & IT Al Mahir with Grade B (Good).",
    edu5_t:'TEKNOVISTAFEST Web Design Competition', edu5_s:'Universitas Airlangga (UNAIR) · 19 Oct 2024',
    edu5_d:'Participant in the national TEKNOVISTAFEST Web Design Competition organized by HIMA Teknik Informatika, Fakultas Vokasi Universitas Airlangga.',
    edu3_t:'Arabic Language Preparation (Mumtaz / 87.50)', edu3_s:'Darul Lughah Al Arabiyah · Jan 2024 (No: 243193631)',
    edu3_d:"Completed Level 1 Arabic preparation with predicate Mumtaz (87.50%): Listening 92, Speaking 89, Writing 85, Reading 84.",
    edu4_t:'Intensive English Program', edu4_s:'Pare-Dise International Language Academy · Aug 2023 (No: 005654)',
    edu4_d:'Completed 1-month intensive English communication program at Kampung Inggris Pare, Kediri.',
    cert_view:'Open Certificate',
    proj_tag:'04 / Work', proj_h2:'Selected Projects',
    f_all:'All',
    p_live:'Live Site', p_gh:'Source',
    proj_sub:'Internal systems and open-source repositories from @yahyaalfaruq.',
    p_nodesc:'Web application repository built during my study at PPQ IT Al Mahir.',
    p_more:'Show More Repositories', p_less:'Show Less', p_viewall:'All Repositories on GitHub',
    p_error:"Couldn't load repositories from GitHub right now.", p_retry:'Retry', p_empty:'No repositories found.',
    gh_repos:'Repos', gh_followers:'Followers', gh_stars:'Stars', p_updated:'Updated',
    testi_tag:'05 / Collaboration', testi_h2:'Collaboration Notes', testi_sub:'Notes from mentors, teachers, and teammates at PPQ IT Al Mahir.',
    t1_b:'SIAKAD Almahira',
    t1_p:'"Yahya handled the grading, schedule attendance, and PDF report card module in SIAKAD Almahira. Connecting student leave permits directly to class attendance saved teachers a lot of manual input."',
    t1_n:'SIAKAD Almahira Team',   t1_r:'Academic System Division · PPQ IT Al Mahir',
    t2_b:'Web Design',
    t2_p:'"Yahya completed the Responsive Web Design track with solid fundamentals and represented PPQ IT Al Mahir at Universitas Airlangga\'s TEKNOVISTAFEST 2024 web design competition."',
    t2_n:'Dhanny Ardiansyah & IT Mentors', t2_r:'Principal & Educators · PPQ IT Al Mahir',
    t3_b:'React & TypeScript',
    t3_p:'"Working together on the Buku Induk student registry, Web Kasir POS, and admission apps was straightforward. He structured the Supabase tables and Excel exports cleanly."',
    t3_n:'PPQITA Dev Peers', t3_r:'Student Engineering Team · PPQITA',
    t4_b:'Arabic & Islamic Apps',
    t4_p:'"Combining programming with Arabic (Mumtaz) and English helped Yahya build practical tools for santri, including Dompet Santri, the Qur\'an API, and the Zakat calculator."',
    t4_n:'Asatidzah & Language Mentors', t4_r:'PPQ IT Al Mahir & Darul Lughah',
    con_tag:'06 / Contact', con_h2:'Get in Touch', con_sub:'Available for internship, freelance, or full-stack developer roles.',
    con_email:'Email', con_loc:'Location', con_avail:'Status',
    con_loc_val:'Makassar / Solo, Indonesia', con_avail_val:'Open to remote, internship & freelance',
    f_name:'Name', f_email:'Email', f_subj:'Subject', f_msg:'Message',
    f_name_ph:'Your name', f_email_ph:'you@example.com', f_subj_ph:'Project or role inquiry', f_msg_ph:'Write your message here...',
    f_submit:'Send Message', f_sent:'Sent',
    foot_built:'Built by', foot_copy:'© 2026 Yahya Al Faruq.',
    footer_name:'Yahya Al Faruq',
  },
  id: {
    nav_home:'Beranda', nav_about:'Tentang', nav_skills:'Teknologi', nav_exp:'Pengalaman',
    nav_proj:'Proyek', nav_rev:'Catatan', nav_con:'Kontak', nav_resume:'CV / Resume',
    hero_badge:'Terbuka untuk magang, freelance & full-time', hero_prefix:'Halo, saya',
    hero_name:' Yahya Al Faruq',
    hero_desc:'Full-stack web developer berbasis di Solo & Makassar. Fokus membangun sistem akademik, aplikasi kasir (POS), dan web modern dengan Laravel, React, TypeScript, dan Supabase.',
    cta_work:'Lihat Proyek', cta_talk:'Hubungi Saya',
    tw_prefix:'Fokus pada ',
    tw_phrases:['sistem akademik (SIAKAD).','backend Laravel & PHP.','antarmuka React & TypeScript.','aplikasi PWA offline-first.','REST API & database.'],
    stat_proj:'Repo Publik', stat_yrs:'Tahun Ngoding', stat_cli:'Web Aktif',
    about_tag:'01 / Tentang',
    about_h2:'Latar Belakang',
    about_sub:'Santri IT & Tahfidz di Pondok Pesantren Qur\'an & IT Al Mahir (PPQITA), Karanganyar.',
    about_c1t:'PPQ IT Al Mahir', about_c1s:'Jurusan IT & Tahfidz',
    about_c2t:'50+ Repositori', about_c2s:'GitHub & Vercel',
    about_h3:'Membangun aplikasi web fungsional untuk kebutuhan sekolah dan operasional.',
    about_p1:"Saya <strong>Yahya Al Faruq</strong>, web developer kelahiran Makassar yang menempuh pendidikan Informasi & Teknologi (IT) serta Tahfidz Al-Qur'an di <strong>Pondok Pesantren Qur'an & IT Al Mahir (PPQITA)</strong>, Karanganyar (Solo Raya). Sehari-hari saya mengerjakan proyek menggunakan <strong>Laravel, React, TypeScript, Node.js, dan SQL</strong>.",
    about_p2:"Di PPQITA, saya terlibat langsung dalam pembuatan sistem internal seperti <strong>SIAKAD Almahira</strong> (modul penilaian, presensi terintegrasi jadwal, capaian Tahfidz, dan cetak raport PDF), sistem <strong>Buku Induk Pendataan Siswa</strong>, aplikasi kasir POS, serta <strong>Dompet Santri</strong>. Di luar pemrograman, saya juga menyelesaikan pelatihan Bahasa Arab di <strong>Darul Lughah Al Arabiyah (Mumtaz)</strong> dan Bahasa Inggris di <strong>Kampung Inggris Pare</strong>.",
    about_hi1:'Laravel 12, React 19 & TypeScript',
    about_hi2:'REST API, Express.js & Database Supabase',
    about_hi3:'PWA Offline-First, IndexedDB & Ekspor Excel/PDF',
    about_hi4:'Bahasa Indonesia, Arab (Mumtaz) & Inggris',
    about_btn:'Unduh CV (PDF)', about_view_cv:'Lihat Halaman CV',
    skills_tag:'02 / Teknologi', skills_h2:'Tech Stack & Alat Kerja', skills_sub:'Bahasa pemrograman, framework, dan perangkat yang saya gunakan sehari-hari.',
    sk_fe:'Frontend', sk_be:'Backend', sk_db:'Database & Penyimpanan', sk_tools:'Alat Kerja & Bahasa',
    exp_tag:'03 / Pengalaman', exp_h2:'Pengalaman & Pendidikan', exp_sub:'Riwayat pengerjaan proyek, pendidikan, dan sertifikasi resmi.',
    exp1_t:'Full-Stack Developer · SIAKAD Almahira', exp1_c:'PPQ IT Al Mahir (PPQITA) · Karanganyar', exp1_d:'2025 – 2026',
    exp1_p:"Mengerjakan Modul Penilaian & Presensi (PenilaianDanPresensi) pada SIAKAD Almahira dengan Laravel 12, Tailwind CSS, dan Supabase. Membuat fitur sinkronisasi otomatis surat izin/sakit ke jadwal presensi kelas, perhitungan nilai KKM dengan predikat Arab, rekap setoran Tahfidz, dan cetak raport A4 (DomPDF). Juga membuat Sistem Buku Induk Siswa menggunakan React 19, Vite, dan SheetJS.",
    exp2_t:'Web & TypeScript Developer', exp2_c:'Proyek Mandiri & Ekosistem Digital Santri', exp2_d:'2024 – 2025',
    exp2_p:"Membuat dan mempublikasikan 30+ aplikasi web di Vercel dan GitHub, di antaranya Dompet Santri, Web Kasir POS (TypeScript), Sistem PSB/PPDB Santri, Tugazku PWA Offline-First (IndexedDB), SAS Todo-List (Laravel Blade), REST API Al-Qur'an, dan CRUD API Express.js.",
    exp3_t:'Frontend Web Developer', exp3_c:'PPQ IT Al Mahir & Lomba Web Design', exp3_d:'2023 – 2024',
    exp3_p:'Menyelesaikan kurikulum Responsive Web Design di PPQ IT Al Mahir (Predikat B/Baik) dan mengikuti kompetisi Web Design TEKNOVISTAFEST 2024 (Universitas Airlangga) serta BytesFest 2024. Membangun web Best Kaca Film, Mahir Wisata Travel, POS Coffee Shop (React), Kalkulator Zakat Mal, Konversi Latin ke Arab, dan web Mahad Umar Bin Khattab.',
    edu_tit:'Pendidikan & Sertifikasi',
    edu1_t:"Pondok Pesantren Qur'an & IT Al Mahir (PPQITA)", edu1_s:'Karanganyar, Solo Raya · 2023 – 2026',
    edu1_d:"Jurusan Informasi & Teknologi (IT) dan Tahfidz Al-Qur'an (PKBM Inisiator Salam Kariim). Fokus pada pengembangan web full-stack, rekayasa perangkat lunak, Bahasa Arab, dan diniyah.",
    edu2_t:'Sertifikat Responsive Web Design', edu2_s:'PPQ IT Al Mahir (PPQITA) · T.A. 2023/2024',
    edu2_d:"Menyelesaikan materi Responsive Web Design selama 1 semester di Pondok Pesantren Qur'an & IT Al Mahir dengan Predikat B (Baik).",
    edu5_t:'Sertifikat Lomba Web Design TEKNOVISTAFEST', edu5_s:'Universitas Airlangga (UNAIR) · 19 Okt 2024',
    edu5_d:'Peserta Lomba Web Design TEKNOVISTAFEST yang diselenggarakan oleh HIMA Teknik Informatika Fakultas Vokasi Universitas Airlangga, Surabaya.',
    edu3_t:'Sertifikat Bahasa Arab (Mumtaz / 87.50)', edu3_s:'Darul Lughah Al Arabiyah · 29 Jan 2024 (No: 243193631)',
    edu3_d:"Lulus program I'dad Lughawiy Tingkat Pertama dengan predikat Mumtaz (87.50%): Istima' 92, Kalam 89, Kitabah 85, Qira'ah 84.",
    edu4_t:'Sertifikat Bahasa Inggris Kampung Inggris', edu4_s:'Pare-Dise International Language Academy · 18 Agu 2023 (No: 005654)',
    edu4_d:'Menyelesaikan program intensif Bahasa Inggris 1 bulan di Pare-Dise International Language Academy, Kampung Inggris Pare, Kediri.',
    cert_view:'Buka Sertifikat',
    proj_tag:'04 / Proyek', proj_h2:'Proyek Pilihan',
    f_all:'Semua',
    p_live:'Buka Web', p_gh:'Kode Sumber',
    proj_sub:'Sistem internal dan repositori publik dari GitHub @yahyaalfaruq.',
    p_nodesc:'Repositori aplikasi web yang dikerjakan selama belajar di PPQ IT Al Mahir.',
    p_more:'Tampilkan Lebih Banyak', p_less:'Ringkas', p_viewall:'Semua Repo di GitHub',
    p_error:'Gagal memuat repositori dari GitHub.', p_retry:'Muat Ulang', p_empty:'Tidak ada repositori.',
    gh_repos:'Repo', gh_followers:'Pengikut', gh_stars:'Bintang', p_updated:'Diperbarui',
    testi_tag:'05 / Kolaborasi', testi_h2:'Catatan Rekan & Mentor', testi_sub:'Catatan dari pengajar, mentor IT, dan rekan tim di PPQ IT Al Mahir.',
    t1_b:'SIAKAD Almahira',
    t1_p:'"Yahya mengerjakan modul penilaian, presensi jadwal, dan cetak raport PDF di SIAKAD Almahira. Fitur integrasi izin/sakit langsung ke daftar hadir kelas sangat membantu efisiensi rekap guru."',
    t1_n:'Tim SIAKAD Almahira',   t1_r:'Divisi Sistem Akademik · PPQ IT Al Mahir',
    t2_b:'Web Design',
    t2_p:'"Menyelesaikan materi Responsive Web Design dengan baik dan mewakili PPQ IT Al Mahir pada kompetisi web design TEKNOVISTAFEST 2024 di Universitas Airlangga."',
    t2_n:'Dhanny Ardiansyah & Mentor IT', t2_r:'Kepala Sekolah & Pengajar · PPQ IT Al Mahir',
    t3_b:'React & TypeScript',
    t3_p:'"Kerja bareng di proyek Buku Induk Siswa, Web Kasir POS, dan PSB berjalan lancar. Struktur tabel Supabase dan fitur ekspor Excel-nya rapi dan mudah dipakai."',
    t3_n:'Rekan Tim Dev PPQITA',     t3_r:'Tim Pengembang Santri · PPQITA',
    t4_b:'Aplikasi Santri & Bahasa',
    t4_p:'"Bekal Bahasa Arab (Mumtaz) dan Inggris mendukung Yahya dalam merancang aplikasi yang relevan untuk kebutuhan pesantren seperti Dompet Santri, API Al-Qur\'an, dan Kalkulator Zakat."',
    t4_n:'Asatidzah & Pembina Bahasa', t4_r:'PPQ IT Al Mahir & Darul Lughah',
    con_tag:'06 / Kontak', con_h2:'Hubungi Saya', con_sub:'Terbuka untuk diskusi proyek, magang, maupun posisi developer.',
    con_email:'Email', con_loc:'Domisili', con_avail:'Status',
    con_loc_val:'Makassar / Solo, Indonesia', con_avail_val:'Remote, magang & freelance',
    f_name:'Nama', f_email:'Email', f_subj:'Subjek', f_msg:'Pesan',
    f_name_ph:'Nama Anda', f_email_ph:'email@anda.com', f_subj_ph:'Keperluan proyek / kerja sama', f_msg_ph:'Tulis pesan Anda...',
    f_submit:'Kirim Pesan', f_sent:'Terkirim',
    foot_built:'Dibuat oleh', foot_copy:'© 2026 Yahya Al Faruq.',
    footer_name:'Yahya Al Faruq',
  },
  ar: {
    nav_home:'الرئيسية', nav_about:'عني', nav_skills:'التقنيات', nav_exp:'الخبرة',
    nav_proj:'المشاريع', nav_rev:'ملاحظات', nav_con:'تواصل', nav_resume:'السيرة الذاتية',
    hero_badge:'متاح للعمل والتدريب والمشاريع الحرة', hero_prefix:'مرحباً، أنا',
    hero_name:' يحيى الفاروق',
    hero_desc:'مطور ويب Full-Stack خريج معهد القرآن وتقنية المعلومات الماهر (PPQITA)، أبني الأنظمة الأكاديمية وتطبيقات الويب باستخدام Laravel وReact وTypeScript وSupabase.',
    cta_work:'أعمالي المختارة', cta_talk:'تواصل معي',
    tw_prefix:'أعمل على ',
    tw_phrases:['الأنظمة الأكاديمية (SIAKAD).','تطبيقات Laravel وPHP.','واجهات React وTypeScript.','تطبيقات PWA دون اتصال.','واجهات REST API وقواعد البيانات.'],
    stat_proj:'مستودع عام', stat_yrs:'سنوات خبرة', stat_cli:'مشروع منشور',
    about_tag:'01 / نبذة',
    about_h2:'نبذة عني',
    about_sub:'مطور برمجيات خريج معهد القرآن وتقنية المعلومات الماهر (PPQITA) بصولو.',
    about_c1t:'معهد الماهر PPQITA', about_c1s:'تقنية المعلومات والتحفيظ',
    about_c2t:'+50 مستودعاً', about_c2s:'GitHub وVercel',
    about_h3:'بناء برمجيات عملية للمؤسسات التعليمية واحتياجات العمل اليومية.',
    about_p1:'أنا <strong>يحيى الفاروق</strong>، مطور ويب من مواليد ماكاسار، درست تقنية المعلومات وتحفيظ القرآن الكريم في <strong>معهد القرآن وتقنية المعلومات الماهر (PPQITA)</strong> بصولو. أركز في عملي اليومي على <strong>Laravel وReact وTypeScript وNode.js وSQL</strong>.',
    about_p2:'شاركت في المعهد في بناء النظام الأكاديمي <strong>SIAKAD Almahira</strong> (التقييم والحضور ومتابعة التحفيظ والشهادات الرقمية)، ونظام سجل الطلاب، ونظام الكاشير، وتطبيق <strong>Dompet Santri</strong>، إلى جانب حصولي على شهادة اللغة العربية بتقدير <strong>ممتاز</strong> واللغة الإنجليزية.',
    about_hi1:'Laravel 12, React 19 & TypeScript',
    about_hi2:'REST APIs, Express.js & Supabase',
    about_hi3:'تطبيقات PWA وتصدير ملفات Excel وPDF',
    about_hi4:'الإندونيسية والعربية (ممتاز) والإنجليزية',
    about_btn:'تحميل السيرة الذاتية', about_view_cv:'عرض السيرة الذاتية',
    skills_tag:'02 / التقنيات', skills_h2:'الأدوات والتقنيات', skills_sub:'اللغات والأطر البرمجية التي أستخدمها بشكل يومي.',
    sk_fe:'الواجهة الأمامية', sk_be:'الخادم الخلفي', sk_db:'قواعد البيانات', sk_tools:'الأدوات واللغات',
    exp_tag:'03 / الخبرة', exp_h2:'الخبرة والتعليم', exp_sub:'المشاريع العملية والخلفية التعليمية والشهادات.',
    exp1_t:'مطور Full-Stack · نظام SIAKAD Almahira', exp1_c:'معهد القرآن وتقنية المعلومات الماهر (PPQITA)', exp1_d:'٢٠٢٥ – ٢٠٢٦',
    exp1_p:'بناء وحدة التقييم والحضور في نظام SIAKAD Almahira باستخدام Laravel 12 وTailwind CSS وSupabase، مع ربط الإجازات بالحضور وحساب الدرجات والشهادات الرقمية A4، بالإضافة إلى نظام سجل الطلاب بـ React 19 وSheetJS.',
    exp2_t:'مطور ويب وTypeScript', exp2_c:'مشاريع مستقلة ومنظومة الطلاب الرقمية', exp2_d:'٢٠٢٤ – ٢٠٢٥',
    exp2_p:'تطوير ونشر أكثر من ٣٠ تطبيق ويب على Vercel وGitHub، منها Dompet Santri ونظام الكاشير Web Kasir ونظام قبول الطلاب PSB وتطبيق Tugazku PWA وواجهة القرآن الكريم.',
    exp3_t:'مطور واجهات أمامية', exp3_c:'معهد الماهر ومسابقات تصميم الويب', exp3_d:'٢٠٢٣ – ٢٠٢٤',
    exp3_p:'إتمام منهج تصميم الويب المتجاوب والمشاركة في مسابقة TEKNOVISTAFEST 2024 بجامعة إيرلانغا ومسابقة BytesFest 2024، وتطوير مواقع Best Kaca Film وMahir Wisata وحاسبة الزكاة.',
    edu_tit:'التعليم والشهادات',
    edu1_t:'معهد القرآن وتقنية المعلومات الماهر (PPQITA)', edu1_s:'كارانغانيار، صولو · ٢٠٢٣ – ٢٠٢٦',
    edu1_d:'تخصص تقنية المعلومات (IT) وتحفيظ القرآن الكريم (PKBM Inisiator Salam Kariim).',
    edu2_t:'شهادة تصميم الويب المتجاوب', edu2_s:'معهد القرآن وتقنية المعلومات الماهر · ٢٠٢٣/٢٠٢٤',
    edu2_d:'إتمام برنامج تصميم الويب المتجاوب لمدة فصل دراسي بتقدير جيد (B).',
    edu5_t:'شهادة مسابقة TEKNOVISTAFEST لتصميم الويب', edu5_s:'جامعة إيرلانغا (UNAIR) · ١٩ أكتوبر ٢٠٢٤',
    edu5_d:'شهادة مشاركة في مسابقة تصميم الويب TEKNOVISTAFEST بجامعة إيرلانغا، سورابايا.',
    edu3_t:'شهادة اللغة العربية (بتقدير ممتاز / 87.50)', edu3_s:'دار اللغة العربية · ٢٩ يناير ٢٠٢٤ (رقم: 243193631)',
    edu3_d:'إتمام برنامج إعداد اللغة العربية للمستوى الأول بتقدير ممتاز (87.50%).',
    edu4_t:'شهادة برنامج اللغة الإنجليزية المكثف', edu4_s:'أكاديمية Pare-Dise للغات · ١٨ أغسطس ٢٠٢٣ (رقم: 005654)',
    edu4_d:'إتمام برنامج اللغة الإنجليزية المكثف في قرية الإنجليزية باري، كديري.',
    cert_view:'عرض الشهادة',
    proj_tag:'04 / المشاريع', proj_h2:'مشاريع مختارة',
    f_all:'الكل',
    p_live:'الموقع', p_gh:'المصدر',
    proj_sub:'الأنظمة والمستودعات البرمجية من حسابي @yahyaalfaruq.',
    p_nodesc:'مشروع تطبيق ويب تم تطويره خلال دراستي في معهد الماهر.',
    p_more:'عرض المزيد', p_less:'عرض أقل', p_viewall:'جميع المستودعات على GitHub',
    p_error:'تعذر تحميل المستودعات حالياً.', p_retry:'إعادة المحاولة', p_empty:'لا توجد مستودعات.',
    gh_repos:'مستودعات', gh_followers:'متابعون', gh_stars:'نجوم', p_updated:'تحديث',
    testi_tag:'05 / التعاون', testi_h2:'ملاحظات المشرفين والزملاء', testi_sub:'ملاحظات من المعلمين والمشرفين وزملاء العمل في معهد الماهر.',
    t1_b:'SIAKAD Almahira',
    t1_p:'"قام يحيى بتطوير وحدة التقييم والحضور والشهادات الرقمية في نظام SIAKAD Almahira باستخدام Laravel 12 وSupabase، مما سهّل عمل المعلمين اليومي."',
    t1_n:'فريق نظام SIAKAD Almahira', t1_r:'قسم الأنظمة الأكاديمية · معهد الماهر',
    t2_b:'تصميم الويب',
    t2_p:'"أتم منهج تصميم الويب المتجاوب ومثّل المعهد في مسابقة TEKNOVISTAFEST 2024 بجامعة إيرلانغا."',
    t2_n:'داني أرديانشاه ومشرفو التقنية', t2_r:'مدير المدرسة والمعلمون · معهد الماهر PPQITA',
    t3_b:'React & TypeScript',
    t3_p:'"العمل المشترك في نظام سجل الطلاب ونظام الكاشير ونظام القبول كان منظماً وواضحاً مع تكامل Supabase وتصدير ملفات Excel."',
    t3_n:'فريق المطورين',      t3_r:'فريق التطوير · PPQITA',
    t4_b:'التطبيقات واللغات',
    t4_p:'"جمع يحيى بين البرمجة وإتقان العربية (ممتاز) والإنجليزية في بناء تطبيقات عملية للطلاب مثل Dompet Santri وواجهة القرآن الكريم."',
    t4_n:'هيئة التدريس ومعلمو اللغات',     t4_r:'معهد الماهر ودار اللغة العربية',
    con_tag:'06 / تواصل', con_h2:'تواصل معي', con_sub:'متاح لفرص التدريب والعمل الحر وتطوير الويب.',
    con_email:'البريد الإلكتروني', con_loc:'الموقع', con_avail:'الحالة',
    con_loc_val:'ماكاسار / صولو، إندونيسيا', con_avail_val:'متاح للعمل عن بُعد والتدريب',
    f_name:'الاسم', f_email:'البريد الإلكتروني', f_subj:'الموضوع', f_msg:'الرسالة',
    f_name_ph:'الاسم الكامل', f_email_ph:'you@example.com', f_subj_ph:'موضوع الرسالة', f_msg_ph:'اكتب رسالتك هنا...',
    f_submit:'إرسال', f_sent:'تم الإرسال',
    foot_built:'تطوير', foot_copy:'© 2026 يحيى الفاروق.',
    footer_name:'يحيى الفاروق',
  }
};

export const LANG_COLORS: Record<string, string> = {
  JavaScript:'#e4e4e7', TypeScript:'#fafafa', HTML:'#a1a1aa', CSS:'#d4d4d8', PHP:'#e4e4e7',
  Blade:'#a1a1aa', Laravel:'#fafafa', React:'#e4e4e7', Python:'#d4d4d8', Vue:'#a1a1aa',
  Dart:'#d4d4d8', Java:'#a1a1aa', Kotlin:'#d4d4d8', Go:'#e4e4e7', 'C++':'#a1a1aa',
  C:'#71717a', Shell:'#a1a1aa', SCSS:'#a1a1aa',
};

export const REPO_META: Record<string, { desc: string; topics: string[] }> = {
  'katmut-betmut': {
    desc: 'Daily quotes and mood log web app built with vanilla JavaScript.',
    topics: ['JavaScript', 'DOM', 'Responsive UI']
  },
  'best-kaca-film': {
    desc: 'Company profile and service catalog page for Best Kaca Film automotive/building tinting.',
    topics: ['HTML5', 'CSS3', 'JavaScript', 'Landing Page']
  },
  'dompet-santri-app': {
    desc: 'Student allowance and expense tracker built for boarding school (pesantren) students.',
    topics: ['HTML5', 'Tailwind CSS', 'JavaScript', 'Pesantren']
  },
  'sas-todo-list': {
    desc: 'Task management web app built with Laravel Blade and MySQL.',
    topics: ['Laravel', 'Blade', 'PHP', 'MySQL']
  },
  'crud-tugas-with-pwa-indexedb': {
    desc: 'Tugazku: Offline-first Progressive Web App (PWA) for student assignments using IndexedDB.',
    topics: ['PWA', 'IndexedDB', 'Service Worker', 'JavaScript']
  },
  'calculate': {
    desc: 'Web calculator utility deployed on Vercel.',
    topics: ['HTML5', 'CSS3', 'JavaScript']
  },
  'psb-app': {
    desc: 'Penerimaan Santri Baru (PSB) student admission and registration portal in TypeScript.',
    topics: ['TypeScript', 'React', 'Tailwind CSS', 'PSB']
  },
  'web-kasir': {
    desc: 'Point of Sale (POS) cashier web application built with TypeScript and React.',
    topics: ['TypeScript', 'React', 'POS', 'Tailwind CSS']
  },
  'hello-santri-next': {
    desc: 'Community and onboarding portal for santri deployed on Vercel.',
    topics: ['Next.js', 'HTML5', 'CSS3', 'Vercel']
  },
  'todo-list': {
    desc: 'Task list application built with TypeScript and Supabase.',
    topics: ['TypeScript', 'Supabase', 'CRUD']
  },
  'api-application-quran': {
    desc: "REST Qur'an API service in TypeScript providing surah, verse, translation, and audio endpoints.",
    topics: ['TypeScript', 'Node.js', 'REST API', "Al-Qur'an"]
  },
  'catatan_keuangan': {
    desc: 'Personal income and expense ledger built with TypeScript.',
    topics: ['TypeScript', 'Finance', 'CRUD']
  },
  'pdb-santri': {
    desc: 'Student enrollment and database management app in TypeScript.',
    topics: ['TypeScript', 'PPDB', 'Web App']
  },
  'learn-api-with-expressjs': {
    desc: 'REST backend service built with Node.js and Express.js.',
    topics: ['Node.js', 'Express.js', 'REST API']
  },
  'mahir-crud-api': {
    desc: 'CRUD REST API built during backend training at PPQ IT Al Mahir.',
    topics: ['Node.js', 'Express.js', 'CRUD API']
  },
  'crud-siswa-api-nodejs': {
    desc: 'Student record REST API built with Node.js and Express.',
    topics: ['Node.js', 'Express.js', 'REST API']
  },
  'program_convertion_latin_to_arab': {
    desc: 'Transliteration tool converting Latin alphabet text into Arabic script.',
    topics: ['JavaScript', 'Arabic Script', 'Transliteration']
  },
  'kalkulator-zakat-mal': {
    desc: 'Zakat Maal calculator computing nisab thresholds and 2.5% obligation.',
    topics: ['JavaScript', 'HTML5', 'CSS3', 'Zakat']
  },
  'pos-coffe-shop-react': {
    desc: 'Point of Sale (POS) interface for coffee shops built with React.js.',
    topics: ['React.js', 'JavaScript', 'POS', 'CSS3']
  },
  'mahir-wisata': {
    desc: 'Travel and tour package landing page for Mahir Travel.',
    topics: ['HTML5', 'CSS3', 'JavaScript', 'Responsive']
  },
  'furniture-rumah': {
    desc: 'Home furniture catalog website with responsive grid layout.',
    topics: ['HTML5', 'CSS3', 'Responsive Design']
  },
  'mahad-ubk': {
    desc: "Profile and information portal for Ma'had Umar Bin Khattab.",
    topics: ['HTML5', 'CSS3', 'Web Design']
  },
};

export interface RepoItem {
  name: string;
  title?: string;
  full_name: string;
  html_url: string;
  description?: string;
  homepage?: string;
  language?: string;
  topics?: string[];
  fork?: boolean;
  size?: number;
  stars: number;
  forks: number;
  pushed_at: string;
  created_at: string;
  custom_preview?: string;
}

export const FLAGSHIP_PROJECTS: RepoItem[] = [
  {
    name: 'siakad-almahira',
    title: 'SIAKAD Almahira (Penilaian, Presensi & E-Raport)',
    full_name: 'yahyaalfaruq/siakad-almahira',
    html_url: 'https://github.com/yahyaalfaruq',
    homepage: '',
    language: 'PHP',
    topics: ['Laravel 12', 'Supabase', 'Tailwind CSS 4', 'DomPDF'],
    description:
      'Academic Information System for PPQ IT Al Mahir covering schedule-based attendance, automated leave-to-attendance override, KKM grading with Arabic predicates, Tahfidz tracking, and A4 PDF report cards.',
    stars: 5,
    forks: 2,
    pushed_at: '2026-05-21T10:00:00Z',
    created_at: '2025-11-01T00:00:00Z',
    fork: false,
    size: 1200,
    custom_preview: 'fallback',
  },
  {
    name: 'pendataan-siswa-buku-induk',
    title: 'Sistem Buku Induk & Pendataan Siswa',
    full_name: 'yahyaalfaruq/pendataan-siswa',
    html_url: 'https://github.com/yahyaalfaruq',
    homepage: '',
    language: 'TypeScript',
    topics: ['React 19', 'Supabase', 'Vite 8', 'SheetJS (XLSX)'],
    description:
      'Digital Buku Induk and student registry web app built with React 19 and Supabase, featuring class filtering and Excel (.xlsx) import/export.',
    stars: 4,
    forks: 1,
    pushed_at: '2026-07-18T08:56:00Z',
    created_at: '2026-04-01T00:00:00Z',
    fork: false,
    size: 850,
    custom_preview: 'fallback',
  },
  {
    name: 'hafiz-quran-app',
    title: "Hafiz Qur'an (Tahfidz & Mushaf Per Halaman)",
    full_name: 'yahyaalfaruq/api-application-quran',
    html_url: 'https://github.com/yahyaalfaruq/api-application-quran',
    homepage: '',
    language: 'TypeScript',
    topics: ["Tahfidz Al-Qur'an", 'TypeScript', 'Mushaf Mode', 'Progress Tracker'],
    description:
      "Al-Qur'an memorization (Tahfidz) web app per page with repetition tracking, daily targets, and page bookmarking.",
    stars: 4,
    forks: 1,
    pushed_at: '2025-06-25T11:03:00Z',
    created_at: '2025-06-01T00:00:00Z',
    fork: false,
    size: 640,
    custom_preview: '/assets/Screenshot 2025-06-25 110316.png',
  },
];
