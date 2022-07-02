import React from 'react';
import styles from './Create.module.css';

import { useNavigate } from 'react-router-dom';

import CreateInterview from '../../assets/Create.svg';
import Table from './Table';

const Create = () => {

    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        navigate('/access');
    }

    return (
        <>
            <div className="step mt-5 gap-5 d-flex justify-content-center mx-auto">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <button className={`${styles.btnOne} breadcrumb-item`} aria-current="page">Create</button>
                    </ol>
                </nav>
                <span className={styles.line}></span>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <button className={`${styles.btnTwo} breadcrumb-item`} aria-current="page">Access</button>
                    </ol>
                </nav>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <button className={`${styles.btnThree} breadcrumb-item`} aria-current="page">Notification & Message</button>
                    </ol>
                </nav>
            </div>

            <div className={`${styles.container} container align-items-center my-3 p-4 rounded-2 bg-light`}>
                <div className="row">
                    <div className="col-md-6">
                        <img className={`${styles.img} img-fluid`} src={CreateInterview} alt="create" />
                    </div>
                    <div className="col-md-6">
                        <form>
                            <h2 className='text-center my-4 text-warning'>Create Interview</h2>
                            <div className="mb-3">
                                <label htmlFor="detail" className="form-label fw-bold">Company / Institute Name</label>
                                <input type="text" className="form-control" id="detail" placeholder='Enter name' aria-describedby="detailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="track" className="form-label fw-bold">Track</label>
                                <select className="form-select" id='track' aria-label="Default select example">
                                    <option selected value="Select">Select...</option>
                                    <option value="Learn">Learn</option>
                                    <option value="Hire">Hire</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="positionCode" className="form-label fw-bold">Test Code</label>
                                <input type="number" className="form-control" placeholder='Enter code' id="positionCode" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="mode" className="form-label fw-bold">Interview Mode</label>
                                <select className="form-select" id='mode' aria-label="Default select example">
                                    <option selected value="Select">Select...</option>
                                    <option value="Audio">Audio</option>
                                    <option value="Video">Video</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="job" className="form-label fw-bold">Job Title / Role</label>
                                <input type="text" className="form-control" placeholder='Your role' id="job" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="question" className="form-label fw-bold">Total Question: <span className='badge badge bg-warning'>No.</span></label>
                                <div className="d-grid">
                                    {/* <input type="number" className="form-control" id="question" /> */}
                                    <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">Add</button>
                                </div>
                            </div>
                            <div className="d-grid col-5 ms-auto mt-4">
                                <button onClick={handleClick} type="submit" className="btn btn-dark">Save and Continue</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Table />
        </>
    )
}

export default Create;