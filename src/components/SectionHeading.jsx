import Reveal from './Reveal.jsx'
import { LEAD } from '../data.js'

export function CenteredTitle({ children, className = '' }) {
  return (
    <div className="row mb-5">
      <div className="col-12 text-center">
        <h2 className={`section-title mb-3 ${className}`.trim()}>{children}</h2>
      </div>
    </div>
  )
}

export function LeadHeading({ children }) {
  return (
    <Reveal className="row mb-5 justify-content-center text-center">
      <div className="col-12 col-md-7 text-center mb-5">
        <h2 className="section-title">{children}</h2>
        <p className="lead">{LEAD}</p>
      </div>
    </Reveal>
  )
}
