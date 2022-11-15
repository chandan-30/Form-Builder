import React from 'react'
import formData from './FormData'

import Buttons from './Buttons'

console.log(formData)
function Components() {
    
  return (
    <>
        <div className="col-4 inpbtn btn-group-vertical" role="group" aria-label="Vertical button group">

            {
                formData.map((item, index) => {
                    return <Buttons name={item.type} label={item.label} key={index} keyy={index}></Buttons>
                })
            }
            
        </div>
    </>
  )
}

export default Components