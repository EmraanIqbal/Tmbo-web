import React,{useState} from "react";
import "./BannerRenter.scss";
import SearchIcon from "../../../../Assets/RenterImages/search-icon.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const BannerRenter = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <div className="banner-main-renter">
        <div className="custom-container">
          <h1 className="banner-heding">
            Get news, inspiration, <br /> useful tips and more from TMBO
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          </p>
          <div className="banner-search-section">
            <form className="d-flex flex-row justify-content-between">
              <input
                className="banner-input"
                type="text"
                placeholder="Location"
              ></input>
              {/* <input
                className="banner-input"
                type="text"
                placeholder="Date"
              ></input> */}
              <DatePicker
                className="banner-input"
                placeholderText="Date"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                monthsShown={2}
              />
              <button className="btn" type="submit">
                <img src={SearchIcon} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerRenter;
