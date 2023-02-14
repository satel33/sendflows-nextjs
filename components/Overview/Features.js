import Link from "next/link"

const Features = () => {
  return (
    <section className="space-1">
      <div className="container">
        <div className="w-100 w-lg-75 text-center mx-auto mb-3">
          <h3 className="m-5 font-weight-bold">
            Tutte le funzioni necessarie. Un unico strumento.
          </h3>
        </div>
        <div className="row d-flex justify-content-center flex-wrap">
          <div
            className="col-md-6 mb-4 col-lg-5"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="bg-light rounded-lg h-100 px-5 py-5 hover-bg-primary hover-translate-y">
              <i className="ri-organization-chart ri-3x text-primary"></i>
              <h5>Flow Automazioni Email, SMS e Whatsappp</h5>
              <p className="lead">
                Gestisci ed invia newsletter settimanali o promo esclusive ai
                tuoi clienti tramite un flusso grafico semplice ed intuitivo.
              </p>
            </div>
          </div>
          <div
            className="col-md-6 mb-4 col-lg-5"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="bg-light rounded-lg h-100 px-5 py-5 hover-bg-primary hover-translate-y">
              <i className="ri-mail-check-fill ri-3x text-primary"></i>
              <h5>Email ed SMS Transazionali</h5>
              <p className="lead">
                Modifica in pochi click le email ed SMS transazionali senza
                l&quot;aiuto del tuo sviluppatore.
              </p>
            </div>
          </div>
          <div
            className="col-md-6 mb-4 col-lg-5"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="bg-light rounded-lg h-100 px-5 py-5 hover-bg-primary hover-translate-y">
              <i className="ri-layout-masonry-fill ri-3x text-primary"></i>
              <h5>Interfaccia Semplice ed Intuitiva</h5>
              <p className="lead">
                La piattaforma è stata pensata ed ideata per essere utilizzata
                anche dai menno esperti in maniera pur includendo tutte le
                funzionalità necessarie.
              </p>
            </div>
          </div>
          <div
            className="col-md-6 mb-4 col-lg-5"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="bg-light rounded-lg h-100 px-5 py-5 hover-bg-primary hover-translate-y">
              <i className="ri-survey-fill ri-3x text-primary"></i>
              <h5>Builder Moduli Iscrizione</h5>
              <p className="lead">
                Crea il tuo modulo di iscrizione per gli utenti ed implementalo
                sul tuo sito con un semplice copia ed incolla.
              </p>
            </div>
          </div>
          <div
            className="col-md-6 mb-4 col-lg-5"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="bg-light rounded-lg h-100 px-5 py-5 hover-bg-primary hover-translate-y">
              <i className="ri-code-s-slash-fill ri-3x text-primary"></i>
              <h5>Sviluppo Funzioni Custom</h5>
              <p className="lead">
                Se il tuo business ha bisogno di una funzione aggiuntiva in
                pochi giorni possiamo sviluppare una soluzione ad hoc.
              </p>
            </div>
          </div>
          <div
            className="col-md-6 mb-4 col-lg-5"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="bg-light rounded-lg h-100 px-5 py-5 hover-bg-primary hover-translate-y">
              <i className="ri-whatsapp-fill ri-3x text-primary"></i>
              <h5>Supporto Whatsapp h24 7/7</h5>
              <p className="lead">
                Avrai un consulente e tecnnico specializzato sempre a tua
                disposizione per qualsiasi problema o consiglio.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        <Link href="/feature" className="btn btn-outline-primary mt-4 mr-2">
          <span>Scopri tutte le funzioni</span>
          <i
            style={{ verticalAlign: 'sub' }}
            className="ri-arrow-right-s-line ri-lg"
          ></i>
        </Link>
      </div>
    </section>
  )
}

export default Features
