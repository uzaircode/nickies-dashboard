import { MdSearch } from 'react-icons/md';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Dashboard</div>
      <div className={styles.menu}>
        <MdSearch />
      </div>
    </div>
  );
};

export default Navbar;
