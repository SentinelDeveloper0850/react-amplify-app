import { Button, Form, Input, message } from 'antd';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { appName } from '../constants';
import registerImage from '../images/register.svg';
import verifyImage from '../images/verify.svg';
import { isValidEmail } from '../utils/validators';
import { Auth } from 'aws-amplify';

const RegisterPage = () => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mode, setMode] = useState('SIGN_UP');
  const [code, setCode] = useState('');
  // const [cognitoUser, setCognitoUser] = useState({});

  async function signUp() {
    try {
      const { user } = await Auth.signUp({
        username: email,
        password,
        attributes: {
          given_name: name,
          email, // optional
          phone_number: phone,
        },
      });
      setMode('CONFIRM_SIGN_UP');
      console.log(user);
      // setCognitoUser(user);
    } catch (error) {
      console.log('error signing up:', error);
      message.error(error.message);
    }
  }
  
  async function confirmSignUp() {
    try {
      await Auth.confirmSignUp(email, code);
      history.replace('/login');
    } catch (error) {
      console.log('error confirming sign up', error);
      message.error(error.message);
    }
  }
  
  async function resendConfirmationCode() {
    try {
      await Auth.resendSignUp(email);
      message.info('Code resent successfully');
      console.log('code resent successfully');
    } catch (error) {
      console.log('error resending code: ', error);
      message.error(error.message);
    }
  }

  const handleRegisterClick = () => {
    if (!isValidEmail(email)) {
      message.error('A valid email address is required');
    } else if (password === '') {
      message.error('A password is required');
    } else if (confirmPassword !== password) {
      message.error('Passwords do not match');
    } else {
      signUp();
    }
  };

  return (
    <div style={{ width: '100%', height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {mode === 'SIGN_UP' ? (
        <>
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
              <Form.Item label='Full Names'>
                <Input
                  type='text'
                  placeholder='Curtis Jackson'
                  value={name}
                  onChange={({ target }) => setName(target.value)}
                />
              </Form.Item>
              <Form.Item label='Email Address'>
                <Input
                  type='email'
                  placeholder='cjackson@quotely.com'
                  value={email}
                  onChange={({ target }) => setEmail(target.value)}
                />
              </Form.Item>
              <Form.Item label='Phone Number'>
                <Input
                  type='tel'
                  placeholder='+27846853064'
                  value={phone}
                  onChange={({ target }) => setPhone(target.value)}
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
              <Button type='primary' block style={{ marginBottom: '1rem' }} onClick={handleRegisterClick}>
                SIGN UP
              </Button>
              <Link to='/login'>
                <span>Already have an account? Sign in</span>
              </Link>
            </Form>
          </div>
        </>
      ) : mode === 'CONFIRM_SIGN_UP' ? (
        <>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: '5rem',
              textAlign: 'center',
            }}>
            <img src={verifyImage} alt='' width='250' height='250' />
            <h1>Welcome to {appName}</h1>
            <h3>Almost there! Verify your account</h3>
            <p>
              An sms with a verification code has been sent to the number you provided.
              <br />
              Please enter it below to verify your account.
            </p>
            <Form layout='vertical' style={{ width: '100%', marginTop: '1rem', textAlign: 'center' }}>
              <Form.Item label='Email Address'>
                <Input
                  type='email'
                  placeholder='cjackson@quotely.com'
                  value={email}
                  onChange={({ target }) => setEmail(target.value)}
                />
              </Form.Item>
              <Form.Item label='Verification Code'>
                <Input
                  type='number'
                  placeholder='503641'
                  value={code}
                  onChange={({ target }) => setCode(target.value)}
                />
              </Form.Item>
              <Button type='primary' block style={{ marginBottom: '1rem' }} onClick={confirmSignUp}>
                VERIFY
              </Button>
              <Button type='link' onClick={resendConfirmationCode}>
                Didn't get the sms? Resend
              </Button>
            </Form>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default RegisterPage;
