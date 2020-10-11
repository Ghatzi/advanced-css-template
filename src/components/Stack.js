import React, { Fragment } from 'react';
import vidmp4 from '../img/water-vid.mp4';
import vidwebm from '../img/water-vid.webm';

const Developer = () => {
  return (
    <Fragment>
      <div className="u-center-text u-margin-top-medium u-margin-bottom-medium">
        <h2 id="stack" className="heading-secondary">
          Development Stack
        </h2>
      </div>
      <section className="section-stack u-center-text">
        <div className="bg-video">
          <video className="bg-video__content" autoPlay muted loop>
            <source src={vidmp4} type="video/mp4" />
            <source src={vidwebm} type="video/webm" />
            Your browser is not supported!
          </video>
        </div>
        <div className="row">
          <div className="stack">
            <div>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>SASS</li>
                <li>Bootstrap</li>
                <li>Vanilla JS</li>
                <li>jQuery</li>
                <li>Express</li>
                <li>React</li>
                <li>Node.js</li>
                <li>JSON</li>
                <li>PHP</li>
                <li>Mongo Database</li>
                <li>Node Package Manager (npm)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Developer;
