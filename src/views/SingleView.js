// [CMP] Import
import React, { Component } from 'react'


// [CMP] Definition
class SingleView extends Component{
  // Init componenet
  constructor( props ){
    // Inject props from extended classe (ES6)
    super(props)
  }

  // Dsiplay component
  render(){
    return(
      <div className='single-view-component'>
        single-view
      </div>
    )
  }
}

// [CMP] export
export default SingleView;
