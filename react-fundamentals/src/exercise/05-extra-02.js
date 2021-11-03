import * as React from 'react'
import '../box-styles.css'

const Box = ({style, size = '', ...otherProps}) => {
  const sizeClassName = size ? `box--${size}` : ''

  return (
    <div
      className={`box ${sizeClassName}`}
      style={{fontStyle: 'initial', ...style}}
      {...otherProps}
    />
  )
}

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
