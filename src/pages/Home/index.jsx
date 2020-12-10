/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillInfoCircle } from 'react-icons/ai';

function MainCard() {
  return (
    <div className="Wrapper">
      <div className="mainCard">
        <div className="cardHeader">
          <h4>
            Create a Smart Contract<span>(Optional)</span>
          </h4>
        </div>
        <div className="typeWrapper">
          <div className="typeHeader">
            <span>
              Select a contract type{' '}
              <AiFillInfoCircle size={24} color="#ffa601" />
            </span>
          </div>
          <div className="typesContainer">
            <div className="type">
              <Link to={'/buyers'}>
                Buy Rate <AiFillInfoCircle size={24} color="#ffa601" />
              </Link>
            </div>
            <div className="type">
              <Link to={'/profit'}>
                Profit Split <AiFillInfoCircle size={24} color="#ffa601" />
              </Link>
            </div>
          </div>
        </div>
        <div className="cardBody">
          <h4>Applied Smart Contracts</h4>
          <div className="smartContracts">
            <span>
              You haven't created a smart contract yet. Start by selecting a
              contract type above
            </span>
          </div>
        </div>
        <div className="cardFooter">
          <div className="backButton">
            <button>Back</button>
          </div>
          <div className="saveAndSubmit">
            <button className="saveButton">Save & Exit</button>
            <button className="skipButton">Skip and Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCard;
