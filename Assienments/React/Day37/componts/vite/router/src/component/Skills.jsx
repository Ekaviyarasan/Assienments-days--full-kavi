import React from 'react'

function Skills({rl}) {
  return (
    <>
    <div>
        {rl.map((i)=>(
            <div key={i.course}>
                <h2>{i.course}</h2>
                <h3>{i.work}</h3>
                <p>{i.salary}</p>
            </div>

        ))}



    </div>
    
    </>
  )
}

export default Skills