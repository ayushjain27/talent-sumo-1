import React from "react";
import styles from "./General.module.css";

const General = () => {
  return (
    <>
      <div>
        <h3 className={styles.heading}>
          General Observed Variables (Not Directly rated)
        </h3>
        <div>
          <h4 className={styles.subheading}><i class="fa-solid fa-clock"></i> Pace</h4>
          <div className={styles.para}>
            <h5 className={styles.topic}>Words per minute: xx words/minute</h5>
            <h5 className={styles.topic}>Ideal words per minute: xx words/minute</h5>
            <p  className={styles.topic}>
              Takeaway: Speaking too slowly or too quickly denotes nervousness
              on part of the candidate. Please note that this is the average
              pace across the entire interview. This will help you determine if
              you need to control the pace as you go through the interviews. (We
              have provided an ideal benchmark range for comparison purposes)
            </p>
          </div>
        </div>
        <div>
          <h4 className={styles.subheading}><i class="fa-solid fa-bolt-lightning"></i> Power Words</h4>
          <div className={styles.para}>
            <h5 className={styles.topic}>Power word density: 2 per minute</h5>
            <h5 className={styles.topic}>Ideal power word density: 5-6 per minute</h5>
            <p  className={styles.topic}>
              Takeaway: Certain words used in the interview indicate your
              confidence or the lack of it. The top interview advice to use
              quantified examples and using positive affirmative words are
              proven to work in the real-life scenarios. If you are an eligible
              candidate, you will also receive a bank of power words that when
              added to interviews make them sound powerful and authoritative.
              The current metric extracts the same from your speech.
            </p>
          </div>
        </div>
        <div>
          <h4 className={styles.subheading}><i class="fa-solid fa-volume-high"></i> Volume & Pitch</h4>
          <div className={styles.para}>
            <h5 className={styles.topic}>Volume Scale (0-100): 60 Percentile</h5>
            <h5 className={styles.topic}>Ideal Volume Scale: 70-80 Percentile</h5>
            <h5 className={styles.topic}>Pitch Range: 20-40 Percentile</h5>
            <h5 className={styles.topic}>Ideal Pitch Range: 30-80 Percentile</h5>
            <p  className={styles.topic}>
              Takeaway: The volume, pitch and voice modulation make it easier
              for us to be understood by others easily. Scientific research has
              established the boundaries of the voice and pitch that are sounds
              likeable to the human ears. The values above indicate whether your
              volume and pitch are within the range or are outside of it.
            </p>
          </div>
        </div>
        <div>
          <h4 className={styles.subheading}><i class="fa-solid fa-cloud"></i> Word Cloud</h4>
          <div className={styles.para}>
            <p  className={styles.topic}>
              Takeaway: Please take a moment to reflect the words you used in
              the interview. This also reflects how the interview perceives you
              are is likely to remember about you, once the interview is over.
              Are these the power words that are related to the subject matter
              of the interview that presents you as strong candidate? Please
              take a moment to reflect and craft alternate answers if these are
              the not the words/ context you wish to convey.
            </p>
            <div>
                <img className={styles.img} src="./images/Cloud.jpeg" alt="" />
            </div>
          </div>
        </div>
        <div>
          <h4 className={styles.subheading}><i class="fas fa-smile"></i> Sentiment Analysis</h4>
          <div className={styles.para}>
            <h5 className={styles.topic}>Aggregate dominant Sentiment: Happy</h5>
            <p  className={styles.topic}>
              Takeaway: This shows how your emotions are understood by the
              people. While most candidates display positive emotions naturally
              in few cases it might be negative. Being a responsible AI
              organization, we do not recommend any adverse actions based on it
              – only something should be further investigated.
            </p>
          </div>
        </div>
        <div>
          <h4 className={styles.subheading}><i class="fas fa-ribbon"></i> Gesture</h4>
          <div className={styles.para}>
            <h5 className={styles.topic}>Gesture Score: 8/10</h5>
            <p  className={styles.topic}>
              Takeaway: Hand gestures play an important part in your overall
              personality. Due to limitations of the camera recording it may not
              be always possible to capture them depending on how you have
              recorded your own interview. A good score indicates you have used
              your hand gestures to positively reinforce your interview answers.
              Consider using your hands naturally like in any other live
              conversation even for online interviews. If this score is blank
              for you – in indicates you have opted for an audio only interview.
            </p>
          </div>
        </div>
        <div style={{ margin: "18px 0px" }}>
          <p className={styles.para1}>
            <div className={styles.points}>Content Ratings: </div>
            We evaluate the content of the responses not only by the best
            possible answer to that question but using our context cloud we are
            further enhancing the accuracy of what of answers might be relevant
            to what kind of situation. Any candidate taking time to understand
            and align to the context in which he is operating and using industry
            specific terminologies to articulate his point of view is likely to
            do well in the content ratings. The top cohort rating (A) on more
            than 75% of the questions denotes high degree of proficiency and
            accuracy in his answers.
          </p>
        </div>
        <div>
          <div class={`${styles.row} row`}>
            <div class={`${styles.col} col-6`}>Content Match Score</div>
            <div class={`${styles.col} col-6`}>Meaning</div>
          </div>
          <div class={`${styles.row} row`}>
            <div class={`${styles.col1} col-6`}>Greater than 90</div>
            <div class={`${styles.col1} col-6`}>
              Extremely precise & relevant answer
            </div>
          </div>
          <div class={`${styles.row} row`}>
            <div class={`${styles.col1} col-6`}>70 to 90 percent</div>
            <div class={`${styles.col1} col-6`}>
              Satisfactory answer with key points covered
            </div>
          </div>
          <div class={`${styles.row} row`}>
            <div class={`${styles.col1} col-6`}>50 to 70 percent</div>
            <div class={`${styles.col1} col-6`}>
              Highlights key aspects but is not complete
            </div>
          </div>
          <div class={`${styles.row} row`}>
            <div class={`${styles.col1} col-6`}>Less than 50 percent</div>
            <div class={`${styles.col1} col-6`}>Missing key aspects</div>
          </div>
        </div>
        <div>
          <h4 className={styles.subheading1}>
            Question Specific Content Ratings :
          </h4>
          <div class={`${styles.row} row`}>
            <div class={`${styles.col} col-6`}>Question#</div>
            <div class={`${styles.col} col-6`}>Content Match Score</div>
          </div>
          <div class={`${styles.row} row`}>
            <div class={`${styles.col1} col-6`}>1</div>
            <div class={`${styles.col1} col-6`}>60%</div>
          </div>
          <div class={`${styles.row} row`}>
            <div class={`${styles.col1} col-6`}>2</div>
            <div class={`${styles.col1} col-6`}>70%</div>
          </div>
          <div class={`${styles.row} row`}>
            <div class={`${styles.col1} col-6`}>3</div>
            <div class={`${styles.col1} col-6`}>50%</div>
          </div>
          <div class={`${styles.row} row`}>
            <div class={`${styles.col1} col-6`}>4</div>
            <div class={`${styles.col1} col-6`}>80%</div>
          </div>
        </div>
          <h4 className={styles.subheading1}>
            Overall Content Rating : <span className={styles.points1}>PASS</span>
          </h4>
      </div>
    </>
  );
};

export default General;
