import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.PrivacySlice} PrivacySlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PrivacySlice>} PrivacyProps
 * @param { PrivacyProps }
 */
const Privacy = ({ slice }) => (
  <section className="space-5 pb-5">
    <div className="container">
      <div className="text-center w-lg-75 mx-auto mb-5">
        <h1 className="font-weight-bold display-4">{slice.primary.title}</h1>
      </div>
      <PrismicRichText field={slice.primary.description} />
    </div>
  </section>
)

export default Privacy
