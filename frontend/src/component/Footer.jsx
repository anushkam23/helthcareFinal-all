import React from 'react';
import {Image,Row,Col,Container} from 'react-bootstrap';
// import logo from './Images/lgranLogo.png';
import facebook from './Images/fb.png';
import twitter from './Images/twitter.png';
import insta from './Images/insta.png';
import pinterest from './Images/pinterest.png';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#3e8c71', color: '#fff', height: '400px', marginTop: '4%',alignItems:'center'}}>
  <Container>
    <Row className="justify-content-center lato-regular">
      {/* <Col xs={12} md={2} className="logo">
        <Image src={logo} alt="" style={{marginTop:'11%',marginLeft:'350px'}}/>
      </Col> */}
      <Col xs={12} md={8} className="heading" style={{marginTop:'9%',marginLeft:'-12%'}}>
        <ul>
          <li><a href="/">About us</a></li>
          {/* <li><a href="/">MENU</a></li> */}
          <li><a href="/blog-list">Appoinment</a></li>
          {/* <li><a href="/">GALLERY</a></li> */}
          <li><a href="/">Contact</a></li>
          {/* <li><a href="/">BLOG</a></li> */}
        </ul>
        <ul className="two">
          <li><a href="/"><Image src={facebook} alt="" /></a></li>
          <li><a href="/"><Image src={twitter} alt="" /></a></li>
          <li><a href="/"><Image src={insta} alt="" /></a></li>
          <li><a href="/"><Image src={pinterest} alt="" /></a></li>
        </ul>
      </Col>
    </Row>
  </Container>
</footer>
  )
}
