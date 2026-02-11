import React, { useState, useEffect } from 'react';
import './App.css';

function SchoolApp() {
  const [loading, setLoading] = useState(true);
  const [section, setSection] = useState('home');
  const [darkMode, setDarkMode] = useState(false);
  const [lang, setLang] = useState('ru');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expandedStats, setExpandedStats] = useState({});
  const [expandedHoliday, setExpandedHoliday] = useState(null);
  const [showMap, setShowMap] = useState(false);
  const [counts, setCounts] = useState({ s: 0, t: 0, y: 0 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // Loading animation
    setTimeout(() => setLoading(false), 2500);
  }, []);

  useEffect(() => {
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const p = step / 50;
      setCounts({ s: Math.floor(1024 * p), t: Math.floor(45 * p), y: Math.floor(30 * p) });
      if (step >= 50) {
        clearInterval(timer);
        setCounts({ s: 1024, t: 45, y: 30 });
      }
    }, 30);
    return () => clearInterval(timer);
  }, []);

  const txt = {
    ru: {
      title: "Школа №47 имени Алишера Навои",
      city: "г. Ташкент, Узбекистан",
      nav: ["Главная", "Директор", "Учителя", "Статистика", "Кабинеты", "Праздники", "Контакты"],
      welcome: "Добро пожаловать!",
      students: "Учеников",
      teachers: "Учителей",
      years: "Лет опыта",
      map: "Показать карту",
      addr: "г. Ташкент, ул. Навои, 123",
      phone: "+998 71 234-56-78",
      email: "school47@edu.uz",
      copy: "© 2026 Все права защищены"
    },
    uz: {
      title: "Alisher Navoiy nomidagi 47-maktab",
      city: "Toshkent shahri",
      nav: ["Bosh", "Direktor", "O'qituvchilar", "Statistika", "Xonalar", "Bayramlar", "Aloqa"],
      welcome: "Xush kelibsiz!",
      students: "O'quvchilar",
      teachers: "O'qituvchilar",
      years: "Yillik tajriba",
      map: "Xaritada",
      addr: "Toshkent, Navoiy ko'chasi, 123",
      phone: "+998 71 234-56-78",
      email: "school47@edu.uz",
      copy: "© 2026 Barcha huquqlar"
    },
    en: {
      title: "School №47 Alisher Navoi",
      city: "Tashkent, Uzbekistan",
      nav: ["Home", "Director", "Teachers", "Statistics", "Facilities", "Holidays", "Contact"],
      welcome: "Welcome!",
      students: "Students",
      teachers: "Teachers",
      years: "Years",
      map: "Show map",
      addr: "Tashkent, Navoi St, 123",
      phone: "+998 71 234-56-78",
      email: "school47@edu.uz",
      copy: "© 2026 All rights"
    }
  }[lang];

  const teachers = [
    { n: "Нодира Рахимова", s: "Математика", r: "4.9", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400" },
    { n: "Азиз Каримов", s: "Информатика", r: "4.8", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400" },
    { n: "Малика Усманова", s: "Английский", r: "5.0", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400" },
    { n: "Шахзод Ахмедов", s: "Физика", r: "4.9", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400" },
    { n: "Дилноза Турсунова", s: "Химия", r: "4.7", img: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400" },
    { n: "Жасур Набиев", s: "Физкультура", r: "4.8", img: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400" }
  ];

  const stats = [
    { y: "2020-2021", n: 845, g: 0 },
    { y: "2021-2022", n: 892, g: 5.6 },
    { y: "2022-2023", n: 934, g: 4.7 },
    { y: "2023-2024", n: 987, g: 5.7 },
    { y: "2024-2025", n: 1024, g: 3.7 }
  ];

  const facilities = [
    { n: "Компьютерный класс", ic: "💻", img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600" },
    { n: "Столовая", ic: "🍽️", img: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600" },
    { n: "Библиотека", ic: "📚", img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600" },
    { n: "Спортзал", ic: "⚽", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600" }
  ];

  const holidays = [
    { n: "Навруз", d: "21 марта", img: "https://images.unsplash.com/photo-1523968098043-a29c0d6f1f28?w=600" },
    { n: "День Независимости", d: "1 сентября", img: "https://images.unsplash.com/photo-1528605105345-5344ea20e269?w=600" },
    { n: "Рамазан Хайит", d: "По календарю", img: "https://images.unsplash.com/photo-1587497098110-1f663e750782?w=600" }
  ];

  return (
    <>
      {loading && (
        <div className="loader-screen">
          <div className="loader-content">
            <div className="loader-logo">
              <div className="loader-icon">🏫</div>
              <div className="loader-rings">
                <div className="ring"></div>
                <div className="ring"></div>
                <div className="ring"></div>
              </div>
            </div>
            <h1 className="loader-title">{lang === 'ru' ? 'Школа №47' : lang === 'uz' ? '47-maktab' : 'School №47'}</h1>
            <div className="loader-bar">
              <div className="loader-progress"></div>
            </div>
            <p className="loader-text">{lang === 'ru' ? 'Загрузка...' : lang === 'uz' ? 'Yuklanmoqda...' : 'Loading...'}</p>
          </div>
        </div>
      )}
      
      <div className={`app ${darkMode ? 'dark' : ''} ${loading ? 'hidden' : ''}`}>
      <button className="theme-btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '☀️' : '🌙'}
      </button>

      <div className="lang-btns">
        {['ru', 'uz', 'en'].map(l => (
          <button key={l} className={lang === l ? 'active' : ''} onClick={() => setLang(l)}>
            {l === 'ru' ? '🇷🇺' : l === 'uz' ? '🇺🇿' : '🇬🇧'}
          </button>
        ))}
      </div>

      <header className={scrolled ? 'scrolled' : ''}>
        <div className="hdr">
          <div className="logo">🏫 {txt.title}</div>
          <button className="burger" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      <nav className={menuOpen ? 'open' : ''}>
        {['home', 'director', 'teachers', 'stats', 'facilities', 'holidays', 'contact'].map((s, i) => (
          <button key={s} className={section === s ? 'active' : ''} onClick={() => { setSection(s); setMenuOpen(false); }}>
            {txt.nav[i]}
          </button>
        ))}
      </nav>

      <main>
        {section === 'home' && (
          <div className="sec">
            <h2>{txt.welcome}</h2>
            <div className="hero">
              <img src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200" alt="School" />
            </div>
            <div className="stats">
              <div className="stat blue">
                <div className="ic">👥</div>
                <div className="num">{counts.s}</div>
                <div className="lbl">{txt.students}</div>
              </div>
              <div className="stat purple">
                <div className="ic">📚</div>
                <div className="num">{counts.t}</div>
                <div className="lbl">{txt.teachers}</div>
              </div>
              <div className="stat green">
                <div className="ic">🏆</div>
                <div className="num">{counts.y}+</div>
                <div className="lbl">{txt.years}</div>
              </div>
            </div>
          </div>
        )}

        {section === 'director' && (
          <div className="sec">
            <h2>Директор</h2>
            <div className="dir">
              <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400" alt="Director" />
              <div>
                <h3>Гулнора Алимова</h3>
                <p>25 лет опыта в образовании</p>
              </div>
            </div>
          </div>
        )}

        {section === 'teachers' && (
          <div className="sec">
            <h2>Наши учителя</h2>
            <div className="teachers">
              {teachers.map((t, i) => (
                <div key={i} className="tcard">
                  <img src={t.img} alt={t.n} />
                  <h3>{t.n}</h3>
                  <p>{t.s}</p>
                  <div className="rating">⭐ {t.r}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {section === 'stats' && (
          <div className="sec">
            <h2>Статистика</h2>
            {stats.map((st, i) => (
              <div key={i} className={`syear ${expandedStats[st.y] ? 'open' : ''}`} onClick={() => setExpandedStats(p => ({ ...p, [st.y]: !p[st.y] }))}>
                <div className="shdr">
                  <span>{st.y}</span>
                  <span className="big">{st.n}</span>
                  <button>{expandedStats[st.y] ? '▼' : '▶'}</button>
                </div>
                <div className="prog"><div style={{ width: `${st.n / 11}%` }}></div></div>
                {expandedStats[st.y] && (
                  <div className="det">
                    <p>Рост: +{st.g}%</p>
                    <p>Мальчики: {Math.round(st.n * 0.52)}</p>
                    <p>Девочки: {Math.round(st.n * 0.48)}</p>
                  </div>
                )}
              </div>
            ))}
            <div className="grow">
              <h3>📈 Рост за 5 лет</h3>
              <div className="gnum">+179</div>
              <div className="gnum">+21%</div>
            </div>
          </div>
        )}

        {section === 'facilities' && (
          <div className="sec">
            <h2>Кабинеты</h2>
            <div className="facs">
              {facilities.map((f, i) => (
                <div key={i} className="fcard">
                  <img src={f.img} alt={f.n} />
                  <div className="fic">{f.ic}</div>
                  <h3>{f.n}</h3>
                </div>
              ))}
            </div>
          </div>
        )}

        {section === 'holidays' && (
          <div className="sec">
            <h2>Праздники</h2>
            {holidays.map((h, i) => (
              <div key={i} className="hcard" onClick={() => setExpandedHoliday(expandedHoliday === i ? null : i)}>
                <img src={h.img} alt={h.n} />
                <div className="hinfo">
                  <h3>{h.n}</h3>
                  <p>{h.d}</p>
                  {expandedHoliday === i && <p className="hdesc">Традиционный праздник</p>}
                </div>
              </div>
            ))}
          </div>
        )}

        {section === 'contact' && (
          <div className="sec">
            <h2>Контакты</h2>
            <div className="cont">
              <div className="citem"><span>📍</span><p>{txt.addr}</p></div>
              <div className="citem"><span>📞</span><p>{txt.phone}</p></div>
              <div className="citem"><span>📧</span><p>{txt.email}</p></div>
              <button className="mbtn" onClick={() => setShowMap(!showMap)}>🗺️ {txt.map}</button>
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
        <p>{txt.title}</p>
        <p>{txt.copy}</p>
      </footer>

      {scrolled && <button className="top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑</button>}
    </div>
    </>
  );
}

export default SchoolApp;