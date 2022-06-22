import React, { Component } from "react";
import "./home.css";
import Anarchist from "../pages/Anarchist";
import Badger from "../pages/Badger-hill";
import Beard from "../pages/Beard";
import Burst from "../pages/Burst";
import Cali from "../pages/Cali-grown";
import Chubby from "../pages/Chubby";
import Coastal from "../pages/Coastal";
import Colors from "../pages/Colors";
import Faq from "../pages/Fa-q";
import FreshFarms from "../pages/Fresh-farms";
import FreshPressed from "../pages/Fresh-pressed";
import Fruitia from "../pages/Fruitia";
import Glas from "../pages/Glas-basix";
import Golden from "../pages/Golden-ticket";
import Gummy from "../pages/Gummy-beast";
import JavaJoe from "../pages/Java-joe";
import JuiceHead from "../pages/Juice-head";
import Jus from "../pages/Jus"
import Lyf from "../pages/Lyf";
import Mega from "../pages/Mega";
import Milkshake from "../pages/Milkshake";
import Mints from "../pages/Mints";
import Mrkt from "../pages/mrkt"
import Naked from "../pages/Naked";
import Pinup from "../pages/Pinup";
import Qurious from "../pages/Qurious";
import Slammin from "../pages/Slammin";
import Svrf from "../pages/Svrf";
import Taylor from "../pages/Taylor";
import Zen from "../pages/Zen-haus";


class Home extends Component {
  render() {
    return (
      <div>
        <header>{/* <Navbar /> */}</header>
        <body>
          <div>
            <div>
              <h2 className="title-text">Sub Ohm Flavors</h2>
              <div className='myLine'></div>
            </div>
            <Anarchist />
            <Badger />
            <Beard />
            <Chubby />
            <Coastal />
            <Faq />
            <FreshFarms />
            <Fruitia />
            <Glas />
            <Golden />
            <JavaJoe />
            <JuiceHead />
            <Jus />
            <Lyf />
            <Mega />
            <Milkshake />
            <Mints />
            <Mrkt />
            <Naked />
            <Pinup />
            <Qurious />
            <Slammin />
            <Svrf />
            <Taylor />
            <Zen />
          </div>
        </body>
      </div>
    );
  }
}

export default Home;
