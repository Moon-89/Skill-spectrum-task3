import { useEffect, useRef, useState } from 'react'

// Scroll-triggered fade, driven by the template's [data-kit-reveal] CSS.
export default function Reveal({ animation = 'fade-up', delay = 0, className = '', children }) {
  const ref = useRef(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setRevealed(true)
        observer.disconnect()
      }
    }, { rootMargin: '0px 0px -60px 0px' })
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      data-kit-reveal={animation}
      className={`${className}${revealed ? ' is-revealed' : ''}`}
      style={delay ? { '--kit-reveal-el-delay': `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
