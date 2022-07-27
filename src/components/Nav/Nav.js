import { NavLink } from 'react-router-dom';
import { useAuthContext } from '../../features';

import styles from './Nav.module.css';

export function Nav() {
  const { user, logout } = useAuthContext();

  return (
    <nav className={styles['main-menu']}>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : '')}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : '')}
            to="/counter"
          >
            Counter
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : '')}
            to="/weather"
          >
            Weather
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : '')}
            to="/movies"
          >
            Movies
          </NavLink>
        </li>

        {user && (
          <li className={styles['push-right']}>
            Welcome, {user.firstName}!{' '}
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                logout();
              }}
            >
              Logout
            </a>
          </li>
        )}

        {!user && (
          <>
            <li className={styles['push-right']}>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : '')}
                to="/login"
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : '')}
                to="/register"
              >
                Register
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
