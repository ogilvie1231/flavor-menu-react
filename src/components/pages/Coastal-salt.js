import React, { Component } from "react";
// import Navbar from "../nav/NavBar"
import Logo from "../../assets/img/ivape-logo.png";
import "./menu.css";
import Flavor from "../../assets/img/flavors.png";
import { Container } from "react-bootstrap";
import Brand from "../../assets/logos/coastal-logo.png";

class CoastalSalts extends Component {
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
                  <h3 className=" flavor-name">Apple Peach Strawberry</h3>
                  <div className="line"></div>
                  <p className="text">
                    Like the name says, this sweet fruit blend stays true
                    through the whole bottle
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Apple Watermelon</h3>
                  <div className="line"></div>
                  <p className="text">
                    An apple watermelon that is hard to put down
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Iced Apple Watermelon</h3>
                  <div className="line"></div>
                  <p className="text">
                    An apple watermelon that is hard to put down with an icy
                    kick
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Blueberry Lime</h3>
                  <div className="line"></div>
                  <p className="text">
                    Ripe Blueberries blended into a perfect limeade
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Caramel Brulee</h3>
                  <div className="line"></div>
                  <p className="text">A decadent caramel brulee</p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Chilled Apple Pear</h3>
                  <div className="line"></div>
                  <p className="text">
                    Ultra-smooth salt nicotine with crisp apples and juicy pears
                    with a cooling menthol finish
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Citrus Peach</h3>
                  <div className="line"></div>
                  <p className="text">
                    Ultra-smooth salt nicotine with sweet peaches and juicy
                    citrus
                  </p>
                </div>

                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Iced Mango Berries</h3>
                  <div className="line"></div>
                  <p className="text">
                    Ultra-smooth salt nicotine with tropical mangos, fresh
                    strawberries, and flavorful kiwis with a cooling menthol
                    finish{" "}
                  </p>
                </div>

                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Mango</h3>
                  <div className="line"></div>
                  <p className="text">
                    Ultra-smooth salt nicotine with sweet mangos
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Melon Berries</h3>
                  <div className="line"></div>
                  <p className="text">
                    Juicy watermelon, fresh strawberries, and sweet cantaloupe
                    and honeydew
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Menthol</h3>
                  <div className="line"></div>
                  <p className="text">Fresh mint with a cooling finish</p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Strawberry Kiwi</h3>
                  <div className="line"></div>
                  <p className="text">A strawberry kiwi combination</p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Iced Strawberry Kiwi</h3>
                  <div className="line"></div>
                  <p className="text">A strawberry kiwi combination with a smooth menthol</p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Tobacco</h3>
                  <div className="line"></div>
                  <p className="text">
                    Ultra-smooth salt nicotine with rich, earthy, and robust
                    tobacco flavor
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Vanilla Custard</h3>
                  <div className="line"></div>
                  <p className="text">
                    This divine vanilla custard hits all your taste buds
                  </p>
                </div>
              </div>
              <div className="row text end">
                <p>
                  <strong className="end-text">24mg Nic Salt</strong>
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

export default CoastalSalts;
