import { PrismicRichText } from '@prismicio/react'
import React from 'react'

/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @param { HeroProps }
 */
const Hero = ({ slice }) => {
  const { items, primary, variation } = slice

  return (
    <>
      {variation === 'default' && (
        <section className="pb-5 space-3 mt-5">
          <div className="container">
            <div className="row align-items-center justify-content-around">
              <div className="col-lg-6 pr-lg-5">
                <h1
                  className="display-4 font-weight-bold line-height-1"
                  data-aos="fade-up"
                >
                  {primary?.title}
                  <br />
                  <span className="text-primary">
                    {primary?.highlighttitle}
                  </span>
                </h1>
                <p
                  className="h5 font-weight-normal mt-4"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  {primary?.description1}
                  <br />
                  {primary?.description2}
                </p>
                <div className="mt-4" data-aos="fade-up" data-aos-delay="200">
                  <form>
                    <div className="input-group mb-2">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder={primary?.buttonplaceholder}
                        required
                      />
                      <div className="input-group-append align-items-center">
                        <a
                          className="btn btn-primary rounded-right d-inline-flex align-items-center "
                          href="https://app.sendflows.io/users/register"
                        >
                          {primary?.buttontext}
                          <i className="ri-arrow-right-line ri-lg ml-2"></i>
                        </a>
                      </div>
                    </div>
                  </form>
                  <p className="text-muted">
                    <small>{primary?.description3}</small>
                  </p>
                </div>
              </div>
              <div
                style={{ zIndex: 100 }}
                className="col-lg-6 icons-s"
                data-aos="fade-right"
              >
                <div className="mt-3 row justify-content-center text-center">
                  <div
                    className="x1 "
                    style={{
                      zIndex: 100,
                      width: '100px',
                      position: 'relative',
                    }}
                  >
                    <img
                      className="y y1"
                      style={{ zIndex: 100, width: '100px' }}
                      src="/sendflows-icons/whatsapp-icon.svg"
                    />
                  </div>
                </div>
                <div className="row">
                  <div
                    className="col-6 x2 mb-4"
                    style={{
                      zIndex: 100,
                      width: '100px',
                      position: 'relative',
                    }}
                  >
                    <img
                      className="y y2"
                      style={{ zIndex: 100, width: '100px' }}
                      src="/sendflows-icons/email-icon.svg"
                    />
                  </div>
                  <div
                    className="col-6 x3 mt-5 d-md-flex align-items-center order-2 order-lg-2 justify-content-end mr-lg-0"
                    style={{
                      zIndex: 100,
                      width: '100px',
                      position: 'relative',
                      float: 'right',
                    }}
                  >
                    <img
                      className="y y3"
                      style={{ zIndex: 100, width: '100px' }}
                      src="/sendflows-icons/code-icon.svg"
                    />
                  </div>
                </div>
                <div className="row mt-5">
                  <div
                    className="col-6 x4 mt-1"
                    style={{
                      zIndex: 100,
                      width: '100px',
                      position: 'relative',
                    }}
                  >
                    <img
                      className="y y4"
                      style={{ zIndex: 100, width: '100px' }}
                      src="/sendflows-icons/builder-icon.svg"
                    />
                  </div>
                  <div
                    className="col-6 x5 d-md-flex align-items-center order-2 order-lg-2 justify-content-end mr-lg-0 d-flex align-items-center order-3 order-lg-3"
                    style={{
                      zIndex: 100,
                      width: '100px',
                      position: 'relative',
                    }}
                  >
                    <img
                      className="y y5"
                      style={{ zIndex: 100, width: '100px' }}
                      src="/sendflows-icons/email2-icon.svg"
                    />
                  </div>
                </div>
                <div className="row justify-content-center text-center">
                  <div
                    className="x6"
                    style={{
                      zIndex: 100,
                      width: '100px',
                      position: 'relative',
                    }}
                  >
                    <img
                      className="y y6"
                      style={{ zIndex: 100, width: '100px' }}
                      src="/sendflows-icons/support-icon1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {variation === 'style1' && (
        <section class="space-3 mt-5">
          <div class="container">
            <div class="row align-items-center justify-content-around">
              <div class="col-lg-6" data-aos="fade-right">
                <div class="swiper-container">
                  <div class="swiper-wrapper">
                    {items.map((item, key) => (
                      <div class="swiper-slide" key={key}>
                        <img
                          class="img-fluid rounded-lg"
                          src={item.image.url}
                          alt="Image"
                        />
                      </div>
                    ))}
                  </div>
                  <div class="swiper-pagination"></div>
                </div>
              </div>
              <div class="col-lg-6 pl-lg-5 mt-4 mt-lg-0">
                <h1
                  class="display-4 font-weight-medium line-height-2"
                  data-aos="fade-up"
                >
                  {primary.title}
                </h1>
                <div
                  class="h5 font-weight-normal mt-2"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <PrismicRichText field={primary.description} />
                </div>
                <div class="row mt-4" data-aos="fade-up" data-aos-delay="200">
                  <div class="col-lg-11">
                    <form>
                      <div class="input-group mb-3">
                        <input
                          type="email"
                          name="email"
                          class="form-control"
                          placeholder={primary.buttonplaceholder}
                          required
                        />
                        <div class="input-group-append align-items-center">
                          <button
                            class="btn btn-primary rounded-right d-inline-flex align-items-center "
                            type="submit"
                            name="submit"
                          >
                            {primary.buttontext}
                            <i class="ri-arrow-right-line ri-lg ml-2"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="d-flex mt-1">
                  <div
                    class="d-flex align-items-center mb-3 mr-4"
                    data-aos="fade-left"
                    data-aos-delay="200"
                    data-aos-offset="10"
                  >
                    <i class="ri-check-fill ri-xl text-primary mr-2"></i>
                    <span>{primary.item_title1}</span>
                  </div>
                  <div
                    class="d-flex align-items-center mb-3 mr-4"
                    data-aos="fade-left"
                    data-aos-delay="300"
                    data-aos-offset="10"
                  >
                    <i class="ri-check-fill ri-xl text-primary mr-2"></i>
                    <span>{primary.item_title2}</span>
                  </div>
                  <div
                    class="d-flex align-items-center mb-3 mr-4"
                    data-aos="fade-left"
                    data-aos-delay="400"
                    data-aos-offset="10"
                  >
                    <i class="ri-check-fill ri-xl text-primary mr-2"></i>
                    <span>{primary.item_title3}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {variation === 'style2' && (
        <section class="space-3 mt-5">
          <div class="container">
            <div class="row justify-content-center text-center">
              <div class="col">
                <div class="row justify-content-center">
                  <div class="col-lg-10" data-aos="fade-up">
                    <h1 class="display-4 font-weight-medium">
                      {primary.title}
                    </h1>
                    <div class="h5 font-weight-normal my-4">
                      <PrismicRichText field={primary.description} />
                    </div>
                    <a href="#" class="btn btn-lg btn-primary">
                      {primary.button_label}
                    </a>
                  </div>
                </div>
                <div class="my-5">
                  <div
                    class="plyr"
                    data-plyr-provider="youtube"
                    data-plyr-embed-id="rpAtKaGfVg4"
                  ></div>
                </div>
                <div class="mt-4">
                  <h4>{primary.subtitle}</h4>
                  <div class="row m-n4 align-items-center justify-content-around">
                    {items.map((item, key) => (
                      <div class="col mt-5" key={key}>
                        <img src={item.image.url} alt="Brand" height="32" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {variation === 'style3' && (
        <section class="space-3 mt-5">
          <div class="container">
            <div class="jumbotron bg-primary-3 rounded-lg py-5 px-5 text-white">
              <div class="row d-flex align-items-center justify-content-around">
                <div class="col-lg-6">
                  <h1 class="my-3" data-aos="fade-up" data-aos-delay="100">
                    {primary.title}
                  </h1>
                  <a
                    href="#"
                    class="btn btn-primary"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    {primary.button_label}
                  </a>
                </div>
                <div class="col-lg-6 overflow-hidden" data-aos="zoom-in">
                  <img class="img-fluid" src={primary.image.url} alt="Image" />
                </div>
              </div>
            </div>
            <div class="row m-n4 align-items-center justify-content-around text-center">
              {items.map((item, key) => (
                <div class="col mt-5" key={key}>
                  <img src={item.image.url} alt="Brand" height="32" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {variation === 'style4' && (
        <section class="space-3 mt-5">
          <div class="container">
            <div class="row align-items-center justify-content-around">
              <div class="col-lg-6 pr-lg-5">
                <h1
                  class="display-4 font-weight-bold line-height-1"
                  data-aos="fade-up"
                >
                  {primary.title}
                </h1>
                <div
                  class="font-weight-normal mt-4"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <PrismicRichText field={primary.description} />
                </div>
                <div class="mt-4" data-aos="fade-up" data-aos-delay="200">
                  <a
                    href="#"
                    class="d-inline-flex align-items-center btn btn-primary mb-2 mb-md-0"
                  >
                    {primary.button_label1}
                    <i class="ri-arrow-right-line ri-lg ml-2"></i>
                  </a>
                  <a href="#" class="btn btn-outline-dark">
                    {primary.button_label2}
                  </a>
                  <p class="text-muted mt-1">
                    <small>{primary.comment}</small>
                  </p>
                </div>
                <div class="mt-4 mb-5" data-aos="fade-up" data-aos-delay="300">
                  <p class="mb-2">{primary.subtitle}</p>
                  {items.map((item, key) => (
                    <img
                      class="mr-3 mb-3 mb-md-0"
                      src={item.image.url}
                      alt="Brand"
                      height="28"
                      key={key}
                    />
                  ))}
                </div>
              </div>
              <div class="col-lg-6" data-aos="fade-left">
                <img
                  class="img-fluid rounded-lg"
                  src={primary.image.url}
                  alt="Image"
                  data-zoomable
                />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default Hero
