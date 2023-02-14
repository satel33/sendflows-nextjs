import Link from "next/link"

const PricingFaq = () => {
  return (
    <section className="space-2">
      <div className="container">
        <div className="w-100 w-lg-75 text-center mx-auto mb-5">
          <h6 className="text-primary font-weight-bold">FAQ</h6>
          <h2>Le domande più frequenti.</h2>
          <p className="lead">
            Ecco la lista delle domende più frequenti e le corrispettive
            risposte per capire al meglio tutte le caratteristiche di Sendflows.
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div id="faqOne" className="border">
              <div className="card border-top-0 border-left-0 border-right-0">
                <a
                  href="#faqOne3"
                  data-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  className="p-3 p-md-4 collapsed"
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <h6 className="mb-0">
                      Cosa significa &apos;sviluppo funzioni personalizzate&apos;?
                    </h6>
                    <i className="ri-arrow-down-s-line ri-lg"></i>
                  </div>
                </a>
                <div className="collapse" id="faqOne3" data-parent="#faqOne">
                  <p className="mb-0 px-3 px-md-4 pb-3 pb-md-4">
                    Lo sviluppo di funzioni personalizzate è un servizio che
                    offriamo a tutti i nostri clienti attraverso il quale
                    possono richiedere l&apos;implementazione di una funzione
                    aggiuntiva non presente necessaria al loro business.
                  </p>
                </div>
              </div>
              <div className="card border-0">
                <a
                  href="#faqOne4"
                  data-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  className="p-3 p-md-4 collapsed"
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <h6 className="mb-0">Posso provarlo gratuitamente?</h6>
                    <i className="ri-arrow-down-s-line ri-lg"></i>
                  </div>
                </a>
                <div className="collapse" id="faqOne4" data-parent="#faqOne">
                  <p className="mb-0 px-3 px-md-4 pb-3 pb-md-4">
                    Certo, Sendflows offre un piano di base gratuito per far
                    testare agli utenti il suo funzionamento.
                    <br />
                    👉🏼 <Link href="/register">Provalo adesso</Link>
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

export default PricingFaq
