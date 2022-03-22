import './ripple.css'
import React from 'react'
import PropTypes from 'prop-types'
import { clsx } from '../utils'

const Ripple = ({ className, color, size, style, thickness }) => {
  const varStyle = { ...style }
  color && (varStyle['--rps-ripple-color'] = color)
  size && (varStyle['--rps-ripple-size'] = `${size}px`)
  thickness && (varStyle['--rps-ripple-thickness'] = `${thickness}px`)

  return (
    <div className={clsx('rps-ripple', className)} style={varStyle}>
      <div />
      <div />
    </div>
  )
}

Ripple.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  thickness: PropTypes.number,
  size: PropTypes.number,
  style: PropTypes.object
}

export default Ripple
