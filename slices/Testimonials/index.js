import React from 'react'

/**
 * @typedef {import("@prismicio/client").Content.TestimonialsSlice} TestimonialsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TestimonialsSlice>} TestimonialsProps
 * @param { TestimonialsProps }
 */
const Testimonials = ({ slice }) => (
  <section className="pb-5 bg-light">
    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="col">
          <div className="mt-4">
            <h4>
              {slice.primary.title_first}{' '}
              <span className="counter">{slice.primary.number}</span>
              {slice.primary.title_last}
            </h4>
            <div className="row m-n4 align-items-center justify-content-around">
              {slice.items.map((item, index) => (
                <div className="col mt-5" key={index}>
                  <img
                    className="img-bw"
                    src={item.logo.url}
                    alt="Brand"
                    height={`${index === 2 ? 26 : 30}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Testimonials
