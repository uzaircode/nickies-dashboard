import styles from '../ui/dashboard/dashboard.module.css';
import SimpleBarChart from '../ui/dashboard/simplebarchart/simplebarchart';
import Chart from '../ui/dashboard/chart/chart';
import StackedBarChart from '../ui/dashboard/stackedbarchart/stackedbarchart';
import Card from '../ui/dashboard/cards/cards';
import Piechart from '../ui/dashboard/piechart/piechart';
import { MdAttachMoney } from 'react-icons/md';

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card
            icon={<MdAttachMoney size={30} />}
            title="Sales"
            number="RM4950"
            percentage=""
            description=""
          />
          <Card
            icon={<MdAttachMoney size={30} />}
            title="Profit"
            number="RM4950"
            percentage=""
            description=""
          />
        </div>
        <Chart />
        <Chart />
        <div className={styles.nav}>
          <Piechart />
          <SimpleBarChart />
        </div>
        <StackedBarChart />
        <div></div>
      </div>
    </div>
  );
};

export default Dashboard;
