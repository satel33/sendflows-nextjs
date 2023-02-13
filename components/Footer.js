import React from 'react'

const Footer = () => {
  return (
    <footer className="space-3 pb-4 bg-primary-3 text-white link-white">
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-4">
          <p className="lead text-white">Ottieni tips gratuiti sul mondo delle automazioni. Nessuno spam.</p>
          <form id="newsletter" method="POST">
            <div className="input-group mb-3">
              <input type="email" name="email" className="form-control" placeholder="La tua email" required />
              <div className="input-group-append align-items-center">
                <button id="newsletterBtnSubmit" className="btn btn-primary rounded-right" type="submit" name="submit">Inizia</button>
                <button id="newsletterBtnSending" className="btn btn-primary d-none" type="button" disabled>
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className="sr-only">Iscrizione...</span>
                </button>
              </div>
            </div>
          </form>
          <div id="newsletterAlertSuccess" className="alert alert-success d-none" role="alert">
            Grazie per esserti iscritto! 👾.
          </div>
          <div id="newsletterAlertError" className="alert alert-danger d-none" role="alert">
            Iscrizione fallita, prova di nuovo!↩️
          </div>
        </div>
        <div className="col-4 col-lg-2 offset-lg-2 mt-5 mt-lg-0">
          <h5>Azienda</h5>
          <div className="row">
            <div className="col">
              <a className="nav-link pl-0" href="/features">All Features</a>
              <a className="nav-link pl-0" href="/developers">Developers</a>
              <a className="nav-link pl-0" href="/blog">Blog</a>
              <a className="nav-link pl-0" href="/contact">Contact</a>
              <a className="nav-link pl-0" href="/faq">FAQ</a>
            </div>
          </div>
        </div>
        <div className="col-4 col-lg-2 mt-5 mt-lg-0">
          <h5>Supporto</h5>
          <a className="nav-link pl-0" href="/contact">Contact</a>
          <a className="nav-link pl-0" href="/contact">Help Center</a>
          <h5 className="mt-4">Developers</h5>
          <a className="nav-link pl-0" href="/docs">Docs</a>
          <a className="nav-link pl-0" href="/docs">APIs</a>
        </div>
        <div className="col-4 col-lg-2 mt-5 mt-lg-0">
          <h5>Legale</h5>
          <a className="nav-link pl-0" href="/privacy">Privacy Policy</a>
          <a className="nav-link pl-0" href="/gdpr">GPDR</a>
          <a className="nav-link pl-0" href="/cookie-policy">Cookie</a>
          <a className="nav-link pl-0" href="/terms-and-conditions">Term of Use</a>
          <a className="nav-link pl-0" href="/forms">Modulistica</a>
        </div>
      </div>
      <div className="row pt-5 pb-0">
        <div className="col">
          <hr />
        </div>
      </div>
      <div className="row flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-between text-center text-lg-left">
        <div className="col-auto">
          <div className="d-flex flex-column flex-sm-row align-items-center text-small">
            <div>
              <small>Copyright &copy; 2022 Sendflows, P.IVA IT 03043840648 | All right reserved. Coded and Design with Love.</small>
            </div>
          </div>
        </div>
        <div className="col-auto">
          <div className="d-flex flex-column flex-sm-row align-items-center text-small">
            <div>
              <li className="no-list-style nav-item dropdown position-relative">
                <a className="nav-link dropdown-toggle" href="" id="navbarDemosDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  English
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDemosDropdown">
                  <a className="text-dark dropdown-item d-flex align-items-center" href="/en">
                    
                    English
                  </a>
                  <a className="text-dark dropdown-item d-flex align-items-center" href="/it">
                    
                    Italian
                  </a>
                </div>
              </li>
              
            </div>
          </div>
        </div>
        <div className="col-auto mt-3 mt-lg-0">
          <ul className="list-unstyled d-flex mb-0 mt-2 link-white">
            <li className="mx-3">
              <a href="https://github.com/sendflows" className="text-decoration-none" aria-label="Twitter">
                <i className="ri-github-fill ri-lg"></i>
              </a>
            </li>

            <li className="mx-3">
              <a href="https://www.instagram.com/sendflows" className="text-decoration-none" aria-label="Behance">
                <i className="ri-instagram-fill ri-lg"></i>
              </a>
            </li>
            <li className="mx-3">
              <a href="https://www.facebook.com/sendflows" className="text-decoration-none" aria-label="Facebook">
                <i className="ri-facebook-fill ri-lg"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer