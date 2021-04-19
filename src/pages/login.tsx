import { Button, Form, Input, message } from 'antd';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { appName } from '../constants';
import loginImage from '../images/login.svg';
import { isValidEmail } from '../utils/validators';

const LoginPage = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = () => {

    if (!isValidEmail(email)) {
      message.error('A valid email address is required');
    } else if (password === '') {
      message.error('A password is required');
    } else {
      // TODO: Authenticate user
      // TODO: Create session
      history.replace('/dashboard');
    }
  };

  return (
    <div style={{ width: '100%', height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h1>Welcome to {appName}</h1>
        <img src={loginImage} alt='' width='300' height='300' />
        <h3>Sign in to your account</h3>
        <Form layout='vertical' style={{ width: '100%', marginTop: '1rem' }}>
          <Form.Item label='Email Address'>
            <Input
              type='email'
              placeholder='kevinm@quotely.com'
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
          </Form.Item>
          <Form.Item label='Password'>
            <Input
              type='password'
              placeholder='*****'
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
          </Form.Item>
          <Button type='primary' block onClick={handleLoginClick}>
            SIGN IN
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
