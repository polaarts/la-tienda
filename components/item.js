import * as React from 'react';
import {useState} from 'react';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';

export default function Item(props)  {
    const [item, setItem] = useState(props.Item);
    const [itemCount, setItemCount] = useState(0);  

    const handleIncrement = () => {
        props.handleIncrement(item)
        setItemCount(prevCount => prevCount + 1);
    };
    const getPrice = (total) => {
        return new Intl.NumberFormat('es-CL', {
          style: 'currency',
          currency: 'CLP',
          minimumFractionDigits: 0
      }).format(total);
      }

    const handleDecrement = () => {
        setItemCount(prevCount => prevCount > 0 ? prevCount - 1 : 0);
   
        props.handleDecrement(item)
        if (itemCount == 1) {
            item.selected = false
             setItem(item) 
            
        }

    };

    return <any> 
    <ListItem alignItems="flex-start" 
    sx={ item.selected ? {backgroundColor: '#50C878',color:'white'} :null}
    onClick={(e)=>{
        item.selected = !item.selected 
        setItem(item)  
        if (item.selected){
             setItemCount(1)
             props.handleIncrement(item)
        } else{
             setItemCount(0)
             props.handleDecrement(item)
        }
    } }
    >
    <ListItemAvatar>
      <Avatar  src={"/assets/"+item.id+".jpg"}/>
    </ListItemAvatar>
    
    <ListItemText
      primary={item.name}
      secondary={
        <React.Fragment>
          <Typography
            sx={{ display: 'inline',color: item.selected ? 'white' : 'black' }}
            component="span"
            variant="body2"
            
          >
            {getPrice(item.price)}  {item.description} 
           
          </Typography>
        </React.Fragment>
      }
    />
    
  </ListItem>
{item.selected? <div style={{ display: 'flex', 
   justifyContent:"right",
        alignItems:"center",
        backgroundColor: '#50C878'}}>  {/* Estilo para disposición horizontal */}

<IconButton color="primary" aria-label="Disminuir" onClick={handleDecrement}>
                        <RemoveCircleOutlinedIcon />
                    </IconButton>
                    <Typography variant="body2">{itemCount}</Typography>

                    <IconButton color="primary" aria-label="Incrementar" onClick={handleIncrement}>
                        <AddCircleOutlinedIcon />
                    </IconButton>
                 
                </div>:null}
  <Divider variant="inset" component="li" />
  </any>
}