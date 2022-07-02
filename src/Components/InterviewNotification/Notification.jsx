import React from 'react';
import styles from './Notification.module.css';
import { useNavigate } from 'react-router-dom';

const Notification = () => {
    const navigate = useNavigate();

    const handleBack = (e) => {
        e.preventDefault();
        navigate('/access');
    }

    // const handleSave = (e) => {
    //     e.preventDefault();
    //     navigate('/notification');
    // }
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

            <div className="mt-3">
                <div className="row">
                    <div className={`${styles.left} col-md-6`}>
                        <div className="container mt-3">
                            <h2 className={`${styles.headingNotify} text-center text-white mb-3`}>Interview Notification</h2>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="emailOne" className="form-label fw-bold">Report sent to Email-1</label>
                                    <input type="email" className="form-control" id="emailOne" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="emailTwo" className="form-label fw-bold">Report sent to Email-2</label>
                                    <input type="email" className="form-control" id="emailTwo" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-bold" htmlFor="report">Report sent to User</label>
                                    <select className="form-select" id='report' aria-label="Default select example">
                                        <option selected value="Select">Select...</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <hr />
                                <div className="d-grid mx-auto col-4 mb-3">
                                    <button type="submit" className="btn btn-outline-dark">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className={`${styles.right} col-md-6`}>
                        <div className="container mt-3">
                            <h2 className={`${styles.headingMsg} text-center text-dark mb-3`}>Bot Message</h2>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="welcome" className="form-label fw-bold">Interaction Welcome Message</label>
                                    <textarea class="form-control" id="welcome" rows="2"></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="instruction" className="form-label fw-bold">Interaction Instruction message</label>
                                    <textarea class="form-control" id="instruction" rows="2"></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="completion" className="form-label fw-bold">Interaction Completion Message</label>
                                    <textarea class="form-control" id="completion" rows="2"></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="warning" className="form-label fw-bold">Bot Warning Message</label>
                                    <textarea class="form-control" id="warning" rows="2"></textarea>
                                </div>
                                <hr />
                                <div className="d-grid mx-auto col-4 mb-3">
                                    <button type="submit" className="btn btn-outline-dark">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="container mb-3">
                <div className="d-flex justify-content-between">
                    <button onClick={handleBack} className='btn btn-danger'>Back</button>
                    <button type='submit' className='btn btn-dark'>Save and Continue</button>
                    {/* <button type='submit' onClick={handleSave} className='btn btn-dark'>Save and Continue</button> */}
                </div>
            </div>
        </>
    )
}

export default Notification;