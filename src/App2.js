import React, { Component } from 'react';

import Header from './Components/Header';
import MainButton from './Components/MainButton';
import MainSection from './Components/MainSection';

import logo from './logo.svg';
import './App.css';


var mainImageStyle = {
       backgroundImage: 'url(' + './src/public/mainImage.jpg' + ')',
       textAlign : 'center',
       width : '100%',
       height : '500px',
       backgroundSize:'cover',
       backgroundPosition: 'center center',
       paddingTop : '100px',
       paddingBottom : '100px'
    }

var containerCenter = {
    textAlign : 'center'
}

var App = React.createClass({

    render : function(){
      return (
        <div>
          <div>
              <div className="container">
              <Header/>
              </div >
              <div style = {mainImageStyle}>
                      <MainButton/>
              </div>
              <div className="container" style = {containerCenter}>
                  <MainSection/>
                  <MainSection/>
                  <MainSection/>
                  <MainSection/>
              </div >
           </div>
       </div>
      );
    }
});



export default App;