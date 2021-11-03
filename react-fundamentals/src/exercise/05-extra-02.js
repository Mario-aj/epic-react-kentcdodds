import * as React from 'react'
import '../box-styles.css'

const Box = ({children, style, size}) => (
  <div className={`box box--${size}`} style={{fontStyle: 'initial', ...style}}>
    {children}
  </div>
)

function App() {
  return (
    <div>
      <Box size="small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box size="medium" style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>
      <Box size="large" style={{backgroundColor: 'orange'}}>
        large orange box
      </Box>
    </div>
  )
}

export default App
