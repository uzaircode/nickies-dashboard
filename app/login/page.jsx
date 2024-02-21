import styles from '../ui/login/login.module.css';
import Image from 'next/image';

const Login = () => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        src="/nickieslogo.png"
        alt=""
        width="80"
        height="80"
      />

      <form action="#" className={styles.form}>
        <div>
          <h1>Welcome back</h1>
          <h3>Welcome back! Please enter your details.</h3>
        </div>
        <div>
          <h4>Email</h4>
          <input
            type="text"
            placeholder="Enter your username"
            name="username"
          />
        </div>
        <div>
          <h4>Password</h4>
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
          />
        </div>
        <button>Sign in</button>
      </form>
    </div>
  );
};

export default Login;
