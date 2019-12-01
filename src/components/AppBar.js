import React from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const Wrapper = styled.section`
background-color: #2b2d42;
color: #8d99ae;
height: 4em;
font-size: 1.4em;
font-style: bold;
padding-bottom: .5em;
;` 

const Fixed = styled.div`
position: fixed;
width: 100%;
text-align: center;
`;

const Link = styled.button`
box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
display: flex;
justify-content: left;
margin: 4px;
border-radius: 12px;
background-color: #8d99ae;
height: 2.7em;
width: 50%;
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
      <Fixed>
      <AppBar>
      <Wrapper>
        <Link>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
       My Social Media
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
        </Wrapper>
      </AppBar>
      </Fixed>
    </div>
  );
}
