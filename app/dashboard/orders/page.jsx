import styles from '../../ui/dashboard/stocks/stocks.module.css';
import Card from '../../ui/dashboard/cards/cards';

const Orders = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Orders</h2>
        <button className={styles.addButton}>+ Add new</button>
      </div>
      <br />
      <div className={styles.cards}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Order ID</td>
            <td>Date</td>
            <td>Customer</td>
            <td>Payment</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#2343</td>
            <td>19/02/2024</td>
            <td>
              <span>Nabil Ervine</span>
            </td>
            <td>RM15.00</td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Paid</span>
            </td>
          </tr>
          <tr>
            <td>#2342</td>
            <td>12/02/2024</td>
            <td>
              <span>Elina Farah</span>
            </td>
            <td>RM8.00</td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Paid</span>
            </td>
          </tr>
          <tr>
            <td>#2341</td>
            <td>03/01/2024</td>
            <td>
              <span>Daniel Haris</span>
            </td>
            <td>RM24.00</td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Paid</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
