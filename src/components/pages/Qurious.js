import React, { Component } from "react";
// import Navbar from "../nav/NavBar"
import Logo from "../../assets/img/ivape-logo.png";
import "./menu.css";
import Flavor from "../../assets/img/flavors.png";
import { Container } from "react-bootstrap";
import Brand from "../../assets/logos/qurious-logo.png";

class Qurious extends Component {
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
                  <h3 className=" flavor-name">Blood Orange honeydew</h3>
                  <div className="line"></div>
                  <p className="text">Tart blood oranges mixed with a ripe honeydew</p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Fuji Apple Peach Gummy</h3>
                  <div className="line"></div>
                  <p className="text">
                    A candy concotion of deliscous Fuji apples and peaches
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Whipped Pineapple Ice</h3>
                  <div className="line"></div>
                  <p className="text">
                    A creamy whipped pineapple with a touch of refreshing ice
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Passion Fruit Orange Guava</h3>
                  <div className="line"></div>
                  <p className="text">
                    A new take on the classic POG
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Watermelon Apple Freeze</h3>
                  <div className="line"></div>
                  <p className="text">Ripe watermelons and apples with an icy finish</p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Mango Peach Watermelon</h3>
                  <div className="line"></div>
                  <p className="text">One of the most delightful combinations of mangos peaches and watermelons</p>
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

export default Qurious;
