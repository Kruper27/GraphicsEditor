import React from 'react'

import Menu from './Menu/forMenu'
import Canvas from './Canvas'

const App = () => (
  <React.Fragment>
    <div className="d-none d-md-block container-fluid" >
      <div className="row">
          <div className="col-md-10">
              <Canvas/>
          </div>
          <div className="col-md-2">
            <Menu/>
          </div>
      </div>
    </div>
  </React.Fragment>
)

export default App
