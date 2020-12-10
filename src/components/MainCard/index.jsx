/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { AiFillInfoCircle, AiFillWarning } from 'react-icons/ai';

let users = ['Dio Brando', 'Jonathan Joestar', 'Erina Pandleton'];

function MainCard() {
  const [screen, setScreen] = useState(true);

  function handleClick() {
    setScreen(false);
  }

  function handleClick2() {
    setScreen(true);
  }

  return (
    <div className="Wrapper">
      {screen ? (
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
                <button onClick={handleClick}>
                  Buy Rate <AiFillInfoCircle size={24} color="#ffa601" />
                </button>
              </div>
              <div className="type">
                <button>
                  Profit Split <AiFillInfoCircle size={24} color="#ffa601" />
                </button>
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
              <span>Back</span>
            </div>
            <div className="saveAndSubmit">
              <button id="saveButton">Save & Exit</button>
              <button id="skipButton">Skip and Submit</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="BuyCard">
          <div className="cardHeader">
            <div className="textHeader">
              <h4>
                Create a Smart Contract <span>(Optional)</span>
              </h4>
            </div>
            <div className="templateButton">
              <button>Apply template</button>
            </div>
          </div>
          <div className="typeWrapper">
            <div className="typeHeader">
              <div>
                <AiFillWarning size={28} color="#ffa601" />
              </div>
              <div>
                {' '}
                <span>
                  Nice explanation about the Buy Rate smart contract. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
                  diam ac eros vulputate maximus nec et mi.{' '}
                </span>
              </div>
            </div>
          </div>
          <div className="cardBody">
            <div className="cardBodyHeader">
              <h4>Buy Rate Contract#1</h4>
            </div>

            <div className="smartContracts">
              <form action="" className="affiliateForm">
                <span>
                  <label htmlFor="users">Agent / Affiliate Name</label>
                  <select id="users">
                    {users.map((user) => (
                      <option
                        key={user}
                        placeholder="Search for an Agent / Affiliate"
                        value={user}
                      >
                        {user}
                      </option>
                    ))}
                  </select>
                </span>

                <span>
                  <label>Processing Fee</label>
                  <input type="text" placeholder="0.00" />
                </span>

                <span>
                  <label>Transaction Fee</label>
                  <input type="text" placeholder="0.00" />
                </span>
              </form>
            </div>
          </div>
          <div className="cardFooter">
            <div className="backButton">
              <button onClick={handleClick2}>Back</button>
            </div>
            <div className="saveAndSubmit">
              <button id="saveButton">Save & Exit</button>
              <button id="skipButton">Skip and Submit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainCard;
