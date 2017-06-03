import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'

export default class LeftNav extends React.Component {
  constructor(props, _railsContext) {
    super(props);
    this.state={name:'sheriffeli'};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(newName) {
    this.setState({name:newName.target.value})
    this.props.callbackParent(newName.target.value)
  }
  render() {
    return (
      <div className="col-md-2">
        <input type="text" value={this.state.name} autofocus="autofocus" onChange={this.handleChange} />
        <input type="text" value={this.state.name} autofocus="autofocus" onChange={this.handleChange} />
        <input type="text" value={this.state.name} autofocus="autofocus" onChange={this.handleChange} />
        <input type="text" value={this.state.name} autofocus="autofocus" onChange={this.handleChange} />
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