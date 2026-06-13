// With HashRouter the URL hash is the route, so we can't rely on #anchor links
// for in-page navigation — scroll to section ids manually instead.

const NAV_HEIGHT = 68

export function scrollToSection(id) {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT - 12
  window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' })
}

export function scrollToTop(smooth = true) {
  window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' })
}
