const FAQ = () => {
  return (
    <section className="space-3 bg-light">
      <div className="container">
        <div className="w-100 w-lg-75 text-center mx-auto mb-5">
          <i className="ri-question-answer-fill ri-3x text-primary"></i>
          <h2 className="font-weight-bold">Domande più frequenti.</h2>
          <p className="lead">
            Ecco la lista delle domende più frequenti e le corrispettive
            risposte per capire al meglio tutte le caratteristiche di sendflows.
          </p>
        </div>
        <div className="row justify-content-around">
          <div className="col-lg-5">
            <div id="faqOne">
              <div className="card border-top-0 border-left-0 border-right-0">
                <a
                  href="#faqOne1"
                  data-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  className="p-3 p-md-4 collapsed"
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <h6 className="mb-0">Che funzioni sono incluse?</h6>
                    <i className="ri-arrow-down-s-line ri-lg"></i>
                  </div>
                </a>
                <div className="collapse" id="faqOne1" data-parent="#faqOne">
                  <p className="mb-0 px-3 px-md-4 pb-3 pb-md-4">
                    Qualsiasi pacchetto venga scelto sono incluse tutte le
                    funzioni. Puoi vedere le funzioni di Sendflows dal nostro
                    menù.
                  </p>
                </div>
              </div>
              <div className="card border-top-0 border-left-0 border-right-0">
                <a
                  href="#faqOne2"
                  data-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  className="p-3 p-md-4 collapsed"
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <h6 className="mb-0">Quanto costa?</h6>
                    <i className="ri-arrow-down-s-line ri-lg"></i>
                  </div>
                </a>
                <div className="collapse" id="faqOne2" data-parent="#faqOne">
                  <p className="mb-0 px-3 px-md-4 pb-3 pb-md-4">
                    Sendflows offre un piano di partenza gratuito per testare le
                    sue funzioni ed avere modo di provare la piattaforma, i
                    pacchetti PRO sono visualizzabili nella pagina dedicata{' '}
                    <a href="/pricing">cliccando qui</a>.
                  </p>
                </div>
              </div>
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
                      Cosa significa 'sviluppo funzioni personalizzate'?
                    </h6>
                    <i className="ri-arrow-down-s-line ri-lg"></i>
                  </div>
                </a>
                <div className="collapse" id="faqOne3" data-parent="#faqOne">
                  <p className="mb-0 px-3 px-md-4 pb-3 pb-md-4">
                    Lo sviluppo di funzioni personalizzate è un servizio che
                    offriamo a tutti i nostri clienti attraverso il quale
                    possono richiedere l'implementazione di una funzione
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
                    <a href="/register">Provalo adesso</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 mt-5 mt-lg-0">
            <div id="faqTwo">
              <div className="card border-top-0 border-left-0 border-right-0">
                <a
                  href="#faqTwo1"
                  data-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  className="p-3 p-md-4 collapsed"
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <h6 className="mb-0">È solo per le startup?</h6>
                    <i className="ri-arrow-down-s-line ri-lg"></i>
                  </div>
                </a>
                <div className="collapse" id="faqTwo1" data-parent="#faqTwo">
                  <p className="mb-0 px-3 px-md-4 pb-3 pb-md-4">
                    Sendflows è adatto a tutti i siti web, piattaforme ed APP
                    sia per aziende che privati che hanno bisogno di unn tool
                    economico e completo per l'invio di email ed SMS.
                  </p>
                </div>
              </div>
              <div className="card border-top-0 border-left-0 border-right-0">
                <a
                  href="#faqTwo2"
                  data-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  className="p-3 p-md-4 collapsed"
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <h6 className="mb-0">Posso personalizzare le email?</h6>
                    <i className="ri-arrow-down-s-line ri-lg"></i>
                  </div>
                </a>
                <div className="collapse" id="faqTwo2" data-parent="#faqTwo">
                  <p className="mb-0 px-3 px-md-4 pb-3 pb-md-4">
                    Assolutamente sì, direi che è quasi d'obbligo 😉.
                    <br />
                    Puoi usare il builder mail di Sendflows per costruire le tue
                    email da 0 o partendo da uno dei nostri template
                    professionali.
                  </p>
                </div>
              </div>
              <div className="card border-top-0 border-left-0 border-right-0">
                <a
                  href="#faqTwo3"
                  data-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  className="p-3 p-md-4 collapsed"
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <h6 className="mb-0">
                      Posso inviare le email dal mio indirizzo?
                    </h6>
                    <i className="ri-arrow-down-s-line ri-lg"></i>
                  </div>
                </a>
                <div className="collapse" id="faqTwo3" data-parent="#faqTwo">
                  <p className="mb-0 px-3 px-md-4 pb-3 pb-md-4">
                    Certo, potrai collegare il tuo indirizzo email professionale
                    una volta entrato nella piattaforma nella sezione "Dominio".
                  </p>
                </div>
              </div>
              <div className="card border-0">
                <a
                  href="#faqTwo4"
                  data-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  className="p-3 p-md-4 collapsed"
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <h6 className="mb-0">Posso caricare una mia lista contatti?</h6>
                    <i className="ri-arrow-down-s-line ri-lg"></i>
                  </div>
                </a>
                <div className="collapse" id="faqTwo4" data-parent="#faqTwo">
                  <p className="mb-0 px-3 px-md-4 pb-3 pb-md-4">
                    Sì, puoi caricare la tua lista contatti in formato .csv o
                    generare nuovi iscritti creando un modulo di iscrizione ed
                    inserendolo nel tuo sito web con un copia e incolla.
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

export default FAQ
