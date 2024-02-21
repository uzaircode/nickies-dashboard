import styles from '../../ui/dashboard/products/products.module.css';
import Card from '../../ui/dashboard/cards/cards';

const Products = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Products</h2>
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
            <td>Product Name</td>
            <td>Category</td>
            <td>Cost</td>
            <td>Price</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Coffee Krim</td>
            <td>
              <span>Coffee</span>
            </td>
            <td>RM4.00</td>
            <td>RM15.00</td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Active</span>
            </td>
          </tr>
          <tr>
            <td>Coffee Premium </td>
            <td>
              <span>Coffee</span>
            </td>
            <td>RM7.50</td>
            <td>RM15.00</td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Active</span>
            </td>
          </tr>
          <tr>
            <td>Chocolate alabasmata</td>
            <td>Chocolate</td>
            <td>RM5.00</td>
            <td>RM15.00</td>
            <td>
              <span className={`${styles.statusDecline} ${styles.decline}`}>
                Inactive
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Products;
