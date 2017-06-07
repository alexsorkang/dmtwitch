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
    let twitchClass = 'twitchFrame_short'
    if (this.props.streamNo == 0 && this.props.twitchCount<=1) {
      twitchClass = 'twitchFrame_tall'
    }
    if (this.props.streamNo < this.props.twitchCount || (this.props.streamNo == 0 && this.props.twitchCount == 0)) {
      if ((this.props.twitchCount <= 2 && this.props.streamNo<=1) || (this.props.twitchCount==3 && this.props.streamNo == 2)) {
        return (
          <div className="col-sm-12 nopadding">
            <iframe
              className={twitchClass}
              src={"http://player.twitch.tv/?channel="+this.props.streamName}
              scrolling="true"
              >
            </iframe>
          </div>
        )
      } else if (this.props.streamNo < this.props.twitchCount) {
        return (
          <div className='col-sm-6 nopadding'>
            <iframe
              className={twitchClass}
              src={"http://player.twitch.tv/?channel="+this.props.streamName}
              scrolling="true"
              >
            </iframe>
          </div>
          )
      }
    }
    return null
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Twitch/>,
    document.getElementById("outerContainer")
  )
})