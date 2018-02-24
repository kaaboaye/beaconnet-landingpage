import React, { Component } from 'react'


class Home extends Component {
  frameLoad = () => {
    const frame = this.refs.mapFrame

    frame.height = frame.contentWindow.document.body.scrollHeight
    // frame.contentWindow.eval("alert(window.location)")
  }

  render() {
    return (
      <iframe width="100%" ref="mapFrame" onLoad={this.frameLoad} src="/map.html" title="Map" scrolling="no"/>
    )
  }
}

export default Home