import React from "react";
import styles from "./Report.module.css";
import Logo from "./Logo";
import Interview from "./Interview";
import TopInterview from "./TopInterview";
import Rating from "./Rating";
import General from "./General";
import Appendix from "./Appendix";

const Report = () => {
  return (
    <>
      <div className="container p-3 rounded-2 my-3 bg-light">
        <Logo />
        <Interview />
        <TopInterview />
        <Rating />
        <General />
        <Appendix />
      </div>
    </>
  );
};

export default Report;
