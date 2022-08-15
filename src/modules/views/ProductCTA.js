import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

function ProductCTA() {

  return (
    <Container component="section" sx={{ mt: 10, display: 'flex' }} id="Booking">
      <Grid container>
      {/* <iframe src='https://outlook.office365.com/owa/calendar/LouisFORAUX@foraux.fr/bookings/' title="booking" width='100%' height='100%' scrolling='yes' style={{border:0, height:1500}}></iframe> */}
      {/* <div className="meetings-iframe-container" data-src="https://meetings-eu1.hubspot.com/louis-foraux?embed=true"></div> */}
      <iframe src='https://meetings-eu1.hubspot.com/louis-foraux?embed=true' title="booking" width='100%' height='100%' scrolling='yes' style={{border:0, height:700}}></iframe>

      <div className="meetings-iframe-container" src=""></div>
      </Grid>
    </Container>
  );
}

export default ProductCTA;
