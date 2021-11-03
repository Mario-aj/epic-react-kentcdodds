import * as React from 'react'
import '../box-styles.css'

const Box = ({children, style, className}) => (
  <div className={`box ${className}`} style={{fontStyle: 'initial', ...style}}>
    {children}
  </div>
)

function App() {
  return (
    <div>
      <Box className="box--small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box className="box--medium" style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>
      <Box className="box--large" style={{backgroundColor: 'orange'}}>
        large orange box
      </Box>
    </div>
  )
}

export default App
