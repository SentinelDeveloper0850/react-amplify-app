import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages';
import DashboardPage from './pages/dashboard';
import ProfilePage from './pages/profile';
import QuotationsPage from './pages/quotations';
import InvoicesPage from './pages/invoices';
import ReceiptsPage from './pages/receipts';
import CreateInvoicePage from './pages/invoices/create';
import LoginPage from './pages/login';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import RegisterPage from './pages/register';

Amplify.configure(awsconfig);

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path='/dashboard'>
            <DashboardPage />
          </Route>
          <Route path='/login'>
            <LoginPage />
          </Route>
          <Route path='/register'>
            <RegisterPage />
          </Route>
          <Route path='/quotations'>
            <QuotationsPage />
          </Route>
          <Route path='/invoices/create'>
            <CreateInvoicePage />
          </Route>
          <Route path='/invoices'>
            <InvoicesPage />
          </Route>
          <Route path='/receipts'>
            <ReceiptsPage />
          </Route>
          <Route path='/profile'>
            <ProfilePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
