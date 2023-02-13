import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.ReveiwsSlice} ReveiwsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ReveiwsSlice>} ReveiwsProps
 * @param { ReveiwsProps }
 */
const Reveiws = ({ slice }) => {
  const { variation } = slice
  const isVariation = variation === 'default'
  return (
    <>
      {isVariation ? (
        <section className="space-5 bg-light">
          <div className="container">
            <div className="w-100 w-lg-75 text-center mx-auto mb-5">
              <i className="ri-chat-quote-fill ri-3x text-primary"></i>
              <h2 className="font-weight-bold text-center">
                {slice.primary.title}
              </h2>
            </div>
            <div className="card-columns">
              {slice.items.map((item, key) => (
                <div className="card card-body" key={key}>
                  <div className="lead">
                    <PrismicRichText field={item.description} />
                  </div>
                  <div className="d-flex mt-5 pt-2">
                    <img
                      className="rounded-circle"
                      src={item.avatar.url}
                      alt="Image"
                      height="60"
                    />
                    <div className="ml-3">
                      <h5 className="mb-0">{item.name}</h5>
                      <p className="text-muted">{item.bio}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="space-3 pb-0">
          <div className="container">
            <div className="text-center w-lg-75 mx-auto mb-5">
              <h6 className="text-primary font-weight-bold">TESTIMONIALS</h6>
              <h2>{slice.primary.title}</h2>
            </div>
            <div className="swiper-container">
              <div className="swiper-wrapper">
                {slice.items.map((item, key) => (
                  <div className="swiper-slide" key={key}>
                    <div className="jumbotron bg-light py-0 h-100">
                      <div className="row align-items-center justify-content-around h-100">
                        <div className="col-12 col-lg-6 text-center text-lg-left pt-5 pt-lg-0 pl-lg-5">
                          <h3 className="mb-2">
                            <PrismicRichText field={item.description} />
                          </h3>
                          <h6 className="text-muted mt-4">
                            {item.name} - {item.bio}
                          </h6>
                        </div>
                        <div className="col-12 col-lg-6 text-center h-100">
                          <img
                            className="h-75 h-md-100 img-fluid"
                            src={item.avatar.url}
                            alt="Person"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="swiper-pagination"></div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default Reveiws
