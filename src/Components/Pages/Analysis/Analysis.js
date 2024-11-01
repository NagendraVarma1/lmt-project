import Card from "../../UI/Card/Card";
import Navbar from "../Navbar/Navbar";
import classes from './Analysis.module.css';


const Analysis = () => {
    return (
        <div className={classes.mainDiv}>
            <Navbar />
            <div className={classes.wrapper}>
                <h1>ANALYTICS</h1>
                <div>
                    <Card>
                        <div>Users</div>
                        <div>140</div>
                    </Card>
                    <Card>
                        <div>Refferal Users</div>
                        <div>64</div>
                    </Card>
                    <Card>
                        <div>Today's Organic Users</div>
                        <div>76</div>
                    </Card>
                    <Card>
                        <div>This Week Users</div>
                        <div>679</div>
                    </Card>
                    <Card>
                        <div>This Month Users</div>
                        <div>22727</div>
                    </Card>
                    <Card>
                        <div>Last Month Users</div>
                        <div>71291</div>
                    </Card>
                </div>
            </div>
            
        </div>
    )
}

export default Analysis;