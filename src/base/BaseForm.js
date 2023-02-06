// [CMP] Import
import React, { Component } from 'react'

// [CMP] Definition
class BaseForm extends Component{
  // Init componenet
  constructor( props ){
    // Inject props from extended classe (ES6)
    super(props);
  }

  // Dsiplay component
  render(){
    return(
      <form className='form-base-component'>
        <p>Let's rock!</p>
      </form>
    )
  }
}

// [CMP] export
export default BaseForm;
