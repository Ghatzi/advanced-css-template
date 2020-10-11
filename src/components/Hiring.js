import React, { Fragment } from 'react';

const Profile = () => {
  return (
    <Fragment>
      <div className="u-center-text u-margin-top-medium u-margin-bottom-medium">
        <h2 id="hiring" className="heading-secondary">
          Why Hire Me?
        </h2>
      </div>
      <section className="section-hiring">
        <div className="row">
          <div className="col-1-of-3">
            <div className="hiring-cards">
              <div className="hiring-cards__side hiring-cards__side--front">
                <div className="hiring-cards__picture hiring-cards__picture--1">
                  &nbsp;
                </div>
                <h4 className="hiring-cards__heading">
                  <span className="hiring-cards__heading-span">Styling</span>
                </h4>
                <div className="hiring-cards__details">
                  <ul>
                    <li>Animations</li>
                    <li>Responsive</li>
                    <li>Flexbox/Grids</li>
                    <li>Bootstrap</li>
                    <li>Sass</li>
                  </ul>
                </div>
              </div>
              <div className="hiring-cards__side hiring-cards__side--back">
                <div className="hiring-cards__cta">
                  <div className="hiring-cards__reverse-info">
                    <p>
                      Using the latest styling techniques to create subtle and
                      seemless animations bringing your web pages to life. Fully
                      responsive on all the latest web browsers and mobile
                      devices. Desktop or mobile first approach to best suit
                      your project.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1-of-3">
            <div className="hiring-cards">
              <div className="hiring-cards__side hiring-cards__side--front">
                <div className="hiring-cards__picture hiring-cards__picture--2">
                  &nbsp;
                </div>
                <h4 className="hiring-cards__heading">
                  <span className="hiring-cards__heading-span">
                    Authentication
                  </span>
                </h4>
                <div className="hiring-cards__details">
                  <ul>
                    <li>Sign In</li>
                    <li>Registration</li>
                    <li>Google Sign In</li>
                    <li>Facebook Sign In</li>
                    <li>Tokenization</li>
                  </ul>
                </div>
              </div>
              <div className="hiring-cards__side hiring-cards__side--back">
                <div className="hiring-cards__cta">
                  <div className="hiring-cards__reverse-info">
                    <p>
                      Create sign in &amp; registration pages and store details
                      in a database. Use tokenization and authentication for
                      users to have admin functionality. Sign users into your
                      site with Facebook and Google credentials.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1-of-3">
            <div className="hiring-cards">
              <div className="hiring-cards__side hiring-cards__side--front">
                <div className="hiring-cards__picture hiring-cards__picture--3">
                  &nbsp;
                </div>
                <h4 className="hiring-cards__heading">
                  <span className="hiring-cards__heading-span">
                    Consultancy
                  </span>
                </h4>
                <div className="hiring-cards__details">
                  <ul>
                    <li>Where To Start</li>
                    <li>Stack/Platform</li>
                    <li>Ecommerce</li>
                    <li>API's</li>
                    <li>Packages</li>
                  </ul>
                </div>
              </div>
              <div className="hiring-cards__side hiring-cards__side--back">
                <div className="hiring-cards__cta">
                  <div className="hiring-cards__reverse-info">
                    <p>
                      Want to build an ecommerce or portfolio site but don't
                      know where to start? Unsure what stack or content
                      management tool to use? Whatever your dilemma, big or
                      small, message me for some consultation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Profile;
