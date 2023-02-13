const ContactForm = () => {
  return (
    <section className="space-1">
      <div className="container rounded-lg">
        <div className="card card- border px-5 py-5">
          <div className="row d-flex justify-content-around">
            <div className="col-lg-5 mb-5" data-aos="fade-right">
              <div className="row">
                <div className="col-12 mb-5">
                  <div className="hover-translate-y h-100">
                    <i className="ri-whatsapp-fill ri-3x text-primary"></i>
                    <h5 className="mt-2 mb-2">Whatsapp</h5>
                    <p>We will reply within 1 business day.</p>
                    <a href="https://wa.me/393463685420?text=Hey%20">
                      +39 <span></span>346 <span></span>368<span></span>5420
                    </a>
                  </div>
                </div>
                <div className="col-12 mb-5">
                  <div className="hover-translate-y h-100">
                    <i className="ri-telegram-fill ri-3x text-primary"></i>
                    <h5 className="mt-2 mb-2">Telegram</h5>
                    <p>We will reply within 1 business day.</p>
                    <a href="https://t.me/sendflows">@sendflows</a>
                  </div>
                </div>
                <div className="col-12 mb-5">
                  <div className="hover-translate-y h-100">
                    <i className="ri-mail-fill ri-3x text-primary"></i>
                    <h5 className="mt-2 mb-2">Email</h5>
                    <p>We will reply within 1 business day.</p>
                    <a href="mailto:info@sendflows.io">
                      info<span></span>@<span></span>send<span></span>flows.
                      <span></span>io
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5" data-aos="fade-left">
              <div>
                <h3 className="mb-4">Your Information</h3>
                <form id="contact" method="POST">
                  <div className="form-group">
                    <label htmlFor="name">Full name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Your working email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input
                      type="text"
                      className="form-control"
                      id="company"
                      name="company"
                      placeholder="Your company"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      name="subject"
                      placeholder="Your subject"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="5"
                      name="message"
                      placeholder="Your message"
                      required
                    ></textarea>
                  </div>
                  <button
                    id="contactBtnSubmit"
                    type="submit"
                    className="btn btn-primary btn-block"
                  >
                    Send Message
                  </button>
                  <button
                    id="contactBtnSending"
                    className="btn btn-primary btn-block d-none"
                    type="button"
                    disabled
                  >
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Loading...</span>
                    <span className="ml-1">Sending</span>
                  </button>
                </form>
                <div
                  id="contactAlertSuccess"
                  className="alert alert-success mt-4 d-none"
                  role="alert"
                >
                  Thank you for contacting us! our team will be reply your
                  message shortly.
                </div>
                <div
                  id="contactAlertError"
                  className="alert alert-danger mt-4 d-none"
                  role="alert"
                >
                  Failed to send message, try again!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
