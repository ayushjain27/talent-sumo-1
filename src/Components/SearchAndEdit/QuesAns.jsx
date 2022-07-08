import React from 'react'
import styles from './Notification.module.css'

const quesans = () => {
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className={`${styles.title} modal-header`}>
              <h5 className="modal-title" id="exampleModalLabel">
                QUESTIONS
              </h5>
            </div>
            <div className="modal-body">
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <div className={`${styles.row1} row`}>
                      <div className={`${styles.col1} col-6`}>Company / Institute Name</div>
                      <div className={`${styles.col2} col-6`}></div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className={`${styles.row1} row`}>
                      <div className={`${styles.col1} col-6`}>Track</div>
                      <div className={`${styles.col2} col-6`}></div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className={`${styles.row1} row`}>
                      <div className={`${styles.col1} col-6`}>Test Code</div>
                      <div className={`${styles.col2} col-6`}></div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className={`${styles.row1} row`}>
                      <div className={`${styles.col1} col-6`}>Interview Mode</div>
                      <div className={`${styles.col2} col-6`}></div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className={`${styles.row1} row`}>
                      <div className={`${styles.col1} col-6`}>Description</div>
                      <div className={`${styles.col2} col-6`}></div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className={`${styles.row1} row`}>
                      <div className={`${styles.col1} col-6`}>Job Title / Role</div>
                      <div className={`${styles.col2} col-6`}></div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6"></div>
                  <div className="col-6">
                    <div className={`${styles.row1} row`}>
                      <div className={`${styles.col1} col-6`}>Total Questions</div>
                      <div className={`${styles.col2} col-6`}></div>
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
  )
}

export default quesans
