import React, { Fragment } from 'react';
import { MDBTable, MDBTableBody, MDBBtn } from 'mdb-react-ui-kit';

const HomePage = () => {
    return (
        <Fragment><br />
            <h3 className="text-center">TOURS</h3><br/>
            <MDBTable>

                <MDBTableBody  align='middle'>
                    <tr>
                        <td>JUL 16</td>
                        <td>DETROIT, MI</td>
                        <td>DETROIT DTE ENERGY MUSIC THEATRE</td>
                        <td><MDBBtn>BUY TICKETS</MDBBtn></td>
                    </tr>

                    <tr>
                        <td>JUL 19</td>
                        <td>TORONTO, ON</td>
                        <td>BUDWESTER STAGE</td>
                        <td><MDBBtn>BUY TICKETS</MDBBtn></td>
                    </tr>
                    <tr>
                        <td>JUL 22</td>
                        <td>BRISTOW, VA</td>
                        <td>JIGGY LUBE LIVE</td>
                        <td><MDBBtn>BUY TICKETS</MDBBtn></td>
                    </tr>
                    <tr>
                        <td>JUL 29</td>
                        <td>PHOENIX, AZ</td>
                        <td>AK-CHIN PAVILION</td>
                        <td><MDBBtn>BUY TICKETS</MDBBtn></td>
                    </tr>
                    <tr>
                        <td>AUG 2</td>
                        <td>LAS VEGAS, NV</td>
                        <td>T-MOBILE ARENA</td>
                        <td><MDBBtn>BUY TICKETS</MDBBtn></td>
                    </tr>
                    <tr>
                        <td>AUG 7</td>
                        <td>CONCORD, CA</td>
                        <td>CONCORD PAVILION</td>
                        <td><MDBBtn>BUY TICKETS</MDBBtn></td>
                    </tr>
                   

                </MDBTableBody>
            </MDBTable><br/><br/>

        </Fragment>

    );
}

export default HomePage;