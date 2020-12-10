import React from 'react';
import { AiFillWarning } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Profit() {
  const users = ['Dio Brando', 'Jonathan Joestar', 'Erina Pandleton'];

  return (
    <div className="Wrapper">
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
        <div className="contractWrapper">
          <div className="contractHeader">
            <div>
              <AiFillWarning size={28} color="#ffa601" />
            </div>
            <div>
              {' '}
              <span>
                Nice explanation about the Buy Rate smart contract. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Nullam nec diam ac
                eros vulputate maximus nec et mi.{' '}
              </span>
            </div>
          </div>
        </div>
        <div className="cardContractBody">
          <div className="cardBodyHeader">
            <h4>Profit Split Contract #1</h4>
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
        <div className="cardContractFooter">
          <div className="backButton">
            <Link to={'/'}>Cancel</Link>
          </div>
          <div className="saveAndSubmit">
            <button className="addToApp">Add to Application</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profit;
