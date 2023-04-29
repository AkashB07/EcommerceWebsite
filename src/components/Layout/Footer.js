import React from 'react';
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <MDBFooter  style={{ backgroundColor: '#45637d' }} className='text-left text-lg-left'>
      <MDBContainer className='p-4'> 
            <h1 className='text-white' >The Generics</h1>
      </MDBContainer>
    </MDBFooter>
  );
}

export default Footer;