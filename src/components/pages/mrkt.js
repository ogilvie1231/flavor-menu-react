import React, { Component } from "react";
import "./menu.css";
import Flavor from "../../assets/img/flavors.png";
import { Container } from "react-bootstrap";
import Brand from "../../assets/logos/mrkt -plce-logo.png";

class Mrkt extends Component {
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
                  <h3 className=" flavor-name">Blue Punch Berry</h3>
                  <div className="line"></div>
                  <p className="text">
                    A sweet and sour blueberry lemonade with raspberries and a touch of lime
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Forbidden Berry</h3>
                  <div className="line"></div>
                  <p className="text">
                    A concoction of mixed berries that is to die for
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Iced Forbidden Berry</h3>
                  <div className="line"></div>
                  <p className="text">
                  A concoction of mixed berries that is to die for with a delightful touch of menthol
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Fuji Pear Mangoberry</h3>
                  <div className="line"></div>
                  <p className="text">
                    A tropical blend of apples, pears, mangos and ripe berries
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Pineapple Peach Dragonberry</h3>
                  <div className="line"></div>
                  <p className="text">
                    Pineapples, peaches, berries and a touch of dragon fruit
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Pink Punch Berry</h3>
                  <div className="line"></div>
                  <p className="text">
                    A strawberry watermelon lemonade
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Lemon Biscotti</h3>
                  <div className="line"></div>
                  <p className="text">
                    A fresh from the oven zesty lemon biscotti
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Watermelon Hula Berry Lime</h3>
                  <div className="line"></div>
                  <p className="text">
                    A tart blend of watermelons and hula berries finished with a touch of lime
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

export default Mrkt;
