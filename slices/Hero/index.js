import React from 'react'

/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @param { HeroProps }
 */
const Hero = ({ slice }) => (
  <section className="pb-5 space-3 mt-5">
    <div className="container">
      <div className="row align-items-center justify-content-around">
        <div className="col-lg-6 pr-lg-5">
          <h1
            className="display-4 font-weight-bold line-height-1"
            data-aos="fade-up"
          >
            {slice?.primary?.title}
            <br />
            <span className="text-primary">
              {slice?.primary?.highlighttitle}
            </span>
          </h1>
          <p
            className="h5 font-weight-normal mt-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {slice?.primary?.description1}
            <br />
            {slice?.primary?.description2}
          </p>
          <div className="mt-4" data-aos="fade-up" data-aos-delay="200">
            <form>
              <div className="input-group mb-2">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder={slice?.primary?.buttonplaceholder}
                  required
                />
                <div className="input-group-append align-items-center">
                  <a
                    className="btn btn-primary rounded-right d-inline-flex align-items-center "
                    href="https://app.sendflows.io/users/register"
                  >
                    {slice?.primary?.buttontext}
                    <i className="ri-arrow-right-line ri-lg ml-2"></i>
                  </a>
                </div>
              </div>
            </form>
            <p className="text-muted">
              <small>{slice?.primary?.description3}</small>
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
              style={{ zIndex: 100, width: '100px', position: 'relative' }}
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
              style={{ zIndex: 100, width: '100px', position: 'relative' }}
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
              style={{ zIndex: 100, width: '100px', position: 'relative' }}
            >
              <img
                className="y y4"
                style={{ zIndex: 100, width: '100px' }}
                src="/sendflows-icons/builder-icon.svg"
              />
            </div>
            <div
              className="col-6 x5 d-md-flex align-items-center order-2 order-lg-2 justify-content-end mr-lg-0 d-flex align-items-center order-3 order-lg-3"
              style={{ zIndex: 100, width: '100px', position: 'relative' }}
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
              style={{ zIndex: 100, width: '100px', position: 'relative' }}
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
)

export default Hero
