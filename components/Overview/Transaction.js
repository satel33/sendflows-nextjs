const Transaction = () => {
  return (
    <section className="space-5" id="transactional-email">
      <div className="container">
        <div className="row align-items-center justify-content-around pb-0 mb-4 mb-lg-0">
          <div className="col-lg-5 mb-5 mb-lg-0" data-aos="fade-right">
            <i className="ri-rocket-fill ri-3x text-primary"></i>
            <h2 className="font-weight-bold">
              <span className="text-primary">Modifica</span> le email{' '}
              <span className="text-primary">transazionali</span> senza <br />
              toccare il codice.
            </h2>
            <p className="lead mt-2 mb-3">
              Grazie alle nostre <strong>email transazionali dinamiche </strong>
              potrai modificare la grafica ed il contenuto delle email
              automatiche della tua piattaforma{' '}
              <strong>senza l'aiuto di uno sviluppatore.</strong>
            </p>
            <div className="row mt-5">
              <div className="col" data-aos="fade-left" data-aos-delay="200">
                <img src="/img/logo-atica.png" height="48" alt="Brand" />
              </div>
              <div className="col" data-aos="fade-left" data-aos-delay="300">
                <img src="/img/logo-earth.png" height="48" alt="Brand" />
              </div>
              <div className="col" data-aos="fade-left" data-aos-delay="400">
                <img src="/img/logo-tvit.png" height="48" alt="Brand" />
              </div>
              <div className="col" data-aos="fade-left" data-aos-delay="500">
                <img src="/img/logo-9.png" height="48" alt="Brand" />
              </div>
            </div>
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
        </div>
      </div>
    </section>
  )
}

export default Transaction
