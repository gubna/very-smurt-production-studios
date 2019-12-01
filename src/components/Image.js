import React from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import smart from './images/verysmurt.png';

const Media = styled.div`
    width: 100%;
;`

 function ImgMediaCard() {

  return (
    <Card>
        <Media>
        <CardMedia
          component="img"
          alt="Very Smurt"
          image={smart}
          title="Very Smurt Production Studios"
        />
        </Media>
    </Card>
  );
}
export default ImgMediaCard;