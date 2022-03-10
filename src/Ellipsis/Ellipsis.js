import React from 'react'
import styles from './styles.css'

const Ellipsis = () => (
  <>
    <style>{`${styles}`}</style>
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </>
)

export default Ellipsis
