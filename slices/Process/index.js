import React from 'react'

/**
 * @typedef {import("@prismicio/client").Content.ProcessSlice} ProcessSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProcessSlice>} ProcessProps
 * @param { ProcessProps }
 */
const Process = ({ slice }) => (
  <section className="space-3">
    <div className="container">
      <div className="w-100 w-lg-75 text-center mx-auto mb-5">
        <h6 className="text-primary font-weight-bold">
          {slice.primary.highlight_title}
        </h6>
        <h2 className="font-weight-bold">{slice.primary.title}</h2>
        <p className="lead">{slice.primary.description}</p>
      </div>
      <div className="row text-center">
        {slice.items.map((item, key) => (
          <div
            className="col-md-6 col-lg-3 mb-4 mb-lg-0"
            data-aos="zoom-in-up"
            data-aos-delay={100 * key}
            key={key}
          >
            <div
              className={`${
                key === 0 ? 'bg-primary-2 text-white' : 'bg-light'
              } px-4 py-4 rounded hover-bg-primary-2 hover-translate-y h-100 rounded-lg`}
            >
              <i
                className={`${item.icon_classname} ri-3x ${
                  key === 0 ? 'text-white' : 'text-primary'
                }`}
              ></i>
              <h5 className="mt-4 mb-2">{item.title}</h5>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-100 w-lg-75 text-center mx-auto mt-3">
        <a
          href="/developer"
          className="d-inline-flex align-items-center btn btn-outline-primary mt-4"
        >
          {slice.primary.button_text}
          <i className="ri-arrow-right-line ri-lg ml-2"></i>
        </a>
      </div>
    </div>
  </section>
)

export default Process
