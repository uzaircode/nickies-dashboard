import styles from '../../ui/dashboard/stocks/stocks.module.css';
const Stocks = () => {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Category</td>
            <td>Cost per Unit</td>
            <td>Supplier</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sin Boon Kee</td>
            <td>Sauce</td>
            <td>8.20</td>
          </tr>
          <tr>
            <td>Marigold</td>
            <td>Sauce</td>
            <td>8.20</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Stocks;
