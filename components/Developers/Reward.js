const Reward = () => {
  return (
    <section className="space-5 mt-5">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col">
            <div className="row justify-content-center">
              <img
                className="r1 rolling-icon"
                src="/sendflows-icons/email-icon.svg"
              />
              <img
                className="r2 rolling-icon animation-r pt-5"
                src="/sendflows-icons/code-icon.svg"
              />
              <img
                className="r3 rolling-icon delay-2 mt-5 pb-5"
                src="/sendflows-icons/send-icon.svg"
              />
              <img
                className="r4 rolling-icon animation-r pt-5 delay-3"
                src="/sendflows-icons/email2-icon.svg"
              />
              <img
                className="r5 rolling-icon delay-5 mt-3"
                src="/sendflows-icons/builder-icon.svg"
              />
              <img
                className="r6 rolling-icon animation-r mt-5 pt-5 delay-5"
                src="/sendflows-icons/email-icon.svg"
              />
              <div className="col-lg-10" data-aos="fade-up">
                <h1 className="display-4 font-weight-bold">
                  Il primo marketing software che{' '}
                  <span className="text-primary">ricompensa</span> i{' '}
                  <span className="text-primary">developers</span>.
                </h1>
                <p className="h5 font-weight-normal my-4">
                  Risparmia tempo, guadagna con noi e connetti email, sms e
                  whatsapp ai tuoi siti web nella maniera più semplice e veloce.
                </p>

                <a
                  style={{ backgroundColor: '#3390ec', border: 'none' }}
                  href="https://t.me/sendflows"
                  className="btn btn-lg btn-primary"
                >
                  <i className="ri-telegram-fill ri-lg mr-2"></i>
                  <span>Scrivici su Telegram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reward
