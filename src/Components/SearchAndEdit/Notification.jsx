import React from 'react'
import styles from './Notification.module.css'

const notification = () => {
  return (
    <>
     <div
        className="modal fade"
        id="exampleModal2"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className={`${styles.title} modal-header`}>
              <h5 className="modal-title" id="exampleModalLabel">
                NOTIFICATIONS & MESSAGES
              </h5>
            </div>
            <div className="modal-body">
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <div className={`${styles.row1} row`}>
                        <div className={`${styles.col3} col-12`}>Inerview Notifications</div>
                    </div>
                  </div>
                  <div className="col-6">
                  <div className={`${styles.row1} row`}>
                        <div className={`${styles.col3} col-12`}>Bot Messages</div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className={`${styles.row1} row`}>
                        <div className={`${styles.col1} col-6`}>Report sent to email-1</div>
                        <div className={`${styles.col2} col-6`}></div>
                    </div>
                  </div>
                  <div className="col-6">
                  <div className={`${styles.row1} row`}>
                        <div className={`${styles.col1} col-6`}>Interaction Welcome Message</div>
                        <div className={`${styles.col2} col-6`}></div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className={`${styles.row1} row`}>
                        <div className={`${styles.col1} col-6`}>Report sent to email-2</div>
                        <div className={`${styles.col2} col-6`}></div>
                    </div>
                  </div>
                  <div className="col-6">
                  <div className={`${styles.row1} row`}>
                        <div className={`${styles.col1} col-6`}>Interaction Instruction Message</div>
                        <div className={`${styles.col2} col-6`}></div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                  <div className={`${styles.row1} row`}>
                        <div className={`${styles.col1} col-6`}>Report sent to user</div>
                        <div className={`${styles.col2} col-6`}>No</div>
                    </div>
                  </div>
                  <div className="col-6">
                  <div className={`${styles.row1} row`}>
                        <div className={`${styles.col1} col-6`}>Interaction Completion Message</div>
                        <div className={`${styles.col2} col-6`}></div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6"></div>
                  <div className="col-6">
                  <div className={`${styles.row1} row`}>
                        <div className={`${styles.col1} col-6`}>Bot Warning Message</div>
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

export default notification
