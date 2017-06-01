// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Hello = props => (
	<div>
  	<iframe
      src="http://player.twitch.tv/?channel=eulcs1"
      scrolling="true"
      height="500"
      width="500"
      allowfullscreen="true">
  	</iframe>
  	</div>
)

Hello.defaultProps = {
  name: 'alex'
}

Hello.propTypes = {
  name: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello name='alex' last='kang' />,
    document.getElementById('hello-react1')
  )
})