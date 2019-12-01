import React from 'react';
import styled from 'styled-components';
import { FaYoutubeSquare } from "react-icons/fa";
import { FaBandcamp } from "react-icons/fa";
import { FaSoundcloud} from "react-icons/fa";
  
  const Fixed = styled.div`
  height: 4em;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #2b2d42;
  text-align: center;
  `;

  const Icon = styled.h1`
    font-size: 2em;
    padding-bottom: 1em;
    ;`

function Foot() {
    return (
      
        <div>
        <Fixed>
        <Icon>
       
        <a href="https://verysmurt.bandcamp.com/"><FaBandcamp /></a>
        <a href="https://www.youtube.com/channel/UC3tpezH88Fou-R4w69VuiJA"><FaYoutubeSquare /></a>
        <a href="https://soundcloud.com/user-187536119"><FaSoundcloud /></a>

        </Icon>
        </Fixed>
        </div>
        
    );
  }
  
  export default Foot;