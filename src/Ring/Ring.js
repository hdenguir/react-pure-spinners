import './ring.css'
import React from 'react'
import PropTypes from 'prop-types'
import { clsx } from '../utils'

const Ring = ({ className, color, size, style, thickness }) => {
  const varStyle = { ...style }
  color && (varStyle['--rps-ring-color'] = color)
  size && (varStyle['--rps-ring-size'] = `${size}px`)
  thickness && (varStyle['--rps-ring-thickness'] = `${thickness}px`)

  return (
    <div className={clsx('rps-ring', className)} style={varStyle}>
      <div />
      <div />
      <div />
      <div />
    </div>
  )
}

Ring.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  thickness: PropTypes.number,
  size: PropTypes.number,
  style: PropTypes.object
}

export default Ring
