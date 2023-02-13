const Forms = () => {
  return (
    <section className="space-5 pb-5">
      <div className="container">
        <div className="text-center w-lg-75 mx-auto mb-5">
          <h1 className="font-weight-bold display-4">Modulistica</h1>
        </div>

        <p className="lead">
          In questa pagina puoi trovare tutti i moduli necessari alle
          comunicazioni e richieste che vuoi effettuare.
        </p>

        <div className="row">
          <div className="col-6">
            <a
              className="btn btn-outline-primary d-inline-flex align-items-center mb-4"
              href="https://sendflows.io/modules/MODULO-COMUNICAZIONE-DATI-A-INTERESSATO.pdf"
            >
              <i className="ri-download-line ri-lg mr-2"></i>
              <span>Comunicazione dati a interessato PDF</span>
            </a>
            <a
              className="btn btn-outline-primary d-inline-flex align-items-center mb-4"
              href="https://sendflows.io/modules/-COMUNICAZIONE-VIOLAZIONE-A-INTERESSATI.pdf"
            >
              <i className="ri-download-line ri-lg mr-2"></i>
              <span>Comunicazione violazione a interessati PDF</span>
            </a>
            <a
              className="btn btn-outline-primary d-inline-flex align-items-center mb-4"
              href="https://sendflows.io/modules/MODULO-COMUNICAZIONE-VIOLAZIONE-AL-GARANTE.pdf"
            >
              <i className="ri-download-line ri-lg mr-2"></i>
              <span>Comunicazione violazione al garante PDF</span>
            </a>
            <a
              className="btn btn-outline-primary d-inline-flex align-items-center mb-4"
              href="https://sendflows.io/modules/MODULO-RICHIESTA-DI-ACCESSO-AI-DATI-DA-PARTE-DELL-INTERESSATO.pdf"
            >
              <i className="ri-download-line ri-lg mr-2"></i>
              <span>
                Richiesta di accesso ai dati da parte dell'interessato PDF
              </span>
            </a>
          </div>

          <div className="col-6"></div>
        </div>

        <div className="text-center mt-5 pt-3">
          <a className="d-inline-flex align-items-center text-primary" href="#">
            <i className="ri-arrow-left-line"></i>
            <span className="ml-1">Return to homepage</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Forms
