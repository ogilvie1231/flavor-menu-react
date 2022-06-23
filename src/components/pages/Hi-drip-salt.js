import React, { Component } from "react";
// import Navbar from "../nav/NavBar"
import Logo from "../../assets/img/ivape-logo.png";
import "./menu.css";
import Flavor from "../../assets/img/flavors.png";
import { Container } from "react-bootstrap";
import Brand from "../../assets/logos/hi-drip-logo.png";

class HidripSalts extends Component {
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
                  <h3 className=" flavor-name">Dew Berry</h3>
                  <div className="line"></div>
                  <p className="text">
                    Sink your your teeth into an irresistibly juicy candy chew.
                    Bursting with succulent honeydew flavor and rounded out by
                    smooth notes of strawberry, this vape will send you over the
                    edge.
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Dew Berry Ice</h3>
                  <div className="line"></div>
                  <p className="text">
                    Sink your your teeth into an irresistibly juicy candy chew.
                    Bursting with succulent honeydew flavor and rounded out by
                    smooth notes of strawberry with an icy finish.
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Island Orange</h3>
                  <div className="line"></div>
                  <p className="text">
                    {" "}
                    Take a trip to a fruity tropical paradise anytime of the day
                    with this sensationally sweet candy vape. Powerfully
                    delicious blood orange and juice pineapple flavors packed
                    into one perfect candy chew.
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Island Orange Ice</h3>
                  <div className="line"></div>
                  <p className="text">
                    Take a trip to a fruity tropical paradise anytime of the day
                    with this sensationally sweet candy vape. Powerfully
                    delicious blood orange and juice pineapple flavors packed
                    into one perfect candy chew with an icy finish.
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Peachy Mango</h3>
                  <div className="line"></div>
                  <p className="text">
                    Give your tastebuds the ride of their life with a powerful
                    hit of mango peach candy. Every puff unleashes a sweet gush
                    of ripe mango melded with sweet peach and finished with the
                    signature taste of chewy candy.
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Peachy Mango</h3>
                  <div className="line"></div>
                  <p className="text">
                    Give your tastebuds the ride of their life with a powerful
                    hit of mango peach candy. Every puff unleashes a sweet gush
                    of ripe mango melded with sweet peach and finished with the
                    signature taste of icy chewy candy
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Melon Patch</h3>
                  <div className="line"></div>
                  <p className="text">
                    Indulge in the ridiculously delicious taste of the juiciest
                    watermelon candy chew you’ve ever had! Refreshing, yet
                    sugary and sweet, it’s sure to be the highlight of your
                    summer!
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Melon Patch Ice</h3>
                  <div className="line"></div>
                  <p className="text">
                    Indulge in the ridiculously delicious taste of the juiciest
                    watermelon candy chew you’ve ever had! Refreshing, yet
                    sugary and sweet with an icy finish.
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Guava Lava</h3>
                  <div className="line"></div>
                  <p className="text">
                    Experience the sweet aromatic flavors of guava paired with
                    an eruption of strawberry. Guava Lava is the perfect
                    combination of guava + strawberry! ⁠
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Guava Lava</h3>
                  <div className="line"></div>
                  <p className="text">
                    Experience the sweet aromatic flavors of guava paired with
                    an eruption of strawberry. Guava Lava is the perfect
                    combination of guava + strawberry + menthol! ⁠
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Nectarine Lychee</h3>
                  <div className="line"></div>
                  <p className="text">
                    Experience a wave of exotic flavors with our blend of juicy
                    nectarines and sweet lychee.
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

export default HidripSalts;
