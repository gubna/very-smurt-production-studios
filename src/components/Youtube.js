import React from 'react';
import styled from 'styled-components';
  
  const Embed = styled.div`
  text-align: center;
  width: 100%;
  background-color: #65473c;
  padding-top: 1em;
  padding-bottom: 5em;
  `;


function Tube() {
    return (
      
        <div>
        <Embed>

        <iframe  src="https://www.youtube.com/embed/9WsERkY6Lxk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        </Embed>
        </div>
        
    );
  }
  
  export default Tube;