import React, { Component } from "react";

import "./menu.css";
import Flavor from "../../assets/img/flavors.png";
import { Container } from "react-bootstrap";
import Brand from "../../assets/logos/jus-logo.png";

class Jus extends Component {
  render() {
    return (
      <div>
        <header>{/* <Navbar /> */}</header>
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
                  <h3 className=" flavor-name">Key Lime Cookie</h3>
                  <div className="line"></div>
                  <p className="text">
                    A tart key lime layered over savory graham cracker crumbs
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Rainbow Ice</h3>
                  <div className="line"></div>
                  <p className="text">
                    A sweet twist on tasting the rainbow
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">White Grape Ice</h3>
                  <div className="line"></div>
                  <p className="text">
                    Refreshing white grape with an icy kick
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Apple Bourbon Tobacco</h3>
                  <div className="line"></div>
                  <p className="text">
                    This defines the phrase "don't knock it until you try it!" Trust us, it works
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Blue Raspberry Cotton Candy</h3>
                  <div className="line"></div>
                  <p className="text">
                    A ripe blue raspberry spun into fluffy cotton candy
                  </p>
                </div>
              </div>
              <div className="row text end">
                <p>
                  <strong className="end-text">PG/VG: 30%/70%</strong>
                  <br />
                  <strong className="end-text">
                    Nicotine Levels: 0mg, 3mg, 6mg
                  </strong>
                  <br />
                  <strong className="end-text">$19.99 60ml</strong>
                </p>
              </div>
            </div>
          </Container>
        </body>
      </div>
    );
  }
}

export default Jus;
