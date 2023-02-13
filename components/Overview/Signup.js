const Signup = () => {
  return (
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
          <div className="col-lg-5 mt-4 mt-lg-0" data-aos="fade-left">
            <h2 className="font-weight-bold">
              Costruisci il tuo <span className="text-primary">form</span>{' '}
              d'iscrizione <span className="text-primary">personalizzato</span>.
            </h2>
            <p className="lead mt-2 mb-4">
              Grazie al form builder di Sendflows potrai{' '}
              <strong>costruire il tuo modulo d'iscrizione</strong> contatti con
              una semplice interfaccia drag&drop
            </p>
            <ul className="list-unstyled">
              <li className="d-flex align-items-center mb-2">
                <i className="ri-check-fill ri-xl text-primary mr-2"></i>
                <span>Aumenta il numero di utenti iscritti</span>
              </li>
              <li className="d-flex align-items-center mb-2">
                <i className="ri-check-fill ri-xl text-primary mr-2"></i>
                <span>Style e Branding FORM personalizzabile</span>
              </li>
              <li className="d-flex align-items-center mb-2">
                <i className="ri-check-fill ri-xl text-primary mr-2"></i>
                <span>Implementalo sul tuo sito con copia e incolla</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signup
