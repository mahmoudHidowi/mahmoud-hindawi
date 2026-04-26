import styles from './SkillsStyles.module.css';
import { useScrollAnimation } from '../../common/useScrollAnimation';
import { useLanguage } from '../../common/LanguageContext';

function SkillCard({ skill, index }) {
  return (
    <div 
      className={styles.skillCard}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <span className={styles.skillName}>{skill}</span>
    </div>
  );
}

function SkillCategory({ category, categoryIndex }) {
  const [ref, isVisible] = useScrollAnimation(0.1);
  
  return (
    <div 
      ref={ref}
      className={`${styles.skillCategory} ${isVisible ? styles.visible : ''}`}
      style={{ animationDelay: `${categoryIndex * 0.2}s` }}
    >
      <h3 className={styles.categoryTitle}>{category.title}</h3>
      <div className={styles.skillList}>
        {category.skills.map((skill, index) => (
          <SkillCard key={skill} skill={skill} index={index} />
        ))}
      </div>
    </div>
  );
}

function Skills() {
  const [titleRef, titleVisible] = useScrollAnimation(0.1);
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t('languages'),
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "Python"]
    },
    {
      title: t('frameworks'),
      skills: ["React", "Next.js", "Redux", "Context API", "Node.js", "REST APIs", "TensorFlow"]
    },
    {
      title: t('tools'),
      skills: ["Git", "SEO", "CRO", "UiPath", "Power Automate", "Tailwind CSS", "Bootstrap", "Figma"]
    }
  ];

  return (
    <section id="skills" className={styles.container}>
      <div ref={titleRef} className={`${styles.sectionHeader} ${titleVisible ? styles.visible : ''}`}>
        <span className={styles.sectionLabel}>{t('skillsSubtitle')}</span>
        <h1 className="sectionTitle">{t('skillsTitle')}</h1>
        <p className={styles.sectionDescription}>
          {t('skillsDescription')}
        </p>
      </div>
      <div className={styles.skillsGrid}>
        {skillCategories.map((category, index) => (
          <SkillCategory key={category.title} category={category} categoryIndex={index} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
