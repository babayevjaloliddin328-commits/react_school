import React, { useState } from 'react';
import './App.css'

export default function SchoolWebsite() {
  const [activeSection, setActiveSection] = useState('home');
  const [expandedHoliday, setExpandedHoliday] = useState(null);

  const teachers = [
    {
      name: "Нодира Рахимова",
      subject: "Математика",
      experience: "15 лет",
      education: "МГУ, Факультет математики",
      skills: "Алгебра, Геометрия, Высшая математика",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop"
    },
    {
      name: "Азиз Каримов",
      subject: "Информатика",
      experience: "10 лет",
      education: "ТАТУ, Программирование",
      skills: "Python, JavaScript, React, Веб-разработка",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
      name: "Малика Усманова",
      subject: "Английский язык",
      experience: "12 лет",
      education: "УзГУМЯ, Лингвистика",
      skills: "IELTS, TOEFL, Разговорный английский",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
    },
    {
      name: "Шахзод Ахмедов",
      subject: "Физика",
      experience: "18 лет",
      education: "НУУз, Физический факультет",
      skills: "Механика, Электродинамика, Оптика",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
    },
    {
      name: "Дилноза Турсунова",
      subject: "Химия",
      experience: "9 лет",
      education: "НУУз, Химический факультет",
      skills: "Органическая химия, Неорганическая химия",
      image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop"
    },
    {
      name: "Жасур Набиев",
      subject: "Физкультура",
      experience: "14 лет",
      education: "УзГИФК, Тренерское дело",
      skills: "Футбол, Волейбол, Легкая атлетика",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&h=400&fit=crop"
    }
  ];

  const director = {
    name: "Гулнора Алимова",
    position: "Директор школы",
    experience: "25 лет в образовании",
    education: "НУУз, Педагогика",
    achievements: "Заслуженный учитель Узбекистана",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop"
  };

  const studentStats = [
    { year: "2020-2021", students: 845 },
    { year: "2021-2022", students: 892 },
    { year: "2022-2023", students: 934 },
    { year: "2023-2024", students: 987 },
    { year: "2024-2025", students: 1024 }
  ];

  const holidays = [
    {
      name: "Навруз",
      date: "21 марта",
      description: "Праздник весны и обновления природы, символизирует начало нового года по астрономическому солнечному календарю.",
      traditions: "Готовят сумаляк (блюдо из пророщенных зёрен пшеницы), плов, самсу. Устраивают народные гуляния, концерты, спортивные состязания. Люди надевают новую одежду и посещают родственников.",
      image: "https://images.unsplash.com/photo-1523968098043-a29c0d6f1f28?w=600&h=400&fit=crop"
    },
    {
      name: "День Независимости",
      date: "1 сентября",
      description: "Главный государственный праздник Узбекистана, отмечающий обретение независимости в 1991 году.",
      traditions: "Военные парады, праздничные концерты, фейерверки. В школах проводятся торжественные линейки, ученики выступают с патриотическими песнями и стихами.",
      image: "https://images.unsplash.com/photo-1528605105345-5344ea20e269?w=600&h=400&fit=crop"
    },
    {
      name: "Рамазан Хайит (Ураза-байрам)",
      date: "По лунному календарю",
      description: "Праздник разговения после месяца Рамадан, один из главных религиозных праздников мусульман.",
      traditions: "Утренняя праздничная молитва в мечети, приготовление праздничных блюд (плов, самса, различные сладости). Люди дарят подарки детям, помогают нуждающим.",
      image: "https://images.unsplash.com/photo-1587497098110-1f663e750782?w=600&h=400&fit=crop"
    },
    {
      name: "Курбан Хайит (Курбан-байрам)",
      date: "По лунному календарю",
      description: "Праздник жертвоприношения, отмечается через 70 дней после Рамазан Хайита.",
      traditions: "Праздничная молитва, жертвоприношение животных (баран, корова). Мясо делится на три части: для семьи, для родственников и для бедных. Посещение родственников и друзей.",
      image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=600&h=400&fit=crop"
    },
    {
      name: "День Учителя",
      date: "1 октября", 

      description: "Праздник, посвящённый уважению и благодарности учителям за их труд.",
      traditions: "Ученики поздравляют учителей, дарят цветы и подарки. В школах проводятся концерты, конкурсы. Старшеклассники проводят уроки вместо учителей.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop"
    }
  ];

  const facilities = [
    {
      name: "Компьютерный класс",
      description: "30 современных компьютеров с высокоскоростным интернетом",
      equipment: "Интерактивная доска, проектор, принтеры 3D",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop"
    },
    {
      name: "Столовая",
      description: "Просторная столовая на 200 мест с качественным питанием",
      menu: "Горячие обеды, салаты, выпечка, свежие фрукты",
      image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&h=400&fit=crop"
    },
    {
      name: "Библиотека",
      description: "Более 15,000 книг на узбекском, русском и английском языках",
      services: "Читальный зал, электронный каталог, медиатека",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&h=400&fit=crop"
    },
    {
      name: "Спортивный зал",
      description: "Современный зал для занятий физкультурой и спортивных соревнований",
      equipment: "Баскетбольные кольца, волейбольная сетка, гимнастические снаряды",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop"
    },
    {
      name: "Химическая лаборатория",
      description: "Оборудованная лаборатория для практических занятий",
      equipment: "Реактивы, микроскопы, химическая посуда, вытяжные шкафы",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop"
    },
    {
      name: "Физическая лаборатория",
      description: "Класс для экспериментов и демонстраций",
      equipment: "Электрические приборы, оптические инструменты, измерительные устройства",
      image: "https://images.unsplash.com/photo-1581093458791-9d58f2f87b18?w=600&h=400&fit=crop"
    }
  ];

  const schoolImages = [
    {
      title: "Главное здание школы",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=500&fit=crop"
    },
    {
      title: "Школьный двор",
      image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=800&h=500&fit=crop"
    }
  ];

  return (
    <div className="school-website">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <h1>🏫 Школа №12 имени Abdula Навои</h1>
          <p>г. Ташкент, Узбекистан</p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-buttons">
            {['home', 'director', 'teachers', 'stats', 'facilities', 'holidays'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`nav-button ${activeSection === section ? 'active' : 'inactive'}`}
              >
                {section === 'home' && '🏠 Главная'}
                {section === 'director' && '👔 Директор'}
                {section === 'teachers' && '👨‍🏫 Учителя'}
                {section === 'stats' && '📊 Статистика'}
                {section === 'facilities' && '🏛️ Кабинеты'}
                {section === 'holidays' && '🎉 Праздники'}
              </button>
            ))}
          </div>
        </div>
      </nav>
      


      {/* Main Content */}
      <main className="main-content">
        {/* Home Section */}
        {activeSection === 'home' && (
          <div className="section-container">
            <h2 className="section-title">Добро пожаловать в нашу школу!</h2>
            <div className="home-images">
              {schoolImages.map((item, index) => (
                <div key={index} className="home-image-card">
                  <img src={item.image} alt={item.title} />
                  <p className="home-image-title">{item.title}</p>
                </div>
              ))}
            </div>
            <div className="stats-grid">
              <div className="stat-card blue">
                <div className="stat-emoji">👥</div>
                <h3 className="stat-number">1024</h3>
                <p className="stat-label">Учеников в 2024-2025</p>
              </div>
              <div className="stat-card indigo">
                <div className="stat-emoji">📚</div>
                <h3 className="stat-number">45</h3>
                <p className="stat-label">Опытных учителей</p>
              </div>
              <div className="stat-card purple">
                <div className="stat-emoji">🏆</div>
                <h3 className="stat-number">30+</h3>
                <p className="stat-label">Лет качественного образования</p>
              </div>
            </div>
          </div>
        )}

        {/* Director Section */}
        {activeSection === 'director' && (
          <div className="section-container">
            <h2 className="section-title">Руководство школы</h2>
            <div className="director-wrapper">
              <div className="director-card">
                <div className="director-content">
                  <img src={director.image} alt={director.name} className="director-image" />
                  <div className="director-info">
                    <h3 className="director-name">{director.name}</h3>
                    <p className="director-position">{director.position}</p>
                    <div className="director-details">
                      <div className="director-detail">
                        <span className="director-detail-label">Опыт работы:</span>
                        <span>{director.experience}</span>
                      </div>
                      <div className="director-detail">
                        <span className="director-detail-label">Образование:</span>
                        <span>{director.education}</span>
                      </div>
                      <div className="director-detail">
                        <span className="director-detail-label">Достижения:</span>
                        <span>{director.achievements}</span>
                      </div>
                    </div>
                    <div className="director-quote">
                      <p>
                        "Наша цель - воспитать не только образованных, но и нравственных, творческих личностей, 
                        готовых к вызовам современного мира."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Teachers Section */}
        {activeSection === 'teachers' && (
          <div className="section-container">
            <h2 className="section-title">Наши учителя</h2>
            <div className="teachers-grid">
              {teachers.map((teacher, index) => (
                <div key={index} className="teacher-card">
                  <img src={teacher.image} alt={teacher.name} className="teacher-image" />
                  <div className="teacher-info">
                    <h3 className="teacher-name">{teacher.name}</h3>
                    <p className="teacher-subject">{teacher.subject}</p>
                    <div className="teacher-details">
                      <p className="teacher-detail">
                        <span className="teacher-detail-label">Опыт:</span> {teacher.experience}
                      </p>
                      <p className="teacher-detail">
                        <span className="teacher-detail-label">Образование:</span> {teacher.education}
                      </p>
                      <p className="teacher-detail">
                        <span className="teacher-detail-label">Навыки:</span> {teacher.skills}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Statistics Section */}
        {activeSection === 'stats' && (
          <div className="section-container">
            <h2 className="section-title">Статистика учеников</h2>
            <div className="statistics-wrapper">
              {studentStats.map((stat, index) => (
                <div key={index} className="year-stat">
                  <div className="year-stat-header">
                    <div className="year-label">
                      <h3>{stat.year}</h3>
                      <p>Учебный год</p>
                    </div>
                    <div className="student-count">
                      <p>{stat.students}</p>
                      <p>учеников</p>
                    </div>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${(stat.students / 1100) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
              <div className="growth-card">
                <h3 className="growth-title">📈 Рост за 5 лет</h3>
                <div className="growth-content">
                  <p className="growth-number">+179</p>
                  <p className="growth-label">новых учеников</p>
                  <p className="growth-percent">+21%</p>
                  <p className="growth-label">процент роста</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Facilities Section */}
        {activeSection === 'facilities' && (
          <div className="section-container">
            <h2 className="section-title">Школьные кабинеты и помещения</h2>
            <div className="facilities-grid">
              {facilities.map((facility, index) => (
                <div key={index} className="facility-card">
                  <img src={facility.image} alt={facility.name} className="facility-image" />
                  <div className="facility-info">
                    <h3 className="facility-name">{facility.name}</h3>
                    <p className="facility-description">{facility.description}</p>
                    <div className="facility-equipment">
                      <p>{facility.equipment || facility.menu || facility.services}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Holidays Section */}
        {activeSection === 'holidays' && (
          <div className="section-container">
            <h2 className="section-title">Узбекские праздники</h2>
            <div className="holidays-wrapper">
              {holidays.map((holiday, index) => (
                <div key={index} className="holiday-card">
                  <div
                    className="holiday-header"
                    onClick={() => setExpandedHoliday(expandedHoliday === index ? null : index)}
                  >
                    <div className="holiday-header-content">
                      <div className="holiday-title-section">
                        <div className="holiday-emoji">📅</div>
                        <div>
                          <h3 className="holiday-name">{holiday.name}</h3>
                          <p className="holiday-date">{holiday.date}</p>
                        </div>
                      </div>
                      <div className="holiday-chevron">
                        {expandedHoliday === index ? '▲' : '▼'}
                      </div>
                    </div>
                  </div>

                  {expandedHoliday === index && (
                    <div className="holiday-body">
                      <img src={holiday.image} alt={holiday.name} className="holiday-image" />
                      <div className="holiday-details">
                        <div className="holiday-section">
                          <h4>📖 Описание:</h4>
                          <p>{holiday.description}</p>
                        </div>
                        <div className="holiday-traditions">
                          <h4>🎊 Традиции и обычаи:</h4>
                          <p>{holiday.traditions}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-title">🏫 Школа №47 имени Алишера Навои</p>
          <p className="footer-address">г. Ташкент, ул. Навои, 123</p>
          <p className="footer-contact">📞 Телефон: +998 71 234-56-78</p>
          <p className="footer-contact">📧 Email: school47@edu.uz</p>
          <p className="footer-copyright">© 2025 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
}