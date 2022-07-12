import React from "react";
import styles from "./Total.module.css";

const Total = () => {
  return (
    <>
      <div>
        <h3 className={styles.heading}>TOP INTERVIEW REPORT</h3>
        <div className="d-flex">
          <div className={`${styles.col} bg-dark border text-white p-2`}>
            Name
          </div>
          <div className={`${styles.col} bg-dark border text-white p-2`}>
            Likeability
          </div>
          <div className={`${styles.col} bg-dark border text-white p-2`}>
            Charm
          </div>
          <div className={`${styles.col} bg-dark border text-white p-2`}>
            Confidence
          </div>
          <div className={`${styles.col} bg-dark border text-white p-2`}>
            Energy
          </div>
          <div className={`${styles.col} bg-dark border text-white p-2`}>
            Fluency
          </div>
          <div className={`${styles.col} bg-dark border text-white p-2`}>
            Content
          </div>
          <div className={`${styles.col} bg-dark border text-white p-2`}>
            Overall
          </div>
          <div className={`${styles.col} bg-dark border text-white p-2`}>
            Resume
          </div>
        </div>
        <div className="d-flex">
          <div className={`${styles.col} border p-2`}>Name1</div>
          <div className={`${styles.col} border p-2`}>A</div>
          <div className={`${styles.col} border p-2`}>A</div>
          <div className={`${styles.col} border p-2`}>A</div>
          <div className={`${styles.col} border p-2`}>A</div>
          <div className={`${styles.col} border p-2`}>A</div>
          <div className={`${styles.col} border p-2`}>A</div>
          <div className={`${styles.col} border p-2`}>A</div>
          <div className={`${styles.col} border p-2`}>A</div>
        </div>
        <div className="d-flex">
          <div className={`${styles.col} border p-2`}>Name2</div>
          <div className={`${styles.col} border p-2`}>B</div>
          <div className={`${styles.col} border p-2`}>B</div>
          <div className={`${styles.col} border p-2`}>A</div>
          <div className={`${styles.col} border p-2`}>B</div>
          <div className={`${styles.col} border p-2`}>A</div>
          <div className={`${styles.col} border p-2`}>A</div>
          <div className={`${styles.col} border p-2`}>A</div>
          <div className={`${styles.col} border p-2`}>A</div>
        </div>
        <div className="d-flex">
          <div className={`${styles.col} border p-2`}>Name3</div>
          <div className={`${styles.col} border p-2`}>A</div>
          <div className={`${styles.col} border p-2`}>B</div>
          <div className={`${styles.col} border p-2`}>B</div>
          <div className={`${styles.col} border p-2`}>A</div>
          <div className={`${styles.col} border p-2`}>A</div>
          <div className={`${styles.col} border p-2`}>A</div>
          <div className={`${styles.col} border p-2`}>A</div>
          <div className={`${styles.col} border p-2`}>A</div>
        </div>
        <div className="d-flex">
          <div className={`${styles.col} border p-2`}>Name4</div>
          <div className={`${styles.col} border p-2`}>B</div>
          <div className={`${styles.col} border p-2`}>B</div>
          <div className={`${styles.col} border p-2`}>A</div>
          <div className={`${styles.col} border p-2`}>B</div>
          <div className={`${styles.col} border p-2`}>B</div>
          <div className={`${styles.col} border p-2`}>B</div>
          <div className={`${styles.col} border p-2`}>B</div>
          <div className={`${styles.col} border p-2`}>B</div>
        </div>
        <div style={{ marginTop: "30px" }}>
          <p className={styles.para1}>
            Please let us know any clarifications needed. The description of the
            variables is available below in the following pages.
          </p>
          <p className={styles.para1}>Best Regards,</p>
          <p className={styles.para1}>Team TalentSumo.</p>
        </div>
      </div>
    </>
  );
};

export default Total;
