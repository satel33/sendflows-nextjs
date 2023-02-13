const CustomPlan = () => {
  return (
    <section id="custom-plan" className="space-1 bg-primary-3">
      <div className="container">
        <div className="w-100 w-lg-75 text-center mx-auto mb-5 text-white">
          <i className="ri-drag-drop-fill ri-3x text-white"></i>
          <h2 className="font-weight-bold text-center">Piano Personalizzato</h2>
          <p className="lead">
            Non riesci a trovare un pacchetto adatto a te? Nessun problema,
            contattaci subito qui.
          </p>
        </div>
        <div className="text-center mt-5">
          <a
            href="mailto:info@sendflows.io"
            className="btn btn-primary mt-4 mr-2"
          >
            <i
              style={{ verticalAlign: 'sub' }}
              className="ri-mail-fill ri-lg"
            ></i>
            <span>Scrivici un email</span>
          </a>
          <a
            style={{ backgroundColor: '#33390ec' }}
            href="https://t.me/sendflows"
            className="btn bg-blue mt-4 mr-2 text-white"
          >
            <i className="ri-telegram-fill ri-lg"></i>
            <span>Scrivici su Telegram</span>
          </a>
          <a
            href="https://wa.me/393463685420?text=Hey%20"
            className="btn btn-success mt-4 mr-2"
          >
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

export default CustomPlan
