import { PageHeader } from 'antd';

interface Props {
  title: string;
  subtitle?: string;
  actions?: any;
}

const ActionBar = ({ title, subtitle, actions }: Props) => {
  return (
    <PageHeader
      style={{ padding: '1rem' }}
      title={title}
      subTitle={subtitle}
      extra={actions}></PageHeader>
  );
};

export default ActionBar;
