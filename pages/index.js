import React, { Component } from 'react';

const IndexPage = () => (
  <div>
    <head>
      <title> Wepapp </title>
    </head>
    <h1 align='center'>Welcome to WebApp</h1>
    <p  align='center'> Entrer le lien de la page cible</p>
    <div align='center'>
      <form>
        <input type="text" name="url" id="url" value="" size="22" tabindex="3"/>
      </form>
    </div>
    <div  align='center'>
      <input type='button' value='Click me !'/>
    </div>
    <style>{'body { background-color: aqua; }'}</style>
    <div align='center'>
      <p>Words: ...  </p>
    </div>
    <div align='center'>
      <p>AVG: 0</p>
    </div>
  </div>
);


export default IndexPage;
