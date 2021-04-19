import { appName } from '../../constants';
import { ExclamationCircleOutlined, UserOutlined } from '@ant-design/icons';
import './style.css';
import { Avatar, Dropdown, Menu, Modal } from 'antd';
// import { Auth } from 'aws-amplify';

const { confirm } = Modal;

const Header = ({ username }: any) => {

  const handleSignOut = async () => {
    confirm({
      title: 'Sign Out',
      icon: <ExclamationCircleOutlined />,
      content: 'Are you sure you want to Sign Out?',
      onOk() {
        // Auth.signOut();
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  const menu = (
    <Menu>
      <Menu.Item danger onClick={handleSignOut}>
        Sign Out
      </Menu.Item>
    </Menu>
  );

  return (
    <div className='app-header'>
      <div className='brand'>
        <span>{appName}</span>
      </div>
      <div className='account'>
        <span className='username'>
          {username}{' '}
          <Dropdown overlay={menu}>
            <Avatar size='small' style={{ backgroundColor: '#ffffff', color: '#454545' }} icon={<UserOutlined />} />
          </Dropdown>
        </span>
      </div>
    </div>
  );
}

export default Header;
