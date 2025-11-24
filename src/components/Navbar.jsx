import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { profile } from '../data/portfolio';

const sectionLinks = [
  { label: 'About', path: '/#about' },
  { label: 'Experience', path: '/#experience' },
  { label: 'Projects', path: '/#projects' },
  { label: 'Contact', path: '/#contact' },
];

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'dark';
  const stored = window.localStorage.getItem('portfolio-theme');
  if (stored) return stored;
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  return prefersLight ? 'light' : 'dark';
};

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  const toggleTheme = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'));

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="brand">
          <span className="brand__mark">{profile.name.split(' ')[0]}</span>
          <span className="brand__meta">{profile.role}</span>
        </Link>
        <nav className={`site-nav ${open ? 'is-open' : ''}`}>
          {sectionLinks.map((link) => (
            <NavLink key={link.label} to={link.path} className="site-nav__link">
              {link.label}
            </NavLink>
          ))}
          <Link to="/#projects" className="pill pill--outline desktop-only">
            View work
          </Link>
        </nav>
        <div className="site-header__actions">
          <button
            type="button"
            className="pill pill--ghost"
            aria-label="Toggle color theme"
            onClick={toggleTheme}
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
