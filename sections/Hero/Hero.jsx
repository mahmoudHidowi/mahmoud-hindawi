import styles from './HeroStyles.module.css';
import heroImg from '../../assets/profile.jpeg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import instagramLight from '../../assets/instagram-light.svg';
import instagramDark from '../../assets/instagram-dark.svg';
import facebookLight from '../../assets/facebook-light.svg';
import facebookDark from '../../assets/facebook-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';
import { useLanguage } from '../../common/LanguageContext';

function Hero() {
  const { theme } = useTheme();
  const { t } = useLanguage();

  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const instagramIcon = theme === 'light' ? instagramLight : instagramDark;
  const facebookIcon = theme === 'light' ? facebookLight : facebookDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.backgroundGlow}></div>
      <div className={styles.floatingShapes}>
        <div className={styles.shape1}></div>
        <div className={styles.shape2}></div>
        <div className={styles.shape3}></div>
      </div>
      <div className={styles.heroContent}>
        <div className={styles.heroImageWrapper}>
          <img
            src={heroImg}
            className={styles.hero}
            alt="Profile picture of Mahmoud Hindawi"
          />
          <div className={styles.imageDecoration}></div>
        </div>
        <div className={styles.info}>
          <span className={styles.greeting}>{t('greeting')}</span>
          <h1>
            {t('firstName')}
            <br />
            <span className={styles.lastName}>{t('lastName')}</span>
          </h1>
          <h2>{t('role')}</h2>
          <p className={styles.description}>
            {t('heroDescription')}
          </p>
          <span className={styles.socialLinks}>
            <a href="https://github.com/mahmoudHidowi" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="Github icon" />
            </a>
            <a href="https://www.linkedin.com/in/mahmud-handevi-b34b22195/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="Linkedin icon" />
            </a>
            <a href="https://www.instagram.com/mahmoud_hindawi99?igsh=MTA0OTduaW16MWR3OQ==" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram icon" />
            </a>
            <a href="https://www.facebook.com/share/1AxAoJ3kGR/" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="Facebook icon" />
            </a>
          </span>
          <div className={styles.buttonGroup}>
            <a href={CV} download>
              <button className={`hover ${styles.primaryBtn}`}>{t('downloadCV')}</button>
            </a>
            <a href="#projects">
              <button className={`hover ${styles.secondaryBtn}`}>{t('viewProjects')}</button>
            </a>
          </div>
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>8+</span>
              <span className={styles.statLabel}>{t('projectsCount')}</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>4+</span>
              <span className={styles.statLabel}>{t('yearsExp')}</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>15+</span>
              <span className={styles.statLabel}>{t('technologies')}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.scrollIndicator}>
        <span>{t('scrollDown')}</span>
        <div className={styles.scrollLine}></div>
      </div>
    </section>
  );
}

export default Hero;
