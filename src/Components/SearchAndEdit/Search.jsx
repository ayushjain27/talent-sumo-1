import React from "react";
import styles from "./Search.module.css";

const Search = () => {
  return (
    <>
   <div className={`${styles.cardSection} card bg-light`}>
        <div className={`${styles.name} m-3 `}>Access No: <input className={`${styles.input} p-1`} type="number" placeholder="Enter Access Number"  /></div>
        <div className={`${styles.or} `}>OR</div>
        <div className={`${styles.name} m-3`}> Company Name: <input className={`${styles.input} p-1`} type="text"  placeholder="Enter Company Name"/></div>
    </div>

    <div className={`${styles.container} container mt-3 mb-5 rounded p-1`}>
    <nav>
    <div className="nav nav-tabs mb-3 d-flex justify-content-between mt-3 m-1" id="nav-tab" role="tablist">
      <button className="nav-link active" id="nav-company-tab" data-bs-toggle="tab" data-bs-target="#nav-company" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Company</button>
      <button className="nav-link" id="nav-Access-tab" data-bs-toggle="tab" data-bs-target="#nav-Access" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Access#</button>
      <button className="nav-link" id="nav-Questions-tab" data-bs-toggle="tab" data-bs-target="#nav-Questions" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Questions</button>
     <button className="nav-link" id="nav-AccessDetails-tab" data-bs-toggle="tab" data-bs-target="#nav-AccessDetails" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Access Details</button>
      <button className="nav-link" id="nav-NotesMessages-tab" data-bs-toggle="tab" data-bs-target="#nav-NotesMessages" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Notice & Message</button>
    </div>
    </nav>
    <div className="tab-content m-1" id="nav-tabContent">
    <div className="tab-pane fade show active" id="nav-company" role="tabpanel" aria-labelledby="nav-company-tab">a</div>
    <div className="tab-pane fade" id="nav-Access" role="tabpanel" aria-labelledby="nav-Access-tab">b</div>
    <div div className="tab-pane fade" id="nav-Questions" role="tabpanel" aria-labelledby="nav-Questions-tab">c</div>
    <div className="tab-pane fade" id="nav-AccessDetails" role="tabpanel" aria-labelledby="nav-AccessDetails-tab">d</div>
    <div className="tab-pane fade" id="nav-NotesMessages" role="tabpanel" aria-labelledby="nav-NotesMessages-tab">e</div>
    </div>
   </div>
    </>
  );
};

export default Search;
