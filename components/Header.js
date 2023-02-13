import React from 'react'

const Header = () => {
  return (
    <nav className="navbar fixed-top navbar-border navbar-expand-lg navbar-light bg-white py-3">
      <div className="container">
        <a
          className="navbar-brand order-lg-1 flex-grow-1"
          href="/"
          aria-label="Logo"
        >
          <img
            className="logo d-flex"
            src="/img/Sendflows-Logo.svg"
            alt="Logo"
            data-svg-inject
          />
        </a>
        <div className="d-none d-md-flex align-items-center order-2 order-lg-2 justify-content-end mr-3 mr-lg-0">
          <a
            className="btn btn-primary d-inline-flex align-items-center"
            href="https://app.sendflows.io/users/register"
          >
            <i className="ri-shopping-cart-2-line ri-lg mr-2"></i>
            <span>Inizia Ora</span>
          </a>
        </div>
        <button
          className="navbar-toggler d-lg-none d-flex align-items-center order-3 order-lg-3"
          type="button"
          data-toggle="collapse"
          data-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="ri-menu-3-fill ri-xl"></i>
        </button>
        <div
          className="collapse navbar-collapse order-3 order-lg-1 mr-lg-3"
          id="navbar"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Overview
              </a>
            </li>
            <li className="nav-item dropdown position-relative">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDemosDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Funzioni
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDemosDropdown"
              >
                <a
                  className="dropdown-item d-flex align-items-center"
                  href="/features#email"
                >
                  <i className="ri-send-plane-line ri-lg mr-2"></i>
                  Email & SMS Marketing
                </a>
                <a
                  className="dropdown-item d-flex align-items-center"
                  href="/features#whatsapp"
                >
                  <i className="ri-whatsapp-line ri-lg mr-2"></i>
                  Whatsapp Marketing
                </a>
                <a
                  className="dropdown-item d-flex align-items-center"
                  href="/features#flow"
                >
                  <i className="ri-organization-chart ri-lg mr-2"></i>
                  Automation Flow
                </a>
                <a
                  className="dropdown-item d-flex align-items-center"
                  href="/features#transactional-email"
                >
                  <i className="ri-mail-check-line ri-lg mr-2"></i>
                  Email Transazionali
                </a>
                <a
                  className="dropdown-item d-flex align-items-center"
                  href="/features#transactional-sms"
                >
                  <i className="ri-chat-check-line ri-lg mr-2"></i>
                  SMS Transazionali
                </a>
                <a
                  className="dropdown-item d-flex align-items-center"
                  href="/features#form"
                >
                  <i className="ri-survey-line ri-lg mr-2"></i>
                  Form Builder
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a href="/developers" className="nav-link">
                Developers
              </a>
            </li>
            <li className="nav-item">
              <a href="/pricing" className="nav-link">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a href="/blog" className="nav-link">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a href="https://app.sendflows.io" className="nav-link">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
