import plan from "../../images/plan.png";
import { Link } from "react-router-dom";

import "./fullPlan.css";
import NavBar from "../Navbar/navbar";
import { locations } from "../../constants/constant";
import { Box } from "@mui/material";

const FullPlan = () => {
  return (
    <div className="fullPage">
      <div className="navbar">
        <NavBar />{" "}
      </div>

      <Box
        className="masterPlan"
        sx={{
          mt: { xs: 28, sm: 8, md: 6, lg: -1 },
          transform: { xs: "rotate(-90deg) scale(1.4)", sm: "rotate(0deg)" },
        }}
      >
        <img
          src={plan}
          alt=""
          className="masterPlan"
          style={{ transform: "scale(.9)" }}
        />
        {locations.map((i: any) => (
          <div key={i}>
            <Link to={`../${i}`} className={i}></Link>
            <div className={"name-" + i}>
              <i>
                <b>
                  <u>{i}</u>
                </b>
              </i>
            </div>
          </div>
        ))}
      </Box>
    </div>
  );
};

export default FullPlan;
