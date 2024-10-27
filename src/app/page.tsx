import React from 'react'
import Props from './props/page'

const Card = () => {
  return (
    <>
      <Props name='Rabia ' age={21} rollno={12345} day='Monday'/>
      <Props name='Mubashra' age={20} rollno={12233} day='Tuesday'/>
      <Props name='Amna ' age={22} rollno={11223} day='Saturday'/>
    </>
  )
}

export default Card