import React, { useState } from 'react'

const Table = (props) => {
    const [noOfRows, setNoOfRows] = useState(1)
    const style = {
        height: '150px',
        width: '100%',
        overflow: 'auto',
    } 
    return (
        <>

<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Total Questions: <input style={{width: '50px', borderRadius: '12px'}} type="text" /></h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div style={style}>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Question</th>
                    <th scope="col">Answer(Option)</th>
                    <th scope="col">Answer</th>
                </tr>
            </thead>
            <tbody>
                {[...Array(noOfRows)].map(() => {

                    return (
                        <tr>
                            <td><label htmlFor="user" className="form-label"></label>
                                <input type="text" className="form-control mx-1" id="user" aria-describedby="emailHelp" /></td>
                            <td><label htmlFor="user" className="form-label"></label>
                                <input type="text" className="form-control mx-1" id="user" aria-describedby="emailHelp" /></td>
                            <td><label htmlFor="user" className="form-label"></label>
                                <input type="text" className="form-control mx-1" id="user" aria-describedby="emailHelp" /></td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </div>

      </div>
      <div className="modal-footer d-flex justify-content-between">
        <div>
<button type="submit" className="btn btn-primary mx-1" onClick={() => setNoOfRows(noOfRows + 1)} >Add</button>
<button type="submit" className="btn btn-primary mx-1" onClick={() => setNoOfRows(noOfRows - 1)} >Delete</button>
</div>
<div>
        <button type="button" className="btn btn-secondary mx-1" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary mx-1">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</div>
    </>    
)
}

export default Table
