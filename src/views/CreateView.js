// [CMP] Import
import React, { Component } from 'react'


// [CMP] Definition
class CreateView extends Component{
  // Init componenet
  constructor( props ){
    // Inject props from extended classe (ES6)
    super(props)
  }

  // Dsiplay component
  render(){
    return(
      <div className='create-view-component'>
        create-view
      </div>
    )
  }
}

// [CMP] export
export default CreateView;
