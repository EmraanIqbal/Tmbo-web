import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";

import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const DashboardCard = (props) => {
  const { img, title, title1, count, icons } = props;
  console.log(props);
  return (
    <div className="dashboard-card-wrapper">
      <Card
        className="dash_cards"
        sx={{
          minWidth: 275,
          background: "#f9f9fb",
          marginTop: 5,
        }}
      >
        <CardContent style={{ padding: "20px 30px" }}>
          {/* <img src={img} alt="not found" height={50} /> */}
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Badge badgeContent={count} color="error">
              {/* {icons} */}
              <img
                src={icons}
                alt="not found"
                width="50px"
                height="50px"
                style={{ objectFit: "cover" }}
              />
            </Badge>
          </IconButton>
          <Typography
            variant="h6"
            // className="my-3"
            component="div"
            style={{ color: "#5A5E7C" }}
          >
            {title1}
          </Typography>

          {/* <div>
            <Box sx={{ flexGrow: 1 }}>
              {title === "Booking Requests" ? (
                <BorderLinearProgress
                  variant="determinate"
                  value={25}
                  style={{ background: "#DCE7F7" }}
                />
              ) : (
                <BorderLinearProgressTwo
                  variant="determinate"
                  value={60}
                  style={{ background: "#D8FDD5" }}
                />
              )}

              {title === "Messages" ? (
                <div
                  className="mt-3"
                  style={{
                    fontWeight: "bold",
                    fontSize: "20px",
                    color: "#544D56",
                  }}
                >
                  50
                </div>
              ) : (
                <div
                  className="mt-3"
                  style={{
                    fontWeight: "bold",
                    fontSize: "20px",
                    color: "#544D56",
                  }}
                >
                  $70,00,000
                </div>
              )}
            </Box>
          </div> */}
        </CardContent>
      </Card>

      <Card
        className="dash_cards"
        sx={{
          minWidth: 275,
          background: "#f9f9fb",
          marginTop: 5,
        }}
      >
        <CardContent style={{ padding: "20px 30px" }}>
          <img src={img} alt="not found" height={50} />
          <Typography
            variant="h6"
            className="my-3"
            component="div"
            style={{ color: "#5A5E7C" }}
          >
            {title}
          </Typography>
          <div>
            <Box sx={{ flexGrow: 1 }}>
              {title === "Competed Bookings" ? (
                <BorderLinearProgress
                  variant="determinate"
                  value={25}
                  style={{ background: "#DCE7F7" }}
                />
              ) : (
                <BorderLinearProgressTwo
                  variant="determinate"
                  value={60}
                  style={{ background: "#D8FDD5" }}
                />
              )}

              {title === "Competed Bookings" ? (
                <div
                  className="mt-3"
                  style={{
                    fontWeight: "bold",
                    fontSize: "20px",
                    color: "#544D56",
                  }}
                >
                  50
                </div>
              ) : (
                <div
                  className="mt-3"
                  style={{
                    fontWeight: "bold",
                    fontSize: "20px",
                    color: "#544D56",
                  }}
                >
                  $70,00,000
                </div>
              )}
            </Box>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardCard;

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#4581DD" : "#4581DD",
  },
}));

const BorderLinearProgressTwo = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#75E76B" : "#75E76B",
  },
}));
