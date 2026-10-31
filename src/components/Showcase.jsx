import Reveal from './Reveal.jsx'
import { SHOWCASE } from '../data.js'

function ShowcaseRow({ item }) {
  const { reversed } = item
  return (
    <div className={`${reversed ? 'mt-5 ' : ''}row mb-5 site-section`}>
      <Reveal className={`col-lg-7${reversed ? ' order-1 order-lg-2' : ''}`} animation={reversed ? 'fade-left' : 'fade-right'}>
        <img src={item.image} alt="" className="img-fluid" width={item.width} height={item.height} loading="lazy" />
      </Reveal>
      <div className={reversed ? 'col-lg-5 pe-lg-5 me-auto mt-5 order-2 order-lg-1' : 'col-lg-5 ps-lg-5 ms-auto mt-md-5'}>
        <h2 className="text-black">{item.title}</h2>
        <p className="mb-4">{item.text}</p>
        <Reveal className="author-box" animation={reversed ? 'fade-right' : 'fade-left'}>
          <div className="d-flex mb-4">
            <div className="me-3">
              <img src={item.photo} alt="" className="img-fluid rounded-circle" width="500" height="500" loading="lazy" />
            </div>
            <div className="me-auto text-black">
              <strong className="fw-bold mb-0">{item.author}</strong> <br />
              {item.role}
            </div>
          </div>
          <blockquote>{item.quote}</blockquote>
        </Reveal>
      </div>
    </div>
  )
}

export default function Showcase() {
  return (
    <div className="feature-big">
      <div className="container">
        {SHOWCASE.map((item, index) => <ShowcaseRow key={index} item={item} />)}
      </div>
    </div>
  )
}
