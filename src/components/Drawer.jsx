import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate} from 'react-router-dom'
import { Typography, IconButton, Toolbar, AppBar, } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import icon from '../assets/cemyk.jpg'





export default function TemporaryDrawer() {
 
  const navigate = useNavigate()
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

 

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250, mt: 8 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inicio', 'Nutrición', 'Kinesiología'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton  button onClick={()=> navigate(`/${text}`)}>
                <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
          
      </List>
      <Divider />
      <List>
        {['Contacto'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
                <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer('left', true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 4}}>
            {/* CEMyK Paraná */}
          </Typography>
          <img src={icon} width= '45' alt='icono'/>
        </Toolbar>
      </AppBar>
    </Box>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={'left'}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
