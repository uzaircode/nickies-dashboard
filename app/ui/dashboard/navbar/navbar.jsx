'use client';
import styles from './navbar.module.css';
import Image from 'next/image';
import { MdSearch, MdOutlineBedtime } from 'react-icons/md';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <MdSearch size={25} className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Search (Ctrl+/)"
          className={styles.input}
        />
      </div>
      <div className={styles.icons}>
        <MdOutlineBedtime size={25} />
        <Image
          className={styles.userImage}
          src="/fadhil.jpg"
          alt=""
          width="50"
          height="50"
        />
      </div>
    </div>
  );
};

export default Navbar;
