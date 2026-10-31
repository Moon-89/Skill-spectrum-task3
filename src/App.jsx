import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import Showcase from './components/Showcase.jsx'
import About from './components/About.jsx'
import Team from './components/Team.jsx'
import Testimonials from './components/Testimonials.jsx'
import Blog from './components/Blog.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <a className="skip-link visually-hidden-focusable" href="#main">Skip to content</a>
      <div className="site-wrap" id="home-section">
        <Header />
        <main id="main">
          <Hero />
          <Features />
          <Showcase />
          <About />
          <Team />
          <Testimonials />
          <Blog />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
