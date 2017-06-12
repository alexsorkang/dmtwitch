import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {_} from 'underscore'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/css/bootstrap-theme.css'

export default class LeftNav extends React.Component {
  constructor(props, _railsContext) {
    super(props);
    let obj = {}
    obj[this.props.id] = ''
    this.state = obj
    console.log(this.state)
    // this.state={twitch_0:'',twitch_1:'',twitch_2:'',twitch_3:''};
    this.handleChange = this.handleChange.bind(this);
    // console.log(this.props.id)
    this.delayCall = _.debounce(function(newName) {
      let obj = {}
      obj[this.props.id] = newName.target.value
      this.props.callbackParent(obj)
    }.bind(this), 300)
  }
  handleChange(newName) {
    let obj = {}
    obj[this.props.id] = newName.target.value
    this.setState(obj)
    newName.persist();
    this.delayCall(newName);
  }
  render() {
    return (
      <div className="form-group">
        <input id={this.props.id} className="form-control" type="text" value={this.state[this.props.id]} onChange={this.handleChange} />
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