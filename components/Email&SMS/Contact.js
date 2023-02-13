const Contact = () => {
  return (
    <section className="space-1 mb-5">
      <div className="container bg-primary-3 text-white px-5 py-5 rounded-lg">
        <div className="text-center w-lg-75 mx-auto py-5">
          <h2 className="font-weight-bold">
            Non trovi la funzione che stai cercando?
          </h2>
          <p className="lead mt-4">
            Nessun problema. Contattaci subito nel modo che preferisci e
            valuteremo come adattare Sendflows alle tue esigenze.
          </p>
          <a href="#" className="btn btn-primary mt-4 mr-2">
            <i
              style={{ verticalAlign: 'sub' }}
              className="ri-mail-fill ri-lg"
            ></i>
            <span>Scrivi un email</span>
          </a>
          <a
            style={{ backgroundColor: '#3390ec' }}
            href="#"
            className="btn bg-blue mt-4 mr-2 text-white"
          >
            <i className="ri-telegram-fill ri-lg"></i>
            <span>Scrivici su Telegram</span>
          </a>
          <a href="#" className="btn btn-success mt-4 mr-2">
            <i
              style={{ verticalAlign: 'sub' }}
              className="ri-whatsapp-fill ri-lg"
            ></i>
            <span>Scrivici su Whatsapp</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
