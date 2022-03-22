import './circle.css'
import React from 'react'
import PropTypes from 'prop-types'
import { clsx } from '../utils'

const Circle = ({ className, color, size, style }) => {
  const varStyle = { ...style }
  color && (varStyle['--rps-circle-color'] = color)
  size && (varStyle['--rps-circle-size'] = `${size}px`)

  return (
    <div className={clsx('rps-circle', className)} style={varStyle}>
      <div />
    </div>
  )
}

Circle.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object
}

export default Circle
