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
            <td>Iced Classic Coffee</td>
            <td>
              <span className={`${styles.backgroundCoffee} ${styles.coffee}`}>
                Coffee
              </span>
            </td>
            <td>RM4.00</td>
            <td>RM15.00</td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Active</span>
            </td>
          </tr>
          <tr>
            <td>Iced Caffe Latte</td>
            <td>
              <span className={`${styles.backgroundCoffee} ${styles.coffee}`}>
                Coffee
              </span>
            </td>
            <td>RM7.50</td>
            <td>RM15.00</td>
            <td>
              <span className={`${styles.backgroundCoffee} ${styles.done}`}>
                Active
              </span>
            </td>
          </tr>
          <tr>
            <td>Iced Caramel Macchiato</td>
            <td>
              <span className={`${styles.backgroundCoffee} ${styles.coffee}`}>
                Coffee
              </span>
            </td>
            <td>RM5.00</td>
            <td>RM15.00</td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Active</span>
            </td>
          </tr>
          <tr>
            <td>Iced Dutch Chocolate</td>
            <td>
              <span
                className={`${styles.backgroundChocolate} ${styles.chocolate}`}
              >
                Chocolate
              </span>
            </td>
            <td>RM5.00</td>
            <td>RM15.00</td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Active</span>
            </td>
          </tr>
          <tr>
            <td>Iced Belgian Chocolate</td>
            <td>
              <span
                className={`${styles.backgroundChocolate} ${styles.chocolate}`}
              >
                Chocolate
              </span>
            </td>
            <td>RM5.00</td>
            <td>RM15.00</td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Active</span>
            </td>
          </tr>
          <tr>
            <td>Iced Valrhona Chocolate</td>
            <td>
              <span
                className={`${styles.backgroundChocolate} ${styles.chocolate}`}
              >
                Chocolate
              </span>
            </td>
            <td>RM5.00</td>
            <td>RM15.00</td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Active</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Products;
