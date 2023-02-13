import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.FaqSlice} FaqSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FaqSlice>} FaqProps
 * @param { FaqProps }
 */
const Faq = ({ slice }) => {
  const { variation, primary, items } = slice
  return (
    <>
      {variation === 'default' ? (
        <section className="space-3 bg-light">
          <div className="container">
            <div className="w-100 w-lg-75 text-center mx-auto mb-5">
              <i className="ri-question-answer-fill ri-3x text-primary"></i>
              <h2 className="font-weight-bold">{primary.title}</h2>
              <p className="lead">{primary.description}</p>
            </div>
            <div className="row justify-content-around">
              <div className="col-lg-5">
                <div id="faqOne">
                  {items.map(
                    (item, index) =>
                      index < 4 && (
                        <div
                          className="card border-top-0 border-left-0 border-right-0"
                          key={index}
                        >
                          <a
                            href={`#faqOne${index}`}
                            data-toggle="collapse"
                            role="button"
                            aria-expanded="false"
                            className="p-3 p-md-4 collapsed"
                          >
                            <div className="d-flex justify-content-between align-items-center">
                              <h6 className="mb-0">{item.title}</h6>
                              <i className="ri-arrow-down-s-line ri-lg"></i>
                            </div>
                          </a>
                          <div
                            className="collapse"
                            id={`faqOne${index}`}
                            data-parent="#faqOne"
                          >
                            <div className="mb-0 px-3 px-md-4 pb-3 pb-md-4">
                              <PrismicRichText field={item.description} />
                            </div>
                          </div>
                        </div>
                      ),
                  )}
                </div>
              </div>
              <div className="col-lg-5 mt-5 mt-lg-0">
                <div id="faqTwo">
                  {items.map(
                    (item, index) =>
                      index > 3 && (
                        <div
                          className="card border-top-0 border-left-0 border-right-0"
                          key={index}
                        >
                          <a
                            href={`#faqTwo${index}`}
                            data-toggle="collapse"
                            role="button"
                            aria-expanded="false"
                            className="p-3 p-md-4 collapsed"
                          >
                            <div className="d-flex justify-content-between align-items-center">
                              <h6 className="mb-0">{item.title}</h6>
                              <i className="ri-arrow-down-s-line ri-lg"></i>
                            </div>
                          </a>
                          <div
                            className="collapse"
                            id={`faqTwo${index}`}
                            data-parent="#faqTwo"
                          >
                            <div className="mb-0 px-3 px-md-4 pb-3 pb-md-4">
                              <PrismicRichText field={item.description} />
                            </div>
                          </div>
                        </div>
                      ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="space-2">
          <div className="container">
            <div className="w-100 w-lg-75 text-center mx-auto mb-5">
              <h6 className="text-primary font-weight-bold">FAQ</h6>
              <h2>{primary.title}</h2>
              <p className="lead">{primary.description}</p>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div id="faqOne" className="border">
                  {items.map((item, key) => (
                    <div
                      className={`card ${
                        key === 0
                          ? 'border-top-0 border-left-0 border-right-0'
                          : 'border-0'
                      }`}
                    >
                      <a
                        href={`#faqOne` + key}
                        data-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        className="p-3 p-md-4 collapsed"
                      >
                        <div className="d-flex justify-content-between align-items-center">
                          <h6 className="mb-0">{item.title}</h6>
                          <i className="ri-arrow-down-s-line ri-lg"></i>
                        </div>
                      </a>
                      <div
                        className="collapse"
                        id={`faqOne` + key}
                        data-parent="#faqOne"
                      >
                        <div className="mb-0 px-3 px-md-4 pb-3 pb-md-4">
                          <PrismicRichText field={item.description} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default Faq
