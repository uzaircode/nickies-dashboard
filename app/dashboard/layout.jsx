import styles from '../ui/dashboard/dashboard.module.css';
import Sidebar from '../ui/dashboard/sidebar/sidebar';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}