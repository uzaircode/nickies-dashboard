import styles from '../ui/dashboard/dashboard.module.css';
import SimpleBarChart from '../ui/dashboard/simplebarchart/simplebarchart';
import Chart from '../ui/dashboard/chart/chart';
import StackedBarChart from '../ui/dashboard/stackedbarchart/stackedbarchart';

const Dashboard = () => {
  return (
    <div className={styles.main}>
      <div className={styles.nav}>
        <SimpleBarChart />
        <Chart />
      </div>
      <StackedBarChart />
    </div>
  );
};

export default Dashboard;
