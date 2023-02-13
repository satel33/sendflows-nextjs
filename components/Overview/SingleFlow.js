import React from 'react'

const SingleFlow = () => {
  return (
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
                  style={{ marginBottom: '4px', width: '30px', height: '16px' }}
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
                <i className="ri-whatsapp-fill ri-lg mr-2"></i>Invia Whatsapp
                “Offerta benvenuto”
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
          <div className="col-lg-5 mt-4 mt-lg-0 pl-lg-4" data-aos="fade-left">
            <i className="ri-organization-chart-fill ri-3x text-primary"></i>
            <h2 className="font-weight-bold">
              Email, SMS e Whatsapp marketing in{' '}
              <span className="text-primary">un unico flow.</span>
            </h2>
            <p className="lead mt-2 mb-4">
              Gestisci le tue campagne marketing inviando email, SMS o messaggi
              su Whatsapp ai tuoi clienti in modo completamente automatizzato e
              semplice.
            </p>
            <div id="accordion">
              <div className="card mb-2 mb-md-3">
                <a
                  href="#accordion1"
                  data-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  className="p-3 p-md-4 collapsed"
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <h6 className="mb-0">Email ed SMS Marketing</h6>
                    <i className="ri-arrow-down-s-line ri-lg"></i>
                  </div>
                </a>
                <div
                  className="collapse"
                  id="accordion1"
                  data-parent="#accordion"
                >
                  <p className="mb-0 px-3 px-md-4 pb-3 pb-md-4">
                    Invia newsletter settimanali ed{' '}
                    <strong>automatizza l'invio delle tue email o SMS</strong>{' '}
                    tramite il nostro <strong>flow di automazioni</strong> in
                    base a caratteristiche e condizioni del contatto ed invia
                    promo istantanee con un invio broadcast.
                  </p>
                </div>
              </div>
              <div className="card mb-2 mb-md-3">
                <a
                  href="#accordion2"
                  data-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  className="p-3 p-md-4 collapsed"
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <h6 className="mb-0">Email ed SMS Transazionali</h6>
                    <i className="ri-arrow-down-s-line ri-lg"></i>
                  </div>
                </a>
                <div
                  className="collapse"
                  id="accordion2"
                  data-parent="#accordion"
                >
                  <p className="mb-0 px-3 px-md-4 pb-3 pb-md-4">
                    Modifica le email automatiche che vengono inviate dal tuo
                    sito web, APP o software in qualsiasi momento e{' '}
                    <strong>senza dover accedere al codice</strong>. Le email ed
                    SMS verrannno aggiornate in modo istantaneo tramite
                    <strong>sistema API</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingleFlow
