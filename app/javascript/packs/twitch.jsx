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
    return (
      <div className={"col-md-4 " + this.props.className}>
        <div className='row'>
          <iframe
            className='twitchFrame'
            src={"http://player.twitch.tv/?channel="+this.props.streamName}
            scrolling="true"
            height='600'
            width='700'
            >
          </iframe>
        </div>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Twitch/>,
    document.getElementById("outerContainer")
  )
})