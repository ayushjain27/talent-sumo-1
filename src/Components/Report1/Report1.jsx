import React from 'react'
import styles from './Report1.module.css' 
import Logo1 from './Logo1'
import TopCandidates from './TopCandidates'
import Total from './Total'

const Report1 = () => {
  return (
    <>
        <div className="container p-3 rounded-2 my-3 bg-light">
            <Logo1 />
            <TopCandidates />
            <Total />
      </div>
    </>
  )
}

export default Report1
