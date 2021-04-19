import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Modal, Row, Select } from 'antd';
import { useHistory } from 'react-router';
import MainLayout from '../../layouts/main.layout';

const CreateInvoicePage = () => {
  let history = useHistory();
  const { confirm } = Modal;

  const handleSubmitClick = () => {
    history.goBack();
  };

  const handleCancelClick = () => {
    confirm({
      title: 'Cancel Invoice',
      content: 'Are you sure you want to cancel? \n\nAll your progress will be lost',
      okText: 'Yes',
      onOk: () => history.goBack(),
    });
  };

  const clients = [
    {
      id: 1,
      contactPerson: 'Simone Elsie Granger',
      organization: 'Loosie Goosie (Pty) Ltd'
    }
  ]

  return (
    <MainLayout
      pageTitle='Create Invoice'
      actions={[
        <Button key={0} type='primary' danger onClick={handleCancelClick}>
          <CloseOutlined />
          Cancel
        </Button>,
        <Button key={1} type='primary' onClick={handleSubmitClick}>
          <CheckOutlined /> Submit
        </Button>,
      ]}>
      <div className='container centered'>
        <Form layout='vertical' style={{ width: '60%' }}>
          <Row gutter={16} justify='space-between'>
            <Col span={6}>
              <Form.Item label='Invoice Number'>
                <Input placeholder='0001' required aria-required />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label='Client'>
                <Select>
                  {clients.map((item) => <Select.Option value={item.id} key={item.id}>{item.organization}</Select.Option>)}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Form.Item label='Description'>
            <Input.TextArea placeholder='Add a description' required aria-required />
          </Form.Item>
        </Form>
      </div>
    </MainLayout>
  );
};

export default CreateInvoicePage;
