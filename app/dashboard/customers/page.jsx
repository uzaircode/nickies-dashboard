import styles from '../../ui/dashboard/customers/customers.module.css';

const Customers = () => {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Active</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>johndoe@gmail.com</td>
            <td>21/2/24</td>
            <td>Admin</td>
            <td>Good</td>
            <td>True</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Customers;
