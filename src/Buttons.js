import React from 'react'
import {useDrag} from 'react-dnd'

function Buttons(props) {
    const [{ isDragging}, drag] = useDrag(() =>({
        type: "button",
        item: {name: props.name, id: props.label},
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        })
    }))

  return (
    <button ref={drag} type="button" style={{marginTop:'10px', border: isDragging? '5px solid grey': '0px' }} className="btn">{props.label}</button>
  )
}

export default Buttons