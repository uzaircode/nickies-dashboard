import React from 'react';
import styles from '../../ui/dashboard/products/products.module.css';

const Products = () => {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Price</td>
            <td>Stock</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Test</td>
            <td>8.99</td>
            <td>200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Products;
