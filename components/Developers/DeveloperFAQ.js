const DeveloperFAQ = () => {
  return (
    <section className="space-3">
      <div className="container">
        <div className="w-100 w-lg-75 text-center mx-auto mb-5">
          <h6 className="text-primary font-weight-bold">FAQ</h6>
          <h2>Most asked questions.</h2>
          <p className="lead">
            We have the most answers you&apos;re looking for, in more ways than one.
            Ask questions, browse around for answers, or submit your feature
            requests.
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div id="faq">
              <div className="card border-top-0 border-left-0 border-right-0">
                <a
                  href="#faq1"
                  data-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  className="p-3 p-md-4 collapsed"
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <h6 className="mb-0">What is Findeas?</h6>
                    <i className="ri-arrow-down-s-line ri-lg"></i>
                  </div>
                </a>
                <div className="collapse" id="faq1" data-parent="#faq">
                  <p className="mb-0 px-3 px-md-4 pb-3 pb-md-4">
                    Consectetur, adipisicing elit. Officiis iure nemo
                    exercitationem quas praesentium sint nam quam, vitae
                    repudiandae numquam?
                  </p>
                </div>
              </div>
              <div className="card border-top-0 border-left-0 border-right-0">
                <a
                  href="#faq2"
                  data-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  className="p-3 p-md-4 collapsed"
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <h6 className="mb-0">How does Findeas work?</h6>
                    <i className="ri-arrow-down-s-line ri-lg"></i>
                  </div>
                </a>
                <div className="collapse" id="faq2" data-parent="#faq">
                  <p className="mb-0 px-3 px-md-4 pb-3 pb-md-4">
                    Id ullam sunt esse cupiditate iure earum ipsa perferendis
                    blanditiis eveniet ut, ratione explicabo odit. Aperiam,
                    facilis.
                  </p>
                </div>
              </div>
              <div className="card border-top-0 border-left-0 border-right-0">
                <a
                  href="#faq3"
                  data-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  className="p-3 p-md-4 collapsed"
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <h6 className="mb-0">How is our data being protected?</h6>
                    <i className="ri-arrow-down-s-line ri-lg"></i>
                  </div>
                </a>
                <div className="collapse" id="faq3" data-parent="#faq">
                  <p className="mb-0 px-3 px-md-4 pb-3 pb-md-4">
                    Quos ratione mollitia unde beatae ad praesentium voluptatum
                    recusandae repellendus quas, quae quidem veritatis placeat
                    aperiam!
                  </p>
                </div>
              </div>
              <div className="card border-0">
                <a
                  href="#faq4"
                  data-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  className="p-3 p-md-4 collapsed"
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <h6 className="mb-0">How to get support?</h6>
                    <i className="ri-arrow-down-s-line ri-lg"></i>
                  </div>
                </a>
                <div className="collapse" id="faq4" data-parent="#faq">
                  <p className="mb-0 px-3 px-md-4 pb-3 pb-md-4">
                    Ratione quisquam veritatis dignissimos ipsum architecto
                    molestias, aliquam et incidunt. Aut porro soluta magni
                    temporibus minus quos provident, nulla pariatur quidem,
                    eveniet molestias praesentium.
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

export default DeveloperFAQ
