import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.ReusableColumnSlice} ReusableColumnSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ReusableColumnSlice>} ReusableColumnProps
 * @param { ReusableColumnProps }
 */
const ReusableColumn = ({ slice }) => {
  const { variation, primary, items } = slice
  return (
    <>
      {variation === 'default' && (
        <section className="space-5 bg-light" id="flow">
          <div className="container">
            <div className="row align-items-center justify-content-around">
              <div
                className="col-lg-6 mb-4 mb-md-0"
                data-aos="fade-down"
                data-aos-delay="200"
              >
                <div className="wrapper1">
                  <div
                    data-aos="zoom-in"
                    data-aos-delay="500"
                    className="automation-step step1"
                    style={{ zIndex: 100 }}
                  >
                    <i className="ri-user-fill ri-lg mr-2"></i>Il contatto si è
                    iscritto alla lista
                  </div>
                  <div
                    data-aos="zoom-in"
                    data-aos-delay="1000"
                    className="automation-step step2"
                    style={{ zIndex: 100 }}
                  >
                    <img
                      style={{
                        marginBottom: '4px',
                        width: '30px',
                        height: '16px',
                      }}
                      src="/img/automation-1/icon-divide.svg"
                    />
                    Dividi contatto: se ha il TAG: “Italiano”
                  </div>
                  <div
                    data-aos="zoom-in"
                    data-aos-delay="1500"
                    className="text-center automation-step step3"
                  >
                    NO
                  </div>
                  <div
                    data-aos="zoom-in"
                    data-aos-delay="2000"
                    className="automation-step step4"
                    style={{ zIndex: 100 }}
                  >
                    <i className="ri-mail-fill ri-lg mr-2"></i>
                    <span>Invia Email “Benvenuto in Inglese”</span>
                  </div>
                  <div
                    data-aos="zoom-in"
                    data-aos-delay="2500"
                    className="automation-step step5"
                    style={{ zIndex: 100 }}
                  >
                    <i className="ri-whatsapp-fill ri-lg mr-2"></i>Invia
                    Whatsapp “Offerta benvenuto”
                  </div>
                  <div
                    data-aos="zoom-in"
                    data-aos-delay="3000"
                    className="automation-step step6"
                    style={{ zIndex: 100 }}
                  >
                    <i className="ri-add-fill ri-lg ri-2x"></i>
                  </div>

                  <div className="obj"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 540">
                    <path
                      d="M 189 15 V 162 c 0 13 1 16 16 16 H 398 C 413 178 416 184 416 196 V 412 V 196 C 416 184 413 178 398 178 H 205 C 190 178 189 175 189 162 C 189 175 188 178 174 178 H 4"
                      fill="none"
                      stroke="#5e5e7d"
                      strokeWidth="1"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </div>
              </div>
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
      {variation === 'transactionalEmail' && (
        <section className="space-5" id="transactional-email">
          <div className="container">
            <div className="row align-items-center justify-content-around pb-0 mb-4 mb-lg-0">
              <div className="col-lg-5 mb-5 mb-lg-0" data-aos="fade-right">
                <i
                  className={`${primary.icon_classname} ri-3x text-primary`}
                ></i>
                <h2 className="font-weight-bold">
                  {primary.title}
                  {/* <span className="text-primary">Modifica</span> le email{' '}
                  <span className="text-primary">transazionali</span> senza{' '}
                  <br />
                  toccare il codice. */}
                </h2>
                <div className="lead mt-2 mb-3">
                  <PrismicRichText field={slice.primary.description} />
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
                {primary.show_subdescription && (
                  <p className="text-small text-muted mt-3">
                    Documentazione ed API esposte per tutti i linguaggi
                  </p>
                )}
              </div>

              <div className="col-lg-6" data-aos="fade-left">
                <div className="row">
                  <div className="p-0 col-lg-8 col-8 pr-2" data-aos="fade-left">
                    <div
                      style={{ position: 'relative' }}
                      className="e-email rounded-lg"
                    >
                      <div className="e-logo">
                        <img src="/img/logo-demo.svg" />
                      </div>
                      <div className="e-title">
                        <span>👋🏼 Hi {'{FIRST_NAME}'}!</span>
                      </div>
                      <img
                        style={{ position: 'absolute' }}
                        className="changing-img e-img"
                        src="/img/stocks/c/night_train.jpg"
                      />
                      <img className="e-img" src="/img/placeholder.svg" />
                      <div className="e-paragraph"></div>
                      <div className="e-paragraph"></div>
                      <div
                        style={{ width: '60%' }}
                        className="e-paragraph"
                      ></div>
                      <div className="e-cta">
                        <span>&nbsp;</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-4" data-aos="fade-left">
                    <div className="mb-4 e-block">
                      <div className="row px-3 py-3">
                        <div className="col-8">
                          <img
                            className="icon-sm pb-1"
                            src="/img/custom-icons/1.svg"
                          />
                          <br />
                          <span className="text-primary-3">
                            <strong>Logo</strong>
                          </span>
                        </div>
                        <div className="col-4">
                          <img
                            className="icon-micro"
                            src="/img/custom-icons/arrow.svg"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mb-4 e-block moving">
                      <div className="row px-3 py-3">
                        <div className="col-8">
                          <img
                            className="icon-sm pb-1"
                            src="/img/custom-icons/7.svg"
                          />
                          <br />
                          <span className="text-primary-3">
                            <strong>Image</strong>
                          </span>
                        </div>
                        <div className="col-4">
                          <img
                            className="icon-micro"
                            src="/img/custom-icons/arrow.svg"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mb-4 e-block">
                      <div className="row px-3 py-3">
                        <div className="col-8">
                          <img
                            className="icon-sm pb-1"
                            src="/img/custom-icons/4.svg"
                          />
                          <br />
                          <span className="text-primary-3">
                            <strong>Paragraph</strong>
                          </span>
                        </div>
                        <div className="col-4">
                          <img
                            className="icon-micro"
                            src="/img/custom-icons/arrow.svg"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mb-4 e-block">
                      <div className="row px-3 py-3">
                        <div className="col-8">
                          <img
                            className="icon-sm pb-1"
                            src="/img/custom-icons/3.svg"
                          />
                          <br />
                          <span className="text-primary-3">
                            <strong>Socials</strong>
                          </span>
                        </div>
                        <div className="col-4">
                          <img
                            className="icon-micro"
                            src="/img/custom-icons/arrow.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {variation === 'signupForm' && (
        <section className="space-3 bg-light" id="form">
          <div className="container">
            <div className="row align-items-center justify-content-around">
              <div className="col-lg-7" data-aos="fade-left">
                <div className="row">
                  <div
                    className="d-none d-sm-block col-lg-5 col-12 pr-4 z-index-5"
                    data-aos="fade-left"
                  >
                    <div className="mb-4 fa-block">
                      <div className="px-3 py-3">
                        <img
                          className="icon-xs pb-1 ml-2 mr-2"
                          src="/img/custom-icons/form-email.svg"
                        />
                        <span className="text-primary-3">
                          <strong>Email</strong>
                        </span>
                        <div className="float-right">
                          <img
                            className="icon-micro"
                            src="/img/custom-icons/arrow.svg"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mb-4 fa-block movingblock2">
                      <div className="px-3 py-3">
                        <img
                          className="icon-xs pb-1 ml-2 mr-2"
                          src="/img/custom-icons/form-ig.svg"
                        />
                        <span className="text-primary-3">
                          <strong>Testo breve</strong>
                        </span>
                        <div className="float-right">
                          <img
                            className="icon-micro"
                            src="/img/custom-icons/arrow.svg"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mb-4 fa-block ">
                      <div className="px-3 py-3">
                        <img
                          className="icon-xs pb-1 ml-2 mr-2"
                          src="/img/custom-icons/form-phone.svg"
                        />
                        <span className="text-primary-3 mr-5">
                          <strong>Cellulare</strong>
                        </span>
                        <img
                          className="icon-micro"
                          src="/img/custom-icons/arrow.svg"
                        />
                      </div>
                    </div>

                    <div className="mb-4 fa-block ">
                      <div className="px-3 py-3">
                        <img
                          className="icon-xs pb-1 ml-2 mr-2"
                          src="/img/custom-icons/form-opt.svg"
                        />
                        <span className="text-primary-3 mr-5">
                          <strong>Opzioni</strong>
                        </span>
                        <img
                          className="icon-micro"
                          src="/img/custom-icons/arrow.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="p-4 col-lg-7 col-12 mt-5"
                    data-aos="fade-left"
                  >
                    <div
                      style={{ position: 'relative' }}
                      className="rounded-lg"
                    >
                      <div className="fa-title text-primary-3 mb-3">
                        <span>
                          <strong>ISCRIVITI ALLA NOSTRA NEWSLETTER</strong>
                        </span>
                      </div>
                      <form>
                        <label htmlFor="email">Nome completo</label>
                        <div className="box form-group">
                          <h6 className="typing">
                            Andrea Vitto<span className="barretta">|</span>
                          </h6>
                        </div>

                        <div className="add-line">
                          <span>Inserisci qui</span>
                        </div>

                        <div>
                          <div className="appear-box mb-3 form-group">
                            <label htmlFor="email">Username Instagram</label>
                            <input
                              type="text"
                              placeholder="@username"
                              className="form-control"
                              id="email"
                            />
                          </div>
                        </div>

                        <div className="form-group addPadd">
                          <label htmlFor="email">Email</label>
                          <input
                            type="text"
                            placeholder="info@email.com"
                            className="form-control"
                            id="email"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 mt-4 mt-lg-0" data-aos="fade-left">
                <h2 className="font-weight-bold">{primary.title}</h2>
                {/* <h2 className="font-weight-bold">
                  Costruisci il tuo <span className="text-primary">form</span>{' '}
                  d'iscrizione{' '}
                  <span className="text-primary">personalizzato</span>.
                </h2> */}
                <div className="lead mt-2 mb-4">
                  <PrismicRichText field={primary.description} />
                </div>
                <ul className="list-unstyled">
                  {items.map((item, key) => (
                    <li className="d-flex align-items-center mb-2" key={key}>
                      <i
                        className={`${primary.icon_classname} ri-xl text-primary mr-2`}
                      ></i>
                      <span>{item.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}
      {variation === 'emailMarketing' && (
        <section className="space-5">
          <div className="container">
            <div
              id="email"
              className="row align-items-center justify-content-around"
            >
              <div className="col-lg-7" data-aos="fade-in">
                <div className="row">
                  <div
                    className="col-md-6 mb-4 mb-md-0"
                    data-aos="fade-down"
                    data-aos-delay="200"
                  >
                    <img
                      className="img-fluid rounded-lg"
                      src="/img/email-marketing-build.gif"
                      alt="Image"
                    />
                  </div>
                  <div className="col-md-6 d-flex align-items-center">
                    <div className="row d-flex">
                      <div
                        className="col-12 mb-4"
                        data-aos="fade-down"
                        data-aos-delay="300"
                      >
                        <img
                          className="img-fluid rounded-lg"
                          src="/img/email-marketing-dog.gif"
                          alt="Image"
                        />
                      </div>
                      <div
                        className="col-12"
                        data-aos="fade-up"
                        data-aos-delay="200"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-5 mt-4 mt-lg-0 pl-lg-4"
                data-aos="fade-left"
              >
                <i
                  className={`${primary.icon_classname} ri-3x text-primary`}
                ></i>
                <h2 className="font-weight-bold">{primary.title}</h2>
                {/* <h2 className="font-weight-bold">
                  Invia <span className="text-primary">Email Marketing</span>.
                  Comodamente.
                </h2> */}
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
      {variation === 'smsMarketing' && (
        <section className="space-5">
          <div className="container">
            {primary.is_marketing ? (
              <div
                id="sms"
                className="row align-items-center justify-content-around pb-0 mb-4 mb-lg-0"
              >
                <div className="col-lg-5 mb-5 mb-lg-0" data-aos="fade-right">
                  <i
                    className={`${primary.icon_classname} ri-3x text-primary`}
                  ></i>
                  <h2 className="font-weight-bold mb-3">{primary.title}</h2>
                  {/* <h2 className="font-weight-bold mb-3">
                  <span className="">SMS</span> Marketing.
                </h2> */}
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
                                className={`${primary.card_icon_classname} ri-xl text-primary mr-2`}
                              ></i>
                              <span>{item.description}</span>
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
                                className={`${primary.card_icon_classname} ri-xl text-primary mr-2`}
                              ></i>
                              <span>{item.description}</span>
                            </div>
                          ),
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6" data-aos="fade-left">
                  <img
                    className="img-fluid rounded-lg"
                    src={primary.image.url}
                    alt="Image"
                    data-zoomable
                  />
                </div>
              </div>
            ) : (
              <div
                id="sms"
                className="row align-items-center justify-content-around pb-0 mb-4 mb-lg-0"
              >
                <div className="col-lg-6" data-aos="fade-left">
                  <img
                    className="img-fluid rounded-lg"
                    src={primary.image.url}
                    alt="Image"
                    data-zoomable
                  />
                </div>
                <div className="col-lg-5 mb-5 mb-lg-0" data-aos="fade-right">
                  <i
                    className={`${primary.icon_classname} ri-3x text-primary`}
                  ></i>
                  <h2 className="font-weight-bold mb-3">{primary.title}</h2>
                  {/* <h2 className="font-weight-bold mb-3">
                  <span className="">SMS</span> Marketing.
                </h2> */}
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
                                className={`${primary.card_icon_classname} ri-xl text-primary mr-2`}
                              ></i>
                              <span>{item.description} 123</span>
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
                                className={`${primary.card_icon_classname} ri-xl text-primary mr-2`}
                              ></i>
                              <span>{item.description}</span>
                            </div>
                          ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      )}
      {variation === 'whatsappMarketing' && (
        <section className="space-5">
          <div className="container">
            <div
              id="whatsapp"
              className="row align-items-center justify-content-around pb-0 mb-4 mb-lg-0"
            >
              <div className="col-lg-6" data-aos="fade-left">
                <div className="row">
                  <div
                    className="col-md-6 mb-4 mb-md-0"
                    data-aos="fade-down"
                    data-aos-delay="200"
                  >
                    <img
                      className="img-fluid rounded-lg"
                      src={primary.image_left.url}
                      alt="Image"
                    />
                  </div>
                  <div
                    className="col-md-6 mb-4 mb-md-0"
                    data-aos="fade-down"
                    data-aos-delay="400"
                  >
                    <img
                      className="img-fluid rounded-lg"
                      src={primary.image_right.url}
                      alt="Image"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-5 mb-5 mb-lg-0" data-aos="fade-right">
                <i
                  className={`${primary.icon_classname} ri-3x text-success`}
                ></i>
                <h2 className="font-weight-bold mb-3">{primary.title}</h2>
                {/* <h2 className="font-weight-bold mb-3">
                  <span className="text-success">Whatsapp</span> Marketing.
                </h2> */}
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
                              className={`${item.icon_classname} ri-xl text-primary mr-2`}
                            ></i>
                            <span>{item.description}</span>
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
                              className={`${item.icon_classname} ri-xl text-primary mr-2`}
                            ></i>
                            <span>{item.description}</span>
                          </div>
                        ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {variation === 'singleFlow' && (
        <section className="bg-light" id="flow">
          <div className="container">
            <div className="row align-items-center justify-content-around">
              <div
                className="col-lg-6 mb-4 mb-md-0"
                data-aos="fade-down"
                data-aos-delay="200"
              >
                <div className="wrapper1">
                  <div
                    data-aos="zoom-in"
                    data-aos-delay="500"
                    className="automation-step step1"
                    style={{ zIndex: 100 }}
                  >
                    <i className="ri-user-fill ri-lg mr-2"></i>Il contatto si è
                    iscritto alla lista
                  </div>
                  <div
                    data-aos="zoom-in"
                    data-aos-delay="1000"
                    className="automation-step step2"
                    style={{ zIndex: 100 }}
                  >
                    <img
                      style={{
                        marginBottom: '4px',
                        width: '30px',
                        height: '16px',
                      }}
                      src="/img/automation-1/icon-divide.svg"
                    />
                    Dividi contatto: se ha il TAG: “Italiano”
                  </div>
                  <div
                    data-aos="zoom-in"
                    data-aos-delay="1500"
                    className="text-center automation-step step3"
                  >
                    NO
                  </div>
                  <div
                    data-aos="zoom-in"
                    data-aos-delay="2000"
                    className="automation-step step4"
                    style={{ zIndex: 100 }}
                  >
                    <i className="ri-mail-fill ri-lg mr-2"></i>
                    <span>Invia Email “Benvenuto in Inglese”</span>
                  </div>
                  <div
                    data-aos="zoom-in"
                    data-aos-delay="2500"
                    className="automation-step step5"
                    style={{ zIndex: 100 }}
                  >
                    <i className="ri-whatsapp-fill ri-lg mr-2"></i>Invia
                    Whatsapp “Offerta benvenuto”
                  </div>
                  <div
                    data-aos="zoom-in"
                    data-aos-delay="3000"
                    className="automation-step step6"
                    style={{ zIndex: 100 }}
                  >
                    <i className="ri-add-fill ri-lg ri-2x"></i>
                  </div>

                  <div className="obj"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 540">
                    <path
                      d="M 189 15 V 162 c 0 13 1 16 16 16 H 398 C 413 178 416 184 416 196 V 412 V 196 C 416 184 413 178 398 178 H 205 C 190 178 189 175 189 162 C 189 175 188 178 174 178 H 4"
                      fill="none"
                      stroke="#5e5e7d"
                      strokeWidth="1"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </div>
              </div>
              <div
                className="col-lg-5 mt-4 mt-lg-0 pl-lg-4"
                data-aos="fade-left"
              >
                <i className="ri-organization-chart-fill ri-3x text-primary"></i>
                <h2 className="font-weight-bold">{primary.title}</h2>
                <div>
                  <PrismicRichText field={primary.description} />
                </div>
                <div className="row">
                  <div className="col">
                    {items.map((item, key) => (
                      <div
                        className="d-flex align-items-center mb-3 mr-3"
                        key={key}
                      >
                        <i
                          className={`${primary.card_icon_classname} ri-xl text-primary mr-2`}
                        ></i>
                        <span>{item.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default ReusableColumn
