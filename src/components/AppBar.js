import React from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


const Fixed = styled.div`
height: 7em;
position: fixed;
width: 100%;
background-color: #e5b25d;
text-align: center;
font-size: 1em;
color: #5b5c5f;
`;

const Link = styled.button`
box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
display: flex;
justify-content: left;
margin: 1em;
border-radius: 20px;
background-color: #cff27e;
;`
    
    export default function ButtonAppBar() {
      const [anchorEl, setAnchorEl] = React.useState(null);
    
      const handleClick = event => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };

  return (
    <div>
      <AppBar>
      <Fixed>
        <Link>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
       Where to find me
      </Button>
      </Link>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><a href="https://verysmurt.bandcamp.com/">bandcamp</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://www.youtube.com/channel/UC3tpezH88Fou-R4w69VuiJA">YouTube</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://soundcloud.com/user-187536119">soundcloud</a></MenuItem>
      </Menu><br></br>
        Very Smurt Production Studios
        </Fixed>
      </AppBar>
    
    </div>
  );
}
