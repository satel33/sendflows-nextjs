import React from 'react'

/**
 * @typedef {import("@prismicio/client").Content.FeaturesSlice} FeaturesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FeaturesSlice>} FeaturesProps
 * @param { FeaturesProps }
 */

const Features = ({ slice }) => {
  const { variation, primary, items } = slice
  return (
    <>
      {variation === 'default' ? (
        <section className="space-1">
          <div className="container">
            <div className="w-100 w-lg-75 text-center mx-auto mb-3">
              <h3 className="m-5 font-weight-bold">{primary.title}</h3>
            </div>
            <div className="row d-flex justify-content-center flex-wrap">
              {items.map((item, index) => (
                <div
                  className="col-md-6 mb-4 col-lg-5"
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={index % 2 === 0 ? 100 : 200}
                >
                  <div className="bg-light rounded-lg h-100 px-5 py-5 hover-bg-primary hover-translate-y">
                    <i
                      className={`${item.icon_classname} ri-3x text-primary`}
                    />
                    ,<h5>{item.title}</h5>
                    <p className="lead">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-5">
            <a href="/features" className="btn btn-outline-primary mt-4 mr-2">
              <span>{primary.buttontext}</span>
              <i
                style={{ verticalAlign: 'sub' }}
                className="ri-arrow-right-s-line ri-lg"
              ></i>
            </a>
          </div>
        </section>
      ) : (
        <section className="space-3">
          <div className="container">
            <div className="w-100 w-lg-75 text-center mx-auto mb-5">
              <h6 className="text-primary font-weight-bold">{primary.title}</h6>
              <h2>{primary.subtitle}</h2>
            </div>
            <div className="row d-flex flex-wrap justify-content-around text-center">
              {items.map((item, key) => (
                <div
                  className="col-6 col-md-4 col-lg-3 my-5"
                  data-aos="zoom-in"
                  data-aos-delay={100 * key}
                  key={key}
                >
                  <i
                    className={`${item.icon_classname} ri-3x text-primary`}
                  ></i>
                  <h5 className="px-4">{item.title}</h5>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default Features
