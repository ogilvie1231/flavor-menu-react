import React, { Component } from "react";
// import Navbar from "../nav/NavBar"
import Logo from "../../assets/img/ivape-logo.png";
import "./menu.css";
import Flavor from "../../assets/img/flavors.png";
import { Container } from "react-bootstrap";
import Brand from "../../assets/logos/taylor-logo.png";

class Taylor extends Component {
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
                  <h3 className=" flavor-name">Honey Crunch</h3>
                  <div className="line"></div>
                  <p className="text">
                    Vanilla ice cream, honey and graham crackers
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Strawberry Crunch</h3>
                  <div className="line"></div>
                  <p className="text">
                    Strawberry ice cream mixed with sugar cookies
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Berry Crunch</h3>
                  <div className="line"></div>
                  <p className="text">
                    Vanilla ice cream, sugar cookies and mixed ripe berries
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Snackerdoodle</h3>
                  <div className="line"></div>
                  <p className="text">
                    Vanilla ice cream and cinnamon snickerdoodle cookies
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Wild Berries</h3>
                  <div className="line"></div>
                  <p className="text">A perfect summertime raspberry tea</p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Passion Peach</h3>
                  <div className="line"></div>
                  <p className="text">Passion fruit and peaches</p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Strawberry Mango</h3>
                  <div className="line"></div>
                  <p className="text">
                    A strawberry mango tea to set the bar by
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Passion Peach</h3>
                  <div className="line"></div>
                  <p className="text">A ripe sweet passion fruit peach tea</p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Strawberry Lem</h3>
                  <div className="line"></div>
                  <p className="text">
                    Ripe strawberries mixed into a perfect lemonade
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Pinky Palmer</h3>
                  <div className="line"></div>
                  <p className="text">Pink lemonade mixed into a sweet tea</p>
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
                  <strong className="end-text">
                    $19.99 60ml - $24.99 100ml
                  </strong>
                </p>
              </div>
            </div>
          </Container>
        </body>
      </div>
    );
  }
}

export default Taylor;
