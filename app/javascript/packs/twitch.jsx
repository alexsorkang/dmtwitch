// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/css/bootstrap-theme.css'

export default class Twitch extends React.Component {
  constructor(props, _railsContext) {
    super(props);
    this.state={name:this.props.streamName};
  }
  render() {
    if (this.props.streamNo < this.props.twitchCount || (this.props.streamNo == 0 && this.props.twitchCount == 0)) {
      return(
        <iframe
          className={'twitchFrame_'+ this.props.streamNo + '_' + this.props.twitchCount}
          src={"http://player.twitch.tv/?channel="+this.props.streamName}
          scrolling="true"
          >
        </iframe>
    )}
    return null



    if (this.props.streamNo == 0){
      if (this.props.twitchCount == 0 || this.props.twitchCount == 1) {
        return (
          <div className='row'>
            <iframe
              className={'twitchFrame_0_' + this.props.twitchCount}
              src={"http://player.twitch.tv/?channel="+this.props.streamName}
              scrolling="true"
              >
            </iframe>
          </div>)
      } else if (this.props.twitchCount == 2) {
        return (
          <div className='row'>
            <iframe
              className={'twitchFrame_0_' + this.props.twitchCount}
              src={"http://player.twitch.tv/?channel="+this.props.streamName}
              scrolling="true"
              >
            </iframe>
          </div>)
      }
    } else if (this.props.streamNo == 1) {
      if (this.props.twitchCount == 2) {
        return (
          <div className='row'>
            <iframe
              className={'twitchFrame_1_' + this.props.twitchCount}
              src={"http://player.twitch.tv/?channel="+this.props.streamName}
              scrolling="true"
              >
            </iframe>
          </div>)
      }
    }
    return null

      // if stream 0
        // if zero or one stream
        // if two stream
        // if three or four stream
      // if stream 1
        // if two stream
        // if three or four stream
      // if stream 2
        // if three or four stream
      // if stream 3
        // if four stream
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Twitch/>,
    document.getElementById("outerContainer")
  )
})