import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.BannerSlice} BannerSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BannerSlice>} BannerProps
 * @param { BannerProps }
 */
const Banner = ({ slice }) => (
  <section className="space-5 pb-0">
    <div className="container text-center">
      <h1 className="font-weight-bold display-4">{slice.primary.title}</h1>
      <p className="lead w-lg-75 mx-auto">{slice.primary.description}</p>
    </div>
  </section>
)

export default Banner
