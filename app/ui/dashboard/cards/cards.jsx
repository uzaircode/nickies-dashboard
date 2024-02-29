import styles from './cards.module.css';

const Card = (props) => {
  const { icon, title, number, percentage, description } = props;

  return (
    <div className={styles.container}>
      {/* <MdSupervisedUserCircle size={24} /> */}
      {icon}
      <div className={styles.details}>
        <span className={styles.title}>{title}</span>
        <div className={styles.item}>
          <span className={styles.number}>{number}</span>
          <div className={styles.percentage}>
            <span className={styles.positive}>{percentage}</span>
          </div>
        </div>
        <span className={styles.previous}>{description}</span>
      </div>
    </div>
  );
};

export default Card;
