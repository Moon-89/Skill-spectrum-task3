import { useEffect, useRef, useState } from 'react'
import { NAV_ITEMS } from '../data.js'

const CLOSE_MS = 300

function MobileItem({ item, onNavigate }) {
  const [expanded, setExpanded] = useState(false)
  const external = item.external ? { target: '_blank', rel: 'noopener' } : {}

  return (
    <li>
      <a href={item.href} {...external} onClick={(event) => onNavigate(event, item)}>{item.label}</a>
      {item.children && (
        <>
          <button
            type="button"
            className="kit-mobile-nav__sub-toggle"
            aria-expanded={expanded}
            aria-label={`Toggle ${item.label} submenu`}
            onClick={() => setExpanded((value) => !value)}
          >
            <span aria-hidden="true"></span>
          </button>
          <ul className="kit-mobile-nav__sub" hidden={!expanded}>
            {item.children.map((child) => <MobileItem key={child.label} item={child} onNavigate={onNavigate} />)}
          </ul>
        </>
      )}
    </li>
  )
}

export default function MobileNav({ open, onClose }) {
  const dialogRef = useRef(null)
  const [closing, setClosing] = useState(false)

  useEffect(() => {
    const dialog = dialogRef.current
    if (open && !dialog.open) {
      dialog.showModal()
      document.documentElement.classList.add('kit-mobile-nav-open')
    }
  }, [open])

  // Closes the menu if the viewport grows past the mobile breakpoint.
  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 992px)')
    const onChange = (event) => { if (event.matches) dialogRef.current?.close() }
    desktop.addEventListener('change', onChange)
    return () => desktop.removeEventListener('change', onChange)
  }, [])

  const handleClosed = () => {
    document.documentElement.classList.remove('kit-mobile-nav-open')
    setClosing(false)
    onClose()
  }

  const animateClose = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      dialogRef.current.close()
      return
    }
    setClosing(true)
    setTimeout(() => dialogRef.current?.close(), CLOSE_MS)
  }

  const handleNavigate = (event, item) => {
    if (item.external) return
    event.preventDefault()
    if (item.href === '#') return
    dialogRef.current.close()
    document.querySelector(item.href)?.scrollIntoView()
    history.pushState(null, '', item.href)
  }

  return (
    <dialog
      ref={dialogRef}
      className={`kit-mobile-nav kit-mobile-nav--right${closing ? ' is-closing' : ''}`}
      aria-label="Mobile menu"
      onClose={handleClosed}
      onCancel={(event) => { event.preventDefault(); animateClose() }}
      onClick={(event) => { if (event.target === dialogRef.current) animateClose() }}
    >
      <div className="kit-mobile-nav__panel">
        <div className="kit-mobile-nav__head">
          <button type="button" className="kit-mobile-nav__close" aria-label="Close menu" onClick={animateClose}><span aria-hidden="true">&times;</span></button>
        </div>
        <nav className="kit-mobile-nav__body" aria-label="Mobile">
          <ul className="kit-mobile-nav__list">
            {NAV_ITEMS.map((item) => <MobileItem key={item.label} item={item} onNavigate={handleNavigate} />)}
          </ul>
        </nav>
      </div>
    </dialog>
  )
}
