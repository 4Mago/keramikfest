import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import './App.css';

const NAV = [
  { path: '/julbord', label: 'Julbord' },
  { path: '/event', label: 'Event' },
  { path: '/personalvard', label: 'Personalvård' },
  { path: '/firmafest', label: 'Firmafest' },
  { path: '/dreja', label: 'Dreja' },
  { path: '/team', label: 'Team' },
  { path: '/samarbete', label: 'Samarbete' },
  { path: '/stress', label: 'Stress' },
  { path: '/mohippa', label: 'Möhippa' },
  { path: '/svensexa', label: 'Svensexa' },
  { path: '/medeltid', label: 'Medeltid' },
  { path: '/prova-pa-dreja', label: 'Prova på dreja' },
  { path: '/sushi-skapa-o-at', label: 'Sushi skapa o ät' },
  { path: '/mat', label: 'Mat' },
  { path: '/presentkort', label: 'Presentkort' },
  { path: '/web-butik', label: 'Web butik' },
  { path: '/galleri-deltagare', label: 'Galleri Deltagare' },
  { path: '/galleri-jeannette', label: 'Galleri Jeannette' },
  { path: '/referenser', label: 'Referenser' },
  { path: '/om-jeannette', label: 'Om Jeannette' },
  { path: '/prislista', label: 'Prislista' },
  { path: '/kontakt', label: 'Kontakta oss Karta' },
  { path: '/english', label: 'English' },
];

const RIGHT_IMAGES = [
  '/media/home/smalvas.jpg',
  '/media/home/p3.jpg',
  '/media/home/lp4.jpg',
  '/media/home/lp9.jpg',
  '/media/home/uf1.jpg',
];

export default function Layout() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Close drawer after navigation on mobile
    setIsNavOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const el = document.querySelector('.header-left');
    if (!el) return;

    const setVars = () => {
      const rect = el.getBoundingClientRect();
      const h = Math.max(0, Math.ceil(rect.height));
      document.documentElement.style.setProperty('--left-header-height', `${h}px`);
    };

    setVars();

    let ro;
    if (typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(() => setVars());
      ro.observe(el);
    }

    window.addEventListener('resize', setVars);
    return () => {
      window.removeEventListener('resize', setVars);
      ro?.disconnect();
    };
  }, []);

  return (
    <>
      <header className="site-header">
        <div className="site-header-top">
          <Link to="/" className="header-left" aria-label="Hem">
            <img className="header-left-logo" src="/media/ui/dreja.webp" alt="Hem" />
            <div className="company-info">
              Jeannette&apos;s Keramik &amp; Event AB
              <br />
              <span className="tagline">i Sundbyberg, Stockholm</span>
              <br />
              070-733 88 18
            </div>
          </Link>
          <button
            type="button"
            className="nav-toggle"
            aria-label={isNavOpen ? 'Stäng meny' : 'Öppna meny'}
            aria-controls="site-nav"
            aria-expanded={isNavOpen}
            onClick={() => setIsNavOpen((v) => !v)}
          >
            <span aria-hidden="true" className="nav-toggle-icon">
              ☰
            </span>
          </button>
        </div>
        <div className="header-title">
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            <h1>Välkommen till Keramikfest</h1>
          </Link>
          <div className="subtitle">Det personliga valet!</div>
        </div>
      </header>

      <div className="layout-body">
        <div
          className={isNavOpen ? 'nav-overlay nav-overlay-open' : 'nav-overlay'}
          onClick={() => setIsNavOpen(false)}
          aria-hidden={!isNavOpen}
        />

        <nav id="site-nav" className={isNavOpen ? 'nav-sidebar nav-sidebar-open' : 'nav-sidebar'}>
          <ul>
            {NAV.map(({ path, label }) => (
              <li key={path}>
                <Link to={path} onClick={() => setIsNavOpen(false)}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <main className="main-content">
          <Outlet />
        </main>

        <aside className="right-column">
          {RIGHT_IMAGES.map((src) => (
            <img key={src} src={src} alt="" />
          ))}
        </aside>
      </div>

      <footer className="site-footer">
        <Link to="/">Tillbaka till startsidan</Link>
      </footer>
    </>
  );
}
