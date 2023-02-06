// [CMP] Import
import React, { Component } from 'react'

// Store modules
import { connect } from "react-redux"
import store from "../store/index"


// [CMP] Definition
class SingleView extends Component{
  // Init componenet
  constructor( props ){
    // Inject props from extended classe (ES6)
    super(props);
  }

  componentDidMount(){
    // Get URL parameters
    const routeParams = window.location.pathname.split('/').filter( item => item.length );

    // Get single shema value
    this.loadItem( routeParams[0], routeParams[1] );
  }

  // Send AJAX request with Fetch API
  loadItem(shema, id){
    fetch(`https://jsonplaceholder.typicode.com/${ shema }/${ id }`)
    .then( requestStatus => {
      if( requestStatus.ok ){ return requestStatus.json() }
    })
    .then( fetchSuccess => {
      // Save values in store property
      store.dispatch({
        type: 'SINGLE-POST',
        value: fetchSuccess
      })
    })
    .catch( fetchError => {
      console.log('Error', fetchError)
    })
  }

  // Dsiplay component
  render(){
    if( this.props.singlePost ){
      return(
        <div className='single-view-component'>
          <h1>{ this.props.singlePost.title }</h1>
          <div>{ this.props.singlePost.body }</div>
        </div>
      )
    }
    else{
      return(
        <div className='single-view-component'>
          Chargement en cours....
        </div>
      )
    }
  }
}


// Bind store state in classe properties
const mapStateToProps = state => {
  return{
    singlePost: state.posts
  }
}

// [CMP] export
export default connect( mapStateToProps )( SingleView );
