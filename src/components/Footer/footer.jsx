import React from 'react';
import { Container, Grid, Typography, Link } from '@mui/material';
import './footer.css';
import  logo from "./../../assets/images/unnamed.png";
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Footer() {
  return (
    <footer style={{padding: '20px 0' }} className='footer'>
      <Container maxWidth="lg">
        <Grid container spacing={3} className="grid-content">
          <Grid item xs={12} sm={6} md={4} lg={3} className='Grid-items' >
            <Typography variant="h6" gutterBottom className='text-header'>  
              HELP & INFORMATION 
            </Typography>
            <ul>
              <li className='footer-li'><Link href="#" >Help</Link></li>
              <li className='footer-li'><Link href="#">Shipment Tracking</Link></li>
              <li className='footer-li'><Link href="#">Delivery & Returns</Link></li>
              <li className='footer-li'><Link href="#">Sale</Link></li>
            </ul>
          </Grid>
          <Grid item xs={8} sm={6} md={4} lg={3} className='Grid-items'>
            <Typography variant="h6" gutterBottom  className='text-header'> 
              MORE ABOUT SPORTON
            </Typography>
            <ul>
              <li className='footer-li'><Link href="#" >About Us</Link></li>
              <li className='footer-li'><Link href="#">Career at Sporton</Link></li>
              <li className='footer-li'><Link href="#">Corprate responsibilty</Link></li>
              <li className='footer-li'><Link href="#">Investors</Link></li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} className='text-header'>
            <Typography variant="h6" gutterBottom  className='text-header'> 
             MORE SPORTON SITES
            </Typography>
            <ul>
              <li className='footer-li'><Link href="#" >Mobile site & Sporton Apps</Link></li>
              <li className='footer-li'><Link href="#">Sporton Marketplace</Link></li>
              <li className='footer-li'><Link href="#">Gift Vouchers</Link></li>
              <li className='footer-li'><Link href="#">Black Friday</Link></li>
              {/* <li className='footer-li'><Link href="#">Student and Youth discount</Link></li>
              <li className='footer-li'><Link href="#">Sporton Membership</Link></li>
              <li className='footer-li'><Link href="#">Refer a Friend</Link></li> */}
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} className='text-header' id="socia-media-icons">
            <ul>
              <li className='footer-li' ><Link href="#" id="insta">< InstagramIcon/></Link></li>
              <li className='footer-li'><Link href="#"  id="x"><XIcon/></Link></li>
              <li className='footer-li'><Link href="#"  id="youtube"><YouTubeIcon/></Link></li>
              <li className='footer-li'><Link href="#"  id="whatsapp"><WhatsAppIcon/></Link></li>
              
            </ul>
          </Grid>
        </Grid>
        <Grid className="footer-icons">
          <div className='sporton-logo'>
           <img src={logo} alt="sporton-logo" width={150}/>
          </div> 
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
