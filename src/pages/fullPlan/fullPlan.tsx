import { Link } from "react-router-dom";
import "./fullPlan.css";
import NavBar from "../Navbar/navbar";
import plan from "../../images/plan.png";
import Box from "@mui/material/Box";

const FullPlan = () => {
  // Replace with the actual dimensions of your image
  const YOUR_IMAGE_WIDTH = 4065;
  const YOUR_IMAGE_HEIGHT = 2281;

  // Replace with your desired percentage values
  const desiredTopPercentage = (500 / YOUR_IMAGE_HEIGHT) * 100;
  const desiredLeftPercentage = (500 / YOUR_IMAGE_WIDTH) * 100;

  return (
    <div className="fullPage">
      <div className="navbar">
        <NavBar />{" "}
      </div>

      <Box className="masterPlan">
        <img src={plan} alt="" className="masterPlan" />
        <div key="secondaryClarifierP24">
          <div className="secondaryClarifierP24">
            {/* Your secondaryClarifierP24 content */}
          </div>
        </div>
      </Box>
    </div>
  );
};

export default FullPlan;
