// [CMP] Import
import React, { Component } from 'react'

// Store modules
import { connect } from "react-redux";


// [CMP] Definition
class HeaderBase extends Component{
  // Init componenet
  constructor( props ){
    // Inject props from extended classe (ES6)
    super(props);
  }

  // Dsiplay component
  render(){
    return(
      <header className='header-base-component'>
        <h1>First React App</h1>
      </header>
    )
  }
}


// Bind store state in classe properties
const mapStateToProps = state => {
  return{
    connectedUser: state.user
  }
}

// [CMP] export
export default connect( mapStateToProps )( HeaderBase );
