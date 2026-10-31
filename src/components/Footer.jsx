import { FOOTER_SOCIALS } from '../data.js'

export default function Footer() {
  return (
    <footer className="footer py-5 text-center">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12">
            <p className="mb-0">
              {FOOTER_SOCIALS.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener" className="p-3" aria-label={social.label}>
                  <span className={social.icon} aria-hidden="true"></span>
                </a>
              ))}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="mb-0 footer-credits">
              Copyright &copy;{new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
