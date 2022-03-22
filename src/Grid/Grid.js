import './grid.css'
import React from 'react'
import PropTypes from 'prop-types'
import { clsx } from '../utils'

const Grid = ({ className, color, size, style }) => {
  const varStyle = { ...style }
  color && (varStyle['--rps-grid-color'] = color)
  size && (varStyle['--rps-grid-size'] = `${size}px`)

  return (
    <div className={clsx('rps-grid', className)} style={varStyle}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  )
}

Grid.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object
}

export default Grid
