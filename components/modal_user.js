import * as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

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

export default function ModalUser({name,setName}) {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
  }

  const handleText = (e) => {
    setName(e.target.value)
    window.localStorage.setItem('name',e.target.value)
  }

  

  return (
    <div>
        <Grid container spacing={2}>

      <Modal
        open={open}
       // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Bienvenido grafana market
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          
          <Box
        component="form"
        sx={{
          m: 2, width: '100%', bgcolor: 'background.paper'
        }}

        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="¿Como quieres te llame?" variant="outlined" sx={{ width: '90%' }}
        value={name}
        onChange={handleText}  />
      </Box>


          </Typography>

          <Button variant="contained" color="success" disabled={name==''}
          onClick={handleClose}>
          Ingresar
        </Button>

        </Box>
      </Modal>
        </Grid>
    </div>
  );
}
