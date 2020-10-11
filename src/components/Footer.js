import React, { Fragment } from 'react';

const Footer = () => {
  return (
    <Fragment>
      <footer className="footer">
        <div className="row">
          <div className="col-1-of-2">
            <div className="footer__navigation">
              <ul className="footer__list">
                <li className="footer__item">
                  <a
                    href="#hiring"
                    title="Why hire me"
                    className="footer__link"
                  >
                    Why Hire Me
                  </a>
                </li>
                <li className="footer__item">
                  <a
                    href="#stack"
                    title="Development stack"
                    className="footer__link"
                  >
                    Development Stack
                  </a>
                </li>
                <li className="footer__item">
                  <a
                    href="#tuition"
                    title="Online tuition"
                    className="footer__link"
                  >
                    Online Tuition
                  </a>
                </li>
                <li className="footer__item">
                  <a
                    href="#contact"
                    title="Contact me"
                    className="footer__link"
                  >
                    Contact Me
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-1-of-2">
            <p className="footer__copyright">
              &copy; Copyright by George Hatzi 2020.
            </p>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
