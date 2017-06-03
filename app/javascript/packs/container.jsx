// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import Twitch from './twitch.jsx'
import LeftNav from './left_nav.jsx'
import RightNav from './right_nav.jsx'

export default class Container extends React.Component {
  constructor(props, _railsContext) {
    super(props);
    this.state={name:'sheriffeli'};
    this.handleChange = this.handleChange.bind(this);
    this.onChildChanged = this.onChildChanged.bind(this);
  }
  handleChange(newName) {
    this.setState({name:newName.target.value})
  }
  onChildChanged(newStream) {
    this.setState({name:newStream})
  }
  render() {
    const children = this.props.children
    return (
      <div id="outerContainer" className="row">
        {React.Children.map(children, (child, i) => {
          if (child.type === LeftNav) {
            return React.cloneElement(child, { callbackParent: this.onChildChanged })
          }
          if (child.type === Twitch) {
            return React.cloneElement(child, { streamName: this.state.name })
          }
          if (child.type === RightNav) {
            return React.cloneElement(child, { streamName: this.state.name })
          }
        })}
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Container>
      <LeftNav/>
      <Twitch className="twitch_0" streamName='sheriffeli' />
      <Twitch className="twitch_1" streamName='greekgodx' />
      <RightNav/>
    </Container>,
    document.getElementById("mainContainer")
  )
})