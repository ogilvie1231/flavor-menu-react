import React, { Component } from "react";
import Navbar from "../nav/NavBar";
import Logo from "../../assets/img/ivape-logo.png";
import "./salts.css";
import ZenSalts from "../pages/Zen-salt";
import BadgerSalts from "../pages/Badger-salt";
import CoastalSalts from "../pages/Coastal-salt";
import FreshFarmsSalts from "../pages/Fresh-farms-salt";
import FruitiaSalts from "../pages/Fruitia-salt";
import HidripSalts from "../pages/Hi-drip-salt";
import MegaSalts from "../pages/Mega-salt";
import MintsSalts from "../pages/Mint-salt";
import QuriousSalt from "../pages/Qurious-salt";
import GoldenSalts from "../pages/Golden-salt";
import SvrfSalts from '../pages/Svrf-salt';
import TaylorSalts from "../pages/Taylor-salt";
import TimeBombSalts from "../pages/Timebomb-salt";
import VerdictSalts from "../pages/Verdict-salt";

class Salt extends Component {
  render() {
    return (
      <div>
        <body>
          <div>
          <div>
              <h2 className="title-text">Nic Salt Flavors</h2>
              <div className='myLine'></div>
            </div>
            <BadgerSalts />
            <CoastalSalts />
            <FreshFarmsSalts />
            <FruitiaSalts />
            <GoldenSalts />
            <MegaSalts />
            <MintsSalts />
            <HidripSalts />
            <QuriousSalt />
            <SvrfSalts />
            <TaylorSalts />
            <TimeBombSalts />
            <VerdictSalts />
            <ZenSalts />
          </div>
        </body>
      </div>
    );
  }
}

export default Salt;
