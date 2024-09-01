
import React from "react";

interface NodeIdenticonImgProps {
  address: string;
}

const NodeIdenticonImg: React.FunctionComponent<NodeIdenticonImgProps> = ({
  address,
}) => {

    const stringToColor = (str: string) => {
        let hash = 0;
        str.split('').forEach(char => {
          hash = char.charCodeAt(0) + ((hash << 5) - hash)
        })
        let colour = '#'
        for (let i = 0; i < 3; i++) {
          const value = (hash >> (i * 8)) & 0xff
          colour += value.toString(16).padStart(2, '0')
        }
        return colour
    }
  let colors = [];
  for (let i = 0; i < address.length - 3; i++) {
    colors.push(stringToColor(address.charAt(i) + address.charAt(i + 1) + address.charAt(i + 2) + address.charAt(i + 3)));
  }
  // Return an img element with the data URL as the src
  return <><svg height="32" id="dfaUSUEo82ko3bKzkCjnZh5FgMp27LSVo6Mdb9Ny8FHm2UWT4" name="dfaUSUEo82ko3bKzkCjnZh5FgMp27LSVo6Mdb9Ny8FHm2UWT4" viewBox="0 0 64 64" width="32">
  <circle cx="32" cy="32" fill={stringToColor(address)} stroke="#1e4636" r="32"></circle>
  
  <circle cx="32" cy="8" fill={colors[0]} r="5"></circle>
  <circle cx="32" cy="20" fill={colors[1]} r="5"></circle>
  <circle cx="21.607695154586736" cy="14" fill={colors[2]} r="5"></circle>
  <circle cx="11.215390309173472" cy="20" fill={colors[3]} r="5"></circle>
  <circle cx="21.607695154586736" cy="26" fill={colors[4]} r="5"></circle>
  <circle cx="11.215390309173472" cy="32" fill={colors[5]} r="5"></circle>
  <circle cx="11.215390309173472" cy="44" fill={colors[6]} r="5"></circle>
  <circle cx="21.607695154586736" cy="38" fill={colors[7]} r="5"></circle>
  <circle cx="21.607695154586736" cy="50" fill={colors[8]} r="5"></circle>

  <circle cx="32" cy="56" fill={colors[9]} r="5"></circle>
  <circle cx="32" cy="44" fill={colors[10]} r="5"></circle>
  <circle cx="42.392304845413264" cy="50" fill={colors[11]} r="5"></circle>
  <circle cx="52.78460969082653" cy="44" fill={colors[12]} r="5"></circle>
  <circle cx="42.392304845413264" cy="38" fill={colors[13]} r="5"></circle>
  <circle cx="52.78460969082653" cy="32" fill={colors[14]} r="5"></circle>
  <circle cx="52.78460969082653" cy="20" fill={colors[15]} r="5"></circle>
  <circle cx="42.392304845413264" cy="26" fill={colors[16]} r="5"></circle>
  <circle cx="42.392304845413264" cy="14" fill={colors[17]} r="5"></circle>
  <circle cx="32" cy="32" fill={colors[18]} r="5"></circle>
</svg></>;
};

export default NodeIdenticonImg;