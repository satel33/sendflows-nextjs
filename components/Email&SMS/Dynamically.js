const Dinamically = () => {
  return (
    <section id="transactional-sms" className="space-5">
      <div className="container">
        <div className="row align-items-center justify-content-around">
          <div className="col-lg-6" data-aos="fade-right">
            <img
              className="img-fluid rounded-lg"
              src="/img/sms-animation.gif"
              alt="Image"
            />
          </div>
          <div className="col-lg-5 mt-4 mt-lg-0" data-aos="fade-left">
            <i className="ri-chat-check-fill ri-3x text-primary"></i>
            <h2 className="font-weight-bold mb-3">
              Modifica <span className="text-primary">SMS transazionali.</span>
              <br />
              Dinamicamente.
            </h2>
            <p className="lead mt-2 mb-4">
              Componi i messaggi transazionali che il tuo business deve inviare
              e modificali in qualsiasi momento con pochi click.
            </p>
            <div className="row">
              <div className="col">
                <div className="d-flex align-items-center mb-3 mr-3">
                  <i className="ri-checkbox-circle-fill ri-xl text-primary mr-2"></i>
                  <span>Messaggi OTP.</span>
                </div>
                <div className="d-flex align-items-center mb-3 mr-3">
                  <i className="ri-checkbox-circle-fill ri-xl text-primary mr-2"></i>
                  <span>SMS Transazionali.</span>
                </div>
              </div>
              <div className="col">
                <div className="d-flex align-items-center mb-3 mr-3">
                  <i className="ri-checkbox-circle-fill ri-xl text-primary mr-2"></i>
                  <span>Modifica dinamica e real time.</span>
                </div>
                <div className="d-flex align-items-center mb-3 mr-3">
                  <i className="ri-checkbox-circle-fill ri-xl text-primary mr-2"></i>
                  <span>Collegamento API One-Time.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dinamically
