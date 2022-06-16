import React, { Component } from "react";
// import Navbar from "../nav/NavBar"
import Logo from "../../assets/img/ivape-logo.png";
import "./menu.css";
import Flavor from "../../assets/img/flavors.png";
import { Container } from "react-bootstrap";
import Brand from "../../assets/logos/coastal-logo.png";

class Coastal extends Component {
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
                    The combination of apples and watermelons you have ever tried
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Banana Blueberry Muffin</h3>
                  <div className="line"></div>
                  <p className="text">
                    A perfect combination of bananas and sweet blueberries mixed
                    into a dense muffin
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Blood Orange Mango Snowcone</h3>
                  <div className="line"></div>
                  <p className="text">
                    Just like in the name, this fruity concoction is even better
                    than it sounds
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
                  <p className="text">
                    A decadent sweet caramel pie
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Citrus Peach</h3>
                  <div className="line"></div>
                  <p className="text">
                    Sweet peaches blended with a twinge of citrus to bring it all together
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Lemon Meringue</h3>
                  <div className="line"></div>
                  <p className="text">
                    Sweet and sour lemons with creamy meringue
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Lemon Raspberry</h3>
                  <div className="line"></div>
                  <p className="text">Juicy raspberries and tangy lemons</p>
                </div>

                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Mango Berries</h3>
                  <div className="line"></div>
                  <p className="text">
                    Tropical mangos, fresh strawberries, and flavorful kiwis
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Maple Butter</h3>
                  <div className="line"></div>
                  <p className="text">
                    A full bodied maple syrup that keeps you going all day
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
                  <h3 className=" flavor-name">Mixed Berries</h3>
                  <div className="line"></div>
                  <p className="text">We don't konw how but they've managed to get all of your favorite berries into a perfect flavor but here it is</p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Peach Tea</h3>
                  <div className="line"></div>
                  <p className="text">
                    Smooth peach nectar and refreshing iced tea
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Pineapple Guava</h3>
                  <div className="line"></div>
                  <p className="text">
                    Exotic guavas, rich mangos, and golden pineapples
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Pink Lemonade</h3>
                  <div className="line"></div>
                  <p className="text">Sweet lemonade and juicy strawberries</p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">POG</h3>
                  <div className="line"></div>
                  <p className="text">
                    Like the name says, this sweet fruit blend stays true
                    through the whole bottle
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Strawberry Cream</h3>
                  <div className="line"></div>
                  <p className="text">
                    Flavorful strawberries and smooth, sweet cream
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Strawberry Pineapple Coconut</h3>
                  <div className="line"></div>
                  <p className="text">
                    Juicy strawberries, sweet coconuts, and golden pineapples
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Strawberry Kiwi</h3>
                  <div className="line"></div>
                  <p className="text">
                    A refreshing take on a classic combination
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Tres Leches</h3>
                  <div className="line"></div>
                  <p className="text">
                    Rich caramel and sweet cream, with a buttery finish
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Tobacco</h3>
                  <div className="line"></div>
                  <p className="text">
                    A classic tobacco flavor that is sure to satisfy
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Vanilla Custard</h3>
                  <div className="line"></div>
                  <p className="text">
                    A vanilla custard that hits every taste bud
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Tropical Lemonade</h3>
                  <div className="line"></div>
                  <p className="text">
                    A blend of ripened papaya fruits and other exotic tropical
                    flavors
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Watermelon Cream</h3>
                  <div className="line"></div>
                  <p className="text">
                    Crisp watermelon and smooth, sweet cream
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Iced Apple Peach Strawberry</h3>
                  <div className="line"></div>
                  <p className="text">
                    An incredible apple peach strawberry blend topped with
                    menthol
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Iced Apple Watermelon</h3>
                  <div className="line"></div>
                  <p className="text">
                    The combination of apples and watermelons you have ever tried with an icy kick
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Iced Grape berries</h3>
                  <div className="line"></div>
                  <p className="text">
                    Juicy grapes and wild boysenberries with a cooling menthol
                    finish
                  </p>
                </div>

                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Iced Mango Berries</h3>
                  <div className="line"></div>
                  <p className="text">
                    Mixed berries blended in a mango base topped with menthol
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Iced Melon berries</h3>
                  <div className="line"></div>
                  <p className="text">
                    Juicy watermelon, fresh strawberries, and sweet cantaloupe
                    and honeydew mixed with the perfect amount of menthol
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Iced Orange Mango Snowcone</h3>
                  <div className="line"></div>
                  <p className="text">
                    Mangos and blood oranges mixed into a summer time snow cone
                    topped with menthol
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Iced POG</h3>
                  <div className="line"></div>
                  <p className="text">
                    Fresh passion fruits, juicy oranges, and sweet guavas with a
                    cooling menthol finish
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Iced Strawberry Kiwi</h3>
                  <div className="line"></div>
                  <p className="text">
                    A refreshing take on a classic combination with an icy finish
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

export default Coastal;
