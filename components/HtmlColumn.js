const HtmlColumn = ({ columnType, data }) => {
  return (
    <>
      {columnType === 'Singleflow' && 
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
                    <i className="ri-user-fill ri-lg mr-2"></i>
                    {data.text1}
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
                    {data.text2}
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
                    <span>{data.text3}</span>
                  </div>
                  <div
                    data-aos="zoom-in"
                    data-aos-delay="2500"
                    className="automation-step step5"
                    style={{ zIndex: 100 }}
                  >
                    <i className="ri-whatsapp-fill ri-lg mr-2"></i>
                    {data.text4}
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
              </div>}
      {columnType === 'Animation' && (
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
                <div style={{ width: '60%' }} className="e-paragraph"></div>
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
      )}
      {columnType === 'Form' && (
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
            <div className="p-4 col-lg-7 col-12 mt-5" data-aos="fade-left">
              <div style={{ position: 'relative' }} className="rounded-lg">
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
      )}
      {columnType === 'Two Image1' && (
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
      )}
      {columnType === 'Two Image2' && (
        <div className="col-lg-6" data-aos="fade-left">
          <div className="row">
            <div
              className="col-md-6 mb-4 mb-md-0"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              <img
                className="img-fluid rounded-lg"
                src="/img/whatsapp-sendflows3.gif"
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
                src="/img/whatsapp-sendflows.gif"
                alt="Image"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default HtmlColumn
