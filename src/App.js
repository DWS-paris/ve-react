// [CMP] Import
import React, { Component } from 'react';

// Import component to display view component
import { Routes, Route } from "react-router-dom"

// Importe route componenets
import HomeView from "./views/HomeView";
import CreateView from "./views/CreateView";
import SingleView from "./views/SingleView";
import HeaderBase from './base/HeaderBase';
import FooterBase from './base/FooterBase';
import store from './store';

// [CMP] Definition
class App extends Component{
  // Init componenet
  constructor( props ){
    // Inject props from extended classe (ES6)
    super(props);
  }

  onLogout(){
    store.dispatch({
      type: 'LOGOUT-USER',
      value: null
    })
  }

  // Dsiplay component
  render(){
    return(
      <div className='app-component'>
        <HeaderBase
          onLogout={ this.onLogout }
        />

        <main>
          {/* Routes directive to define routes */}
          <Routes>
            {/* Route directive to define path and component */}
            <Route path="/" element={ <HomeView /> } />
            <Route path="/add" element={ <CreateView /> } />
            <Route path="/:shema/:id" element={ <SingleView /> } />
          </Routes>
        </main>

        <FooterBase/>
      </div>
    )
  }
}

// [CMP] export
export default App;
