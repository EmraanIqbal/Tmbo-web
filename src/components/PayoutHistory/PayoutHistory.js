import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "../PayoutHistory/PayoutHistory.scss";
import totalpaymet from "../../Assets/RenterImages/total-paymet.png";
import totalReceived from "../../Assets/RenterImages/total-recevied.png";
import paymentmen from "../../Assets/RenterImages/boat1.png";

import { Divider } from "@mui/material";

const PayoutHistory = () => {
  return (
    <>
      <Sidebar>
        <div className="payment_history_main">
          <div className="d-flex flex-wrap">
            <div className="total_box_payment">
              <span>
                <img src={totalpaymet} />
              </span>
              <p>Total Pending</p>
              <h3>$5909405</h3>
            </div>
            <div className="total_box_payment">
              <span>
                <img src={totalReceived} />
              </span>
              <p>Total Received</p>
              <h3>$5909405</h3>
            </div>
          </div>
          <Divider />
          <ul
            className="nav nav-pills mb-3 payment_history_list"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link "
                id="Received-payment-tab"
                data-bs-toggle="pill"
                data-bs-target="#Received-payment"
                type="button"
                role="tab"
                aria-controls="Received-payment"
                aria-selected="true"
              >
                Received payment
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="Pending-payment-tab"
                data-bs-toggle="pill"
                data-bs-target="#Pending-payment"
                type="button"
                role="tab"
                aria-controls="Pending-payment"
                aria-selected="false"
              >
                Pending payment
              </button>
            </li>
          </ul>
          <div
            className="tab-content payment_history_content"
            id="pills-tabContent"
          >
            <div
              className="tab-pane fade"
              id="Received-payment"
              role="tabpanel"
              aria-labelledby="Received-payment-tab"
            >
              <div className="payment_list_box">
                <div className="paymentmen">
                  <img src={paymentmen} />
                </div>
                <p>Experiences</p>
                <p>Diving</p>
                <h3>$29.99</h3>
                <div className="pending_time">
                  <span>Dec 02, 2020</span>
                  <div className="pending_label">Received</div>
                </div>
              </div>
              <div className="payment_list_box">
                <div className="paymentmen">
                  <img src={paymentmen} />
                </div>
                <p>Experiences</p>
                <p>Diving</p>
                <h3>$29.99</h3>
                <div className="pending_time">
                  <span>Dec 02, 2020</span>
                  <div className="pending_label">Received</div>
                </div>
              </div>
              <div className="payment_list_box">
                <div className="paymentmen">
                  <img src={paymentmen} />
                </div>
                <p>Experiences</p>
                <p>Diving</p>
                <h3>$29.99</h3>
                <div className="pending_time">
                  <span>Dec 02, 2020</span>
                  <div className="pending_label">Received</div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade show active"
              id="Pending-payment"
              role="tabpanel"
              aria-labelledby="Pending-payment-tab"
            >
              <div className="payment_list_box">
                <div className="paymentmen">
                  <img src={paymentmen} />
                </div>
                <p>Experiences</p>
                <p>Diving</p>
                <h3>$29.99</h3>
                <div className="pending_time">
                  <span>Dec 02, 2020</span>
                  <div className="pending_label">Pending</div>
                </div>
              </div>
              <div className="payment_list_box">
                <div className="paymentmen">
                  <img src={paymentmen} />
                </div>
                <p>Experiences</p>
                <p>Diving</p>
                <h3>$29.99</h3>
                <div className="pending_time">
                  <span>Dec 02, 2020</span>
                  <div className="pending_label">Pending</div>
                </div>
              </div>
              <div className="payment_list_box">
                <div className="paymentmen">
                  <img src={paymentmen} />
                </div>
                <p>Experiences</p>
                <p>Diving</p>
                <h3>$29.99</h3>
                <div className="pending_time">
                  <span>Dec 02, 2020</span>
                  <div className="pending_label">Pending</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Sidebar>
    </>
  );
};

export default PayoutHistory;
