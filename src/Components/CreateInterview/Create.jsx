import React from 'react';
import './Create.css';

const Create = () => {
    return (
        <>
            <h1 className='text-center mt-4'>Create Interview</h1>
            <div className="container p-3 rounded-2 bg-light mt-4">
                <form>
                    <div className="mb-3">
                        <label htmlFor="detail" className="form-label fw-bold">Company / Institute Name</label>
                        <input type="text" className="form-control" id="detail" placeholder='Enter name' aria-describedby="detailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="positionCode" className="form-label fw-bold">Position Code</label>
                        <input type="number" className="form-control" placeholder='Enter code' id="positionCode" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="job" className="form-label fw-bold">Job Title / Role</label>
                        <input type="text" className="form-control" placeholder='Your role' id="job" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="question" className="form-label fw-bold">Total Question</label>
                        <input type="number" className="form-control" id="question" />
                    </div>
                    <div className="d-grid col-5 mx-auto mt-4">
                        <button type="submit" className="btn btn-dark">Create</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Create;