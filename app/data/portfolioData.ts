export type LangCode = 'en' | 'id' | 'ar';

export const T: Record<LangCode, Record<string, any>> = {
  en: {
    nav_home:'Home', nav_about:'About', nav_skills:'Skills', nav_exp:'Experience',
    nav_proj:'Projects', nav_rev:'Reviews', nav_con:'Contact', nav_resume:'Resume',
    hero_badge:'Available for work', hero_prefix:"Hi, I'm",
    hero_name:' Yahya Al Faruq',
    hero_desc:'Full-Stack Software Engineer educated at PPQ IT Al Mahir (PPQITA), crafting modern web applications with Laravel, React, TypeScript, Node.js, and Supabase.',
    cta_work:'View My Work', cta_talk:"Let's Talk",
    tw_prefix:'I build ',
    tw_phrases:['academic systems (SIAKAD).','full-stack Laravel apps.','React & TypeScript UIs.','offline-first PWAs.','scalable REST APIs.'],
    stat_proj:'Repositories', stat_yrs:'Years Coding', stat_cli:'Live Web Apps',
    about_tag:'Who I Am',
    about_h2:'About <span class="gradient-text">Me</span>',
    about_sub:'Full-Stack Software Engineer educated at PPQ IT Al Mahir (PPQITA)',
    about_c1t:'PPQ IT Al Mahir', about_c1s:'IT & Tahfidz Graduate',
    about_c2t:'50+ Repos', about_c2s:'Built & Deployed',
    about_h3:'Bridging <span class="gradient-text">modern technology</span> with Islamic educational values.',
    about_p1:"I'm <strong>Yahya Al Faruq</strong>, a Full-Stack Software Engineer born in Makassar and trained in Information Technology & Tahfidz Al-Qur'an at <strong>Pondok Pesantren Qur'an & IT Al Mahir (PPQITA)</strong>, Karanganyar (Solo Raya). I specialize in building end-to-end web applications using <strong>Laravel, React, TypeScript, Node.js, and Supabase</strong>.",
    about_p2:"Throughout my journey at PPQITA, I have architected academic information systems (<strong>SIAKAD Almahira</strong> — Grading, Smart Attendance, Tahfidz Tracking & Digital Report Cards), student registry platforms, POS cashier systems, financial trackers (<strong>Dompet Santri</strong>), and Qur'an APIs — backed by certified proficiency in <strong>Arabic (Mumtaz)</strong> and <strong>English (Kampung Inggris Pare)</strong>.",
    about_hi1:'Full-Stack Web Apps (Laravel 12, React 19, TypeScript)',
    about_hi2:'RESTful API, Express.js & Supabase Cloud Architecture',
    about_hi3:'Offline-First PWA, IndexedDB & Responsive UI/UX',
    about_hi4:'Trilingual Communicator (Indonesian, Arabic & English)',
    about_btn:'Download Resume', about_view_cv:'View CV Online',
    skills_tag:'What I Know', skills_h2:'Tech <span class="gradient-text">Stack</span>', skills_sub:'Technologies I use to build production-ready applications',
    sk_fe:'Frontend', sk_be:'Backend', sk_db:'Database & Storage', sk_tools:'Tools & Languages',
    prof1:'HTML5, CSS3 & Responsive Web Design', prof2:'JavaScript & TypeScript', prof3:'Laravel / PHP Full-Stack',
    prof4:'React.js, Next.js & Tailwind CSS',   prof5:'Node.js, Express & REST API', prof6:'MySQL, PostgreSQL & Supabase',
    exp_tag:'My Journey', exp_h2:'Experience & <span class="gradient-text">Education</span>', exp_sub:'My software engineering journey, projects, and academic credentials at PPQ IT Al Mahir',
    exp1_t:'Full-Stack Developer — SIAKAD Almahira & Academic Systems', exp1_c:'PPQ IT Al Mahir (PPQITA) · Karanganyar', exp1_d:'2025 – 2026',
    exp1_p:"Architected the Assessment & Attendance Module (PenilaianDanPresensi) for SIAKAD Almahira using Laravel 12, Tailwind CSS, and Supabase. Built automated leave-to-attendance override sync, dynamic KKM-based academic grading with Arabic predicates, Tahfidz Al-Qur'an progress tracking, and print-ready A4 Digital Report Cards (DomPDF). Also built the Student Master Registry (Pendataan Siswa) with React 19, Vite, and SheetJS.",
    exp2_t:'Full-Stack Web & TypeScript Developer', exp2_c:'Santri Digital Ecosystem & Open-Source Projects', exp2_d:'2024 – 2025',
    exp2_p:"Developed and deployed 30+ full-stack and frontend web applications on Vercel & GitHub, including Dompet Santri (student wallet tracker), Web Kasir POS (TypeScript), PSB/PPDB Santri Admission System, Tugazku Offline-First PWA (IndexedDB), SAS Todo-List (Laravel Blade), Qur'an REST API, and Express.js CRUD APIs.",
    exp3_t:'Frontend Web Designer & Web Developer', exp3_c:'PPQ IT Al Mahir Bootcamp & Web Design Competitions', exp3_d:'2023 – 2024',
    exp3_p:'Completed intensive Responsive Web Design training at PPQ IT Al Mahir and competed in national Web Design competitions including TEKNOVISTAFEST 2024 (Universitas Airlangga) and BytesFest 2024. Crafted responsive websites and interactive apps including Best Kaca Film, Mahir Wisata Travel, POS Coffee Shop (React), Zakat Mal Calculator, Latin-to-Arabic Converter, and Mahad Umar Bin Khattab portal.',
    edu_tit:'Education & Official Certifications',
    edu1_t:"Pondok Pesantren Qur'an & IT Al Mahir (PPQITA)", edu1_s:'Karanganyar, Solo Raya · 2023 – 2026',
    edu1_d:"Major in Information & Technology (IT) and Tahfidz Al-Qur'an (PKBM Inisiator Salam Kariim). Intensive curriculum in Full-Stack Web Development, Software Engineering, Arabic, and Islamic Studies.",
    edu2_t:'Responsive Web Design Certification', edu2_s:'PPQ IT Al Mahir (PPQITA) · 2023/2024',
    edu2_d:"Completed 1-semester intensive Responsive Web Design residency at Pondok Pesantren Qur'an & IT Al Mahir with Grade B (Baik / Good).",
    edu5_t:'Web Design Competition — TEKNOVISTAFEST', edu5_s:'Fakultas Vokasi Universitas Airlangga (UNAIR) · 19 Oct 2024',
    edu5_d:'Awarded certificate of participation in the TEKNOVISTAFEST Web Design Competition organized by HIMA Teknik Informatika, Fakultas Vokasi Universitas Airlangga, Surabaya.',
    edu3_t:'Arabic Language Preparation (Mumtaz / 87.50)', edu3_s:'Darul Lughah Al Arabiyah · Jan 2024 (No: 243193631)',
    edu3_d:"Graduated with predicate Mumtaz (Excellent — 87.50%): Listening (Istima') 92, Speaking (Kalam) 89, Writing (Kitabah) 85, Reading (Qira'ah) 84.",
    edu4_t:'Intensive English Program Kampung Inggris', edu4_s:'Pare-Dise International Language Academy · Aug 2023 (No: 005654)',
    edu4_d:'Completed intensive English communication and language mastery program at Pare-Dise, Kampung Inggris Pare, Kediri.',
    cert_view:'View Certificate',
    proj_tag:'My Work', proj_h2:'Featured <span class="gradient-text">Projects</span>',
    f_all:'All',
    p_live:'Live Demo', p_gh:'GitHub',
    proj_sub:'Flagship systems & live repositories from my GitHub (@yahyaalfaruq)',
    p_nodesc:'Full-stack / web application project built during my software engineering journey at PPQ IT Al Mahir.',
    p_more:'Show More', p_less:'Show Less', p_viewall:'View All on GitHub',
    p_error:"Couldn't load repositories from GitHub right now.", p_retry:'Try Again', p_empty:'No public repositories found.',
    gh_repos:'Repos', gh_followers:'Followers', gh_stars:'Stars', p_updated:'Updated',
    ld_msgs:['initializing','loading assets','fetching github repos','compiling ui','ready'],
    testi_tag:'Endorsements', testi_h2:'Mentor & Peer <span class="gradient-text">Reviews</span>', testi_sub:'Feedback from educators, mentors, and project collaborators at PPQ IT Al Mahir',
    t1_b:'SIAKAD Almahira',
    t1_p:'"Yahya engineered the Assessment, Smart Attendance & Digital Report Card module for SIAKAD Almahira with remarkable precision. His Laravel 12 & Supabase implementation automated teacher grading and attendance workflows seamlessly."',
    t1_n:'SIAKAD Almahira Core Team',   t1_r:'Academic System Division · PPQ IT Al Mahir',
    t2_b:'Web Design & UI/UX',
    t2_p:'"From completing the Responsive Web Design curriculum to representing our institution at UNAIR\'s TEKNOVISTAFEST 2024, Yahya consistently demonstrates strong visual design sensibility and clean frontend execution."',
    t2_n:'Dhanny Ardiansyah & IT Mentors', t2_r:'Principal & Educators · PPQ IT Al Mahir',
    t3_b:'Full-Stack & React',
    t3_p:'"Collaborating with Yahya on the Student Master Registry (Buku Induk), Web Kasir POS, and PSB systems was effortless. He translates complex database schemas and Excel/PDF exports into fast, intuitive React and TypeScript interfaces."',
    t3_n:'Full-Stack Engineering Peers', t3_r:'Software Development Team · PPQITA',
    t4_b:'Islamic Tech & Language',
    t4_p:'"Yahya pairs solid software engineering with Mumtaz Arabic proficiency and English mastery — building beneficial apps like Dompet Santri, the Qur\'an REST API, and Zakat Mal Calculator for the boarding school community."',
    t4_n:'Asatidzah & Language Instructors', t4_r:'PPQ IT Al Mahir & Darul Lughah',
    con_tag:'Get In Touch', con_h2:"Let's <span class=\"gradient-text\">Collaborate</span>", con_sub:"Have a project or opportunity in mind? Reach out anytime.",
    con_email:'Email', con_loc:'Location', con_avail:'Availability',
    con_loc_val:'Makassar / Solo, Indonesia 🇮🇩', con_avail_val:'Open to remote, internship & freelance',
    f_name:'Full Name', f_email:'Email Address', f_subj:'Subject', f_msg:'Message',
    f_name_ph:'John Doe', f_email_ph:'john@example.com', f_subj_ph:'Project collaboration...', f_msg_ph:'Tell me about your project...',
    f_submit:'Send Message', f_sent:'Message Sent!',
    foot_built:'Designed & built with ❤️ by', foot_copy:'© 2026 Yahya Al Faruq. All Rights Reserved.',
    footer_name:'Yahya Al Faruq',
  },
  id: {
    nav_home:'Beranda', nav_about:'Tentang', nav_skills:'Keahlian', nav_exp:'Pengalaman',
    nav_proj:'Proyek', nav_rev:'Ulasan', nav_con:'Kontak', nav_resume:'Unduh CV',
    hero_badge:'Tersedia untuk bekerja', hero_prefix:'Halo, Saya',
    hero_name:' Yahya Al Faruq',
    hero_desc:'Full-Stack Software Engineer lulusan PPQ IT Al Mahir (PPQITA), membangun aplikasi web modern dengan Laravel, React, TypeScript, Node.js, dan Supabase.',
    cta_work:'Lihat Karya Saya', cta_talk:'Mari Bicara',
    tw_prefix:'Saya membangun ',
    tw_phrases:['sistem akademik (SIAKAD).','aplikasi full-stack Laravel.','antarmuka React & TypeScript.','aplikasi PWA offline-first.','REST API yang skalabel.'],
    stat_proj:'Repositori', stat_yrs:'Tahun Coding', stat_cli:'Web App Live',
    about_tag:'Siapa Saya',
    about_h2:'Tentang <span class="gradient-text">Saya</span>',
    about_sub:'Full-Stack Software Engineer lulusan Pondok Pesantren Qur\'an & IT Al Mahir (PPQITA)',
    about_c1t:'PPQ IT Al Mahir', about_c1s:'Jurusan IT & Tahfidz',
    about_c2t:'50+ Repo', about_c2s:'Dibangun & Dirilis',
    about_h3:'Menjembatani <span class="gradient-text">teknologi modern</span> dengan nilai pendidikan Islam.',
    about_p1:"Saya <strong>Yahya Al Faruq</strong>, seorang Full-Stack Software Engineer kelahiran Makassar yang menempuh pendidikan Informasi & Teknologi (IT) serta Tahfidz Al-Qur'an di <strong>Pondok Pesantren Qur'an & IT Al Mahir (PPQITA)</strong>, Karanganyar (Solo Raya). Saya berfokus pada pengembangan aplikasi web end-to-end menggunakan <strong>Laravel, React, TypeScript, Node.js, dan Supabase</strong>.",
    about_p2:"Selama menempuh pendidikan di PPQITA, saya telah merancang sistem informasi akademik (<strong>SIAKAD Almahira</strong> — Modul Penilaian, Presensi Pintar, Tahfidz & Cetak Raport Digital), sistem buku induk pendataan siswa, aplikasi kasir POS, pencatat keuangan (<strong>Dompet Santri</strong>), serta REST API Al-Qur'an — dilengkapi sertifikasi <strong>Bahasa Arab (Mumtaz)</strong> dan <strong>Bahasa Inggris (Kampung Inggris Pare)</strong>.",
    about_hi1:'Aplikasi Web Full-Stack (Laravel 12, React 19, TypeScript)',
    about_hi2:'Arsitektur RESTful API, Express.js & Supabase Cloud',
    about_hi3:'PWA Offline-First, IndexedDB & Desain UI/UX Responsif',
    about_hi4:'Komunikasi Tiga Bahasa (Indonesia, Arab & Inggris)',
    about_btn:'Unduh Resume (PDF)', about_view_cv:'Lihat CV Online',
    skills_tag:'Yang Saya Kuasai', skills_h2:'Tumpukan <span class="gradient-text">Teknologi</span>', skills_sub:'Teknologi yang saya gunakan untuk membangun aplikasi siap produksi',
    sk_fe:'Frontend', sk_be:'Backend', sk_db:'Basis Data & Penyimpanan', sk_tools:'Alat & Bahasa',
    prof1:'HTML5, CSS3 & Responsive Web Design', prof2:'JavaScript & TypeScript', prof3:'Laravel / PHP Full-Stack',
    prof4:'React.js, Next.js & Tailwind CSS',   prof5:'Node.js, Express & REST API', prof6:'MySQL, PostgreSQL & Supabase',
    exp_tag:'Perjalanan Saya', exp_h2:'Pengalaman & <span class="gradient-text">Pendidikan</span>', exp_sub:'Perjalanan rekayasa perangkat lunak, proyek nyata, dan sertifikasi di PPQ IT Al Mahir',
    exp1_t:'Full-Stack Developer — SIAKAD Almahira & Sistem Akademik', exp1_c:'PPQ IT Al Mahir (PPQITA) · Karanganyar', exp1_d:'2025 – 2026',
    exp1_p:"Merancang dan membangun Modul Penilaian & Presensi (PenilaianDanPresensi) pada SIAKAD Almahira menggunakan Laravel 12, Tailwind CSS, dan Supabase. Mengimplementasikan sinkronisasi override otomatis Izin/Sakit ke presensi, kalkulasi nilai akademik adaptif berbasis KKM dengan predikat Arab (Mumtaz–Maqbul), pelacakan setoran Tahfidz Al-Qur'an, dan Cetak Raport Digital A4 (DomPDF). Juga mengembangkan Sistem Buku Induk & Pendataan Siswa dengan React 19, Vite, dan SheetJS.",
    exp2_t:'Full-Stack Web & TypeScript Developer', exp2_c:'Ekosistem Digital Santri & Proyek Open-Source', exp2_d:'2024 – 2025',
    exp2_p:"Mengembangkan dan merilis 30+ aplikasi web full-stack dan frontend di Vercel & GitHub, meliputi Dompet Santri, Web Kasir POS (TypeScript), Sistem PSB/PPDB Santri, Tugazku PWA Offline-First (IndexedDB), SAS Todo-List (Laravel Blade), REST API Al-Qur'an, serta CRUD API dengan Express.js.",
    exp3_t:'Frontend Web Designer & Web Developer', exp3_c:'Bootcamp PPQ IT Al Mahir & Kompetisi Web Design', exp3_d:'2023 – 2024',
    exp3_p:'Menyelesaikan program intensif Responsive Web Design di PPQ IT Al Mahir (Predikat B/Baik) serta berkompetisi di Lomba Web Design TEKNOVISTAFEST 2024 (Universitas Airlangga) dan BytesFest 2024. Membangun berbagai landing page dan aplikasi interaktif seperti Best Kaca Film, Mahir Wisata Travel, POS Coffee Shop (React), Kalkulator Zakat Mal, Konversi Latin ke Arab, dan portal Mahad Umar Bin Khattab.',
    edu_tit:'Pendidikan & Sertifikasi Resmi',
    edu1_t:"Pondok Pesantren Qur'an & IT Al Mahir (PPQITA)", edu1_s:'Karanganyar, Solo Raya · 2023 – 2026',
    edu1_d:"Kompetensi Keahlian Informasi & Teknologi (IT) dan Tahfidz Al-Qur'an (PKBM Inisiator Salam Kariim). Kurikulum intensif Full-Stack Web Development, Rekayasa Perangkat Lunak, Bahasa Arab, dan Diniyah.",
    edu2_t:'Sertifikat Responsive Web Design', edu2_s:'PPQ IT Al Mahir (PPQITA) · T.A. 2023/2024',
    edu2_d:"Menyelesaikan pembelajaran materi Responsive Web Design selama 1 semester di Pondok Pesantren Qur'an & IT Al Mahir dengan Predikat B (Baik).",
    edu5_t:'Sertifikat Lomba Web Design — TEKNOVISTAFEST', edu5_s:'Fakultas Vokasi Universitas Airlangga (UNAIR) · 19 Okt 2024',
    edu5_d:'Diberikan atas partisipasi sebagai Peserta Lomba Web Design TEKNOVISTAFEST yang diselenggarakan oleh HIMA Teknik Informatika Fakultas Vokasi Universitas Airlangga, Surabaya.',
    edu3_t:'Sertifikat Bahasa Arab (Predikat Mumtaz / 87.50)', edu3_s:'Darul Lughah Al Arabiyah · 29 Jan 2024 (No: 243193631)',
    edu3_d:"Lulus program I'dad Lughawiy Tingkat Pertama dengan predikat Mumtaz (87.50%): Istima' (Mendengar) 92, Kalam (Berbicara) 89, Kitabah (Menulis) 85, Qira'ah (Membaca) 84.",
    edu4_t:'Sertifikat Program Bahasa Inggris Kampung Inggris', edu4_s:'Pare-Dise International Language Academy · 18 Agu 2023 (No: 005654)',
    edu4_d:'Menyelesaikan program intensif Bahasa Inggris selama 1 bulan di Pare-Dise International Language Academy, Kampung Inggris Pare, Kediri.',
    cert_view:'Lihat Sertifikat',
    proj_tag:'Karya Saya', proj_h2:'Proyek <span class="gradient-text">Unggulan</span>',
    f_all:'Semua',
    p_live:'Demo Langsung', p_gh:'GitHub',
    proj_sub:'Sistem unggulan & repositori langsung dari GitHub saya (@yahyaalfaruq)',
    p_nodesc:'Proyek aplikasi web yang dikembangkan selama perjalanan rekayasa perangkat lunak di PPQ IT Al Mahir.',
    p_more:'Lihat Lebih Banyak', p_less:'Tampilkan Lebih Sedikit', p_viewall:'Lihat Semua di GitHub',
    p_error:'Gagal memuat repositori dari GitHub saat ini.', p_retry:'Coba Lagi', p_empty:'Tidak ada repositori publik.',
    gh_repos:'Repo', gh_followers:'Pengikut', gh_stars:'Bintang', p_updated:'Diperbarui',
    ld_msgs:['memulai','memuat aset','mengambil repo github','menyusun tampilan','siap'],
    testi_tag:'Rekomendasi', testi_h2:'Ulasan Mentor & <span class="gradient-text">Rekan</span>', testi_sub:'Apresiasi dari pendidik, mentor IT, dan rekan kolaborasi di PPQ IT Al Mahir',
    t1_b:'SIAKAD Almahira',
    t1_p:'"Yahya merancang Modul Penilaian, Presensi Pintar & Raport Digital SIAKAD Almahira dengan akurasi tinggi. Implementasi Laravel 12 & Supabase-nya mengotomatisasi alur penilaian dan presensi guru secara menyeluruh."',
    t1_n:'Tim Inti SIAKAD Almahira',   t1_r:'Divisi Sistem Akademik · PPQ IT Al Mahir',
    t2_b:'Web Design & UI/UX',
    t2_p:'"Mulai dari menuntaskan kurikulum Responsive Web Design hingga mewakili lembaga di ajang TEKNOVISTAFEST 2024 Universitas Airlangga, Yahya konsisten menunjukkan kepekaan desain visual dan eksekusi frontend yang bersih."',
    t2_n:'Dhanny Ardiansyah & Mentor IT', t2_r:'Kepala Sekolah & Pengajar · PPQ IT Al Mahir',
    t3_b:'Full-Stack & React',
    t3_p:'"Berkolaborasi dengan Yahya pada Sistem Buku Induk Pendataan Siswa, Web Kasir POS, dan PSB sangat lancar. Ia menerjemahkan skema database kompleks dan ekspor Excel/PDF menjadi antarmuka React & TypeScript yang cepat."',
    t3_n:'Rekan Tim Engineering',     t3_r:'Tim Pengembang Full-Stack · PPQITA',
    t4_b:'Teknologi & Bahasa',
    t4_p:'"Yahya memadukan keahlian rekayasa perangkat lunak yang kuat dengan penguasaan Bahasa Arab (Mumtaz) dan Inggris — melahirkan aplikasi bermanfaat seperti Dompet Santri, REST API Al-Qur\'an, dan Kalkulator Zakat Mal."',
    t4_n:'Asatidzah & Pembina Bahasa', t4_r:'PPQ IT Al Mahir & Darul Lughah',
    con_tag:'Hubungi Saya', con_h2:'Mari <span class="gradient-text">Berkolaborasi</span>', con_sub:'Punya proyek atau peluang kerja sama? Hubungi saya kapan saja.',
    con_email:'Email', con_loc:'Lokasi', con_avail:'Ketersediaan',
    con_loc_val:'Makassar / Solo, Indonesia 🇮🇩', con_avail_val:'Terbuka untuk remote, magang & freelance',
    f_name:'Nama Lengkap', f_email:'Alamat Email', f_subj:'Subjek', f_msg:'Pesan',
    f_name_ph:'Budi Santoso', f_email_ph:'budi@example.com', f_subj_ph:'Kolaborasi proyek...', f_msg_ph:'Ceritakan tentang proyek Anda...',
    f_submit:'Kirim Pesan', f_sent:'Pesan Terkirim!',
    foot_built:'Dirancang & dibangun dengan ❤️ oleh', foot_copy:'© 2026 Yahya Al Faruq. Hak Cipta Dilindungi.',
    footer_name:'Yahya Al Faruq',
  },
  ar: {
    nav_home:'الرئيسية', nav_about:'عني', nav_skills:'المهارات', nav_exp:'الخبرة',
    nav_proj:'المشاريع', nav_rev:'التقييمات', nav_con:'تواصل', nav_resume:'السيرة الذاتية',
    hero_badge:'متاح للعمل', hero_prefix:'مرحباً، أنا',
    hero_name:' يحيى الفاروق',
    hero_desc:'مهندس برمجيات Full-Stack خريج معهد القرآن وتقنية المعلومات الماهر (PPQITA)، أبني تطبيقات ويب حديثة باستخدام Laravel وReact وTypeScript وNode.js وSupabase.',
    cta_work:'اعرض أعمالي', cta_talk:'تحدث معي',
    tw_prefix:'أبني ',
    tw_phrases:['أنظمة أكاديمية (SIAKAD).','تطبيقات Laravel متكاملة.','واجهات React وTypeScript.','تطبيقات PWA تعمل دون اتصال.','واجهات برمجية REST API.'],
    stat_proj:'مستودع برمجي', stat_yrs:'سنوات برمجة', stat_cli:'تطبيق منشور',
    about_tag:'من أنا',
    about_h2:'نبذة <span class="gradient-text">عني</span>',
    about_sub:'مهندس برمجيات Full-Stack من معهد القرآن وتقنية المعلومات الماهر (PPQITA)',
    about_c1t:'معهد الماهر PPQITA', about_c1s:'تخصص تقنية المعلومات والتحفيظ',
    about_c2t:'+50 مشروعاً', about_c2s:'تم بناؤها ونشرها',
    about_h3:'نجمع بين <span class="gradient-text">التقنية الحديثة</span> والقيم التعليمية الإسلامية.',
    about_p1:'أنا <strong>يحيى الفاروق</strong>، مهندس برمجيات Full-Stack من مواليد ماكاسار، تلقيت تعليمي في تقنية المعلومات وتحفيظ القرآن الكريم في <strong>معهد القرآن وتقنية المعلومات الماهر (PPQITA)</strong> بصولو. أتخصص في بناء تطبيقات الويب المتكاملة باستخدام <strong>Laravel وReact وTypeScript وNode.js وSupabase</strong>.',
    about_p2:'خلال مسيرتي في المعهد، قمت بتطوير النظام الأكاديمي المتكامل (<strong>SIAKAD Almahira</strong> — التقييم والحضور الذكي ومتابعة التحفيظ والشهادات الرقمية)، ونظام سجل الطلاب، ونظام نقاط البيع (Web Kasir)، وتطبيق المحفظة الطلابية (<strong>Dompet Santri</strong>)، مع إتقان معتمد للغتين <strong>العربية (بتقدير ممتاز)</strong> و<strong>الإنجليزية</strong>.',
    about_hi1:'تطبيقات ويب متكاملة (Laravel 12, React 19, TypeScript)',
    about_hi2:'بنية RESTful API وExpress.js وقاعدة بيانات Supabase السحابية',
    about_hi3:'تطبيقات PWA وIndexedDB وتصميم واجهات متجاوبة',
    about_hi4:'إجادة ثلاث لغات (الإندونيسية والعربية والإنجليزية)',
    about_btn:'تحميل السيرة الذاتية', about_view_cv:'عرض السيرة الذاتية',
    skills_tag:'ما أتقنه', skills_h2:'المهارات <span class="gradient-text">التقنية</span>', skills_sub:'التقنيات التي أستخدمها لبناء تطبيقات جاهزة للإنتاج',
    sk_fe:'الواجهة الأمامية', sk_be:'الخادم الخلفي', sk_db:'قواعد البيانات والتخزين', sk_tools:'الأدوات واللغات',
    prof1:'HTML5, CSS3 وتصميم الويب المتجاوب', prof2:'JavaScript وTypeScript', prof3:'تطوير Laravel / PHP المتكامل',
    prof4:'React.js, Next.js وTailwind CSS',   prof5:'Node.js, Express وREST API', prof6:'MySQL, PostgreSQL وSupabase',
    exp_tag:'مسيرتي', exp_h2:'الخبرة <span class="gradient-text">والتعليم</span>', exp_sub:'رحلتي البرمجية والمشاريع والشهادات العلمية في معهد الماهر (PPQITA)',
    exp1_t:'مطور Full-Stack — نظام SIAKAD Almahira والأنظمة الأكاديمية', exp1_c:'معهد القرآن وتقنية المعلومات الماهر (PPQITA)', exp1_d:'٢٠٢٥ – ٢٠٢٦',
    exp1_p:'تطوير وحدة التقييم والحضور (PenilaianDanPresensi) لنظام SIAKAD Almahira باستخدام Laravel 12 وTailwind CSS وSupabase، مع مزامنة تلقائية للإجازات، وحساب الدرجات والتقديرات العربية، ومتابعة تحفيظ القرآن، وطباعة الشهادات الرقمية A4، بالإضافة إلى نظام سجل الطلاب بـ React 19 وSheetJS.',
    exp2_t:'مطور ويب Full-Stack وTypeScript', exp2_c:'المنظومة الرقمية للطلاب والمشاريع مفتوحة المصدر', exp2_d:'٢٠٢٤ – ٢٠٢٥',
    exp2_p:'تطوير ونشر أكثر من ٣٠ تطبيق ويب على Vercel وGitHub، منها تطبيق محفظة الطالب (Dompet Santri)، ونظام الكاشير (Web Kasir)، ونظام قبول الطلاب الجدد (PSB)، وتطبيق المهام التقدمي (Tugazku PWA)، وواجهة برمجة تطبيقات القرآن الكريم.',
    exp3_t:'مصمم ومطور واجهات ويب', exp3_c:'معسكر معهد الماهر ومسابقات تصميم الويب', exp3_d:'٢٠٢٣ – ٢٠٢٤',
    exp3_p:'إتمام التدريب المكثف في تصميم الويب المتجاوب والمشاركة في مسابقة TEKNOVISTAFEST 2024 بجامعة إيرلانغا ومسابقة BytesFest 2024، وتطوير مواقع وتطبيقات تفاعلية مثل Best Kaca Film وMahir Wisata وحاسبة زكاة المال ومحول الحروف اللاتينية إلى العربية.',
    edu_tit:'التعليم والشهادات الرسمية',
    edu1_t:'معهد القرآن وتقنية المعلومات الماهر (PPQITA)', edu1_s:'كارانغانيار، صولو · ٢٠٢٣ – ٢٠٢٦',
    edu1_d:'تخصص تقنية المعلومات (IT) وتحفيظ القرآن الكريم (PKBM Inisiator Salam Kariim). منهج مكثف في هندسة البرمجيات وتطوير الويب واللغة العربية والعلوم الشرعية.',
    edu2_t:'شهادة تصميم الويب المتجاوب (Responsive Web Design)', edu2_s:'معهد القرآن وتقنية المعلومات الماهر · ٢٠٢٣/٢٠٢٤',
    edu2_d:'إتمام برنامج تصميم الويب المتجاوب لمدة فصل دراسي كامل في معهد الماهر بتقدير جيد (B).',
    edu5_t:'شهادة مسابقة تصميم الويب — TEKNOVISTAFEST', edu5_s:'كلية الدراسات المهنية بجامعة إيرلانغا (UNAIR) · ١٩ أكتوبر ٢٠٢٤',
    edu5_d:'شهادة مشاركة في مسابقة تصميم الويب TEKNOVISTAFEST التي نظمتها رابطة طلاب هندسة المعلوماتية بجامعة إيرلانغا، سورابايا.',
    edu3_t:'شهادة إعداد اللغة العربية (بتقدير ممتاز / 87.50)', edu3_s:'دار اللغة العربية · ٢٩ يناير ٢٠٢٤ (رقم القيد: 243193631)',
    edu3_d:'إتمام برنامج إعداد اللغة العربية للمستوى الأول بتقدير ممتاز (87.50%): الاستماع 92، الكلام 89، الكتابة 85، القراءة 84.',
    edu4_t:'شهادة برنامج اللغة الإنجليزية المكثف', edu4_s:'أكاديمية Pare-Dise للغات · ١٨ أغسطس ٢٠٢٣ (رقم: 005654)',
    edu4_d:'إتمام برنامج اللغة الإنجليزية المكثف لمدة شهر في قرية الإنجليزية باري، كديري.',
    cert_view:'عرض الشهادة',
    proj_tag:'أعمالي', proj_h2:'مشاريع <span class="gradient-text">مميزة</span>',
    f_all:'الكل',
    p_live:'عرض مباشر', p_gh:'GitHub',
    proj_sub:'الأنظمة الرئيسية والمستودعات البرمجية من حسابي على GitHub (@yahyaalfaruq)',
    p_nodesc:'مشروع تطبيق ويب تم بناؤه خلال مسيرتي البرمجية في معهد الماهر.',
    p_more:'عرض المزيد', p_less:'عرض أقل', p_viewall:'عرض الكل على GitHub',
    p_error:'تعذر تحميل المستودعات من GitHub حالياً.', p_retry:'حاول مجدداً', p_empty:'لا توجد مستودعات عامة.',
    gh_repos:'مستودعات', gh_followers:'متابعون', gh_stars:'نجوم', p_updated:'تحديث',
    ld_msgs:['جارٍ البدء','تحميل الملفات','جلب مستودعات github','تجهيز الواجهة','جاهز'],
    testi_tag:'توصيات وإشادات', testi_h2:'آراء المشرفين <span class="gradient-text">والزملاء</span>', testi_sub:'إشادات من المعلمين والمشرفين وزملاء المشاريع في معهد الماهر (PPQITA)',
    t1_b:'SIAKAD Almahira',
    t1_p:'"طوّر يحيى وحدة التقييم والحضور الذكي والشهادات الرقمية في نظام SIAKAD Almahira بدقة عالية باستخدام Laravel 12 وSupabase، مما أتمت عمل المعلمين بالكامل."',
    t1_n:'الفريق الأساسي لنظام SIAKAD Almahira', t1_r:'قسم الأنظمة الأكاديمية · معهد الماهر',
    t2_b:'تصميم الويب وواجهات المستخدم',
    t2_p:'"من إتمام منهج تصميم الويب المتجاوب إلى تمثيل المعهد في مسابقة TEKNOVISTAFEST 2024 بجامعة إيرلانغا، يظهر يحيى دائماً ذائقة بصرية مميزة وتنفيذاً متقناً."',
    t2_n:'داني أرديانشاه ومشرفو التقنية', t2_r:'مدير المدرسة والمعلمون · معهد الماهر PPQITA',
    t3_b:'تطوير Full-Stack وReact',
    t3_p:'"التعاون مع يحيى في نظام سجل الطلاب ونظام الكاشير ونظام القبول كان سلساً للغاية؛ فهو يحول قواعد البيانات المعقدة وتصدير Excel/PDF إلى واجهات React وTypeScript سريعة."',
    t3_n:'زملاء هندسة البرمجيات',      t3_r:'فريق التطوير Full-Stack · PPQITA',
    t4_b:'التقنية الإسلامية واللغات',
    t4_p:'"يجمع يحيى بين المهارة البرمجية المتينة وإتقان العربية (بتقدير ممتاز) والإنجليزية، مما أثمر تطبيقات نافعة مثل محفظة الطالب وواجهة القرآن الكريم وحاسبة الزكاة."',
    t4_n:'هيئة التدريس ومعلمو اللغات',     t4_r:'معهد الماهر ودار اللغة العربية',
    con_tag:'تواصل معي', con_h2:'لنتعاون <span class="gradient-text">معاً</span>', con_sub:'هل لديك مشروع أو فرصة عمل؟ تواصل معي في أي وقت.',
    con_email:'البريد الإلكتروني', con_loc:'الموقع', con_avail:'التوفر',
    con_loc_val:'ماكاسار / صولو، إندونيسيا 🇮🇩', con_avail_val:'متاح للعمل عن بُعد والتدريب والمشاريع الحرة',
    f_name:'الاسم الكامل', f_email:'البريد الإلكتروني', f_subj:'الموضوع', f_msg:'الرسالة',
    f_name_ph:'أحمد محمد', f_email_ph:'ahmad@example.com', f_subj_ph:'تعاون في مشروع...', f_msg_ph:'أخبرني عن مشروعك...',
    f_submit:'إرسال الرسالة', f_sent:'تم الإرسال!',
    foot_built:'صُمِّم وبُنِي بـ ❤️ بواسطة', foot_copy:'© 2026 يحيى الفاروق. جميع الحقوق محفوظة.',
    footer_name:'يحيى الفاروق',
  }
};

export const LANG_COLORS: Record<string, string> = {
  JavaScript:'#f1e05a', TypeScript:'#3178c6', HTML:'#e34c26', CSS:'#563d7c', PHP:'#4F5D95',
  Blade:'#f7523f', Laravel:'#ff2d20', React:'#61dafb', Python:'#3572A5', Vue:'#41b883',
  Dart:'#00B4AB', Java:'#b07219', Kotlin:'#A97BFF', Go:'#00ADD8', 'C++':'#f34b7d',
  C:'#555555', Shell:'#89e051', SCSS:'#c6538c',
};

export const REPO_META: Record<string, { desc: string; topics: string[] }> = {
  'katmut-betmut': {
    desc: 'Interactive daily quotes & mood tracker web application built with modern JavaScript.',
    topics: ['JavaScript', 'DOM', 'Responsive UI']
  },
  'best-kaca-film': {
    desc: 'Modern responsive company profile & landing page for Best Kaca Film automotive/building tinting service.',
    topics: ['HTML5', 'CSS3', 'JavaScript', 'Landing Page']
  },
  'dompet-santri-app': {
    desc: 'Digital student wallet & allowance management app designed for Islamic boarding school (pesantren) students.',
    topics: ['HTML5', 'Tailwind CSS', 'JavaScript', 'FinTech Santri']
  },
  'sas-todo-list': {
    desc: 'Full-stack task management application built with Laravel Blade, MVC architecture, and relational database.',
    topics: ['Laravel', 'Blade', 'PHP', 'MySQL']
  },
  'crud-tugas-with-pwa-indexedb': {
    desc: 'Tugazku — Offline-first Progressive Web App (PWA) for student assignment management powered by IndexedDB.',
    topics: ['PWA', 'IndexedDB', 'Service Worker', 'JavaScript']
  },
  'calculate': {
    desc: 'Clean, modern web calculator utility deployed on Vercel with responsive dark/light interface.',
    topics: ['HTML5', 'CSS3', 'JavaScript']
  },
  'psb-app': {
    desc: 'Penerimaan Santri Baru (PSB) — New student admission & registration portal built with TypeScript.',
    topics: ['TypeScript', 'React', 'Tailwind CSS', 'PSB']
  },
  'web-kasir': {
    desc: 'Full-featured Point of Sale (POS) cashier web application built with TypeScript for fast retail checkout.',
    topics: ['TypeScript', 'React', 'POS', 'Tailwind CSS']
  },
  'hello-santri-next': {
    desc: 'Modern community & onboarding web portal for santri built and deployed on Vercel.',
    topics: ['Next.js', 'HTML5', 'CSS3', 'Vercel']
  },
  'todo-list': {
    desc: 'Cloud-synced task & productivity manager built with TypeScript and Supabase backend.',
    topics: ['TypeScript', 'Supabase', 'CRUD']
  },
  'api-application-quran': {
    desc: "RESTful Qur'an API service built with TypeScript providing surah, verse, translation, and audio endpoints.",
    topics: ['TypeScript', 'Node.js', 'REST API', "Al-Qur'an"]
  },
  'catatan_keuangan': {
    desc: 'Personal income & expense financial ledger application built with TypeScript.',
    topics: ['TypeScript', 'Finance', 'CRUD']
  },
  'pdb-santri': {
    desc: 'Pendaftaran Peserta Didik Baru (PPDB) — Student enrollment & database management system in TypeScript.',
    topics: ['TypeScript', 'PPDB', 'Web App']
  },
  'learn-api-with-expressjs': {
    desc: 'RESTful backend service built with Node.js and Express.js featuring structured routing and middleware.',
    topics: ['Node.js', 'Express.js', 'REST API']
  },
  'mahir-crud-api': {
    desc: 'RESTful CRUD API backend engineered during backend residency at PPQ IT Al Mahir.',
    topics: ['Node.js', 'Express.js', 'CRUD API']
  },
  'crud-siswa-api-nodejs': {
    desc: 'Student data management REST API built with Node.js for academic record operations.',
    topics: ['Node.js', 'Express.js', 'REST API']
  },
  'program_convertion_latin_to_arab': {
    desc: 'Interactive transliteration tool that converts Latin alphabet text into Arabic script in real time.',
    topics: ['JavaScript', 'Arabic Script', 'Transliteration']
  },
  'kalkulator-zakat-mal': {
    desc: 'Islamic wealth zakat (Zakat Maal) calculator computing nisab thresholds and 2.5% obligation accurately.',
    topics: ['JavaScript', 'HTML5', 'CSS3', 'Islamic FinTech']
  },
  'pos-coffe-shop-react': {
    desc: 'Interactive Point of Sale (POS) interface for coffee shops built with React.js, cart state, and receipt summary.',
    topics: ['React.js', 'JavaScript', 'POS', 'CSS3']
  },
  'mahir-wisata': {
    desc: 'Travel & tour package booking landing page for Mahir Travel with curated Indonesian destinations.',
    topics: ['HTML5', 'CSS3', 'JavaScript', 'Responsive']
  },
  'furniture-rumah': {
    desc: 'Modern interior & home furniture showcase website with clean catalog layout.',
    topics: ['HTML5', 'CSS3', 'Responsive Design']
  },
  'mahad-ubk': {
    desc: "Official profile & information portal design for Ma'had Umar Bin Khattab.",
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
      'Integrated Islamic Academic Information System for PPQ IT Al Mahir featuring real-time attendance, automated leave-to-attendance override, KKM adaptive grading with Arabic predicates, Tahfidz tracking, and print-ready A4 Digital Report Cards.',
    stars: 5,
    forks: 2,
    pushed_at: '2026-05-21T10:00:00Z',
    created_at: '2025-11-01T00:00:00Z',
    fork: false,
    size: 1200,
    custom_preview: '/assets/Screenshot 2025-06-25 110316.png',
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
      'Student Master Registry & Digital Buku Induk platform built with React 19, Framer Motion, and Supabase with automated Excel (.xlsx) import/export per class.',
    stars: 4,
    forks: 1,
    pushed_at: '2026-07-18T08:56:00Z',
    created_at: '2026-04-01T00:00:00Z',
    fork: false,
    size: 850,
    custom_preview: '/assets/Screenshot 2025-06-25 110316.png',
  },
];
