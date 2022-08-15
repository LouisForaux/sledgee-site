import * as React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';

const backgroundImage =
  'assets/img/background.jpg';

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Un site ?<br />Une réparation informatique ?
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        N'attendez pas que votre ordinateur ne réponde plus, profitez de 10% de remise pour tout nouveau client !
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="#Booking"
        sx={{ minWidth: 200 }}
      >
        On y va !
      </Button>
      <Typography variant="body2" align="center" color="inherit" sx={{ mt: 2 }}>
        Chez vous, dans votre magasin, dans votre bureau, ou à distance, c'est vous qui choisissez !
      </Typography>
    </ProductHeroLayout>
  );
}
