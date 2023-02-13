import React from 'react'
/**
 * @typedef {import("@prismicio/client").Content.PricingSlice} PricingSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PricingSlice>} PricingProps
 * @param { PricingProps }
 */
const Pricing = ({ slice }) => {
  const { primary, items } = slice
  return (
    <div
      className="col-lg-3 mb-4 mb-lg-0"
      data-aos="slide-up"
      data-aos-delay={primary.aos_delay}
    >
      <div
        className="card card-body px-4 py-4 hover-translate-y hover-shadow-lg"
        style={
          primary.is_highlighted && {
            outline: 'medium solid #5B61F9 !important',
          }
        }
      >
        <i className={`${primary.icon_classname} ri-3x text-primary`}></i>
        <h2 className="font-weight-bold">{primary.title}</h2>
        {primary.is_popular && (
          <span
            className="badge badge-primary mb-3"
            style={{ position: 'absolute', top: '-15px' }}
          >
            Più popolare
          </span>
        )}
        <p className="lead">{primary.description}</p>
        <div className="d-flex align-items-center my-3">
          <h4 className="h2">{primary.price_number}</h4>
          <p className="mt-2 ml-2">{primary.price_text}</p>
        </div>
        <ul className="list-unstyled">
          {items.map((item, index) => (
            <li className="d-flex align-items-center mb-3" key={index}>
              {item.status ? (
                <i className="ri-check-fill ri-xl mr-2" />
              ) : (
                <i className="text-danger ri-close-fill ri-xl mr-2" />
              )}

              <span>{item.title}</span>
            </li>
          ))}
        </ul>
        <a
          href="https://app.sendflows.io/users/register"
          className="btn btn-primary"
        >
          Inizia Gratis
        </a>
        {primary.is_popular && (
          <a href="#custom-plan" className="btn btn-link-primary">
            Serve di più? Scrivici subito.
          </a>
        )}
      </div>
    </div>
  )
}

export default Pricing
