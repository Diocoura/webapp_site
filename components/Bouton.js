import React from 'react';
import Link from 'next/link';

var buttonStyle = {
  margin: '10px 10px 10px 0'
};
export default class Bouton extends React.Component {
  render (){
    return(
      <button className='Cliquer' style={buttonStyle}>
      </button>
    );
  }
};
