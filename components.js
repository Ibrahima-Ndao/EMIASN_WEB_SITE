/* ================================================
   EMIASN – components.js v3.0
   Navbar, footer, effets globaux + i18n (FR/EN/AR)
   + IntersectionObserver scroll animations
   ================================================ */

const PAGE = document.body.dataset.page || "";

// ════════════════════════════════════════════════
//  TRANSLATIONS
// ════════════════════════════════════════════════
const TRANSLATIONS = {
  fr: {
    dir: "ltr",
    nav: {
      home: "Accueil",
      about: "À Propos",
      services: "Services",
      solutions: "Solutions",
      team: "Équipe",
      projects: "Projets",
      careers: "Carrières",
      blog: "Blog",
      contact: "Contact",
    },
    footer: {
      tagline:
        "Entreprise Multinationale en Intelligence Artificielle du Sénégal. Pionniers de l'IA en Afrique de l'Ouest.",
      nav: "Navigation",
      resources: "Ressources",
      contactTitle: "Contact",
      links: {
        about: "À Propos",
        services: "Services",
        solutions: "Solutions",
        projects: "Projets",
        research: "Recherche",
        partners: "Partenaires",
        blog: "Blog",
        testimonials: "Témoignages",
        faq: "FAQ",
        careers: "Carrières",
        privacy: "Confidentialité",
      },
      address: "Villa N°7308, SICAP Mermoz 2, Dakar, Sénégal",
      status: "Tous les systèmes opérationnels",
      rights: "© 2026 EMIASN. Tous droits réservés.",
    },
    hero_badge_text: "Pionniers de l'IA en Afrique",
    hero_tagline: 'Intelligence Artificielle · Dakar, Sénégal · Global',
    hero_h1_1: "L'IA au service de",
    hero_h1_2: "l'Afrique et du Monde",
    hero_cta_primary: 'Découvrir nos Solutions',
    hero_cta_secondary: 'Nous Contacter',
    stat_projects: 'Projets réalisés',
    stat_clients: 'Grands Comptes',
    stat_experts: 'Experts IA',
    stat_countries: 'Pays couverts',
    index_services_label: '// Ce que nous faisons',
    index_services_title: 'Nos Expertises',
    index_why_label: '// Pourquoi nous choisir',
    index_why_title: "L'Excellence IA",
    index_cta_label: '// Prêt à démarrer ?',
    index_cta_title: 'Transformons votre entreprise',
    index_cta_title2: "avec l'IA ensemble",
    index_cta_p: 'Parlons de votre projet. Notre équipe vous répond en 24h.',
    index_cta_btn1: 'Démarrer un projet',
    index_cta_btn2: 'Voir nos réalisations',
    about_label: '// Notre Histoire',
    about_h1: 'Notre Histoire,',
    about_h1_2: 'Notre Mission',
    about_vision_title: 'Notre Vision',
    about_values_title: 'Nos Valeurs',
    about_timeline_label: '// Notre Parcours',
    services_label: '// Nos Services',
    services_h1: 'Expertise IA',
    services_h1_2: 'Complète',
    services_p: "De la conception à la mise en production, nous couvrons tout le spectre de l'IA.",
    serv_cv_title: 'Computer Vision',
    serv_cv_sub: 'Détection · Reconnaissance · Analyse',
    serv_cv_desc: "Analyse d'images et de vidéos en temps réel pour l'automatisation et le contrôle qualité.",
    serv_cta_title: 'Un projet en tête ?',
    serv_cta_p: 'Discutons de vos besoins et construisons ensemble la solution IA.',
    careers_label: '// Carrières',
    careers_h1: "Façonnez l'IA",
    careers_h1_2: 'de Demain',
    careers_p: 'Rejoignez une équipe passionnée qui construit les solutions IA de demain.',
    careers_why_label: '// Pourquoi EMIASN ?',
    careers_why_title2: 'où vous excellez',
    careers_benefit1_title: 'Formation Continue',
    careers_benefit1_p: 'Budget formation + certifications Google, AWS, Microsoft',
    careers_benefit2_title: 'Impact Mondial',
    careers_benefit2_p: "Projets d'envergure internationale",
    careers_benefit3_title: 'Flexibilité',
    careers_benefit3_p: 'Télétravail hybride, horaires flexibles',
    careers_benefit4_title: 'Évolution Rapide',
    careers_benefit4_p: 'Plan de carrière clair, promotions sur performance',
    careers_jobs_label: '// Postes ouverts',
    careers_jobs_title: "Rejoignez l'aventure",
    careers_apply_btn: 'Postuler maintenant',
    careers_no_match: 'Pas de poste correspondant ? Envoyez une candidature spontanée.',
    careers_spontaneous: 'Candidature spontanée',
    blog_label: '// Blog & Actualités',
    blog_h1: 'Actualités &',
    blog_h1_2: 'Insights IA',
    blog_p: "Analyses, tendances et perspectives sur l'IA en Afrique et dans le monde.",
    blog_featured: 'À la Une',
    blog_read_more: "Lire l'article",
    blog_min_read: 'min de lecture',
    blog_all_label: '// Tous les articles',
    blog_newsletter_title: 'Restez informé',
    blog_newsletter_p: 'Recevez nos analyses IA directement dans votre boîte mail.',
    blog_newsletter_btn: "S'abonner",
    projects_label: '// Nos Réalisations',
    projects_h1: 'Projets &',
    projects_h1_2: "Cas d'Usage",
    projects_p: "50+ projets livrés à travers l'Afrique et au-delà.",
    projects_status_done: 'Terminé',
    projects_status_active: 'En cours',
    projects_view_btn: 'Voir le projet',
    projects_all_label: '// Tous les projets',
    projects_cta_title: 'Votre projet sera le prochain',
    projects_cta_p: 'Parlons de votre défi et construisons la solution qui fera la différence.',
    solutions_label: '// Solutions Sectorielles',
    solutions_h1: 'Solutions IA',
    solutions_h1_2: 'Sectorielles',
    solutions_p: 'Des solutions conçues pour les défis de chaque secteur en Afrique.',
    sol_finance_tab: 'Finance & Banque',
    sol_telecom_tab: 'Télécommunications',
    sol_health_tab: 'Santé',
    sol_agri_tab: 'Agriculture',
    sol_commerce_tab: 'Commerce',
    sol_finance_feat1: 'Détection de Fraude',
    sol_finance_feat1_p: 'Modèles ML temps réel avec 99.2% de précision, réduisant les pertes de 70%.',
    sol_finance_feat2: 'Scoring de Crédit IA',
    sol_finance_feat2_p: 'Évaluation automatisée du risque crédit intégrant données alternatives.',
    sol_finance_feat3: 'Prévision de Liquidité',
    sol_finance_feat3_p: 'Anticipez vos besoins en trésorerie avec une précision de 95%.',
    faq_label: '// Questions Fréquentes',
    faq_h1: 'Toutes vos',
    faq_h1_2: 'Questions',
    faq_p: 'Retrouvez toutes les réponses à vos questions sur nos services.',
    faq_contact_cta: "Vous n'avez pas trouvé votre réponse ?",
    faq_contact_btn: 'Contactez-nous',
    partners_label: '// Partenaires',
    partners_h1: 'Nos Partenaires',
    partners_h1_2: 'Stratégiques',
    partners_p: 'Un réseau mondial de partenaires technologiques, académiques et institutionnels.',
    partners_univ_title: 'Universités Partenaires',
    partners_rd_title: 'R&D & Recherche',
    partners_cloud_title: 'Cloud & Infrastructure',
    partners_become_title: 'Devenez Partenaire',
    partners_become_p: 'Vous souhaitez rejoindre notre écosystème ? Discutons des opportunités.',
    testimonials_label: '// Témoignages',
    testimonials_h1: 'Ce que disent',
    testimonials_h1_2: 'nos clients',
    testimonials_p: "Plus de 50 entreprises nous font confiance à travers l'Afrique et au-delà.",
    testimonials_cta_title: 'Rejoignez nos clients satisfaits',
    testimonials_cta_btn: 'Démarrer un projet',
    research_label: '// Recherche & Innovation',
    research_h1: 'Innovation &',
    research_h1_2: 'Recherche',
    research_p: 'Nos équipes contribuent activement à la recherche en IA, avec un focus sur les défis africains.',
    research_area1_title: 'IA pour les Langues Africaines',
    research_area1_p: 'Modèles NLP adaptés au Wolof, Bambara, Dioula et autres langues locales.',
    research_area2_title: 'IA Frugale pour Mobiles',
    research_area2_p: 'Optimisation de modèles ML pour appareils à faible consommation en zones rurales.',
    research_area3_title: 'Prévision Climatique Sahélienne',
    research_area3_p: "Modèles spécialisés pour les conditions météo de l'Afrique de l'Ouest.",
    research_area4_title: 'Santé Connectée Africaine',
    research_area4_p: 'Diagnostic assisté par IA adapté aux infrastructures de santé locales.',
    research_pub_label: '// Publications',
    research_pub_title: 'Nos Contributions Scientifiques',
    apply_label: '// Candidature',
    apply_h1: 'Rejoignez',
    apply_h1_2: 'notre équipe',
    apply_submit: 'Envoyer ma candidature',
    privacy_label: '// Légal',
    privacy_h1: 'Politique de',
    privacy_h1_2: 'Confidentialité',
    privacy_s1_title: '1. Collecte des Données',
    privacy_s2_title: '2. Utilisation des Données',
    privacy_s2_p: 'Vos données sont utilisées exclusivement dans le cadre de nos services.',
    privacy_s3_title: '3. Sécurité',
    privacy_s3_p: "Chiffrement des données, contrôles d'accès stricts, audits réguliers et conformité RGPD.",
    privacy_s4_title: '4. Vos Droits',
    privacy_s4_p: 'Accès, rectification, suppression et portabilité de vos données sur simple demande.',
    privacy_s5_title: '5. Cookies',
    privacy_s5_p: 'Nous utilisons des cookies fonctionnels et analytiques désactivables dans votre navigateur.',
    privacy_s6_title: '6. Contact DPO',
    privacy_s6_p: 'Pour toute question sur vos données, contactez notre DPO à privacy@emiasn.sn.',
    contact_h1: 'Travaillons',
    contact_h1_2: 'Ensemble',
    contact_p: 'Parlez-nous de votre projet. Notre équipe revient vers vous en moins de 24h.',
    contact_opt_project: 'Projet IA',
    contact_opt_partner: 'Partenariat',
    contact_opt_press: 'Presse',
    contact_opt_other: 'Autre',
    offices_title: 'Nos Bureaux',

  },
  en: {
    dir: "ltr",
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      solutions: "Solutions",
      team: "Team",
      projects: "Projects",
      careers: "Careers",
      blog: "Blog",
      contact: "Contact",
    },
    footer: {
      tagline:
        "Multinational Artificial Intelligence Company of Senegal. Pioneers of AI in West Africa.",
      nav: "Navigation",
      resources: "Resources",
      contactTitle: "Contact",
      links: {
        about: "About",
        services: "Services",
        solutions: "Solutions",
        projects: "Projects",
        research: "Research",
        partners: "Partners",
        blog: "Blog",
        testimonials: "Testimonials",
        faq: "FAQ",
        careers: "Careers",
        privacy: "Privacy",
      },
      address: "Villa N°7308, SICAP Mermoz 2, Dakar, Senegal",
      status: "All systems operational",
      rights: "© 2026 EMIASN. All rights reserved.",
    },
    hero_badge_text: 'AI Pioneers in Africa',
    hero_tagline: 'Artificial Intelligence · Dakar, Senegal · Global',
    hero_h1_1: 'AI at the service of',
    hero_h1_2: 'Africa and the World',
    hero_cta_primary: 'Explore our Solutions',
    hero_cta_secondary: 'Contact Us',
    stat_projects: 'Projects completed',
    stat_clients: 'Enterprise Clients',
    stat_experts: 'AI Experts',
    stat_countries: 'Countries covered',
    index_services_label: '// What we do',
    index_services_title: 'Our Expertise',
    index_why_label: '// Why choose us',
    index_why_title: 'AI Excellence',
    index_cta_label: '// Ready to start?',
    index_cta_title: "Let's transform your business",
    index_cta_title2: 'with AI together',
    index_cta_p: "Let's talk about your project. Our team responds within 24h.",
    index_cta_btn1: 'Start a project',
    index_cta_btn2: 'View our work',
    about_label: '// Our Story',
    about_h1: 'Our Story,',
    about_h1_2: 'Our Mission',
    about_vision_title: 'Our Vision',
    about_values_title: 'Our Values',
    about_timeline_label: '// Our Journey',
    services_label: '// Our Services',
    services_h1: 'AI Expertise',
    services_h1_2: 'Complete',
    services_p: 'From design to production, we cover the full spectrum of AI.',
    serv_cv_title: 'Computer Vision',
    serv_cv_sub: 'Detection · Recognition · Analysis',
    serv_cv_desc: 'Real-time image and video analysis for automation and quality control.',
    serv_cta_title: 'A project in mind?',
    serv_cta_p: "Let's discuss your needs and build the right AI solution together.",
    careers_label: '// Careers',
    careers_h1: 'Shape the Future of AI',
    careers_h1_2: 'Together',
    careers_p: 'Join a passionate team building the AI solutions of tomorrow.',
    careers_why_label: '// Why EMIASN?',
    careers_why_title2: 'where you excel',
    careers_benefit1_title: 'Continuous Training',
    careers_benefit1_p: 'Training budget + Google, AWS, Microsoft certifications',
    careers_benefit2_title: 'Global Impact',
    careers_benefit2_p: 'Projects with international reach',
    careers_benefit3_title: 'Flexibility',
    careers_benefit3_p: 'Hybrid remote work, flexible hours',
    careers_benefit4_title: 'Fast Growth',
    careers_benefit4_p: 'Clear career plan, performance-based promotions',
    careers_jobs_label: '// Open positions',
    careers_jobs_title: 'Join the adventure',
    careers_apply_btn: 'Apply now',
    careers_no_match: 'No matching position? Send a spontaneous application.',
    careers_spontaneous: 'Spontaneous application',
    blog_label: '// Blog & News',
    blog_h1: 'News &',
    blog_h1_2: 'AI Insights',
    blog_p: 'Analysis, trends and perspectives on AI in Africa and worldwide.',
    blog_featured: 'Featured',
    blog_read_more: 'Read article',
    blog_min_read: 'min read',
    blog_all_label: '// All articles',
    blog_newsletter_title: 'Stay informed',
    blog_newsletter_p: 'Receive our AI analysis directly in your inbox.',
    blog_newsletter_btn: 'Subscribe',
    projects_label: '// Our Work',
    projects_h1: 'Projects &',
    projects_h1_2: 'Use Cases',
    projects_p: '50+ projects delivered across Africa and beyond.',
    projects_status_done: 'Completed',
    projects_status_active: 'In progress',
    projects_view_btn: 'View project',
    projects_all_label: '// All projects',
    projects_cta_title: 'Your project will be next',
    projects_cta_p: "Let's talk about your challenge and build the solution that makes a difference.",
    solutions_label: '// Industry Solutions',
    solutions_h1: 'AI Solutions',
    solutions_h1_2: 'by Industry',
    solutions_p: 'Solutions designed for the challenges of each sector in Africa.',
    sol_finance_tab: 'Finance & Banking',
    sol_telecom_tab: 'Telecommunications',
    sol_health_tab: 'Health',
    sol_agri_tab: 'Agriculture',
    sol_commerce_tab: 'Commerce',
    sol_finance_feat1: 'Fraud Detection',
    sol_finance_feat1_p: 'Real-time ML models with 99.2% accuracy, reducing losses by 70%.',
    sol_finance_feat2: 'AI Credit Scoring',
    sol_finance_feat2_p: 'Automated credit risk assessment integrating alternative data.',
    sol_finance_feat3: 'Liquidity Forecasting',
    sol_finance_feat3_p: 'Anticipate your cash flow needs with 95% accuracy.',
    faq_label: '// Frequently Asked Questions',
    faq_h1: 'All your',
    faq_h1_2: 'Questions',
    faq_p: 'Find all the answers to your questions about our services.',
    faq_contact_cta: "Didn't find your answer?",
    faq_contact_btn: 'Contact us',
    partners_label: '// Partners',
    partners_h1: 'Our Partners',
    partners_h1_2: 'Strategic',
    partners_p: 'A global network of technological, academic and institutional partners.',
    partners_univ_title: 'Partner Universities',
    partners_rd_title: 'R&D & Research',
    partners_cloud_title: 'Cloud & Infrastructure',
    partners_become_title: 'Become a Partner',
    partners_become_p: "Want to join our ecosystem? Let's discuss collaboration opportunities.",
    testimonials_label: '// Testimonials',
    testimonials_h1: 'What our',
    testimonials_h1_2: 'clients say',
    testimonials_p: 'More than 50 companies trust us across Africa and beyond.',
    testimonials_cta_title: 'Join our satisfied clients',
    testimonials_cta_btn: 'Start a project',
    research_label: '// Research & Innovation',
    research_h1: 'Innovation &',
    research_h1_2: 'Research',
    research_p: 'Our teams actively contribute to AI research, focusing on African challenges.',
    research_area1_title: 'AI for African Languages',
    research_area1_p: 'NLP models adapted to Wolof, Bambara, Dioula and other local languages.',
    research_area2_title: 'Frugal AI for Mobile',
    research_area2_p: 'ML model optimization for low-power devices in rural areas.',
    research_area3_title: 'Sahelian Climate Forecasting',
    research_area3_p: 'Specialized models for West African weather conditions.',
    research_area4_title: 'African Connected Health',
    research_area4_p: 'AI-assisted diagnostics adapted to local health infrastructure.',
    research_pub_label: '// Publications',
    research_pub_title: 'Our Scientific Contributions',
    apply_label: '// Application',
    apply_h1: 'Join',
    apply_h1_2: 'our team',
    apply_submit: 'Submit my application',
    privacy_label: '// Legal',
    privacy_h1: 'Privacy',
    privacy_h1_2: 'Policy',
    privacy_s1_title: '1. Data Collection',
    privacy_s2_title: '2. Data Use',
    privacy_s2_p: 'Your data is used exclusively within the framework of our services.',
    privacy_s3_title: '3. Security',
    privacy_s3_p: 'Data encryption, strict access controls, regular audits and GDPR compliance.',
    privacy_s4_title: '4. Your Rights',
    privacy_s4_p: 'Access, rectification, deletion and portability of your data on request.',
    privacy_s5_title: '5. Cookies',
    privacy_s5_p: 'We use functional and analytical cookies. You can disable them in your browser settings.',
    privacy_s6_title: '6. DPO Contact',
    privacy_s6_p: 'For any questions about your personal data, contact our DPO at privacy@emiasn.sn.',
    contact_h1: "Let's work",
    contact_h1_2: 'Together',
    contact_p: 'Tell us about your project. Our team gets back to you in less than 24h.',
    contact_opt_project: 'AI Project',
    contact_opt_partner: 'Partnership',
    contact_opt_press: 'Press',
    contact_opt_other: 'Other',
    offices_title: 'Our Offices',

  },
  ar: {
    dir: "rtl",
    nav: {
      home: "الرئيسية",
      about: "عن الشركة",
      services: "الخدمات",
      solutions: "الحلول",
      team: "الفريق",
      projects: "المشاريع",
      careers: "الوظائف",
      blog: "المدونة",
      contact: "التواصل",
    hero_badge_text: 'رواد الذكاء الاصطناعي في أفريقيا',
    hero_tagline: 'الذكاء الاصطناعي · داكار، السنغال · عالمي',
    hero_h1_1: 'الذكاء الاصطناعي في خدمة',
    hero_h1_2: 'أفريقيا والعالم',
    hero_cta_primary: 'اكتشف حلولنا',
    hero_cta_secondary: 'تواصل معنا',
    stat_projects: 'مشاريع منجزة',
    stat_clients: 'عملاء كبار',
    stat_experts: 'خبراء الذكاء الاصطناعي',
    stat_countries: 'دول مغطاة',
    index_services_label: '// ما نقوم به',
    index_services_title: 'خبراتنا',
    index_why_label: '// لماذا تختارنا',
    index_why_title: 'التميز في الذكاء الاصطناعي',
    index_cta_label: '// هل أنت مستعد للبدء؟',
    index_cta_title: 'دعنا نحول عملك',
    index_cta_title2: 'بالذكاء الاصطناعي معاً',
    index_cta_p: 'دعنا نتحدث عن مشروعك. يستجيب فريقنا خلال 24 ساعة.',
    index_cta_btn1: 'ابدأ مشروعاً',
    index_cta_btn2: 'عرض أعمالنا',
    about_label: '// قصتنا',
    about_h1: 'قصتنا،',
    about_h1_2: 'مهمتنا',
    about_vision_title: 'رؤيتنا',
    about_values_title: 'قيمنا',
    about_timeline_label: '// مسيرتنا',
    services_label: '// خدماتنا',
    services_h1: 'الخبرة في الذكاء الاصطناعي',
    services_h1_2: 'الشاملة',
    services_p: 'من التصميم إلى الإنتاج، نغطي الطيف الكامل للذكاء الاصطناعي.',
    serv_cv_title: 'رؤية الحاسوب',
    serv_cv_sub: 'الكشف · التعرف · التحليل',
    serv_cv_desc: 'تحليل الصور والفيديو في الوقت الفعلي للأتمتة ومراقبة الجودة.',
    serv_cta_title: 'هل لديك مشروع في ذهنك؟',
    serv_cta_p: 'دعنا نناقش احتياجاتك ونبني معاً حل الذكاء الاصطناعي المناسب.',
    careers_label: '// الوظائف',
    careers_h1: 'شكّل مستقبل الذكاء الاصطناعي',
    careers_h1_2: 'معاً',
    careers_p: 'انضم إلى فريق متحمس يبني حلول الذكاء الاصطناعي.',
    careers_why_label: '// لماذا EMIASN؟',
    careers_why_title2: 'تتألق فيها',
    careers_benefit1_title: 'التدريب المستمر',
    careers_benefit1_p: 'ميزانية التدريب + شهادات Google وAWS وMicrosoft',
    careers_benefit2_title: 'تأثير عالمي',
    careers_benefit2_p: 'مشاريع ذات نطاق دولي',
    careers_benefit3_title: 'المرونة',
    careers_benefit3_p: 'العمل عن بُعد الهجين وساعات مرنة',
    careers_benefit4_title: 'نمو سريع',
    careers_benefit4_p: 'خطة مهنية واضحة وترقيات على أساس الأداء',
    careers_jobs_label: '// الوظائف المتاحة',
    careers_jobs_title: 'انضم إلى المغامرة',
    careers_apply_btn: 'قدّم الآن',
    careers_no_match: 'لا يوجد منصب مناسب؟ أرسل طلباً تلقائياً.',
    careers_spontaneous: 'طلب تلقائي',
    blog_label: '// المدونة والأخبار',
    blog_h1: 'الأخبار و',
    blog_h1_2: 'رؤى الذكاء الاصطناعي',
    blog_p: 'تحليلات واتجاهات ووجهات نظر حول الذكاء الاصطناعي.',
    blog_featured: 'مميز',
    blog_read_more: 'اقرأ المقال',
    blog_min_read: 'دقيقة قراءة',
    blog_all_label: '// جميع المقالات',
    blog_newsletter_title: 'ابقَ على اطلاع',
    blog_newsletter_p: 'احصل على تحليلات الذكاء الاصطناعي مباشرة في صندوق بريدك.',
    blog_newsletter_btn: 'اشترك',
    projects_label: '// أعمالنا',
    projects_h1: 'المشاريع و',
    projects_h1_2: 'حالات الاستخدام',
    projects_p: 'أكثر من 50 مشروعاً تم تسليمه عبر أفريقيا.',
    projects_status_done: 'مكتمل',
    projects_status_active: 'جارٍ',
    projects_view_btn: 'عرض المشروع',
    projects_all_label: '// جميع المشاريع',
    projects_cta_title: 'مشروعك سيكون التالي',
    projects_cta_p: 'دعنا نتحدث عن تحديك ونبني الحل الذي سيحدث الفارق.',
    solutions_label: '// الحلول القطاعية',
    solutions_h1: 'حلول الذكاء الاصطناعي',
    solutions_h1_2: 'القطاعية',
    solutions_p: 'حلول مصممة لتحديات كل قطاع في أفريقيا.',
    sol_finance_tab: 'المالية والمصارف',
    sol_telecom_tab: 'الاتصالات',
    sol_health_tab: 'الصحة',
    sol_agri_tab: 'الزراعة',
    sol_commerce_tab: 'التجارة',
    sol_finance_feat1: 'كشف الاحتيال',
    sol_finance_feat1_p: 'نماذج التعلم الآلي في الوقت الفعلي بدقة 99.2٪.',
    sol_finance_feat2: 'تسجيل الائتمان بالذكاء الاصطناعي',
    sol_finance_feat2_p: 'تقييم مخاطر الائتمان الآلي مع دمج البيانات البديلة.',
    sol_finance_feat3: 'توقعات السيولة',
    sol_finance_feat3_p: 'توقع احتياجاتك من التدفق النقدي بدقة 95٪.',
    faq_label: '// الأسئلة الشائعة',
    faq_h1: 'جميع',
    faq_h1_2: 'أسئلتك',
    faq_p: 'اعثر على جميع الإجابات حول خدماتنا.',
    faq_contact_cta: 'لم تجد إجابتك؟',
    faq_contact_btn: 'تواصل معنا',
    partners_label: '// الشركاء',
    partners_h1: 'شركاؤنا',
    partners_h1_2: 'الاستراتيجيون',
    partners_p: 'شبكة عالمية من الشركاء التكنولوجيين والأكاديميين والمؤسسيين.',
    partners_univ_title: 'الجامعات الشريكة',
    partners_rd_title: 'البحث والتطوير',
    partners_cloud_title: 'السحابة والبنية التحتية',
    partners_become_title: 'كن شريكاً',
    partners_become_p: 'هل تريد الانضمام إلى نظامنا البيئي؟ دعنا نناقش فرص التعاون.',
    testimonials_label: '// الشهادات',
    testimonials_h1: 'ما يقوله',
    testimonials_h1_2: 'عملاؤنا',
    testimonials_p: 'أكثر من 50 شركة تثق بنا عبر أفريقيا وما بعدها.',
    testimonials_cta_title: 'انضم إلى عملائنا الراضين',
    testimonials_cta_btn: 'ابدأ مشروعاً',
    research_label: '// البحث والابتكار',
    research_h1: 'الابتكار و',
    research_h1_2: 'البحث',
    research_p: 'يساهم فريقنا بنشاط في أبحاث الذكاء الاصطناعي مع التركيز على التحديات الأفريقية.',
    research_area1_title: 'الذكاء الاصطناعي للغات الأفريقية',
    research_area1_p: 'نماذج NLP مكيفة للغات الولوف والبامبارا والديولا.',
    research_area2_title: 'الذكاء الاصطناعي الاقتصادي للهاتف',
    research_area2_p: 'تحسين نماذج التعلم الآلي للأجهزة منخفضة الاستهلاك.',
    research_area3_title: 'التنبؤ المناخي الساحلي',
    research_area3_p: 'نماذج متخصصة لأحوال الطقس في غرب أفريقيا.',
    research_area4_title: 'الصحة المتصلة الأفريقية',
    research_area4_p: 'تشخيص بمساعدة الذكاء الاصطناعي مكيف مع البنية الصحية المحلية.',
    research_pub_label: '// المنشورات',
    research_pub_title: 'مساهماتنا العلمية',
    apply_label: '// التقديم',
    apply_h1: 'انضم إلى',
    apply_h1_2: 'فريقنا',
    apply_submit: 'أرسل طلبي',
    privacy_label: '// قانوني',
    privacy_h1: 'سياسة',
    privacy_h1_2: 'الخصوصية',
    privacy_s1_title: '1. جمع البيانات',
    privacy_s2_title: '2. استخدام البيانات',
    privacy_s2_p: 'تُستخدم بياناتك حصراً في إطار خدماتنا.',
    privacy_s3_title: '3. الأمان',
    privacy_s3_p: 'تشفير البيانات وضوابط الوصول الصارمة والامتثال للـ GDPR.',
    privacy_s4_title: '4. حقوقك',
    privacy_s4_p: 'الوصول والتصحيح والحذف وإمكانية نقل بياناتك عند الطلب.',
    privacy_s5_title: '5. ملفات تعريف الارتباط',
    privacy_s5_p: 'نستخدم ملفات تعريف ارتباط وظيفية وتحليلية يمكن تعطيلها في إعدادات المتصفح.',
    privacy_s6_title: '6. جهة الاتصال DPO',
    privacy_s6_p: 'لأي أسئلة تتعلق ببياناتك، تواصل مع مسؤول حماية بياناتنا على privacy@emiasn.sn.',
    contact_h1: 'لنعمل',
    contact_h1_2: 'معاً',
    contact_p: 'أخبرنا عن مشروعك. يعود إليك فريقنا في أقل من 24 ساعة.',
    contact_opt_project: 'مشروع ذكاء اصطناعي',
    contact_opt_partner: 'شراكة',
    contact_opt_press: 'صحافة',
    contact_opt_other: 'أخرى',
    offices_title: 'مكاتبنا',
    },
    footer: {
      tagline:
        "شركة متعددة الجنسيات للذكاء الاصطناعي في السنغال. رواد الذكاء الاصطناعي في غرب أفريقيا.",
      nav: "التنقل",
      resources: "الموارد",
      contactTitle: "التواصل",
      links: {
        about: "عن الشركة",
        services: "الخدمات",
        solutions: "الحلول",
        projects: "المشاريع",
        research: "البحث",
        partners: "الشركاء",
        blog: "المدونة",
        testimonials: "الشهادات",
        faq: "الأسئلة الشائعة",
        careers: "الوظائف",
        privacy: "الخصوصية",
      },
      address: "فيلا رقم 7308، SICAP ميرموز 2، داكار، السنغال",
      status: "جميع الأنظمة تعمل",
      rights: "© 2026 EMIASN. جميع الحقوق محفوظة.",
    },

  },
};

// Page-level text keyed by lang
const PT = {
  fr: {
    // CONTACT page
    contact_label: "// Contact",
    contact_h1_1: "Travaillons",
    contact_h1_2: "Ensemble",
    contact_p:
      "Une question, un projet, un partenariat ? Notre équipe est disponible.",
    fname: "Prénom",
    lname: "Nom",
    email_pro: "Email professionnel",
    company: "Entreprise",
    subject: "Sujet",
    message_label: "Message",
    send_btn: "Envoyer le Message",
    subj_project: "Projet IA",
    subj_partner: "Partenariat",
    subj_recruit: "Recrutement",
    subj_press: "Presse",
    subj_other: "Autre",
    hq_title: "Siège Social",
    hq_addr: "Villa N°7308, SICAP Mermoz 2<br/>Dakar, Sénégal",
    email_title: "Email",
    phone_title: "Téléphone",
    hours_title: "Horaires",
    hours_weekday: "Lun – Ven : 08h00 – 18h00",
    hours_sat: "Sam : 09h00 – 13h00",
    offices_title: "Nos Bureaux",
    toast_contact: "✅ Message envoyé ! Nous vous répondrons sous 24h.",
    sending: "Envoi en cours...",
    form_error_required: "Veuillez remplir l'email et le message.",
    form_error_email: "Adresse email invalide.",
    form_error_send: "Échec de l'envoi. Écrivez à ndaoibrahima037@gmail.com",
    // ABOUT
    about_label: "// À Propos de Nous",
    about_h1_1: "Notre Histoire,",
    about_h1_2: "Notre Mission",
    about_p:
      "Fondée à Dakar, EMIASN est née d'une vision claire : faire de l'Afrique de l'Ouest un acteur majeur de l'intelligence artificielle mondiale.",
    mission_title: "Notre Mission",
    vision_title: "Notre Vision",
    values_title: "Nos Valeurs",
    mission_desc:
      "Développer et déployer des solutions IA innovantes qui transforment les opérations des grandes entreprises au Sénégal et à l'international.",
    vision_desc:
      "Devenir le leader panafricain de l'IA d'ici 2030, en exportant notre expertise vers les marchés européens et asiatiques.",
    values_desc:
      "Excellence technique, éthique de l'IA, innovation continue, collaboration inclusive et engagement envers nos clients.",
    journey_title: "Notre Parcours",
    culture_title: "Notre Culture d'Innovation",
    culture_p1:
      "Chez EMIASN, la diversité est notre plus grande force. Nos équipes multiculturelles apportent des perspectives uniques.",
    culture_p2:
      "Nous investissons continuellement dans la formation, organisant des hackathons, formations certifiantes et partenariats avec les meilleures universités.",
    stat_satisfaction: "Satisfaction client",
    stat_retention: "Rétention des talents",
    stat_delivery: "Projets livrés dans les délais",
    // CAREERS
    careers_label: "// Carrières",
    careers_h1_1: "Façonnez",
    careers_h1_2: "l'IA de Demain",
    careers_p:
      "Rejoignez une équipe de passionnés qui construisent l'avenir de l'IA en Afrique.",
    benefit_training: "Formation Continue",
    benefit_training_desc:
      "Budget formation + certifications Google, AWS, Microsoft",
    benefit_impact: "Impact Mondial",
    benefit_impact_desc: "Projets d'envergure internationale",
    benefit_flex: "Flexibilité",
    benefit_flex_desc: "Télétravail hybride, horaires flexibles",
    benefit_growth: "Évolution Rapide",
    benefit_growth_desc: "Plan de carrière clair, promotions sur performance",
    open_positions: "Postes Ouverts",
    // APPLY
    apply_back: "Retour aux offres",
    apply_label: "// Candidature",
    apply_h1: "Postuler chez EMIASN",
    apply_p: "Notre équipe RH vous contactera sous 72h.",
    apply_fname: "Prénom *",
    apply_lname: "Nom *",
    apply_email: "Email *",
    apply_phone: "Téléphone",
    apply_position: "Poste souhaité *",
    apply_level: "Niveau d'études *",
    apply_letter: "Lettre de motivation *",
    apply_skills: "Compétences techniques *",
    apply_btn: "Soumettre ma Candidature",
    apply_toast:
      "🎉 Candidature soumise ! Notre équipe RH vous contactera sous 72h.",
    select_position: "Sélectionner un poste",
    select_level: "Sélectionner",
    // BLOG
    blog_label: "// Blog & Ressources",
    blog_h1_1: "Actualités &",
    blog_h1_2: "Insights IA",
    blog_p:
      "Restez à la pointe de l'intelligence artificielle avec nos articles, analyses et tutoriels.",
    newsletter_title: "Newsletter IA",
    newsletter_p: "Recevez nos derniers articles chaque semaine.",
    newsletter_btn: "S'abonner",
    newsletter_toast: "✅ Abonnement confirmé !",
    newsletter_placeholder: "votre@email.com",
    // FAQ
    faq_label: "// FAQ",
    faq_h1: "Questions Fréquentes",
    faq_p: "Tout ce que vous devez savoir sur EMIASN.",
    faq_q1: "Quels types d'entreprises travaillent avec EMIASN ?",
    faq_a1:
      "Grands Comptes : banques, télécoms, santé, agriculture, commerce. Clients au Sénégal, Côte d'Ivoire, Mali et France.",
    faq_q2: "Combien de temps dure un projet IA typique ?",
    faq_a2:
      "POC : 4-8 semaines. Déploiement complet : 4 à 12 mois. Sprints agiles avec livrables intermédiaires réguliers.",
    faq_q3: "Proposez-vous des formations en IA ?",
    faq_a3:
      "Oui ! Formations Python, ML, DL et Data Science adaptées aux niveaux débutant à avancé. Dispensées dans vos locaux ou à Dakar.",
    faq_q4: "Mes données sont-elles protégées ?",
    faq_a4:
      "Absolument. Conformité RGPD et loi sénégalaise sur les données personnelles. NDA sur chaque projet. Données jamais partagées.",
    faq_q5: "Comment postuler pour un stage ?",
    faq_a5:
      "(1) Dossier en ligne, (2) Présélection CV/LM, (3) Test technique Python/ML, (4) Entretien technique, (5) Entretien RH. Processus de 2-3 semaines.",
    faq_q6: "Travaillez-vous à l'international ?",
    faq_a6:
      "Oui, bureaux à Dakar, Abidjan, Bamako, Conakry et Paris. Nos équipes opèrent en remote pour des clients en Europe, Asie et Amérique du Nord.",
    // TEAM
    team_label: "// Notre Équipe",
    team_h1_1: "Les Esprits",
    team_h1_2: "Derrière EMIASN",
    team_p:
      "30+ experts passionnés, formés dans les meilleures institutions mondiales.",
    team_directors: "Direction Générale",
    team_experts: "Nos Experts IA",
    team_cta_h2: "Rejoignez notre équipe",
    team_cta_p: "Nous recherchons des talents passionnés par l'IA.",
    team_cta_btn: "Voir les Opportunités",
    // PROJECTS
    proj_label: "// Nos Réalisations",
    proj_h1_1: "Projets &",
    proj_h1_2: "Cas d'Usage",
    proj_p:
      "Découvrez comment nos solutions IA ont transformé les opérations de nos clients.",
    proj_done: "Terminé",
    proj_ongoing: "En cours",
    // SERVICES
    serv_label: "// Nos Services",
    serv_h1_1: "Expertise IA",
    serv_h1_2: "Complète",
    serv_p:
      "Du data engineering à la mise en production, nous couvrons l'intégralité du cycle de vie de vos projets IA.",
    serv_process: "Notre Processus",
    serv_s1: "Découverte",
    serv_s1_desc: "Audit des données et besoins",
    serv_s2: "Conception",
    serv_s2_desc: "Architecture du modèle",
    serv_s3: "Développement",
    serv_s3_desc: "Entraînement et optimisation",
    // SOLUTIONS
    sol_label: "// Nos Solutions",
    sol_h1_1: "Solutions IA",
    sol_h1_2: "Sectorielles",
    sol_p:
      "Solutions clé-en-main conçues pour répondre aux défis spécifiques de chaque secteur.",
    sol_tab_fin: "Finance & Banque",
    sol_tab_tel: "Télécommunications",
    sol_tab_san: "Santé",
    sol_tab_agri: "Agriculture",
    sol_tab_com: "Commerce",
    // RESEARCH
    res_label: "// R&D",
    res_h1_1: "Innovation &",
    res_h1_2: "Recherche",
    res_p:
      "Notre laboratoire repousse les frontières de l'IA appliquée au contexte africain.",
    res_axes: "Axes de Recherche",
    res_pubs: "Publications Récentes",
    // PARTNERS
    part_label: "// Partenaires",
    part_h1_1: "Nos Partenaires",
    part_h1_2: "Stratégiques",
    part_p: "Un réseau d'alliances solides pour les meilleures solutions IA.",
    // PRIVACY
    priv_label: "// Politique de Confidentialité",
    priv_h1_1: "Politique de",
    priv_h1_2: "Confidentialité",
    // TESTIMONIALS
    test_label: "// Témoignages",
    test_h1_1: "Ce que disent",
    test_h1_2: "nos clients",
    // INDEX
    hero_badge: "Intelligence Artificielle · Dakar, Sénégal · Global",
    hero_h1_1: "L'IA au service",
    hero_h1_2: "de l'Afrique",
    hero_h1_3: "et du Monde",
    hero_p:
      "EMIASN développe des solutions d'intelligence artificielle de pointe pour les grandes entreprises sénégalaises et internationales.",
    hero_cta1: "Découvrir nos Solutions",
    hero_cta2: "Nous Contacter",
    stats_1: "Projets réalisés",
    stats_2: "Grands Comptes",
    stats_3: "Experts IA",
    stats_4: "Pays couverts",
    services_label: "// Nos Expertises",
    services_h2_1: "Ce que nous",
    services_h2_2: "faisons mieux",
    services_link: "Voir tous les services",
    ml_title: "Machine Learning",
    ml_desc:
      "Algorithmes prédictifs et analytiques adaptés aux problématiques métiers de vos grands comptes.",
    dl_title: "Deep Learning",
    dl_desc:
      "Réseaux de neurones profonds avec TensorFlow et Keras pour la vision, NLP et analyse avancée.",
    ds_title: "Data Science",
    ds_desc:
      "Analyse de données massives, visualisation et insights stratégiques avec NumPy, Pandas et Matplotlib.",
    why_label: "// Pourquoi EMIASN",
    why_h2_1: "Pionniers de l'IA",
    why_h2_2: "en Afrique de l'Ouest",
    why_p:
      "Expertise technique internationale combinée à une compréhension profonde des réalités africaines.",
    why_1_title: "Expertise Multilingue",
    why_1_desc: "Français, Anglais et Wolof.",
    why_2_title: "Solutions Sur Mesure",
    why_2_desc: "Chaque algorithme optimisé pour vos clients.",
    why_3_title: "Présence Internationale",
    why_3_desc: "Réseau de grands comptes au Sénégal et à l'international.",
    clients_label: "// Ils nous font confiance",
    cta_h2: "Prêt à transformer vos données ?",
    cta_p:
      "Rejoignez les leaders qui font confiance à EMIASN pour leurs projets d'IA.",
    cta_btn: "Démarrer un Projet",
    scroll_down: "Défiler",
    learn_more: "En savoir plus",
    read_more: "Lire la suite",
    apply_now: "Postuler",
    see_all_services: "Voir tous les services",
    trust_label: "// Ils nous font confiance",
    // Timeline about.html
    timeline_2019_title: "Fondation d'EMIASN",
    timeline_2019_desc: "Création à Dakar par une équipe de data scientists et ingénieurs IA formés en Europe et aux États-Unis.",
    timeline_2020_title: "Premiers Grands Comptes",
    timeline_2020_desc: "Signature des premiers contrats dans les secteurs bancaire et télécoms au Sénégal.",
    timeline_2021_title: "Expansion Régionale",
    timeline_2021_desc: "Ouverture de bureaux à Abidjan, Bamako et Conakry. Extension de l'équipe à 20 experts IA.",
    timeline_2023_title: "Reconnaissance Internationale",
    timeline_2023_desc: "Prix de l'Innovation Numérique Africaine. Partenariats avec universités européennes pour la R&D.",
    timeline_2024_date: "2024 – Aujourd'hui",
    timeline_2024_title: "Leader IA Africain",
    timeline_2024_desc: "30+ experts, 50+ projets livrés, présence dans 5 pays. En route vers l'expansion européenne.",
    // TEAM page
    team_stat_experts: "Experts IA",
    team_stat_nationalities: "Nationalités",
    team_stat_experience: "Ans d'exp. cumulés",
    team_stat_countries: "Pays",
    team_section_leadership: "// Direction & Leadership",
    team_section_experts: "// Experts & Ingénieurs",
    team_join_link: "Rejoindre l'équipe",
    team_zakaria_desc: "Fondateur de EMIASN, Professeur et Enseignant. Ayant travaillé dans les secteurs de la Banque, l'industrie et tant d'autres domaines, Zakaria unit expertise pluridisciplinaire et vision stratégique pour bâtir l'IA de demain en Afrique.",
    team_zakaria_tag1: "Fondateur",
    team_zakaria_tag2: "Enseignant",
    team_zakaria_tag3: "Banque & Industrie",
    team_ibrahima_role: "Tech Lead · Toutes agences EMIASN World",
    team_ibrahima_desc: "Directeur Technique EMIASN à l'échelle mondiale, Ibrahima est le Tech Lead de toutes les agences EMIASN dans le monde. Il pilote l'architecture des solutions IA, coordonne les équipes d'ingénierie globales et garantit l'excellence technique de chaque livrable.",
    team_ibrahima_tag1: "Dir. Technique WW",
    team_ibrahima_tag2: "Machine Learning",
    team_ibrahima_tag3: "Architecture IA",
    team_ibrahima_tag4: "Global Teams",
    team_mouhamadou_role: "Support client · World Wide · Enseignant",
    team_mouhamadou_desc: "Tech Lead Support Client World Wide, Mouhamadou Moustapha gère l'ensemble du support technique international d'EMIASN. Enseignant dans les Écoles d'ingénieur et dans les entreprises en Data Science et Intelligence Artificielle, il allie expertise terrain et transmission du savoir.",
    team_mouhamadou_tag1: "Support WW",
    team_mouhamadou_tag2: "Enseignant IA",
    team_mouhamadou_tag3: "Data Science",
    team_mouhamadou_tag4: "Écoles ingénieur",
    team_sekou_title: "Tech Lead Security EMIASN",
    team_sekou_subtitle: "Ingénieur Data Science & IA",
    team_sekou_desc: "Expert en cybersécurité et ingénieur Data Science & IA, Sékou allie maîtrise des infrastructures sécurisées et expertise algorithmique. Il conçoit des systèmes IA robustes tout en garantissant la protection des données et des modèles déployés en production chez les clients d'EMIASN.",
    team_sekou_tag1: "Audit Sécurité",
    team_sekou_tag2: "Pentest",
    team_sekou_tag3: "Zero Trust",
    team_sekou_tag4: "Data Science",
    team_sekou_tag5: "ML / DL",
    team_sekou_tag6: "IA Sécurisée",
    team_tamsir_title: "Directeur EMIASN France & EMEA",
    team_tamsir_region: "Europe · Middle East · Africa",
    team_tamsir_desc: "Porteur de vision et donneur d'ordres pour toute la zone EMEA depuis Paris. Adjoint au consul de Paris, il coordonne les opérations EMIASN à travers l'Europe, le Moyen-Orient et l'Afrique. Passionné de Data Science, il s'engage personnellement dans les challenges EMIASN.",
    team_tamsir_tag1: "EMEA Strategy",
    team_tamsir_tag2: "Paris · Europe",
    team_tamsir_tag3: "Data Science",
    team_mohamed_title: "MSI EMIASN · Tous Projets · Sécurité Infra WW",
    team_mohamed_contact: "En relation avec tous les clients",
    team_mohamed_desc: "Responsable du Management des Systèmes d'Information d'EMIASN, de tous les projets EMIASN et de la sécurité de toutes les infrastructures World Wide. Interface directe avec l'ensemble des clients EMIASN.",
    team_mohamed_tag1: "MSI EMIASN",
    team_mohamed_tag2: "Sécurité Infra WW",
    team_mohamed_tag3: "All Projects",
    team_fatoumata_title: "Management DataScience & Quality Assurance",
    team_fatoumata_tag1: "DataScience",
    team_fatoumata_tag2: "QA All Projects",
    team_fatoumata_tag3: "ML & Python",
    team_salif_title: "Développeur Full Stack & Ingénieur Data Science",
    team_salif_tag1: "Full Stack",
    team_salif_tag2: "Data Science",
    team_salif_tag3: "React / Node",
    team_idrissa_title: "Directeur des Grandes Comptes & Management Clientèle",
    team_idrissa_desc: "Directeur et Manager des Grands Comptes Clients chez EMIASN, Idrissa Gassama est un cadre de haute expérience, ancien cadre de Sonatel. Il prend en charge le Marketing et les Business Units d'EMIASN, en pilotant la stratégie commerciale et le développement des relations avec les grandes entreprises clientes.",
    team_idrissa_tag1: "Grands Comptes",
    team_idrissa_tag2: "Management Client",
    team_idrissa_tag3: "Business Dev",
    team_idrissa_tag4: "CRM",
    team_join_you: "Et vous ?",
    team_join_desc: "Rejoignez notre équipe de talents IA",
    team_join_btn: "Voir les offres",
    team_culture_label: "// Notre Culture",
    team_culture_h2: "Un environnement<br/>qui vous inspire",
    team_culture_intro: "Chez EMIASN, nous croyons que les grandes idées naissent dans un cadre qui valorise la diversité, l'autonomie et l'apprentissage continu.",
    team_culture_training: "Formation continue",
    team_culture_training_desc: "Certifications, hackathons, conférences",
    team_culture_impact: "Impact réel en Afrique",
    team_culture_impact_desc: "Projets à impact social et économique",
    team_culture_diversity: "Équipe multiculturelle",
    team_culture_diversity_desc: "8 nationalités, inclusion totale",
    team_culture_cta: "Rejoindre l'aventure",
    team_metric_satisfaction: "Satisfaction équipe",
    team_metric_retention: "Rétention des talents",
    team_metric_delivery: "Projets livrés dans les délais",
    team_quote: "«Notre mission est de prouver que l'Afrique peut mener la révolution IA mondiale, pas seulement y participer.»",
    team_cta_badge: "Nous recrutons",
    team_cta_h2: "Votre talent a sa place<br/>chez EMIASN",
    team_cta_p: "Rejoignez les pionniers de l'IA en Afrique de l'Ouest. Postes ouverts en Data Science, ML Engineering, NLP et plus.",
    team_cta_btn1: "Voir toutes les offres",
    team_cta_btn2: "Candidature spontanée",
    // SERVICES page
    serv_ml_title: "Machine Learning",
    serv_ml_subtitle: "Prédiction · Classification · Clustering",
    serv_ml_desc: "Algorithmes supervisés et non-supervisés avec Scikit-Learn. Régression, SVM, Random Forest, Gradient Boosting…",
    serv_dl_title: "Deep Learning",
    serv_dl_subtitle: "CNN · RNN · Transformers",
    serv_dl_desc: "Architectures de réseaux profonds avec TensorFlow et Keras : reconnaissance d'images, génération de texte, séries temporelles.",
    serv_ds_title: "Data Science & Analytics",
    serv_ds_subtitle: "EDA · Visualisation · Insights",
    serv_ds_desc: "Exploration avec NumPy, Pandas. Visualisation interactive avec Matplotlib et Seaborn pour des rapports décisionnels.",
    serv_cv_title: "Computer Vision",
    serv_cv_subtitle: "Détection · Reconnaissance · Segmentation",
    serv_cv_desc: "Solutions de vision par ordinateur pour la sécurité, contrôle qualité et surveillance. Détection d'objets en temps réel.",
    serv_nlp_title: "NLP & Traitement du Langage",
    serv_nlp_subtitle: "Analyse · Génération · Chatbots",
    serv_nlp_desc: "Analyse de sentiment, extraction d'entités, chatbots intelligents et traduction en français, anglais et wolof.",
    serv_mlops_title: "MLOps & Déploiement",
    serv_mlops_subtitle: "Pipeline · Production · Monitoring",
    serv_mlops_desc: "Mise en production CI/CD, monitoring des performances, gestion du drift et scalabilité cloud ou on-premise.",
    hero_badge_text: "Pionniers de l'IA en Afrique",
    hero_tagline: 'Intelligence Artificielle · Dakar, Sénégal · Global',
    hero_cta_primary: 'Découvrir nos Solutions',
    hero_cta_secondary: 'Nous Contacter',
    stat_projects: 'Projets réalisés',
    stat_clients: 'Grands Comptes',
    stat_experts: 'Experts IA',
    stat_countries: 'Pays couverts',
    index_services_label: '// Ce que nous faisons',
    index_services_title: 'Nos Expertises',
    index_why_label: '// Pourquoi nous choisir',
    index_why_title: "L'Excellence IA",
    index_cta_label: '// Prêt à démarrer ?',
    index_cta_title: 'Transformons votre entreprise',
    index_cta_title2: "avec l'IA ensemble",
    index_cta_p: 'Parlons de votre projet. Notre équipe vous répond en 24h.',
    index_cta_btn1: 'Démarrer un projet',
    index_cta_btn2: 'Voir nos réalisations',
    about_h1: 'Notre Histoire,',
    about_vision_title: 'Notre Vision',
    about_values_title: 'Nos Valeurs',
    about_timeline_label: '// Notre Parcours',
    services_h1: 'Expertise IA',
    services_h1_2: 'Complète',
    services_p: "De la conception à la mise en production, nous couvrons tout le spectre de l'IA.",
    serv_cv_sub: 'Détection · Reconnaissance · Analyse',
    serv_cta_title: 'Un projet en tête ?',
    serv_cta_p: 'Discutons de vos besoins et construisons ensemble la solution IA.',
    careers_h1: "Façonnez l'IA",
    careers_why_label: '// Pourquoi EMIASN ?',
    careers_why_title2: 'où vous excellez',
    careers_benefit1_title: 'Formation Continue',
    careers_benefit1_p: 'Budget formation + certifications Google, AWS, Microsoft',
    careers_benefit2_title: 'Impact Mondial',
    careers_benefit2_p: "Projets d'envergure internationale",
    careers_benefit3_title: 'Flexibilité',
    careers_benefit3_p: 'Télétravail hybride, horaires flexibles',
    careers_benefit4_title: 'Évolution Rapide',
    careers_benefit4_p: 'Plan de carrière clair, promotions sur performance',
    careers_jobs_label: '// Postes ouverts',
    careers_jobs_title: "Rejoignez l'aventure",
    careers_apply_btn: 'Postuler maintenant',
    careers_no_match: 'Pas de poste correspondant ? Envoyez une candidature spontanée.',
    careers_spontaneous: 'Candidature spontanée',
    blog_h1: 'Actualités &',
    blog_featured: 'À la Une',
    blog_read_more: "Lire l'article",
    blog_min_read: 'min de lecture',
    blog_all_label: '// Tous les articles',
    blog_newsletter_title: 'Restez informé',
    blog_newsletter_p: 'Recevez nos analyses IA directement dans votre boîte mail.',
    blog_newsletter_btn: "S'abonner",
    projects_label: '// Nos Réalisations',
    projects_h1: 'Projets &',
    projects_h1_2: "Cas d'Usage",
    projects_p: "50+ projets livrés à travers l'Afrique et au-delà.",
    projects_status_done: 'Terminé',
    projects_status_active: 'En cours',
    projects_view_btn: 'Voir le projet',
    projects_all_label: '// Tous les projets',
    projects_cta_title: 'Votre projet sera le prochain',
    projects_cta_p: 'Parlons de votre défi et construisons la solution qui fera la différence.',
    solutions_label: '// Solutions Sectorielles',
    solutions_h1: 'Solutions IA',
    solutions_h1_2: 'Sectorielles',
    solutions_p: 'Des solutions conçues pour les défis de chaque secteur en Afrique.',
    sol_finance_tab: 'Finance & Banque',
    sol_telecom_tab: 'Télécommunications',
    sol_health_tab: 'Santé',
    sol_agri_tab: 'Agriculture',
    sol_commerce_tab: 'Commerce',
    sol_finance_feat1: 'Détection de Fraude',
    sol_finance_feat1_p: 'Modèles ML temps réel avec 99.2% de précision, réduisant les pertes de 70%.',
    sol_finance_feat2: 'Scoring de Crédit IA',
    sol_finance_feat2_p: 'Évaluation automatisée du risque crédit intégrant données alternatives.',
    sol_finance_feat3: 'Prévision de Liquidité',
    sol_finance_feat3_p: 'Anticipez vos besoins en trésorerie avec une précision de 95%.',
    faq_h1_2: 'Questions',
    faq_contact_cta: "Vous n'avez pas trouvé votre réponse ?",
    faq_contact_btn: 'Contactez-nous',
    partners_label: '// Partenaires',
    partners_h1: 'Nos Partenaires',
    partners_h1_2: 'Stratégiques',
    partners_p: 'Un réseau mondial de partenaires technologiques, académiques et institutionnels.',
    partners_univ_title: 'Universités Partenaires',
    partners_rd_title: 'R&D & Recherche',
    partners_cloud_title: 'Cloud & Infrastructure',
    partners_become_title: 'Devenez Partenaire',
    partners_become_p: 'Rejoignez notre écosystème et discutons des opportunités.',
    testimonials_label: '// Témoignages',
    testimonials_h1: 'Ce que disent',
    testimonials_h1_2: 'nos clients',
    testimonials_p: "Plus de 50 entreprises nous font confiance à travers l'Afrique et au-delà.",
    testimonials_cta_title: 'Rejoignez nos clients satisfaits',
    testimonials_cta_btn: 'Démarrer un projet',
    research_label: '// Recherche & Innovation',
    research_h1: 'Innovation &',
    research_h1_2: 'Recherche',
    research_p: 'Nos équipes contribuent à la recherche en IA avec un focus sur les défis africains.',
    research_area1_title: 'IA pour les Langues Africaines',
    research_area1_p: 'Modèles NLP adaptés au Wolof, Bambara, Dioula et autres langues locales.',
    research_area2_title: 'IA Frugale pour Mobiles',
    research_area2_p: 'Optimisation de modèles ML pour appareils à faible consommation en zones rurales.',
    research_area3_title: 'Prévision Climatique Sahélienne',
    research_area3_p: "Modèles spécialisés pour les conditions météo de l'Afrique de l'Ouest.",
    research_area4_title: 'Santé Connectée Africaine',
    research_area4_p: 'Diagnostic assisté par IA adapté aux infrastructures de santé locales.',
    research_pub_label: '// Publications',
    research_pub_title: 'Nos Contributions Scientifiques',
    apply_h1_2: 'notre équipe',
    apply_submit: 'Envoyer ma candidature',
    privacy_label: '// Légal',
    privacy_h1: 'Politique de',
    privacy_h1_2: 'Confidentialité',
    privacy_s1_title: '1. Collecte des Données',
    privacy_s2_title: '2. Utilisation des Données',
    privacy_s2_p: 'Vos données sont utilisées exclusivement dans le cadre de nos services.',
    privacy_s3_title: '3. Sécurité',
    privacy_s3_p: "Chiffrement des données, contrôles d'accès stricts, audits réguliers et conformité RGPD.",
    privacy_s4_title: '4. Vos Droits',
    privacy_s4_p: 'Accès, rectification, suppression et portabilité de vos données sur simple demande.',
    privacy_s5_title: '5. Cookies',
    privacy_s5_p: 'Nous utilisons des cookies fonctionnels et analytiques désactivables dans votre navigateur.',
    privacy_s6_title: '6. Contact DPO',
    privacy_s6_p: 'Pour toute question sur vos données, contactez notre DPO à privacy@emiasn.sn.',
    contact_h1: 'Travaillons',
    contact_opt_project: 'Projet IA',
    contact_opt_partner: 'Partenariat',
    contact_opt_press: 'Presse',
    contact_opt_other: 'Autre',
    // SOLUTIONS — sector cards
    sol_tel_feat1: 'Prédiction de Churn',
    sol_tel_feat1_p: 'Identification proactive des clients à risque de désabonnement.',
    sol_tel_feat2: 'Optimisation Réseau',
    sol_tel_feat2_p: 'Gestion dynamique de la bande passante et prédiction des pannes.',
    sol_tel_feat3: "Personnalisation d'Offres",
    sol_tel_feat3_p: "Recommandations en temps réel selon les comportements d'usage.",
    sol_san_feat1: 'Diagnostic Assisté',
    sol_san_feat1_p: "Analyse d'imagerie médicale pour l'aide au diagnostic des maladies tropicales.",
    sol_san_feat2: 'Prédiction Épidémique',
    sol_san_feat2_p: "Modèles pour anticiper la propagation des épidémies.",
    sol_san_feat3: 'Gestion des Stocks Pharma',
    sol_san_feat3_p: "Optimisation IA pour éviter les ruptures de médicaments essentiels.",
    sol_agri_feat2: 'Détection de Maladies',
    sol_agri_feat2_p: 'Vision par ordinateur pour détecter les maladies des cultures via drones.',
    sol_agri_feat3: 'Prévision Météo IA',
    sol_agri_feat3_p: 'Prévisions adaptées au contexte sahélien.',
    sol_retail_feat1: 'Recommandation Produits',
    sol_retail_feat1_p: 'Moteurs personnalisés augmentant panier moyen et fidélisation.',
    sol_retail_feat2: 'Gestion des Stocks',
    sol_retail_feat2_p: 'Prédiction de la demande et optimisation automatique des niveaux.',
    sol_retail_feat3: 'Pricing Dynamique',
    sol_retail_feat3_p: 'Tarification dynamique pour maximiser la marge.',
    // PROJECTS — stat labels
    proj_stat1: 'Projets livrés',
    proj_stat2: 'Secteurs couverts',
    proj_stat3: 'Satisfaction client',
    proj_stat4: 'Valeur générée',
    // PARTNERS — org card
    partners_org_title: 'Organisations',
    partners_org_tag: 'Impact & Développement',
    // RESEARCH — area 4
    research_area4_title: 'IA & Santé Tropicale',
    research_area4_p: "Détection précoce des maladies endémiques via l'imagerie médicale.",
  },
  en: {
    contact_label: "// Contact",
    contact_h1_1: "Let's Work",
    contact_h1_2: "Together",
    contact_p: "A question, a project, a partnership? Our team is available.",
    fname: "First name",
    lname: "Last name",
    email_pro: "Professional email",
    company: "Company",
    subject: "Subject",
    message_label: "Message",
    send_btn: "Send Message",
    subj_project: "AI Project",
    subj_partner: "Partnership",
    subj_recruit: "Recruitment",
    subj_press: "Press",
    subj_other: "Other",
    hq_title: "Headquarters",
    hq_addr: "Villa N°7308, SICAP Mermoz 2<br/>Dakar, Senegal",
    email_title: "Email",
    phone_title: "Phone",
    hours_title: "Office Hours",
    hours_weekday: "Mon – Fri: 08:00 – 18:00",
    hours_sat: "Sat: 09:00 – 13:00",
    offices_title: "Our Offices",
    toast_contact: "✅ Message sent! We will reply within 24h.",
    sending: "Sending...",
    form_error_required: "Please fill in your email and message.",
    form_error_email: "Invalid email address.",
    form_error_send: "Failed to send. Email us at ndaoibrahima037@gmail.com",
    about_label: "// About Us",
    about_h1_1: "Our Story,",
    about_h1_2: "Our Mission",
    about_p:
      "Founded in Dakar, EMIASN was born from a clear vision: to make West Africa a major player in global artificial intelligence.",
    mission_title: "Our Mission",
    vision_title: "Our Vision",
    values_title: "Our Values",
    mission_desc:
      "Develop and deploy innovative AI solutions that transform operations of major companies in Senegal and internationally.",
    vision_desc:
      "Become the pan-African AI leader by 2030, exporting our expertise to European and Asian markets.",
    values_desc:
      "Technical excellence, AI ethics, continuous innovation, inclusive collaboration and commitment to our clients.",
    journey_title: "Our Journey",
    culture_title: "Our Culture of Innovation",
    culture_p1:
      "At EMIASN, diversity is our greatest strength. Our multicultural teams bring unique perspectives.",
    culture_p2:
      "We continuously invest in training, organizing hackathons, certification programs and partnerships with the best universities.",
    stat_satisfaction: "Client satisfaction",
    stat_retention: "Talent retention",
    stat_delivery: "Projects delivered on time",
    careers_label: "// Careers",
    careers_h1_1: "Shape",
    careers_h1_2: "Tomorrow's AI",
    careers_p: "Join a passionate team building the future of AI in Africa.",
    benefit_training: "Continuous Training",
    benefit_training_desc:
      "Training budget + Google, AWS, Microsoft certifications",
    benefit_impact: "Global Impact",
    benefit_impact_desc: "International-scale projects",
    benefit_flex: "Flexibility",
    benefit_flex_desc: "Hybrid remote work, flexible hours",
    benefit_growth: "Fast Growth",
    benefit_growth_desc: "Clear career path, performance-based promotions",
    open_positions: "Open Positions",
    apply_back: "Back to listings",
    apply_label: "// Application",
    apply_h1: "Apply at EMIASN",
    apply_p: "Our HR team will contact you within 72h.",
    apply_fname: "First name *",
    apply_lname: "Last name *",
    apply_email: "Email *",
    apply_phone: "Phone",
    apply_position: "Desired position *",
    apply_level: "Education level *",
    apply_letter: "Cover letter *",
    apply_skills: "Technical skills *",
    apply_btn: "Submit Application",
    apply_toast:
      "🎉 Application submitted! Our HR team will contact you within 72h.",
    select_position: "Select a position",
    select_level: "Select",
    blog_label: "// Blog & Resources",
    blog_h1_1: "News &",
    blog_h1_2: "AI Insights",
    blog_p:
      "Stay at the cutting edge of artificial intelligence with our articles, analyses and tutorials.",
    newsletter_title: "AI Newsletter",
    newsletter_p: "Receive our latest articles every week.",
    newsletter_btn: "Subscribe",
    newsletter_toast: "✅ Subscription confirmed!",
    newsletter_placeholder: "your@email.com",
    faq_label: "// FAQ",
    faq_h1: "Frequently Asked Questions",
    faq_p: "Everything you need to know about EMIASN.",
    faq_q1: "What types of companies work with EMIASN?",
    faq_a1:
      "Major accounts: banks, telecoms, healthcare, agriculture, commerce. Clients in Senegal, Côte d'Ivoire, Mali and France.",
    faq_q2: "How long does a typical AI project take?",
    faq_a2:
      "POC: 4-8 weeks. Full deployment: 4 to 12 months. Agile sprints with regular deliverables.",
    faq_q3: "Do you offer AI training?",
    faq_a3:
      "Yes! Python, ML, DL and Data Science training tailored to beginner to advanced levels. At your premises or in Dakar.",
    faq_q4: "Is my data protected?",
    faq_a4:
      "Absolutely. GDPR compliance and Senegalese personal data law. NDA on every project. Data is never shared.",
    faq_q5: "How to apply for an internship?",
    faq_a5:
      "(1) Online application, (2) CV screening, (3) Python/ML technical test, (4) Technical interview, (5) HR interview. 2-3 week process.",
    faq_q6: "Do you work internationally?",
    faq_a6:
      "Yes, offices in Dakar, Abidjan, Bamako, Conakry and Paris. Our teams work remotely for clients in Europe, Asia and North America.",
    team_label: "// Our Team",
    team_h1_1: "The Minds",
    team_h1_2: "Behind EMIASN",
    team_p: "30+ passionate experts, trained at the world's best institutions.",
    team_directors: "Executive Leadership",
    team_experts: "Our AI Experts",
    team_cta_h2: "Join our team",
    team_cta_p: "We are looking for talents passionate about AI.",
    team_cta_btn: "View Opportunities",
    proj_label: "// Our Work",
    proj_h1_1: "Projects &",
    proj_h1_2: "Use Cases",
    proj_p:
      "Discover how our AI solutions have transformed our clients' operations.",
    proj_done: "Completed",
    proj_ongoing: "In progress",
    serv_label: "// Our Services",
    serv_h1_1: "Complete AI",
    serv_h1_2: "Expertise",
    serv_p:
      "From data engineering to production deployment, we cover the entire lifecycle of your AI projects.",
    serv_process: "Our Process",
    serv_s1: "Discovery",
    serv_s1_desc: "Data audit and requirements",
    serv_s2: "Design",
    serv_s2_desc: "Model architecture",
    serv_s3: "Development",
    serv_s3_desc: "Training and optimization",
    sol_label: "// Our Solutions",
    sol_h1_1: "Sector-Specific",
    sol_h1_2: "AI Solutions",
    sol_p:
      "Turnkey solutions designed to meet the specific challenges of each sector.",
    sol_tab_fin: "Finance & Banking",
    sol_tab_tel: "Telecommunications",
    sol_tab_san: "Healthcare",
    sol_tab_agri: "Agriculture",
    sol_tab_com: "Commerce",
    res_label: "// R&D",
    res_h1_1: "Innovation &",
    res_h1_2: "Research",
    res_p:
      "Our laboratory pushes the boundaries of AI applied to the African context.",
    res_axes: "Research Areas",
    res_pubs: "Recent Publications",
    part_label: "// Partners",
    part_h1_1: "Our Strategic",
    part_h1_2: "Partners",
    part_p: "A network of solid alliances for the best AI solutions.",
    priv_label: "// Privacy Policy",
    priv_h1_1: "Privacy",
    priv_h1_2: "Policy",
    test_label: "// Testimonials",
    test_h1_1: "What our",
    test_h1_2: "clients say",
    hero_badge: "Artificial Intelligence · Dakar, Senegal · Global",
    hero_h1_1: "AI in service",
    hero_h1_2: "of Africa",
    hero_h1_3: "and the World",
    hero_p:
      "EMIASN develops cutting-edge artificial intelligence solutions for major Senegalese and international companies.",
    hero_cta1: "Discover our Solutions",
    hero_cta2: "Contact Us",
    stats_1: "Projects completed",
    stats_2: "Major Accounts",
    stats_3: "AI Experts",
    stats_4: "Countries covered",
    services_label: "// Our Expertise",
    services_h2_1: "What we",
    services_h2_2: "do best",
    services_link: "View all services",
    ml_title: "Machine Learning",
    ml_desc:
      "Predictive and analytical algorithms tailored to the business needs of your major accounts.",
    dl_title: "Deep Learning",
    dl_desc:
      "Deep neural networks with TensorFlow and Keras for vision, NLP and advanced analysis.",
    ds_title: "Data Science",
    ds_desc:
      "Massive data analysis, visualization and strategic insights with NumPy, Pandas and Matplotlib.",
    why_label: "// Why EMIASN",
    why_h2_1: "Pioneers of AI",
    why_h2_2: "in West Africa",
    why_p:
      "International technical expertise combined with a deep understanding of African realities.",
    why_1_title: "Multilingual Expertise",
    why_1_desc: "French, English and Wolof.",
    why_2_title: "Custom Solutions",
    why_2_desc: "Each algorithm optimized for your clients.",
    why_3_title: "International Presence",
    why_3_desc: "Network of major accounts in Senegal and internationally.",
    clients_label: "// They trust us",
    cta_h2: "Ready to transform your data?",
    cta_p: "Join the leaders who trust EMIASN for their AI projects.",
    cta_btn: "Start a Project",
    scroll_down: "Scroll",
    learn_more: "Learn more",
    read_more: "Read more",
    apply_now: "Apply",
    see_all_services: "View all services",
    trust_label: "// They trust us",
    // Timeline about.html
    timeline_2019_title: "EMIASN Founded",
    timeline_2019_desc: "Created in Dakar by a team of data scientists and AI engineers trained in Europe and the United States.",
    timeline_2020_title: "First Major Accounts",
    timeline_2020_desc: "Signing of first contracts in the banking and telecoms sectors in Senegal.",
    timeline_2021_title: "Regional Expansion",
    timeline_2021_desc: "Opening of offices in Abidjan, Bamako and Conakry. Team expanded to 20 AI experts.",
    timeline_2023_title: "International Recognition",
    timeline_2023_desc: "African Digital Innovation Award. Partnerships with European universities for R&D.",
    timeline_2024_date: "2024 – Present",
    timeline_2024_title: "African AI Leader",
    timeline_2024_desc: "30+ experts, 50+ projects delivered, presence in 5 countries. On the way to European expansion.",
    // TEAM page
    team_stat_experts: "AI Experts",
    team_stat_nationalities: "Nationalities",
    team_stat_experience: "Years of Combined Experience",
    team_stat_countries: "Countries",
    team_section_leadership: "// Executive Leadership",
    team_section_experts: "// Experts & Engineers",
    team_join_link: "Join the team",
    team_zakaria_desc: "Founder of EMIASN, Professor and Educator. Having worked in the banking, industrial and many other sectors, Zakaria combines multidisciplinary expertise and strategic vision to build tomorrow's AI in Africa.",
    team_zakaria_tag1: "Founder",
    team_zakaria_tag2: "Educator",
    team_zakaria_tag3: "Banking & Industry",
    team_ibrahima_role: "Tech Lead · All EMIASN World Offices",
    team_ibrahima_desc: "Chief Technical Officer of EMIASN at global scale, Ibrahima is the Tech Lead for all EMIASN offices worldwide. He pilots AI solution architecture, coordinates global engineering teams and ensures technical excellence in every deliverable.",
    team_ibrahima_tag1: "CTO Worldwide",
    team_ibrahima_tag2: "Machine Learning",
    team_ibrahima_tag3: "AI Architecture",
    team_ibrahima_tag4: "Global Teams",
    team_mouhamadou_role: "Client Support Lead · World Wide · Educator",
    team_mouhamadou_desc: "Tech Lead for Client Support Worldwide, Mouhamadou Moustapha manages all international technical support for EMIASN. Teaching at engineering schools and in companies on Data Science and Artificial Intelligence, he combines field expertise with knowledge transfer.",
    team_mouhamadou_tag1: "Support WW",
    team_mouhamadou_tag2: "AI Educator",
    team_mouhamadou_tag3: "Data Science",
    team_mouhamadou_tag4: "Engineering Schools",
    team_sekou_title: "Tech Lead Security EMIASN",
    team_sekou_subtitle: "Data Science & AI Engineer",
    team_sekou_desc: "Cybersecurity expert and Data Science & AI engineer, Sékou combines mastery of secure infrastructures with algorithmic expertise. He designs robust AI systems while ensuring the protection of data and models deployed in production for EMIASN's clients.",
    team_sekou_tag1: "Security Audit",
    team_sekou_tag2: "Penetration Testing",
    team_sekou_tag3: "Zero Trust",
    team_sekou_tag4: "Data Science",
    team_sekou_tag5: "ML / DL",
    team_sekou_tag6: "Secure AI",
    team_tamsir_title: "Director EMIASN France & EMEA",
    team_tamsir_region: "Europe · Middle East · Africa",
    team_tamsir_desc: "Vision leader and decision-maker for the entire EMEA region from Paris. Deputy Consul of Paris, he coordinates EMIASN operations across Europe, the Middle East and Africa. Passionate about Data Science, he personally engages in EMIASN challenges.",
    team_tamsir_tag1: "EMEA Strategy",
    team_tamsir_tag2: "Paris · Europe",
    team_tamsir_tag3: "Data Science",
    team_mohamed_title: "MSI EMIASN · All Projects · Infrastructure Security WW",
    team_mohamed_contact: "In contact with all clients",
    team_mohamed_desc: "Manager of Information Systems for EMIASN, all EMIASN projects and security of all worldwide infrastructure. Direct interface with all EMIASN clients.",
    team_mohamed_tag1: "MSI EMIASN",
    team_mohamed_tag2: "Infrastructure Security WW",
    team_mohamed_tag3: "All Projects",
    team_fatoumata_title: "Management Data Science & Quality Assurance",
    team_fatoumata_tag1: "Data Science",
    team_fatoumata_tag2: "QA All Projects",
    team_fatoumata_tag3: "ML & Python",
    team_salif_title: "Full Stack Developer & Data Science Engineer",
    team_salif_tag1: "Full Stack",
    team_salif_tag2: "Data Science",
    team_salif_tag3: "React / Node",
    team_idrissa_title: "Director of Key Accounts & Client Management",
    team_idrissa_desc: "Director and Manager of Key Client Accounts at EMIASN, Idrissa Gassama is a highly experienced executive and former senior manager at Sonatel. He oversees Marketing and Business Units at EMIASN, steering the commercial strategy and developing relationships with major corporate clients.",
    team_idrissa_tag1: "Key Accounts",
    team_idrissa_tag2: "Client Management",
    team_idrissa_tag3: "Business Dev",
    team_idrissa_tag4: "CRM",
    team_join_you: "What about you?",
    team_join_desc: "Join our team of AI talents",
    team_join_btn: "View openings",
    team_culture_label: "// Our Culture",
    team_culture_h2: "An environment<br/>that inspires you",
    team_culture_intro: "At EMIASN, we believe great ideas are born in an environment that values diversity, autonomy and continuous learning.",
    team_culture_training: "Continuous Training",
    team_culture_training_desc: "Certifications, hackathons, conferences",
    team_culture_impact: "Real Impact in Africa",
    team_culture_impact_desc: "Projects with social and economic impact",
    team_culture_diversity: "Multicultural Team",
    team_culture_diversity_desc: "8 nationalities, total inclusion",
    team_culture_cta: "Join the adventure",
    team_metric_satisfaction: "Team Satisfaction",
    team_metric_retention: "Talent Retention",
    team_metric_delivery: "Projects Delivered On Time",
    team_quote: "«Our mission is to prove that Africa can lead the global AI revolution, not just participate in it.»",
    team_cta_badge: "We are hiring",
    team_cta_h2: "Your talent belongs<br/>at EMIASN",
    team_cta_p: "Join the pioneers of AI in West Africa. Open positions in Data Science, ML Engineering, NLP and more.",
    team_cta_btn1: "View all openings",
    team_cta_btn2: "Spontaneous application",
    // SERVICES page
    serv_ml_title: "Machine Learning",
    serv_ml_subtitle: "Prediction · Classification · Clustering",
    serv_ml_desc: "Supervised and unsupervised algorithms with Scikit-Learn. Regression, SVM, Random Forest, Gradient Boosting…",
    serv_dl_title: "Deep Learning",
    serv_dl_subtitle: "CNN · RNN · Transformers",
    serv_dl_desc: "Deep neural network architectures with TensorFlow and Keras: image recognition, text generation, time series.",
    serv_ds_title: "Data Science & Analytics",
    serv_ds_subtitle: "EDA · Visualization · Insights",
    serv_ds_desc: "Exploration with NumPy, Pandas. Interactive visualization with Matplotlib and Seaborn for decision reports.",
    serv_cv_title: "Computer Vision",
    serv_cv_subtitle: "Detection · Recognition · Segmentation",
    serv_cv_desc: "Computer vision solutions for security, quality control and surveillance. Real-time object detection.",
    serv_nlp_title: "NLP & Language Processing",
    serv_nlp_subtitle: "Analysis · Generation · Chatbots",
    serv_nlp_desc: "Sentiment analysis, entity extraction, intelligent chatbots and translation in French, English and Wolof.",
    serv_mlops_title: "MLOps & Deployment",
    serv_mlops_subtitle: "Pipeline · Production · Monitoring",
    serv_mlops_desc: "CI/CD production deployment, performance monitoring, drift management and cloud or on-premise scalability.",
    hero_badge_text: 'AI Pioneers in Africa',
    hero_tagline: 'Artificial Intelligence · Dakar, Senegal · Global',
    hero_cta_primary: 'Explore our Solutions',
    hero_cta_secondary: 'Contact Us',
    stat_projects: 'Projects completed',
    stat_clients: 'Enterprise Clients',
    stat_experts: 'AI Experts',
    stat_countries: 'Countries covered',
    index_services_label: '// What we do',
    index_services_title: 'Our Expertise',
    index_why_label: '// Why choose us',
    index_why_title: 'AI Excellence',
    index_cta_label: '// Ready to start?',
    index_cta_title: "Let's transform your business",
    index_cta_title2: 'with AI together',
    index_cta_p: "Let's talk about your project. Our team responds within 24h.",
    index_cta_btn1: 'Start a project',
    index_cta_btn2: 'View our work',
    about_h1: 'Our Story,',
    about_vision_title: 'Our Vision',
    about_values_title: 'Our Values',
    about_timeline_label: '// Our Journey',
    services_h1: 'AI Expertise',
    services_h1_2: 'Complete',
    services_p: 'From design to production, we cover the full spectrum of AI.',
    serv_cv_sub: 'Detection · Recognition · Analysis',
    serv_cta_title: 'A project in mind?',
    serv_cta_p: "Let's discuss your needs and build the right AI solution together.",
    careers_h1: 'Shape the Future of AI',
    careers_why_label: '// Why EMIASN?',
    careers_why_title2: 'where you excel',
    careers_benefit1_title: 'Continuous Training',
    careers_benefit1_p: 'Training budget + certifications Google, AWS, Microsoft',
    careers_benefit2_title: 'Global Impact',
    careers_benefit2_p: 'Projects with international reach',
    careers_benefit3_title: 'Flexibility',
    careers_benefit3_p: 'Hybrid remote work, flexible hours',
    careers_benefit4_title: 'Fast Growth',
    careers_benefit4_p: 'Clear career plan, performance-based promotions',
    careers_jobs_label: '// Open positions',
    careers_jobs_title: 'Join the adventure',
    careers_apply_btn: 'Apply now',
    careers_no_match: 'No matching position? Send a spontaneous application.',
    careers_spontaneous: 'Spontaneous application',
    blog_h1: 'News &',
    blog_featured: 'Featured',
    blog_read_more: 'Read article',
    blog_min_read: 'min read',
    blog_all_label: '// All articles',
    blog_newsletter_title: 'Stay informed',
    blog_newsletter_p: 'Receive our AI analysis directly in your inbox.',
    blog_newsletter_btn: 'Subscribe',
    projects_label: '// Our Work',
    projects_h1: 'Projects &',
    projects_h1_2: 'Use Cases',
    projects_p: '50+ projects delivered across Africa and beyond.',
    projects_status_done: 'Completed',
    projects_status_active: 'In progress',
    projects_view_btn: 'View project',
    projects_all_label: '// All projects',
    projects_cta_title: 'Your project will be next',
    projects_cta_p: "Let's talk about your challenge and build the solution that makes a difference.",
    solutions_label: '// Industry Solutions',
    solutions_h1: 'AI Solutions',
    solutions_h1_2: 'by Industry',
    solutions_p: 'Solutions designed for the challenges of each sector in Africa.',
    sol_finance_tab: 'Finance & Banking',
    sol_telecom_tab: 'Telecommunications',
    sol_health_tab: 'Health',
    sol_agri_tab: 'Agriculture',
    sol_commerce_tab: 'Commerce',
    sol_finance_feat1: 'Fraud Detection',
    sol_finance_feat1_p: 'Real-time ML models with 99.2% accuracy, reducing losses by 70%.',
    sol_finance_feat2: 'AI Credit Scoring',
    sol_finance_feat2_p: 'Automated credit risk assessment integrating alternative data.',
    sol_finance_feat3: 'Liquidity Forecasting',
    sol_finance_feat3_p: 'Anticipate your cash flow needs with 95% accuracy.',
    faq_h1_2: 'Questions',
    faq_contact_cta: "Didn't find your answer?",
    faq_contact_btn: 'Contact us',
    partners_label: '// Partners',
    partners_h1: 'Our Partners',
    partners_h1_2: 'Strategic',
    partners_p: 'A global network of technological, academic and institutional partners.',
    partners_univ_title: 'Partner Universities',
    partners_rd_title: 'R&D & Research',
    partners_cloud_title: 'Cloud & Infrastructure',
    partners_become_title: 'Become a Partner',
    partners_become_p: "Join our ecosystem and let's discuss collaboration opportunities.",
    testimonials_label: '// Testimonials',
    testimonials_h1: 'What our',
    testimonials_h1_2: 'clients say',
    testimonials_p: 'More than 50 companies trust us across Africa and beyond.',
    testimonials_cta_title: 'Join our satisfied clients',
    testimonials_cta_btn: 'Start a project',
    research_label: '// Research & Innovation',
    research_h1: 'Innovation &',
    research_h1_2: 'Research',
    research_p: 'Our teams actively contribute to AI research, focusing on African challenges.',
    research_area1_title: 'AI for African Languages',
    research_area1_p: 'NLP models adapted to Wolof, Bambara, Dioula and other local languages.',
    research_area2_title: 'Frugal AI for Mobile',
    research_area2_p: 'ML model optimization for low-power devices in rural areas.',
    research_area3_title: 'Sahelian Climate Forecasting',
    research_area3_p: 'Specialized models for West African weather conditions.',
    research_area4_title: 'African Connected Health',
    research_area4_p: 'AI-assisted diagnostics adapted to local health infrastructure.',
    research_pub_label: '// Publications',
    research_pub_title: 'Our Scientific Contributions',
    apply_h1_2: 'our team',
    apply_submit: 'Submit my application',
    privacy_label: '// Legal',
    privacy_h1: 'Privacy',
    privacy_h1_2: 'Policy',
    privacy_s1_title: '1. Data Collection',
    privacy_s2_title: '2. Data Use',
    privacy_s2_p: 'Your data is used exclusively within the framework of our services.',
    privacy_s3_title: '3. Security',
    privacy_s3_p: 'Data encryption, strict access controls, regular audits and GDPR compliance.',
    privacy_s4_title: '4. Your Rights',
    privacy_s4_p: 'Access, rectification, deletion and portability of your data on request.',
    privacy_s5_title: '5. Cookies',
    privacy_s5_p: 'We use functional and analytical cookies. You can disable them in your browser settings.',
    privacy_s6_title: '6. DPO Contact',
    privacy_s6_p: 'For any questions about your data, contact our DPO at privacy@emiasn.sn.',
    contact_h1: "Let's work",
    contact_opt_project: 'AI Project',
    contact_opt_partner: 'Partnership',
    contact_opt_press: 'Press',
    contact_opt_other: 'Other',
    // SOLUTIONS — sector cards
    sol_tel_feat1: 'Churn Prediction',
    sol_tel_feat1_p: 'Proactive identification of customers at risk of unsubscribing.',
    sol_tel_feat2: 'Network Optimization',
    sol_tel_feat2_p: 'Dynamic bandwidth management and outage prediction.',
    sol_tel_feat3: 'Offer Personalization',
    sol_tel_feat3_p: 'Real-time recommendations based on usage behavior.',
    sol_san_feat1: 'AI-Assisted Diagnosis',
    sol_san_feat1_p: 'Medical imaging analysis to assist diagnosis of tropical diseases.',
    sol_san_feat2: 'Epidemic Prediction',
    sol_san_feat2_p: 'Models to anticipate the spread of epidemics.',
    sol_san_feat3: 'Pharma Stock Management',
    sol_san_feat3_p: 'AI optimization to prevent shortages of essential medicines.',
    sol_agri_feat2: 'Disease Detection',
    sol_agri_feat2_p: 'Computer vision to detect crop diseases via drones.',
    sol_agri_feat3: 'AI Weather Forecasting',
    sol_agri_feat3_p: 'Forecasts adapted to the Sahelian context.',
    sol_retail_feat1: 'Product Recommendations',
    sol_retail_feat1_p: 'Personalized engines increasing average basket and loyalty.',
    sol_retail_feat2: 'Inventory Management',
    sol_retail_feat2_p: 'Demand forecasting and automatic level optimization.',
    sol_retail_feat3: 'Dynamic Pricing',
    sol_retail_feat3_p: 'Dynamic pricing to maximize margin.',
    // PROJECTS — stat labels
    proj_stat1: 'Projects delivered',
    proj_stat2: 'Sectors covered',
    proj_stat3: 'Client satisfaction',
    proj_stat4: 'Value generated',
    // PARTNERS — org card
    partners_org_title: 'Organizations',
    partners_org_tag: 'Impact & Development',
    // RESEARCH — area 4
    research_area4_title: 'AI & Tropical Health',
    research_area4_p: 'Early detection of endemic diseases through medical imaging.',
  },
  ar: {
    contact_label: "// التواصل",
    contact_h1_1: "لنعمل",
    contact_h1_2: "معاً",
    contact_p: "سؤال، مشروع، شراكة؟ فريقنا متاح لك.",
    fname: "الاسم الأول",
    lname: "اسم العائلة",
    email_pro: "البريد الإلكتروني المهني",
    company: "الشركة",
    subject: "الموضوع",
    message_label: "الرسالة",
    send_btn: "إرسال الرسالة",
    subj_project: "مشروع ذكاء اصطناعي",
    subj_partner: "شراكة",
    subj_recruit: "توظيف",
    subj_press: "صحافة",
    subj_other: "أخرى",
    hq_title: "المقر الرئيسي",
    hq_addr: "فيلا رقم 7308، SICAP ميرموز 2<br/>داكار، السنغال",
    email_title: "البريد الإلكتروني",
    phone_title: "الهاتف",
    hours_title: "ساعات العمل",
    hours_weekday: "الاثنين – الجمعة: 08:00 – 18:00",
    hours_sat: "السبت: 09:00 – 13:00",
    offices_title: "مكاتبنا",
    toast_contact: "✅ تم إرسال رسالتك! سنرد عليك خلال 24 ساعة.",
    sending: "جارٍ الإرسال...",
    form_error_required: "يرجى ملء البريد الإلكتروني والرسالة.",
    form_error_email: "عنوان البريد الإلكتروني غير صالح.",
    form_error_send: "فشل الإرسال. راسلنا على ndaoibrahima037@gmail.com",
    about_label: "// عن الشركة",
    about_h1_1: "قصتنا،",
    about_h1_2: "مهمتنا",
    about_p:
      "تأسست EMIASN في داكار من رؤية واضحة: جعل غرب أفريقيا لاعباً رئيسياً في الذكاء الاصطناعي العالمي.",
    mission_title: "مهمتنا",
    vision_title: "رؤيتنا",
    values_title: "قيمنا",
    mission_desc:
      "تطوير ونشر حلول ذكاء اصطناعي مبتكرة تحول عمليات الشركات الكبرى في السنغال ودولياً.",
    vision_desc:
      "أن نصبح رائد الذكاء الاصطناعي الأفريقي بحلول عام 2030، من خلال تصدير خبراتنا إلى الأسواق الأوروبية والآسيوية.",
    values_desc:
      "التميز التقني وأخلاقيات الذكاء الاصطناعي والابتكار المستمر والتعاون الشامل.",
    journey_title: "مسيرتنا",
    culture_title: "ثقافة الابتكار لدينا",
    culture_p1:
      "في EMIASN، التنوع هو أكبر قوتنا. فرقنا متعددة الثقافات تجلب وجهات نظر فريدة.",
    culture_p2:
      "نستثمر باستمرار في التدريب، وننظم هاكاثونات وبرامج شهادات وشراكات مع أفضل الجامعات.",
    stat_satisfaction: "رضا العملاء",
    stat_retention: "الاحتفاظ بالمواهب",
    stat_delivery: "المشاريع المسلّمة في الموعد",
    careers_label: "// الوظائف",
    careers_h1_1: "شكّل",
    careers_h1_2: "مستقبل الذكاء الاصطناعي",
    careers_p: "انضم إلى فريق متحمس يبني مستقبل الذكاء الاصطناعي في أفريقيا.",
    benefit_training: "التدريب المستمر",
    benefit_training_desc: "ميزانية تدريب + شهادات Google وAWS وMicrosoft",
    benefit_impact: "تأثير عالمي",
    benefit_impact_desc: "مشاريع ذات نطاق دولي",
    benefit_flex: "مرونة",
    benefit_flex_desc: "عمل عن بُعد هجين، ساعات مرنة",
    benefit_growth: "تطور سريع",
    benefit_growth_desc: "مسار وظيفي واضح، ترقيات على أساس الأداء",
    open_positions: "الوظائف المفتوحة",
    apply_back: "العودة إلى العروض",
    apply_label: "// التقديم",
    apply_h1: "التقدم في EMIASN",
    apply_p: "سيتصل بك فريق الموارد البشرية في غضون 72 ساعة.",
    apply_fname: "الاسم الأول *",
    apply_lname: "اسم العائلة *",
    apply_email: "البريد الإلكتروني *",
    apply_phone: "الهاتف",
    apply_position: "المنصب المطلوب *",
    apply_level: "المستوى الأكاديمي *",
    apply_letter: "رسالة التحفيز *",
    apply_skills: "المهارات التقنية *",
    apply_btn: "تقديم الطلب",
    apply_toast:
      "🎉 تم تقديم طلبك! سيتصل بك فريق الموارد البشرية خلال 72 ساعة.",
    select_position: "اختر منصباً",
    select_level: "اختر",
    blog_label: "// المدونة والموارد",
    blog_h1_1: "الأخبار &",
    blog_h1_2: "رؤى الذكاء الاصطناعي",
    blog_p:
      "ابقَ في طليعة الذكاء الاصطناعي من خلال مقالاتنا وتحليلاتنا ودروسنا التعليمية.",
    newsletter_title: "نشرة الذكاء الاصطناعي",
    newsletter_p: "احصل على أحدث مقالاتنا كل أسبوع.",
    newsletter_btn: "اشتراك",
    newsletter_toast: "✅ تم تأكيد الاشتراك!",
    newsletter_placeholder: "بريدك@الإلكتروني.com",
    faq_label: "// الأسئلة الشائعة",
    faq_h1: "الأسئلة المتكررة",
    faq_p: "كل ما تحتاج معرفته عن EMIASN.",
    faq_q1: "ما أنواع الشركات التي تعمل مع EMIASN؟",
    faq_a1:
      "الشركات الكبرى: البنوك والاتصالات والصحة والزراعة والتجارة. عملاء في السنغال وكوت ديفوار ومالي وفرنسا.",
    faq_q2: "كم يستغرق مشروع الذكاء الاصطناعي النموذجي؟",
    faq_a2: "إثبات المفهوم: 4-8 أسابيع. النشر الكامل: 4 إلى 12 شهراً.",
    faq_q3: "هل تقدمون تدريبات على الذكاء الاصطناعي؟",
    faq_a3:
      "نعم! تدريبات Python وML وDL وعلم البيانات مناسبة للمبتدئين وحتى المتقدمين.",
    faq_q4: "هل بياناتي محمية؟",
    faq_a4:
      "بالتأكيد. الامتثال لـ GDPR والقانون السنغالي. اتفاقية سرية في كل مشروع.",
    faq_q5: "كيف أتقدم للتدريب؟",
    faq_a5:
      "(1) ملف إلكتروني، (2) فرز السيرة الذاتية، (3) اختبار تقني، (4) مقابلة تقنية، (5) مقابلة الموارد البشرية.",
    faq_q6: "هل تعملون دولياً؟",
    faq_a6: "نعم، مكاتب في داكار وأبيدجان وباماكو وباريس.",
    team_label: "// فريقنا",
    team_h1_1: "العقول",
    team_h1_2: "وراء EMIASN",
    team_p: "أكثر من 30 خبيراً متحمساً، تدربوا في أفضل المؤسسات العالمية.",
    team_directors: "الإدارة العامة",
    team_experts: "خبراء الذكاء الاصطناعي",
    team_cta_h2: "انضم إلى فريقنا",
    team_cta_p: "نبحث عن مواهب شغوفة بالذكاء الاصطناعي.",
    team_cta_btn: "عرض الفرص",
    proj_label: "// إنجازاتنا",
    proj_h1_1: "المشاريع &",
    proj_h1_2: "حالات الاستخدام",
    proj_p: "اكتشف كيف حوّلت حلول الذكاء الاصطناعي لدينا عمليات عملائنا.",
    proj_done: "منتهٍ",
    proj_ongoing: "جارٍ",
    serv_label: "// خدماتنا",
    serv_h1_1: "خبرة ذكاء اصطناعي",
    serv_h1_2: "شاملة",
    serv_p:
      "من هندسة البيانات إلى النشر في الإنتاج، نغطي دورة حياة مشاريعك بالكامل.",
    serv_process: "عمليتنا",
    serv_s1: "الاكتشاف",
    serv_s1_desc: "تدقيق البيانات والمتطلبات",
    serv_s2: "التصميم",
    serv_s2_desc: "هندسة النموذج",
    serv_s3: "التطوير",
    serv_s3_desc: "التدريب والتحسين",
    sol_label: "// حلولنا",
    sol_h1_1: "حلول ذكاء اصطناعي",
    sol_h1_2: "قطاعية",
    sol_p: "حلول جاهزة مصممة لتلبية التحديات المحددة لكل قطاع.",
    sol_tab_fin: "المال والبنوك",
    sol_tab_tel: "الاتصالات",
    sol_tab_san: "الصحة",
    sol_tab_agri: "الزراعة",
    sol_tab_com: "التجارة",
    res_label: "// البحث والتطوير",
    res_h1_1: "الابتكار &",
    res_h1_2: "البحث",
    res_p: "مختبرنا يدفع حدود الذكاء الاصطناعي المطبق على السياق الأفريقي.",
    res_axes: "محاور البحث",
    res_pubs: "المنشورات الأخيرة",
    part_label: "// الشركاء",
    part_h1_1: "شركاؤنا",
    part_h1_2: "الاستراتيجيون",
    part_p: "شبكة تحالفات متينة لأفضل حلول الذكاء الاصطناعي.",
    priv_label: "// سياسة الخصوصية",
    priv_h1_1: "سياسة",
    priv_h1_2: "الخصوصية",
    test_label: "// الشهادات",
    test_h1_1: "ما يقوله",
    test_h1_2: "عملاؤنا",
    hero_badge: "الذكاء الاصطناعي · داكار، السنغال · عالمي",
    hero_h1_1: "الذكاء الاصطناعي في خدمة",
    hero_h1_2: "أفريقيا",
    hero_h1_3: "والعالم",
    hero_p:
      "تطوّر EMIASN حلولاً متطورة للذكاء الاصطناعي للشركات الكبرى في السنغال وعلى الصعيد الدولي.",
    hero_cta1: "اكتشف حلولنا",
    hero_cta2: "تواصل معنا",
    stats_1: "مشروع منجز",
    stats_2: "عميل كبير",
    stats_3: "خبير ذكاء اصطناعي",
    stats_4: "دول مغطاة",
    services_label: "// خبراتنا",
    services_h2_1: "ما نقوم",
    services_h2_2: "به بشكل أفضل",
    services_link: "عرض جميع الخدمات",
    ml_title: "التعلم الآلي",
    ml_desc:
      "خوارزميات تنبؤية وتحليلية مصممة لتلبية احتياجات أعمال عملائك الكبار.",
    dl_title: "التعلم العميق",
    dl_desc:
      "شبكات عصبية عميقة مع TensorFlow وKeras للرؤية ومعالجة اللغة والتحليل المتقدم.",
    ds_title: "علم البيانات",
    ds_desc:
      "تحليل البيانات الضخمة والتصور والرؤى الاستراتيجية مع NumPy وPandas وMatplotlib.",
    why_label: "// لماذا EMIASN",
    why_h2_1: "رواد الذكاء الاصطناعي",
    why_h2_2: "في غرب أفريقيا",
    why_p: "خبرة تقنية دولية مدموجة بفهم عميق للواقع الأفريقي.",
    why_1_title: "خبرة متعددة اللغات",
    why_1_desc: "الفرنسية والإنجليزية والولوف.",
    why_2_title: "حلول مخصصة",
    why_2_desc: "كل خوارزمية محسّنة لعملائك.",
    why_3_title: "حضور دولي",
    why_3_desc: "شبكة من العملاء الكبار في السنغال وعلى الصعيد الدولي.",
    clients_label: "// يثقون بنا",
    cta_h2: "هل أنت مستعد لتحويل بياناتك؟",
    cta_p: "انضم إلى القادة الذين يثقون في EMIASN لمشاريع الذكاء الاصطناعي.",
    cta_btn: "ابدأ مشروعاً",
    scroll_down: "مرر للأسفل",
    learn_more: "اعرف المزيد",
    read_more: "اقرأ المزيد",
    apply_now: "تقدم الآن",
    see_all_services: "عرض جميع الخدمات",
    trust_label: "// يثقون بنا",
    // Timeline about.html
    timeline_2019_title: "تأسيس EMIASN",
    timeline_2019_desc: "تأسست في داكار على يد فريق من علماء البيانات ومهندسي الذكاء الاصطناعي المتدربين في أوروبا والولايات المتحدة.",
    timeline_2020_title: "أول العملاء الكبار",
    timeline_2020_desc: "توقيع أول العقود في قطاعي البنوك والاتصالات في السنغال.",
    timeline_2021_title: "التوسع الإقليمي",
    timeline_2021_desc: "افتتاح مكاتب في أبيدجان وباماكو وكوناكري. توسعت الفريق إلى 20 خبيراً في الذكاء الاصطناعي.",
    timeline_2023_title: "الاعتراف الدولي",
    timeline_2023_desc: "جائزة الابتكار الرقمي الأفريقي. شراكات مع جامعات أوروبية للبحث والتطوير.",
    timeline_2024_date: "2024 – الآن",
    timeline_2024_title: "رائد الذكاء الاصطناعي الأفريقي",
    timeline_2024_desc: "أكثر من 30 خبيراً و50+ مشروع مسلّم، حضور في 5 دول. في طريقنا نحو التوسع الأوروبي.",
    // TEAM page
    team_stat_experts: "خبراء الذكاء الاصطناعي",
    team_stat_nationalities: "الجنسيات",
    team_stat_experience: "سنوات الخبرة المتراكمة",
    team_stat_countries: "الدول",
    team_section_leadership: "// الإدارة التنفيذية",
    team_section_experts: "// الخبراء والمهندسون",
    team_join_link: "انضم إلى الفريق",
    team_zakaria_desc: "مؤسس EMIASN، أستاذ ومعلم. بعد عمله في قطاعات البنوك والصناعة وغيرها، يجمع زكاريا بين الخبرة المتعددة التخصصات والرؤية الاستراتيجية لبناء ذكاء اصطناعي المستقبل في أفريقيا.",
    team_zakaria_tag1: "المؤسس",
    team_zakaria_tag2: "المعلم",
    team_zakaria_tag3: "البنوك والصناعة",
    team_ibrahima_role: "Tech Lead · جميع مكاتب EMIASN العالمية",
    team_ibrahima_desc: "مدير التكنولوجيا بمنظمة EMIASN على المستوى العالمي، إبراهيما هو Tech Lead لجميع مكاتب EMIASN حول العالم. يقود معمارية حلول الذكاء الاصطناعي ويوجه فرق الهندسة العالمية ويضمن التميز التقني في كل ما نقدمه.",
    team_ibrahima_tag1: "مدير التقنية العالمي",
    team_ibrahima_tag2: "التعلم الآلي",
    team_ibrahima_tag3: "معمارية الذكاء الاصطناعي",
    team_ibrahima_tag4: "الفرق العالمية",
    team_mouhamadou_role: "Tech Lead · الدعم العالمي · المعلم",
    team_mouhamadou_desc: "Tech Lead لدعم العملاء عالمياً، يدير Mouhamadou Moustapha جميع الدعم التقني الدولي لـ EMIASN. معلم في المدارس الهندسية والشركات في Data Science والذكاء الاصطناعي، يجمع بين الخبرة الميدانية ونقل المعرفة.",
    team_mouhamadou_tag1: "الدعم العالمي",
    team_mouhamadou_tag2: "معلم الذكاء الاصطناعي",
    team_mouhamadou_tag3: "Data Science",
    team_mouhamadou_tag4: "المدارس الهندسية",
    team_sekou_title: "Tech Lead الأمان EMIASN",
    team_sekou_subtitle: "مهندس علوم البيانات والذكاء الاصطناعي",
    team_sekou_desc: "خبير في الأمن السيبراني ومهندس علوم البيانات والذكاء الاصطناعي، يجمع سيكو بين إتقان البنى التحتية الآمنة والخبرة الخوارزمية. يصمم أنظمة ذكاء اصطناعي متينة مع ضمان حماية البيانات والنماذج المنشورة في بيئة الإنتاج لدى عملاء EMIASN.",
    team_sekou_tag1: "تدقيق الأمان",
    team_sekou_tag2: "اختبار الاختراق",
    team_sekou_tag3: "Zero Trust",
    team_sekou_tag4: "علوم البيانات",
    team_sekou_tag5: "ML / DL",
    team_sekou_tag6: "ذكاء اصطناعي آمن",
    team_tamsir_title: "مدير EMIASN فرنسا والمنطقة الأوروبية الشرق أوسطية الأفريقية",
    team_tamsir_region: "أوروبا · الشرق الأوسط · أفريقيا",
    team_tamsir_desc: "قائد الرؤية وصاحب القرار للمنطقة الأوروبية الشرق أوسطية الأفريقية بأكملها من باريس. قنصل فرنسا بباريس، يوجه عمليات EMIASN عبر أوروبا والشرق الأوسط وأفريقيا. شغوف بـ Data Science، يشارك شخصياً في تحديات EMIASN.",
    team_tamsir_tag1: "استراتيجية المنطقة",
    team_tamsir_tag2: "باريس · أوروبا",
    team_tamsir_tag3: "Data Science",
    team_mohamed_title: "إدارة أنظمة المعلومات · جميع المشاريع · أمان البنية التحتية العالمي",
    team_mohamed_contact: "على اتصال مع جميع العملاء",
    team_mohamed_desc: "مسؤول إدارة أنظمة المعلومات بـ EMIASN وجميع مشاريع EMIASN وأمان جميع البنى التحتية العالمية. واجهة مباشرة مع جميع عملاء EMIASN.",
    team_mohamed_tag1: "إدارة أنظمة المعلومات",
    team_mohamed_tag2: "أمان البنية التحتية العالمي",
    team_mohamed_tag3: "جميع المشاريع",
    team_fatoumata_title: "إدارة Data Science وضمان الجودة",
    team_fatoumata_tag1: "Data Science",
    team_fatoumata_tag2: "QA جميع المشاريع",
    team_fatoumata_tag3: "ML و Python",
    team_salif_title: "مطور Full Stack ومهندس Data Science",
    team_salif_tag1: "Full Stack",
    team_salif_tag2: "Data Science",
    team_salif_tag3: "React / Node",
    team_idrissa_title: "مدير الحسابات الكبرى وإدارة العملاء",
    team_idrissa_desc: "مدير الحسابات الكبرى ومسيرها في EMIASN، إدريسا غاساما إطار رفيع المستوى وكادر سابق في سوناتيل. يتولى إشراف التسويق ووحدات الأعمال في EMIASN، مع قيادة الاستراتيجية التجارية وتطوير العلاقات مع كبار العملاء من الشركات.",
    team_idrissa_tag1: "الحسابات الكبرى",
    team_idrissa_tag2: "إدارة العملاء",
    team_idrissa_tag3: "تطوير الأعمال",
    team_idrissa_tag4: "CRM",
    team_join_you: "وماذا عنك؟",
    team_join_desc: "انضم إلى فريق مواهب الذكاء الاصطناعي لدينا",
    team_join_btn: "عرض الفرص",
    team_culture_label: "// ثقافتنا",
    team_culture_h2: "بيئة<br/>تلهمك",
    team_culture_intro: "في EMIASN، نؤمن أن الأفكار العظيمة تولد في بيئة تقدر التنوع والاستقلالية والتعلم المستمر.",
    team_culture_training: "التدريب المستمر",
    team_culture_training_desc: "الشهادات والهاكاثونات والمؤتمرات",
    team_culture_impact: "التأثير الحقيقي في أفريقيا",
    team_culture_impact_desc: "مشاريع بتأثير اجتماعي واقتصادي",
    team_culture_diversity: "فريق متعدد الثقافات",
    team_culture_diversity_desc: "8 جنسيات، التضمين الكامل",
    team_culture_cta: "انضم إلى المغامرة",
    team_metric_satisfaction: "رضا الفريق",
    team_metric_retention: "الاحتفاظ بالمواهب",
    team_metric_delivery: "المشاريع المسلمة في الوقت المحدد",
    team_quote: "«مهمتنا هي إثبات أن أفريقيا يمكنها قيادة ثورة الذكاء الاصطناعي العالمية، وليس مجرد المشاركة فيها.»",
    team_cta_badge: "نحن نوظف",
    team_cta_h2: "موهبتك لها مكان<br/>في EMIASN",
    team_cta_p: "انضم إلى رواد الذكاء الاصطناعي في غرب أفريقيا. وظائف مفتوحة في Data Science و ML Engineering و NLP والمزيد.",
    team_cta_btn1: "عرض جميع الفرص",
    team_cta_btn2: "طلب تطوعي",
    // SERVICES page
    serv_ml_title: "التعلم الآلي",
    serv_ml_subtitle: "التنبؤ · التصنيف · التجميع",
    serv_ml_desc: "خوارزميات موجهة وغير موجهة مع Scikit-Learn. الانحدار، SVM، Random Forest، Gradient Boosting…",
    serv_dl_title: "التعلم العميق",
    serv_dl_subtitle: "CNN · RNN · Transformers",
    serv_dl_desc: "معماريات الشبكات العصبية العميقة مع TensorFlow و Keras: التعرف على الصور، توليد النصوص، السلاسل الزمنية.",
    serv_ds_title: "Data Science والتحليلات",
    serv_ds_subtitle: "استكشاف · تصور · رؤى",
    serv_ds_desc: "الاستكشاف مع NumPy و Pandas. التصور التفاعلي مع Matplotlib و Seaborn لتقارير القرار.",
    serv_cv_title: "رؤية الحاسوب",
    serv_cv_subtitle: "الكشف · التعرف · التجزئة",
    serv_cv_desc: "حلول رؤية الحاسوب للأمان والتحكم في الجودة والمراقبة. كشف الأشياء في الوقت الفعلي.",
    serv_nlp_title: "معالجة اللغة الطبيعية والترجمة",
    serv_nlp_subtitle: "التحليل · التوليد · روبوتات الدردشة",
    serv_nlp_desc: "تحليل المشاعر واستخراج الكيانات وروبوتات دردشة ذكية والترجمة إلى الفرنسية والإنجليزية والولوف.",
    serv_mlops_title: "MLOps والنشر",
    serv_mlops_subtitle: "خط أنابيب · الإنتاج · المراقبة",
    serv_mlops_desc: "نشر الإنتاج CI/CD ومراقبة الأداء وإدارة الانجراف وقابلية التوسع السحابية أو المحلية.",
    hero_badge_text: 'رواد الذكاء الاصطناعي في أفريقيا',
    hero_tagline: 'الذكاء الاصطناعي · داكار، السنغال · عالمي',
    hero_cta_primary: 'اكتشف حلولنا',
    hero_cta_secondary: 'تواصل معنا',
    stat_projects: 'مشاريع منجزée',
    stat_clients: 'عملاء كبار',
    stat_experts: 'خبراء الذكاء الاصطناعي',
    stat_countries: 'دول مغطاة',
    index_services_label: '// ما نقوم به',
    index_services_title: 'خبراتنا',
    index_why_label: '// لماذا تختارنا',
    index_why_title: 'التميز في الذكاء الاصطناعي',
    index_cta_label: '// هل أنت مستعد للبدء؟',
    index_cta_title: 'دعنا نحول عملك',
    index_cta_title2: 'بالذكاء الاصطناعي معاً',
    index_cta_p: 'دعنا نتحدث عن مشروعك. يستجيب فريقنا خلال 24 ساعة.',
    index_cta_btn1: 'ابدأ مشروعاً',
    index_cta_btn2: 'عرض أعمالنا',
    about_h1: 'قصتنا،',
    about_vision_title: 'رؤيتنا',
    about_values_title: 'قيمنا',
    about_timeline_label: '// مسيرتنا',
    services_h1: 'الخبرة في الذكاء الاصطناعي',
    services_h1_2: 'الشاملة',
    services_p: 'من التصميم إلى الإنتاج، نغطي الطيف الكامل للذكاء الاصطناعي.',
    serv_cv_sub: 'الكشف · التعرف · التحليل',
    serv_cta_title: 'هل لديك مشروع في ذهنك؟',
    serv_cta_p: 'دعنا نناقش احتياجاتك ونبني معاً الحل المناسب.',
    careers_h1: 'شكّل مستقبل الذكاء الاصطناعي',
    careers_why_label: '// لماذا EMIASN؟',
    careers_why_title2: 'تتألق فيها',
    careers_benefit1_title: 'التدريب المستمر',
    careers_benefit1_p: 'ميزانية التدريب + شهادات Google وAWS وMicrosoft',
    careers_benefit2_title: 'تأثير عالمي',
    careers_benefit2_p: 'مشاريع ذات نطاق دولي',
    careers_benefit3_title: 'المرونة',
    careers_benefit3_p: 'العمل عن بُعد الهجين وساعات مرنة',
    careers_benefit4_title: 'نمو سريع',
    careers_benefit4_p: 'خطة مهنية واضحة وترقيات على أساس الأداء',
    careers_jobs_label: '// الوظائف المتاحة',
    careers_jobs_title: 'انضم إلى المغامرة',
    careers_apply_btn: 'قدّم الآن',
    careers_no_match: 'لا يوجد منصب مناسب؟ أرسل طلباً تلقائياً.',
    careers_spontaneous: 'طلب تلقائي',
    blog_h1: 'الأخبار و',
    blog_featured: 'مميز',
    blog_read_more: 'اقرأ المقال',
    blog_min_read: 'دقيقة قراءة',
    blog_all_label: '// جميع المقالات',
    blog_newsletter_title: 'ابقَ على اطلاع',
    blog_newsletter_p: 'احصل على تحليلات الذكاء الاصطناعي في صندوق بريدك.',
    blog_newsletter_btn: 'اشترك',
    projects_label: '// أعمالنا',
    projects_h1: 'المشاريع و',
    projects_h1_2: 'حالات الاستخدام',
    projects_p: 'أكثر من 50 مشروعاً تم تسليمه عبر أفريقيا.',
    projects_status_done: 'مكتمل',
    projects_status_active: 'جارٍ',
    projects_view_btn: 'عرض المشروع',
    projects_all_label: '// جميع المشاريع',
    projects_cta_title: 'مشروعك سيكون التالي',
    projects_cta_p: 'دعنا نتحدث عن تحديك ونبني الحل الذي سيحدث الفارق.',
    solutions_label: '// الحلول القطاعية',
    solutions_h1: 'حلول الذكاء الاصطناعي',
    solutions_h1_2: 'القطاعية',
    solutions_p: 'حلول مصممة لتحديات كل قطاع في أفريقيا.',
    sol_finance_tab: 'المالية والمصارف',
    sol_telecom_tab: 'الاتصالات',
    sol_health_tab: 'الصحة',
    sol_agri_tab: 'الزراعة',
    sol_commerce_tab: 'التجارة',
    sol_finance_feat1: 'كشف الاحتيال',
    sol_finance_feat1_p: 'نماذج التعلم الآلي في الوقت الفعلي بدقة 99.2٪.',
    sol_finance_feat2: 'تسجيل الائتمان بالذكاء الاصطناعي',
    sol_finance_feat2_p: 'تقييم مخاطر الائتمان الآلي.',
    sol_finance_feat3: 'توقعات السيولة',
    sol_finance_feat3_p: 'توقع احتياجاتك من التدفق النقدي بدقة 95٪.',
    faq_h1_2: 'أسئلتك',
    faq_contact_cta: 'لم تجد إجابتك؟',
    faq_contact_btn: 'تواصل معنا',
    partners_label: '// الشركاء',
    partners_h1: 'شركاؤنا',
    partners_h1_2: 'الاستراتيجيون',
    partners_p: 'شبكة عالمية من الشركاء التكنولوجيين والأكاديميين والمؤسسيين.',
    partners_univ_title: 'الجامعات الشريكة',
    partners_rd_title: 'البحث والتطوير',
    partners_cloud_title: 'السحابة والبنية التحتية',
    partners_become_title: 'كن شريكاً',
    partners_become_p: 'انضم إلى نظامنا البيئي ودعنا نناقش فرص التعاون.',
    testimonials_label: '// الشهادات',
    testimonials_h1: 'ما يقوله',
    testimonials_h1_2: 'عملاؤنا',
    testimonials_p: 'أكثر من 50 شركة تثق بنا عبر أفريقيا وما بعدها.',
    testimonials_cta_title: 'انضم إلى عملائنا الراضين',
    testimonials_cta_btn: 'ابدأ مشروعاً',
    research_label: '// البحث والابتكار',
    research_h1: 'الابتكار و',
    research_h1_2: 'البحث',
    research_p: 'يساهم فريقنا في أبحاث الذكاء الاصطناعي مع التركيز على التحديات الأفريقية.',
    research_area1_title: 'الذكاء الاصطناعي للغات الأفريقية',
    research_area1_p: 'نماذج NLP مكيفة للغات الولوف والبامبارا والديولا.',
    research_area2_title: 'الذكاء الاصطناعي الاقتصادي للهاتف',
    research_area2_p: 'تحسين نماذج التعلم الآلي للأجهزة منخفضة الاستهلاك.',
    research_area3_title: 'التنبؤ المناخي الساحلي',
    research_area3_p: 'نماذج متخصصة لأحوال الطقس في غرب أفريقيا.',
    research_area4_title: 'الصحة المتصلة الأفريقية',
    research_area4_p: 'تشخيص بمساعدة الذكاء الاصطناعي مكيف مع البنية الصحية المحلية.',
    research_pub_label: '// المنشورات',
    research_pub_title: 'مساهماتنا العلمية',
    apply_h1_2: 'فريقنا',
    apply_submit: 'أرسل طلبي',
    privacy_label: '// قانوني',
    privacy_h1: 'سياسة',
    privacy_h1_2: 'الخصوصية',
    privacy_s1_title: '1. جمع البيانات',
    privacy_s2_title: '2. استخدام البيانات',
    privacy_s2_p: 'تُستخدم بياناتك حصراً في إطار خدماتنا.',
    privacy_s3_title: '3. الأمان',
    privacy_s3_p: 'تشفير البيانات وضوابط الوصول الصارمة والامتثال للـ GDPR.',
    privacy_s4_title: '4. حقوقك',
    privacy_s4_p: 'الوصول والتصحيح والحذف وإمكانية نقل بياناتك عند الطلب.',
    privacy_s5_title: '5. ملفات تعريف الارتباط',
    privacy_s5_p: 'نستخدم ملفات تعريف ارتباط وظيفية وتحليلية يمكن تعطيلها في إعدادات المتصفح.',
    privacy_s6_title: '6. جهة الاتصال DPO',
    privacy_s6_p: 'لأي أسئلة تتعلق ببياناتك، تواصل مع مسؤول حماية بياناتنا على privacy@emiasn.sn.',
    contact_h1: 'لنعمل',
    contact_opt_project: 'مشروع ذكاء اصطناعي',
    contact_opt_partner: 'شراكة',
    contact_opt_press: 'صحافة',
    contact_opt_other: 'أخرى',
    // SOLUTIONS — sector cards
    sol_tel_feat1: 'التنبؤ بترك العملاء',
    sol_tel_feat1_p: 'التعرف الاستباقي على العملاء المعرضين لخطر إلغاء الاشتراك.',
    sol_tel_feat2: 'تحسين الشبكة',
    sol_tel_feat2_p: 'إدارة النطاق الترددي الديناميكي والتنبؤ بالأعطال.',
    sol_tel_feat3: 'تخصيص العروض',
    sol_tel_feat3_p: 'توصيات فورية بناءً على سلوكيات الاستخدام.',
    sol_san_feat1: 'التشخيص بمساعدة الذكاء الاصطناعي',
    sol_san_feat1_p: 'تحليل التصوير الطبي لمساعدة تشخيص الأمراض الاستوائية.',
    sol_san_feat2: 'التنبؤ بالأوبئة',
    sol_san_feat2_p: 'نماذج للتنبؤ بانتشار الأوبئة.',
    sol_san_feat3: 'إدارة مخزون الأدوية',
    sol_san_feat3_p: 'تحسين ذكي لتجنب نقص الأدوية الأساسية.',
    sol_agri_feat2: 'الكشف عن الأمراض',
    sol_agri_feat2_p: 'رؤية الحاسوب للكشف عن أمراض المحاصيل عبر الطائرات المسيّرة.',
    sol_agri_feat3: 'التنبؤ الجوي بالذكاء الاصطناعي',
    sol_agri_feat3_p: 'توقعات مكيّفة مع السياق الساحلي.',
    sol_retail_feat1: 'توصيات المنتجات',
    sol_retail_feat1_p: 'محركات مخصصة تزيد متوسط السلة والولاء.',
    sol_retail_feat2: 'إدارة المخزون',
    sol_retail_feat2_p: 'التنبؤ بالطلب وتحسين المستويات تلقائياً.',
    sol_retail_feat3: 'التسعير الديناميكي',
    sol_retail_feat3_p: 'تسعير ديناميكي لتعظيم الهامش.',
    // PROJECTS — stat labels
    proj_stat1: 'مشروع مُسلَّم',
    proj_stat2: 'قطاع مغطى',
    proj_stat3: 'رضا العملاء',
    proj_stat4: 'قيمة محققة',
    // PARTNERS — org card
    partners_org_title: 'المنظمات',
    partners_org_tag: 'التأثير والتنمية',
    // RESEARCH — area 4
    research_area4_title: 'الذكاء الاصطناعي والصحة الاستوائية',
    research_area4_p: 'الكشف المبكر عن الأمراض المتوطنة من خلال التصوير الطبي.',

  },
};

// ── Browser language auto-detection ──
function detectBrowserLang() {
  const nav = (navigator.language || navigator.userLanguage || "fr")
    .substring(0, 2)
    .toLowerCase();
  if (nav === "ar") return "ar";
  if (nav === "en") return "en";
  return "fr";
}

// ── Language state ──
let currentLang = localStorage.getItem("emiasn_lang") || detectBrowserLang();
function t(key) {
  return (PT[currentLang] || {})[key] || (PT.fr || {})[key] || key;
}

function applyDir() {
  const dir = TRANSLATIONS[currentLang]?.dir || "ltr";
  document.documentElement.setAttribute("dir", dir);
  document.documentElement.setAttribute("lang", currentLang);
  if (dir === "rtl") {
    document.body.classList.add("rtl-mode");
  } else {
    document.body.classList.remove("rtl-mode");
  }
}

// ── Build Navbar ──
function buildNavbar() {
  const T = TRANSLATIONS[currentLang] || TRANSLATIONS.fr;
  const n = T.nav;
  const flags = { fr: "🇫🇷", en: "🇬🇧", ar: "🇸🇦" };
  return `
<div id="cursor" style="position:fixed;width:20px;height:20px;border:2px solid #00E5FF;border-radius:50%;pointer-events:none;z-index:9999;transform:translate(-50%,-50%);transition:width .2s,height .2s,background .2s;mix-blend-mode:difference;"></div>
<div id="cursor-dot" style="position:fixed;width:6px;height:6px;background:#00E5FF;border-radius:50%;pointer-events:none;z-index:9999;transform:translate(-50%,-50%);"></div>
<canvas id="particles-canvas" class="fixed inset-0 pointer-events-none z-0 opacity-30"></canvas>
<nav id="navbar" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
  <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
    <a href="index.html" class="flex items-center group" aria-label="EMIASN – Accueil">
      <picture>
        <source srcset="images/logo_nav.webp" type="image/webp"/>
        <img
          src="images/logo_nav.png"
          alt="EMIASN – Intelligence Artificielle Sénégal"
          width="160" height="70"
          class="nav-logo h-10 w-auto object-contain transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
          loading="eager"
        />
      </picture>
    </a>
    <div class="hidden lg:flex items-center gap-1">
      <a href="index.html"      class="nav-link px-3 py-2 text-sm font-medium text-muted hover:text-white transition-colors rounded-lg hover:bg-white/5 ${PAGE === "home" ? "!text-primary bg-white/5" : ""}">${n.home}</a>
      <a href="about.html"      class="nav-link px-3 py-2 text-sm font-medium text-muted hover:text-white transition-colors rounded-lg hover:bg-white/5 ${PAGE === "about" ? "!text-primary bg-white/5" : ""}">${n.about}</a>
      <a href="services.html"   class="nav-link px-3 py-2 text-sm font-medium text-muted hover:text-white transition-colors rounded-lg hover:bg-white/5 ${PAGE === "services" ? "!text-primary bg-white/5" : ""}">${n.services}</a>
      <a href="solutions.html"  class="nav-link px-3 py-2 text-sm font-medium text-muted hover:text-white transition-colors rounded-lg hover:bg-white/5 ${PAGE === "solutions" ? "!text-primary bg-white/5" : ""}">${n.solutions}</a>
      <a href="team.html"       class="nav-link px-3 py-2 text-sm font-medium text-muted hover:text-white transition-colors rounded-lg hover:bg-white/5 ${PAGE === "team" ? "!text-primary bg-white/5" : ""}">${n.team}</a>
      <a href="projects.html"   class="nav-link px-3 py-2 text-sm font-medium text-muted hover:text-white transition-colors rounded-lg hover:bg-white/5 ${PAGE === "projects" ? "!text-primary bg-white/5" : ""}">${n.projects}</a>
      <a href="careers.html"    class="nav-link px-3 py-2 text-sm font-medium text-muted hover:text-white transition-colors rounded-lg hover:bg-white/5 ${PAGE === "careers" ? "!text-primary bg-white/5" : ""}">${n.careers}</a>
      <a href="blog.html"       class="nav-link px-3 py-2 text-sm font-medium text-muted hover:text-white transition-colors rounded-lg hover:bg-white/5 ${PAGE === "blog" ? "!text-primary bg-white/5" : ""}">${n.blog}</a>
      <div class="relative ml-1" id="lang-dd-wrap">
        <button onclick="toggleLangDD()" id="lang-btn" class="group flex items-center gap-2 px-3 py-2 rounded-xl border border-border bg-card/60 text-muted hover:text-white hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 text-sm" aria-label="Changer la langue">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
          <span class="font-mono text-xs font-semibold uppercase tracking-wider">${currentLang}</span>
          <svg id="lang-chevron" xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 opacity-50 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </button>
        <div id="lang-dd" class="lang-dropdown hidden absolute right-0 top-[calc(100%+8px)] w-52 rounded-2xl border border-border/80 bg-[#0D1117]/98 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden z-50">
          <div class="p-1.5">
            <div class="px-3 py-2 mb-1">
              <p class="text-[10px] font-mono uppercase tracking-widest text-muted/60">Langue / Language</p>
            </div>
            <button onclick="setLang('fr')" class="lang-option w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-150 ${currentLang === "fr" ? "bg-primary/10 text-white" : "text-muted hover:bg-white/5 hover:text-white"}">
              <span class="text-xl leading-none">🇫🇷</span>
              <div class="flex flex-col items-start">
                <span class="text-sm font-medium leading-tight">Français</span>
                <span class="text-[10px] text-muted/60 leading-tight">French</span>
              </div>
              ${currentLang === "fr" ? '<svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-primary ml-auto shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>' : ""}
            </button>
            <button onclick="setLang('en')" class="lang-option w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-150 ${currentLang === "en" ? "bg-primary/10 text-white" : "text-muted hover:bg-white/5 hover:text-white"}">
              <span class="text-xl leading-none">🇬🇧</span>
              <div class="flex flex-col items-start">
                <span class="text-sm font-medium leading-tight">English</span>
                <span class="text-[10px] text-muted/60 leading-tight">Anglais</span>
              </div>
              ${currentLang === "en" ? '<svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-primary ml-auto shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>' : ""}
            </button>
            <button onclick="setLang('ar')" class="lang-option w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-150 ${currentLang === "ar" ? "bg-primary/10 text-white" : "text-muted hover:bg-white/5 hover:text-white"}">
              <span class="text-xl leading-none">🇸🇦</span>
              <div class="flex flex-col items-start">
                <span class="text-sm font-medium leading-tight">العربية</span>
                <span class="text-[10px] text-muted/60 leading-tight">Arabic</span>
              </div>
              ${currentLang === "ar" ? '<svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-primary ml-auto shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>' : ""}
            </button>
          </div>
          <div class="px-4 py-2 border-t border-border/50 flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 text-primary/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
            <span class="text-[10px] text-muted/50 font-mono">3 langues disponibles</span>
          </div>
        </div>
      </div>
      <a href="contact.html" class="ml-2 px-5 py-2 bg-primary text-dark text-sm font-semibold rounded-lg hover:bg-cyan-300 transition-all hover:scale-105">${n.contact}</a>
    </div>
    <div class="lg:hidden flex items-center gap-2">
      <div class="relative" id="lang-dd-mob-wrap">
        <button onclick="toggleLangDD('mob')" id="lang-btn-mob" class="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border border-border bg-card/60 text-muted hover:text-white hover:border-primary/40 transition-all text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
          <span class="font-mono text-xs font-semibold uppercase">${currentLang}</span>
        </button>
        <div id="lang-dd-mob" class="lang-dropdown hidden absolute right-0 top-[calc(100%+8px)] w-48 rounded-2xl border border-border/80 bg-[#0D1117]/98 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden z-50">
          <div class="p-1.5">
            <button onclick="setLang('fr')" class="lang-option w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-150 ${currentLang === "fr" ? "bg-primary/10 text-white" : "text-muted hover:bg-white/5 hover:text-white"}">
              <span class="text-lg leading-none">🇫🇷</span>
              <div class="flex flex-col items-start"><span class="text-sm font-medium">Français</span></div>
              ${currentLang === "fr" ? '<svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 text-primary ml-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>' : ""}
            </button>
            <button onclick="setLang('en')" class="lang-option w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-150 ${currentLang === "en" ? "bg-primary/10 text-white" : "text-muted hover:bg-white/5 hover:text-white"}">
              <span class="text-lg leading-none">🇬🇧</span>
              <div class="flex flex-col items-start"><span class="text-sm font-medium">English</span></div>
              ${currentLang === "en" ? '<svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 text-primary ml-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>' : ""}
            </button>
            <button onclick="setLang('ar')" class="lang-option w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-150 ${currentLang === "ar" ? "bg-primary/10 text-white" : "text-muted hover:bg-white/5 hover:text-white"}">
              <span class="text-lg leading-none">🇸🇦</span>
              <div class="flex flex-col items-start"><span class="text-sm font-medium">العربية</span></div>
              ${currentLang === "ar" ? '<svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 text-primary ml-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>' : ""}
            </button>
          </div>
        </div>
      </div>
      <button id="menu-toggle" class="w-10 h-10 flex flex-col gap-1.5 items-center justify-center" onclick="toggleMobileMenu()">
        <span class="w-6 h-0.5 bg-white transition-all duration-300" id="bar1"></span>
        <span class="w-6 h-0.5 bg-white transition-all duration-300" id="bar2"></span>
        <span class="w-4 h-0.5 bg-white transition-all duration-300" id="bar3"></span>
      </button>
    </div>
  </div>
  <div id="mobile-menu" class="lg:hidden hidden bg-card/95 backdrop-blur-xl border-t border-border px-6 py-4">
    <div class="flex flex-col gap-2">
      <a href="index.html"     class="px-4 py-3 text-sm text-muted hover:text-white hover:bg-white/5 rounded-lg">${n.home}</a>
      <a href="about.html"     class="px-4 py-3 text-sm text-muted hover:text-white hover:bg-white/5 rounded-lg">${n.about}</a>
      <a href="services.html"  class="px-4 py-3 text-sm text-muted hover:text-white hover:bg-white/5 rounded-lg">${n.services}</a>
      <a href="solutions.html" class="px-4 py-3 text-sm text-muted hover:text-white hover:bg-white/5 rounded-lg">${n.solutions}</a>
      <a href="team.html"      class="px-4 py-3 text-sm text-muted hover:text-white hover:bg-white/5 rounded-lg">${n.team}</a>
      <a href="projects.html"  class="px-4 py-3 text-sm text-muted hover:text-white hover:bg-white/5 rounded-lg">${n.projects}</a>
      <a href="careers.html"   class="px-4 py-3 text-sm text-muted hover:text-white hover:bg-white/5 rounded-lg">${n.careers}</a>
      <a href="blog.html"      class="px-4 py-3 text-sm text-muted hover:text-white hover:bg-white/5 rounded-lg">${n.blog}</a>
      <a href="contact.html"   class="mt-2 px-5 py-3 bg-primary text-dark text-sm font-semibold rounded-lg text-center block">${n.contact}</a>
    </div>
  </div>
</nav>`;
}

// ── Build Footer ──
function buildFooter() {
  const T = TRANSLATIONS[currentLang] || TRANSLATIONS.fr;
  const f = T.footer;
  return `
<footer class="border-t border-border bg-card/50">
  <div class="max-w-7xl mx-auto px-6 py-16">
    <div class="grid md:grid-cols-4 gap-10 mb-12">
      <div>
        <a href="index.html" class="flex items-center mb-5 group w-fit" aria-label="EMIASN – Accueil">
          <picture>
            <source srcset="images/logo_footer.webp" type="image/webp"/>
            <img
              src="images/logo_nav.png"
              alt="EMIASN – Intelligence Artificielle Sénégal"
              width="180" height="79"
              class="footer-logo h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
              loading="lazy"
            />
          </picture>
        </a>
        <p class="text-muted text-sm leading-relaxed mb-4">${f.tagline}</p>
        <div class="flex gap-3">
          <a href="#" class="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary/50 transition-all"><i class="fab fa-linkedin-in text-sm"></i></a>
          <a href="#" class="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary/50 transition-all"><i class="fab fa-twitter text-sm"></i></a>
          <a href="#" class="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary/50 transition-all"><i class="fab fa-github text-sm"></i></a>
          <a href="#" class="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary/50 transition-all"><i class="fab fa-youtube text-sm"></i></a>
        </div>
      </div>
      <div>
        <h4 class="font-syne font-bold mb-4">${f.nav}</h4>
        <div class="space-y-2">
          <a href="about.html"     class="block text-muted text-sm hover:text-primary transition-colors">${f.links.about}</a>
          <a href="services.html"  class="block text-muted text-sm hover:text-primary transition-colors">${f.links.services}</a>
          <a href="solutions.html" class="block text-muted text-sm hover:text-primary transition-colors">${f.links.solutions}</a>
          <a href="projects.html"  class="block text-muted text-sm hover:text-primary transition-colors">${f.links.projects}</a>
          <a href="research.html"  class="block text-muted text-sm hover:text-primary transition-colors">${f.links.research}</a>
          <a href="partners.html"  class="block text-muted text-sm hover:text-primary transition-colors">${f.links.partners}</a>
        </div>
      </div>
      <div>
        <h4 class="font-syne font-bold mb-4">${f.resources}</h4>
        <div class="space-y-2">
          <a href="blog.html"         class="block text-muted text-sm hover:text-primary transition-colors">${f.links.blog}</a>
          <a href="testimonials.html" class="block text-muted text-sm hover:text-primary transition-colors">${f.links.testimonials}</a>
          <a href="faq.html"          class="block text-muted text-sm hover:text-primary transition-colors">${f.links.faq}</a>
          <a href="careers.html"      class="block text-muted text-sm hover:text-primary transition-colors">${f.links.careers}</a>
          <a href="privacy.html"      class="block text-muted text-sm hover:text-primary transition-colors">${f.links.privacy}</a>
        </div>
      </div>
      <div>
        <h4 class="font-syne font-bold mb-4">${f.contactTitle}</h4>
        <div class="space-y-3 text-sm text-muted">
          <div class="flex items-start gap-2"><i class="fas fa-map-marker-alt text-primary mt-0.5 text-xs shrink-0"></i><span>${f.address}</span></div>
          <div class="flex items-center gap-2"><i class="fas fa-envelope text-primary text-xs shrink-0"></i><a href="mailto:ndaoibrahima037@gmail.com" class="hover:text-primary transition-colors break-all">ndaoibrahima037@gmail.com</a></div>
          <div class="flex items-center gap-2"><i class="fas fa-phone text-primary text-xs shrink-0"></i><a href="tel:+221781565039" class="hover:text-primary transition-colors">+221 78 156 50 39</a></div>
        </div>
      </div>
    </div>
    <div class="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-muted text-sm">
      <div>${f.rights}</div>
      <div class="flex items-center gap-4">
        <span class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>${f.status}</span>
        <span class="font-mono text-xs">v3.0.0</span>
      </div>
    </div>
  </div>
</footer>
<div id="toast" class="fixed bottom-6 right-6 z-[9999] hidden">
  <div class="flex items-center gap-3 px-5 py-4 rounded-xl bg-green-500/20 border border-green-500/40 backdrop-blur-xl text-white text-sm">
    <i class="fas fa-check-circle text-green-400"></i>
    <span id="toast-message">Message envoyé !</span>
  </div>
</div>`;
}

// ── Translate data-i18n elements ──
function translatePage() {
  // Translate text content / placeholder / HTML
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const val = t(key);
    if (!val || val === key) return;
    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
      el.placeholder = val;
    } else if (el.dataset.i18nHtml !== undefined) {
      el.innerHTML = val;
    } else {
      el.textContent = val;
    }
  });
  // Translate placeholder only (separate from text content)
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const val = t(el.dataset.i18nPh);
    if (val && val !== el.dataset.i18nPh) el.placeholder = val;
  });
  // Update page <title>
  const titleKey = document.body.dataset.i18nTitle;
  if (titleKey) {
    const val = t(titleKey);
    if (val && val !== titleKey) document.title = val + " – EMIASN";
  }
  // Update RTL-aware font for Arabic
  if (currentLang === "ar") {
    document.body.style.fontFamily = "'Noto Sans Arabic', 'Plus Jakarta Sans', sans-serif";
  } else {
    document.body.style.fontFamily = "";
  }
}

// ── Language switching ──
function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("emiasn_lang", lang);
  applyDir();
  const nw = document.getElementById("emiasn-nav-wrapper");
  if (nw) nw.innerHTML = buildNavbar();
  const fw = document.getElementById("emiasn-foot-wrapper");
  if (fw) fw.innerHTML = buildFooter();
  translatePage();
  initScrollListener();
  initCursorListeners();
}

// ── Language Dropdown (beautiful animated version) ──
function toggleLangDD(variant) {
  const ddId = variant === "mob" ? "lang-dd-mob" : "lang-dd";
  const btnId = variant === "mob" ? "lang-btn-mob" : "lang-btn";
  const othId = variant === "mob" ? "lang-dd" : "lang-dd-mob";
  const dd = document.getElementById(ddId);
  const btn = document.getElementById(btnId);
  const other = document.getElementById(othId);
  // close other dropdown
  other?.classList.add("hidden");
  other?.classList.remove("dd-open");
  if (!dd) return;
  const isOpen = dd.classList.contains("dd-open");
  if (isOpen) {
    dd.classList.remove("dd-open");
    setTimeout(() => dd.classList.add("hidden"), 200);
    if (btn)
      btn.querySelector("#lang-chevron, svg:last-child")?.style &&
        (btn.querySelector("svg:last-child").style.transform = "");
  } else {
    dd.classList.remove("hidden");
    requestAnimationFrame(() => dd.classList.add("dd-open"));
    if (btn && !variant) {
      const chev = btn.querySelector("#lang-chevron");
      if (chev) chev.style.transform = "rotate(180deg)";
    }
  }
}

document.addEventListener("click", (e) => {
  if (
    !e.target.closest("#lang-dd-wrap") &&
    !e.target.closest("#lang-dd-mob-wrap")
  ) {
    ["lang-dd", "lang-dd-mob"].forEach((id) => {
      const el = document.getElementById(id);
      if (el && el.classList.contains("dd-open")) {
        el.classList.remove("dd-open");
        setTimeout(() => el.classList.add("hidden"), 200);
      }
    });
    const chev = document.getElementById("lang-chevron");
    if (chev) chev.style.transform = "";
  }
});

// Inject lang-switcher CSS once
(function injectLangCSS() {
  if (document.getElementById("lang-dd-style")) return;
  const s = document.createElement("style");
  s.id = "lang-dd-style";
  s.textContent = `
    .lang-dropdown {
      transform-origin: top right;
      transform: scale(0.92) translateY(-6px);
      opacity: 0;
      transition: transform 0.2s cubic-bezier(.16,1,.3,1), opacity 0.18s ease;
      pointer-events: none;
    }
    .lang-dropdown.dd-open {
      transform: scale(1) translateY(0);
      opacity: 1;
      pointer-events: auto;
    }
    .lang-option {
      position: relative;
      overflow: hidden;
    }
    .lang-option::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(90deg, rgba(0,229,255,0.06), transparent);
      opacity: 0;
      transition: opacity 0.15s;
    }
    .lang-option:hover::after { opacity: 1; }
    #lang-btn svg:last-child, #lang-btn-mob svg:last-child {
      transition: transform 0.2s cubic-bezier(.16,1,.3,1);
    }
  `;
  document.head.appendChild(s);
})();

// ════════════════════════════════════════════════
//  INIT
// ════════════════════════════════════════════════
document.addEventListener("DOMContentLoaded", () => {
  applyDir();

  const nw = document.createElement("div");
  nw.id = "emiasn-nav-wrapper";
  nw.innerHTML = buildNavbar();
  document.body.insertBefore(nw, document.body.firstChild);

  const fw = document.createElement("div");
  fw.id = "emiasn-foot-wrapper";
  fw.innerHTML = buildFooter();
  document.body.appendChild(fw);

  translatePage();
  initScrollListener();
  initCursor();
  initParticles();
  initScrollAnimations();
  initCounters();
});

function initScrollListener() {
  window.addEventListener("scroll", () => {
    const nav = document.getElementById("navbar");
    if (nav) nav.classList.toggle("scrolled", window.scrollY > 20);
  });
}

function initCursor() {
  const cursor = document.getElementById("cursor");
  const cursorDot = document.getElementById("cursor-dot");
  if (!cursor || !cursorDot) return;
  let mx = 0,
    my = 0,
    cx = 0,
    cy = 0;
  document.addEventListener("mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
    cursorDot.style.left = mx + "px";
    cursorDot.style.top = my + "px";
  });
  (function anim() {
    cx += (mx - cx) * 0.12;
    cy += (my - cy) * 0.12;
    cursor.style.left = cx + "px";
    cursor.style.top = cy + "px";
    requestAnimationFrame(anim);
  })();
  initCursorListeners();
}

function initCursorListeners() {
  const cursor = document.getElementById("cursor");
  if (!cursor) return;
  const INTERACTIVE = "a,button,input,select,textarea,[data-cursor-hover]";
  document.querySelectorAll(INTERACTIVE).forEach((el) => {
    el.addEventListener("mouseenter", () => cursor.classList.add("cursor-hover"));
    el.addEventListener("mouseleave", () => cursor.classList.remove("cursor-hover"));
  });
  // Also observe dynamically added elements (e.g. navbar links)
  const mo = new MutationObserver(() => {
    document.querySelectorAll(INTERACTIVE).forEach((el) => {
      if (!el._cursorBound) {
        el._cursorBound = true;
        el.addEventListener("mouseenter", () => cursor.classList.add("cursor-hover"));
        el.addEventListener("mouseleave", () => cursor.classList.remove("cursor-hover"));
      }
    });
  });
  mo.observe(document.body, { childList: true, subtree: true });
}

function initParticles() {
  const canvas = document.getElementById("particles-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  function resize() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);
  const pts = Array.from({ length: 70 }, () => ({
    x: Math.random() * innerWidth,
    y: Math.random() * innerHeight,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
    size: Math.random() * 1.5 + 0.5,
    alpha: Math.random() * 0.4 + 0.1,
    life: Math.random() * 200 + 100,
    age: 0,
  }));
  function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pts.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;
      p.age++;
      if (
        p.age > p.life ||
        p.x < 0 ||
        p.x > canvas.width ||
        p.y < 0 ||
        p.y > canvas.height
      )
        Object.assign(p, {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          age: 0,
        });
      pts.slice(i + 1).forEach((q) => {
        const dx = p.x - q.x,
          dy = p.y - q.y,
          d = Math.sqrt(dx * dx + dy * dy);
        if (d < 100) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = `rgba(0,229,255,${(1 - d / 100) * 0.07})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });
      const fade =
        p.age < 20
          ? p.age / 20
          : p.age > p.life - 20
            ? (p.life - p.age) / 20
            : 1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0,229,255,${p.alpha * fade})`;
      ctx.fill();
    });
    requestAnimationFrame(tick);
  }
  tick();
}

// ── Mobile menu ──
function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  const b1 = document.getElementById("bar1"),
    b2 = document.getElementById("bar2"),
    b3 = document.getElementById("bar3");
  const open = !menu.classList.contains("hidden");
  menu.classList.toggle("hidden");
  if (!open) {
    b1.style.transform = "rotate(45deg) translate(5px,5px)";
    b2.style.opacity = "0";
    b3.style.transform = "rotate(-45deg) translate(5px,-5px)";
    b3.style.width = "1.5rem";
  } else {
    b1.style.transform = "";
    b2.style.opacity = "1";
    b3.style.transform = "";
  }
}

// ── Toast ──
function showToast(msg) {
  const t = document.getElementById("toast");
  document.getElementById("toast-message").textContent = msg;
  t.classList.remove("hidden");
  setTimeout(() => t.classList.add("hidden"), 3500);
}

// ── FAQ ──
function toggleFaq(btn) {
  const answer = btn.nextElementSibling,
    icon = btn.querySelector("i");
  const isOpen = !answer.classList.contains("hidden");
  document
    .querySelectorAll(".faq-answer")
    .forEach((a) => a.classList.add("hidden"));
  document.querySelectorAll(".faq-item button i").forEach((i) => {
    i.classList.replace("fa-minus", "fa-plus");
  });
  if (!isOpen) {
    answer.classList.remove("hidden");
    icon.classList.replace("fa-plus", "fa-minus");
  }
}

// ── Counter animation ──
function animateCounters() {
  document.querySelectorAll(".counter").forEach((el) => {
    const target = parseInt(el.dataset.target);
    let cur = 0,
      step = target / 60;
    const timer = setInterval(() => {
      cur = Math.min(cur + step, target);
      el.textContent = Math.floor(cur) + "+";
      if (cur >= target) clearInterval(timer);
    }, 25);
  });
}

// ── Sector tabs ──
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("sector-tab")) {
    const s = e.target.dataset.sector;
    document.querySelectorAll(".sector-tab").forEach((t) => {
      t.classList.remove(
        "active",
        "bg-primary/10",
        "border-primary",
        "text-primary",
      );
      t.classList.add("border-border", "text-muted");
    });
    e.target.classList.add(
      "active",
      "bg-primary/10",
      "border-primary",
      "text-primary",
    );
    e.target.classList.remove("border-border", "text-muted");
    document
      .querySelectorAll(".sector-panel")
      .forEach((p) => p.classList.toggle("hidden", p.dataset.panel !== s));
  }
});

// ════════════════════════════════════════════════
//  SCROLL ANIMATIONS (IntersectionObserver)
// ════════════════════════════════════════════════
function initScrollAnimations() {
  // Elements that already have reveal classes in HTML
  const explicitSelectors = ".reveal,.reveal-left,.reveal-right,.reveal-scale,.reveal-up";

  // Auto-inject reveal classes onto common patterns if not already present
  const autoReveal = [
    { sel: "section h2:not([class*=reveal])", cls: "reveal-up" },
    { sel: "section > p.text-muted:not([class*=reveal])", cls: "reveal-up" },
    { sel: ".service-card:not([class*=reveal])", cls: "reveal-scale" },
    { sel: ".card-lift:not([class*=reveal])", cls: "reveal" },
    { sel: ".stat-card:not([class*=reveal])", cls: "reveal-scale" },
    { sel: ".glass-card:not([class*=reveal])", cls: "reveal" },
    { sel: ".stagger-grid > *:not([class*=reveal])", cls: "reveal" },
    { sel: "main > div > h1:not([class*=reveal])", cls: "reveal-up" },
  ];

  autoReveal.forEach(({ sel, cls }) => {
    document.querySelectorAll(sel).forEach((el) => el.classList.add(cls));
  });

  // Apply stagger delays inside stagger-grid containers
  document.querySelectorAll(".stagger-grid").forEach((grid) => {
    Array.from(grid.children).forEach((child, i) => {
      child.style.transitionDelay = `${i * 80}ms`;
    });
  });

  // Handle grid rows (multiple cards side by side) — stagger by column position
  document.querySelectorAll(".grid").forEach((grid) => {
    const cards = grid.querySelectorAll(".service-card,.card-lift,.stat-card");
    cards.forEach((card, i) => {
      if (!card.style.transitionDelay) {
        card.style.transitionDelay = `${(i % 4) * 90}ms`;
      }
    });
  });

  const observerOpts = {
    root: null,
    rootMargin: "0px 0px -60px 0px",
    threshold: 0.08,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // animate once
      }
    });
  }, observerOpts);

  // Observe explicit + auto-injected
  const allRevealEls = document.querySelectorAll(
    ".reveal,.reveal-left,.reveal-right,.reveal-scale,.reveal-up"
  );
  allRevealEls.forEach((el) => observer.observe(el));

  // Re-run for dynamically added elements (e.g. FAQ items, modals)
  const mo = new MutationObserver((mutations) => {
    mutations.forEach((m) => {
      m.addedNodes.forEach((node) => {
        if (node.nodeType !== 1) return;
        const revealEls = node.querySelectorAll
          ? node.querySelectorAll(".reveal,.reveal-left,.reveal-right,.reveal-scale,.reveal-up")
          : [];
        revealEls.forEach((el) => {
          if (!el.classList.contains("visible")) observer.observe(el);
        });
        if (
          node.classList &&
          (node.classList.contains("reveal") ||
            node.classList.contains("reveal-left") ||
            node.classList.contains("reveal-right") ||
            node.classList.contains("reveal-scale") ||
            node.classList.contains("reveal-up"))
        ) {
          observer.observe(node);
        }
      });
    });
  });
  mo.observe(document.body, { childList: true, subtree: true });
}

// ════════════════════════════════════════════════
//  ANIMATED COUNTERS
// ════════════════════════════════════════════════
function initCounters() {
  const counters = document.querySelectorAll(".counter[data-target]");
  if (!counters.length) return;

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseFloat(el.dataset.target);
        const suffix = el.dataset.suffix || "";
        const decimals = el.dataset.decimals ? parseInt(el.dataset.decimals) : 0;
        const duration = 1800;
        const start = performance.now();

        function update(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          // Ease out expo
          const eased = 1 - Math.pow(2, -10 * progress);
          const current = target * eased;
          el.textContent = current.toFixed(decimals) + suffix;
          if (progress < 1) requestAnimationFrame(update);
          else el.textContent = target.toFixed(decimals) + suffix;
        }
        requestAnimationFrame(update);
        counterObserver.unobserve(el);
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((el) => counterObserver.observe(el));
}

// ════════════════════════════════════════════════
//  SÉCURITÉ FORMULAIRES — Sanitisation & Protection
// ════════════════════════════════════════════════

/** Supprime les balises HTML/JS d'une chaîne (anti-XSS) */
function sanitize(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;")
    .trim();
}

/** Tronque une chaîne à maxLen caractères */
function truncate(str, maxLen) {
  return String(str).slice(0, maxLen);
}

/** Rate-limiting côté client : max 1 envoi / 60 secondes par formulaire */
const _formLastSent = {};
function canSubmit(formId) {
  const now = Date.now();
  const last = _formLastSent[formId] || 0;
  if (now - last < 60000) {
    showToast("⏳ Veuillez patienter avant d'envoyer un nouveau message.");
    return false;
  }
  _formLastSent[formId] = now;
  return true;
}

/** Vérifie le champ honeypot (doit rester vide — rempli = bot) */
function isBot(honeypotId) {
  const hp = document.getElementById(honeypotId);
  return hp && hp.value.length > 0;
}

// ════════════════════════════════════════════════
//  CONTACT FORM  – Web3Forms (emails → ndaoibrahima037@gmail.com)
//  Clé d'accès : https://web3forms.com  →  entrez votre email → copiez la clé
// ════════════════════════════════════════════════
const WEB3FORMS_KEY = "VOTRE_CLE_ICI"; // ← Remplacez par votre clé Web3Forms

async function sendContactForm() {
  // Anti-bot honeypot check
  if (isBot("contact-honeypot")) return;
  // Rate limiting
  if (!canSubmit("contact")) return;

  const fname    = truncate(document.getElementById("contact-fname")?.value.trim()    || "", 100);
  const lname    = truncate(document.getElementById("contact-lname")?.value.trim()    || "", 100);
  const emailVal = truncate(document.getElementById("contact-email")?.value.trim()    || "", 254);
  const company  = truncate(sanitize(document.getElementById("contact-company")?.value.trim()  || ""), 200);
  const subjectEl = document.getElementById("contact-subject");
  const subject  = sanitize(subjectEl?.options[subjectEl.selectedIndex]?.text || "Contact");
  const message  = truncate(sanitize(document.getElementById("contact-message")?.value.trim()  || ""), 5000);
  const phone    = truncate(document.getElementById("contact-phone")?.value.trim()    || "", 30);

  // ── Validation ──
  if (!emailVal || !message) {
    showToast("⚠️ " + (t("form_error_required") || "Veuillez remplir l'email et le message."));
    return;
  }
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(emailVal)) {
    showToast("⚠️ " + (t("form_error_email") || "Adresse email invalide."));
    return;
  }

  // ── UI: loading state ──
  const btn = document.getElementById("contact-submit-btn");
  const btnText = document.getElementById("contact-btn-text");
  const btnIcon = document.getElementById("contact-btn-icon");
  if (btn) { btn.disabled = true; btn.classList.add("opacity-70"); }
  if (btnText) btnText.textContent = t("sending") || "Envoi en cours...";
  if (btnIcon) btnIcon.className = "fas fa-spinner fa-spin";

  // ── Si pas encore configuré : fallback mailto ──
  if (WEB3FORMS_KEY === "VOTRE_CLE_ICI") {
    const body = `Nom: ${fname} ${lname}\nEntreprise: ${company}\nTéléphone: ${phone}\nEmail: ${emailVal}\nSujet: ${subject}\n\nMessage:\n${message}`;
    window.location.href = `mailto:ndaoibrahima037@gmail.com?subject=${encodeURIComponent("EMIASN – " + subject)}&body=${encodeURIComponent(body)}`;
    setTimeout(() => {
      showToast(t("toast_contact") || "✅ Message envoyé !");
      resetContactForm(btn, btnText, btnIcon);
    }, 800);
    return;
  }

  // ── Envoi Web3Forms ──
  try {
    const formData = {
      access_key: WEB3FORMS_KEY,
      subject: "EMIASN – " + subject,
      from_name: (fname + " " + lname).trim() || "Visiteur EMIASN",
      email: emailVal,
      // Contenu structuré du message
      message:
        `👤 Expéditeur : ${fname} ${lname}\n` +
        `🏢 Entreprise : ${company || "—"}\n` +
        `📧 Email      : ${emailVal}\n` +
        `📞 Téléphone  : ${phone || "—"}\n` +
        `📌 Sujet      : ${subject}\n\n` +
        `💬 Message :\n${message}`,
      // Champs cachés
      redirect: "false",
      replyto: emailVal,
    };

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      showToast(t("toast_contact") || "✅ Message envoyé ! Nous vous répondrons sous 24h.");
      // Vider le formulaire
      ["contact-fname","contact-lname","contact-email","contact-company","contact-phone","contact-message"]
        .forEach(id => { const el = document.getElementById(id); if (el) el.value = ""; });
    } else {
      throw new Error(data.message || "Erreur serveur");
    }
  } catch (err) {
    console.error("Web3Forms error:", err);
    showToast("❌ " + (t("form_error_send") || "Échec de l'envoi. Réessayez ou écrivez à ndaoibrahima037@gmail.com"));
  } finally {
    resetContactForm(btn, btnText, btnIcon);
  }
}

function resetContactForm(btn, btnText, btnIcon) {
  if (btn) { btn.disabled = false; btn.classList.remove("opacity-70"); }
  if (btnText) btnText.textContent = t("send_btn") || "Envoyer le Message";
  if (btnIcon) btnIcon.className = "fas fa-paper-plane";
}
