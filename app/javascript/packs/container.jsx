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
import {push as Menu} from 'react-burger-menu'
// import {scaleDown as Menu} from 'react-burger-menu'

export default class Container extends React.Component {
  constructor(props, _railsContext) {
    super(props);
    this.state={isOpen:false,twitch_0:'',twitch_1:'',twitch_2:'',twitch_3:''};
    this.handleChange = this.handleChange.bind(this);
    this.onChildChanged = this.onChildChanged.bind(this);
    this.twitchCount = this.twitchCount.bind(this);
    this.openToggle = this.openToggle.bind(this);
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
  openToggle(menu) {
    this.setState({isOpen:menu.isOpen})
  }
  render() {
    // add this later
    // <div className="col-sm-2">
      // {React.cloneElement(childArray[childArray.length-1], { streamName: this.state.name })}
    // </div>

    // <div className='col-sm-2'>
    //   {formArr.map((child,i) => {
    //     return React.cloneElement(child, {id: 'twitch_'+i, callbackParent: this.onChildChanged})
    //   })}
    // </div>
    const children = this.props.children
    const childArray = React.Children.toArray(children)
    const formArr = childArray.slice(0,4)
    const twitchArr = childArray.slice(4,-1)
    const leftArr = twitchArr.slice(0,Math.floor(twitchArr.length/2))
    const rightArr = twitchArr.slice(Math.floor(twitchArr.length/2))
    // let contentSize = this.state.isOpen?'col-sm-10':'col-sm-12'
    // let leftSize = this.state.isOpen?'col-sm-2':''
    const contentSize = 'col-sm-12'
    const leftSize = ''
    
    return (
      <div id="outerContainer" className="row">
        
        <div>
          <Menu pageWrapId={"page-wrap"} outerContainerId={ "outerContainer"} onStateChange={this.openToggle} >
          
            {formArr.map((child,i) => {
              return React.cloneElement(child, {id: 'twitch_'+i, callbackParent: this.onChildChanged})
            })}
          
          </Menu>
        </div>

        <div className={contentSize}>
          <main id="page-wrap">
            <div className="row">
              {leftArr.map((child, i) => {
                return React.cloneElement(child, { twitchCount: this.twitchCount(), streamNo: i, streamName: this.state["twitch_" + i] })
              })}
            </div>
            <div className="row">
              {rightArr.map((child, i) => {
                return React.cloneElement(child, { twitchCount: this.twitchCount(), streamNo: i+leftArr.length, streamName: this.state["twitch_" + (i+leftArr.length)] })
              })}
            </div>
          </main>
        </div>

      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Container>
      <LeftNav/>
      <LeftNav/>
      <LeftNav/>
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
