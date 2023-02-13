import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.ComparisonTablesSlice} ComparisonTablesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ComparisonTablesSlice>} ComparisonTablesProps
 * @param { ComparisonTablesProps }
 */
const ComparisonTables = ({ slice }) => (
  <section className="space-1 bg-light">
    <div className="container">
      <div className="w-100 w-lg-75 text-center mx-auto mb-5">
        <h6 className="text-primary font-weight-bold">
          {slice.primary.highlight_title}
        </h6>
        <h2>{slice.primary.title}</h2>
      </div>
      <div className="row">
        <div className="col-lg-6 mb-4 mb-lg-0" data-aos="slide-up">
          <div className="card card-body px-4 py-4 hover-translate-y hover-shadow-lg">
            <h2 className="font-weight-bold">{slice.primary.subtitle_left}</h2>
            <p className="lead">{slice.primary.subdescription_left}</p>
            <ul className="list-unstyled">
              {slice.items.map((item, key) => (
                <li className="d-flex align-items-center mb-3" key={key}>
                  {item.check ? (
                    <i className="text-danger ri-close-fill ri-xl mr-2"></i>
                  ) : (
                    <i className="ri-check-fill ri-xl mr-2"></i>
                  )}
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className="col-lg-6 mb-4 mb-lg-0"
          data-aos="slide-up"
          data-aos-delay="100"
        >
          <div className="card card-body px-4 py-4 hover-translate-y hover-shadow-lg">
            <h2 className="text-primary font-weight-bold">
              {slice.primary.subtitle_right}
            </h2>
            <p className="lead">{slice.primary.subdescription_right}</p>
            <ul className="list-unstyled">
              {slice.items.map((item, key) => (
                <li className="d-flex align-items-center mb-3" key={key}>
                  <i className="text-success ri-check-fill ri-xl mr-2"></i>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default ComparisonTables