import Reveal from './Reveal.jsx'
import { LeadHeading } from './SectionHeading.jsx'
import { TEAM, TEAM_SOCIALS } from '../data.js'

export default function Team() {
  return (
    <div className="site-section" id="our-team-section">
      <div className="container">
        <LeadHeading>Our Team</LeadHeading>
        <div className="row">
          {TEAM.map((member) => (
            <Reveal key={member.name} className="col-lg-4 col-md-6 mb-4" delay={member.delay}>
              <div className="person">
                <div className="bio-img">
                  <figure>
                    <img src={member.photo} alt={member.name} className="img-fluid" width="500" height="500" loading="lazy" />
                  </figure>
                  <div className="social">
                    {TEAM_SOCIALS.map((social) => (
                      <a key={social.label} href={social.href} target="_blank" rel="noopener" aria-label={social.label}>
                        <span className={social.icon} aria-hidden="true"></span>
                      </a>
                    ))}
                  </div>
                </div>
                <h2 className="text-black h1">{member.name}</h2>
                <span className="sub-title d-block mb-3">{member.role}</span>
                <p>{member.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}
