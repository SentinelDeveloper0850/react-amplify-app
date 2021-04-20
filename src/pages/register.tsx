import { Button, Form, Input, message } from 'antd';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { appName } from '../constants';
import registerImage from '../images/register.svg';
import { isValidEmail } from '../utils/validators';

const RegisterPage = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLoginClick = () => {

    if (!isValidEmail(email)) {
      message.error('A valid email address is required');
    } else if (password === '') {
      message.error('A password is required');
    } else if (confirmPassword !== password) {
      message.error('Passwords do not match');
    } else {
      // TODO: Create user account
      history.replace('/login');
    }
  };

  return (
    <div style={{ width: '100%', height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img src={registerImage} alt='' width='400' height='400' />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: '5rem',
        }}>
        <h1>Welcome to {appName}</h1>
        <h3>Create an account</h3>
        <Form layout='vertical' style={{ width: '100%', marginTop: '1rem', textAlign: 'center' }}>
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
          <Form.Item label='Confirm Password'>
            <Input
              type='password'
              placeholder='*****'
              value={confirmPassword}
              onChange={({ target }) => setConfirmPassword(target.value)}
            />
          </Form.Item>
          <Button type='primary' block style={{ marginBottom: '1rem' }} onClick={handleLoginClick}>
            SIGN UP
          </Button>
          <Link to='/login'>
            <span>Already have an account? Sign in</span>
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default RegisterPage;
