import Card from "../../UI/Card/Card";
import Navbar from "../Navbar/Navbar";
import classes from "./Analysis.module.css";
import { LuUsers2 } from "react-icons/lu";
import { HiSpeakerphone } from "react-icons/hi";
import { PiUserSwitchFill } from "react-icons/pi";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { lineChartData } from "../../../Assests/data";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Analysis = () => {
    const options = {
        responsive: true,
        maintainAspectRatio: false
    };

  return (
    <div className={classes.mainDiv}>
      <Navbar />
      <div className={classes.wrapper}>
        <h1>ANALYTICS</h1>
        <div className={classes.cardDiv}>
          <Card>
            <div>
              <LuUsers2 className={classes.icon1} />
              Users
            </div>
            <h3 className={classes.count1}>140</h3>
          </Card>
          <Card>
            <div>
              <HiSpeakerphone className={classes.icon2} />
              Refferal Users
            </div>
            <h3 className={classes.count2}>64</h3>
          </Card>
          <Card>
            <div>
              <HiSpeakerphone className={classes.icon1} />
              Today's Organic Users
            </div>
            <h3 className={classes.count1}>76</h3>
          </Card>
          <Card>
            <div>
              <PiUserSwitchFill className={classes.icon2} />
              This Week Users
            </div>
            <h3 className={classes.count2}>679</h3>
          </Card>
          <Card>
            <div>
              <PiUserSwitchFill className={classes.icon2} />
              This Month Users
            </div>
            <h3 className={classes.count2}>22727</h3>
          </Card>
          <Card>
            <div>
              <PiUserSwitchFill className={classes.icon2} />
              Last Month Users
            </div>
            <h3 className={classes.count2}>71291</h3>
          </Card>
        </div>
        <div className={classes.lineChartDiv}>
            <Line className={classes.lineChart} options={options} data={lineChartData}/>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
