import styles from '../ui/dashboard/dashboard.module.css';
import SimpleBarChart from '../ui/dashboard/simplebarchart/simplebarchart';
import Chart from '../ui/dashboard/chart/chart';
import StackedBarChart from '../ui/dashboard/stackedbarchart/stackedbarchart';
import Card from '../ui/dashboard/cards/cards';

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className={styles.nav}>
          <SimpleBarChart />
          <Chart />
        </div>
        <StackedBarChart />
      </div>
    </div>
  );
};

export default Dashboard;
