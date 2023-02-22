import React from 'react'
import HtmlColumn from '@/components/HtmlColumn'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.TwoColumnsSlice} TwoColumnsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TwoColumnsSlice>} TwoColumnsProps
 * @param { TwoColumnsProps }
 */
const TwoColumns = ({ slice }) => {
  const { primary, items, variation } = slice
  return (
    <>
      {variation === 'textWithLogos' && (
        <section
          className="space-5"
          id="transactional-email"
          style={{
            backgroundColor: primary.is_background_light
              ? '#F7F9FC'
              : '#FFFFFF',
          }}
        >
          <div className="container">
            <div
              className={`row align-items-center justify-content-around pb-0 mb-4 mb-lg-0${
                primary.is_revert && 'flex-row-reverse'
              }`}
            >
              <div className="col-lg-5 mb-5 mb-lg-0" data-aos="fade-right">
                <i
                  className={`${primary.icon_classname} ri-3x text-primary`}
                ></i>
                <h2 className="font-weight-bold">{primary.title}</h2>
                <div className="lead mt-2 mb-3">
                  <PrismicRichText field={primary.description} />
                </div>
                <div className="row mt-5">
                  {items.map((item, index) => (
                    <div
                      className="col"
                      data-aos="fade-left"
                      data-aos-delay={200 + index * 100}
                      key={index}
                    >
                      <img src={item.logo.url} height="48" alt="Brand" />
                    </div>
                  ))}
                </div>
                {primary?.subdescription?.length && (
                  <p className="text-small text-muted mt-3">
                    {primary.subdescription}
                  </p>
                )}
              </div>
              {Object.keys(primary.image).length === 0 ? (
                <HtmlColumn columnType={primary.html_type} />
              ) : (
                <div className="col-lg-6" data-aos="fade-left">
                  <img
                    className="img-fluid rounded-lg"
                    src={primary.image.url}
                    alt="Image"
                    data-zoomable
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      )}
      {variation === 'textWithChecklistStyle1' && (
        <section
          className="space-5"
          style={{
            backgroundColor: primary.is_background_light
              ? '#F7F9FC'
              : '#FFFFFF',
          }}
        >
          <div className="container">
            <div
              id="sms"
              className={`row align-items-center justify-content-around pb-0 mb-4 mb-lg-0 ${
                primary.is_revert && 'flex-row-reverse'
              }`}
            >
              <div className="col-lg-5 mb-5 mb-lg-0" data-aos="fade-right">
                <i
                  className={`${primary.icon_classname} ri-3x text-success`}
                ></i>
                <h2 className="font-weight-bold mb-3">{primary.title}</h2>
                <div className="lead mt-2 mb-4">
                  <PrismicRichText field={primary.description} />
                </div>
                <div className="row">
                  <div className="col">
                    {items.map(
                      (item, key) =>
                        key < 2 && (
                          <div
                            className="d-flex align-items-center mb-3 mr-3"
                            key={key}
                          >
                            <i
                              className={`${primary.item_icon_classname} ri-xl text-primary mr-2`}
                            ></i>
                            <span>{item.title}</span>
                          </div>
                        ),
                    )}
                  </div>
                  <div className="col">
                    {items.map(
                      (item, key) =>
                        key > 1 && (
                          <div
                            className="d-flex align-items-center mb-3 mr-3"
                            key={key}
                          >
                            <i
                              className={`${primary.item_icon_classname} ri-xl text-primary mr-2`}
                            ></i>
                            <span>{item.title}</span>
                          </div>
                        ),
                    )}
                  </div>
                </div>
              </div>
              {Object.keys(primary.image).length === 0 ? (
                <HtmlColumn columnType={primary.html_type} />
              ) : (
                <div className="col-lg-6" data-aos="fade-left">
                  <img
                    className="img-fluid rounded-lg"
                    src={primary.image.url}
                    alt="Image"
                    data-zoomable
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      )}
      {variation === 'textWithChecklistStyle2' && (
        <section
          className="space-3 bg-light"
          id="form"
          style={{
            backgroundColor: primary.is_background_light
              ? '#F7F9FC'
              : '#FFFFFF',
          }}
        >
          <div className="container">
            <div
              className={`row align-items-center justify-content-around ${
                primary.is_revert && 'flex-row-reverse'
              }`}
            >
              {Object.keys(primary.image).length === 0 ? (
                <HtmlColumn columnType={primary.html_type} data={primary} />
              ) : (
                <div className="col-lg-6" data-aos="fade-left">
                  <img
                    className="img-fluid rounded-lg"
                    src={primary.image.url}
                    alt="Image"
                    data-zoomable
                  />
                </div>
              )}
              <div className="col-lg-5 mt-4 mt-lg-0" data-aos="fade-left">
                <h2 className="font-weight-bold mb-3">{primary.title}</h2>
                <div className="lead mt-2 mb-4">
                  <PrismicRichText field={primary.description} />
                </div>
                <ul className="list-unstyled">
                  {items.map((item, key) => (
                    <li className="d-flex align-items-center mb-2" key={key}>
                      <i
                        className={`${primary.item_icon_classname} ri-xl text-primary mr-2`}
                      ></i>
                      <span>{item.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}
      {variation === 'textAndFeatures' && (
        <section
          className="space-5"
          style={{
            backgroundColor: primary.is_background_light
              ? '#F7F9FC'
              : '#FFFFFF',
          }}
        >
          <div className="container">
            <div
              className={`row align-items-center justify-content-around ${
                primary.is_revert && 'flex-row-reverse'
              }`}
            >
              {Object.keys(primary.image).length === 0 ? (
                <HtmlColumn columnType={primary.html_type} data={primary} />
              ) : (
                <div className="col-lg-6" data-aos="fade-left">
                  <img
                    className="img-fluid rounded-lg"
                    src={primary.image.url}
                    alt="Image"
                    data-zoomable
                  />
                </div>
              )}
              <div class="row align-items-center justify-content-around space-5 pb-0 mb-4 mb-lg-0">
                <div class="col-lg-5 mb-5 mb-lg-0" data-aos="fade-right">
                  <h2 class="font-weight-bold mb-3">
                    Launch your website now using Findeas.
                  </h2>
                  <div class="d-flex justify-content-center">
                    <i class="ri-pencil-ruler-line ri-2x text-primary"></i>
                    <div class="mt-2 ml-3">
                      <h5>Easy to Use</h5>
                      <p>
                        Dramatically disseminate standardized metrics after
                        resource-leveling processes.
                      </p>
                    </div>
                  </div>
                  <div class="d-flex justify-content-center mt-3">
                    <i class="ri-folder-download-line ri-2x text-primary"></i>
                    <div class="mt-2 ml-3">
                      <h5>Regular Update</h5>
                      <p>
                        Efficiently enable enabled sources and cost effective
                        products.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6" data-aos="fade-left">
                  <img
                    class="img-fluid rounded-lg"
                    src="assets/img/1880x1254.png"
                    alt="Image"
                    data-zoomable
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {variation === 'textWithStatistics' && (
        <section
          className="space-5"
          style={{
            backgroundColor: primary.is_background_light
              ? '#F7F9FC'
              : '#FFFFFF',
          }}
        >
          <div className="container">
            <div
              id="email"
              className={`row align-items-center justify-content-around ${
                primary.is_revert && 'flex-row-reverse'
              }`}
            >
              {Object.keys(primary.image).length === 0 ? (
                <HtmlColumn columnType={primary.html_type} />
              ) : (
                <div className="col-lg-6" data-aos="fade-left">
                  <img
                    className="img-fluid rounded-lg"
                    src={primary.image.url}
                    alt="Image"
                    data-zoomable
                  />
                </div>
              )}
              <div
                className="col-lg-5 mt-4 mt-lg-0 pl-lg-4"
                data-aos="fade-left"
              >
                <i
                  className={`${primary?.icon_classname} ri-3x text-primary`}
                ></i>
                <h2 className="font-weight-bold">{primary.title}</h2>
                <div className="lead mt-2 mb-4">
                  <PrismicRichText field={primary.description} />
                </div>
                <div className="row">
                  {items.map((item, key) => (
                    <div
                      className={`col-md-6 ${key === 0 && 'mb-4 mb-md-0'}`}
                      key={key}
                    >
                      <div className="bg-light px-4 py-4 rounded-lg h-100 hover-translate-y hover-bg-primary-2">
                        <h3>
                          <span className="counter">{item.title_number}</span>
                          {item.title_text}
                        </h3>
                        <h5>{item.description}</h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {variation === 'textWithAccordions' && (
        <section
          className="space-5 bg-light"
          id="flow"
          style={{
            backgroundColor: primary.is_background_light
              ? '#F7F9FC'
              : '#FFFFFF',
          }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-around">
              {Object.keys(primary.image).length === 0 ? (
                <HtmlColumn columnType={primary.html_type} data={primary} />
              ) : (
                <div className="col-lg-6" data-aos="fade-left">
                  <img
                    className="img-fluid rounded-lg"
                    src={primary.image.url}
                    alt="Image"
                    data-zoomable
                  />
                </div>
              )}
              <div
                className="col-lg-5 mt-4 mt-lg-0 pl-lg-4"
                data-aos="fade-left"
              >
                <i className="ri-organization-chart-fill ri-3x text-primary"></i>
                <h2 className="font-weight-bold">{primary.title}</h2>
                <div>
                  <PrismicRichText field={primary.description} />
                </div>
                <div id="accordion">
                  {items.map((item, key) => (
                    <div className="card mb-2 mb-md-3" key={key}>
                      <a
                        href={`#accordion` + key}
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
                        id={`accordion` + key}
                        data-parent="#accordion"
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

export default TwoColumns
