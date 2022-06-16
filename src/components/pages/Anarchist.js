import React, { Component } from "react";
import './menu.css'
import Flavor from '../../assets/img/flavors.png'
import { Container } from "react-bootstrap";
import Brand from '../../assets/logos/anarchist-logo.png'

class Anarchist extends Component {
    render() {
        return (
            <div>
                <header>
                    {/* <Navbar /> */}
                </header>
                <body>
                    <Container fluid>
                   <div className="menu-div">
                       <div>
                       <img className='brand-logo' src={Brand}></img>
                       </div>
                       <div>
                           <img className='flavors-img' src={Flavor}></img>
                       </div>
                        <div className="row">
                            <div className='col-md-4 col-sm-6'>
                                <h3 className=' flavor-name'>RED</h3>
                                <div className='line'>
                                </div>
                                <p className='text'>
                                Reminiscent of a Strawberry Hard Candy
                                </p>
                            </div>
                            <div className='col-md-4 col-sm-6'>
                                <h3 className=' flavor-name'>BLUE</h3>
                                <div className='line'>
                                </div>
                                <p className='text'>
                                A Blue Raspberry Slurpee
                                </p>
                            </div>
                            <div className='col-md-4 col-sm-6'>
                                <h3 className=' flavor-name'>PINK LEMONADE</h3>
                                <div className='line'>
                                </div>
                                <p className='text'>
                                A Crisp and Refreshing Pink Lemonade
                                </p>
                            </div>
                         </div>
                         <div className='row text end'>
                                <p>
                                    <strong className='end-text'>PG/VG: 30%/70%</strong>
                              <br />
                                    <strong className='end-text'>Nicotine Levels: 0mg, 2mg, 4mg, 6mg</strong>
                                    <br />
                                    <strong className='end-text'>$19.99 60ml</strong>
                                </p>
                         </div>
                   </div>
                   </Container>
                </body>
            </div>
        )
    }
}

export default Anarchist