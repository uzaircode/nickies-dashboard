import styles from './sidebar.module.css';
import MenuLink from './menuLink/menuLink';
import Image from 'next/image';
import {
  MdDashboard,
  MdPerson,
  MdShoppingBag,
  MdInventory,
} from 'react-icons/md';

const menuItems = [
  {
    list: [
      {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <MdDashboard size={23} />,
      },
      {
        title: 'Customers',
        path: '/dashboard/customers',
        icon: <MdPerson size={23} />,
      },
      {
        title: 'Products',
        path: '/dashboard/products',
        icon: <MdShoppingBag size={23} />,
      },
      {
        title: 'Stocks',
        path: '/dashboard/stocks',
        icon: <MdInventory size={23} />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src="/nickieslogo.png" alt="" width="50" height="50" />
        <span className={styles.name}>Nickies</span>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
