import React, { Component } from "react";
import Logo from "../../assets/img/ivape-logo.png";
import "./menu.css";
import Flavor from "../../assets/img/flavors.png";
import { Container } from "react-bootstrap";
import Brand from "../../assets/logos/mints-logo.png";

class MintsSalts extends Component {
  render() {
    return (
      <div>
        <body>
          <Container fluid>
            <div className="menu-div">
              <div>
                <img className="brand-logo" src={Brand}></img>
              </div>
              <div>
                <img className="flavors-img" src={Flavor}></img>
              </div>
              <div className="row">
              <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Apple Mint</h3>
                  <div className="line"></div>
                  <p className="text">A delicious Apple and mint flavor</p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Chocomint</h3>
                  <div className="line"></div>
                  <p className="text">A delicious chocolate and mint flavor</p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Lemon Mint</h3>
                  <div className="line"></div>
                  <p className="text">
                    A zesty lemon with a minty finish
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Peppermint</h3>
                  <div className="line"></div>
                  <p className="text">
                    Just like your classic red & white dinner mints
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Spearmint</h3>
                  <div className="line"></div>
                  <p className="text">Fresh, long lasting spearmint</p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Wintergreen</h3>
                  <div className="line"></div>
                  <p className="text">
                    Wintergreen will be your new favorite vape flavor
                  </p>
                </div>
              </div>
              <div className="row text end">
                <p>
                  <strong className="end-text">
                    24mg Nic Salt
                  </strong>
                  <br />
                  <strong className="end-text">$11.99 15ml</strong>
                </p>
              </div>
            </div>
          </Container>
        </body>
      </div>
    );
  }
}

export default MintsSalts;
