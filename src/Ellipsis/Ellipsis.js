import './ellipsis.css'
import React from 'react'
import { clsx } from '../utils'
import PropTypes from 'prop-types'

const Ellipsis = ({ className, color, size, style }) => {
  const varStyle = { ...style }
  color && (varStyle['--rps-ellipsis-color'] = color)
  size && (varStyle['--rps-ellipsis-size'] = `${size}px`)

  return (
    <div className={clsx('rps-ellipsis', className)} style={varStyle}>
      <div />
      <div />
      <div />
      <div />
    </div>
  )
}

Ellipsis.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object
}

export default Ellipsis
