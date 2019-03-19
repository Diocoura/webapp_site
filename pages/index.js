import React from 'react';
import Link from 'next/link';
import Bouton from '../components/Bouton.js';


var buttonStyle = {
  margin: '10px 10px 10px 0'
};

const IndexPage = () => (
  <div>
    <head>
      <title> Wepapp </title>
    </head>
    <h1>Welcome to WebApp</h1>
    <p>Application pour voir le nombre de commentaire de Tripad</p>
    <button className='Cliquer'> Cliquer </button>
  </div>
);

const bouton = new Bouton();
bouton.render();

export default IndexPage;
