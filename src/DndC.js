import React, { useEffect } from 'react'
import { useState } from "react";
import { useDrop } from 'react-dnd'
import InputTag from './InputTag';
import JSONPretty from 'react-json-pretty';
import Form from './Form';

function DndC() {

    let json;
    const [js, setjson] = useState({})
    const [board, setBoard] = useState([]);
    const [stack,setStack] = useState([])

    let inputList = board.map((tag, index) => {
        return <InputTag label={tag.label} name={tag.name} key={index}></InputTag>
    })

    const [{isOver}, drop] = useDrop(() => ({
      accept: "button",
      drop: (item) => addInput(item.name, item.id),
      collect: (monitor) => ({
        isOver: monitor.isOver(),
      })
    }))
  
    const addInput = (name,label) => {
      setBoard(
        (board) =>  [...board,{
            "name": name,
            "label": label,
            "required": 'required'
        }]
        
      )

    }
    
    let undo = () => {
        if(board.length){
            setStack((stack) => [...stack, board[board.length - 1]])
            setBoard((board) => (board.slice(0,-1)))
        }
        
        
    }

    let redo = () => {
        if(stack.length){
            let _redo = stack[stack.length-1]
            setStack((stack) => (stack.slice(0,-1)))
            setBoard((board) => [...board, _redo])
        }
        
    }

    let convert = (board) => {
        
            let res = {};
            for(let i = 0; i<board.length; i++){
                res[i] = board[i]
        }
        setjson(res)
        return res
    
    }

    useEffect(() => {
        json = convert(board)
        json = JSON.stringify(json)
        
      }, [board])

  return (
    <>
        
        <div className='col-7 dnd' ref={drop}>
            {
                inputList
            }
        </div>
        
        <div className="row btns" style={{marginTop: '50px'}}>
            <div className="col-4 btn-group-vertical" style={{maxHeight:'30px'}}>
                <button type="button" style={{marginTop: '10px'}} className="btn" onClick={undo}>Undo</button>
                <button type="button" style={{marginTop: '10px'}} className="btn" onClick={redo}>redo</button>
                <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    View
                </button>
                
            </div>
            <div className="col-8">
            <h3>JSON Output:</h3>
            <br></br>
            <JSONPretty id="json-pretty" data={js} ></JSONPretty>
            
            </div>
            <Form data={inputList}></Form>
        </div>
    </>
  )
}

export default DndC