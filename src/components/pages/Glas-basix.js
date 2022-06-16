import React, { Component } from "react";
// import Navbar from "../nav/NavBar"
import Logo from "../../assets/img/ivape-logo.png";
import "./menu.css";
import Flavor from "../../assets/img/flavors.png";
import { Container } from "react-bootstrap";
import Brand from "../../assets/logos/glas-basix-logo.png";

class Glas extends Component {
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
                  <h3 className=" flavor-name">Banana Cream Pie</h3>
                  <div className="line"></div>
                  <p className="text">
                    A pie packed with caramelized bananas, pie crust and vanilla
                    custard
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Blueberry Cake</h3>
                  <div className="line"></div>
                  <p className="text">
                    Warm velvety layers of rich vanilla cake, sweet buttercream
                    and fresh blueberries topped with a sweet sugar glaze
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Blue Razz</h3>
                  <div className="line"></div>
                  <p className="text">
                    A perfect blue raspberry vape that you can't put down
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Butterscotch Reserve</h3>
                  <div className="line"></div>
                  <p className="text">
                    An unbelievable butterscotch, caramel RY4 blend that is sure
                    to delight even if you aren‘t a tobacco lover
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Caribbean Punch</h3>
                  <div className="line"></div>
                  {/* <hr className='line' /> */}
                  <p className="text">
                    A mouthwatering combination of peaches, pineapples,
                    strawberries and apples with a hint of apricot
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Cool Melon</h3>
                  <div className="line"></div>
                  <p className="text">
                    Ripe cantaloupe and mixed melons, touched with cucumbers and
                    a light menthol
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Fizzy Lemonade</h3>
                  <div className="line"></div>
                  <p className="text">
                    A sparkling lemonade poured over lemon lime shaved ice with
                    a carbonated menthol twist
                  </p>
                </div>

                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Mango Tango</h3>
                  <div className="line"></div>
                  <p className="text">
                    Mangos and pineapples mixed with a hint of blackcurrant
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Pound Cake</h3>
                  <div className="line"></div>
                  <p className="text">
                    A decadence of warm, sweet cake blends with bright notes of
                    fresh lemon zest and vanilla
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Strawberry Blast</h3>
                  <div className="line"></div>
                  <p className="text">A sour strawberry gummy bear</p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Sugar Cookie</h3>
                  <div className="line"></div>
                  <p className="text">
                    A buttery cookie fresh out of the oven glazed with brown
                    sugar caramel topped with cinnamon and nutmeg
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Guava Ice</h3>
                  <div className="line"></div>
                  <p className="text">
                    Ripe guava fruit with a satisfying icy finish
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Lush Ice</h3>
                  <div className="line"></div>
                  <p className="text">
                    xxxx
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Peach Ice</h3>
                  <div className="line"></div>
                  <p className="text">
                    Frozen watermelons with a touch of strawberries
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Strawberry Banana Ice</h3>
                  <div className="line"></div>
                  <p className="text">
                    An icy strawberry banana that is difficult to put down
                  </p>
                </div>
              </div>
              <div className="row text end">
                <p>
                  <strong className="end-text">PG/VG: 40%/60%</strong>
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

export default Glas;
