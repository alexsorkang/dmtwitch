import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'

export default class LeftNav extends React.Component {
  constructor(props, _railsContext) {
    super(props);
    this.state={twitch_0:'',twitch_1:'',twitch_2:'',twitch_3:''};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(newName) {
    if (newName.target.id == 'twitch_0') {
      this.setState({twitch_0:newName.target.value})
      this.props.callbackParent({twitch_0:newName.target.value})
    }
    if (newName.target.id == 'twitch_1') {
      this.setState({twitch_1:newName.target.value})
      this.props.callbackParent({twitch_1:newName.target.value})
    }
    if (newName.target.id == 'twitch_2') {
      this.setState({twitch_2:newName.target.value})
      this.props.callbackParent({twitch_2:newName.target.value})
    }
    if (newName.target.id == 'twitch_3') {
      this.setState({twitch_3:newName.target.value})
      this.props.callbackParent({twitch_3:newName.target.value})
    }
  }
  render() {
    return (
      <div className="col-md-2">
        <input id="twitch_0" type="text" value={this.state.twitch_0} autofocus="autofocus" onChange={this.handleChange} />
        <input id="twitch_1" type="text" value={this.state.twitch_1} autofocus="autofocus" onChange={this.handleChange} />
        <input id="twitch_2" type="text" value={this.state.twitch_2} autofocus="autofocus" onChange={this.handleChange} />
        <input id="twitch_3" type="text" value={this.state.twitch_3} autofocus="autofocus" onChange={this.handleChange} />
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <LeftNav/>,
    document.getElementById("outerContainer")
  )
})