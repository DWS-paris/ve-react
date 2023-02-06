// [CMP] Import
import React, { Component } from 'react'

// Store modules
import { connect } from "react-redux";


// [CMP] Definition
class FooterBase extends Component{
  // Init componenet
  constructor( props ){
    // Inject props from extended classe (ES6)
    super(props);
  }

  // Dsiplay component
  render(){
    return(
      <footer className='footer-base-component'>
        <p>Under WTFPL - Julien Noyer 2023</p>
      </footer>
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
export default connect( mapStateToProps )( FooterBase );
