// [CMP] Import
import React, { Component } from 'react';
import { withRouter } from '../services/withRouter';

// Store modules
import { connect } from "react-redux"
import store from "../store/index"

// Child components
import SinglePost from "../components/SinglePost"
import BaseForm from '../base/BaseForm';

// [CMP] Definition
class HomeView extends Component{
  // Init componenet
  constructor( props ){
    // Inject props from extended classe (ES6)
    super(props);

    // Define login form value
    this.loginFormValue = [
      {
        name: 'email',
        type: 'email',
        label: `Email de connexion`,
        required: true,
        min: 5,
        max: null
      },
      {
        name: 'username',
        type: 'text',
        label: `Identitiant de connexion`,
        required: true,
        min: 5,
        max: null
      }
    ]

    // Bind this to methods
    this.displaySinglePost = this.displaySinglePost.bind( this );
  }

  displaySinglePost( event ){
    this.props.navigate(`/single/${ event }`)
  }

  // Send AJAX request with Fetch API
  loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then( requestStatus => {
      if( requestStatus.ok ){
        // Extract JSON value
        return requestStatus.json()
      }
    })
    .then( fetchSuccess => {
      // Save values in store property
      store.dispatch({
        type: 'LOAD-POST',
        value: fetchSuccess
      })

      console.log(fetchSuccess)
    })
    .catch( fetchError => {
      console.log('Error', fetchError)
    })
  }

  // Bind form 'BaseForm' event 'submit'
  onSubmit( event ){
    console.log( 'onSubmit', event )
  }

  // Dsiplay component
  render(){
    if( this.props.postCollection ){
      return(
        <div className='home-view-component'>
          <p>Liste de post { this.props.postCollection.length }</p>
          <ul>
            {
              this.props.postCollection.map( (item, idx) => {
                return(
                  <li key={ `single-post-${ idx }` }>
                    <SinglePost   
                      item={ item }
                      displaySinglePost={ event => this.displaySinglePost(event) }
                    />
                  </li>
                )
              })
            }
          </ul>
        </div>
      )
    }
    else{
      return(
        <div className='home-view-component'>
          <h1>Bienvenue, merci de vous connecter</h1>
          <BaseForm
            content={ this.loginFormValue }
            handleSubmit={ this.onSubmit }
          />
        </div>
      )
    }
  }
}

// Bind store state in classe properties
const mapStateToProps = state => {
  return{
    postCollection: state.posts
  }
}

// [CMP] export
export default withRouter ( connect( mapStateToProps )( HomeView ) );
