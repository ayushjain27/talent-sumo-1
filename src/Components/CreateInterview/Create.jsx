import React from 'react';
import styles from './Create.module.css';

import { useNavigate } from 'react-router-dom';

import CreateInterview from '../../assets/Create.svg';

const Create = () => {

    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        navigate('/access');
    }

    return (
        <>
            <div className="mt-5 gap-5 d-flex justify-content-center mx-auto">
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
            </div>

            <div className={`${styles.container} container align-items-center mt-3 p-4 rounded-2 bg-light`}>
                <div className="row">
                    <div className="col-md-6">
                        <img className='img-fluid' src={CreateInterview} alt="create" />
                    </div>
                    <div className="col-md-6">
                        <form>
                            <h2 className='text-center my-4'>Create Interview</h2>
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
                            <div className="d-grid col-5 ms-auto mt-4">
                                <button onClick={handleClick} type="submit" className="btn btn-dark">Save and Continue</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Create;