const Program = () => {
  return (
    <section className="space-5">
      <div className="container">
        <div className="row align-items-center justify-content-around">
          <div className="col-lg-6" data-aos="fade-right">
            <img
              className="img-fluid rounded-lg"
              src="/img/1000x1000.png"
              alt="Image"
            />
          </div>
          <div className="col-lg-5 mt-4 mt-lg-0" data-aos="fade-left">
            <h2>Il primo programma di affiliazione per sviluppatori.</h2>
            <p className="lead mt-2 mb-4">
              Riceverai un compenso del 10% da tutti i pagamanti che il tuo
              cliente effettuerà.
            </p>
            <p className="lead mt-2 mb-4">
              Inoltre Sendflows ti fornirà tutta la documentazione necessaria da
              consegnare al tuo cliente per sfruttura tutte le nostre{' '}
              <a href="/features">funzioni</a>.
            </p>
            <div className="row">
              <div className="col">
                <div className="d-flex align-items-center mb-3 mr-3">
                  <i className="ri-checkbox-circle-fill ri-xl text-primary mr-2"></i>
                  <span>Guadagno passivo</span>
                </div>
                <div className="d-flex align-items-center mb-3 mr-3">
                  <i className="ri-checkbox-circle-fill ri-xl text-primary mr-2"></i>
                  <span>10% di commissione</span>
                </div>
              </div>
              <div className="col">
                <div className="d-flex align-items-center mb-3 mr-3">
                  <i className="ri-checkbox-circle-fill ri-xl text-primary mr-2"></i>
                  <span>Supporto tech h24</span>
                </div>
                <div className="d-flex align-items-center mb-3 mr-3">
                  <i className="ri-checkbox-circle-fill ri-xl text-primary mr-2"></i>
                  <span>Documentazione per i tuoi clienti</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row align-items-center justify-content-around space-3 pb-0 mb-4 mb-lg-0">
          <div className="col-lg-5 mb-5 mb-lg-0" data-aos="fade-left">
            <h2>Launch your website now using Findeas.</h2>
            <p className="lead mt-2 mb-3">
              Quickly cultivate optimal processes and tactical architectures.
              Completely iterate covalent strategic theme areas via accurate
              e-markets.
            </p>
            <ul className="list-unstyled">
              <li className="d-flex align-items-center mb-2">
                <i className="ri-check-fill ri-xl text-primary mr-2"></i>
                <span>HTML5 & CSS3</span>
              </li>
              <li className="d-flex align-items-center mb-2">
                <i className="ri-check-fill ri-xl text-primary mr-2"></i>
                <span>W3C Valid HTML Code</span>
              </li>
              <li className="d-flex align-items-center mb-2">
                <i className="ri-check-fill ri-xl text-primary mr-2"></i>
                <span>Working Ajax PHP Contact Form</span>
              </li>
            </ul>
            <a href="#" className="btn btn-primary mt-1">
              Try it out now
            </a>
          </div>
          <div className="col-lg-6" data-aos="fade-right">
            <img
              className="img-fluid rounded-lg"
              src="/img/1000x1000.png"
              alt="Image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Program
