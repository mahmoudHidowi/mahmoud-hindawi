import styles from './FooterStyles.module.css';
import { useTheme } from '../../common/ThemeContext';
import { useLanguage } from '../../common/LanguageContext';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import instagramLight from '../../assets/instagram-light.svg';
import instagramDark from '../../assets/instagram-dark.svg';
import facebookLight from '../../assets/facebook-light.svg';
import facebookDark from '../../assets/facebook-dark.svg';

function Footer() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const instagramIcon = theme === 'light' ? instagramLight : instagramDark;
  const facebookIcon = theme === 'light' ? facebookLight : facebookDark;

  const navLinks = [
    { href: '#hero', label: t('home') },
    { href: '#projects', label: t('projects') },
    { href: '#skills', label: t('skills') },
    { href: '#contact', label: t('contact') },
  ];

  return (
    <footer id="footer" className={styles.container}>
      <div className={styles.footerContent}>
        <div className={styles.footerBrand}>
          <a href="#hero" className={styles.logo}>
            <span className={styles.logoText}>MH</span>
            <span className={styles.logoDot}></span>
          </a>
          <p className={styles.brandDescription}>
            {t('footerBrand')}
          </p>
          <div className={styles.socialLinks}>
            <a href="https://github.com/mahmoudHidowi" target="_blank" rel="noopener noreferrer" aria-label="Github">
              <img src={githubIcon} alt="Github" />
            </a>
            <a href="https://www.linkedin.com/in/mahmud-handevi-b34b22195/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a href="https://www.instagram.com/mahmoud_hindawi99?igsh=MTA0OTduaW16MWR3OQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="https://www.facebook.com/share/1AxAoJ3kGR/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <img src={facebookIcon} alt="Facebook" />
            </a>
          </div>
        </div>

        <div className={styles.footerLinks}>
          <h4>{t('quickLinks')}</h4>
          <nav>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>{link.label}</a>
            ))}
          </nav>
        </div>

        <div className={styles.footerContact}>
          <h4>{t('contactInfo')}</h4>
          <div className={styles.contactItem}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            <span>mahmoudhindawi01@gmail.com</span>
          </div>
          <div className={styles.contactItem}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
            </svg>
            <span dir="ltr">+963 989 997 845</span>
          </div>
          <div className={styles.contactItem}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span>{t('locationValue')}</span>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.divider}></div>
        <p>
          &copy; {new Date().getFullYear()} <span>Mahmoud Hindawi</span>. {t('allRights')}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
