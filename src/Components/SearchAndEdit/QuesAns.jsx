import React from 'react'
import styles from './QuesAns.module.css'

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
            <div class={`${styles.row} row g-3 align-items-center`}>
  <div class="col-3">
    <label for="question" class="col-form-label">Question 1: </label>
  </div>
  <div class="col-9">
    <input type="text" id="question" class="form-control" aria-describedby="passwordHelpInline" />
  </div>
</div>
            <div class={`${styles.row} row g-3 align-items-center`}>
  <div class="col-3">
    <label for="answer" class="col-form-label">Answer : </label>
  </div>
  <div class="col-9">
    <input type="text" id="answer" class="form-control" aria-describedby="passwordHelpInline" />
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
