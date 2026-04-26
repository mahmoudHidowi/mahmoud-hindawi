import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/project-1.png';
import freshBurger from '../../assets/project-2.png';
import hipsster from '../../assets/project-3.png';
import fitLift from '../../assets/10.png';
import alraqi from '../../assets/alraqi-project.jpg';
import rpaAviation from '../../assets/rpa-aviation.jpg';
import rpaEducation from '../../assets/rpa-education.jpg';
import aiTraffic from '../../assets/ai-traffic-signs.jpg';
import { useScrollAnimation } from '../../common/useScrollAnimation';
import { useLanguage } from '../../common/LanguageContext';

function ProjectCard({ project, index }) {
  const [ref, isVisible] = useScrollAnimation(0.1);
  const { t } = useLanguage();
  
  const hasLink = project.link && project.link !== '#';
  
  return (
    <div 
      ref={ref}
      className={`${styles.projectCard} ${isVisible ? styles.visible : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {hasLink ? (
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <div className={styles.imageWrapper}>
            <img src={project.src} alt={project.titleKey} />
            <div className={styles.overlay}>
              <span className={styles.viewProject}>{t('viewProject')}</span>
            </div>
          </div>
          <div className={styles.projectInfo}>
            <span className={styles.category}>{t(project.categoryKey)}</span>
            <h3>{t(project.titleKey)}</h3>
            <p>{project.description}</p>
          </div>
        </a>
      ) : (
        <div className={styles.noLink}>
          <div className={styles.imageWrapper}>
            <img src={project.src} alt={project.titleKey} />
            <div className={styles.overlayComingSoon}>
              <span className={styles.comingSoon}>{t('comingSoon')}</span>
            </div>
          </div>
          <div className={styles.projectInfo}>
            <span className={styles.category}>{t(project.categoryKey)}</span>
            <h3>{t(project.titleKey)}</h3>
            <p>{project.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

function Projects() {
  const [titleRef, titleVisible] = useScrollAnimation(0.1);
  const { t, language } = useLanguage();

  const projects = [
    {
      src: alraqi,
      link: "https://alraqicompany-puce.vercel.app/",
      titleKey: "alRaqiTitle",
      categoryKey: "alRaqiDesc",
      description: language === 'ar' ? "موقع عقاري حديث بتصميم أنيق وواجهة سهلة الاستخدام." : "Modern real estate website with elegant design and user-friendly interface."
    },
    {
      src: rpaAviation,
      link: null,
      titleKey: "rpaAviationTitle",
      categoryKey: "rpaAviationDesc",
      description: language === 'ar' ? "نظام أتمتة العمليات الروبوتية لإدارة عمليات الطيران وجدولة الرحلات." : "RPA system for managing aviation operations and flight scheduling automation."
    },
    {
      src: rpaEducation,
      link: null,
      titleKey: "rpaEducationTitle",
      categoryKey: "rpaEducationDesc",
      description: language === 'ar' ? "نظام أتمتة العمليات الروبوتية لإدارة تسجيل الطلاب ومعالجة الدرجات." : "RPA system for student enrollment management and grade processing automation."
    },
    {
      src: aiTraffic,
      link: null,
      titleKey: "aiTrafficTitle",
      categoryKey: "aiTrafficDesc",
      description: language === 'ar' ? "نظام ذكاء اصطناعي للتعرف على إشارات المرور في الوقت الفعلي." : "AI-powered real-time traffic sign recognition and detection system."
    },
    {
      src: viberr,
      link: "https://ofuq-oqa5.vercel.app/about.html",
      titleKey: "ofuqTitle",
      categoryKey: "ofuqDesc",
      description: language === 'ar' ? "منصة تعليمية شاملة للتعلم عبر الإنترنت." : "Comprehensive learning platform for online education."
    },
    {
      src: freshBurger,
      link: "https://mahmoudhidowi.github.io/-web-design/",
      titleKey: "restaurantTitle",
      categoryKey: "restaurantDesc",
      description: language === 'ar' ? "موقع مطعم جميل بتصميم عصري." : "Beautiful restaurant website with modern aesthetics."
    },
    {
      src: hipsster,
      link: "https://github.com/mahmoudHidowi/ecommerce-website",
      titleKey: "ecommerceTitle",
      categoryKey: "ecommerceDesc",
      description: language === 'ar' ? "منصة تجارة إلكترونية كاملة مع وظائف سلة التسوق." : "Full-featured e-commerce platform with cart functionality."
    },
    {
      src: fitLift,
      link: "https://pizza-menu-ten-pearl.vercel.app/",
      titleKey: "pizzaTitle",
      categoryKey: "pizzaDesc",
      description: language === 'ar' ? "تطبيق قائمة بيتزا تفاعلي مبني بـ React." : "Interactive pizza menu application built with React."
    }
  ];

  return (
    <section id="projects" className={styles.container}>
      <div ref={titleRef} className={`${styles.sectionHeader} ${titleVisible ? styles.visible : ''}`}>
        <span className={styles.sectionLabel}>{t('projectsSubtitle')}</span>
        <h1 className="sectionTitle">{t('projectsTitle')}</h1>
        <p className={styles.sectionDescription}>
          {t('projectsDescription')}
        </p>
      </div>
      <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
