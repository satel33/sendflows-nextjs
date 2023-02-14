import { PrismicLink } from '@prismicio/react'
import React from 'react'

const Header = ({ navigation }) => {
  const {
    link_list,
    button_icon_classname,
    button_label,
    button_link,
  } = navigation.data
  return (
    <nav className="navbar fixed-top navbar-border navbar-expand-lg navbar-light bg-white py-3">
      <div className="container">
        <PrismicLink
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
        </PrismicLink>
        <div className="d-none d-md-flex align-items-center order-2 order-lg-2 justify-content-end mr-3 mr-lg-0">
          <a
            className="btn btn-primary d-inline-flex align-items-center"
            href={button_link}
          >
            <i className={`${button_icon_classname} ri-lg mr-2`}></i>
            <span>{button_label}</span>
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
            {link_list?.map((item) => (
              <li className="nav-item" key={item.label}>
                <PrismicLink href={item.link} className="nav-link">
                  {item.label}
                </PrismicLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
