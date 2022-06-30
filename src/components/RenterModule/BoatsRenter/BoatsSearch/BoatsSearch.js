import React from "react";
import "./BoatsSearch.scss";
import SearchIcon from "../../../../Assets/RenterImages/search-icon.png";

const BoatsSearch = () => {
  return (
    <>
      <section className="boats_search_wrapper">
        <div className="custom-container">
          <div className="searc_heading">
            <h1>Search boats</h1>
          </div>
          <div className="boats_search_outer">
            <form className="flex-row">
              <ul>
                <li>
                  <select>
                    <option selected>Category</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </li>
                <li>
                  <select>
                    <option selected>Sort By</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </li>
                <li>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control boat-search-input"
                      placeholder="Search"
                      aria-label="Recipient's username"
                      aria-describedby="button-addon2"
                    />
                    <button className="btn" type="button">
                      <img src={SearchIcon} alt="search" />
                    </button>
                  </div>
                </li>
                <li>
                  <button className="reste_btn">Reset All</button>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default BoatsSearch;
