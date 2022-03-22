import './wave.css'
import React from 'react'
import PropTypes from 'prop-types'
import { clsx } from '../utils'

const Wave = ({ className, color, size, style, thickness }) => {
  const varStyle = { ...style }
  color && (varStyle['--rps-wave-color'] = color)
  size && (varStyle['--rps-wave-size'] = `${size}px`)
  thickness && (varStyle['--rps-wave-thickness'] = `${thickness}px`)

  return (
    <div className={clsx('rps-wave', className)} style={varStyle}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

Wave.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  thickness: PropTypes.number,
  size: PropTypes.number,
  style: PropTypes.object
}

export default Wave
