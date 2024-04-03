import * as React from 'react';
import {useState,useEffect} from 'react';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Item from '@/components/item';
import Modal from '@/components/modal';
import ModalUser from '@/components/modal_user';
import sendDataToServer from '@/components/sendSeller';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

export async function getStaticProps() {
  const products = await prisma.products.findMany()

  products.forEach((value) => {
    value.selected = false
  })

  return {
    props: { products }
  }
}


export default function App({ products }) {
  const [selected, setSelected] = useState([]);
  const [filter, setFilter] = useState(products);
  const [solds, seltSold] = useState([]);
  const [name, setName] = useState( '');


  const [open, setOpen] = useState(false);

  const handleIncrement = (item) => {
    setSelected(prevCount => [...prevCount, item]);
  }
  const handleDecrement = (item) => {
  
    for (let i = 0; i < selected.length; i++) {
      if (selected[i].id == item.id) {
        selected.splice(i, 1);
        break;
      }
    }
    setSelected([...selected]);

  }

  const handleFilter = (e) => {
    setFilter(products.filter((value) => (value.name+value.description).toLowerCase().includes(e.target.value.toLowerCase())));
  }


  const getPrices = () => {
    let total = 0;
    selected.forEach((value) => total += value.price);
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0
    }).format(total);
  }

  const SoldOut = () => {
    setOpen(true)
    let solds = {}
    selected.forEach((value) => {
      if (solds[value.id]) {
        solds[value.id].count += 1

      } else {
        solds[value.id] = { count: 1, price: value.price }
        solds[value.id].name = value.name
      }
    })
    let soldsArray = []
    for (const [key, value] of Object.entries(solds)) {
      soldsArray.push({ id: key, count: value.count, price: value.price, name: value.name })
    }
    seltSold(soldsArray)
    sendDataToServer({name:name,solds:soldsArray})
  }

  useEffect(() => {
    setName(window.localStorage.getItem('name'))
})


  return (
    <any>
      <ModalUser name={name} setName={setName} />
      <Modal Open={open} Solds={solds} name={name} />

      <Box
        component="form"
        sx={{
          m: 2, width: '100%', bgcolor: 'background.paper'
        }}
        style={{ position: 'fixed', top: 0, zIndex: 1 }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Buscar Productos" variant="outlined" sx={{ width: '90%' }} onChange={handleFilter} />
      </Box>
      <List sx={{ width: '100%', top: '70px', maxWidth: '100%', bgcolor: 'background.paper' }}>
        {filter.map((value, ix) => {
          return <any key={value.id}>
            <Item Item={value} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
          </any>
        })}

      </List>

      {selected.length ? <Stack direction="row" spacing={2} style={{
        position: 'fixed',
        bottom: 10,
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
        textAlign: 'center'
      }}>
        <Button variant="contained" color="success" onClick={SoldOut}>
          Comprar ({getPrices()})
        </Button>

      </Stack> : null}

    </any>
  );
}