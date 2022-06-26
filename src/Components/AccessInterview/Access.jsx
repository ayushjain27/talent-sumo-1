import React, { useState } from 'react';
import './Access.css';

import { FaTelegram, FaWhatsapp, FaSlack } from 'react-icons/fa';

const Access = () => {

    const [collectEmail, setCollectEmail] = useState(false);

    const handleClick = () => {
        setCollectEmail(!collectEmail);
    }

    return (
        <>
            <h1 className='text-center mt-3'>Access Interview</h1>
            <div className="container p-3 rounded-2 mt-4">
                <form>
                    <div className="mb-3">
                        <label htmlFor="accessCode" className="form-label fw-bold">Access Code</label>
                        <input type="number" className="form-control" placeholder='Enter access code' id="accessCode" aria-describedby="accessHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="whoInitiate" className="form-label fw-bold">Who can Initiate ?</label>
                        <select className="form-select" id='whoInitiate' aria-label="Default select example">
                            <option selected value="Select">Select...</option>
                            <option value="Bot">Bot</option>
                            <option value="User">User</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="expiryDate" className="form-label fw-bold">Expiry Date</label>
                        <input type="date" className="form-control" id="expiryDate" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phoneNo" className="form-label  fw-bold">Phone Number</label>
                        <input type="number" className="form-control" id="phoneNo" />
                        <div id="emailHelp" className="form-text text-info">We'll never share your contact detail with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="track" className="form-label fw-bold">Track</label>
                        <select className="form-select" id='track' aria-label="Default select example">
                            <option selected value="Select">Select...</option>
                            <option value="Learn">Learn</option>
                            <option value="Hire">Hire</option>
                        </select>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email" className="form-label fw-bold">Collect Email</label>
                        <div className="form-check">
                            <input onClick={handleClick} className="form-check-input" type="radio" name="CollectEmail" id="yes" />
                            <label className="form-check-label" htmlFor="yes">
                                Yes
                            </label>
                            {
                                collectEmail ?
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        <div id="emailHelp" className="form-text text-info">We'll never share your email with anyone else.</div>
                                    </div>
                                    : ""
                            }

                        </div>
                        <div className="form-check">
                            <input onClick={handleClick} className="form-check-input" type="radio" name="CollectEmail" id="no" defaultChecked />
                            <label className="form-check-label" htmlFor="no">
                                No
                            </label>
                        </div>
                    </div>
                    <label htmlFor="channel" className="form-label fw-bold">Channel</label>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="telegram" />
                        <label className="form-check-label" htmlFor="telegram">
                            <FaTelegram className='me-1' style={{ color: '#0088cc' }} />Telegram
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="whatsapp" />
                        <label className="form-check-label" htmlFor="whatsapp">
                            <FaWhatsapp className='me-1' style={{ color: '#25d366' }} />Whatsapp
                        </label>
                    </div>
                    <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" value="" id="slack" defaultChecked />
                        <label className="form-check-label" htmlFor="slack">
                            <FaSlack className='me-1' style={{ color: '#E01E5A' }} />Slack
                        </label>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="candidateID" className="form-label fw-bold">Collect Candidate ID</label>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="CollectID" id="yesId" />
                            <label className="form-check-label" htmlFor="yesId">
                                Yes
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="CollectID" id="noId" defaultChecked />
                            <label className="form-check-label" htmlFor="noId">
                                No
                            </label>
                        </div>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="feedbackMessage" className="form-label fw-bold">Candidate Feedback Message</label>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="CandidateFeedback" id="yesFeedbackMessage" />
                            <label className="form-check-label" htmlFor="yesFeedbackMessage">
                                Yes
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="CandidateFeedback" id="noFeedbackMessage" defaultChecked />
                            <label className="form-check-label" htmlFor="noFeedbackMessage">
                                No
                            </label>
                        </div>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="voiceMatch" className="form-label fw-bold">Voice Match</label>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="VoiceMatch" id="yesMatch" />
                            <label className="form-check-label" htmlFor="yesMatch">
                                Yes
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="VoiceMatch" id="noMatch" defaultChecked />
                            <label className="form-check-label" htmlFor="noMatch">
                                No
                            </label>
                        </div>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="collectResume" className="form-label fw-bold">Collect Resume</label>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="CollectResume" id="yesResume" />
                            <label className="form-check-label" htmlFor="yesResume">
                                Yes
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="CollectResume" id="noResume" defaultChecked />
                            <label className="form-check-label" htmlFor="noResume">
                                No
                            </label>
                        </div>
                    </div>
                    <hr />
                    <div className="d-grid col-5 mx-auto">
                        <button type="submit" className="btn btn-dark">Access</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Access;