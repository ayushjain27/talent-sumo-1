import React from "react";
import styles from './AccessDetails.module.css'

const accessdetails = () => {
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal1"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className={`${styles.title} modal-header`}>
              <h5 className="modal-title" id="exampleModalLabel">
                ACCESS DETAILS
              </h5>
            </div>
            <div className="modal-body">
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <div className={`${styles.row1} row`}>
                        <div className={`${styles.col1} col-6`}>Access Code</div>
                        <div className={`${styles.col2} col-6`}>7812</div>
                    </div>
                  </div>
                  <div className="col-6">
                  <div className={`${styles.row1} row`}>
                        <div className={`${styles.col1} col-6`}>Channel</div>
                        <div className={`${styles.col2} col-6`}></div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className={`${styles.row1} row`}>
                        <div className={`${styles.col1} col-6`}>Who can initiate</div>
                        <div className={`${styles.col2} col-6`}>Both</div>
                    </div>
                  </div>
                  <div className="col-6">
                  <div className={`${styles.row1} row`}>
                        <div className={`${styles.col1} col-6`}>Collect Cadidate ID</div>
                        <div className={`${styles.col2} col-6`}>Yes</div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className={`${styles.row1} row`}>
                        <div className={`${styles.col1} col-6`}>Expiry Date</div>
                        <div className={`${styles.col2} col-6`}>30/7/12</div>
                    </div>
                  </div>
                  <div className="col-6">
                  <div className={`${styles.row1} row`}>
                        <div className={`${styles.col1} col-6`}>Cadidate Feedback Message</div>
                        <div className={`${styles.col2} col-6`}>Yes</div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className={`${styles.row1} row`}>
                        <div className={`${styles.col1} col-6`}>Phone numbers</div>
                        <div className={`${styles.col2} col-6`}>Link</div>
                    </div>
                  </div>
                  <div className="col-6">
                  <div className={`${styles.row1} row`}>
                        <div className={`${styles.col1} col-6`}>Voice Match</div>
                        <div className={`${styles.col2} col-6`}>Yes</div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className={`${styles.row1} row`}>
                        <div className={`${styles.col1} col-6`}>Collect Email</div>
                        <div className={`${styles.col2} col-6`}>Yes</div>
                    </div>
                  </div>
                  <div className="col-6">
                  <div className={`${styles.row1} row`}>
                        <div className={`${styles.col1} col-6`}>Collect Resume</div>
                        <div className={`${styles.col2} col-6`}>Yes</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default accessdetails;
