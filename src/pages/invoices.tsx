import { PlusOutlined } from '@ant-design/icons';
import { Button, Table, Tag } from 'antd';
import moment from 'moment';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/main.layout';
import { formatToMoneyWithCurrency } from '../utils/formats';

const InvoicesPage = () => {
  const columns = [
    {
      title: 'Description',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Client',
      dataIndex: 'client',
      key: 'client',
    },
    {
      title: 'Expires in',
      dataIndex: 'expiresOn',
      key: 'expiresOn',
      render: (text: any) => {
        const diff = moment(text).diff(moment(), 'days');

        if (diff < 0) return <Tag color='error'>{moment(text).add(1, 'day').fromNow()}</Tag>;

        if (diff === 0) return <Tag color='warning'>{moment(text).add(1, 'day').fromNow()}</Tag>;

        return <Tag color='success'>{moment(text).add(1, 'day').fromNow()}</Tag>;
      },
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (text: any) => <span>{formatToMoneyWithCurrency(text)}</span>,
    },
  ];

  const dataSource = [
    {
      id: '1',
      name: 'Travel & Tourism eCommerce website with CMS',
      client: 'Peter Simangolwa - Tawuo Tours',
      expiresOn: '01 Mar 2021',
      amount: 76400,
    },
    {
      id: '2',
      name: 'Property Home Loans verification system',
      client: 'Property Home Loans',
      expiresOn: '19 Apr 2021',
      amount: 43420.8,
    },
    {
      id: '3',
      name: 'Quotely - Invoicing System',
      client: 'Binay Digital',
      expiresOn: '30 Apr 2021',
      amount: 36000,
    },
  ];

  return (
    <MainLayout
      pageTitle='Invoices'
      actions={[
        <Link to='/invoices/create'>
          <Button type='primary'>
            <PlusOutlined /> Create
          </Button>
        </Link>,
      ]}>
      <Table size='small' columns={columns} dataSource={dataSource} rowKey={(record) => record.id} />
    </MainLayout>
  );
};

export default InvoicesPage;
