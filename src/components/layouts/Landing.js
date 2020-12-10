import React, { Component } from 'react';
import { connect } from 'react-redux';

 class Landing extends Component {
  render() {
    return (
      <div>
        <div className="landing">
          <div className="dark-overlay landing-inner text-light">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h1 className="display-3 mb-4">Interview schedular
                  </h1>
                  <p className="lead"> Schedule interview in an easy way!!</p>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Landing;
