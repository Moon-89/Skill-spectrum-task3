import { useEffect, useState } from 'react'
import MobileNav from './MobileNav.jsx'
import { NAV_ITEMS } from '../data.js'

const SPY_SECTIONS = ['home-section', 'features-section', 'about-section', 'our-team-section', 'testimonials-section', 'blog-section', 'contact-section']
const SPY_OFFSET = 300

function DropdownItem({ item }) {
  const external = item.external ? { target: '_blank', rel: 'noopener' } : {}
  return (
    <li className={item.children ? 'has-children' : undefined}>
      <a href={item.href} {...external} className={item.children ? undefined : 'nav-link'}>
        {item.primary ? <span className="text-primary">{item.label}</span> : item.label}
      </a>
      {item.children && (
        <ul className="dropdown">
          {item.children.map((child) => <DropdownItem key={child.label} item={child} />)}
        </ul>
      )}
    </li>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#home-section')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0)
      let current = SPY_SECTIONS[0]
      for (const id of SPY_SECTIONS) {
        const section = document.getElementById(id)
        if (section && section.getBoundingClientRect().top <= SPY_OFFSET) current = id
      }
      // Our Team lives under the About Us menu item.
      setActive(`#${current === 'our-team-section' ? 'about-section' : current}`)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header className={`site-navbar py-2 site-navbar-target${scrolled ? ' is-sticky' : ''}`} role="banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6 col-lg-3 col-xl-4 d-block">
              <div className="mb-0 site-logo h1">
                <a href="#home-section" className="text-black h2 mb-0">imagine<span className="text-primary">.</span> </a>
              </div>
            </div>

            <div className="d-none d-lg-block col-lg-9 col-xl-8 main-menu">
              <nav className="site-navigation position-relative text-end" aria-label="Main">
                <ul className="site-menu main-menu me-auto ms-0 ps-0">
                  {NAV_ITEMS.map((item) => (
                    <li key={item.label} className={item.children ? 'has-children' : undefined}>
                      <a href={item.href} className={`nav-link${active === item.href ? ' active' : ''}`}>{item.label}</a>
                      {item.children && (
                        <ul className="dropdown arrow-top">
                          {item.children.map((child) => <DropdownItem key={child.label} item={child} />)}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="col-6 d-lg-none">
              <button
                type="button"
                className="site-menu-toggle text-black float-end"
                aria-label="Open menu"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(true)}
              >
                <span className="fa-solid fa-bars" style={{ fontSize: '1.5rem' }} aria-hidden="true"></span>
              </button>
            </div>
          </div>
        </div>
      </header>
      <MobileNav open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
