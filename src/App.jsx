import React, { useState, useEffect } from 'react';
import './App.css';

export default function SchoolWebsite() {
  const [activeSection, setActiveSection] = useState('home');
  const [expandedHoliday, setExpandedHoliday] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('ru');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [statsExpanded, setStatsExpanded] = useState({});
  const [achievementsCount, setAchievementsCount] = useState({ students: 0, teachers: 0, years: 0 });
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setAchievementsCount({
        students: Math.floor(1024 * progress),
        teachers: Math.floor(45 * progress),
        years: Math.floor(30 * progress)
      });
      
      if (currentStep >= steps) {
        clearInterval(timer);
        setAchievementsCount({ students: 1024, teachers: 45, years: 30 });
      }
    }, interval);
    
    return () => clearInterval(timer);
  }, []);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const toggleStats = (year) => {
    setStatsExpanded(prev => ({ ...prev, [year]: !prev[year] }));
  };

  const translations = {
    ru: {
      schoolName: "Школа №47 имени Алишера Навои",
      city: "г. Ташкент, Узбекистан",
      nav: { home: "Главная", director: "Директор", teachers: "Учителя", stats: "Статистика", facilities: "Кабинеты", holidays: "Праздники", contact: "Контакты" },
      welcome: "Добро пожаловать в нашу школу!",
      students: "Учеников",
      teachers: "Учителей",
      yearsQuality: "Лет опыта",
      showOnMap: "Показать на карте",
      viewDetails: "Подробнее",
      footer: { school: "Школа №47", address: "г. Ташкент, ул. Навои, 123", copyright: "© 2025 Все права защищены" }
    },
    uz: {
      schoolName: "Alisher Navoiy nomidagi 47-maktab",
      city: "Toshkent shahri",
      nav: { home: "Bosh", director: "Direktor", teachers: "O'qituvchilar", stats: "Statistika", facilities: "Xonalar", holidays: "Bayramlar", contact: "Aloqa" },
      welcome: "Maktabimizga xush kelibsiz!",
      students: "O'quvchilar",
      teachers: "O'qituvchilar",
      yearsQuality: "Yillik tajriba",
      showOnMap: "Xaritada",
      viewDetails: "Batafsil",
      footer: { school: "47-maktab", address: "Toshkent, Navoiy ko'chasi, 123", copyright: "© 2025 Barcha huquqlar" }
    },
    en: {
      schoolName: "School №47 Alisher Navoi",
      city: "Tashkent, Uzbekistan",
      nav: { home: "Home", director: "Director", teachers: "Teachers", stats: "Stats", facilities: "Facilities", holidays: "Holidays", contact: "Contact" },
      welcome: "Welcome to our school!",
      students: "Students",
      teachers: "Teachers",
      yearsQuality: "Years experience",
      showOnMap: "Show map",
      viewDetails: "Details",
      footer: { school: "School №47", address: "Tashkent, Navoi St, 123", copyright: "© 2025 All rights reserved" }
    }
  };

  const t = translations[language];

  const teachers = [
    { name: "Нодира Рахимова", subject: "Математика", exp: "15 лет", rating: "4.9", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400" },
    { name: "Азиз Каримов", subject: "Информатика", exp: "10 лет", rating: "4.8", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400" },
    { name: "Малика Усманова", subject: "Английский", exp: "12 лет", rating: "5.0", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400" },
    { name: "Шахзод Ахмедов", subject: "Физика", exp: "18 лет", rating: "4.9", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400" },
    { name: "Дилноза Турсунова", subject: "Химия", exp: "9 лет", rating: "4.7", img: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400" },
    { name: "Жасур Набиев", subject: "Физкультура", exp: "14 лет", rating: "4.8", img: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400" }
  ];

  const stats = [
    { year: "2020-2021", students: 845, growth: 0 },
    { year: "2021-2022", students: 892, growth: 5.6 },
    { year: "2022-2023", students: 934, growth: 4.7 },
    { year: "2023-2024", students: 987, growth: 5.7 },
    { year: "2024-2025", students: 1024, growth: 3.7 }
  ];

  const facilities = [
    { name: "Компьютерный класс", desc: "30 ПК", icon: "💻", img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600" },
    { name: "Столовая", desc: "200 мест", icon: "🍽️", img: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600" },
    { name: "Библиотека", desc: "15000+ книг", icon: "📚", img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600" },
    { name: "Спортзал", desc: "Современный", icon: "⚽", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600" }
  ];

  const holidays = [
    { name: "Навруз", date: "21 марта", desc: "Праздник весны", img: "https://images.unsplash.com/photo-1523968098043-a29c0d6f1f28?w=600" },
    { name: "День Независимости", date: "1 сентября", desc: "Главный праздник", img: "https://images.unsplash.com/photo-1528605105345-5344ea20e269?w=600" },
    { name: "Рамазан Хайит", date: "По календарю", desc: "Религиозный праздник", img: "https://images.unsplash.com/photo-1587497098110-1f663e750782?w=600" }
  ];

  return (
    <div className={`school ${isDarkMode ? 'dark' : ''}`}>
      <button className="theme-btn" onClick={toggleTheme}>{isDarkMode ? '☀️' : '🌙'}</button>
      
      <div className="lang-switch">
        {['ru', 'uz', 'en'].map(l => (
          <button key={l} className={language === l ? 'active' : ''} onClick={() => setLanguage(l)}>
            {l === 'ru' ? '🇷🇺' : l === 'uz' ? '🇺🇿' : '🇬🇧'}
          </button>
        ))}
      </div>

      <header className={scrolled ? 'scrolled' : ''}>
        <div className="header-content">
          <div className="logo">🏫 <span>{t.schoolName}</span></div>
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      <nav className={menuOpen ? 'open' : ''}>
        {Object.keys(t.nav).map(s => (
          <button key={s} className={activeSection === s ? 'active' : ''} onClick={() => { setActiveSection(s); setMenuOpen(false); }}>
            {t.nav[s]}
          </button>
        ))}
      </nav>

      <main>
        {activeSection === 'home' && (
          <div className="section">
            <h2>{t.welcome}</h2>
            
            <div className="hero">
              <img src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200" alt="School" />
            </div>

            <div className="stats-grid">
              <div className="stat-card blue">
                <div className="icon">👥</div>
                <div className="num">{achievementsCount.students}</div>
                <div className="label">{t.students}</div>
              </div>
              <div className="stat-card purple">
                <div className="icon">📚</div>
                <div className="num">{achievementsCount.teachers}</div>
                <div className="label">{t.teachers}</div>
              </div>
              <div className="stat-card green">
                <div className="icon">🏆</div>
                <div className="num">{achievementsCount.years}+</div>
                <div className="label">{t.yearsQuality}</div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'director' && (
          <div className="section">
            <h2>Директор</h2>
            <div className="director-card">
              <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400" alt="Director" />
              <div>
                <h3>Гулнора Алимова</h3>
                <p>25 лет опыта</p>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'teachers' && (
          <div className="section">
            <h2>Наши учителя</h2>
            <div className="teachers-grid">
              {teachers.map((t, i) => (
                <div key={i} className="teacher-card">
                  <img src={t.img} alt={t.name} />
                  <h3>{t.name}</h3>
                  <p className="subject">{t.subject}</p>
                  <div className="rating">⭐ {t.rating}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'stats' && (
          <div className="section">
            <h2>Статистика</h2>
            {stats.map((s, i) => (
              <div key={i} className={`stat-year ${statsExpanded[s.year] ? 'open' : ''}`} onClick={() => toggleStats(s.year)}>
                <div className="stat-header">
                  <span>{s.year}</span>
                  <span className="big-num">{s.students}</span>
                  <button>{statsExpanded[s.year] ? '▼' : '▶'}</button>
                </div>
                <div className="progress"><div style={{width: `${s.students/11}%`}}></div></div>
                {statsExpanded[s.year] && (
                  <div className="details">
                    <p>Рост: +{s.growth}%</p>
                    <p>Мальчики: {Math.round(s.students * 0.52)}</p>
                    <p>Девочки: {Math.round(s.students * 0.48)}</p>
                  </div>
                )}
              </div>
            ))}
            <div className="growth-card">
              <h3>📈 Рост за 5 лет</h3>
              <div className="big">+179</div>
              <div className="big">+21%</div>
            </div>
          </div>
        )}

        {activeSection === 'facilities' && (
          <div className="section">
            <h2>Кабинеты</h2>
            <div className="facilities-grid">
              {facilities.map((f, i) => (
                <div key={i} className="facility-card">
                  <img src={f.img} alt={f.name} />
                  <div className="icon-big">{f.icon}</div>
                  <h3>{f.name}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'holidays' && (
          <div className="section">
            <h2>Праздники</h2>
            {holidays.map((h, i) => (
              <div key={i} className="holiday-card" onClick={() => setExpandedHoliday(expandedHoliday === i ? null : i)}>
                <img src={h.img} alt={h.name} />
                <div className="holiday-info">
                  <h3>{h.name}</h3>
                  <p className="date">{h.date}</p>
                  {expandedHoliday === i && <p className="desc">{h.desc}</p>}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeSection === 'contact' && (
          <div className="section">
            <h2>Контакты</h2>
            <div className="contact-grid">
              <div className="contact-info">
                <div className="contact-item">
                  <span>📍</span>
                  <p>{t.footer.address}</p>
                </div>
                <div className="contact-item">
                  <span>📞</span>
                  <p>+998 71 234-56-78</p>
                </div>
                <div className="contact-item">
                  <span>📧</span>
                  <p>school47@edu.uz</p>
                </div>
                <button onClick={() => setShowMap(!showMap)} className="map-btn">
                  🗺️ {t.showOnMap}
                </button>
              </div>
              {showMap && (
                <div className="map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.392794839894!2d69.2400963!3d41.3111766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent!5e0!3m2!1sen!2s!4v1234567890"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      <footer>
        <p>{t.footer.school}</p>
        <p>{t.footer.copyright}</p>
      </footer>

      {scrolled && <button className="scroll-top" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>↑</button>}
    </div>
  );
}