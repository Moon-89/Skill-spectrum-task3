import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import { CenteredTitle } from './SectionHeading.jsx'
import { TESTIMONIALS } from '../data.js'

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function Testimonials() {
  const swiperRef = useRef(null)
  const [current, setCurrent] = useState(0)

  return (
    <div className="site-section testimonial-wrap bg-light" id="testimonials-section">
      <div className="container">
        <CenteredTitle>Testimonials</CenteredTitle>
      </div>
      <div className="slide-one-item home-slider testimonial-slider kit-owl owl-carousel">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop
          speed={500}
          autoplay={reducedMotion ? false : { delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
          onSwiper={(swiper) => { swiperRef.current = swiper }}
          onSlideChange={(swiper) => setCurrent(swiper.realIndex)}
        >
          {TESTIMONIALS.map((testimonial) => (
            <SwiperSlide key={testimonial.name}>
              <div className="testimonial">
                <figure className="mb-4 d-block align-items-center justify-content-center">
                  <div><img src={testimonial.photo} alt="" className="w-100 img-fluid mb-3 shadow" width="500" height="500" /></div>
                </figure>
                <blockquote className="mb-3">
                  <p>{testimonial.quote}</p>
                </blockquote>
                <p className="text-black"><strong>{testimonial.name}</strong></p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="owl-nav">
          <button type="button" className="owl-prev" aria-label="Previous testimonial" onClick={() => swiperRef.current?.slidePrev()}>
            <span className="fa-solid fa-chevron-left" aria-hidden="true"></span>
          </button>
          <button type="button" className="owl-next" aria-label="Next testimonial" onClick={() => swiperRef.current?.slideNext()}>
            <span className="fa-solid fa-chevron-right" aria-hidden="true"></span>
          </button>
        </div>
        <div className="owl-dots">
          {TESTIMONIALS.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              className={`owl-dot${index === current ? ' active' : ''}`}
              aria-label={`Show testimonial ${index + 1}`}
              aria-current={index === current}
              onClick={() => swiperRef.current?.slideToLoop(index)}
            >
              <span></span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
