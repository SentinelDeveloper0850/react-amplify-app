import { useLocation, Link } from 'react-router-dom';
import { routes } from '../../routes';
import {} from 'react-router-dom';
import './style.css';

const NavBar = () => {
  const { pathname } = useLocation();

  return (
    <div className='app-navbar'>
      <ul>
        {routes.map(({ id, name, url, showNavLink = false }: any) => {
          if (showNavLink) {
            return (
              <li key={id} className={pathname === url ? 'active' : ''}>
                <Link to={url}>{name}</Link>
              </li>
            );
          } else return null;
        })}
      </ul>
    </div>
  );
};

export default NavBar;
