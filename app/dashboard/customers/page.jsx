import styles from '../../ui/dashboard/customers/customers.module.css';
import Card from '../../ui/dashboard/cards/cards';

const Customers = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Customers</h2>
        <button className={styles.addButton}>+ Add new</button>
      </div>
      <br />
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Customer Name</td>
            <td>Location</td>
            <td>Phone</td>
            <td>Total Orders</td>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>Nik Uzair</td>
            <td>Pengkalan Chepa</td>
            <td>+6018 900 2414</td>
            <td>14</td>
          </tr>
          <tr>
            <td>Aminah Jalil</td>
            <td>Kubang Kerian</td>
            <td>+6012 345 6789</td>
            <td>22</td>
          </tr>
          <tr>
            <td>Faris Rahman</td>
            <td>Bandar Baru Uda</td>
            <td>+6019 876 5432</td>
            <td>18</td>
          </tr>
          <tr>
            <td>Siti Khadijah</td>
            <td>Wakaf Che Yeh</td>
            <td>+6011 223 3445</td>
            <td>27</td>
          </tr>
          <tr>
            <td>Mohd Izham</td>
            <td>Peringat</td>
            <td>+6017 998 8776</td>
            <td>35</td>
          </tr>
          <tr>
            <td>Nurul Huda</td>
            <td>Kota Sri Mutiara</td>
            <td>+6014 665 7889</td>
            <td>29</td>
          </tr>
          <tr>
            <td>Azizul Hakim</td>
            <td>Telipot</td>
            <td>+6011 2929 3747</td>
            <td>15</td>
          </tr>
          <tr>
            <td>Halimah Yusof</td>
            <td>Padang Garong</td>
            <td>+6013 3456 7890</td>
            <td>33</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default Customers;
