/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./CardData.css";

const CardData = ({ event }) => {
  const {
    confName,
    confStartDate,
    confEndDate,
    venue,
    entryType,
    confUrl,
    imageURL,
  } = event;
  return (
    <>
      <div className="conatiner">
        <center>
          <div className="card">
            <div className="card-body">
              <div>
                <span className="conference">{entryType}</span>
              </div>
              <div className="card-title-group">
                <h6 className="conf-name">{confName}</h6>
                <div className="date">
                  Conference Start Date : {confStartDate}
                  <br />
                  Conference End Date : {confEndDate}
                </div>
              </div>

              <img className="imgurl" src={imageURL} alt={confName} />
              <div className="card-text">
                <span className="venue">Venue: {venue}</span>
              </div>
              <div className="footer">
                <p className="">
                  Link:
                  <span>
                    <a href={confUrl} className="card-link">
                      Click here
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </center>
      </div>
    </>
  );
};

export default CardData;
