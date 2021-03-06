import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { appName } from '../constants';
import welcomeImage from '../images/welcome.svg';

const HomePage = () => {
  return (
    <div style={{ width: '100%', height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
        <img src={welcomeImage} alt='' width='300' height='300' />
        <h1>Welcome to {appName}</h1>
        <Link to='/login'>
          <Button type='primary' style={{ marginBottom: '1rem' }}>CONTINUE</Button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
