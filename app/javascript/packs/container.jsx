// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/css/bootstrap-theme.css'
import Twitch from './twitch.jsx'
import LeftNav from './left_nav.jsx'
import RightNav from './right_nav.jsx'

export default class Container extends React.Component {
  constructor(props, _railsContext) {
    super(props);
    this.state={name:'sheriffeli',twitch_0:'',twitch_1:'',twitch_2:'',twitch_3:''};
    this.handleChange = this.handleChange.bind(this);
    this.onChildChanged = this.onChildChanged.bind(this);
    this.twitchCount = this.twitchCount.bind(this);
  }
  handleChange(newName) {
    this.setState({name:newName.target.value})
  }
  onChildChanged(newStream) {
    this.setState(newStream)
  }
  twitchCount() {
    var count = 4;
    if (this.state.twitch_3 == '') {
      count -= 1
    }
    if (this.state.twitch_2 == '') {
      count -= 1
    }
    if (this.state.twitch_1 == '') {
      count -= 1
    }
    if (this.state.twitch_0 == '') {
      count -= 1
    }
    return count
  }
  render() {
    const children = this.props.children
    const childArray = React.Children.toArray(children)
    const twitchArr = childArray.slice(1,-1)
    return (
      <div id="outerContainer" className="row">
        {React.cloneElement(childArray[0], { callbackParent: this.onChildChanged })}
        <div className="col-sm-8">
          {twitchArr.map((child, i) => {
            return React.cloneElement(child, { twitchCount: this.twitchCount(), streamNo: i, streamName: this.state["twitch_" + i] })
          })}
        </div>
        {React.cloneElement(childArray[childArray.length-1], { streamName: this.state.name })}
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Container>
      <LeftNav/>
      <Twitch className="twitch_0" />
      <Twitch className="twitch_1" />
      <Twitch className="twitch_2" />
      <Twitch className="twitch_3" />
      <RightNav/>
    </Container>,
    document.getElementById("mainContainer")
  )
})