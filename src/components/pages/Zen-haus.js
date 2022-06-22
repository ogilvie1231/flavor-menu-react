import React, { Component } from "react";
// import Navbar from "../nav/NavBar"
import Logo from "../../assets/img/ivape-logo.png";
import "./menu.css";
import Flavor from "../../assets/img/flavors.png";
import { Container } from "react-bootstrap";
import Brand from "../../assets/logos/zen-haus-logo.png";

class Zen extends Component {
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
                  <h3 className=" flavor-name">Meditation</h3>
                  <div className="line"></div>
                  <p className="text">Watermelon, jackfruit & grapefruit</p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Nirvana</h3>
                  <div className="line"></div>
                  <p className="text">Mango, passionfruit & strawberry</p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Rebirth</h3>
                  <div className="line"></div>
                  <p className="text">Nectarine, raspberry & apple</p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Serenity</h3>
                  <div className="line"></div>
                  <p className="text">Mango, pineapple & coconut</p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Meditation Ice</h3>
                  <div className="line"></div>
                  <p className="text">Watermelon, jackfruit & grapefruit with a menthol finish</p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Nirvana Ice</h3>
                  <div className="line"></div>
                  <p className="text">Mango, passionfruit & strawberry with a menthol finish</p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Rebirth Ice</h3>
                  <div className="line"></div>
                  <p className="text">Nectarine, raspberry & apple with a menthol finish</p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Serenity Ice</h3>
                  <div className="line"></div>
                  <p className="text">Mango, pineapple & coconut with a menthol finish</p>
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

export default Zen;
