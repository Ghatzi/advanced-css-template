import React, { Fragment } from 'react';

const Contact = () => {
  return (
    <Fragment>
      <div className="u-center-text u-margin-top-medium u-margin-bottom-medium">
        <h2 id="contact" className="heading-secondary">
          Contact Me
        </h2>
      </div>
      <section className="section-contact">
        <div className="row">
          <div className="contact">
            <div className="contact__form">
              <form action="#" className="form">
                <div className="form__group">
                  <input
                    type="text"
                    className="form__input"
                    placeholder="Full name"
                    id="name"
                    name="name"
                    required
                  />
                  <label htmlFor="name" className="form__label">
                    Full name
                  </label>
                </div>
                <div className="form__group">
                  <input
                    type="email"
                    className="form__input"
                    placeholder="Email address"
                    id="email"
                    name="email"
                    required
                  />
                  <label htmlFor="email" className="form__label">
                    Email address
                  </label>
                </div>
                <div className="form__group">
                  <textarea
                    rows="4"
                    cols="50"
                    className="form__input"
                    placeholder="Message"
                    id="message"
                    name="message"
                    required
                  ></textarea>
                  <label htmlFor="message" className="form__label">
                    Message
                  </label>
                </div>
                <div className="form__group">
                  <button title="Send message" className="btn btn--green">
                    Send &rarr;
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Contact;
