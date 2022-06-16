import React, { Component } from "react";
// import Navbar from "../nav/NavBar"
import Logo from '../../assets/img/ivape-logo.png'
import './menu.css'
import Flavor from '../../assets/img/flavors.png'
import { Container } from "react-bootstrap";
import Brand from '../../assets/logos/beard-logo.png'
// import Brand from 'https://www.fillmurray.com/g/200/300'

class Beard extends Component {
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
                                <h3 className=' flavor-name'>#32</h3>
                                <div className='line'>
                                </div>
                                <p className='text'>
                                The flavor that defines dessert. A cinnamon funnel cake that will make you think you are enjoying a night at the fair
                                </p>
                            </div>
                         </div>
                         <div className='row text end'>
                                <p>
                                    <strong className='end-text'>PG/VG: 30%/70%</strong>
                              <br />
                                    <strong className='end-text'>Nicotine Levels: 0mg, 3mg, 6mg</strong>
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

export default Beard