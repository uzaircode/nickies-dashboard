'use client';

import styles from './chart.module.css';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: '23/1',
    sales: 100,
    amt: 2400,
  },
  {
    name: '24/1',
    sales: 230,
    amt: 2210,
  },
  {
    name: '25/1',
    sales: 370,
    amt: 2290,
  },
  {
    name: '1/2',
    sales: 430,
    amt: 2000,
  },
  {
    name: '2/2',
    sales: 510,
    amt: 2181,
  },
  {
    name: '3/2',
    sales: 622,
    amt: 2500,
  },
  {
    name: '14/2',
    sales: 721,
    amt: 2100,
  },
  {
    name: '15/2',
    sales: 867,
    amt: 2100,
  },
  {
    name: '16/2',
    sales: 992,
    amt: 2100,
  },
  {
    name: '22/2',
    sales: 1023,
    amt: 2100,
  },
  {
    name: '23/2',
    sales: 1134,
    amt: 2100,
  },
  {
    name: '24/2',
    sales: 1234,
    amt: 2100,
  },
];

const Chart = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Sales Statistic</h2>
      <ResponsiveContainer width="100%" height="85%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* <Line
            type="monotone"
            stroke="#f05656"
            activeDot={{ r: 8 }}
          /> */}
          <Line type="monotone" dataKey="sales" stroke="#7559b2" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
