// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'

export default class Hello extends React.Component {
  constructor(props, _railsContext) {
    super(props);
    this.state={name:''};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(newName) {
    this.setState({name:newName.target.value})
  }
  render() {
    return (
      <div class='row'>
        <div>
          <input type="text" value={this.state.name} autofocus="autofocus" onChange={this.handleChange} />
        </div>
        <div>
          <iframe
            src={"http://player.twitch.tv/?channel="+this.state.name}
            scrolling="true"
            height="500"
            width="500"
            allowfullscreen="true">
          </iframe>
        </div>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello name = "eulcs1" />,
    document.getElementById('hello-react1')
  )
})