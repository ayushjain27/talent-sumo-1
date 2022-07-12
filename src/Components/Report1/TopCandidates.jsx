import React from "react";
import styles from "./TopCandidates.module.css";

const TopCandidates = () => {
  return (
    <>
      <div>
        <h3 className={styles.heading}>Top candidates of the Month Report</h3>
        <div className={styles.subheading}>
          <div className="row">
            <div className={`${styles.col} col-6`}><h5>Track: Hiring</h5> </div>
            <div className={`${styles.col} col-6`}><h5>Month: June 2022</h5></div>
          </div>
          <div className="row">
            <div className={`${styles.col} col-6`}><h5>Company:</h5></div>
            <div className={`${styles.col} col-6`}><h5>Position Code:</h5></div>
          </div>
          <div className="row">
            <div className={`${styles.col} col-6`}><h5>Position:</h5></div>
          </div>
        </div>
        <p className={styles.para}>
          Al algorithms rate each answer of the candidate to distribute them
          into four groups or cohorts, for each of the parameters we are
          tracking.
          <h6 className={styles.cohort}>Cohort A: Top 25% of the responses</h6>
          <h6 className={styles.cohort}>Cohort B: Top 50% of the responses</h6>
          <h6 className={styles.cohort}>
            Cohort C: Bottom 50% of the response
          </h6>
          <h6 className={styles.cohort}>
            Cohort D: Bottom 25% of the response.
          </h6>
          These cohorts provide a reasonable level of estimate in terms of what
          separates top interview performers from the rest. Our approach is not
          to provided micro ratings of each parameter but a high-level
          comparison that provides a competitive analysis of where the
          candidates could understand their relative rankings.
          <p className={styles.para2}>
            <span className={styles.points}>Resume Ratings: </span> The resume
            is compared against the job description and/or the standard job
            description to arrive at a matching score that shows that how fit is
            the candidate for the given job given his background. We recommend a
            matching score of minimum 6/10 in order to move the candidate
            forward in the process.
          </p>
          <p className={styles.para2}>
            <span className={styles.points}>Interview Ratings: </span> The
            various skill parameter scores are aggregated to generate overall
            model recommendation about the relative positioning of the
            candidate. The ratings provided by the model are "NEVER" "MAY BE",
            "SHORTLISTED", "MUST BE". The ratings are self explanatory and
            provide a quick snapshot of the overall fit and potential of the
            candidate.
          </p>
        </p>
      </div>
      <div>
        <h4 className={styles.subheading1}>Message: </h4>
        <p className={styles.para1}>Dear Recruiter/User, </p>
        <p className={styles.para1}>
          This report prepared by our AI models list the top three candidates
          that match this job. This is a proprietary bend of background,
          cultural fit and and interview performance. The top 3 candidates are:
        </p>
        <p className={styles.para3}>Can A</p>
        <p className={styles.para3}>Can B</p>
        <p className={styles.para3}>Can C</p>
        <p className={styles.para1}>
          Below is the list of all candidates that attempted the interaction and
          their scores:
        </p>
      </div>
    </>
  );
};

export default TopCandidates;
