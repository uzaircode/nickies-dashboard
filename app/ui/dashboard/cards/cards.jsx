import styles from './cards.module.css';
import { MdSupervisedUserCircle } from 'react-icons/md';

const Card = () => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.details}>
        <span className={styles.title}>Sales</span>
        <div className={styles.item}>
          <span className={styles.number}>RM4950</span>
          <span className={styles.positive}>+4.2%</span>
        </div>
        <span className={styles.previous}>Compared to (RM3384 last month)</span>
      </div>
    </div>
  );
};

export default Card;
