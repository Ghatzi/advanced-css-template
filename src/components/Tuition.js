import React, { Fragment } from 'react';

const Tuition = () => {
  return (
    <Fragment>
      <div className="u-center-text u-margin-top-medium u-margin-bottom-medium">
        <h2 id="tuition" className="heading-secondary">
          Online Tuition
        </h2>
      </div>
      <section className="section-tuition u-center-text">
        <div className="row">
          <div className="col-1-of-4">
            <div className="tuition-box">
              <h4 className="heading-tertiary u-margin-bottom-small">
                <span>HTML</span>
              </h4>
              <p className="tuition-box__text">
                Ideal for beginners. Learn the basics of web-developing. Set-up,
                uploading, page structure, text &amp; images, fonts, meta tags,
                domain &amp; hosting, FTP and more.
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="tuition-box">
              <h4 className="heading-tertiary u-margin-bottom-small">
                <span>CSS</span>
              </h4>
              <p className="tuition-box__text">
                Add some styling to your web pages. Learn how to import external
                style sheets, change element properties, create buttons, pseudo
                classes, basic animations and more.
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="tuition-box">
              <h4 className="heading-tertiary u-margin-bottom-small">
                <span>Javascript</span>
              </h4>
              <p className="tuition-box__text">
                Learn how to use Javascript to make your web pages interactive
                covering syntax, variables, operators, objects, arrays, form
                validation, basic methods and more.
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="tuition-box">
              <h4 className="heading-tertiary u-margin-bottom-small">
                <span>ADVANCED</span>
              </h4>
              <p className="tuition-box__text">
                Deep dive into one of the languages in my development stack.
                Learn Advanced techniques like CSS3, SASS, HTML5 forms, npm,
                Javascript frameworks and more.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Tuition;
