import React from 'react'

/**
 * @typedef {import("@prismicio/client").Content.HighlightNormalSlice} HighlightNormalSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HighlightNormalSlice>} HighlightNormalProps
 * @param { HighlightNormalProps }
 */
const HighlightNormal = ({ slice }) => (
  <section className="space-1 mb-5">
    <div className="container bg-primary-3 text-white px-5 py-5 rounded-lg">
      <div className="text-center w-lg-75 mx-auto py-5">
        <h2 className="font-weight-bold">{slice.primary.title}</h2>
        <p className="lead mt-4">{slice.primary.description}</p>
        <a
          href="https://app.sendflows.io/users/register"
          className="d-inline-flex align-items-center btn btn-primary mt-4"
        >
          {slice.primary.button_text}
          <i className="ri-arrow-right-line ri-lg ml-2"></i>
        </a>
      </div>
    </div>
  </section>
)

export default HighlightNormal
