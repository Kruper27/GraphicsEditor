import React from 'react'

import Menu from './Menu/Menu'
import Canvas from './Canvas'

const App = () => (
  <>
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
  </>
)

export default App
