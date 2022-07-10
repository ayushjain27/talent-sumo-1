import React from "react";
import styles from "./TopInterview.module.css";

const TopInterview = () => {
  return (
    <>
    <div>
      <h3 className={styles.heading}>TOP INTERVIEW REPORT</h3>
      <div>
        <div class={`${styles.row} row`}>
          <div class={`${styles.col} col-2`}>Questions</div>
          <div class={`${styles.col} col-2`}>Likeability</div>
          <div class={`${styles.col} col-2`}>Charm</div>
          <div class={`${styles.col} col-2`}>Confidence</div>
          <div class={`${styles.col} col-2`}>Energy</div>
          <div class={`${styles.col} col-2`}>Fluency</div>
        </div>
        <div class={`${styles.row} row`}>
          <div class={`${styles.col1} col-2`}>Q1</div>
          <div class={`${styles.col1} col-2`}>A</div>
          <div class={`${styles.col1} col-2`}>A</div>
          <div class={`${styles.col1} col-2`}>A</div>
          <div class={`${styles.col1} col-2`}>A</div>
          <div class={`${styles.col1} col-2`}>A</div>
        </div>
        <div class={`${styles.row} row`}>
          <div class={`${styles.col1} col-2`}>Q2</div>
          <div class={`${styles.col1} col-2`}>B</div>
          <div class={`${styles.col1} col-2`}>B</div>
          <div class={`${styles.col1} col-2`}>A</div>
          <div class={`${styles.col1} col-2`}>B</div>
          <div class={`${styles.col1} col-2`}>A</div>
        </div>
        <div class={`${styles.row} row`}>
          <div class={`${styles.col1} col-2`}>Q3</div>
          <div class={`${styles.col1} col-2`}>A</div>
          <div class={`${styles.col1} col-2`}>B</div>
          <div class={`${styles.col1} col-2`}>B</div>
          <div class={`${styles.col1} col-2`}>A</div>
          <div class={`${styles.col1} col-2`}>A</div>
        </div>
        <div class={`${styles.row} row`}>
          <div class={`${styles.col1} col-2`}>Q4</div>
          <div class={`${styles.col1} col-2`}>B</div>
          <div class={`${styles.col1} col-2`}>B</div>
          <div class={`${styles.col1} col-2`}>A</div>
          <div class={`${styles.col1} col-2`}>B</div>
          <div class={`${styles.col1} col-2`}>B</div>
        </div>
      </div>
      <div style={{marginTop: '30px'}}>
        <p className={styles.para1}>
          In the rest of the pages of this report their other non-evaluative
          parameters that are reported for informational purposes only.
        </p>
        <p className={styles.para1}>
          The Appendix section of the report contains the transcript of the
          answers that are provided by the candidate. Also please note that the
          candidate did/did not provide their resume during the interaction. The
          resume was scored and categorized as “7/10” for the posted job
          requirement.
        </p>
        <p className={styles.para1}>Best Regards,</p>
        <p className={styles.para1}>Team TalentSumo.</p>
      </div>
    </div>
    </>
  );
};

export default TopInterview;
