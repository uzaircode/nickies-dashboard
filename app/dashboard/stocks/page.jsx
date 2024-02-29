import styles from '../../ui/dashboard/stocks/stocks.module.css';
import Card from '../../ui/dashboard/cards/cards';

const Stocks = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Stocks</h2>
        <button className={styles.addButton}>+ Add new</button>
      </div>
      <br />
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Stock Name</td>
            <td>Brand</td>
            <td>Category</td>
            <td>Cost</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fresh Milk</td>
            <td>Yarra</td>
            <td>
              <span>Condiment</span>
            </td>
            <td>RM15.00</td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>
                In Stock
              </span>
            </td>
          </tr>
          <tr>
            <td>French Vanilla</td>
            <td>Monin</td>
            <td>
              <span>Condiment</span>
            </td>
            <td>RM22.50</td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>
                In Stock
              </span>
            </td>
          </tr>
          <tr>
            <td>Callebaut Cocoa</td>
            <td>Universelle Extra Brute</td>
            <td>Powder</td>
            <td>RM45.00</td>
            <td>
              <span className={`${styles.statusDecline} ${styles.decline}`}>
                Out of Stock
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Stocks;
