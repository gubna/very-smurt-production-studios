import React from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Olimo from './images/OlimoVerySmurt.png';

const Oli = styled.section`
    width: 100%;
    background-color: #8d99ae;
    text-align: center;
    ;`

function Album() {

  return (
    
    <Card>
        <Oli>
      <CardActionArea>
        
      <CardMedia
          component="img"
          alt="Very Smurt"
          image={Olimo}
          title="Very Smurt Production Studios"
        />
        
        <CardContent>
          <Typography gutterBottom variant="h6" component="h6">
          Latest Album from Very Smurt Studios titled "Olimo"
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button  size="small" color="primary" ><a href="https://m.soundcloud.com/user-187536119/sets/olimo-1">Album Link</a>
        </Button>
      </CardActions>
      </Oli>
    </Card>
    
  );
}
export default Album;