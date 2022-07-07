import React from "react";
import styles from "./Search.module.css";
import AccessDetails from './AccessDetails'
import Notification from './Notification'
import QuesAns from './QuesAns'

const Search = () => {
  return (
    <>
    <div style={{display: 'flex', justifyContent: 'center', textAlign:'center'}} className="mt-2">
      <h3>INTERACTION SEARCH</h3>
    </div>
   <div className={`${styles.cardSection} card bg-dark text-white h-50`}>
        <div className={`${styles.name} mt-3`}>Access Code <input className={`${styles.input} p-1 rounded w-50`} type="number"  /></div>
        <div className={`${styles.or} `}>OR</div>
        <div className={`${styles.name} mb-1`}> Company <input className={`${styles.input} p-1 rounded w-50`} type="text" /></div>
        <div className={`${styles.search} mb-2 mt-3`}>Search  <input className="rounded" type="text" /></div>
    </div>

    <div className={`${styles.container} container mt-3 mb-5 rounded p-3`}>
      <div className="d-flex">
      <div className={`${styles.heading} bg-dark border border-primary text-white p-2`}>Company</div>
      <div className={`${styles.heading} bg-dark border border-primary text-white p-2`}>Access#</div>
      <div className={`${styles.heading} bg-dark border border-primary text-white p-2`}>Questions</div>
      <div className={`${styles.heading} bg-dark border border-primary text-white p-2`}>Access Details</div>
      <div className={`${styles.heading} bg-dark border border-primary text-white p-2`}>Notifications & Messages</div>
      </div>
      <div className="d-flex">
      <div className={`${styles.heading} border border-primary p-2`}>TCS</div>
      <div className={`${styles.heading} border border-primary p-2`}>5678</div>
      <div className={`${styles.heading} border border-primary text-blue p-2`} data-bs-toggle="modal" data-bs-target="#exampleModal">Q&A</div>
      <div className={`${styles.heading} border border-primary text-blue p-2`} data-bs-toggle="modal" data-bs-target="#exampleModal1">AD</div>
      <div className={`${styles.heading} border border-primary text-blue p-2`} data-bs-toggle="modal" data-bs-target="#exampleModal2">N&M</div>
      </div>
    </div>
    <AccessDetails />
    <Notification />
    <QuesAns />
    </>
  );
};

export default Search;
