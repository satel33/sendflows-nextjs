import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.HighlightSlice} HighlightSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HighlightSlice>} HighlightProps
 * @param { HighlightProps }
 */
const Highlight = ({ slice }) => {
  const { primary, items } = slice
  return (
    <section className="space-3 bg-primary-3">
      <div className="container">
        <div className="w-100 w-lg-75 text-center mx-auto mb-5 text-white">
          <i className="ri-drag-drop-fill ri-3x text-white"></i>
          <h2 className="font-weight-bold text-center">{primary.title}</h2>
          <div className="lead">
            <PrismicRichText field={primary.description} className="lead" />
          </div>
        </div>
        {primary.with_slice && (
          <div className="row text-center">
            {items.map((item, index) => (
              <div
                className="col-sm-6 col-md-3 my-3 my-md-0 text-white"
                key={index}
              >
                <div className="card card-body bg-white hover-translate-y hover-shadow">
                  <h2 className="h1 font-weight-bold">{index + 1}</h2>
                  <p className="font-weight-medium">{item.card_title}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="text-center mt-5">
          <a
            href="mailto:info@sendflows.io"
            className="btn btn-primary mt-4 mr-2"
          >
            <i
              style={{ verticalAlign: 'sub' }}
              className="ri-mail-fill ri-lg"
            ></i>
            <span>Scrivici un email</span>
          </a>
          <a
            style={{ backgroundColor: '#3390ec' }}
            href="https://t.me/sendflows"
            className="btn bg-blue mt-4 mr-2 text-white"
          >
            <i className="ri-telegram-fill ri-lg"></i>
            <span>Scrivici su Telegram</span>
          </a>
          <a
            href="https://wa.me/393463685420?text=Hey%20"
            className="btn btn-success mt-4 mr-2"
          >
            <i
              style={{ verticalAlign: 'sub' }}
              className="ri-whatsapp-fill ri-lg"
            ></i>
            <span>Scrivici su Whatsapp</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Highlight
