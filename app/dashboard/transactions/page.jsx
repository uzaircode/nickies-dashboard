import styles from '../../ui/dashboard/stocks/stocks.module.css';
import Card from '../../ui/dashboard/cards/cards';

const Transactions = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Transactions</h2>
        <button className={styles.addButton}>+ Add new</button>
      </div>
      <br />
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Payment ID</td>
            <td>Date</td>
            <td>Amount</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#1430</td>
            <td>12/1/2024</td>
            <td>RM32.00</td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>
                Completed
              </span>
            </td>
          </tr>
          <tr>
            <td>#1430</td>
            <td>10/1/2024</td>
            <td>RM64.00</td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>
                Completed
              </span>
            </td>
          </tr>
          <tr>
            <td>#1430</td>
            <td>02/1/2024</td>
            <td>RM23.00</td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>
                Completed
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
