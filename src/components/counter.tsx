import React, { useState } from 'react'

const Counter = ({ initialValue }) => {
  const [clicks, setClicks] = useState(initialValue)

  return (
    <div style={{ margin: '10px 0 20px' }}>
