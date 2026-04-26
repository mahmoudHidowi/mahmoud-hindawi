import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    // Navbar
    home: 'Home',
    projects: 'Projects',
    skills: 'Skills',
    contact: 'Contact',
    
    // Hero
    greeting: 'Hello, I am',
    firstName: 'Mahmoud',
    lastName: 'Hindawi',
    role: 'Software Engineer',
    heroDescription: 'Software engineer with practical experience in AI, Robotic Process Automation, Front-End Development, and Digital Marketing. Crafting innovative technical solutions and managing marketing strategies for technology companies.',
    downloadCV: 'Download CV',
    viewProjects: 'View Projects',
    projectsCount: 'Projects',
    yearsExp: 'Years Exp.',
    technologies: 'Technologies',
    scrollDown: 'Scroll Down',
    
    // Projects
    projectsTitle: 'Projects',
    projectsSubtitle: 'Featured Work',
    projectsDescription: 'A showcase of my latest projects and creative solutions',
    viewProject: 'View Project',
    comingSoon: 'Coming Soon',
    
    // Project Names & Descriptions
    alRaqiTitle: 'Al Raqi Construction',
    alRaqiDesc: 'Real Estate & Marketing Platform',
    ofuqTitle: 'Ofuq Academy',
    ofuqDesc: 'Educational Platform',
    restaurantTitle: 'Restaurant Site',
    restaurantDesc: 'Web Design',
    ecommerceTitle: 'E-Commerce',
    ecommerceDesc: 'Online Store',
    pizzaTitle: 'Pizza Menu',
    pizzaDesc: 'Restaurant App',
    rpaAviationTitle: 'Aviation RPA System',
    rpaAviationDesc: 'Robotic Process Automation',
    rpaEducationTitle: 'Education RPA System',
    rpaEducationDesc: 'Robotic Process Automation',
    aiTrafficTitle: 'Traffic Sign Recognition',
    aiTrafficDesc: 'Artificial Intelligence',
    
    // Skills
    skillsTitle: 'Skills',
    skillsSubtitle: 'My Expertise',
    skillsDescription: 'Technologies and tools I work with',
    languages: 'Languages',
    frameworks: 'Frameworks',
    tools: 'Tools & Marketing',
    
    // Contact
    contactTitle: 'Contact',
    contactSubtitle: 'Get In Touch',
    contactDescription: 'Have a project in mind? Let\'s work together to create something amazing.',
    yourName: 'Your Name',
    yourEmail: 'Your Email',
    yourMessage: 'Your Message',
    sendMessage: 'Send Message',
    emailMe: 'Email Me',
    phone: 'Phone',
    location: 'Location',
    locationValue: 'Syria',
    responseTime: 'Response Time',
    responseValue: 'Within 24 hours',
    
    // Footer
    footerBrand: 'Software Engineer with expertise in AI, RPA, Front-End Development, and Digital Marketing strategies.',
    quickLinks: 'Quick Links',
    contactInfo: 'Contact Info',
    allRights: 'All rights reserved.',
    madeWith: 'Made with',
    by: 'by',
    
    // Experience
    experience: 'Experience',
    education: 'Education',
    degree: 'Bachelor of Software Engineering',
    university: 'Furat University, Turkey - 2024',
    
    // Work Experience
    exp1Title: 'Marketing Manager',
    exp1Company: 'Al Raqi Construction Company',
    exp1Period: '2024 - Present',
    exp2Title: 'Marketing & IT Manager',
    exp2Company: 'Ofuq Company',
    exp2Period: '2021 - 2023',
    exp3Title: 'AI Engineer',
    exp3Company: 'Intlum Company',
    exp3Period: '2020 - 2021',
    
    // Language Skills
    langArabic: 'Arabic',
    langArabicLevel: 'Native',
    langEnglish: 'English',
    langEnglishLevel: 'Very Good',
    langTurkish: 'Turkish',
    langTurkishLevel: 'Excellent',
  },
  ar: {
    // Navbar
    home: 'الرئيسية',
    projects: 'المشاريع',
    skills: 'المهارات',
    contact: 'تواصل معي',
    
    // Hero
    greeting: 'مرحباً، أنا',
    firstName: 'محمود',
    lastName: 'هنداوي',
    role: 'مهندس برمجيات',
    heroDescription: 'مهندس برمجيات، أمتلك خبرة عملية في مجالات الذكاء الاصطناعي، الأتمتة الروبوتية، تطوير الواجهات الأمامية، والتسويق الرقمي. عملت مع عدة شركات تقنية وتسويقية في تركيا وسوريا.',
    downloadCV: 'تحميل السيرة الذاتية',
    viewProjects: 'عرض المشاريع',
    projectsCount: 'مشاريع',
    yearsExp: 'سنوات خبرة',
    technologies: 'تقنيات',
    scrollDown: 'اسحب للأسفل',
    
    // Projects
    projectsTitle: 'المشاريع',
    projectsSubtitle: 'أعمالي المميزة',
    projectsDescription: 'عرض لأحدث مشاريعي وحلولي الإبداعية',
    viewProject: 'عرض المشروع',
    comingSoon: 'قريباً',
    
    // Project Names & Descriptions
    alRaqiTitle: 'شركة الراقي للإنشاءات',
    alRaqiDesc: 'منصة عقارية وتسويقية',
    ofuqTitle: 'أكاديمية أفق',
    ofuqDesc: 'منصة تعليمية',
    restaurantTitle: 'موقع مطعم',
    restaurantDesc: 'تصميم ويب',
    ecommerceTitle: 'متجر إلكتروني',
    ecommerceDesc: 'تجارة إلكترونية',
    pizzaTitle: 'قائمة بيتزا',
    pizzaDesc: 'تطبيق مطعم',
    rpaAviationTitle: 'نظام RPA للطيران',
    rpaAviationDesc: 'أتمتة العمليات الروبوتية',
    rpaEducationTitle: 'نظام RPA للتعليم',
    rpaEducationDesc: 'أتمتة العمليات الروبوتية',
    aiTrafficTitle: 'التعرف على إشارات المرور',
    aiTrafficDesc: 'ذكاء اصطناعي',
    
    // Skills
    skillsTitle: 'المهارات',
    skillsSubtitle: 'خبراتي',
    skillsDescription: 'التقنيات والأدوات التي أعمل بها',
    languages: 'اللغات',
    frameworks: 'أطر العمل',
    tools: 'الأدوات والتسويق',
    
    // Contact
    contactTitle: 'تواصل معي',
    contactSubtitle: 'ابقَ على تواصل',
    contactDescription: 'هل لديك مشروع في ذهنك؟ دعنا نعمل معاً لإنشاء شيء مذهل.',
    yourName: 'اسمك',
    yourEmail: 'بريدك الإلكتروني',
    yourMessage: 'رسالتك',
    sendMessage: 'إرسال الرسالة',
    emailMe: 'راسلني',
    phone: 'الهاتف',
    location: 'الموقع',
    locationValue: 'سوريا',
    responseTime: 'وقت الرد',
    responseValue: 'خلال 24 ساعة',
    
    // Footer
    footerBrand: 'مهندس برمجيات متخصص في الذكاء الاصطناعي، الأتمتة الروبوتية، تطوير الواجهات الأمامية، واستراتيجيات التسويق الرقمي.',
    quickLinks: 'روابط سريعة',
    contactInfo: 'معلومات التواصل',
    allRights: 'جميع الحقوق محفوظة.',
    madeWith: 'صُنع بـ',
    by: 'بواسطة',
    
    // Experience
    experience: 'الخبرات',
    education: 'التعليم',
    degree: 'بكالوريوس هندسة برمجيات',
    university: 'جامعة الفرات، تركيا - 2024',
    
    // Work Experience
    exp1Title: 'مدير قسم التسويق',
    exp1Company: 'شركة الراقي للإنشاءات',
    exp1Period: '2024 - حتى الآن',
    exp2Title: 'مدير التسويق وتقنية المعلومات',
    exp2Company: 'شركة أفق',
    exp2Period: '2021 - 2023',
    exp3Title: 'مهندس ذكاء اصطناعي',
    exp3Company: 'شركة انتلوم',
    exp3Period: '2020 - 2021',
    
    // Language Skills
    langArabic: 'العربية',
    langArabicLevel: 'اللغة الأم',
    langEnglish: 'الإنجليزية',
    langEnglishLevel: 'جيد جداً',
    langTurkish: 'التركية',
    langTurkishLevel: 'ممتاز',
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('preferredLanguage');
    return saved || 'en';
  });

  useEffect(() => {
    localStorage.setItem('preferredLanguage', language);
    document.documentElement.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const t = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
