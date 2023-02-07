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
    if( this.props.connectedUser ){
      return(
        <header className='header-base-component'>
          <nav>
            <ul className='is-flex is-align-items-center is-justify-content-space-between'>
              <li><b>ClickReact</b></li>
              <li>
                <button 
                  className='button is-small is-danger' 
                  type='button'
                  onClick={ () => this.props.onLogout() }
                >
                  Logout
                </button>
              </li>
            </ul>
          </nav>
        </header>
      )
    }
    else{
      return(
        <header className='header-base-component'>
          <nav>
            <ul className='is-flex is-align-items-center is-justify-content-space-between'>
              <li><b>ClickReact</b></li>
              <li>
                <ul className='is-flex is-align-items-center'>
                  <li className='mr-2'>
                    <button 
                      className='button is-small is-primary'
                      onClick={ event => this.props.changeRoute('/') }
                    >
                      Login
                    </button>
                  </li>
                  <li>
                    <button 
                      className='button is-small is-primary'
                      onClick={ event => this.props.changeRoute('/register') }
                    >
                      Register
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </header>
      )
    }
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
