import Link from 'next/link'

const Reviews = () => {
  return (
    <section className="space-5 bg-light">
      <div className="container">
        <div className="w-100 w-lg-75 text-center mx-auto mb-5">
          <i className="ri-chat-quote-fill ri-3x text-primary"></i>
          <h2 className="font-weight-bold text-center">
            Cosa dicono i nostri utenti.
          </h2>
        </div>
        <div className="card-columns">
          <div className="card card-body">
            <p className="lead">
              “Aggiungere funzioni personalizzate in modo gratuito è surreale, è
              come avere un team di programmatori interno.”
            </p>
            <div className="d-flex mt-5 pt-2">
              <img
                className="rounded-circle"
                src="/img/pellegrino-bozzella.jpeg"
                alt="Image"
                height="60"
              />
              <div className="ml-3">
                <h5 className="mb-0">Pellegrino Bozzella</h5>
                <p className="text-muted">Gobrand srl | Esdebitami spa</p>
              </div>
            </div>
          </div>
          <div className="card card-body">
            <p className="lead">
              &lsquo;Ho perso mesi a cercare tool che mi permettesserò di avere
              email transazionali e di marketing in un&apos;unica soluzione e
              soprattutto conveniente per una startup come{' '}
              <Link href="https://beautygo.it">beautygo.it</Link>.&rsquo;
            </p>
            <div className="d-flex mt-5 pt-2">
              <img
                className="rounded-circle"
                src="/img/ivan.jpeg"
                alt="Image"
                height="60"
              />
              <div className="ml-3">
                <h5 className="mb-0">Ivan Fruggiero</h5>
                <p className="text-muted">Beautygo srl</p>
              </div>
            </div>
          </div>
          <div className="card card-body">
            <p className="lead">
              “Efficiently unleash cross-media information without cross-media
              value. Quickly maximize timely deliverables for real-time
              schemas.”
            </p>
            <div className="d-flex mt-5 pt-2">
              <img
                className="rounded-circle"
                src="/img/numan-cheema.jpg"
                alt="Image"
                height="60"
              />
              <div className="ml-3">
                <h5 className="mb-0">Numan Cheema</h5>
                <p className="text-muted">Deciphercyber llc</p>
              </div>
            </div>
          </div>
          <div className="card card-body">
            <p className="lead">
              “Avevo bisogno di un semplice tool per aggiornare settimanalmente
              i miei clienti con un report tecnico, sendflows è veramente
              semplice da usare ed implementare.”
            </p>
            <div className="d-flex mt-5 pt-2">
              <img
                className="rounded-circle"
                src="/img/michele-lizzit.jpeg"
                alt="Image"
                height="60"
              />
              <div className="ml-3">
                <h5 className="mb-0">Michele Lizzit</h5>
                <p className="text-muted">Cybersecurity Expert</p>
              </div>
            </div>
          </div>
          <div className="card card-body">
            <p className="lead">
              “Ho provato Sendflows per il mio blog personale ed ho iniziato ad
              utilizzarlo anche per i miei clienti.”
            </p>
            <div className="d-flex mt-5 pt-2">
              <img
                className="rounded-circle"
                src="/img/andrea-vitto.jpeg"
                alt="Image"
                height="60"
              />
              <div className="ml-3">
                <h5 className="mb-0">Andrea Vitto</h5>
                <p className="text-muted">Full-Stack Marketer</p>
              </div>
            </div>
          </div>
          <div className="card card-body">
            <p className="lead">
              “I miei clienti avevano bisogno di un tool completo e semplice da
              usare ed affiliandomi a Sendflows ho ottenuto sia una soluzione
              per loro che un&apos;altra entrata per me.”
            </p>
            <div className="d-flex mt-5 pt-2">
              <img
                className="rounded-circle"
                src="/img/dario-moceri.jpeg"
                alt="Image"
                height="60"
              />
              <div className="ml-3">
                <h5 className="mb-0">Dario Moceri</h5>
                <p className="text-muted">Blockchain Solution Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews
