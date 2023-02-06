// [CMP] Import
import React, { Component } from 'react'


// [CMP] Definition
class SinglePost extends Component{
  // Init componenet
  constructor( props ){
    // Inject props from extended classe (ES6)
    super(props);

    // Get value from parent component
    this.post = this.props.item;

    // Bind this to methods
    this.sendPostId = this.sendPostId.bind( this );
  }

  sendPostId( event ){
    // Send post ID to parent component
    this.props.displaySinglePost( event.target.getAttribute('data-value') )
  }

  // Dsiplay component
  render(){
    return(
      <p 
        className='single-post-component' 
        data-value={ this.post.id }
        onClick={ event => this.sendPostId( event ) }
      >
        <b>{ this.post.id })</b> { this.post.title }
      </p>
    )
  }
}

// [CMP] export
export default SinglePost;
