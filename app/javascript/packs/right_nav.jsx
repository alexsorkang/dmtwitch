import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/css/bootstrap-theme.css'

export default class RightNav extends React.Component {
  constructor(props, _railsContext) {
    super(props);
    // this.state={name:''};
    // this.handleChange = this.handleChange.bind(this);
  }
  render() {
    return (
      <div className="col-md-2">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <RightNav/>,
    document.getElementById("outerContainer")
  )
})