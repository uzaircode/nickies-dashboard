import styles from './sidebar.module.css';
import MenuLink from './menuLink/menuLink';
import Image from 'next/image';
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdInventory,
  MdLogout,
} from 'react-icons/md';

const menuItems = [
  {
    list: [
      {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <MdDashboard />,
      },
      {
        title: 'Customers',
        path: '/dashboard/customers',
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: 'Products',
        path: '/dashboard/products',
        icon: <MdShoppingBag />,
      },
      {
        title: 'Stocks',
        path: '/dashboard/stocks',
        icon: <MdInventory />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <button className={styles.logout}>
        <MdLogout /> Logout
      </button>
    </div>
  );
};

export default Sidebar;
