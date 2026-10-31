import Reveal from './Reveal.jsx'
import { CenteredTitle } from './SectionHeading.jsx'
import { MISSION } from '../data.js'

export default function About() {
  return (
    <div className="site-section bg-light" id="about-section">
      <div className="container">
        <CenteredTitle>About Us</CenteredTitle>
        <div className="row mb-5">
          <Reveal className="col-lg-6" animation="fade-right">
            <img src="images/undraw_bookmarks_r6up.svg" alt="" className="img-fluid" width="902" height="674" loading="lazy" />
          </Reveal>
          <div className="col-lg-5 ms-auto ps-lg-5">
            <h2 className="text-black mb-4 h3 fw-bold">Our Mission</h2>
            <p className="mb-4">{MISSION.text}</p>
            <ul className="ul-check mb-5 list-unstyled success">
              {MISSION.points.map((point) => <li key={point}>{point}</li>)}
            </ul>
            <p><a href="#" className="btn btn-primary">Learn More</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
