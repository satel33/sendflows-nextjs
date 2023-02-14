import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.CookieSlice} CookieSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CookieSlice>} CookieProps
 * @param { CookieProps }
 */
const Cookie = ({ slice }) => {
  const { primary, items } = slice
  return (
    <section className="space-5 pb-5">
      <div className="container">
        <div className="text-center w-lg-75 mx-auto mb-5">
          <PrismicRichText
            className="font-weight-bold display-4"
            field={primary.title}
          />
        </div>
        <div className="lead">
          <PrismicRichText field={primary.description_up} />
        </div>
        {items.map((item, key) => (
          <div key={key}>
            <PrismicRichText field={item.description} />
            <div className="row text-center justify-content-around">
              <div
                className="col-md-6 col-lg-6 mb-4 mb-lg-0"
                data-aos="zoom-in-up"
                data-aos-delay="100"
              >
                <div className="px-4 py-4 hover-translate-y h-100">
                  <h5 className="mt-4 mb-2">{item.title_left}</h5>
                  <p>{item.description_left}</p>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-6 mb-4 mb-lg-0"
                data-aos="zoom-in-up"
                data-aos-delay="200"
              >
                <div className="px-4 py-4 hover-translate-y h-100">
                  <h5 className="mt-4 mb-2">{item.title_right}</h5>
                  <p>{item.description_right}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        <PrismicRichText field={primary.description_down} />
        <div className="text-center mt-5 pt-3">
          <a className="d-inline-flex align-items-center text-primary" href="#">
            <i className="ri-arrow-left-line"></i>
            <span className="ml-1">Return to homepage</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Cookie
