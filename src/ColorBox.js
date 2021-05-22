import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render(props) {
    let passedOpacity = this.props.opacity
    return (
      <div className="color-box" style={{opacity: passedOpacity}}>
        {passedOpacity>=0.2 ? <div className="color-box" 
        style={{opacity: passedOpacity-0.1}}><ColorBox opacity={passedOpacity-0.1}/></div> : null}
      </div>
    )
  }

}

