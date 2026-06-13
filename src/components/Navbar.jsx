import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { profile } from '../data/profile'
import { scrollToSection, scrollToTop } from '../lib/scroll'
import Icon from './Icon'

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'personal', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Navigate home (if needed), then scroll to the target section.
  const go = (id) => {
    setOpen(false)
    if (pathname !== '/') {
      navigate('/')
      window.setTimeout(() => scrollToSection(id), 70)
    } else {
      scrollToSection(id)
    }
  }

  const goHome = () => {
    setOpen(false)
    if (pathname !== '/') navigate('/')
    else scrollToTop()
  }

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container nav__inner">
        <button className="nav__brand" onClick={goHome}>
          {profile.firstName}
          <span className="dot">.</span>
        </button>

        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault()
                go(link.id)
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            className="btn btn--ghost nav__cta"
            href={profile.social[0].url}
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="github" size={16} /> GitHub
          </a>
        </nav>

        <button
          className="nav__toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <Icon name={open ? 'close' : 'menu'} size={20} />
        </button>
      </div>
    </header>
  )
}
