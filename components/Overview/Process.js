import Link from "next/link"

const Process = () => {
  return (
    <section className="space-3">
      <div className="container">
        <div className="w-100 w-lg-75 text-center mx-auto mb-5">
          <h6 className="text-primary font-weight-bold">PROGRAMMA AFFILIAZIONE</h6>
          <h2 className="font-weight-bold">
            Sei un programmatore o hai una web agency?
          </h2>
          <p className="lead">
            Offriamo un programma di partnership ed affiliazione a tutti i
            programmatori ed agenzie di sviluppo web che hanno bisogno di un
            parter affidabile e con un supporto completo h24.
          </p>
        </div>
        <div className="row text-center">
          <div className="col-md-6 col-lg-3 mb-4 mb-lg-0" data-aos="zoom-in-up">
            <div className="bg-primary-2 px-4 py-4 text-white rounded hover-bg-primary-2 hover-translate-y h-100 rounded-lg">
              <i className="ri-hand-coin-fill ri-3x text-white"></i>
              <h5 className="mt-4 mb-2">Affiliazione</h5>
              <p>
                Guadagna il 15% su tutti i tuoi clienti finali che utilizzeranno
                Sendflows.
              </p>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-3 mb-4 mb-lg-0"
            data-aos="zoom-in-up"
            data-aos-delay="100"
          >
            <div className="bg-light px-4 py-4 rounded hover-bg-primary-2 hover-translate-y h-100 rounded-lg">
              <i className="ri-pencil-ruler-2-fill ri-3x text-primary"></i>
              <h5 className="mt-4 mb-2">Software Completo</h5>
              <p>
                Dai ai tuoi clienti un software di email marketing completo.
              </p>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-3 mb-4 mb-lg-0"
            data-aos="zoom-in-up"
            data-aos-delay="200"
          >
            <div className="bg-light px-4 py-4 rounded hover-bg-primary-2 hover-translate-y h-100 rounded-lg">
              <i className="ri-code-box-fill ri-3x text-primary"></i>
              <h5 className="mt-4 mb-2">Personalizzazioni Custom</h5>
              <p>
                Personalizziamo il nostro software in base alle vostre esigenze.
              </p>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-3 mb-4 mb-lg-0"
            data-aos="zoom-in-up"
            data-aos-delay="300"
          >
            <div className="bg-light px-4 py-4 rounded hover-bg-primary-2 hover-translate-y h-100 rounded-lg">
              <i className="ri-customer-service-fill ri-3x text-primary"></i>
              <h5 className="mt-4 mb-2">Supporto h24</h5>
              <p>
                Per i nostri partner un servizio di supporto chat e telefonico
                h24.
              </p>
            </div>
          </div>
        </div>
        <div className="w-100 w-lg-75 text-center mx-auto mt-3">
          <Link
            href="/developer"
            className="d-inline-flex align-items-center btn btn-outline-primary mt-4"
          >
            Scopri il programma
            <i className="ri-arrow-right-line ri-lg ml-2"></i>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Process
