import styles from './ContactStyles.module.css';
import { useState } from 'react';
import { useScrollAnimation } from '../../common/useScrollAnimation';
import { useLanguage } from '../../common/LanguageContext';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [titleRef, titleVisible] = useScrollAnimation(0.1);
  const [formRef, formVisible] = useScrollAnimation(0.1);
  const { t, language } = useLanguage();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(language === 'ar' ? 'جاري الإرسال...' : 'Sending...');
    fetch('https://formsubmit.co/ajax/mahmoudhindawi01@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        setStatus(language === 'ar' ? 'تم إرسال الرسالة بنجاح!' : 'Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        setStatus(language === 'ar' ? 'فشل إرسال الرسالة. حاول مرة أخرى.' : 'Failed to send message. Please try again.');
      });
  };

  return (
    <section id="contact" className={styles.container}>
      <div ref={titleRef} className={`${styles.sectionHeader} ${titleVisible ? styles.visible : ''}`}>
        <span className={styles.sectionLabel}>{t('contactSubtitle')}</span>
        <h1 className="sectionTitle">{t('contactTitle')}</h1>
        <p className={styles.sectionDescription}>
          {t('contactDescription')}
        </p>
      </div>
      
      <div className={styles.contactWrapper}>
        <div ref={formRef} className={`${styles.formCard} ${formVisible ? styles.visible : ''}`}>
          <form onSubmit={handleSubmit}>
            <input type="hidden" name="_subject" value="New submission!" />
            <div className={styles.inputGroup}>
              <label htmlFor="name">{t('yourName')}</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder={language === 'ar' ? 'أدخل اسمك' : 'John Doe'}
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email">{t('yourEmail')}</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="john@example.com"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="message">{t('yourMessage')}</label>
              <textarea
                name="message"
                id="message"
                placeholder={language === 'ar' ? 'أخبرني عن مشروعك...' : 'Tell me about your project...'}
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <input type="hidden" name="_captcha" value="false" />
            <button type="submit" className={styles.submitBtn}>
              <span>{t('sendMessage')}</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
              </svg>
            </button>
          </form>
          {status && (
            <p className={`${styles.statusMessage} ${status.includes('success') || status.includes('بنجاح') ? styles.success : ''}`}>
              {status}
            </p>
          )}
        </div>

        <div className={styles.contactInfo}>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div>
              <h4>{t('emailMe')}</h4>
              <p>mahmoudhindawi01@gmail.com</p>
            </div>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
              </svg>
            </div>
            <div>
              <h4>{t('phone')}</h4>
              <p dir="ltr">+963 989 997 845</p>
            </div>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div>
              <h4>{t('location')}</h4>
              <p>{t('locationValue')}</p>
            </div>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <div>
              <h4>{t('responseTime')}</h4>
              <p>{t('responseValue')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
