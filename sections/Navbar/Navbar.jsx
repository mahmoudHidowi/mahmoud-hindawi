import styles from './NavbarStyles.module.css';
import { useState, useEffect } from 'react';
import { useTheme } from '../../common/ThemeContext';
import { useLanguage } from '../../common/LanguageContext';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  const themeIcon = theme === 'light' ? sun : moon;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#hero', label: t('home') },
    { href: '#projects', label: t('projects') },
    { href: '#skills', label: t('skills') },
    { href: '#contact', label: t('contact') },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <a href="#hero" className={styles.logo}>
          <span className={styles.logoText}>MH</span>
          <span className={styles.logoDot}></span>
        </a>

        <div className={`${styles.navLinks} ${mobileMenuOpen ? styles.active : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.navLink}
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          ))}
          <button className={styles.contactBtn} onClick={() => {
            handleLinkClick();
            window.location.href = '#contact';
          }}>
            {language === 'ar' ? 'تواصل معي' : "Let's Talk"}
          </button>
        </div>

        <div className={styles.navActions}>
          <button 
            className={styles.langToggle}
            onClick={toggleLanguage}
            aria-label="Toggle language"
          >
            {language === 'en' ? 'عربي' : 'EN'}
          </button>
          <img
            className={styles.themeToggle}
            src={themeIcon}
            alt="Toggle theme"
            onClick={toggleTheme}
          />
          <button
            className={`${styles.hamburger} ${mobileMenuOpen ? styles.active : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
