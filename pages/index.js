import React, { Component } from 'react';
import ChampForm from '../components/ChampForm';
import axios from 'axios';

const IndexPage = () => (
  <div align='center'>
    <head>
      <title> Wepapp </title>
    </head>
    <h1>Welcome to WebApp</h1>
    <p> Entrer le lien de la page cible</p>
    <ChampForm />
    <style>{'body { background-color: aqua; }'}</style>

  </div>
);


export default IndexPage;
