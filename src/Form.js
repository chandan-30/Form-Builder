import React from 'react'

function Form(props) {
    console.log(props.data)
  return (<>

    <form>
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keydata="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h2 className="modal-title fs-5" id="staticBackdropLabel">Form</h2>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        {props.data}
      </div>
      <div className="modal-footer">
        <button type="cancel" className="btn" data-bs-dismiss="modal">Close</button>
        <button type="submit" className="btn">Submit</button>
      </div>
    </div>
  </div>
</div>
</form>

</>
  )
}

export default Form