import React from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


const Fixed = styled.div`
height: 3em;
position: fixed;
width: 100%;
background-color: #65473c;
text-align: center;
font-size: 2em;
`;
    
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
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Links to My Media
      </Button>
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
        Very Smurt Studios
        </Fixed>
      </AppBar>
    
    </div>
  );
}
