import React from "react";
import "./Dashboard.scss";

import Sidebar from "../Sidebar/Sidebar";
import TotalEarningsCard from "./DashboardCard/DashboardCard";
import money from "../../Assets/money.png";
import tick from "../../Assets/tick.png";
import BookingCard from "./BookingCard/BookingCard";
import MessageIcon from "@mui/icons-material/Message";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import booking from "../../Assets/booking.png";
import message from "../../Assets/messages.PNG";

const Dashboard = () => {
  return (
    <>
      <Sidebar>
        <div className="dashboard-wrapper">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <TotalEarningsCard
                img={tick}
                title="Competed Bookings"
                title1="Booking Requests"
                count={"4"}
                // icons={<CardMembershipIcon fontSize="xl" />}
                icons={booking}
              />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <TotalEarningsCard
                img={money}
                title="Total Earnings"
                title1="Messages"
                count={"6"}
                // icons={<MessageIcon fontSize="xl" />}
                icons={message}
              />
            </div>
            <div className="long-card">My Booking</div>
            <div className="col-sm-12 col-md-8 col-lg-8">
              <div className="booking_card_db">
                <BookingCard />
              </div>

              <div className="booking_card_db">
                <BookingCard />
              </div>
            </div>

            <div className="col-sm-12 col-md-4 col-lg-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi,
              minima.
            </div>
          </div>
        </div>
      </Sidebar>
    </>
  );
};

export default Dashboard;
