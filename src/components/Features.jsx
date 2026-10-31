import Reveal from './Reveal.jsx'
import { LeadHeading } from './SectionHeading.jsx'
import { FEATURES } from '../data.js'

export default function Features() {
  return (
    <div className="site-section" id="features-section">
      <div className="container">
        <LeadHeading>Imagine Features</LeadHeading>
        <div className="row align-items-stretch">
          {FEATURES.map((feature) => (
            <Reveal key={feature.title} className="col-md-6 col-lg-4 mb-4 mb-lg-4" delay={feature.delay}>
              <div className="unit-4 d-block">
                <div className="unit-4-icon mb-3">
                  <span className="icon-wrap"><span className={`text-primary ${feature.icon}`} aria-hidden="true"></span></span>
                </div>
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                  <p><a href="#">Learn More</a></p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}
