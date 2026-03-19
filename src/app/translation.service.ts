import { Injectable, signal } from '@angular/core';

export type Lang = 'fr' | 'en' | 'ar';

const STORAGE_KEY = 'nextoria_lang';

export interface TranslationData {
  nav: { home: string; howItWorks: string; test: string; impact: string; about: string; contact: string };
  lang: { en: string; fr: string; ar: string };
  hero: {
    badge: string; title: string; subtitle: string; description: string; cta: string;
    stat1: { value: string; label: string };
    stat2: { value: string; label: string };
    stat3: { value: string; label: string };
  };
  hiw: {
    title: string; subtitle: string;
    step1: { label: string; title: string; desc: string };
    step2: { label: string; title: string; desc: string };
    step3: { label: string; title: string; desc: string };
  };
  test: {
    title: string; subtitle: string; questionOf: string; next: string; finish: string;
    options: string[]; questions: string[];
  };
  impact: {
    title: string; subtitle: string;
    card1: { title: string; desc: string };
    card2: { title: string; desc: string };
    card3: { title: string; desc: string };
    card4: { title: string; desc: string };
  };
  about: { title: string; desc: string; tag1: string; tag2: string; tag3: string };
  contact: {
    title: string; subtitle: string;
    nameLabel: string; namePlaceholder: string;
    emailLabel: string; emailPlaceholder: string;
    msgLabel: string; msgPlaceholder: string;
    submit: string; success: string;
  };
  footer: { copy: string };
}

const translations: Record<Lang, TranslationData> = {
  // ─── FRENCH (default) ────────────────────────────────────────────────────────
  fr: {
    nav: { home: 'Accueil', howItWorks: 'Comment ça marche', test: 'Test', impact: 'Impact', about: 'À propos', contact: 'Contact' },
    lang: { en: 'English', fr: 'Français', ar: 'العربية' },
    hero: {
      badge: "Propulsé par l'IA",
      title: 'NEXTORIA',
      subtitle: "La plateforme d'IA pour l'orientation professionnelle",
      description: "NEXTORIA est une plateforme numérique innovante qui utilise les technologies d'intelligence artificielle pour analyser les compétences et les intérêts des jeunes, et leur fournir des conseils professionnels personnalisés basés sur des données précises.",
      cta: "Démarrer le test d'orientation",
      stat1: { value: '12', label: 'Domaines professionnels' },
      stat2: { value: '93%', label: 'Précision des recommandations' },
      stat3: { value: '5000+', label: 'Utilisateurs' },
    },
    hiw: {
      title: 'Comment fonctionne NEXTORIA',
      subtitle: "La plateforme s'appuie sur un système interactif avancé en trois étapes",
      step1: { label: 'Étape 01', title: 'Répondre à des questions analytiques', desc: "Des questions conçues avec soin pour analyser vos intérêts, compétences et personnalité professionnelle." },
      step2: { label: 'Étape 02', title: 'Traitement des données', desc: "Un algorithme intelligent analyse vos réponses et les compare à notre base de données de métiers et de parcours." },
      step3: { label: 'Étape 03', title: 'Recommandations professionnelles personnalisées', desc: "Un rapport complet incluant les domaines les plus adaptés, avec un plan de développement des compétences." },
    },
    test: {
      title: "Test d'orientation intelligent",
      subtitle: "Répondez à une série de questions pour découvrir votre profil professionnel",
      questionOf: 'Question {current} sur {total}', next: 'Suivant', finish: 'Terminer le test',
      options: ["Je préfère travailler en équipe", "Je préfère travailler seul(e)", "Je préfère diriger l'équipe", "Cela dépend du projet"],
      questions: ["Comment préférez-vous travailler ?", "Quel est votre principal domaine d'intérêt ?", "Comment gérez-vous les problèmes complexes ?", "Quel type d'environnement de travail recherchez-vous ?", "Qu'est-ce qui vous motive le plus dans le travail ?", "Comment préférez-vous acquérir de nouvelles compétences ?", "Quel est votre niveau de confort avec la technologie ?", "Où vous voyez-vous dans 5 ans ?"],
    },
    impact: {
      title: 'Impact social', subtitle: 'Le projet NEXTORIA contribue à des objectifs de développement importants',
      card1: { title: 'Autonomisation des jeunes', desc: 'Aider les jeunes à prendre des décisions de carrière éclairées, adaptées à leurs capacités.' },
      card2: { title: 'Orientation précise', desc: "Fournir une orientation précise basée sur des données et une analyse scientifique, plutôt que sur des choix aléatoires." },
      card3: { title: 'Réduire l\'écart formation-emploi', desc: 'Aligner les parcours éducatifs sur les besoins réels et futurs du marché du travail.' },
      card4: { title: 'Renforcer la transformation numérique au Maroc', desc: 'Contribuer à la digitalisation des services éducatifs et professionnels avec des outils modernes.' },
    },
    about: {
      title: 'À propos du projet',
      desc: "NEXTORIA est un projet innovant qui vise à autonomiser les jeunes en utilisant l'intelligence artificielle pour offrir des solutions modernes dans le domaine de l'orientation professionnelle, avec la possibilité de le développer à l'avenir pour en faire une plateforme nationale complète.",
      tag1: 'Intelligence Artificielle', tag2: 'Haute fiabilité', tag3: 'Plateforme nationale',
    },
    contact: {
      title: 'Nous contacter', subtitle: "Pour plus d'informations ou de suggestions, vous pouvez nous contacter",
      nameLabel: 'Nom complet', namePlaceholder: 'Entrez votre nom',
      emailLabel: 'Adresse e-mail', emailPlaceholder: 'exemple@email.com',
      msgLabel: 'Message', msgPlaceholder: 'Écrivez votre message ici...',
      submit: 'Envoyer le message', success: '✅ Votre message a bien été envoyé !',
    },
    footer: { copy: "© NEXTORIA 2025 — Plateforme d'orientation professionnelle par IA" },
  },

  // ─── ENGLISH ─────────────────────────────────────────────────────────────────
  en: {
    nav: { home: 'Home', howItWorks: 'How It Works', test: 'Test', impact: 'Impact', about: 'About', contact: 'Contact' },
    lang: { en: 'English', fr: 'Français', ar: 'العربية' },
    hero: {
      badge: 'Powered by AI', title: 'NEXTORIA', subtitle: 'The AI Platform for Career Guidance',
      description: 'NEXTORIA is an innovative digital platform that uses artificial intelligence technologies to analyse skills and interests of young people, providing them with personalised career guidance based on accurate data.',
      cta: 'Start Guidance Test',
      stat1: { value: '12', label: 'Career Fields' }, stat2: { value: '93%', label: 'Recommendation Accuracy' }, stat3: { value: '5000+', label: 'Users' },
    },
    hiw: {
      title: 'How NEXTORIA Works', subtitle: 'The platform relies on an advanced interactive system in three main stages',
      step1: { label: 'Step 01', title: 'Answer Analytical Questions', desc: 'Questions carefully designed to analyse your interests, skills and professional personality.' },
      step2: { label: 'Step 02', title: 'Data Processing', desc: "A smart algorithm analyses your answers and compares them to our database of careers and pathways." },
      step3: { label: 'Step 03', title: 'Personalised Career Recommendations', desc: 'A comprehensive report covering the most suitable fields, with a skills development plan.' },
    },
    test: {
      title: 'Smart Guidance Test', subtitle: 'Answer a set of questions to identify your professional profile',
      questionOf: 'Question {current} of {total}', next: 'Next', finish: 'Finish Test',
      options: ['I prefer working in a team', 'I prefer working independently', "I prefer leading the team", 'It depends on the project'],
      questions: ['How do you prefer to work?', 'What is your biggest area of interest?', 'How do you handle complex problems?', 'What type of work environment do you want?', 'What motivates you most at work?', 'How do you prefer to learn new skills?', 'How comfortable are you with technology?', 'Where do you see yourself in 5 years?'],
    },
    impact: {
      title: 'Social Impact', subtitle: 'NEXTORIA contributes to important development goals',
      card1: { title: 'Empowering Youth', desc: 'Helping young people make informed career decisions aligned with their abilities.' },
      card2: { title: 'Accurate Guidance', desc: 'Providing precise guidance based on data and scientific analysis rather than random choice.' },
      card3: { title: 'Bridging the Training–Employment Gap', desc: 'Linking educational pathways to actual and future labour market needs.' },
      card4: { title: 'Boosting Digital Transformation in Morocco', desc: 'Contributing to the digitalisation of educational and professional services with modern tools.' },
    },
    about: {
      title: 'About the Project',
      desc: 'NEXTORIA is an innovative project that aims to empower youth by using artificial intelligence to provide modern solutions in career guidance, with the potential to evolve into a comprehensive national platform.',
      tag1: 'Artificial Intelligence', tag2: 'High Reliability', tag3: 'National Platform',
    },
    contact: {
      title: 'Contact Us', subtitle: 'For more information or suggestions, feel free to reach out',
      nameLabel: 'Full Name', namePlaceholder: 'Enter your name',
      emailLabel: 'Email Address', emailPlaceholder: 'example@email.com',
      msgLabel: 'Message', msgPlaceholder: 'Write your message here...',
      submit: 'Send Message', success: '✅ Your message has been sent successfully!',
    },
    footer: { copy: '© NEXTORIA 2025 — AI-Powered Career Guidance Platform' },
  },

  // ─── ARABIC ───────────────────────────────────────────────────────────────────
  ar: {
    nav: { home: 'الرئيسية', howItWorks: 'كيف يعمل', test: 'الاختبار', impact: 'الأثر', about: 'حول', contact: 'التواصل' },
    lang: { en: 'English', fr: 'Français', ar: 'العربية' },
    hero: {
      badge: 'مدعوم بالذكاء الاصطناعي', title: 'NEXTORIA', subtitle: 'منصة الذكاء الاصطناعي للتوجيه المهني',
      description: 'NEXTORIA هي منصة رقمية مبتكرة تعتمد على تقنيات الذكاء الاصطناعي لتحليل مهارات واهتمامات الشباب، وتقديم توجيهات مهنية مخصصة تساعدهم على اتخاذ قرارات مبنية على بيانات دقيقة.',
      cta: 'ابدأ اختبار التوجيه',
      stat1: { value: '12', label: 'مجال مهني' }, stat2: { value: '93%', label: 'دقة التوصيات' }, stat3: { value: '5000+', label: 'مستخدم' },
    },
    hiw: {
      title: 'آلية عمل NEXTORIA', subtitle: 'تعتمد المنصة على نظام تفاعلي متطور يمر بثلاث مراحل رئيسية',
      step1: { label: 'المرحلة 01', title: 'الإجابة على أسئلة تحليلية', desc: 'أسئلة مصممة بعناية لتحليل اهتماماتك ومهاراتك وشخصيتك المهنية' },
      step2: { label: 'المرحلة 02', title: 'معالجة البيانات', desc: 'خوارزمية ذكية تحلل إجاباتك وتقارنها بقاعدة بيانات المهن والمسارات' },
      step3: { label: 'المرحلة 03', title: 'توصيات مهنية مخصصة', desc: 'تقرير شامل يتضمن المجالات الأنسب لك مع خطة تطوير مهارات' },
    },
    test: {
      title: 'اختبار التوجيه الذكى', subtitle: 'أجب على مجموعة من الأسئلة لتحديد ملفك الشخصي المهني واكتشاف المسارات الأنسب لك',
      questionOf: 'السؤال {current} من {total}', next: 'التالي', finish: 'إنهاء الاختبار',
      options: ['أفضل العمل ضمن فريق', 'أفضل العمل بشكل مستقل', 'أفضل قيادة الفريق', 'يعتمد على المشروع'],
      questions: ['كيف تفضل العمل؟', 'ما هو مجال اهتمامك الأكبر؟', 'كيف تتعامل مع المشكلات المعقدة؟', 'ما نوع البيئة التي تريد العمل فيها؟', 'ما الذي يحفزك على العمل؟', 'كيف تفضل تعلم مهارات جديدة؟', 'ما مدى راحتك مع التكنولوجيا؟', 'أين ترى نفسك بعد 5 سنوات؟'],
    },
    impact: {
      title: 'الأثر المجتمعى', subtitle: 'يساهم مشروع NEXTORIA في تحقيق أهداف تنموية مهمة',
      card1: { title: 'تمكين الشباب', desc: 'تمكين الشباب من اتخاذ قرارات مهنية واعية تتوافق مع قدراتهم' },
      card2: { title: 'توجيه دقيق', desc: 'تقديم توجيه دقيق مبني على بيانات وتحليل علمي بدلاً من الاختيار العشوائي' },
      card3: { title: 'تقليل الفجوة بين التكوين وسوق العمل', desc: 'ربط المسارات التعليمية باحتياجات سوق العمل الفعلية والمستقبلية' },
      card4: { title: 'تعزيز التحول الرقمي بالمغرب', desc: 'المساهمة في رقمنة الخدمات التعليمية والمهنية بأدوات حديثة ومبتكرة' },
    },
    about: {
      title: 'حول المشروع',
      desc: 'NEXTORIA مشروع ابتكاري يهدف إلى تمكين الشباب من خلال استخدام الذكاء الاصطناعي لتقديم حلول حديثة في مجال التوجيه المهني، مع إمكانية تطويره مستقبلاً ليصبح منصة وطنية شاملة.',
      tag1: 'ذكاء اصطناعي', tag2: 'موثوقية عالية', tag3: 'منصة وطنية',
    },
    contact: {
      title: 'تواصل معنا', subtitle: 'للمزيد من المعلومات أو الاقتراحات، يمكن التواصل معنا',
      nameLabel: 'الاسم الكامل', namePlaceholder: 'أدخل اسمك',
      emailLabel: 'البريد الإلكتروني', emailPlaceholder: 'example@email.com',
      msgLabel: 'الرسالة', msgPlaceholder: 'اكتب رسالتك هنا...',
      submit: 'إرسال الرسالة', success: '✅ تم إرسال رسالتك بنجاح!',
    },
    footer: { copy: '© NEXTORIA 2025 — منصة التوجيه المهني بالذكاء الاصطناعي' },
  },
};

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private _lang = signal<Lang>(this._loadLang());

  get lang(): Lang { return this._lang(); }
  get t(): TranslationData { return translations[this._lang()]; }
  get isRtl(): boolean { return this._lang() === 'ar'; }

  setLang(lang: Lang): void {
    this._lang.set(lang);
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }

  private _loadLang(): Lang {
    const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored && (['fr', 'en', 'ar'] as Lang[]).includes(stored)) return stored;
    return 'fr';
  }
}
