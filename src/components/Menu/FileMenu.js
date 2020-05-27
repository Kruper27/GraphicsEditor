import React from 'react'
import Download from './Buttons/Download'
import Upload from './Buttons/Upload'
import Clear from './Buttons/Clear'
import SaveSvg from './Buttons/SaveSvg'

class Manipulations extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      popoverOpen: false,
    }
  }

  toggle() {
  }

  render() {
    const props = {
      done: () => this.toggle(),
    }
    return (
      <div>
        <Upload {...props} />
        <SaveSvg {...props} />
        <Download {...props} />
        <Clear {...props} />
      </div>
    )
  }
}

export default Manipulations
