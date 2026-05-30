import React from 'react'
import { Arasan } from './Arasan'
import ReValue from './ReValue'

function Usecon() {
    
  return (
    <>
    <Arasan.Provider value="hi gys naa oru muttal">

        <ReValue/>
    </Arasan.Provider>
    
    </>
  )
}

export default Usecon