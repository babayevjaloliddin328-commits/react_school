import React, { useState } from 'react';
import './App.css';

export default function SchoolWebsite() {
  const [activeSection, setActiveSection] = useState('home');
  const [expandedHoliday, setExpandedHoliday] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('ru'); // 'ru', 'uz', 'en'

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Translations
  const translations = {
    ru: {
      schoolName: "Школа №47 имени Алишера Навои",
      city: "г. Ташкент, Узбекистан",
      nav: {
        home: "🏠 Главная",
        director: "👔 Директор",
        teachers: "👨‍🏫 Учителя",
        stats: "📊 Статистика",
        facilities: "🏛️ Кабинеты",
        holidays: "🎉 Праздники"
      },
      welcome: "Добро пожаловать в нашу школу!",
      mainBuilding: "Главное здание школы",
      schoolYard: "Школьный двор",
      students: "Учеников в 2024-2025",
      teachers: "Опытных учителей",
      yearsQuality: "Лет качественного образования",
      leadership: "Руководство школы",
      directorPosition: "Директор школы",
      experience: "Опыт работы",
      education: "Образование",
      achievements: "Достижения",
      directorQuote: "Наша цель - воспитать не только образованных, но и нравственных, творческих личностей, готовых к вызовам современного мира.",
      ourTeachers: "Наши учителя",
      skills: "Навыки",
      studentStats: "Статистика учеников",
      academicYear: "Учебный год",
      studentsCount: "учеников",
      growthTitle: "📈 Рост за 5 лет",
      newStudents: "новых учеников",
      growthPercent: "процент роста",
      facilitiesTitle: "Школьные кабинеты и помещения",
      holidaysTitle: "Узбекские праздники",
      description: "📖 Описание:",
      traditions: "🎊 Традиции и обычаи:",
      footer: {
        school: "Школа №47 имени Алишера Навои",
        address: "г. Ташкент, ул. Навои, 123",
        phone: "📞 Телефон: +998 71 234-56-78",
        email: "📧 Email: school47@edu.uz",
        copyright: "© 2025 Все права защищены"
      }
    },
    uz: {
      schoolName: "Alisher Navoiy nomidagi 47-maktab",
      city: "Toshkent shahri, O'zbekiston",
      nav: {
        home: "🏠 Bosh sahifa",
        director: "👔 Direktor",
        teachers: "👨‍🏫 O'qituvchilar",
        stats: "📊 Statistika",
        facilities: "🏛️ Xonalar",
        holidays: "🎉 Bayramlar"
      },
      welcome: "Maktabimizga xush kelibsiz!",
      mainBuilding: "Maktabning asosiy binosi",
      schoolYard: "Maktab hovlisi",
      students: "2024-2025 o'quvchilar",
      teachers: "Tajribali o'qituvchilar",
      yearsQuality: "Yillik sifatli ta'lim",
      leadership: "Maktab rahbariyati",
      directorPosition: "Maktab direktori",
      experience: "Ish tajribasi",
      education: "Ma'lumoti",
      achievements: "Yutuqlari",
      directorQuote: "Bizning maqsadimiz nafaqat bilimli, balki axloqli, ijodiy shaxslarni tarbiyalash, ular zamonaviy dunyoning qiyinchiliklariga tayyor.",
      ourTeachers: "Bizning o'qituvchilar",
      skills: "Ko'nikmalar",
      studentStats: "O'quvchilar statistikasi",
      academicYear: "O'quv yili",
      studentsCount: "o'quvchilar",
      growthTitle: "📈 5 yillik o'sish",
      newStudents: "yangi o'quvchilar",
      growthPercent: "o'sish foizi",
      facilitiesTitle: "Maktab xonalari va binolar",
      holidaysTitle: "O'zbek bayramlari",
      description: "📖 Tavsif:",
      traditions: "🎊 An'analar va urf-odatlar:",
      footer: {
        school: "Alisher Navoiy nomidagi 47-maktab",
        address: "Toshkent sh., Navoiy ko'chasi, 123",
        phone: "📞 Telefon: +998 71 234-56-78",
        email: "📧 Email: school47@edu.uz",
        copyright: "© 2025 Barcha huquqlar himoyalangan"
      }
    },
    en: {
      schoolName: "School №47 named after Alisher Navoi",
      city: "Tashkent, Uzbekistan",
      nav: {
        home: "🏠 Home",
        director: "👔 Director",
        teachers: "👨‍🏫 Teachers",
        stats: "📊 Statistics",
        facilities: "🏛️ Facilities",
        holidays: "🎉 Holidays"
      },
      welcome: "Welcome to our school!",
      mainBuilding: "Main school building",
      schoolYard: "School yard",
      students: "Students in 2024-2025",
      teachers: "Experienced teachers",
      yearsQuality: "Years of quality education",
      leadership: "School leadership",
      directorPosition: "School Director",
      experience: "Work experience",
      education: "Education",
      achievements: "Achievements",
      directorQuote: "Our goal is to educate not only knowledgeable, but also moral, creative individuals ready for the challenges of the modern world.",
      ourTeachers: "Our teachers",
      skills: "Skills",
      studentStats: "Student statistics",
      academicYear: "Academic year",
      studentsCount: "students",
      growthTitle: "📈 5-year growth",
      newStudents: "new students",
      growthPercent: "growth percentage",
      facilitiesTitle: "School rooms and facilities",
      holidaysTitle: "Uzbek holidays",
      description: "📖 Description:",
      traditions: "🎊 Traditions and customs:",
      footer: {
        school: "School №47 named after Alisher Navoi",
        address: "Tashkent, Navoi Street, 123",
        phone: "📞 Phone: +998 71 234-56-78",
        email: "📧 Email: school47@edu.uz",
        copyright: "© 2025 All rights reserved"
      }
    }
  };

  const t = translations[language];

  const teachersData = {
    ru: [
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
    ],
    uz: [
      {
        name: "Nodira Rahimova",
        subject: "Matematika",
        experience: "15 yil",
        education: "MDU, Matematika fakulteti",
        skills: "Algebra, Geometriya, Oliy matematika",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop"
      },
      {
        name: "Aziz Karimov",
        subject: "Informatika",
        experience: "10 yil",
        education: "TATU, Dasturlash",
        skills: "Python, JavaScript, React, Veb-dasturlash",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
      },
      {
        name: "Malika Usmanova",
        subject: "Ingliz tili",
        experience: "12 yil",
        education: "O'zDJTU, Lingvistika",
        skills: "IELTS, TOEFL, Suhbat ingliz tili",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
      },
      {
        name: "Shaxzod Axmedov",
        subject: "Fizika",
        experience: "18 yil",
        education: "O'zMU, Fizika fakulteti",
        skills: "Mexanika, Elektrodinamika, Optika",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
      },
      {
        name: "Dilnoza Tursunova",
        subject: "Kimyo",
        experience: "9 yil",
        education: "O'zMU, Kimyo fakulteti",
        skills: "Organik kimyo, Noorganik kimyo",
        image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop"
      },
      {
        name: "Jasur Nabiyev",
        subject: "Jismoniy tarbiya",
        experience: "14 yil",
        education: "O'zDJTI, Murabbiylik",
        skills: "Futbol, Voleybol, Yengil atletika",
        image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&h=400&fit=crop"
      }
    ],
    en: [
      {
        name: "Nodira Rakhimova",
        subject: "Mathematics",
        experience: "15 years",
        education: "MSU, Faculty of Mathematics",
        skills: "Algebra, Geometry, Higher Mathematics",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop"
      },
      {
        name: "Aziz Karimov",
        subject: "Computer Science",
        experience: "10 years",
        education: "TATU, Programming",
        skills: "Python, JavaScript, React, Web Development",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
      },
      {
        name: "Malika Usmanova",
        subject: "English Language",
        experience: "12 years",
        education: "UzSWLU, Linguistics",
        skills: "IELTS, TOEFL, Conversational English",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
      },
      {
        name: "Shakhzod Akhmedov",
        subject: "Physics",
        experience: "18 years",
        education: "NUUz, Faculty of Physics",
        skills: "Mechanics, Electrodynamics, Optics",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
      },
      {
        name: "Dilnoza Tursunova",
        subject: "Chemistry",
        experience: "9 years",
        education: "NUUz, Faculty of Chemistry",
        skills: "Organic Chemistry, Inorganic Chemistry",
        image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop"
      },
      {
        name: "Jasur Nabiev",
        subject: "Physical Education",
        experience: "14 years",
        education: "UzSPU, Coaching",
        skills: "Football, Volleyball, Athletics",
        image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&h=400&fit=crop"
      }
    ]
  };

  const directorData = {
    ru: {
      name: "Гулнора Алимова",
      position: "Директор школы",
      experience: "25 лет в образовании",
      education: "НУУз, Педагогика",
      achievements: "Заслуженный учитель Узбекистана",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop"
    },
    uz: {
      name: "Gulnora Alimova",
      position: "Maktab direktori",
      experience: "Ta'limda 25 yil",
      education: "O'zMU, Pedagogika",
      achievements: "O'zbekistonning xizmatli o'qituvchisi",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop"
    },
    en: {
      name: "Gulnora Alimova",
      position: "School Director",
      experience: "25 years in education",
      education: "NUUz, Pedagogy",
      achievements: "Honored Teacher of Uzbekistan",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop"
    }
  };

  const holidaysData = {
    ru: [
      {
        name: "Навруз",
        date: "21 марта",
        description: "Праздник весны и обновления природы, символизирует начало нового года по астрономическому солнечному календарю.",
        traditions: "Готовят сумаляк (блюдо из пророщенных зёрен пшеницы), плов, самсу. Устраивают народные гуляния, концерты, спортивные состязания.",
        image: "https://images.unsplash.com/photo-1523968098043-a29c0d6f1f28?w=600&h=400&fit=crop"
      },
      {
        name: "День Независимости",
        date: "1 сентября",
        description: "Главный государственный праздник Узбекистана, отмечающий обретение независимости в 1991 году.",
        traditions: "Военные парады, праздничные концерты, фейерверки. В школах проводятся торжественные линейки.",
        image: "https://images.unsplash.com/photo-1528605105345-5344ea20e269?w=600&h=400&fit=crop"
      }
    ],
    uz: [
      {
        name: "Navro'z",
        date: "21 mart",
        description: "Bahor va tabiatning yangilanish bayrami, astronomik quyosh taqvimi bo'yicha yangi yilning boshlanishini anglatadi.",
        traditions: "Sumalak (undirilgan bug'doy donlaridan tayyorlangan taom), osh, somsa tayyorlanadi. Xalq sayillari, konsertlar, sport musobaqalari o'tkaziladi.",
        image: "https://images.unsplash.com/photo-1523968098043-a29c0d6f1f28?w=600&h=400&fit=crop"
      },
      {
        name: "Mustaqillik kuni",
        date: "1 sentyabr",
        description: "O'zbekistonning asosiy davlat bayrami, 1991 yilda mustaqillikka erishilganini nishonlaydi.",
        traditions: "Harbiy paradlar, bayram konsertlari, fanar. Maktablarda tantanali chiziqlar o'tkaziladi.",
        image: "https://images.unsplash.com/photo-1528605105345-5344ea20e269?w=600&h=400&fit=crop"
      }
    ],
    en: [
      {
        name: "Navruz",
        date: "March 21",
        description: "Spring festival and nature renewal, symbolizes the beginning of the new year according to the astronomical solar calendar.",
        traditions: "Prepare sumalak (dish from sprouted wheat grains), pilaf, samsa. Organize folk festivals, concerts, sports competitions.",
        image: "https://images.unsplash.com/photo-1523968098043-a29c0d6f1f28?w=600&h=400&fit=crop"
      },
      {
        name: "Independence Day",
        date: "September 1",
        description: "The main state holiday of Uzbekistan, celebrating the achievement of independence in 1991.",
        traditions: "Military parades, festive concerts, fireworks. Schools hold ceremonial lineups.",
        image: "https://images.unsplash.com/photo-1528605105345-5344ea20e269?w=600&h=400&fit=crop"
      }
    ]
  };

  const facilitiesData = {
    ru: [
      {
        name: "Компьютерный класс",
        description: "30 современных компьютеров с высокоскоростным интернетом",
        equipment: "Интерактивная доска, проектор, принтеры 3D",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop"
      },
      {
        name: "Столовая",
        description: "Просторная столовая на 200 мест с качественным питанием",
        equipment: "Горячие обеды, салаты, выпечка, свежие фрукты",
        image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&h=400&fit=crop"
      }
    ],
    uz: [
      {
        name: "Kompyuter xonasi",
        description: "Yuqori tezlikdagi internetga ega 30 ta zamonaviy kompyuter",
        equipment: "Interaktiv doska, proyektor, 3D printerlar",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop"
      },
      {
        name: "Oshxona",
        description: "Sifatli ovqatlanish bilan 200 o'rinli keng oshxona",
        equipment: "Issiq ovqatlar, salatlar, pishiriqlar, yangi mevalar",
        image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&h=400&fit=crop"
      }
    ],
    en: [
      {
        name: "Computer Lab",
        description: "30 modern computers with high-speed internet",
        equipment: "Interactive board, projector, 3D printers",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop"
      },
      {
        name: "Cafeteria",
        description: "Spacious cafeteria for 200 people with quality food",
        equipment: "Hot meals, salads, pastries, fresh fruits",
        image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&h=400&fit=crop"
      }
    ]
  };

  const studentStats = [
    { year: "2020-2021", students: 845 },
    { year: "2021-2022", students: 892 },
    { year: "2022-2023", students: 934 },
    { year: "2023-2024", students: 987 },
    { year: "2024-2025", students: 1024 }
  ];

  const schoolImages = [
    { image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=500&fit=crop" },
    { image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=800&h=500&fit=crop" }
  ];

  return (
    <div className={`school-website ${isDarkMode ? 'dark-mode' : ''}`}>
      {/* Theme Toggle Button */}
      <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
        <span className="theme-icon">{isDarkMode ? '☀️' : '🌙'}</span>
      </button>

      {/* Language Switcher */}
      <div className="language-switcher">
        <button 
          className={`lang-btn ${language === 'ru' ? 'active' : ''}`}
          onClick={() => setLanguage('ru')}
        >
          🇷🇺 RU
        </button>
        <button 
          className={`lang-btn ${language === 'uz' ? 'active' : ''}`}
          onClick={() => setLanguage('uz')}
        >
          🇺🇿 UZ
        </button>
        <button 
          className={`lang-btn ${language === 'en' ? 'active' : ''}`}
          onClick={() => setLanguage('en')}
        >
          🇬🇧 EN
        </button>
      </div>

      {/* Header */}
      <header className="header">
        <div className="header-container">
          <h1>🏫 {t.schoolName}</h1>
          <p>{t.city}</p>
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
                {t.nav[section]}
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
            <h2 className="section-title">{t.welcome}</h2>
            <div className="home-images">
              <div className="home-image-card">
                <img src={schoolImages[0].image} alt={t.mainBuilding} />
                <p className="home-image-title">{t.mainBuilding}</p>
              </div>
              <div className="home-image-card">
                <img src={schoolImages[1].image} alt={t.schoolYard} />
                <p className="home-image-title">{t.schoolYard}</p>
              </div>
            </div>
            <div className="stats-grid">
              <div className="stat-card blue">
                <div className="stat-emoji">👥</div>
                <h3 className="stat-number">1024</h3>
                <p className="stat-label">{t.students}</p>
              </div>
              <div className="stat-card indigo">
                <div className="stat-emoji">📚</div>
                <h3 className="stat-number">45</h3>
                <p className="stat-label">{t.teachers}</p>
              </div>
              <div className="stat-card purple">
                <div className="stat-emoji">🏆</div>
                <h3 className="stat-number">30+</h3>
                <p className="stat-label">{t.yearsQuality}</p>
              </div>
            </div>
          </div>
        )}

        {/* Director Section */}
        {activeSection === 'director' && (
          <div className="section-container">
            <h2 className="section-title">{t.leadership}</h2>
            <div className="director-wrapper">
              <div className="director-card">
                <div className="director-content">
                  <img src={directorData[language].image} alt={directorData[language].name} className="director-image" />
                  <div className="director-info">
                    <h3 className="director-name">{directorData[language].name}</h3>
                    <p className="director-position">{directorData[language].position}</p>
                    <div className="director-details">
                      <div className="director-detail">
                        <span className="director-detail-label">{t.experience}:</span>
                        <span>{directorData[language].experience}</span>
                      </div>
                      <div className="director-detail">
                        <span className="director-detail-label">{t.education}:</span>
                        <span>{directorData[language].education}</span>
                      </div>
                      <div className="director-detail">
                        <span className="director-detail-label">{t.achievements}:</span>
                        <span>{directorData[language].achievements}</span>
                      </div>
                    </div>
                    <div className="director-quote">
                      <p>"{t.directorQuote}"</p>
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
            <h2 className="section-title">{t.ourTeachers}</h2>
            <div className="teachers-grid">
              {teachersData[language].map((teacher, index) => (
                <div key={index} className="teacher-card">
                  <img src={teacher.image} alt={teacher.name} className="teacher-image" />
                  <div className="teacher-info">
                    <h3 className="teacher-name">{teacher.name}</h3>
                    <p className="teacher-subject">{teacher.subject}</p>
                    <div className="teacher-details">
                      <p className="teacher-detail">
                        <span className="teacher-detail-label">{t.experience}:</span> {teacher.experience}
                      </p>
                      <p className="teacher-detail">
                        <span className="teacher-detail-label">{t.education}:</span> {teacher.education}
                      </p>
                      <p className="teacher-detail">
                        <span className="teacher-detail-label">{t.skills}:</span> {teacher.skills}
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
            <h2 className="section-title">{t.studentStats}</h2>
            <div className="statistics-wrapper">
              {studentStats.map((stat, index) => (
                <div key={index} className="year-stat">
                  <div className="year-stat-header">
                    <div className="year-label">
                      <h3>{stat.year}</h3>
                      <p>{t.academicYear}</p>
                    </div>
                    <div className="student-count">
                      <p>{stat.students}</p>
                      <p>{t.studentsCount}</p>
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
                <h3 className="growth-title">{t.growthTitle}</h3>
                <div className="growth-content">
                  <p className="growth-number">+179</p>
                  <p className="growth-label">{t.newStudents}</p>
                  <p className="growth-percent">+21%</p>
                  <p className="growth-label">{t.growthPercent}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Facilities Section */}
        {activeSection === 'facilities' && (
          <div className="section-container">
            <h2 className="section-title">{t.facilitiesTitle}</h2>
            <div className="facilities-grid">
              {facilitiesData[language].map((facility, index) => (
                <div key={index} className="facility-card">
                  <img src={facility.image} alt={facility.name} className="facility-image" />
                  <div className="facility-info">
                    <h3 className="facility-name">{facility.name}</h3>
                    <p className="facility-description">{facility.description}</p>
                    <div className="facility-equipment">
                      <p>{facility.equipment}</p>
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
            <h2 className="section-title">{t.holidaysTitle}</h2>
            <div className="holidays-wrapper">
              {holidaysData[language].map((holiday, index) => (
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
                          <h4>{t.description}</h4>
                          <p>{holiday.description}</p>
                        </div>
                        <div className="holiday-traditions">
                          <h4>{t.traditions}</h4>
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
          <p className="footer-title">🏫 {t.footer.school}</p>
          <p className="footer-address">{t.footer.address}</p>
          <p className="footer-contact">{t.footer.phone}</p>
          <p className="footer-contact">{t.footer.email}</p>
          <p className="footer-copyright">{t.footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
}