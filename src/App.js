// [CMP] Import
import React, { Component } from 'react';

// Import component to display view component
import { Routes, Route } from "react-router-dom"

// Importe route componenets
import HomeView from "./views/HomeView";
import CreateView from "./views/CreateView";
import SingleView from "./views/SingleView";


// [CMP] Definition
class App extends Component{
  // Init componenet
  constructor( props ){
    // Inject props from extended classe (ES6)
    super(props)
  }

  // Dsiplay component
  render(){
    return(
      <div className='app-component'>
        <header>
          <h1>Hello react classe</h1>
        </header>

        <main>
          {/* Routes directive to define routes*/}
          <Routes>
            {/* Route directive to define path and component */}
            <Route path="/" element={ <HomeView /> } />
            <Route path="/add" element={ <CreateView /> } />
            <Route path="/single/:id" element={ <SingleView /> } />
          </Routes>
        </main>

        <footer>
          <p>Under WTFPL - Julien Noyer 2023</p>
        </footer>
      </div>
    )
  }
}

// [CMP] export
export default App;
