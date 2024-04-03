import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function modal({Open,Solds,name}) {

  const handleClose = () => {
    window.location.reload();
  }

  const getPrices = (solds) => {
    let total = 0;
    solds.forEach((value)=>total+=value.price*value.count);
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0
  }).format(total);
  }

  const getPrice = (total) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0
  }).format(total);
  }

  return (
    <div>
        <Grid container spacing={2}>

      <Modal
        open={Open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Felicitaciones  {name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Has comprado {getPrices(Solds)} en productos
            {Solds.map((value,ix)=>(
              <div key={ix}>
            {value.count} {value.name} x {getPrice(value.price)} = {getPrice(value.count*value.price)}
              </div>
            ))}

          </Typography>
        </Box>
      </Modal>
        </Grid>
    </div>
  );
}
