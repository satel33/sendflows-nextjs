import React, { useMemo } from 'react'
import { PrismicLink } from '@prismicio/react'
import { linkResolver } from '../prismicio'

const Footer = ({ alternateLanguage = [], navigation }) => {
  const {
    link_list,
    button_label,
    button_placeholder,
    tip,
    title_success,
    title_fail,
    column_left,
    column_middle_first,
    column_middle_second,
    column_right,
  } = navigation.data
  const currentLang = useMemo(() => {
    if (alternateLanguage[0].lang === 'it-it') return 'English'
    else return 'Italy'
  }, [alternateLanguage])
  return (
    <footer className="space-3 pb-4 bg-primary-3 text-white link-white">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4">
            <p className="lead text-white">{tip}</p>
            <form id="newsletter" method="POST">
              <div className="input-group mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder={button_placeholder}
                  required
                />
                <div className="input-group-append align-items-center">
                  <button
                    id="newsletterBtnSubmit"
                    className="btn btn-primary rounded-right"
                    type="submit"
                    name="submit"
                  >
                    {button_label}
                  </button>
                  <button
                    id="newsletterBtnSending"
                    className="btn btn-primary d-none"
                    type="button"
                    disabled
                  >
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Iscrizione...</span>
                  </button>
                </div>
              </div>
            </form>
            <div
              id="newsletterAlertSuccess"
              className="alert alert-success d-none"
              role="alert"
            >
              {title_success}
            </div>
            <div
              id="newsletterAlertError"
              className="alert alert-danger d-none"
              role="alert"
            >
              {title_fail}
            </div>
          </div>
          <div className="col-4 col-lg-2 offset-lg-2 mt-5 mt-lg-0">
            <h5>{column_left}</h5>
            <div className="row">
              <div className="col">
                {link_list.map(
                  (item, index) =>
                    index < 5 && (
                      <a
                        className="nav-link pl-0"
                        href={item.link}
                        key={item.label}
                      >
                        {item.label}
                      </a>
                    ),
                )}
              </div>
            </div>
          </div>
          <div className="col-4 col-lg-2 mt-5 mt-lg-0">
            <h5>{column_middle_first}</h5>

            {link_list.map(
              (item, index) =>
                index > 4 &&
                index < 7 && (
                  <a
                    className="nav-link pl-0"
                    href={item.link}
                    key={item.label}
                  >
                    {item.label}
                  </a>
                ),
            )}
            <h5 className="mt-4">{column_middle_second}</h5>

            {link_list.map(
              (item, index) =>
                index > 6 &&
                index < 9 && (
                  <a
                    className="nav-link pl-0"
                    href={item.link}
                    key={item.label}
                  >
                    {item.label}
                  </a>
                ),
            )}
          </div>
          <div className="col-4 col-lg-2 mt-5 mt-lg-0">
            <h5>{column_right}</h5>

            {link_list.map(
              (item, index) =>
                index > 8 && (
                  <a
                    className="nav-link pl-0"
                    href={item.link}
                    key={item.label}
                  >
                    {item.label}
                  </a>
                ),
            )}
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
                <small>
                  Copyright &copy; 2022 Sendflows, P.IVA IT 03043840648 | All
                  right reserved. Coded and Design with Love.
                </small>
              </div>
            </div>
          </div>
          <div className="col-auto">
            <div className="d-flex flex-column flex-sm-row align-items-center text-small">
              <div>
                <li className="no-list-style nav-item dropdown position-relative">
                  <a
                    className="nav-link dropdown-toggle"
                    href=""
                    id="navbarDemosDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {currentLang}
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDemosDropdown"
                  >
                    {alternateLanguage.map((lang) => (
                      <PrismicLink
                        href={linkResolver(lang)}
                        locale={lang.lang}
                        key={lang.lang}
                        className="text-dark dropdown-item d-flex align-items-center"
                      >
                        {lang.lang === 'en-us' ? 'English' : 'Italy'}
                      </PrismicLink>
                    ))}
                  </div>
                </li>
              </div>
            </div>
          </div>
          <div className="col-auto mt-3 mt-lg-0">
            <ul className="list-unstyled d-flex mb-0 mt-2 link-white">
              <li className="mx-3">
                <a
                  href="https://github.com/sendflows"
                  className="text-decoration-none"
                  aria-label="Twitter"
                >
                  <i className="ri-github-fill ri-lg"></i>
                </a>
              </li>

              <li className="mx-3">
                <a
                  href="https://www.instagram.com/sendflows"
                  className="text-decoration-none"
                  aria-label="Behance"
                >
                  <i className="ri-instagram-fill ri-lg"></i>
                </a>
              </li>
              <li className="mx-3">
                <a
                  href="https://www.facebook.com/sendflows"
                  className="text-decoration-none"
                  aria-label="Facebook"
                >
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
