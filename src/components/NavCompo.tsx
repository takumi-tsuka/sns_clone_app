import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Link} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from '@mui/material/IconButton';
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from '@mui/material/Drawer'
// import { Link } from '@mui/material';
function NavCompo() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" enableColorOnDark>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                <MenuIcon></MenuIcon>
                </IconButton>
                {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    News
                </Typography> */}
            </Toolbar>
        </AppBar>
    </Box>


    {/* default */}
      {/* <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      > */}
        {/* <Link to="/home">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/posts">Posts</Link> */}
        {/* <MenuItem onClick={handleClose}>Home</MenuItem>
        <MenuItem onClick={handleClose}>Login</MenuItem>
        <MenuItem  onClick={handleClose}>Register</MenuItem>
        <MenuItem onClick={handleClose}>Posts</MenuItem> */}
        {/* <MenuItem onClick={handleClose}><Link to="/home">Home</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/login">Login</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/register">Register</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/posts">Posts</Link></MenuItem>
      </Menu> */}

    </div>
  );
}
export default NavCompo;