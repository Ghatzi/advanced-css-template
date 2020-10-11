import React, { Fragment } from 'react';

const Header = () => {
  return (
    <Fragment>
      <header className="header">
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">George Hatzi</span>
            <span className="heading-primary--sub">Web Developer</span>
          </h1>
          <a
            href="#contact"
            title="Need a web developer? get in touch for rates."
            className="btn btn--green"
          >
            Hire Me &rarr;
          </a>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
