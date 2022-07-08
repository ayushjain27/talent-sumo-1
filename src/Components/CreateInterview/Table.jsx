import React, { useState } from 'react';
import styles from './Create.module.css'

const Table = () => {
    const [noOfRows, setNoOfRows] = useState(1);
    const style = {
        height: '150px',
        width: '100%',
        overflow: 'auto',
    }
    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Total Questions: <span className='badge badge bg-warning'>No.</span></h5>
                            <button type="button" className={`${styles.close} btn-close`} data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div style={style}>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th className='text-center' scope="col">Question:</th>
                                            <th className='text-center' scope="col">Answer(Optional):</th>
                                            <th className='text-center' scope="col">Answer:</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[...Array(noOfRows)].map(() => {

                                            return (
                                                <tr>
                                                    <td>
                                                        <label htmlFor="user" className="form-label"></label>
                                                        <input type="text" className="form-control mx-1" id="user" />
                                                    </td>
                                                    <td>
                                                        <label htmlFor="user" className="form-label"></label>
                                                        <input type="text" className="form-control mx-1" id="user" />
                                                    </td>
                                                    <td>
                                                        <label htmlFor="user" className="form-label"></label>
                                                        <input type="text" className="form-control mx-1" id="user" />
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <button type="submit" className="btn btn-success me-2" onClick={() => setNoOfRows(noOfRows + 1)} >
                                    Add
                                </button>
                                <button type="submit" className="btn btn-danger" onClick={() => setNoOfRows(noOfRows - 1)} >
                                    Delete
                                </button>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <div>
                                <button type="button" className="btn btn-secondary mx-1" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-warning mx-1">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Table
