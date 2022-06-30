import React from "react";
import NavbarRenter from "../../HomePageRenterSide/NavbarRenter/NavbarRenter";
import "./RenterFavorites.scss";
import LastFooterRenter from "../../HomePageRenterSide/LastFooterRenter/LastFooterRenter";
import { Link } from "react-router-dom";
import MyDashboardSidebar from "../MyDashboardSidebar/MyDashboardSidebar";
import favoritesimg from "../../../../Assets/RenterImages/boats-detail.png";
import favoritesimgTwo from "../../../../Assets/RenterImages/fav2.png";
import favoritesimgThree from "../../../../Assets/RenterImages/cat1.png";
import Rating from "../../../Dashboard/Rating";
import chatIcon from "../../../../Assets/RenterImages/chat-icon.png";
const RenterFavorites = () => {
  return (
    <>
      <NavbarRenter />
      <div className="renter-main-section">
        <div className="custom-container">
          <div className="my_dsahboard_main">
            <div className="my_dsahboard_inner">
              <MyDashboardSidebar />
              <div className="my_dashboard_detail">
                <div className="my_profile_hed">
                  <h3>Favorites</h3>
                </div>
                <div className="my_dashboard_favorites">
                  <div className="favorites_box_section">
                    <div className="favorits_img">
                      <img src={favoritesimg} />
                      <div className="favorits_count">
                        <div className="favorits_count_num">1/9</div>
                        <div className="favorits_count_icon">
                          <i className="fas fa-heart"></i>
                        </div>
                      </div>
                    </div>
                    <div className="favorites_desc">
                      <div className="favorites_stars">
                        <h3>NYC</h3>
                        <Rating value={4} />
                      </div>
                      <p className="favorites_coutres_name">Cruise</p>
                      <p className="favorites_detail">
                        Up to 8 passengers - No Captain
                      </p>
                      <div className="favorites_book">
                        <Link
                          to="#"
                          className="btn book-now-btn favorite_book_btn"
                        >
                          Request to Book
                        </Link>
                        <h3>$20 per hour</h3>
                      </div>
                    </div>
                  </div>
                  <div className="favorites_box_section">
                    <div className="favorits_img">
                      <img src={favoritesimgTwo} />
                      <div className="favorits_count">
                        <div className="favorits_count_num">1/9</div>
                        <div className="favorits_count_icon">
                          <i className="fas fa-heart"></i>
                        </div>
                      </div>
                    </div>
                    <div className="favorites_desc">
                      <div className="favorites_stars">
                        <h3>NYC</h3>
                        <Rating value={4} />
                      </div>
                      <p className="favorites_coutres_name">Cruise</p>
                      <p className="favorites_detail">
                        Up to 8 passengers - No Captain
                      </p>
                      <div className="favorites_book">
                        <Link
                          to="#"
                          className="btn book-now-btn favorite_book_btn"
                        >
                          Request to Book
                        </Link>
                        <h3>$20 per hour</h3>
                      </div>
                    </div>
                  </div>
                  <div className="favorites_box_section">
                    <div className="favorits_img">
                      <img src={favoritesimgThree} />
                      <div className="favorits_count">
                        <div className="favorits_count_num">1/9</div>
                        <div className="favorits_count_icon">
                          <i className="fas fa-heart"></i>
                        </div>
                      </div>
                    </div>
                    <div className="favorites_desc">
                      <div className="favorites_stars">
                        <h3>NYC</h3>
                        <Rating value={4} />
                      </div>
                      <p className="favorites_coutres_name">Cruise</p>
                      <p className="favorites_detail">
                        Up to 8 passengers - No Captain
                      </p>
                      <div className="favorites_book">
                        <Link
                          to="#"
                          className="btn book-now-btn favorite_book_btn"
                        >
                          Request to Book
                        </Link>
                        <h3>$20 per hour</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <LastFooterRenter />
      </div>
    </>
  );
};

export default RenterFavorites;
